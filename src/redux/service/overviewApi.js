import { baseApi } from "./baseApi";

export const overviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOverview: builder.query({
      query: () => "/admin/overview",
    }),
    providesTags: ["AdminLessons", "AdminVocabularies", "AdminTutorials"],
  }),
});

export const { useGetOverviewQuery } = overviewApi;
