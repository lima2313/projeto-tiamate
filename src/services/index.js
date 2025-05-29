import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const AXIOS = axios.create({
    baseURL: "http://localhost:4000"
    // baseURL: "https://api.reforcodev.com"
});

export const queryClient = new QueryClient();