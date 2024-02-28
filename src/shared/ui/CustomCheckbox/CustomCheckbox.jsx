import './CustomCheckbox.scss'

export const CustomCheckbox = ({ onChange, checked }) => {
    return (
        <input
            type='checkbox'
            className='custom-checkbox'
            onChange={onChange}
            checked={checked}
        />
    )
}
