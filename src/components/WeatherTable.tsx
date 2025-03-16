import { DataGrid, GridColDef, GridPaginationModel, GridSortModel } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Grid2 as Grid } from "@mui/material";
import { CityTemperature } from "../api/city-temperature/types.ts";
import { useCityTemperatures } from "../api/city-temperature";
import { SortDirection } from "../api";

export interface RowState<T> {
  page: number;
  pageSize: number;
  rows: T;
  loading: boolean;
  rowCount: number;
  sortBy: GridSortModel;
}

const WeatherTable = () => {
  const [rowsState, setRowsState] = useState<RowState<CityTemperature[]>>({
    page: 0,
    pageSize: 5,
    rows: [],
    loading: false,
    rowCount: 0,
    sortBy: [{ field: "cityName", sort: "asc" }],
  });

  const { cityTemperatures, isLoading, count } = useCityTemperatures({
    page: rowsState.page,
    pageSize: rowsState.pageSize,
    sortBy: rowsState.sortBy[0].field,
    direction: rowsState.sortBy[0].sort as SortDirection,
  });

  useEffect(() => {
    if (isLoading) {
      setRowsState((prev) => ({ ...prev, loading: true }));
    }
    if (!isLoading) {
      setRowsState((prev) => ({
        ...prev,
        loading: false,
        rows: cityTemperatures,
        rowCount: count,
      }));
    }
  }, [cityTemperatures, isLoading, count]);

  const columns: GridColDef[] = [
    {
      field: "cityName",
      headerName: "City",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "temperature",
      headerName: "Temperature",
      flex: 1,
      minWidth: 100,
    },
  ];
  return (
    <Grid>
      <DataGrid
        columns={columns}
        rows={rowsState.rows}
        rowCount={rowsState.rowCount}
        paginationMode="server"
        pageSizeOptions={[5, 10, 20]}
        sortingMode="server"
        sortingOrder={["asc", "desc"]}
        disableColumnFilter
        disableColumnMenu
        initialState={{
          sorting: {
            sortModel: [{ field: "cityName", sort: "asc" }],
          },
        }}
        onSortModelChange={(sortBy) => setRowsState((prev: RowState<CityTemperature[]>) => ({ ...prev, sortBy }))}
        paginationModel={{ page: rowsState.page, pageSize: rowsState.pageSize }}
        onPaginationModelChange={(model: GridPaginationModel) =>
          setRowsState((prev: RowState<CityTemperature[]>) => ({ ...prev, ...model }))
        }
      />
    </Grid>
  );
};

export default WeatherTable;
