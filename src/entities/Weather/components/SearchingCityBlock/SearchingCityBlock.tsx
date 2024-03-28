import React from 'react'
import { SearchInput } from 'shared/ui'
import './SearchingCityBlock.scss'

interface SearchingCityBlockProps {
    inputRef: React.LegacyRef<HTMLInputElement> | undefined
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export const SearchingCityBlock = (props: SearchingCityBlockProps) => {
    const {
        inputRef,
        onChange,
    } = props

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
