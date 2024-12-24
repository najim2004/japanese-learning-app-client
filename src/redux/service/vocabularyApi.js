import { baseApi } from "./baseApi";

export const vocabularyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getVocabulary: builder.query({
      query: () => "/vocabulary",
    }),
    getVocabularies: builder.query({
      query: () => "/admin/vocabularies",
      providesTags: ["AdminVocabularies"],
    }),
    getVocabularyById: builder.query({
      query: (id) => `vocabulary/${id}`,
    }),
    addVocabulary: builder.mutation({
      query: (newVocabulary) => ({
        url: "/admin/vocabularies",
        method: "POST",
        body: newVocabulary,
      }),
      invalidatesTags: ["AdminVocabularies"],
    }),
    updateVocabulary: builder.mutation({
      query: ({ id, ...updatedVocabulary }) => ({
        url: `/admin/vocabularies/${id}`,
        method: "PATCH",
        body: updatedVocabulary,
      }),
      invalidatesTags: ["AdminVocabularies"],
    }),
    deleteVocabulary: builder.mutation({
      query: (id) => ({
        url: `/admin/vocabularies/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["AdminVocabularies"],
    }),
  }),
});

export const {
  useGetVocabularyQuery,
  useGetVocabulariesQuery,
  useGetVocabularyByIdQuery,
  useAddVocabularyMutation,
  useUpdateVocabularyMutation,
  useDeleteVocabularyMutation,
} = vocabularyApi;
