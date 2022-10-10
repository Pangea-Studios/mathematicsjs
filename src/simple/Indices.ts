/**
 * @author Noinkin
 */

export type nOF = { numerator: number, denominator: number } | number

/**
 * Class for all indices related functions.
 * @name Indices
 */
export class Indices {
	/**
	 * Returns the inputted number multiplied by itself the specified amount of times
	 * @param {number} number - The number to multiply by itself
	 * @param {any} [power] - The amount of times to multiply number by itself
	 * @example <caption>Example 1 - Without specifying a power</caption>
	 * // returns 25
	 * Indices.power(5)
	 * @example <caption>Example 2 - With specifying a power</caption>
	 * // returns 8
	 * Indices.power(2, 3)
	 * @returns {Number} The inputted number multiplied by itself the specified amount of times
	 */
	static power(number: number, power: nOF): number {
		if (!power) return number * number;
		if (power === 1) return number;
		if (power === 0) return 1;
		if (power.numerator || power.denominator) {
			return this.power(
				Math.pow(number, 1 / power.denominator),
				power.numerator,
			);
		}
		if(typeof power != 'number') throw new Error('TypeError: Power must be a number or object with a numerator and denominator value')
		let newNumber: number = number;
		const newPower: number = power - 1;
		for (let i = 0; i < newPower; i++) {
			newNumber = newNumber * number;
		}
		return newNumber;
	}
}
