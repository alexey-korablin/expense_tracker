export const calculateIncome = (ack: number, amount: number): number => {
    return amount > 0 ? ack + amount : ack
}

export const calculateExpence = (ack: number, amount: number): number => {
    return amount < 0 ? ack + amount * -1 : ack
}
