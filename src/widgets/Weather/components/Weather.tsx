import { CurrentWeather, SearchCity } from 'features/components'
import './Weather.scss'

export const Weather = () => {
    return (
        <div className='weather-widget'>
            <SearchCity />
            <CurrentWeather />
        </div>
    )
}
