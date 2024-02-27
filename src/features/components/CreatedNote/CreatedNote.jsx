import { NoteCard } from '../../../entities/Note'

export const CreatedNote = () => {
    const handleClick = () => {
        console.log('карточка удалена')
    }

    return (
        <NoteCard
            props={{
                note: 'note',
            }}
            onClick={handleClick}
        />
    )
}
