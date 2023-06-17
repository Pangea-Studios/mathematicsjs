export interface MatrixConstructor {
	rows: number;
	columns: number;
	values: number[][];
	new (rows: number, columns: number, values: number[][]): Matrix;
}

/**
 * Class to create and manipulate Matrices
 */
export class Matrix {
	public columns: number;
	public rows: number;
	public values: number[][];

	/**
	 * Creates a new matrix
	 *
	 * @param {number} rows - The number of rows
	 * @param {number} columns - The number of columns
	 * @param {Array.<Array.<number>>} values - The values of the matrix
	 */
	constructor(rows: number, columns: number, values: number[][]) {
		this.rows = rows;
		this.columns = columns;
		this.values = values;
	}

	/**
	 * Calculates the product of two matrices.
	 * @param {MatrixConstructor} other - The matrix to multiply with.
	 * @return {Matrix} A new matrix that is the product of this matrix and other.
	 * @throws {Error} If the number of columns of this matrix does not match the number of rows of the other matrix.
	 */
	multiply(other: MatrixConstructor): Matrix {
		const numRowsA = this.values.length;
		const numColsA = this.values[0].length;
		const numRowsB = other.values.length;
		const numColsB = other.values[0].length;

		if (numColsA !== numRowsB) {
			throw new Error('Matrices cannot be multiplied');
		}

		const result = [];

		for (let i = 0; i < numRowsA; i++) {
			result[i] = [];
			for (let j = 0; j < numColsB; j++) {
				let sum = 0;
				for (let k = 0; k < numColsA; k++) {
					sum += this.values[i][k] * other.values[k][j];
				}
				result[i][j] = sum;
			}
		}
		return new Matrix(result.length, result[0].length, result);
	}

	/**
	 * Adds the values of two matrices together.
	 * @param {MatrixConstructor} other - The matrix to add to this one.
	 * @return {Matrix} A new matrix with the added values.
	 * @throws {Error} If matrices do not have the same number of rows and columns.
	 */
	add(other: MatrixConstructor): Matrix {
		const numRowsA = this.values.length;
		const numColsA = this.values[0].length;
		const numRowsB = other.values.length;
		const numColsB = other.values[0].length;

		if (numRowsA !== numRowsB || numColsA !== numColsB) {
			throw new Error('Matrices must have same dimensions to be added');
		}

		const result = [];

		for (let i = 0; i < numRowsA; i++) {
			result[i] = [];
			for (let j = 0; j < numColsA; j++) {
				result[i][j] = this.values[i][j] + other.values[i][j];
			}
		}

		return new Matrix(result.length, result[0].length, result);
	}

	/**
	 * Divides this matrix by another one element-wise and returns the result as a new matrix.
	 * @param {MatrixConstructor} other - the matrix to divide by
	 * @throws {Error} When matrices do not have the same dimensions or when dividing by 0
	 * @return {Matrix} A new matrix that is the result of the element-wise division
	 */
	divide(other: MatrixConstructor): Matrix {
		const numRowsA = this.values.length;
		const numColsA = this.values[0].length;
		const numRowsB = other.values.length;
		const numColsB = other.values[0].length;

		if (numRowsA !== numRowsB || numColsA !== numColsB) {
			throw new Error('Matrices must have same dimensions to be divided');
		}

		const result = [];

		for (let i = 0; i < numRowsA; i++) {
			result[i] = [];
			for (let j = 0; j < numColsA; j++) {
				if (other[i][j] === 0) {
					throw new Error('Cannot divide by zero');
				}
				result[i][j] = this.values[i][j] / other.values[i][j];
			}
		}

		return new Matrix(result.length, result[0].length, result);
	}

	/**
	 * Subtract two matrices of the same dimensions and return the result.
	 * @param {MatrixConstructor} other - the matrix to subtract from this one
	 * @return {Matrix} a new matrix that is the result of the subtraction
	 * @throws {Error} if matrices do not have the same dimensions
	 */
	subtract(other: MatrixConstructor): Matrix {
		const numRowsA = this.values.length;
		const numColsA = this.values[0].length;
		const numRowsB = other.values.length;
		const numColsB = other.values[0].length;

		if (numRowsA !== numRowsB || numColsA !== numColsB) {
			throw new Error(
				'Matrices must have same dimensions to be subtracted',
			);
		}

		const result = [];

		for (let i = 0; i < numRowsA; i++) {
			result[i] = [];
			for (let j = 0; j < numColsA; j++) {
				result[i][j] = this.values[i][j] - other.values[i][j];
			}
		}

		return new Matrix(result.length, result[0].length, result);
	}

	/**
	 * Multiplies the matrix by a scalar.
	 * @param {number} scalar - the scalar to multiply with.
	 * @return {Matrix} a new Matrix object that is the result of the scalar multiplication.
	 */
	multiplyScalar(scalar: number): Matrix {
		const numRows = this.values.length;
		const numCols = this.values[0].length;

		const result = [];

		for (let i = 0; i < numRows; i++) {
			result[i] = [];
			for (let j = 0; j < numCols; j++) {
				result[i][j] = this.values[i][j] * scalar;
			}
		}

		return new Matrix(result.length, result[0].length, result);
	}
	/**
	 * Divides every element in the matrix by a scalar.
	 * @param {number} scalar - the scalar to divide by
	 * @return {Matrix} a new matrix with the results of the division
	 * @throws {Error} if scalar is zero
	 */
	divideScalar(scalar: number): Matrix {
		if (scalar === 0) {
			throw new Error('Cannot divide by zero');
		}

		const numRows = this.values.length;
		const numCols = this.values[0].length;

		const result = [];

		for (let i = 0; i < numRows; i++) {
			result[i] = [];
			for (let j = 0; j < numCols; j++) {
				result[i][j] = this.values[i][j] / scalar;
			}
		}

		return new Matrix(result.length, result[0].length, result);
	}
}
