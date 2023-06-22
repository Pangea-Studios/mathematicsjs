/**
 * Find the GCD of the inputted numbers
 * @param {number[]} arr - The numbers to find the GCD of
 * @param {Object} [options] Extra options
 * @param {number} [options.base] The base of the numbers you inputted
 * @example <caption>Example 1 - Non Prime Numbers</caption>
 * // returns 2
 * gcd([8,12,16])
 * @example <caption>Example 2 - Prime Numbers</caption>
 * // returns 1
 * gcd([7,13,5])
 * @returns {number} The GCD of the inputted numbers
 */
export function gcd(arr: number[]): number {
	const n = arr.length;
	let result = arr[0];
	for (let i = 1; i < n; i++) {
		result = gcd2(arr[i], result);

		if (result == 1) {
			return 1;
		}
	}
	return result;
}

/**
 * Find the GCD of two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @param {Object} [options] Extra options
 * @param {number} [options.base] The base of the numbers you inputted
 * @returns {number} The GCD of the two numbers
 */
export function gcd2(a: number, b: number): number {
	a = Math.abs(a);
	b = Math.abs(b);
	while (b !== 0) {
		const t = b;
		b = a % b;
		a = t;
	}

	return a;
}

/**
 * Converts a number from one base to another.
 * @param {number|string} number - The inputted number to be converted.
 * @param {number} fromBase - The base of the inputted number.
 * @param {number} toBase - The base to convert to.
 * @example <caption>Example - Converting Base 10 to Base 36</caption>
 * // returns 'zz'
 * convertBase(number: 3535, fromBase: 10, toBase: 36)
 * @returns {number|string} - The inputted number in the specified base.
 */
export function convertBase(
	number: number | string,
	fromBase: number,
	toBase: number,
) {
	if (fromBase > 36 || fromBase < 2 || toBase > 36 || toBase < 2) {
		return null;
	}

	const base10 = parseInt(number.toString(), fromBase);

	if (toBase === 10) {
		return base10;
	} else {
		return base10.toString(toBase);
	}
}

/**
 * Concatenates two numbers in a given base.
 *
 * @param {number} a - The first number to concatenate.
 * @param {number} b - The second number to concatenate.
 * @param {number} [base=10] - The base to use for the concatenation.
 * @return {number} The concatenated number in the given base.
 */
export function concatenate(a: number, b: number) {
	return a * Math.pow(10, Math.floor(Math.log(b) / Math.log(10)) + 1) + b;
}
