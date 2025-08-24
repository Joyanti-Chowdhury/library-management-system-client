
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
// baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
// baseQuery: fetchBaseQuery({ baseUrl: 'https://library-management-system-two-tawny.vercel.app/api' }),
  tagTypes: ['book', 'borrow'],
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "/books",
      providesTags: ['book'],
    }),
 
    createBook: builder.mutation({
      query:(bookData) => ({
        url:"/books",
        method:"POST",
        body:bookData
      }),
      invalidatesTags: ['book']
    }),
    updateBook:builder.mutation({
      query:({id, data}) => ({
        url:`/books/${id}`,
        method:"PUT",
        body:data
      }),
      invalidatesTags: ['book']
    }),
    deleteBook:builder.mutation({
      query:(id) => ({
        url:`/books/${id}`,
        method:"DELETE"
      }),
      invalidatesTags: ['book']
    }),
    getBooksById :builder.query({
      query:(id) => `/books/${id}`,
      providesTags: ['book']
    }),
    borrowBooksById : builder.mutation({
      query:(borrowData) => ({
        url:"/borrow",
        method:"POST",
        body:borrowData
      }),
      invalidatesTags: ['book','borrow']
    }),
    getBorrowBooks : builder.query({
      query:() => "/borrow",
      providesTags: ['borrow']
    })
  }),
});


export const {useGetAllBooksQuery, useCreateBookMutation, useUpdateBookMutation, useDeleteBookMutation, useGetBooksByIdQuery, useBorrowBooksByIdMutation, useGetBorrowBooksQuery}  = baseApi;

