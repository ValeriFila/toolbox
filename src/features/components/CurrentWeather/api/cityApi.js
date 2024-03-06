import { rtkApi } from '../../../../shared/api'

// const API_KEY = '8NPlFd4xqrDO+pje2HGRIA==aR7Xwz9LmSSRrQJ4'
const token = '162de0d170da426d3fdfd549f662f48140494359'
const secret = 'd62c45c8dd83cf556622a56245082c630165fe33'

const cityApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchCity: build.mutation({
            query: (searchQuery) => ({
                method: 'POST',
                mode: 'cors',
                // url: `https://api.api-ninjas.com/v1/city?name=${searchQuery}&limit=10`,
                url: 'http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
                // headers: {
                //     'X-Api-Key': API_KEY,
                // },
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Token ${token}`,
                    'X-Secret': secret,
                },
                body: JSON.stringify({ query: searchQuery }),
            }),
        }),
    }),
})

export const {
    useFetchCityMutation,
} = cityApi
