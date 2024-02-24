const clearField = (result, setResult) => {
    if (result !== '0' && result !== '-0') {
        setResult((prev) => {
            return prev.slice(0, prev.length - 1)
        })
    }
    if (result.length === 1 || (result.length === 2 && result.startsWith('-'))) {
        setResult('0')
    }
}

export default clearField
