function getJoinedArrayStr(arr, separator = ", ") {
    return arr.join(separator);
}

function printMatrix(matrix, itemSeparator = " ") {
    matrix.forEach(row => console.log(getJoinedArrayStr(row, itemSeparator)));
}

function getArrayMin(arr) {
    return Math.min(...arr);
}

function getArrayMax(arr) {
    return Math.max(...arr);
}

function getMatrixMin(matrix) {
    return matrix.reduce((min, row) => Math.min(min, getArrayMin(row)), Infinity);
}

function getMatrixMax(matrix) {
    return matrix.reduce((max, row) => Math.max(max, getArrayMax(row)), -Infinity);
}

function getRangeOfNumbers(start = 0, end = 9, step = 1) {
    const length = Math.floor((end - start) / step) + 1;
    return Array.from({length}, (_, index) => +(start + index * step).toFixed(2));
}

function generateColorGradients(n) {
    const colorGradients = [];

    for (let i = 0; i < n; i++) {
        const red = Math.floor(255 * (1 - i / (n - 1)));
        const green = Math.floor(255 * (i / (n - 1)));
        const rgb = `rgb(${red}, ${green}, 0)`;

        colorGradients.push(rgb);
    }

    return colorGradients;
}

function printColoredArrayItems(arr, colors) {
    const strPattern = "%c" + arr.join("%c");
    const colorsPattern = colors.map(color => `color:${color};`)
    console.log(strPattern, ...colorsPattern)
}

function getLayerMatrix(matrix, layersNumber) {
    const min = getMatrixMin(matrix);
    const max = getMatrixMax(matrix);
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