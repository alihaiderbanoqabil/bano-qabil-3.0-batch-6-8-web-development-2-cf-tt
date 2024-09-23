import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const jsonplaceholderApi = createApi({
  reducerPath: "jsonplaceholder",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://jsonplaceholder.typicode.com/",
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (queryParams) => {
        // console.log(queryParams, "queryParams");
        return `/users${queryParams || ""}`;
      },
    }),
    getPosts: builder.query({
      query: (queryParams) => {
        // console.log(queryParams, "queryParams");
        return `/posts${queryParams || ""}`;
      },
    }),
    getComments: builder.query({
      query: (queryParams = "") => {
        // console.log(queryParams, "queryParams");
        return `/comments${queryParams || ""}`;
      },
    }),
    getTodos: builder.query({
      query: (queryParams) => {
        // console.log(queryParams, "queryParams");
        return `/todos${queryParams || ""}`;
      },
    }),
    getAlbums: builder.query({
      query: (queryParams) => {
        // console.log(queryParams, "queryParams");
        return `/albums${queryParams || ""}`;
      },
    }),
    getPhotos: builder.query({
      query: (queryParams) => {
        // console.log(queryParams, "queryParams");
        return `/photos${queryParams || ""}`;
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
  useGetUsersQuery, 
  useLazyGetUsersQuery,
  useGetPostsQuery,
  useLazyGetPostsQuery,
  useGetCommentsQuery,
  useLazyGetCommentsQuery,
  useGetTodosQuery, 
  useLazyGetTodosQuery,
  useGetAlbumsQuery, 
  useLazyGetAlbumsQuery, 
  useGetPhotosQuery,
  useLazyGetPhotosQuery,
  useCreatePostMutation,
  useUpdateCommentMutation,
  useDeleteTodoMutation,
} = jsonplaceholderApi;
