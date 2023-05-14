/**
 * Class for all indices related functions.
 */
export class Indices {
	/**
	 * Returns the inputted number multiplied by itself the specified amount of times
	 * @param {number} number - The number to multiply by itself
	 * @param {(number|object)} [power=2] - The amount of times to multiply number by itself
	 * @example <caption>Example 1 - Without specifying a power</caption>
	 * // returns 25
	 * Indices.power(5)
	 * @example <caption>Example 2 - With specifying a power</caption>
	 * // returns 8
	 * Indices.power(2, 3)
	 * @returns {number} The inputted number multiplied by itself the specified amount of times
	 */
	static power(number: number, power: (number | object)): number {
		let p: number;
		if (
			typeof power === 'object' &&
            'numerator' in power &&
            'denominator' in power
		) {
			if (power.denominator && power.numerator && typeof power.numerator === 'number' && typeof power.denominator === 'number' ) {
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
