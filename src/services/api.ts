import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'
import { Menu, Restaurant } from '../Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (build) => ({
    getRestaurantes: build.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    getMenu: build.query<{ cardapio: Menu[] } & Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantesQuery, useGetMenuQuery } = api

export default api
