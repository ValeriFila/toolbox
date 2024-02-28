import { Link, NavLink } from 'react-router-dom'
import classes from './CustomNavbar.module.scss'
import { SquareButton } from '../../shared/ui'
import calculator from '../../assets/icons/calculator.png'
import notes from '../../assets/icons/wirte.png'
import weather from '../../assets/icons/cloudy.png'

const CustomNavbar = () => {
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
                    className={classes.navbar__buttons__image}
                />
            </SquareButton>
        </NavLink>
    ))

    return (
        <div className={classes.navbar}>
            <Link
                to='/'
                className={classes.navbar__link}
            >
                Tool Box
            </Link>
            <div className={classes.navbar__buttons}>
                {buttons}
            </div>
        </div>
    )
}

export default CustomNavbar
