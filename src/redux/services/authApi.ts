import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type User = {
  id: number;
  email: string;
  password: string;
};

export const authApi = createApi({
    reducerPath: "authApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: "localhost:5000/api/auth/login",
    }),
    endpoints: (builder) => ({
        login: (email: string, password: string) => ({

            method: "POST",

        }),
    }),
});