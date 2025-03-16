import useSWR from "swr";
import { fetcher } from "src/api/index.ts";
import { CityTemperature } from "src/api/city-temperature/types.ts";
import { PaginatedRequest, PaginatedResponse } from "src/api/types.ts";

export const useCityTemperatures = (req: PaginatedRequest | null) => {
  const params = req ? new URLSearchParams(req).toString() : "";

  const { data, error, mutate } = useSWR<PaginatedResponse<CityTemperature>>(
    req ? `/city-temperature?${params}` : null,
    fetcher
  );

  return {
    cityTemperatures: data?.data?.content ?? [],
    count: data?.data?.totalElements ?? 0,
    mutate,
    isLoading: !error && !data && req !== null,
    isError: error,
  };
};
