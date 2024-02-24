function countNums(button, prev, result) {
    if (button === '+') {
        return Number(prev) + Number(result)
    }
    if (button === '-') {
        return Number(prev) - Number(result)
    }
    if (button === 'x') {
        return Number(prev) * Number(result)
    }
    if (button === '/') {
        return Number(prev) / Number(result)
    }
    return 0
}
export default countNums
