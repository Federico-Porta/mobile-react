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
  }),
})

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
} = shopApi
