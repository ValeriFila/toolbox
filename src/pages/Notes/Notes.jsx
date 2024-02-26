import React from 'react'
import Note from '../../components/Note/Note'
import './Notes.scss'

const Notes = () => {
    return (
        <div className='notes-page'>
            <h1 className='notes-page__title'>Заметки</h1>
            <div className='notes-page__notes-section'>
                <Note
                    props={{
                        note: 'Купить хлеб в магните. ТАкже сходить в зал, позвонить маме и сделать йогу',
                        date: '26.02.2024',
                    }}
                />
                <Note
                    props={{
                        note: 'Купить хлеб в магните. ТАкже сходить в зал, позвонить маме и сделать йогу',
                        date: '26.02.2024',
                    }}
                />
                <Note
                    props={{
                        note: 'Купить хлеб в магните. ТАкже сходить в зал, позвонить маме и сделать йогу',
                        date: '26.02.2024',
                    }}
                />
                <Note
                    props={{
                        remaining: '198 символов',
                        button: 'СОЗДАТЬ',
                    }}
                />

            </div>

        </div>
    )
}

export default Notes