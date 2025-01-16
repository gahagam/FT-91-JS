function explainTask1() {
    alert(
        'Напишите функцию, которая принимает три числовых параметра и возвращает произведение двух максимальных из них.'
    );
}

function explainTask2() {
    alert(
        'Объявите функцию, которая принимает на вход целые числа. Для чётных значений функция возвращает стрелочное выражение возведения числа в квадрат, а для нечётных – стрелочное выражение возведения в куб.'
    );
}

function explainTask3() {
    alert(
        'Напишите рекурсивную функцию для расчёта факториала числа n.'
    );
}

function Multi(num1, num2, num3) {
    const max1 = Math.max(num1, num2, num3);
    let max2;
    if (max1 === num1) {
        max2 = Math.max(num2, num3)
    } else if (max1 === num2) {
        max2 = Math.max(num1, num3)
    } else {
        max2 = Math.max(num1, num2)
    }
    return max1 * max2;
}

function Check(number) {
    if (number % 2 === 0) {
        return (x) => x * x;
    } else {
        return (x) = x * x * x;
    }
}

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

function inputNumber() {
    return parseFloat(prompt('Введите число'));
}


explainTask1()
const n1 = inputNumber();
const n2 = inputNumber();
const n3 = inputNumber();
alert(`Произведение двух максимальных чисел: ${Multi(n1, n2, n3)}`);
console.log(`Произведение двух максимальных чисел: ${Multi(n1, n2, n3)}`);

explainTask2()
const n = inputNumber();
alert(`Ваш результат: ${Check(n)}`);
console.log(`Ваш результат: ${Check(n)}`);

explainTask3()
const number = inputNumber();
alert(`Факториал числа: ${factorial(number)}`);
console.log(`Факториал числа: ${factorial(number)}`);
