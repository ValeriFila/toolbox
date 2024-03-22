import React from 'react'
import { SearchInput } from 'shared/ui'

interface SearchFieldProps {
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
    inputRef: React.LegacyRef<HTMLInputElement> | undefined
}

export const SearchField = (props: SearchFieldProps) => {
    const {
        onChange,
        inputRef,
    } = props

    return (
        <div>
            <SearchInput
                inputRef={inputRef}
                placeholder='Поиск по заметкам...'
                onChange={onChange}
            />
        </div>
    )
}
