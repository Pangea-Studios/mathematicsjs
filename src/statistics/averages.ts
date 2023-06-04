import { add } from '../core/operations';

/**
 * Class to find averages of an array of numbers
 */
export class Averages {
	/**
	 * Finds the mean of an array of numbers
	 * @param {Array<number>} - The array of numbers to find the mean of
	 * @return {number} - The mean of the inputted numbers
	 */
	static mean(input: number[]) {
		let output = add(input);
		return (output /= input.length);
	}

	/**
	 * Finds the median of an array of numbers
	 * @param {Array<number>} - The array of numbers to find the median of
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
	 * @param {Array<number>} - The array of numbers to find the mode of
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
	 * @param {Array<number>} - The array of numbers to find the range of
	 * @return {number} - The range of the inputted numbers
	 */
	static range(input: number[]) {
		const max = input.reduce((a, b) => Math.max(a, b), -Infinity);
		const min = input.reduce((a, b) => Math.min(a, b), -Infinity);

		return max - min;
	}
}
