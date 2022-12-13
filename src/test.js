export const add = (a, b) => {
    return a + b
}

export const total = (arr) => {
    return arr.reduce((a, b) => a + b);
}

export const bankAccount = {
    income: 1000,
    expense: 500,
    getBalance(){
        return {
            balance: this.income - this.expense
        }
    }
}