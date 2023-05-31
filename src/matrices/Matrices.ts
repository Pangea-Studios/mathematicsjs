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
     * @param {number[][]} matrixA - The first matrix to multiply.
     * @param {number[][]} matrixB - The second matrix to multiply.
     * @returns {number[][]} The resulting matrix from the multiplication.
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
     * Multiplies a matrix by a scalar.
     *
     * @param {number[][]} matrix - The matrix to multiply.
     * @param {number} scalar - The scalar to multiply the matrix by.
     * @returns {number[][]} The resulting matrix from the multiplication.
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

}