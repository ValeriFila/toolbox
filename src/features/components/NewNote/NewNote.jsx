import React, { useState } from 'react'
import { CreationCard } from '../../../entities/Note'

export const NewNote = () => {
    const [note, setNote] = useState('')
    const [remain, setRemain] = useState(200)
    const handleChange = (e) => {
        setNote(e.target.value)
        setRemain(200 - e.target.value.length)
    }

    const handleClick = () => {
        console.log('карточка создана')
    }

    return (
        <CreationCard
            props={{
                remaining: remain.toString(),
            }}
            onClick={handleClick}
            onChange={(e) => handleChange(e)}
            value={note}
        />
    )
}
