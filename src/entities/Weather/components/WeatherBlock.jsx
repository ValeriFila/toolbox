import React from 'react'
import { NotesButton, SearchInput } from '../../../shared/ui'
import './WeatherBlock.scss'

export const WeatherBlock = ({ data, inputRef, onChange, onClick }) => {
    return (
        <div className='weather-block'>
            <div className='weather-block__searching-section'>
                <SearchInput
                    placeholder='Введите название города...'
                    inputRef={inputRef}
                    onChange={onChange}
                />
                <NotesButton
                    title='УЗНАТЬ ПОГОДУ'
                    onClick={onClick}
                />
            </div>

            {data ? (
                <div className='weather-block__result-section'>
                    <p>{data.location.name}</p>
                    <p>
                        {data.current.temp_c}
                        °C
                    </p>
                </div>
            ) : (
                <div className='weather-block__result-section'>
                    <p>Загрузка...</p>
                </div>
            )}
        </div>
    )
}
