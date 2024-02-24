function countNums(button, prev, result) {
    switch (button) {
        case '+':
            return Number(prev) + Number(result)
        case '-':
            return Number(prev) - Number(result)
        case 'x':
            return Number(prev) * Number(result)
        case '/':
            return Number(prev) / Number(result)
        default:
            return 0
    }
}
export default countNums
