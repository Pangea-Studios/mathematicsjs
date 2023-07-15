import { Matrix } from '../matrices/Matrices';

/**
 *
 * Class to create and manipulate Polynomials up to 4th degree
 */

export class polynomial {
	readonly coefficients: number[];
	readonly degree: number;
	readonly string: string;

	constructor(coefficients: number[]) {
		this.coefficients = coefficients;
		this.degree = coefficients.length;
		for (let i = coefficients.length - 1; i >= 0; i--) {
			this.string += coefficients[i] + 'x^' + i;
			if (coefficients[i + 1]) {
				this.string += ' + ';
			}
		}
	}

	/**
	 * Evaluates the given number using the polynomial equation defined by the coefficients.
	 *
	 * @param {number} x - The number to be evaluated.
	 * @return {number} The result of the evaluation.
	 */
	evaluate(x: number): number {
		for (let i = 0; i < this.coefficients.length; i++) {
			x += this.coefficients[i] * x ** i;
		}
		return x;
	}

	/**
	 * Creates a sequence of numbers.
	 *
	 * @param {number} start - The starting number of the sequence. Defaults to 1.
	 * @param {number} end - The ending number of the sequence. Defaults to 5.
	 * @param {number} interval - The interval between numbers in the sequence. Defaults to 1.
	 * @return {number[]} An array containing the numbers in the sequence.
	 */
	createSequence(start = 1, end = 5, interval = 1): number[] {
		const result = [];
		for (let n = start; n <= end; n += interval) {
			result.push(this.evaluate(n));
		}
		return result;
	}

	/**
	 * Adds a polynomial to the current polynomial and returns the result.
	 *
	 * @param {polynomial} addend - The polynomial to be added.
	 * @return {polynomial} The resulting polynomial after addition.
	 */
	addPolynomial(addend: polynomial): polynomial {
		const maxLength = Math.max(
			this.coefficients.length,
			addend.coefficients.length,
		);
		const resultCoefficients = new Array(maxLength).fill(0);
		for (let i = 0; i < maxLength; i++) {
			const thisCoefficient = this.coefficients[i] || 0;
			const addendCoefficient = addend.coefficients[i] || 0;
			resultCoefficients[i] = thisCoefficient + addendCoefficient;
		}
		return new polynomial(resultCoefficients);
	}

	/**
	 * Subtracts a polynomial from another polynomial and returns the result.
	 *
	 * @param {polynomial} subtrahend - The polynomial to subtract from this polynomial.
	 * @return {polynomial} The resulting polynomial after subtraction.
	 */
	subtractPolynomial(subtrahend: polynomial): polynomial {
		const maxLength = Math.max(
			this.coefficients.length,
			subtrahend.coefficients.length,
		);
		const resultCoefficients = new Array(maxLength).fill(0);
		for (let i = 0; i < maxLength; i++) {
			const thisCoefficient = this.coefficients[i] || 0;
			const subtrahendCoefficient = subtrahend.coefficients[i] || 0;
			resultCoefficients[i] = thisCoefficient - subtrahendCoefficient;
		}
		return new polynomial(resultCoefficients);
	}

	/**
	 * Multiplies two polynomials.
	 *
	 * @param {polynomial} multiplier - The polynomial to multiply with.
	 * @return {polynomial} The product of the two polynomials.
	 */
	multiplyPolynomial(multiplier: polynomial): polynomial {
		const resultDegree = this.degree + multiplier.degree;
		const resultCoefficients = new Array(resultDegree + 1).fill(0);
		for (let i = 0; i <= this.degree; i++) {
			for (let j = 0; j <= multiplier.degree; j++) {
				resultCoefficients[i + j] +=
					this.coefficients[i] * multiplier.coefficients[j];
			}
		}
		return new polynomial(resultCoefficients);
	}

	/**
	 * Divides the polynomial by the given divisor polynomial.
	 *
	 * @param {polynomial} divisor - The polynomial to divide by.
	 * @return {polynomial} The quotient of the division.
	 */
	dividePolynomial(divisor: polynomial): polynomial {
		if (divisor.isZero()) {
			throw new Error('Division by zero polynomial');
		}

		let remainder: polynomial;
		const quotientDegree = this.degree - divisor.degree;
		const quotientCoefficients = new Array(quotientDegree + 1).fill(0);

		while (this.degree >= divisor.degree) {
			const termDegree = this.degree - this.degree;
			const quotientTerm =
				this.coefficients[this.degree] /
				divisor.coefficients[divisor.degree];
			quotientCoefficients[termDegree] = quotientTerm;

			const term = divisor
				.multiplyByNumber(quotientTerm)
				.multiplyByNumber(-1);
			remainder = this.subtractPolynomial(term);
		}

		return new polynomial(quotientCoefficients);
	}

	/**
	 * Multiplies the polynomial by a given number.
	 *
	 * @param {number} number - The number to multiply the polynomial by.
	 * @return {polynomial} - The resulting polynomial after multiplication.
	 */
	multiplyByNumber(number: number): polynomial {
		const resultCoefficients = this.coefficients.map(
			(coefficient) => coefficient * number,
		);
		return new polynomial(resultCoefficients);
	}

	/**
	 * Divides the polynomial by a given number.
	 *
	 * @param {number} number - The number to divide the polynomial by.
	 * @return {polynomial} The resulting polynomial after division.
	 */
	divideByNumber(number: number): polynomial {
		if (number === 0) {
			throw new Error('Division by zero');
		}

		const resultCoefficients = this.coefficients.map(
			(coefficient) => coefficient / number,
		);
		return new polynomial(resultCoefficients);
	}

	/**
	 * Check if all coefficients are zero.
	 *
	 * @return {boolean} True if all coefficients are zero, false otherwise.
	 */
	isZero(): boolean {
		return this.coefficients.every((coefficient) => coefficient === 0);
	}

	/**
	 * Calculates the polynomial differences of a given sequence.
	 *
	 * @param {number[]} sequence - The sequence to calculate the differences for.
	 * @return {number[][]} An array of arrays representing the polynomial differences.
	 */
	static calculatePolynomialDifferences(sequence: number[]): number[][] {
		function calculateDifferences(sequence: number[]): number[] {
			const differences: number[] = [];

			for (let i = 0; i < sequence.length - 1; i++) {
				differences.push(sequence[i + 1] - sequence[i]);
			}

			return differences;
		}
		const polynomialDifferences: number[][] = [];

		polynomialDifferences.push(sequence);
		let differences = calculateDifferences(
			polynomialDifferences[polynomialDifferences.length - 1],
		);
		while (differences.length !== 0) {
			differences = calculateDifferences(
				polynomialDifferences[polynomialDifferences.length - 1],
			);

			if (differences.length === 0) {
				break;
			}
			polynomialDifferences.push(differences);
		}

		return polynomialDifferences;
	}

	/**
	 * Returns the degree of a sequence.
	 *
	 * @param {number[]} sequence - The sequence to calculate the degree of.
	 * @return {number} The degree of the sequence.
	 */
	static degreeOfSequence(sequence: number[]): number {
		const diffs = this.calculatePolynomialDifferences(sequence);
		for (let i = 0; i < diffs.length; i++) {
			if (diffs[i].length === 1) {
				return i;
			}
		}
	}

	/**
	 * Calculates a polynomial based on a given sequence.
	 *
	 * @param {number[]} sequence - The input sequence of numbers.
	 * @return {polynomial} The calculated polynomial.
	 */
	static sequenceToPolynomial(sequence: number[]): polynomial {
		let a: [number, number][];
		for (let i = 0; i < sequence.length; i++) {
			a.push([i, sequence[i]]);
		}
		return this.interpolatePolynomial(a);
	}

	/**
	 * Returns a factorized string representation of a polynomial.
	 *
	 * @return {string} The factorized string representation of the polynomial.
	 */
	factorizePolynomial(): string {
		const factors: string[] = [];
		let polynomialString = '';

		for (let i = this.degree; i >= 0; i--) {
			const coefficient = this.coefficients[i];
			if (coefficient !== 0) {
				const term = `${Math.abs(coefficient)}x^${i}`;
				factors.push(term);
				polynomialString +=
					coefficient < 0 ? ` - ${term}` : ` + ${term}`;
			}
		}

		if (factors.length === 0) {
			return '0';
		}

		const leadingTerm = factors[0];
		let factorizedString = `${leadingTerm}`;
		const remainingFactors = factors.slice(1);

		while (remainingFactors.length > 0) {
			const factor = remainingFactors.shift();
			factorizedString = `(${factorizedString}) * ${factor}`;
		}

		return factorizedString;
	}
	/**
	 * Reverts factorization of a given factorized string and returns a polynomial.
	 *
	 * @param {string} factorizedString - The factorized string to be reverted.
	 * @return {polynomial} - The resulting polynomial after reverting the factorization.
	 */
	static revertFactorization(factorizedString: string): polynomial {
		const factors = factorizedString;
		const factorRegex = /\(([^)]+)\)/g;
		const polynomialCoefficients: number[] = [];

		let match;
		while ((match = factorRegex.exec(factors)) !== null) {
			const factor = match[1];
			const factorParts = factor.split('x');

			if (factorParts.length === 2) {
				const coefficient = parseFloat(factorParts[0]);
				const power = parseInt(factorParts[1].substring(1));
				if (!isNaN(coefficient) && !isNaN(power)) {
					polynomialCoefficients[power] = coefficient;
				}
			}
		}

		return new polynomial(polynomialCoefficients.reverse());
	}

	/**
	 * Returns the roots of a polynomial.
	 *
	 * @return {(number | string)[]} - An array containing the roots of the polynomial.
	 */
	roots(): (number | string)[] {
		const roots: (number | string)[] = [];

		if (this.degree === 0) {
			return roots; // No roots for constant polynomial
		}

		const coefficients = this.coefficients.slice().reverse(); // Reverse coefficients

		if (this.degree === 1) {
			roots.push(-coefficients[0] / coefficients[1]);
		} else if (this.degree === 2) {
			const a = coefficients[2];
			const b = coefficients[1];
			const c = coefficients[0];

			const discriminant = b ** 2 - 4 * a * c;

			if (discriminant >= 0) {
				const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
				const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
				roots.push(root1, root2);
			} else {
				const realPart = -b / (2 * a);
				const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
				roots.push(
					`${realPart}+${imaginaryPart}i`,
					`${realPart}-${imaginaryPart}i`,
				);
			}
		} else {
			// Use numerical methods for finding roots of higher-degree polynomials
			const epsilon = 1e-10; // Error tolerance for convergence
			const maxIterations = 100; // Maximum number of iterations

			const derivative = this.derivative();
			let x = 1; // Initial guess for the root

			for (let i = 0; i < maxIterations; i++) {
				const f = this.evaluate(x);
				const fDash = derivative.evaluate(x);

				const nextX = x - f / fDash;

				if (Math.abs(nextX - x) < epsilon) {
					roots.push(nextX);
					break;
				}

				x = nextX;
			}
		}

		return roots;
	}

	/**
	 * Calculate the derivative of the polynomial.
	 *
	 * @return {polynomial} The derivative of the polynomial.
	 */
	derivative(): polynomial {
		const derivativeCoefficients: number[] = [];

		for (let i = 1; i < this.coefficients.length; i++) {
			derivativeCoefficients.push(this.coefficients[i] * i);
		}

		return new polynomial(derivativeCoefficients);
	}

	/**
	 * Calculates the integral of the polynomial.
	 *
	 * @return {polynomial} The polynomial representing the integral.
	 */
	integral(): polynomial {
		const integralCoefficients: number[] = [];

		for (let i = 0; i < this.coefficients.length; i++) {
			integralCoefficients.push(this.coefficients[i] / (i + 1));
		}

		integralCoefficients.push(0);

		return new polynomial(integralCoefficients);
	}

	/**
	 * Interpolates a polynomial based on the given points.
	 *
	 * @param {Array<[number, number]>} points - An array of points, where each point is a tuple of x and y coordinates.
	 * @return {polynomial} - The interpolated polynomial.
	 */
	static interpolatePolynomial(points: [number, number][]): polynomial {
		const n = points.length;
		const xValues = points.map(([x, _]) => x);
		const yValues = points.map(([_, y]) => y);

		let coefficients: number[] = [];

		for (let i = 0; i < n; i++) {
			let termCoefficients: number[] = [1];

			for (let j = 0; j < n; j++) {
				if (i !== j) {
					const denominator = xValues[i] - xValues[j];
					const termCoefficient = 1 / denominator;
					termCoefficients = termCoefficients.map(
						(c) => c * termCoefficient,
					);
					termCoefficients.unshift(0);
					for (let k = termCoefficients.length - 1; k >= 0; k--) {
						termCoefficients[k] -=
							termCoefficients[k - 1] * xValues[j];
					}
				}
			}

			const y = yValues[i];
			for (let k = 0; k < termCoefficients.length; k++) {
				termCoefficients[k] *= y;
			}

			coefficients = coefficients.map(
				(c, idx) => c + termCoefficients[idx],
			);
		}

		return new polynomial(coefficients);
	}

	/**
	 * Calculates the polynomial regression for the given points and degree.
	 *
	 * @param {Array<[number, number]>} points - The array of points, where each point is represented as an array of two numbers [x, y].
	 * @param {number} degree - The degree of the polynomial regression.
	 * @return {polynomial} - The polynomial regression function.
	 */
	static polynomialRegression(
		points: [number, number][],
		degree: number,
	): polynomial {
		const xValues = points.map(([x, _]) => x);
		const yValues = points.map(([_, y]) => y);

		const matrix: number[][] = [];
		const coefficients: number[] = [];

		for (let i = 0; i <= degree; i++) {
			const row: number[] = [];

			for (let j = 0; j <= degree; j++) {
				let sum = 0;

				for (let k = 0; k < xValues.length; k++) {
					sum += Math.pow(xValues[k], i + j);
				}

				row.push(sum);
			}

			matrix.push(row);
		}

		for (let i = 0; i <= degree; i++) {
			let sum = 0;

			for (let j = 0; j < xValues.length; j++) {
				sum += Math.pow(xValues[j], i) * yValues[j];
			}

			coefficients.push(sum);
		}

		const matrixA = new Matrix(matrix);
		const vectorB = new Matrix([coefficients]);
		const matrixAInverse = matrixA.invert();
		const resultMatrix = vectorB.multiply(matrixAInverse);

		const resultCoefficients: number[] = [];
		for (let i = 0; i <= degree; i++) {
			resultCoefficients.push(resultMatrix.values[0][i]);
		}

		return new polynomial(resultCoefficients.reverse());
	}
}
