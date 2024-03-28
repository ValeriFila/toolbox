import React, { useCallback } from 'react'
import { useAppSelector } from 'shared/lib'

interface UseDisplayResultProps {
    button: string
    setCount: React.Dispatch<React.SetStateAction<number>>
    setOperatorPressed: React.Dispatch<React.SetStateAction<boolean>>
    setIsFirstOperator: React.Dispatch<React.SetStateAction<boolean>>
    setEqualPressed: React.Dispatch<React.SetStateAction<boolean>>
    setLastOperator: React.Dispatch<React.SetStateAction<string>>
}

export const useDisplayResult = () => {
    const prev = useAppSelector((state) => state.result.result)

    return useCallback((props: UseDisplayResultProps, operatorPressed: boolean) => {
        const {
            button,
            setCount,
            setOperatorPressed,
            setIsFirstOperator,
            setEqualPressed,
            setLastOperator,
        } = props

        if (prev.toString().includes('.') && button === '.') {
            return prev.toString()
        }

        if ((Number(button) >= 0 && Number(button) <= 9) || button === '.') {
            if (prev.toString().length >= 9) return prev.toString()

            if ((prev === '0' || prev === '-0') && button === '0') return prev.toString()

            if ((prev === '0' || prev === '-0') && button === '.') return `${prev.toString()}.`

            if (prev === '0') return button

            if (prev === '-0') return `-${button}`

            if (operatorPressed) return button.toString()

            return prev.toString() + button
        }

        if (button === 'AC') {
            setCount(0)
            setOperatorPressed(false)
            setIsFirstOperator(false)
            setEqualPressed(false)
            setLastOperator('')
            return '0'
        }

        if (button === '[+/-]') {
            if (prev.toString().startsWith('-')) {
                return prev.toString().slice(1, prev.toString().length)
            }
            return `-${prev.toString()}`
        }

        if (button === '%') {
            if (prev === '0' || prev === '-0' || prev === '0.' || prev === '-0.') {
                return '0'
            }
            const res = (Number(prev) / 100).toString()
            if (res.length > 9) {
                return Number(res).toPrecision(8)
            }
            return res
        }
        return null
    }, [prev])
}
