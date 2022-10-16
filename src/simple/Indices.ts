/**
 * @author Noinkin
 */

export type nOF = { numerator: number; denominator: number } | number;

/**
 * Class for all indices related functions.
 */
export class Indices {
	/**
	 * Returns the inputted number multiplied by itself the specified amount of times
	 * @param {number} number - The number to multiply by itself
	 * @param {nOF} [power] - The amount of times to multiply number by itself
	 * @example <caption>Example 1 - Without specifying a power</caption>
	 * // returns 25
	 * Indices.power(5)
	 * @example <caption>Example 2 - With specifying a power</caption>
	 * // returns 8
	 * Indices.power(2, 3)
	 * @returns {number} The inputted number multiplied by itself the specified amount of times
	 */
	static power(number: number, power: nOF): number {
		if (typeof power != 'number' && !power.denominator)
			throw new Error(
				'TypeError: power must be a number or an object with a denominator or numerator',
			);
		let p: number;
		if (typeof number === 'object') {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			if (power.denominator && power.numerator) {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				p = power.numerator / power.denominator;
			} else {
				throw new Error(
					'TypeError: power must be a number or an object with a denominator or numerator',
				);
			}
		} else if (typeof power === 'number') {
			p = power;
		} else
			throw new Error(
				'TypeError: power must be a number or an object with a denominator or numerator',
			);
		if (!power) p = 2;
		return number ** p;
	}
}
