/**
 * Class to create and manipulate Polynomials up to 4th degree
 */

export class polynomial {
	readonly a: number;
	readonly b: number;
	readonly c: number;
	readonly d: number;
	readonly e: number;
	readonly string: string;
	constructor(a = 0, b = 0, c = 0, d = 0, e = 0) {
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.e = e;
		this.string =
			this.e +
			'x^4 + ' +
			this.d +
			'x^3 + ' +
			this.c +
			'x^2 + ' +
			this.b +
			'x + ' +
			this.a;
	}

	/**
	 * Calculates the value of the polynomial function at a given input.
	 *
	 * @param {number} x - The input value for the polynomial function.
	 * @return {number} The value of the polynomial function at the given input.
	 */
	evaluate(x: number): number {
		return (
			this.e * x ** 4 +
			this.d * x ** 3 +
			this.c * x ** 2 +
			this.b * x +
			this.a
		);
	}

	/**
	 * Creates a sequence of numbers based on the given parameters from the polynomial.
	 *
	 * @param {number} firstTerm - The first term of the sequence (default: 0).
	 * @param {number} lastTerm - The last term of the sequence (default: 5).
	 * @param {number} interval - The interval between terms (default: 1).
	 * @return {number[]} An array of numbers representing the sequence.
	 */
	createSequence(firstTerm = 0, lastTerm = 5, interval = 1): number[] {
		let result: number[];
		for (let i = firstTerm; i <= lastTerm; i += interval) {
			result.push(this.evaluate(i));
		}
		return result;
	}

	/**
	 * Detects the degree of the polynomial based on the given sequence and returns a polynomial object.
	 *
	 * @param {number[]} sequence - The sequence of numbers.
	 * @return {polynomial} - The polynomial object.
	 */
	static sequenceToPolynomial(sequence: number[]): polynomial {
		const degree = polynomial.detectSequenceDegree(sequence);
		if (degree === 1) {
			let diff = this.calculatePolynomialDifferences(sequence)[1][0];
			return new polynomial(sequence[0][0] - diff, diff);
		} else if (degree === 2) {
			let diffArray = this.calculatePolynomialDifferences(sequence);
			let c = diffArray[2][0] / 2;
			let b = diffArray[1][0] - 3 * c;
			let a = diffArray[0][0] - (c + b);
			return new polynomial(a, b, c);
		} else if (degree === 3) {
			let diffArray = this.calculatePolynomialDifferences(sequence);
			let d = diffArray[3][0] / 6;
			let c = (diffArray[2][0] - 12 * d) / 2;
			let b = 0;
			let a = 0;
			return new polynomial(a, b, c, d);
		}
	}

	/**
	 * Detects the type of sequence based on the given sequence array.
	 *
	 * @param {number[]} sequence - The sequence array to analyze.
	 * @return {number} The type of the sequence: 1 for linear, 2 for quadratic, 3 for cubic, 4 for quartic.
	 * @throws {Error} If the sequence is too short or if it is an invalid sequence above the 4th degree.
	 */
	static detectSequenceDegree(sequence: number[]): number {
		const length = sequence.length;

		if (length < 2) {
			throw new Error('Too short sequence.');
		}

		let isLinear = true;
		let isQuadratic = true;
		let isCubic = true;
		let isQuartic = true;

		for (let i = 0; i < length - 1; i++) {
			const diff = sequence[i + 1] - sequence[i];
			if (isLinear && diff !== sequence[1] - sequence[0]) {
				isLinear = false;
			}

			const squaredDiff = diff * diff;
			if (
				isQuadratic &&
				squaredDiff !== sequence[2] - sequence[1] * 2 + sequence[0]
			) {
				isQuadratic = false;
			}

			const cubicDiff = diff * diff * diff;
			if (
				isCubic &&
				cubicDiff !==
					sequence[3] -
						sequence[2] * 3 +
						sequence[1] * 3 -
						sequence[0]
			) {
				isCubic = false;
			}

			const quarticDiff = cubicDiff * diff;
			if (
				isQuartic &&
				quarticDiff !==
					sequence[4] -
						sequence[3] * 4 +
						sequence[2] * 6 -
						sequence[1] * 4 +
						sequence[0]
			) {
				isQuartic = false;
			}
		}

		if (isLinear) {
			return 1;
		} else if (isQuadratic) {
			return 2;
		} else if (isCubic) {
			return 3;
		} else if (isQuartic) {
			return 4;
		} else {
			throw new Error('Invalid sequence or over 4th degree.');
		}
	}

	/**
	 * Calculates the differences between consecutive elements in a sequence.
	 *
	 * @param {number[]} sequence - The sequence of numbers.
	 * @return {number[]} An array of differences between consecutive elements.
	 */
	static calculateDifferences(sequence: number[]): number[] {
		const differences: number[] = [];

		for (let i = 0; i < sequence.length - 1; i++) {
			differences.push(sequence[i + 1] - sequence[i]);
		}

		return differences;
	}

	/**
	 * Calculate the polynomial differences of a given sequence.
	 *
	 * @param {number[]} sequence - The sequence of numbers to calculate differences for.
	 * @return {number[][]} - An array of arrays representing the polynomial differences.
	 */
	static calculatePolynomialDifferences(sequence: number[]): number[][] {
		const polynomialDifferences: number[][] = [];

		polynomialDifferences.push(sequence);

		while (true) {
			const differences = this.calculateDifferences(
				polynomialDifferences[polynomialDifferences.length - 1],
			);

			if (differences.length === 0) {
				break;
			}

			polynomialDifferences.push(differences);
		}

		return polynomialDifferences;
	}
}
