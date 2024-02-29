import './SearchInput.scss'

export const SearchInput = ({ placeholder, value, onChange }) => {
    return (
        <input
            type='text'
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className='search-input'
        />
    )
}
