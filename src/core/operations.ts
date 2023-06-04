type OperationsInput = number | { numerator: number; denominator: number };

/**
 * Calculates the sum of all numbers and fraction inputs.
 *
 * @param {Array.<number | {numerator: number, denominator: number}>} inputs - An array of OperationsInput objects.
 * @return {number} The sum of all numbers and fractions.
 */
export function add(inputs: OperationsInput[]) {
	let total: number;
	for (const input of inputs) {
		if (typeof input === 'number') {
			total += input;
		} else if (
			typeof input === 'object' &&
			'numerator' in input &&
			'denominator' in input
		) {
			total += input.numerator / input.denominator;
		}
	}
	return total;
}

/**
 * Subtracts all the numbers and fractions in the given array of operations.
 *
 * @param {Array.<number | {numerator: number, denominator: number}>} inputs - An array of numbers and fractions to subtract.
 * @return {number} The result of subtracting all the inputs.
 */
export function subtract(inputs: OperationsInput[]) {
	let total: number = null;
	for (const input of inputs) {
		if (typeof input === 'number') {
			if (input === inputs[0] && total === null) {
				total = input;
			} else {
				total -= input;
			}
		} else if (
			typeof input === 'object' &&
			'numerator' in input &&
			'denominator' in input
		) {
			if (input === inputs[0] && total === null) {
				total = input.numerator / input.denominator;
			} else {
				total -= input.numerator / input.denominator;
			}
		}
	}
	return total;
}

/**
 * Multiplies a list of numbers and/or fractions.
 *
 * @param {Array.<number | {numerator: number, denominator: number}>} inputs - An array of numbers and/or fractions to multiply.
 * @return {number} The result of multiplying all inputs together.
 */
export function multiply(inputs: OperationsInput[]) {
	let total: number = null;
	for (const input of inputs) {
		if (typeof input === 'number') {
			if (input === inputs[0] && total === null) {
				total = input;
			} else {
				total *= input;
			}
		} else if (
			typeof input === 'object' &&
			'numerator' in input &&
			'denominator' in input
		) {
			if (input === inputs[0] && total === null) {
				total = input.numerator / input.denominator;
			} else {
				total *= input.numerator / input.denominator;
			}
		}
	}
	return total;
}

/**
 * Divides a list of numbers and/or fractions and returns the result.
 *
 * @param {Array.<number | {numerator: number, denominator: number}>} inputs - An array of numbers and/or objects with a numerator and denominator.
 * @return {number} - The result of dividing all the numbers/fractions in the input array.
 */
export function divide(inputs: OperationsInput[]) {
	let total: number = null;
	for (const input of inputs) {
		if (typeof input === 'number') {
			if (input === inputs[0] && total === null) {
				total = input;
			} else {
				total /= input;
			}
		} else if (
			typeof input === 'object' &&
			'numerator' in input &&
			'denominator' in input
		) {
			if (input === inputs[0] && total === null) {
				total = input.numerator / input.denominator;
			} else {
				total /= input.numerator / input.denominator;
			}
		}
	}
	return total;
}

export function summation()
