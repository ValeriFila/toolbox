import classes from './Note.module.scss'

const Note = ({ props, onChange }) => {
    return (
        <div className={classes.note}>
            {props.note ? (
                <p className={classes.note__text}>{props.note}</p>
            ) : (
                <textarea
                    placeholder='Новая заметка...'
                    className={classes.note__text}
                    value={props.textarea}
                    onChange={onChange}
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
                    >
                        {props.button}
                    </button>
                ) : (
                    <button
                        type='button'
                        className={classes.note__bottom__button}
                    >
                        удалить
                    </button>
                )}
            </div>
        </div>
    )
}

export default Note
