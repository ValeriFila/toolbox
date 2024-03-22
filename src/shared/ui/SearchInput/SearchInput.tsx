import './SearchInput.scss'
import React from 'react'

interface SearchInputProps {
    placeholder: string
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
    inputRef: React.LegacyRef<HTMLInputElement> | undefined
}

export const SearchInput = (props: SearchInputProps) => {
    const {
        placeholder,
        onChange,
        inputRef,
    } = props

    return (
        <input
            ref={inputRef}
            type='text'
            placeholder={placeholder}
            onChange={onChange}
            className='search-input'
        />
    )
}
