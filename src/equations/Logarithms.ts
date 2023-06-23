interface options {
	accuracy?: number;
	cache?: boolean;
	centre?: number;
}

/**
 * Class containing logarithm functions
 */
export class Logarithms {
	static readonly logCache = new Map<number, number>();
	static readonly lnCache = new Map<number, number>();

	/**
	 * Calculates the natural logarithm of a given number using an iterative series approximation.
	 *
	 * @param {number} x - the number to calculate the natural logarithm of
	 * @param {object} [options] - options
	 * @param {number} [options.accuracy=10] - precision of the result (default of 10)
	 * @param {boolean} [options.cache=true] - cache the result
	 * @param {number} [options.centre=1] - the centre value
	 * @throws {Error} Invalid input. ln(x) is only defined for x > 0
	 * @return {number} the natural logarithm of the given number
	 */
	static ln(
		x: number,
		options: options = { accuracy: 10, cache: true, centre: 1 },
	) {
		if (x <= 0) {
			throw new Error('Invalid input. ln(x) is only defined for x > 0');
		}
		if (this.lnCache.has(x)) {
			return this.lnCache.get(x);
		}

		let result = 0;

		for (let n = 1; n <= options.accuracy * 1000; n++) {
			result += ((-1) ** (n + 1) / n) * (x - options.centre) ** n;
		}
		if (options.cache === true) {
			this.lnCache.set(x, result);
		}
		return result;
	}

	/**
	 * Calculates the logarithm of a number with a specified base to a given accuracy.
	 *
	 * @param {number} x - The number to calculate the logarithm of
	 * @param {object} [options] - options
	 * @param {number} [options.accuracy=10] - precision of the result (default of 10)
	 * @param {boolean} [options.cache=true] - cache the result
	 * @param {number} [options.centre=1] - the centre value
	 * @return {number} - The calculated logarithm of x with base base, with the specified accuracy.
	 */
	static log(
		x: number,
		options: options = { accuracy: 10, cache: true, centre: 1 },
	) {
		if (this.logCache.has(x)) {
			return this.logCache.get(x);
		}
		const result =
			this.ln(x, {
				accuracy: options.accuracy,
				cache: options.cache,
				centre: options.centre,
			}) /
			this.ln(10, {
				accuracy: options.accuracy,
				cache: options.cache,
				centre: options.centre,
			});
		if (options.cache === true) {
			this.logCache.set(x, result);
		}
		return result;
	}
}
