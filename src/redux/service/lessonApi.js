import { baseApi } from "./baseApi";

export const lessonApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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
        url: `/admin/lessons/${id}`,
        method: "PATCH",
        body: lesson,
      }),
      invalidatesTags: ["AdminLessons"],
    }),
    deleteLesson: builder.mutation({
      query: (id) => ({
        url: `/admin/lessons/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["AdminLessons"],
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
