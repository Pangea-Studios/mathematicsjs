export class Logarithms {
	/**
	 * Calculates the natural logarithm of a given number using an iterative series approximation.
	 *
	 * @param {number} x - the number to calculate the natural logarithm of
	 * @param {number} [accuracy=10] - the number of terms to use in the series approximation (default of 10)
	 * @throws {Error} Invalid input. ln(x) is only defined for x > 0
	 * @return {number} the natural logarithm of the given number
	 */
	static ln(x: number, accuracy = 10) {
		if (x <= 0) {
			throw new Error('Invalid input. ln(x) is only defined for x > 0');
		}

		let result = 0;

		for (let n = 1; n <= accuracy; n++) {
			const coefficient = (n % 2 === 0 ? -1 : 1) / n;
			const term = coefficient * Math.pow((x - 1) / x, n);
			result += term;
		}

		return result;
	}

	/**
	 * Calculates the logarithm of a number with a specified base to a given accuracy.
	 *
	 * @param {number} x - The number to calculate the logarithm of.
	 * @param {number} [base = 10] - The base of the logarithm (default of 10)
	 * @param {number} [accuracy = 10] - The number of decimal places to calculate to (default of 10)
	 * @return {number} - The calculated logarithm of x with base base, with the specified accuracy.
	 */
	static log(x: number, base = 10, accuracy = 10) {
		return this.ln(x, accuracy) / this.ln(base, accuracy);
	}
}
