import { rtkApi } from '../../../../shared/api'

const API_KEY = 'c44bc4e816b941dfa6462259240303'

const weatherApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getCurrentWeather: build.query({
            query: (location, days = undefined) => ({
                method: 'GET',
                url: 'current.xml',
                params: {
                    key: API_KEY,
                    q: location,
                    days,
                },
            }),
            async onQueryStarted(arg, api) {
                console.log('запрос начался...')
            },
            providesTags: ['Weather'],
        }),
    }),
})
export const {
    useGetCurrentWeatherQuery,
} = weatherApi
