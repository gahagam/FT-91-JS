//задание 1
function sum(arr) {
    if (arr.length === 0)
        return 0;

    let minIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }

    let sum = 0;
    for (let i = 0; i < minIndex; i++) {
        sum += arr[i];
    }

    return sum;
}

const x = [5.0, 2.5, 1.0, 4.2, 3.8];
console.log("Сумма элементов до минимального: " + sum(x)); //7.5

const x1 = [0.1, 0.2, 0.3];
console.log("Сумма элементов до минимального: " + sum(x1)); //0




//задание 2
function minDiagonalSum(matrix) {
    if (!matrix || matrix.length === 0 || !matrix[0]) {
        return Infinity;
    }

    const rows = matrix.length;
    const cols = matrix[0].length;

    // проверка прямоугольной матрицы
    for (let i = 1; i < rows; i++) {
        if (matrix[i].length !== cols) {
            return Infinity;
        }
    }

    let minSum = Infinity;

    for (let offset = 1 - rows; offset < cols; offset++) {
        let currentSum = 0;
        let i = Math.max(0, -offset);
        let j = Math.max(0, offset);

        while (i < rows && j < cols) {
            currentSum += matrix[i][j];
            i++;
            j++;
        }


        minSum = Math.min(minSum, currentSum);
    }

    return minSum;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Минимальная сумма диагоналей: " + min(matrix)); //1


const matrix2 = [
    [1, 2],
    [3] //не прямоугольная
];
console.log("Минимальная сумма диагоналей: " + min(matrix2)); //Infinity