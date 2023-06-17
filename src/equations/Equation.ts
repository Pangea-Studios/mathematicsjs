import { Summation } from './Summation';

export class Equation {
	/**
	 * Evaluates the given mathematical equation string, using the provided variables object,
	 * and returns the result. If the equation is empty or null, returns 'Error'. If there are
	 * mismatched brackets, returns 'Error: Mismatched Brackets'.
	 *
	 * @param {string} equation - the mathematical equation to be evaluated, funcs(sin, cos, tan etc) coming soon
	 * @param {object} variables - an object containing variable names and their values
	 * @return {number|string} - the result of the evaluation or 'Error'/'Error: Mismatched Brackets'
	 */

	static evaluate(equation: string, variables: object) {
		if (equation === '' || !equation) {
			return 'Error';
		}

		let EquationArray1 = equation.replace(/\s/g, '').split('');
		let EquationArray2 = [];
		let current = '';

		const evaluateNoBrackets = (array: any[]) => {
			while (array.length !== 1) {
				for (let i = 0; i < array.length; i++) {
					switch (array[i]) {
						case '!':
							array[i - 1] = Summation.MultiplicativeSummation(
								'n',
								1,
								array[i - 1],
								1,
							);
							array.splice(i, 1);
							break;
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

		const find = (array: any[] | string, target: any) => {
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

		for (let i = 0; i < EquationArray1.length; i++) {
			if (
				Number.isInteger(Number(EquationArray1[i])) ||
				EquationArray1[i] === '.'
			) {
				current = current.concat(EquationArray1[i]);
			} else {
				if (current !== '') {
					EquationArray2.push(Number(current));
					current = '';
				}
				EquationArray2.push(EquationArray1[i]);
			}
		}

		if (current !== '') {
			EquationArray2.push(Number(current));
		}

		for (let i = 0; i < EquationArray2.length; i++) {
			if (
				typeof EquationArray2[i] === 'string' &&
				EquationArray2[i] in variables
			) {
				if (i > 0 && typeof EquationArray2[i - 1] === 'number') {
					EquationArray2.splice(i, 0, '*');
					i++;
				}
				if (
					i < EquationArray2.length - 1 &&
					typeof EquationArray2[i + 1] === 'number'
				) {
					EquationArray2.splice(i + 1, 0, '*');
				}
				EquationArray2[i] = variables[EquationArray2[i]];
			}
		}

		if (find(EquationArray2, '(') === find(EquationArray2, ')')) {
			while (find(EquationArray2, '(') > 0) {
				let startPos = -1;
				let endPos = -1;

				for (let i = 0; i < EquationArray2.length; i++) {
					if (EquationArray2[i] === '(') {
						startPos = i;
					} else if (EquationArray2[i] === ')' && startPos >= 0) {
						endPos = i;
					}
				}

				if (startPos !== -1 && endPos !== -1) {
					const subEquation = EquationArray2.slice(
						startPos + 1,
						endPos,
					);
					EquationArray2[startPos] = evaluateNoBrackets(subEquation);
					EquationArray2.splice(startPos + 1, endPos - startPos);
				}
			}
		} else {
			return 'Error: Mismatched Brackets';
		}

		return evaluateNoBrackets(EquationArray2);
	}

	static solve(equation: string, variable: string) {
		if (equation === '' || !equation) {
			return 'Error';
		}
	}

	static rearrange(equation: string, makeSubject: string) {
		if (equation === '' || !equation) {
			return 'Error';
		}
	}
}
