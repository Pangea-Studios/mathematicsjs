import { Equations } from './Equations';
import { find } from '../util';
import { isInAllArrays } from '../util';
/**
 * Class containing summation functions
 */
export class LargeOperators {
	/**
	 * Calculates the additive summation of a given equation within a specified range.
	 *
	 * @param {string} equation - The equation to be evaluated.
	 * @param {number} start - The starting value of the range.
	 * @param {number} end - The ending value of the range.
	 * @param {number} interval - The interval between each value in the range.
	 * @return {number} The sum of the evaluated equation for each value in the range.
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
	 * Calculates the multiplicative summation of a given equation.
	 *
	 * @param {string} equation - The equation to evaluate.
	 * @param {number} start - The starting value for the summation.
	 * @param {number} end - The ending value for the summation.
	 * @param {number} interval - The interval between each value in the summation.
	 * @return {number} - The result of the multiplicative summation.
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
