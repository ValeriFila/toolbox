import { Link, NavLink } from 'react-router-dom'
import './CustomNavbar.scss'
import { SquareButton } from 'shared/ui'
import calculator from '../../../shared/assets/icons/calculator.png'
import notes from '../../../shared/assets/icons/wirte.png'
import weather from '../../../shared/assets/icons/cloudy.png'

export const CustomNavbar = () => {
    const images = [
        {
            name: 'calculator',
            value: calculator,
        },
        {
            name: 'notes',
            value: notes,
        },
        {
            name: 'weather',
            value: weather,
        },
    ]

    const buttons = images.map((image) => (
        <NavLink
            key={image.name}
            to={`/${image.name}`}
        >
            <SquareButton>
                <img
                    src={image.value}
                    alt={image.name}
                    className='navbar__buttons__image'
                />
            </SquareButton>
        </NavLink>
    ))

    return (
        <div className='navbar'>
            <Link
                to='/'
                className='navbar__link'
            >
                Tool Box
            </Link>
            <div className='navbar__buttons'>
                {buttons}
            </div>
        </div>
    )
}
