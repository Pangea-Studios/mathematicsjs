import { Absolute as abs } from '../core/operations';

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
	 * @param {Array.<Array.<number>>} values - The values of the matrix
	 */
	constructor(values: number[][]) {
		this.rows = values.length;
		this.columns = values[0].length;
		this.values = values;
	}

	/**
	 * Calculate and return the determinant of the matrix.
	 *
	 * @return {number} The determinant of the matrix.
	 */
	calculateDeterminant(): number {
		// Calculate and return the determinant of the matrix
		if (this.rows === 2 && this.columns === 2) {
			const [[a, b], [c, d]] = this.values;
			return a * d - b * c;
		} else {
			console.log(
				'Determinant calculation not implemented for matrices larger than 2x2.',
			);
			return 0;
		}
	}

	/**
	 * Concatenate two matrices horizontally.
	 *
	 * @param {Matrix} matrix2 - The matrix to be concatenated.
	 * @return {Matrix} A new matrix that is the concatenation of this matrix and matrix2.
	 */
	concatMatrix(matrix2: Matrix): Matrix {
		// Concatenate two matrices horizontally
		const result: number[][] = [];
		for (let i = 0; i < this.values.length; i++) {
			result.push(this.values[i].concat(matrix2[i]));
		}
		return new Matrix(result);
	}

	/**
	 * Returns the inverse values of the matrix.
	 *
	 * @return {Matrix} The matrix with the inverse values.
	 */
	getInverseValues(): Matrix {
		const numRows = this.rows;
		const numCols = this.columns;
		const result: number[][] = [];
		for (let i = 0; i < numRows; i++) {
			const row: number[] = [];
			for (let j = numCols / 2; j < numCols; j++) {
				row.push(this.values[i][j]);
			}
			result.push(row);
		}
		return new Matrix(result);
	}

	/**
	 * Apply Gaussian elimination to the matrix and return the reduced row echelon form.
	 *
	 * @return {Matrix} The matrix in reduced row echelon form.
	 */
	applyGaussianElimination(): Matrix {
		// Apply Gaussian elimination to the matrix and return the reduced row echelon form
		const numRows = this.rows;
		const numCols = this.columns;
		const result = this.values.map((row) => [...row]); // Create a copy of the matrix

		let lead = 0;
		for (let r = 0; r < numRows; r++) {
			if (numCols <= lead) {
				break;
			}
			let i = r;
			while (result[i][lead] === 0) {
				i++;
				if (numRows === i) {
					i = r;
					lead++;
					if (numCols === lead) {
						break;
					}
				}
			}
			if (numCols === lead) {
				break;
			}
			[result[i], result[r]] = [result[r], result[i]];
			const lv = result[r][lead];
			for (let j = 0; j < numCols; j++) {
				result[r][j] /= lv;
			}
			for (let i = 0; i < numRows; i++) {
				if (i !== r) {
					const lv2 = result[i][lead];
					for (let j = 0; j < numCols; j++) {
						result[i][j] -= lv2 * result[r][j];
					}
				}
			}
			lead++;
		}

		return new Matrix(result);
	}

	/**
	 * Inverts the matrix.
	 *
	 * @return {Matrix | null} The inverted matrix, or null if it is not possible to invert.
	 */
	invert(): Matrix | null {
		// Check if the matrix is square (has equal rows and columns)
		if (this.rows !== this.columns) {
			console.log('Cannot invert a non-square matrix.');
			return null;
		}

		// Calculate the determinant of the matrix
		const determinant = this.calculateDeterminant();
		if (determinant === 0) {
			console.log('Matrix is not invertible (determinant is zero).');
			return null;
		}

		// Create an identity matrix of the same size
		const identityMatrix = Matrix.eye(this.columns);

		// Apply Gaussian elimination to find the inverse
		const augmentedMatrix = this.concatMatrix(identityMatrix);
		const reducedRowEchelonForm =
			augmentedMatrix.applyGaussianElimination();
		const inverseValues = reducedRowEchelonForm.getInverseValues();

		// Create and return the inverted matrix
		return inverseValues;
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
		return new Matrix(result);
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

		return new Matrix(result);
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

		return new Matrix(result);
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

		return new Matrix(result);
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

		return new Matrix(result);
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

		return new Matrix(result);
	}

	/**
	 * Performs eigenvalue decomposition on a square matrix.
	 *
	 * @return {object} An object containing the eigenvalues and eigenvectors.
	 */
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
		let A = new Matrix(this.values);

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
	static eye(size: number) {
		const values = [];

		for (let i = 0; i < size; i++) {
			const row = new Array(size).fill(0);
			row[i] = 1;
			values.push(row);
		}

		return new Matrix(values);
	}
	/**
	 * Check if the matrix is diagonal (all off-diagonal elements are close to zero)
	 *
	 * @returns {boolean} - True if the matrix is diagonal, false otherwise
	 */
	isDiagonal() {
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.columns; j++) {
				if (i !== j && abs(this.values[i][j]) > 1e-10) {
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
		const normalizedMatrix = new Matrix(this.values);

		// Iterate over each column
		for (let col = 0; col < this.columns; col++) {
			// Compute the column norm
			let norm = 0;
			for (let row = 0; row < this.rows; row++) {
				norm += this.values[row][col] ** 2;
			}
			norm = norm ** 0.5;

			// Normalize the column elements
			for (let row = 0; row < this.rows; row++) {
				normalizedMatrix.values[row][col] /= norm;
			}
		}

		return normalizedMatrix;
	}

	/**
	 * Perform QR decomposition of the matrix
	 *
	 * @returns {Object} - Object containing orthogonal matrix Q and upper triangular matrix R
	 */
	qrDecomposition() {
		if (this.rows < this.columns) {
			throw new Error(
				'QR decomposition requires a matrix with more rows than columns.',
			);
		}

		const A = new Matrix(this.values);
		const Q = Matrix.zeros(this.rows, this.columns);
		const R = Matrix.zeros(this.columns, this.columns);

		for (let j = 0; j < this.columns; j++) {
			let v = A.getColumn(j);

			for (let i = 0; i < j; i++) {
				const q = Q.getColumn(i);
				const r = q.transpose().multiply(v);
				R.set(i, j, r.values[0][0]);

				v = v.subtract(q.multiply(r));
			}
			const norm = v.norm();
			R.set(j, j, norm);

			Q.setColumn(j, v.divideScalar(norm));
		}

		return { Q, R };
	}

	/**
	 * Calculates the norm of the matrix.
	 *
	 * @return {number} The norm of the matrix.
	 */
	norm(): number {
		let sum = 0;
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.columns; j++) {
				sum += this.values[i][j] * this.values[i][j];
			}
		}
		return sum ** 0.5;
	}

	/**
	 * Creates a matrix filled with zeros.
	 *
	 * @param {number} rows - The number of rows in the matrix.
	 * @param {number} columns - The number of columns in the matrix.
	 * @return {Matrix} The matrix filled with zeros.
	 */
	static zeros(rows: number, columns: number): Matrix {
		const values = new Array(rows)
			.fill(0)
			.map(() => new Array(columns).fill(0));
		return new Matrix(values);
	}

	/**
	 * Gets a column from the matrix.
	 *
	 * @param {number} columnIndex - The index of the column to retrieve.
	 * @return {Matrix} A new Matrix containing the column values.
	 */
	getColumn(columnIndex: number): Matrix {
		const columnValues = this.values.map((row) => [row[columnIndex]]);
		return new Matrix(columnValues);
	}

	/**
	 * Set the values of a specific column in the matrix.
	 *
	 * @param {number} columnIndex - The index of the column to set.
	 * @param {Matrix} column - The column values to set.
	 * @return {void} This function does not return a value.
	 */
	setColumn(columnIndex: number, column: Matrix): void {
		if (column.rows !== this.rows || column.columns !== 1) {
			throw new Error('Invalid column dimensions.');
		}
		for (let i = 0; i < this.rows; i++) {
			this.values[i][columnIndex] = column.values[i][0];
		}
	}
	/**
	 * Set the value of a specific cell in the matrix.
	 *
	 * @param {number} row - The row index of the cell.
	 * @param {number} column - The column index of the cell.
	 * @param {number} value - The value to set in the cell.
	 * @return {void} This function does not return a value.
	 */
	set(row: number, column: number, value: number): void {
		this.values[row][column] = value;
	}
	/**
	 * Transposes the matrix.
	 *
	 * @return {Matrix} The transposed matrix.
	 */
	transpose(): Matrix {
		const resultValues = new Array(this.columns)
			.fill(0)
			.map(() => new Array(this.rows).fill(0));

		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.columns; j++) {
				resultValues[j][i] = this.values[i][j];
			}
		}

		return new Matrix(resultValues);
	}
}
