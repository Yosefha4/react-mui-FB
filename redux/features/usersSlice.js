import { apiSlice } from "./apiSlice";

export const extendedUsersSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
    }),
  }),
});

export const { useGetUsersQuery } = extendedUsersSlice;
