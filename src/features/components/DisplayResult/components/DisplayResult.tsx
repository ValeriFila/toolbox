import { useAppSelector } from 'shared/lib'
import { CalculatorInput } from 'entities/Calculator'
import { useClearField } from 'features/components/DisplayResult/lib/hooks/useClearField.ts'

export const DisplayResult = () => {
    const result = useAppSelector((state) => state.result.result)
    const clearField = useClearField()

    return (
        <CalculatorInput
            onClickClear={clearField}
            result={result}
        />
    )
}
