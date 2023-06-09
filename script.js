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

function getLayerMatrix(matrix, layersNumber) {
    const min = getMinMatrixItem(matrix);
    const max = getMaxMatrixItem(matrix);
    const h = (max - min) / layersNumber;
    const edgeLayerPoints = getRangeOfNumbers(min, max, h);

    const layerMatrix = [];
    const rows = matrix.length;
    const cols = matrix[0].length;

    for (let i = 0; i < rows; i++) {
        layerMatrix[i] = [];
        for (let j = 0; j < cols; j++) {
            let k = 0;
            while (k < layersNumber + 1 && (matrix[i][j] < edgeLayerPoints[k] || matrix[i][j] > edgeLayerPoints[k + 1])) k++;
            layerMatrix[i][j] = k;
        }
    }

    return layerMatrix;
}

const matrix1 = [
    [0.5, 0.6, 0.2],
    [0.2, 0.8, 0.8]
];

const matrix2 = [
    [1, 3, 3, 1, 2, 6],
    [2, 7, 1, 2, 1, 3],
    [9, 9, 7, 8, 8, 2],
    [3, 7, 2, 3, 1, 1],
    [1, 9, 4, 4, 5, 3],
    [2, 7, 1, 6, 4, 2],
    [1, 8, 2, 3, 1, 2],
];

printMatrix(getLayerMatrix(matrix1, 2));
console.log("");
printMatrix(getLayerMatrix(matrix2, 3));