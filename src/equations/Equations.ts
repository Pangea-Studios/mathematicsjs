import { Factorial } from '../core/operations';
import { Logarithms } from './Logarithms';
import { TrigonometryFunctions as Trig } from '../trigonometry/Functions';
export class Equations {
	/**
	 * Parses a mathematical equation string with given variables.
	 *
	 * @param {string} equation - the equation to be parsed
	 * @param {{ [key: string]: number }} variables - an object with variable names and their values
	 * @return {Array<string|number> | 'Error'} the result of the evaluation or 'Error' if the equation is invalid
	 */
	static parseEquation(
		equation: string,
		variables: { [key: string]: number },
	): Array<string | number> | 'Error' {
		const result = equation.replace(/\s/g, '').split('');
		const find = (
			array: Array<string | number> | string,
			target: string,
		) => {
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
		};

		if (
			equation === '' ||
			!equation ||
			find(result, '(') !== find(result, ')')
		) {
			return 'Error';
		}
		for (let i = 0; i < result.length; i++) {
			if (!isNaN(Number(result[i])) && !isNaN(Number(result[i + 1]))) {
				result[i] = Number(result[i] + result[i + 1]);
				result.splice(i + 1, 1);
				i--;
			} else if (
				result[i] === '-' &&
				!isNaN(Number(result[i + 1])) &&
				isNaN(Number(result[i - 1]))
			) {
				result[i] = Number(result[i] + result[i + 1]);
				result.splice(i + 1, 1);
				i--;
			} else if (result[i] === '.' && !isNaN(Number(result[i + 1]))) {
				result[i] = Number(result[i] + result[i + 1]);
				result.splice(i + 1, 1);
				i--;
			} else if (
				!isNaN(Number(result[i])) &&
				result[i + 1] === '.' &&
				!isNaN(Number(result[i + 2]))
			) {
				result[i] = Number(result[i] + result[i + 1] + result[i + 2]);
				result.splice(i + 1, 2);
				i--;
			} else if (result[i] === 'r' && result[i + 1] === 't') {
				result[i] = result[i] + result[i + 1];
				result.splice(i + 1, 1);
				i--;
			} else if (result[i] === 'l' && result[i + 1] === 'n') {
				result[i] = result[i] + result[i + 1];
				result.splice(i + 1, 1);
				i--;
			} else if (
				result[i] === 'a' &&
				result[i + 1] === 'b' &&
				result[i + 2] === 's'
			) {
				result[i] = result[i] + result[i + 1] + result[i + 2];
				result.splice(i + 1, 2);
				i--;
			} else if (
				result[i] === 'l' &&
				result[i + 1] === 'o' &&
				result[i + 2] === 'g'
			) {
				result[i] = result[i] + result[i + 1] + result[i + 2];
				result.splice(i + 1, 2);
				i--;
			} else if (
				result[i] === 'a' &&
				result[i + 1] === 's' &&
				result[i + 2] === 'i' &&
				result[i + 3] === 'n' &&
				result[i + 4] === 'h'
			) {
				result[i] =
					result[i] +
					result[i + 1] +
					result[i + 2] +
					result[i + 3] +
					result[i + 4];
				result.splice(i + 1, 4);
				i--;
			} else if (
				result[i] === 'a' &&
				result[i + 1] === 'c' &&
				result[i + 2] === 'o' &&
				result[i + 3] === 's' &&
				result[i + 4] === 'h'
			) {
				result[i] =
					result[i] +
					result[i + 1] +
					result[i + 2] +
					result[i + 3] +
					result[i + 4];
				result.splice(i + 1, 4);
				i--;
			} else if (
				result[i] === 'a' &&
				result[i + 1] === 't' &&
				result[i + 2] === 'a' &&
				result[i + 3] === 'n' &&
				result[i + 4] === 'h'
			) {
				result[i] =
					result[i] +
					result[i + 1] +
					result[i + 2] +
					result[i + 3] +
					result[i + 4];
				result.splice(i + 1, 4);
				i--;
			} else if (
				result[i] === 'a' &&
				result[i + 1] === 's' &&
				result[i + 2] === 'e' &&
				result[i + 3] === 'c' &&
				result[i + 4] === 'h'
			) {
				result[i] =
					result[i] +
					result[i + 1] +
					result[i + 2] +
					result[i + 3] +
					result[i + 4];
				result.splice(i + 1, 4);
				i--;
			} else if (
				result[i] === 'a' &&
				result[i + 1] === 'c' &&
				result[i + 2] === 's' &&
				result[i + 3] === 'c' &&
				result[i + 4] === 'h'
			) {
				result[i] =
					result[i] +
					result[i + 1] +
					result[i + 2] +
					result[i + 3] +
					result[i + 4];
				result.splice(i + 1, 4);
				i--;
			} else if (
				result[i] === 'a' &&
				result[i + 1] === 'c' &&
				result[i + 2] === 'o' &&
				result[i + 3] === 't' &&
				result[i + 4] === 'h'
			) {
				result[i] =
					result[i] +
					result[i + 1] +
					result[i + 2] +
					result[i + 3] +
					result[i + 4];
				result.splice(i + 1, 4);
				i--;
			} else if (
				result[i] === 'a' &&
				result[i + 1] === 's' &&
				result[i + 2] === 'i' &&
				result[i + 3] === 'n'
			) {
				result[i] =
					result[i] + result[i + 1] + result[i + 2] + result[i + 3];
				result.splice(i + 1, 3);
				i--;
			} else if (
				result[i] === 'a' &&
				result[i + 1] === 'c' &&
				result[i + 2] === 'o' &&
				result[i + 3] === 's'
			) {
				result[i] =
					result[i] + result[i + 1] + result[i + 2] + result[i + 3];
				result.splice(i + 1, 3);
				i--;
			} else if (
				result[i] === 'a' &&
				result[i + 1] === 't' &&
				result[i + 2] === 'a' &&
				result[i + 3] === 'n'
			) {
				result[i] =
					result[i] + result[i + 1] + result[i + 2] + result[i + 3];
				result.splice(i + 1, 3);
				i--;
			} else if (
				result[i] === 'a' &&
				result[i + 1] === 's' &&
				result[i + 2] === 'e' &&
				result[i + 3] === 'c'
			) {
				result[i] =
					result[i] + result[i + 1] + result[i + 2] + result[i + 3];
				result.splice(i + 1, 3);
				i--;
			} else if (
				result[i] === 'a' &&
				result[i + 1] === 'c' &&
				result[i + 2] === 's' &&
				result[i + 3] === 'c'
			) {
				result[i] =
					result[i] + result[i + 1] + result[i + 2] + result[i + 3];
				result.splice(i + 1, 3);
				i--;
			} else if (
				result[i] === 'a' &&
				result[i + 1] === 'c' &&
				result[i + 2] === 'o' &&
				result[i + 3] === 't'
			) {
				result[i] =
					result[i] + result[i + 1] + result[i + 2] + result[i + 3];
				result.splice(i + 1, 3);
				i--;
			} else if (
				result[i] === 's' &&
				result[i + 1] === 'i' &&
				result[i + 2] === 'n' &&
				result[i + 3] === 'h'
			) {
				result[i] =
					result[i] + result[i + 1] + result[i + 2] + result[i + 3];
				result.splice(i + 1, 3);
				i--;
			} else if (
				result[i] === 'c' &&
				result[i + 1] === 'o' &&
				result[i + 2] === 's' &&
				result[i + 3] === 'h'
			) {
				result[i] =
					result[i] + result[i + 1] + result[i + 2] + result[i + 3];
				result.splice(i + 1, 3);
				i--;
			} else if (
				result[i] === 't' &&
				result[i + 1] === 'a' &&
				result[i + 2] === 'n' &&
				result[i + 3] === 'h'
			) {
				result[i] =
					result[i] + result[i + 1] + result[i + 2] + result[i + 3];
				result.splice(i + 1, 3);
				i--;
			} else if (
				result[i] === 's' &&
				result[i + 1] === 'e' &&
				result[i + 2] === 'c' &&
				result[i + 3] === 'h'
			) {
				result[i] =
					result[i] + result[i + 1] + result[i + 2] + result[i + 3];
				result.splice(i + 1, 3);
				i--;
			} else if (
				result[i] === 'c' &&
				result[i + 1] === 's' &&
				result[i + 2] === 'c' &&
				result[i + 3] === 'h'
			) {
				result[i] =
					result[i] + result[i + 1] + result[i + 2] + result[i + 3];
				result.splice(i + 1, 3);
				i--;
			} else if (
				result[i] === 'c' &&
				result[i + 1] === 'o' &&
				result[i + 2] === 't' &&
				result[i + 3] === 'h'
			) {
				result[i] =
					result[i] + result[i + 1] + result[i + 2] + result[i + 3];
				result.splice(i + 1, 3);
				i--;
			} else if (
				result[i] === 's' &&
				result[i + 1] === 'i' &&
				result[i + 2] === 'n'
			) {
				result[i] = result[i] + result[i + 1] + result[i + 2];
				result.splice(i + 1, 2);
				i--;
			} else if (
				result[i] === 'c' &&
				result[i + 1] === 'o' &&
				result[i + 2] === 's'
			) {
				result[i] = result[i] + result[i + 1] + result[i + 2];
				result.splice(i + 1, 2);
				i--;
			} else if (
				result[i] === 't' &&
				result[i + 1] === 'a' &&
				result[i + 2] === 'n'
			) {
				result[i] = result[i] + result[i + 1] + result[i + 2];
				result.splice(i + 1, 2);
				i--;
			} else if (
				result[i] === 's' &&
				result[i + 1] === 'e' &&
				result[i + 2] === 'c'
			) {
				result[i] = result[i] + result[i + 1] + result[i + 2];
				result.splice(i + 1, 2);
				i--;
			} else if (
				result[i] === 'c' &&
				result[i + 1] === 's' &&
				result[i + 2] === 'c'
			) {
				result[i] = result[i] + result[i + 1] + result[i + 2];
				result.splice(i + 1, 2);
				i--;
			} else if (
				result[i] === 'c' &&
				result[i + 1] === 'o' &&
				result[i + 2] === 't'
			) {
				result[i] = result[i] + result[i + 1] + result[i + 2];
				result.splice(i + 1, 2);
				i--;
			} else if (!isNaN(Number(result[i]))) {
				result[i] = Number(result[i]);
			}
		}

		for (let i = 0; i < result.length; i++) {
			if (typeof result[i] === 'string' && result[i] in variables) {
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
		return result;
	}

	/**
	 * Evaluates a mathematical equation string with given variables.
	 *
	 * @param {string} equation - the equation to be evaluated
	 * @param {{ [key: string]: number }} variables - an object with variable names and their values
	 * @return {number | 'Error'} the result of the evaluation or 'Error' if the equation is invalid
	 */
	static evaluate(
		equation: string,
		variables: { [key: string]: number },
	): number | 'Error' {
		const result = this.parseEquation(equation, variables);
		if (result === 'Error') {
			return 'Error';
		}
		const find = (array: (string | number)[] | string, target: string) => {
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
		};
		const evaluateNoBrackets = (array: Array<string | number>) => {
			while (array.length !== 1) {
				for (let i = 0; i < array.length; i++) {
					switch (array[i]) {
						case '!':
							array[i - 1] = Factorial(array[i - 1]);
							array.splice(i, 1);
							break;
						case 'ln':
							array[i] = Logarithms.ln(array[i + 1]);
							array.splice(i + 1, 1);
							break;
						case 'log':
							array[i] = Logarithms.log(
								array[i + 1],
								array[i + 2],
							);
							array.splice(i + 1, 2);
							break;
						case 'sin':
							array[i] = Trig.sin(array[i + 1]);
					}
				}
				for (let i = 0; i < array.length; i++) {
					switch (array[i]) {
						case '^':
							array[i - 1] **= array[i + 1];
							array.splice(i, 2);
							break;
						case '√':
							if (Number.isInteger(Number(array[i - 1]))) {
								array[i + 1] **= 1 / array[i - 1];
								array.splice(i, 2);
							} else {
								array[i] = array[i + 1] ** 0.5;
								array.splice(i + 1, 1);
							}
							break;
					}
				}
				for (let i = 0; i < array.length; i++) {
					switch (array[i]) {
						case '*':
							array[i - 1] *= array[i + 1];
							array.splice(i, 2);
							break;
						case '/':
							array[i - 1] /= array[i + 1];
							array.splice(i, 2);
							break;
					}
				}

				for (let i = 0; i < array.length; i++) {
					switch (array[i]) {
						case '+':
							array[i - 1] += array[i + 1];
							array.splice(i, 2);
							break;
						case '-':
							array[i - 1] -= array[i + 1];
							array.splice(i, 2);
							break;
					}
				}
			}
			return array[0];
		};

		while (find(result, '(') > 0) {
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

		return evaluateNoBrackets(result);
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
		k = Math.min(k, n - k);

		for (let i = 1; i <= k; i++) {
			coefficient *= (n - i + 1) / i;
		}

		return coefficient;
	}
}
