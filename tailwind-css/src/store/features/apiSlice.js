import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const jsonplaceholderApi = createApi({
  reducerPath: "jsonplaceholder",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (queryParams) => {
        console.log(queryParams, "queryParams");

        return `posts${queryParams || ""}`;
      },
    }),
    getComments: builder.query({
      query: (queryParams = "") => {
        console.log(queryParams, "queryParams");

        return `comments${queryParams || ""}`;
      },
    }),
    createPost: builder.mutation({
      query: (data) => {
        console.log(data, "data");
        return {
          url: `posts`,
          method: "POST",
          body: data,
        };
      },
    }),
    updateComment: builder.mutation({
      //   query: (id, data) => { not possible only one argument accept
      query: (data) => {
        console.log(data, "data");
        const { id } = data;
        return {
          url: `comments/${id}`,
          method: "PATCH",
          body: data,
        };
      },
    }),
    deleteTodo: builder.mutation({
      query: (id) => {
        console.log(id, "id");
        return {
          url: `todos/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPostsQuery,
  useLazyGetPostsQuery,
  useGetCommentsQuery,
  useLazyGetCommentsQuery,
  useCreatePostMutation,
  useUpdateCommentMutation,
  useDeleteTodoMutation,
} = jsonplaceholderApi;
