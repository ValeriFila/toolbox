import { SearchInput } from '../../../../shared/ui'

export const SearchField = ({ onChange, value }) => {
    return (
        <div>
            <SearchInput
                placeholder='Поиск по заметкам...'
                onChange={onChange}
                value={value}
            />
        </div>
    )
}
