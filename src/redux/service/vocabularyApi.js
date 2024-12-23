import { baseApi } from "./baseApi";

export const vocabularyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getVocabulary: builder.query({
      query: () => "vocabulary",
    }),
    getVocabularyById: builder.query({
      query: (id) => `vocabulary/${id}`,
    }),
    addVocabulary: builder.mutation({
      query: (newVocabulary) => ({
        url: "/admin/vocabulary",
        method: "POST",
        body: newVocabulary,
      }),
    }),
    updateVocabulary: builder.mutation({
      query: ({ id, ...updatedVocabulary }) => ({
        url: `/admin/vocabulary/${id}`,
        method: "PATCH",
        body: updatedVocabulary,
      }),
    }),
    deleteVocabulary: builder.mutation({
      query: (id) => ({
        url: `/admin/vocabulary/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetVocabularyQuery,
  useGetVocabularyByIdQuery,
  useAddVocabularyMutation,
  useUpdateVocabularyMutation,
  useDeleteVocabularyMutation,
} = vocabularyApi;
