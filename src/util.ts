/**
 * Find the GCD of 2 numbers
 * @param {number} a The first number 
 * @param {number} b The second number
 * @example <caption>Example 1 - Non Prime Numbers</caption>
 * // returns 2
 * gcd(8,12)
 * @example <caption>Example 2 - Prime Numbers</caption>
 * // returns 1
 * gcd(5,7)
 * @returns {number} The GCD of the two inputted numbers
 */
export function gcd2(a: number, b: number): number {
	if (a === 0) return b;
	return gcd2(a % b, a);
}

/**
 * Find the GCD of the inputted numbers
 * @param {number[]} arr The numbers to find the GCD of 
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
