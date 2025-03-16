import useSWR from "swr";
import { CityTemperature } from "./types.ts";
import { PaginatedRequest, PaginatedResponse } from "../types.ts";
import { fetcher } from "../index.ts";

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
