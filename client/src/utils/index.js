const getNumber = () => Math.floor(48 + Math.random() * (122 + 1 - 48))

export const generateId = () => {
    const ID_LENGTH = 5
    const result = Array(ID_LENGTH)
        .fill('')
        .reduce(acc => acc + String.fromCharCode(getNumber()))
    console.log(result)
    return result
}
