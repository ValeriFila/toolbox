import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = '8NPlFd4xqrDO+pje2HGRIA==aR7Xwz9LmSSRrQJ4'

export const rtkApi = createApi({
    reducerPath: 'weather',
    baseQuery: fetchBaseQuery({
        // baseUrl: 'http://api.weatherapi.com/v1',
        // prepareHeaders: {
        //     'X-Api-Key': API_KEY,
        //     contentType: 'application/json',
        // },
    }),
    tagTypes: [
        'Weather',
    ],
    refetchOnReconnect: true,
    endpoints: (build) => ({}),
})
