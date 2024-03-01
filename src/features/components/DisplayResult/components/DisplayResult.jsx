import { useSelector } from 'react-redux'
import { CalculatorInput } from '../../../../entities/Calculator'
import { useClearField } from '../lib/hooks/useClearField'

export const DisplayResult = () => {
    const result = useSelector((state) => state.result.result)
    const clearField = useClearField()

    return (
        <CalculatorInput
            onClickClear={clearField}
            result={result}
        />
    )
}
