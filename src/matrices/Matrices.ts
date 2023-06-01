/**
 * Class to create and manipulate Matrices
 */
export class Matrix {
    public columns: number;
    public rows: number;
    public values: number[][];

    constructor(rows: number, columns: number, values: number[][]) {
        this.rows = rows;
        this.columns = columns;
        this.values = values;
    }
    /**
     * Multiplies two matrices of different sizes.
     *
     * @param {Array<Array<number>>} matrixA - The first matrix to multiply.
     * @param {Array<Array<number>>} matrixB - The second matrix to multiply.
     * @returns {Array<Array<number>>} The resulting matrix from the multiplication.
     * @throws {Error} If the matrices cannot be multiplied.
     */
    multiplyMatrices(matrixA: number[][], matrixB: number[][]): number[][] {
        const numRowsA = matrixA.length;
        const numColsA = matrixA[0].length;
        const numRowsB = matrixB.length;
        const numColsB = matrixB[0].length;

        if (numColsA !== numRowsB) {
            throw new Error('Matrices cannot be multiplied');
        }

        const result = [];

        for (let i = 0; i < numRowsA; i++) {
            result[i] = [];
            for (let j = 0; j < numColsB; j++) {
                let sum = 0;
                for (let k = 0; k < numColsA; k++) {
                    sum += matrixA[i][k] * matrixB[k][j];
                }
                result[i][j] = sum;
            }
        }

        return result;
    }

    /**
     * Adds two matrices.
     *
     * @param {Array<Array<number>>} matrixA - The first matrix to add.
     * @param {Array<Array<number>>} matrixB - The second matrix to add.
     * @returns {Array<Array<number>>} The resulting matrix from the addition.
     * @throws {Error} If the matrices have different dimensions.
     */
    addMatrices(matrixA: number[][], matrixB: number[][]): number[][] {
        const numRowsA = matrixA.length;
        const numColsA = matrixA[0].length;
        const numRowsB = matrixB.length;
        const numColsB = matrixB[0].length;

        if (numRowsA !== numRowsB || numColsA !== numColsB) {
            throw new Error('Matrices must have same dimensions to be added');
        }

        const result = [];

        for (let i = 0; i < numRowsA; i++) {
            result[i] = [];
            for (let j = 0; j < numColsA; j++) {
                result[i][j] = matrixA[i][j] + matrixB[i][j];
            }
        }

        return result;
    }
    /**
     * Divides two matrices.
     *
     * @param {number[][]} matrixA - The first matrix to divide.
     * @param {number[][]} matrixB - The second matrix to divide.
     * @returns {number[][]} The resulting matrix from the division.
     * @throws {Error} If the matrices have different dimensions or if any element of matrixB is zero.
     */
    divideMatrices(matrixA: number[][], matrixB: number[][]): number[][] {
        const numRowsA = matrixA.length;
        const numColsA = matrixA[0].length;
        const numRowsB = matrixB.length;
        const numColsB = matrixB[0].length;

        if (numRowsA !== numRowsB || numColsA !== numColsB) {
            throw new Error('Matrices must have same dimensions to be divided');
        }

        const result = [];

        for (let i = 0; i < numRowsA; i++) {
            result[i] = [];
            for (let j = 0; j < numColsA; j++) {
                if (matrixB[i][j] === 0) {
                    throw new Error('Cannot divide by zero');
                }
                result[i][j] = matrixA[i][j] / matrixB[i][j];
            }
        }

        return result;
    }

    /**
     * Subtracts two matrices.
     *
     * @param {Array<Array<number>>} matrixA - The first matrix to subtract.
     * @param {Array<Array<number>>} matrixB - The second matrix to subtract.
     * @returns {Array<Array<number>>} The resulting matrix from the subtraction.
     * @throws {Error} If the matrices have different dimensions.
     */
    subtractMatrices(matrixA: number[][], matrixB: number[][]): number[][] {
        const numRowsA = matrixA.length;
        const numColsA = matrixA[0].length;
        const numRowsB = matrixB.length;
        const numColsB = matrixB[0].length;

        if (numRowsA !== numRowsB || numColsA !== numColsB) {
            throw new Error(
                'Matrices must have same dimensions to be subtracted',
            );
        }

        const result = [];

        for (let i = 0; i < numRowsA; i++) {
            result[i] = [];
            for (let j = 0; j < numColsA; j++) {
                result[i][j] = matrixA[i][j] - matrixB[i][j];
            }
        }

        return result;
    }

    /**
     * Multiplies a matrix by a scalar.
     *
     * @param {Array<Array<number>>} matrix - The matrix to multiply.
     * @param {number} scalar - The scalar to multiply the matrix by.
     * @returns {Array<Array<number>>} The resulting matrix from the multiplication.
     */
    multiplyMatrixByScalar(matrix: number[][], scalar: number): number[][] {
        const numRows = matrix.length;
        const numCols = matrix[0].length;

        const result = [];

        for (let i = 0; i < numRows; i++) {
            result[i] = [];
            for (let j = 0; j < numCols; j++) {
                result[i][j] = matrix[i][j] * scalar;
            }
        }

        return result;
    }
    /**
     * Divides a matrix by a scalar.
     *
     * @param {Array<Array<number>>} matrix - The matrix to divide.
     * @param {number} scalar - The scalar to divide the matrix by.
     * @returns {Array<Array<number>>} The resulting matrix from the division.
     * @throws {Error} If the scalar is zero.
     */
    divideMatrixByScalar(matrix: number[][], scalar: number): number[][] {
        if (scalar === 0) {
            throw new Error('Cannot divide by zero');
        }

        const numRows = matrix.length;
        const numCols = matrix[0].length;

        const result = [];

        for (let i = 0; i < numRows; i++) {
            result[i] = [];
            for (let j = 0; j < numCols; j++) {
                result[i][j] = matrix[i][j] / scalar;
            }
        }

        return result;
    }
}
