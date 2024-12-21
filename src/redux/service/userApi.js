import { loginFailure, loginStart, loginSuccess } from "../slices/userSlice";
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

    createUser: builder.mutation({
      query: (newUser) => ({
        url: "/auth/register",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["Users"],
    }),

    getUser: builder.mutation({
      query: () => ({
        url: "/getuser",
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        dispatch(loginStart());
        try {
          const { data } = await queryFulfilled;
          data?.success
            ? dispatch(loginSuccess(data.user))
            : dispatch(loginFailure({ error: data?.message }));
        } catch (error) {
          const errorMessage = error?.error?.data?.msg || "An error occurred";
          dispatch(loginFailure({ error: errorMessage }));
          console.error("GetUser Error:", error);
        }
      },
      providesTags: ["GetUser"],
    }),

    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response) => {
        if (response?.token) {
          localStorage.setItem("token", response.token);
        }
        return response;
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data?.token) {
            await dispatch(baseApi.endpoints.getUser.initiate()).unwrap();
          }
        } catch (error) {
          console.error("Authentication Error:", error);
        }
      },
      invalidatesTags: ["GetUser"],
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
