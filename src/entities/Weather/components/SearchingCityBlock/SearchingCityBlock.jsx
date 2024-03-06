import React from 'react'
import { NotesButton, SearchInput } from '../../../../shared/ui'
import './SearchingCityBlock.scss'

export const SearchingCityBlock = ({ inputRef, onChange, onClick }) => {
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
        </div>
    )
}
