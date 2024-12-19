import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (params) => ({
        url: "/users",
        params,
      }),
      providesTags: ["Users"],
    }),

    getUser: builder.mutation({
      query: () => ({
        url: "/getuser",
        method: "POST",
      }),
      //   providesTags: ["GetUser"],
    }),

    createUser: builder.mutation({
      query: (newUser) => ({
        url: "/auth/register",
        method: "POST",
        body: newUser,
      }),
    }),

    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response) => {
        // Assuming the token is in response.token
        localStorage.setItem("token", response.token);
        return response;
      },
      //   invalidatesTags: ["GetUser"],
    }),

    updateUser: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Users", id },
        "Users",
      ],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserMutation,
  useUpdateUserMutation,
  useCreateUserMutation,
  useLoginUserMutation,
} = userApi;
