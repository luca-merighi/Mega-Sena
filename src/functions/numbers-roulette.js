export function Mega(quantity = 6, numbers = []) {
    if(quantity < 6 && quantity > 60) {
        throw 'Quantidade Inválida!'
    }

    if(numbers.length === quantity) {
        return numbers.sort((n1, n2) => n1 - n2)
    }

    const randomNumber = parseInt(Math.random() * 60) + 1
    if(!numbers.includes(randomNumber)) {
        return Mega(quantity, [...numbers, randomNumber])
    } else {
        return Mega(quantity, numbers)
    }
}