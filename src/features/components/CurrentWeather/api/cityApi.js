import { rtkApi } from '../../../../shared/api'

const cityApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchCity: build.query({
            query: (searchQuery) => ({
                method: 'GET',
                url: 'https://nominatim.openstreetmap.org/search',
                params: {
                    q: searchQuery,
                    featureType: 'city',
                },
            }),
        }),
    }),
})

export const {
    useFetchCityQuery,
} = cityApi
