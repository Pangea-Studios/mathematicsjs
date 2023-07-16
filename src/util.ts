import { Absolute } from './core/operations';
import { Logarithms } from './equations/Logarithms';

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
	a = Absolute(a);
	b = Absolute(b);
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
	return a * 10 ** Math.floor(Logarithms.log(b) / Math.log(10) + 1) + b;
}

export class Color {
	readonly red: number;
	readonly green: number;
	readonly blue: number;
	readonly alpha: number;

	constructor(red: number, green: number, blue: number, alpha: number) {
		this.red = red;
		this.green = green;
		this.blue = blue;
		this.alpha = alpha;
	}
}

export class NumberRange {
	readonly min: number;
	readonly max: number;
	readonly operand1: '≤' | '<';
	readonly operand2: '≤' | '<';
	constructor(
		min: number,
		operand1: '≤' | '<',
		max: number,
		operand2: '≤' | '<',
	) {
		// min <= x < max
		this.operand1 = operand1;
		this.operand2 = operand2;
		this.min = min;
		this.max = max;
	}

	returnString() {
		return (
			String(this.min) +
			' ' +
			this.operand1 +
			' x ' +
			String(this.max) +
			' ' +
			this.operand2
		);
	}

	isInRange(number: number) {
		let condition1 = false;
		let condition2 = false;
		if (this.operand1 === '<') {
			condition1 = number > this.min;
		} else {
			condition1 = number >= this.min;
		}

		if (this.operand2 === '<') {
			condition2 = number < this.max;
		} else {
			condition2 = number <= this.max;
		}

		return condition1 && condition2;
	}
}

/**
 * Counts the number of occurrences of a target value in an array or string.
 *
 * @param {Array<any> | string} array - The array or string to search in.
 * @param {any} target - The target value to count occurrences of.
 * @return {number} The number of occurrences of the target value.
 */
export function find(array: Array<any> | string, target: any) {
	let count = 0;
	if (Array.isArray(array)) {
		for (let i = 0; i < array.length; i++) {
			if (array[i] === target) {
				count++;
			}
		}
	} else if (typeof array === 'string') {
		array = array.split('');
		for (let i = 0; i < array.length; i++) {
			if (array[i] === target) {
				count++;
			}
		}
	}
	return count;
}

/**
 * Checks if the given object exists in all of the arrays.
 *
 * @param {any} object - The object to check.
 * @param {any[][]} arrays - The arrays to search.
 * @return {boolean} Returns true if the object exists in all arrays, false otherwise.
 */
export function isInAllArrays(object: any, arrays: any[][]): boolean {
	for (const array of arrays) {
		if (find(array, object) === 0) {
			return false;
		}
	}
	return true;
}

/**
 * Replaces a portion of an array with a new set of values.
 *
 * @param {any[]} array - The original array.
 * @param {any[]} values - The values to insert into the array.
 * @param {number} startPos - The starting position of the replacement.
 * @param {number} endPos - The ending position of the replacement.
 * @return {any[]} - The modified array.
 */
export function arrayReplace(
	array: any[],
	values: any[],
	startPos: number,
	endPos: number,
): any[] {
	return [...array.slice(0, startPos), ...values, ...array.slice(endPos + 1)];
}

/**
 * Rounds a number down to the specified number of decimal places.
 *
 * @param {number} number - The number to round down.
 * @param {number} decimalPlaces - The number of decimal places to round down to. Default is 0.
 * @return {number} The rounded number.
 */
export function floorDP(number: number, decimalPlaces = 0) {
	return Number(
		String(number).split('.')[0] +
			'.' +
			String(number).split('.')[1].slice(0, decimalPlaces),
	);
}

/**
 * Rounds a number down to a specified number of significant figures.
 *
 * @param {number} number - The number to be rounded.
 * @param {number} significantFigures - The number of significant figures to round to. Defaults to 3.
 * @return {number} - The rounded number.
 */
export function floorSF(number: number, significantFigures = 3) {
	return Number(String(number).slice(0, significantFigures));
}

export function cielDP(number: number, decimalPlaces = 0) {}

export function cielSF(number: number, significantFigures = 3) {}

export function roundDP(number: number, decimalPlaces = 0) {}

export function roundSF(number: number, significantFigures = 3) {}
