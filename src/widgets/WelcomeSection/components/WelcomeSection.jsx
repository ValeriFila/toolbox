import './WelcomeSection.scss'

export const WelcomeSection = () => {
    return (
        <div className='welcome-section'>
            <h1>Добро пожаловать в Tool Box!</h1>
            <div className='welcome-section__description'>
                <p>Здесь вы можете найти самые необходимые для работы инструменты :)</p>
                <p>Пользуйтесь с удовольствием!</p>
            </div>
        </div>
    )
}
