import React from 'react'
import { SearchInput } from '../../../../shared/ui'
import './SearchingCityBlock.scss'

export const SearchingCityBlock = ({ inputRef, onChange }) => {
    return (
        <div className='weather-block'>
            <div className='weather-block__searching-section'>
                <SearchInput
                    placeholder='Введите название города...'
                    inputRef={inputRef}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}
