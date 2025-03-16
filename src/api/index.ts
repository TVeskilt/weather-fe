import axios from "axios";

export * from "./types";

export const API_URL = String(import.meta.env.VITE_API_BASE_URL);

const axiosInstance = axios.create({ baseURL: API_URL });

export const fetcher = (url: string) => axiosInstance.get(url).then((res) => res);

export default axiosInstance;
