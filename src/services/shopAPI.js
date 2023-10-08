import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { baseUrl } from '../firebase'

export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getCategories: builder.query({
      query: () => 'Categories.json',
    }),
    getProducts: builder.query({
      query: () => 'Products.json',
    }),
    getProductsByCategory: builder.query({
      query: category =>
        `Products.json?orderBy="category"&equalTo="${category}"`,
    }),
    postOrder: builder.mutation({
      query: ({ ...order }) => ({
        url: 'orders.json',
        method: 'POST',
        body: order,
      }),
    }),
    getProfileImage: builder.query({
      query: localId => `profileImages/${localId}.json`
    }),
    postProfileImage: builder.mutation({
      query: ({image, localId}) => ({
        url: `profileImages/${localId}.json`,
        method: 'PUT',
        body:{ image,}
      }),
    })
  }),
})

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  usePostOrderMutation,
  useGetProfileImageQuery,
  usePostProfileImageMutation  
} = shopApi
