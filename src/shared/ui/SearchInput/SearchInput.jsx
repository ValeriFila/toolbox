import './SearchInput.scss'

export const SearchInput = ({ placeholder, onChange, inputRef }) => {
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
