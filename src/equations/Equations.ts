import { Factorial } from '../core/operations';
import { Logarithms } from './Logarithms';
import { TrigonometryFunctions as Trig } from '../trigonometry/Functions';
import { StatisticalOperations as SO } from '../statistics/StatisticalOperations';

/**
 * Class containing equation utilities
 */
export class Equations {
	private static find(array: any[] | string, target: string): number {
		let count = 0;
		if (Array.isArray(array)) {
			count = array.filter((item) => item === target).length;
		} else if (typeof array === 'string') {
			count = array.split('').filter((char) => char === target).length;
		}
		return count;
	}
	/**
	 * Parses a mathematical equation string with given variables.
	 *
	 * @param {string} equation - the equation to be parsed
	 * @return {Array<string|number> | 'Error'} the result of the evaluation or 'Error' if the equation is invalid
	 */
	static parseEquation(equation: string): any[] {
		const result: any[] = equation.replace(/\s/g, '').split('');
		if (
			equation === '' ||
			!equation ||
			Equations.find(result, '(') !== Equations.find(result, ')')
		) {
			throw new Error('Invalid equation');
		}
		for (let i = 0; i < result.length; i++) {
			if (!isNaN(Number(result[i])) && !isNaN(Number(result[i + 1]))) {
				result[i] = Number(result[i].concat(result[i + 1]));
				result.splice(i + 1, 1);
				i--;
			} else if (
				result[i] === '-' &&
				!isNaN(Number(result[i + 1])) &&
				isNaN(Number(result[i - 1]))
			) {
				result[i] = Number(result[i].concat(result[i + 1]));
				result.splice(i + 1, 1);
				i--;
			} else if (result[i] === '.' && !isNaN(Number(result[i + 1]))) {
				result[i] = Number(result[i].concat(result[i + 1]));
				result.splice(i + 1, 1);
				i--;
			} else if (
				!isNaN(Number(result[i])) &&
				result[i + 1] === '.' &&
				!isNaN(Number(result[i + 2]))
			) {
				result[i] = result[i] = Number(
					result[i].concat(result[i + 1], result[i + 2]),
				);
				result.splice(i + 1, 2);
				i--;
			} else if (result[i] === 'r' && result[i + 1] === 't') {
				result[i] = result[i].concat(result[i + 1]);
				result.splice(i + 1, 1);
				i--;
			} else if (result[i] === 'l' && result[i + 1] === 'n') {
				result[i] = result[i].concat(result[i + 1]);
				result.splice(i + 1, 1);
				i--;
			} else if (
				result[i] === 'a' &&
				result[i + 1] === 'b' &&
				result[i + 2] === 's'
			) {
				result[i] = result[i] = result[i].concat(
					result[i + 1],
					result[i + 2],
				);
				result.splice(i + 1, 2);
				i--;
			} else if (
				result[i] === 'l' &&
				result[i + 1] === 'o' &&
				result[i + 2] === 'g'
			) {
				result[i] = result[i] = result[i].concat(
					result[i + 1],
					result[i + 2],
				);
				result.splice(i + 1, 2);
				i--;
			} else if (
				result[i] === 'a' &&
				result[i + 1] === 's' &&
				result[i + 2] === 'i' &&
				result[i + 3] === 'n' &&
				result[i + 4] === 'h'
			) {
				result[i] = result[i].concat(
					result[i + 1],
					result[i + 2],
					result[i + 3],
					result[i + 4],
				);
				result.splice(i + 1, 4);
				i--;
			} else if (
				result[i] === 'a' &&
				result[i + 1] === 'c' &&
				result[i + 2] === 'o' &&
				result[i + 3] === 's' &&
				result[i + 4] === 'h'
			) {
				result[i] = result[i].concat(
					result[i + 1],
					result[i + 2],
					result[i + 3],
					result[i + 4],
				);
				result.splice(i + 1, 4);
				i--;
			} else if (
				result[i] === 'a' &&
				result[i + 1] === 't' &&
				result[i + 2] === 'a' &&
				result[i + 3] === 'n' &&
				result[i + 4] === 'h'
			) {
				result[i] = result[i].concat(
					result[i + 1],
					result[i + 2],
					result[i + 3],
					result[i + 4],
				);
				result.splice(i + 1, 4);
				i--;
			} else if (
				result[i] === 'a' &&
				result[i + 1] === 's' &&
				result[i + 2] === 'e' &&
				result[i + 3] === 'c' &&
				result[i + 4] === 'h'
			) {
				result[i] = result[i].concat(
					result[i + 1],
					result[i + 2],
					result[i + 3],
					result[i + 4],
				);
				result.splice(i + 1, 4);
				i--;
			} else if (
				result[i] === 'a' &&
				result[i + 1] === 'c' &&
				result[i + 2] === 's' &&
				result[i + 3] === 'c' &&
				result[i + 4] === 'h'
			) {
				result[i] = result[i].concat(
					result[i + 1],
					result[i + 2],
					result[i + 3],
					result[i + 4],
				);
				result.splice(i + 1, 4);
				i--;
			} else if (
				result[i] === 'a' &&
				result[i + 1] === 'c' &&
				result[i + 2] === 'o' &&
				result[i + 3] === 't' &&
				result[i + 4] === 'h'
			) {
				result[i] = result[i].concat(
					result[i + 1],
					result[i + 2],
					result[i + 3],
					result[i + 4],
				);
				result.splice(i + 1, 4);
				i--;
			} else if (
				result[i] === 'a' &&
				result[i + 1] === 's' &&
				result[i + 2] === 'i' &&
				result[i + 3] === 'n'
			) {
				result[i] = result[i].concat(
					result[i + 1],
					result[i + 2],
					result[i + 3],
				);
				result.splice(i + 1, 3);
				i--;
			} else if (
				result[i] === 'a' &&
				result[i + 1] === 'c' &&
				result[i + 2] === 'o' &&
				result[i + 3] === 's'
			) {
				result[i] = result[i].concat(
					result[i + 1],
					result[i + 2],
					result[i + 3],
				);
				result.splice(i + 1, 3);
				i--;
			} else if (
				result[i] === 'a' &&
				result[i + 1] === 't' &&
				result[i + 2] === 'a' &&
				result[i + 3] === 'n'
			) {
				result[i] = result[i].concat(
					result[i + 1],
					result[i + 2],
					result[i + 3],
				);
				result.splice(i + 1, 3);
				i--;
			} else if (
				result[i] === 'a' &&
				result[i + 1] === 's' &&
				result[i + 2] === 'e' &&
				result[i + 3] === 'c'
			) {
				result[i] = result[i].concat(
					result[i + 1],
					result[i + 2],
					result[i + 3],
				);
				result.splice(i + 1, 3);
				i--;
			} else if (
				result[i] === 'a' &&
				result[i + 1] === 'c' &&
				result[i + 2] === 's' &&
				result[i + 3] === 'c'
			) {
				result[i] = result[i].concat(
					result[i + 1],
					result[i + 2],
					result[i + 3],
				);
				result.splice(i + 1, 3);
				i--;
			} else if (
				result[i] === 'a' &&
				result[i + 1] === 'c' &&
				result[i + 2] === 'o' &&
				result[i + 3] === 't'
			) {
				result[i] = result[i].concat(
					result[i + 1],
					result[i + 2],
					result[i + 3],
				);
				result.splice(i + 1, 3);
				i--;
			} else if (
				result[i] === 's' &&
				result[i + 1] === 'i' &&
				result[i + 2] === 'n' &&
				result[i + 3] === 'h'
			) {
				result[i] = result[i].concat(
					result[i + 1],
					result[i + 2],
					result[i + 3],
				);
				result.splice(i + 1, 3);
				i--;
			} else if (
				result[i] === 'c' &&
				result[i + 1] === 'o' &&
				result[i + 2] === 's' &&
				result[i + 3] === 'h'
			) {
				result[i] = result[i].concat(
					result[i + 1],
					result[i + 2],
					result[i + 3],
				);
				result.splice(i + 1, 3);
				i--;
			} else if (
				result[i] === 't' &&
				result[i + 1] === 'a' &&
				result[i + 2] === 'n' &&
				result[i + 3] === 'h'
			) {
				result[i] = result[i].concat(
					result[i + 1],
					result[i + 2],
					result[i + 3],
				);
				result.splice(i + 1, 3);
				i--;
			} else if (
				result[i] === 's' &&
				result[i + 1] === 'e' &&
				result[i + 2] === 'c' &&
				result[i + 3] === 'h'
			) {
				result[i] = result[i].concat(
					result[i + 1],
					result[i + 2],
					result[i + 3],
				);
				result.splice(i + 1, 3);
				i--;
			} else if (
				result[i] === 'c' &&
				result[i + 1] === 's' &&
				result[i + 2] === 'c' &&
				result[i + 3] === 'h'
			) {
				result[i] = result[i].concat(
					result[i + 1],
					result[i + 2],
					result[i + 3],
				);
				result.splice(i + 1, 3);
				i--;
			} else if (
				result[i] === 'c' &&
				result[i + 1] === 'o' &&
				result[i + 2] === 't' &&
				result[i + 3] === 'h'
			) {
				result[i] = result[i] = result[i].concat(
					result[i + 1],
					result[i + 2],
					result[i + 3],
				);
				result.splice(i + 1, 3);
				i--;
			} else if (
				result[i] === 's' &&
				result[i + 1] === 'i' &&
				result[i + 2] === 'n'
			) {
				result[i] = result[i] = result[i].concat(
					result[i + 1],
					result[i + 2],
				);
				result.splice(i + 1, 2);
				i--;
			} else if (
				result[i] === 'c' &&
				result[i + 1] === 'o' &&
				result[i + 2] === 's'
			) {
				result[i] = result[i] = result[i].concat(
					result[i + 1],
					result[i + 2],
				);
				result.splice(i + 1, 2);
				i--;
			} else if (
				result[i] === 't' &&
				result[i + 1] === 'a' &&
				result[i + 2] === 'n'
			) {
				result[i] = result[i] = result[i].concat(
					result[i + 1],
					result[i + 2],
				);
				result.splice(i + 1, 2);
				i--;
			} else if (
				result[i] === 's' &&
				result[i + 1] === 'e' &&
				result[i + 2] === 'c'
			) {
				result[i] = result[i] = result[i].concat(
					result[i + 1],
					result[i + 2],
				);
				result.splice(i + 1, 2);
				i--;
			} else if (
				result[i] === 'c' &&
				result[i + 1] === 's' &&
				result[i + 2] === 'c'
			) {
				result[i] = result[i] = result[i].concat(
					result[i + 1],
					result[i + 2],
				);
				result.splice(i + 1, 2);
				i--;
			} else if (
				result[i] === 'c' &&
				result[i + 1] === 'o' &&
				result[i + 2] === 't'
			) {
				result[i] = result[i] = result[i].concat(
					result[i + 1],
					result[i + 2],
				);
				result.splice(i + 1, 2);
				i--;
			} else if (!isNaN(Number(result[i]))) {
				result[i] = Number(result[i]);
			}
		}

		return result;
	}

	private static isSingleLetter(value: any): boolean {
		if (typeof value === 'string' && value.length === 1) {
			const code = value.charCodeAt(0);
			return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
		}
		return false;
	}

	/**
	 * Evaluates a mathematical equation string with given variables.
	 *
	 * @param {string} equation - the equation to be evaluated
	 * @param {{ Array.<string>: number }} variables - an object with variable names and their values
	 * @return { number | 'Error'} the result of the evaluation or 'Error' if the equation is invalid
	 */
	static evaluate(
		equation: string,
		variables: { [key: string]: number },
	): number {
		const result = this.parseEquation(equation);
		for (let i = 0; i < result.length; i++) {
			if (this.isSingleLetter(result[i])) {
				if (i > 0 && typeof result[i - 1] === 'number') {
					result.splice(i, 0, '*');
					i++;
				}
				if (
					i < result.length - 1 &&
					typeof result[i + 1] === 'number'
				) {
					result.splice(i + 1, 0, '*');
				}
				result[i] = variables[result[i]];
			}
		}
		const evaluateNoBrackets = (array: Array<string | number>) => {
			while (array.length !== 1) {
				for (let i = 0; i < array.length; i++) {
					switch (array[i]) {
						case '!':
							array[i - 1] = Factorial(Number(array[i - 1]));
							array.splice(i);
							break;
						case 'ln':
							array[i] = Logarithms.ln(Number(array[i + 1]));
							array.splice(i + 1);
							break;
						case 'log':
							array[i] = Logarithms.log(
								Number(array[i + 1]),
								Number(array[i + 2]),
							);
							array.splice(i + 1, i + 2);
							break;
						case 'sin':
							array[i] = Trig.sin(Number(array[i + 1]));
							array.splice(i + 1, 1);
							break;
						case 'cos':
							array[i] = Trig.cos(Number(array[i + 1]));
							array.splice(i + 1, 1);
							break;
						case 'tan':
							array[i] = Trig.tan(Number(array[i + 1]));
							array.splice(i + 1, 1);
							break;
						case 'sec':
							array[i] = Trig.sec(Number(array[i + 1]));
							array.splice(i + 1, 1);
							break;
						case 'csc':
							array[i] = Trig.csc(Number(array[i + 1]));
							array.splice(i + 1, 1);
							break;
						case 'cot':
							array[i] = Trig.tan(Number(array[i + 1]));
							array.splice(i + 1, 1);
							break;
						case 'sinh':
							array[i] = Trig.sinh(Number(array[i + 1]));
							array.splice(i + 1, 1);
							break;
						case 'cosh':
							array[i] = Trig.cosh(Number(array[i + 1]));
							array.splice(i + 1, 1);
							break;
						case 'tanh':
							array[i] = Trig.tanh(Number(array[i + 1]));
							array.splice(i + 1, 1);
							break;
						case 'sech':
							array[i] = Trig.sech(Number(array[i + 1]));
							array.splice(i + 1, 1);
							break;
						case 'csch':
							array[i] = Trig.csch(Number(array[i + 1]));
							array.splice(i + 1, 1);
							break;
						case 'coth':
							array[i] = Trig.coth(Number(array[i + 1]));
							array.splice(i + 1, 1);
							break;
						case 'asin':
							array[i] = Trig.asin(Number(array[i + 1]));
							array.splice(i + 1, 1);
							break;
						case 'acot':
							array[i] = Trig.acot(Number(array[i + 1]));
							array.splice(i + 1, 1);
							break;
						case 'acos':
							array[i] = Trig.acos(Number(array[i + 1]));
							array.splice(i + 1, 1);
							break;
						case 'atan':
							array[i] = Trig.atan(Number(array[i + 1]));
							array.splice(i + 1, 1);
							break;
						case 'asec':
							array[i] = Trig.asec(Number(array[i + 1]));
							array.splice(i + 1, 1);
							break;
						case 'acsc':
							array[i] = Trig.acsc(Number(array[i + 1]));
							array.splice(i + 1, 1);
							break;
						case 'asinh':
							array[i] = Trig.asinh(Number(array[i + 1]));
							array.splice(i + 1, 1);
							break;
						case 'acoth':
							array[i] = Trig.acoth(Number(array[i + 1]));
							array.splice(i + 1, 1);
							break;
						case 'acosh':
							array[i] = Trig.acosh(Number(array[i + 1]));
							array.splice(i + 1, 1);
							break;
						case 'atanh':
							array[i] = Trig.atanh(Number(array[i + 1]));
							array.splice(i + 1, 1);
							break;
						case 'asech':
							array[i] = Trig.asech(Number(array[i + 1]));
							array.splice(i + 1, 1);
							break;
						case 'acsch':
							array[i] = Trig.acsch(Number(array[i + 1]));
							array.splice(i + 1, 1);
							break;
					}
				}
				for (let i = 0; i < array.length; i++) {
					switch (array[i]) {
						case '^':
							array[i - 1] ===
								Number(array[i - 1]) ** Number(array[i + 1]);
							array.splice(i, i + 1);
							break;
						case '√':
							if (Number.isInteger(Number(array[i - 1]))) {
								array[i - 1] ===
									Number(array[i + 1]) ** 1 /
										Number(array[i - 1]);
								array.splice(i, i + 1);
							} else {
								array[i] = Number(array[i + 1]) ** 0.5;
								array.splice(i + 1);
							}
							break;
					}
				}
				for (let i = 0; i < array.length; i++) {
					switch (array[i]) {
						case '*':
							array[i - 1] =
								Number(array[i - 1]) * Number(array[i + 1]);
							array.splice(i, i + 1);
							break;
						case '/':
							array[i - 1] =
								Number(array[i - 1]) / Number(array[i + 1]);
							array.splice(i, i + 1);
							break;
					}
				}

				for (let i = 0; i < array.length; i++) {
					switch (array[i]) {
						case '+':
							array[i - 1] =
								Number(array[i - 1]) + Number(array[i + 1]);
							array.splice(i, i + 1);
							break;
						case '-':
							array[i - 1] =
								Number(array[i - 1]) - Number(array[i + 1]);
							array.splice(i, 2);
							break;
					}
				}
			}
			return array[0];
		};

		while (Equations.find(result, '(') > 0) {
			let startPos = -1;
			let endPos = -1;

			for (let i = 0; i < result.length; i++) {
				if (result[i] === '(') {
					startPos = i;
				} else if (result[i] === ')' && startPos >= 0) {
					endPos = i;
				}
			}

			if (startPos !== -1 && endPos !== -1) {
				const subEquation = result.slice(startPos + 1, endPos);
				result[startPos] = evaluateNoBrackets(subEquation);
				result.splice(startPos + 1, endPos - startPos);
			}
		}

		return Number(evaluateNoBrackets(result));
	}

	/**
	 * Calculates the binomial coefficient of two given numbers.
	 *
	 * @param {number} n - The total number of items.
	 * @param {number} k - The number of items to choose.
	 * @return {number} The calculated binomial coefficient.
	 */
	static binomialCoefficient(n: number, k: number): number {
		if (k < 0 || k > n) return 0;
		if (k === 0 || k === n) return 1;

		let coefficient = 1;
		k = SO.min([k, n - k]);

		for (let i = 1; i <= k; i++) {
			coefficient *= (n - i + 1) / i;
		}

		return coefficient;
	}

	static simplify(expression: string): string {
		const result = this.parseEquation(expression);
		while (Equations.find(result, '(') > 0) {
			const startPos = result.lastIndexOf('(');
			const endPos = result.indexOf(')', startPos);

			if (startPos !== -1 && endPos !== -1) {
				const subEquation = result.slice(startPos + 1, endPos);
				result[startPos] = this.simplifyArray(subEquation);
				result.splice(startPos + 1, endPos - startPos);
			}
		}
		return this.simplifyArray(result).join('');
	}

	private static parseArrayExpression(array: []) {
		for (let i = 0; i < array.length; i++) {
			const result = [];
			if (this.isSingleLetter(array[i])) {
				const a = { count: 1, variable: array[i], exponent: 1 };
				if (!isNaN(array[i - 1])) {
					a.count = array[i - 1];
				}
				if (!isNaN(array[i + 2]) && array[i + 1] === '^') {
					a.exponent = array[i + 2];
					if (array[i + 2] === 0) {
						result.push(0);
					}
				}
				result.push(a);
			} else if (!isNaN(array[i])) {
				result.push(array[i]);
			}
		}
	}

	private static simplifyArray(array: any): any {
		while (array.length !== 1) {
			for (let i = 0; i < array.length; i++) {
				switch (array[i]) {
					case '!':
						if (!isNaN(array[i - 1])) {
							array[i - 1] = Factorial(Number(array[i - 1]));
							array.splice(i);
						}
						break;
					case 'ln':
						if (!isNaN(array[i + 1])) {
							array[i] = Logarithms.ln(Number(array[i + 1]));
							array.splice(i + 1);
						}
						break;
					case 'log':
						if (!isNaN(array[i + 1]) && !isNaN(array[i + 2])) {
							array[i] = Logarithms.log(
								Number(array[i + 1]),
								Number(array[i + 2]),
							);
							array.splice(i + 1, i + 2);
						}
						break;
					case 'sin':
						if (!isNaN(array[i + 1])) {
							array[i] = Trig.sin(Number(array[i + 1]));
							array.splice(i + 1, 1);
						}
						break;
					case 'cos':
						if (!isNaN(array[i + 1])) {
							array[i] = Trig.cos(Number(array[i + 1]));
							array.splice(i + 1, 1);
						}
						break;
					case 'tan':
						if (!isNaN(array[i + 1])) {
							array[i] = Trig.tan(Number(array[i + 1]));
							array.splice(i + 1, 1);
						}
						break;
					case 'sec':
						if (!isNaN(array[i + 1])) {
							array[i] = Trig.sec(Number(array[i + 1]));
							array.splice(i + 1, 1);
						}
						break;
					case 'csc':
						if (!isNaN(array[i + 1])) {
							array[i] = Trig.csc(Number(array[i + 1]));
							array.splice(i + 1, 1);
						}
						break;
					case 'cot':
						if (!isNaN(array[i + 1])) {
							array[i] = Trig.tan(Number(array[i + 1]));
							array.splice(i + 1, 1);
						}
						break;
					case 'sinh':
						if (!isNaN(array[i + 1])) {
							array[i] = Trig.sinh(Number(array[i + 1]));
							array.splice(i + 1, 1);
						}
						break;
					case 'cosh':
						if (!isNaN(array[i + 1])) {
							array[i] = Trig.cosh(Number(array[i + 1]));
							array.splice(i + 1, 1);
						}
						break;
					case 'tanh':
						if (!isNaN(array[i + 1])) {
							array[i] = Trig.tanh(Number(array[i + 1]));
							array.splice(i + 1, 1);
						}
						break;
					case 'sech':
						if (!isNaN(array[i + 1])) {
							array[i] = Trig.sech(Number(array[i + 1]));
							array.splice(i + 1, 1);
						}
						break;
					case 'csch':
						if (!isNaN(array[i + 1])) {
							array[i] = Trig.csch(Number(array[i + 1]));
							array.splice(i + 1, 1);
						}
						break;
					case 'coth':
						if (!isNaN(array[i + 1])) {
							array[i] = Trig.coth(Number(array[i + 1]));
							array.splice(i + 1, 1);
						}
						break;
					case 'asin':
						if (!isNaN(array[i + 1])) {
							array[i] = Trig.asin(Number(array[i + 1]));
							array.splice(i + 1, 1);
						}
						break;
					case 'acot':
						if (!isNaN(array[i + 1])) {
							array[i] = Trig.acot(Number(array[i + 1]));
							array.splice(i + 1, 1);
						}
						break;
					case 'acos':
						if (!isNaN(array[i + 1])) {
							array[i] = Trig.acos(Number(array[i + 1]));
							array.splice(i + 1, 1);
						}
						break;
					case 'atan':
						if (!isNaN(array[i + 1])) {
							array[i] = Trig.atan(Number(array[i + 1]));
							array.splice(i + 1, 1);
						}
						break;
					case 'asec':
						if (!isNaN(array[i + 1])) {
							array[i] = Trig.asec(Number(array[i + 1]));
							array.splice(i + 1, 1);
						}
						break;
					case 'acsc':
						if (!isNaN(array[i + 1])) {
							array[i] = Trig.acsc(Number(array[i + 1]));
							array.splice(i + 1, 1);
						}
						break;
					case 'asinh':
						if (!isNaN(array[i + 1])) {
							array[i] = Trig.asinh(Number(array[i + 1]));
							array.splice(i + 1, 1);
						}
						break;
					case 'acoth':
						if (!isNaN(array[i + 1])) {
							array[i] = Trig.acoth(Number(array[i + 1]));
							array.splice(i + 1, 1);
						}
						break;
					case 'acosh':
						if (!isNaN(array[i + 1])) {
							array[i] = Trig.acosh(Number(array[i + 1]));
							array.splice(i + 1, 1);
						}
						break;
					case 'atanh':
						if (!isNaN(array[i + 1])) {
							array[i] = Trig.atanh(Number(array[i + 1]));
							array.splice(i + 1, 1);
						}
						break;
					case 'asech':
						if (!isNaN(array[i + 1])) {
							array[i] = Trig.asech(Number(array[i + 1]));
							array.splice(i + 1, 1);
						}
						break;
					case 'acsch':
						if (!isNaN(array[i + 1])) {
							array[i] = Trig.acsch(Number(array[i + 1]));
							array.splice(i + 1, 1);
						}
						break;
				}
			}
			for (let i = 0; i < array.length; i++) {
				switch (array[i]) {
					case '^':
						if (!isNaN(array[i + 1]) && !isNaN(array[i - 1])) {
							array[i - 1] ===
								Number(array[i - 1]) ** Number(array[i + 1]);
							array.splice(i, i + 1);
						}
						break;
					case '√':
						if (!isNaN(array[i + 1])) {
							if (Number.isInteger(Number(array[i - 1]))) {
								array[i - 1] ===
									Number(array[i + 1]) ** 1 /
										Number(array[i - 1]);
								array.splice(i, i + 1);
							} else {
								array[i] = Number(array[i + 1]) ** 0.5;
								array.splice(i + 1);
							}
						}
						break;
				}
			}
			for (let i = 0; i < array.length; i++) {
				switch (array[i]) {
					case '*':
						if (!isNaN(array[i + 1]) && !isNaN(array[i - 1])) {
							array[i - 1] =
								Number(array[i - 1]) * Number(array[i + 1]);
							array.splice(i, i + 1);
						}
						break;
					case '/':
						if (!isNaN(array[i + 1]) && !isNaN(array[i - 1])) {
							array[i - 1] =
								Number(array[i - 1]) / Number(array[i + 1]);
							array.splice(i, i + 1);
						}
						break;
				}
			}

			for (let i = 0; i < array.length; i++) {
				switch (array[i]) {
					case '+':
						if (!isNaN(array[i + 1]) && !isNaN(array[i - 1])) {
							array[i - 1] =
								Number(array[i - 1]) + Number(array[i + 1]);
							array.splice(i, i + 1);
						}
						break;
					case '-':
						if (!isNaN(array[i + 1]) && !isNaN(array[i - 1])) {
							array[i - 1] =
								Number(array[i - 1]) - Number(array[i + 1]);
							array.splice(i, 2);
						}
						break;
				}
			}

			return array;
		}
	}
}
