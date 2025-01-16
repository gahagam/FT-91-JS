alert(
    'Совершенным называется число, равное сумме всех своих собственных делителей (отличных от x). Например: 6 = 1 + 2 + 3; 28 = 1 + 2 + 4 + 7 + 14.'
);

function Check(x) {
    if (Number.isNaN(number)) {
        alert('Введите число!')
    }
    else if (typeof x !== 'number' || !Number.isInteger(x) || x <= 1) {
        return false; // Совершенные числа должны быть целыми положительными и больше 1
    }
    let sum = 0;
    for (let i = 1; i <= Math.floor(x / 2); i++) {
        if (x % i === 0) {
            sum += i;
        }
    }

    return sum === x;
}

let number = Number(prompt("Введите целое число:"));

if (Check(number)) {
    console.log(number + " является совершенным числом.");
    alert(number + " является совершенным числом.");
} else {
    console.log(number + " не является совершенным числом.");
    alert(number + " не является совершенным числом.");
}