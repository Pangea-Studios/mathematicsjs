import { add } from '../core/operations';
import { findCount , isInAllArrays } from '../util';

/**
 * Class to find averages of an array of numbers
 */
export class StatisticalOperations {
	/**
	 * Finds the mean of an array of numbers
	 * @param {Array.<number>} - The array of numbers to find the mean of
	 * @return {number} - The mean of the inputted numbers
	 */
	static mean(input: number[]) {
		let output = add(input);
		return (output /= input.length);
	}

	/**
	 * Finds the median of an array of numbers
	 * @param {Array.<number>} - The array of numbers to find the median of
	 * @return {number} - The median of the inputted numbers
	 */
	static median(input: number[]) {
		let length = input.length;
		length = length / 2;
		if (length === Math.round(length)) return input[length];
		return input[length - 0.5] / input[length + 0.5];
	}

	/**
	 * Finds the mode of an array of numbers
	 * @param {Array.<number>} - The array of numbers to find the mode of
	 * @return {number} - The mode of the inputted numbers
	 */
	static mode(input: number[]) {
		if (input.length === 0) {
			return 0;
		}

		const m = input
			.reduce((items, current) => {
				const item =
					items.length === 0
						? null
						: items.find((x) => x === current);
				item
					? item.occurrence++
					: items.push({ value: current, occurrence: 1 });
				return items;
			}, [])
			.sort((a, b) => {
				if (a.occurrence < b.occurrence) {
					return 1;
				} else if (a.occurrence > b.occurrence || a.value < b.value) {
					return -1;
				} else {
					return a.value === b.value ? 0 : 1;
				}
			});

		return m[0].value;
	}

	/**
	 * Finds the range of an array of numbers
	 * @param {Array.<number>} - The array of numbers to find the range of
	 * @return {number} - The range of the inputted numbers
	 */
	static range(input: number[]) {
		const max = input.reduce(
			(a, b) => StatisticalOperations.max([a, b]),
			-Infinity,
		);
		const min = input.reduce(
			(a, b) => StatisticalOperations.min([a, b]),
			-Infinity,
		);

		return max - min;
	}

	/**
	 * Union of arrays.
	 *
	 * @param {number[][]} arrays - The arrays to be unioned.
	 * @return {number[]} The union of the arrays.
	 */
	static union(arrays: number[][]): number[] {
		let result: number[];
		for (let i = 0; i < arrays.length; i++) {
			for (let j = 0; j < arrays[i].length; j++) {
				if (findCount(result, arrays[i][j]) === 0) {
					result.push(arrays[i][j]);
				}
			}
		}
		return result;
	}

	/**
	 * Finds the intersection of multiple arrays.
	 *
	 * @param {number[][]} arrays - The arrays to find the intersection of.
	 * @return {number[]} - The resulting array with common elements.
	 */
	static intersection(arrays: number[][]): number[] {
		let result: number[];
		for (let i = 0; i < arrays.length; i++) {
			for (let j = 0; j < arrays[i].length; j++) {
				if (
					findCount(result, arrays[i][j]) === 0 &&
					isInAllArrays(arrays[i][j], arrays)
				) {
					result.push(arrays[i][j]);
				}
			}
		}
		return result;
	}

	/**
	 * Finds the maximum value in an array of numbers.
	 *
	 * @param {number[]} input - The array of numbers.
	 * @return {number} The maximum value in the array.
	 */
	static max(input: number[]) {
		let result = 0;
		for (let i = 0; i < input.length; i++) {
			if (input[i] > result) {
				result = input[i];
			}
		}
		return result;
	}

	/**
	 * Finds the minimum value in an array of numbers.
	 *
	 * @param {number[]} input - The array of numbers to search through.
	 * @return {number} The minimum value in the input array.
	 */
	static min(input: number[]) {
		let result = 0;
		for (let i = 0; i < input.length; i++) {
			if (input[i] < result) {
				result = input[i];
			}
		}
		return result;
	}
}
