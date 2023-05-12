function printMatrix(matrix) {
    matrix.forEach(row => console.log(row.join(" ")));
}

function getMinMatrixItem(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let min = Infinity;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] < min) min = matrix[i][j];
        }
    }

    return min;
}

function getMaxMatrixItem(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let max = -Infinity;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] > max) max = matrix[i][j];
        }
    }

    return max;
}

function getRangeOfNumbers(start = 0, end = 9, step = 1) {
    const numbers = [];

    for (start; start <= end; start = +(start + step).toFixed(2)) {
        numbers.push(start);
    }

    return numbers;
}