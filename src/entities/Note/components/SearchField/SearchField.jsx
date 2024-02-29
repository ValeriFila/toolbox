import { SearchInput } from '../../../../shared/ui'

export const SearchField = ({ onChange, inputRef }) => {
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
