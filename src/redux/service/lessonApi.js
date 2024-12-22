import { baseApi } from "./baseApi";

export const lessonApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Define your endpoints here
    getLessons: builder.query({
      query: () => "/lessons",
    }),
    getLessonsByAdmin: builder.query({
      query: () => "/admin/lessons",
      providesTags: ["AdminLessons"],
    }),
    getLessonById: builder.query({
      query: (id) => `/lessons/${id}`,
    }),
    createLesson: builder.mutation({
      query: (lesson) => ({
        url: "/lessons",
        method: "POST",
        body: lesson,
      }),
      invalidatesTags: ["AdminLessons"],
    }),
    updateLesson: builder.mutation({
      query: ({ id, ...lesson }) => ({
        url: `/lessons/${id}`,
        method: "PUT",
        body: lesson,
      }),
    }),
    deleteLesson: builder.mutation({
      query: (id) => ({
        url: `/lessons/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetLessonsQuery,
  useGetLessonsByAdminQuery,
  useGetLessonByIdQuery,
  useCreateLessonMutation,
  useUpdateLessonMutation,
  useDeleteLessonMutation,
} = lessonApi;
