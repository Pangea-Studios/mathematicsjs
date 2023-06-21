import { Equations } from './Equations';

/**
 * Class containing summation functions
 */
export class Summation {
	/**
	 * Calculates the additive summation of an equation for a given range and interval.
	 *
	 * @param {string} equation - The equation to be evaluated, can use variable 'n'.
	 * @param {number} start - The starting value for variable 'n'.
	 * @param {number} end - The ending value for variable 'n'.
	 * @param {number} interval - The increment between each value of 'n'.
	 * @return {number} The result of the additive summation of the equation for the given range and interval.
	 */
	static AdditiveSummation(
		equation: string,
		start: number,
		end: number,
		interval: number,
	): number {
		let result = 0;
		for (let n = start; n <= end; n += interval) {
			result += Number(Equations.evaluate(equation, { n: n }));
		}
		return result;
	}

	/**
	 * Calculates the multiplicative summation of the given equation for a given range.
	 *
	 * @param {string} equation - the equation to be evaluated
	 * @param {number} start - the start value of the range
	 * @param {number} end - the end value of the range
	 * @param {number} interval - the interval between each value in the range
	 * @return {number} the result of the multiplicative summation
	 */
	static MultiplicativeSummation(
		equation: string,
		start: number,
		end: number,
		interval: number,
	): number {
		let result = 0;
		for (let n = start; n <= end; n += interval) {
			result *= Number(Equations.evaluate(equation, { n: n }));
		}
		return result;
	}
}
