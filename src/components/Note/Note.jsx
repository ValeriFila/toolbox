import { useState } from 'react'
import classes from './Note.module.scss'

const Note = ({ props, onClick }) => {
    const [note, setNote] = useState('')

    const handleChange = (e) => {
        setNote(e.target.value)
    }

    return (
        <div className={classes.note}>
            {props.note ? (
                <p className={classes.note__text}>{props.note}</p>
            ) : (
                <textarea
                    placeholder='Новая заметка...'
                    className={classes.note__text}
                    value={note}
                    onChange={(e) => handleChange(e)}
                />
            )}
            <div className={classes.note__bottom}>
                {props.date ? (
                    <p className={classes.note__bottom__date}>{props.date}</p>
                ) : (
                    <p className={classes.note__bottom__date}>{props.remaining}</p>
                )}
                {props.button ? (
                    <button
                        type='button'
                        className={classes.note__bottom__button}
                        onClick={onClick}
                    >
                        {props.button}
                    </button>
                ) : (
                    <button
                        type='button'
                        className={classes.note__bottom__button}
                        onClick={onClick}
                    >
                        УДАЛИТЬ
                    </button>
                )}
            </div>
        </div>
    )
}

export default Note
