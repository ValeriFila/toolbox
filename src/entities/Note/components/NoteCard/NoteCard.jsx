import classes from './NoteCard.module.scss'
import { NotesButton } from '../../../../shared/ui'

export const NoteCard = ({ props, onClick }) => {
    return (
        <div className={classes.note}>
            <p className={classes.note__text}>{props.note}</p>
            <div className={classes.note__bottom}>
                <p className={classes.note__bottom__date}>{props.date}</p>
                <NotesButton
                    title='УДАЛИТЬ'
                    onClick={onClick}
                />
            </div>
        </div>
    )
}
