import { Absolute } from '../core/operations';
import { Indices } from '../core/Indices';

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
	 * @param {Matrix} other - The matrix to multiply with.
	 * @return {Matrix} A new matrix that is the product of this matrix and other.
	 * @throws {Error} If the number of columns of this matrix does not match the number of rows of the other matrix.
	 */
	multiply(other: Matrix): Matrix {
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
	 * @param {Matrix} other - The matrix to add to this one.
	 * @return {Matrix} A new matrix with the added values.
	 * @throws {Error} If matrices do not have the same number of rows and columns.
	 */
	add(other: Matrix): Matrix {
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
	 * @param {Matrix} other - the matrix to divide by
	 * @throws {Error} When matrices do not have the same dimensions or when dividing by 0
	 * @return {Matrix} A new matrix that is the result of the element-wise division
	 */
	divide(other: Matrix): Matrix {
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
	 * @param {Matrix} other - the matrix to subtract from this one
	 * @return {Matrix} a new matrix that is the result of the subtraction
	 * @throws {Error} if matrices do not have the same dimensions
	 */
	subtract(other: Matrix): Matrix {
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

	eigenvalueDecomposition() {
		// Check if the matrix is square
		if (this.rows !== this.columns) {
			throw new Error(
				'Eigenvalue decomposition can only be performed on square matrices.',
			);
		}

		// Create an initial identity matrix for eigenvectors
		let eigenvectors = Matrix.eye(this.rows);

		// Create a copy of the matrix for calculations
		let A = new Matrix(this.rows, this.columns, this.values);

		// Set the maximum number of iterations
		const maxIterations = 100;

		// Perform the QR algorithm
		for (let i = 0; i < maxIterations; i++) {
			// Compute the QR decomposition of the matrix
			const { Q, R } = A.qrDecomposition();

			// Update the matrix A with the new value of RQ
			A = R.multiply(Q);

			// Update the eigenvectors by multiplying with Q
			eigenvectors = eigenvectors.multiply(Q);

			// Check if the matrix A is almost diagonal
			if (A.isDiagonal()) {
				break;
			}
		}

		// Extract the diagonal elements as eigenvalues
		const eigenvalues = A.getDiagonal();

		// Normalize the eigenvectors
		eigenvectors = eigenvectors.normalizeColumns();

		// Return the eigenvalues and eigenvectors
		return {
			eigenvalues: eigenvalues,
			eigenvectors: eigenvectors,
		};
	}

	/**
	 * Create an identity matrix of the specified size
	 *
	 * @param {number} size - The size of the identity matrix
	 * @returns {Matrix} - The identity matrix
	 */
	static eye(size) {
		const values = [];

		for (let i = 0; i < size; i++) {
			const row = new Array(size).fill(0);
			row[i] = 1;
			values.push(row);
		}

		return new Matrix(size, size, values);
	}
	/**
	 * Check if the matrix is diagonal (all off-diagonal elements are close to zero)
	 *
	 * @returns {boolean} - True if the matrix is diagonal, false otherwise
	 */
	isDiagonal() {
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.columns; j++) {
				if (i !== j && Absolute(this.values[i][j]) > 1e-10) {
					return false;
				}
			}
		}
		return true;
	}
	/**
	 * Get the diagonal elements of the matrix
	 *
	 * @returns {number[]} - Array of diagonal elements
	 */
	getDiagonal() {
		if (this.rows !== this.columns) {
			throw new Error(
				'Diagonal elements can only be obtained from a square matrix.',
			);
		}

		const diagonal = [];

		for (let i = 0; i < this.rows; i++) {
			diagonal.push(this.values[i][i]);
		}

		return diagonal;
	}
	/**
	 * Normalize the columns of the matrix
	 *
	 * @returns {Matrix} - The normalized matrix
	 */
	normalizeColumns() {
		// Create a copy of the matrix
		const normalizedMatrix = new Matrix(
			this.rows,
			this.columns,
			this.values,
		);

		// Iterate over each column
		for (let col = 0; col < this.columns; col++) {
			// Compute the column norm
			let norm = 0;
			for (let row = 0; row < this.rows; row++) {
				norm += Indices.power(this.values[row][col], 2);
			}
			norm = Indices.root(norm, 2);

			// Normalize the column elements
			for (let row = 0; row < this.rows; row++) {
				normalizedMatrix.values[row][col] /= norm;
			}
		}

		return normalizedMatrix;
	}
}
