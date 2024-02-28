import './CustomCheckbox.scss'

export const CustomCheckbox = ({ onClick }) => {
    return (
        <input type='checkbox' className='custom-checkbox' onClick={onClick} />
    )
}
