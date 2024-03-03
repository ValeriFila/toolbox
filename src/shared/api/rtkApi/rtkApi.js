import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rtkApi = createApi({
    reducerPath: 'weather',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://api.weatherapi.com/v1',
    }),
    tagTypes: [
        'Weather',
    ],
    refetchOnReconnect: true,
    endpoints: (build) => ({}),
})
