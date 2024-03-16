import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rtkApi = createApi({
    reducerPath: 'weather',
    baseQuery: fetchBaseQuery({

    }),
    tagTypes: [
        'Weather',
    ],
    refetchOnReconnect: true,
    endpoints: (build) => ({}),
})
