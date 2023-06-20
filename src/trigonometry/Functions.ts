import { Equations } from '../equations/Equations';
import { Summation } from '../equations/Summation';
import { Conversions } from '../units/Units';
import { Constants } from '../units/Constants';
import { Indices } from '../core/Indices';
import { Factorial, Absolute } from '../core/operations';
import { Logarithms } from '../equations/Logarithms';

export class TrigonometryFunctions {
	/**
	 * Calculates the sine of an angle in degrees.
	 * @param {number} x - the angle in degrees
	 * @param {number} [accuracy=10] - precision of the result (default of 10)
	 * @return {number} the sine of the angle
	 */
	static sin(x: number, accuracy = 10): number {
		let result = (x % 360) * (Math.PI / 180);
		let term = result;
		let sign = 1;
		let denominator = 1;

		for (let i = 1; i <= accuracy; i++) {
			result += sign * term;
			sign *= -1;
			term *= (result * result) / ((denominator + 1) * (denominator + 2));
			denominator += 2;
		}

		return result;
	}
	/**
	 * Calculates the cosine of a given angle in degrees.
	 * @param {number} x - the angle in degrees
	 * @param {number} [accuracy=10] - the number of decimal places to calculate the result (default of 10)
	 * @return {number} - the cosine of the angle
	 */
	static cos(x: number, accuracy = 10): number {
		return this.sin(x - 90, accuracy);
	}

	/**
	 * Calculates the tangent of a number using the sine and cosine functions.
	 * @param {number} x - The input number in degrees
	 * @param {number} [accuracy=10] - The number of decimal places to calculate the result to (default of 10)
	 * @return {number} The tangent of the input number, rounded to the specified accuracy
	 */
	static tan(x: number, accuracy = 10): number {
		return this.sin(x, accuracy) / this.cos(x, accuracy);
	}

	/**
	 * Calculates the cosecant of an angle in degrees with a given accuracy.
	 * @param {number} x - the angle in degrees
	 * @param {number} [accuracy=10] - the number of decimal places to approximate the result to (default of 10)
	 * @return {number} the cosecant of the angle with the given accuracy
	 */
	static csc(x: number, accuracy = 10): number {
		return 1 / this.sin(x, accuracy);
	}

	/**
	 * Calculates the secant of a given angle in degrees.
	 * @param {number} x - The angle in degrees
	 * @param {number} [accuracy=10] - The number of decimal places to round the result to (default of 10)
	 * @return {number} The secant of the given angle
	 */
	static sec(x: number, accuracy = 10): number {
		return 1 / this.cos(x, accuracy);
	}

	/**
	 * Calculates the cotangent of a given angle in degrees.
	 * @param {number} x - The angle in degrees
	 * @param {number} [accuracy=10] - The accuracy of the result (default of 10)
	 * @return {number} The cotangent of the angle
	 */
	static cot(x: number, accuracy = 10): number {
		return 1 / this.tan(x, accuracy);
	}

	/**
	 * Calculates the hyperbolic sine of a number.
	 * @param {number} x - The number to apply the function to
	 * @return {number} The hyperbolic sine of the input number
	 */
	static sinh(x: number): number {
		const e = Constants.e;
		return e ** x - e ** -x / 2;
	}

	/**
	 * Returns the hyperbolic cosine of a number.
	 * @param {number} x - The number for which to return the hyperbolic cosine
	 * @return {number} The hyperbolic cosine of the number
	 */
	static cosh(x: number): number {
		const e = Constants.e;
		return (e ** x + e ** -x) / 2;
	}

	/**
	 * Calculates the hyperbolic tangent of a number.
	 * @param {number} x - The number to calculate the tangent of
	 * @return {number} The hyperbolic tangent of the number
	 */
	static tanh(x: number): number {
		return this.sinh(x) / this.cosh(x);
	}

	/**
	 * Computes the arcsine of x using the given accuracy.
	 * @param {number} x - The value to compute the arcsine for
	 * @param {number} [accuracy=10] - The accuracy to use in the computation (default of 10)
	 * @return {number} The computed arcsine value
	 */
	static arcsin(x: number, accuracy = 10): number {
		let result = 0;

		for (let n = 0; n <= accuracy; n++) {
			const coefficient =
				(1 / Indices.power(2, n)) *
				(Equations.binomialCoefficient(2 * n, n) / (2 * n + 1));
			const term = coefficient * Indices.power(x, 2 * n + 1);
			result += term;
		}

		return result;
	}

	/**
	 * Calculates the arccosine of a given number with a specified accuracy.
	 * @param {number} x - The number to get the arccosine of
	 * @param {number} [accuracy=10] - The number of iterations to perform (default of 10)
	 * @return {number} The arccosine of the given number
	 */
	static arccos(x: number, accuracy = 10): number {
		let result = Constants.pi / 2;

		for (let n = 0; n <= accuracy; n++) {
			const coefficient =
				(1 / Indices.power(2, n)) *
				(Equations.binomialCoefficient(2 * n, n) / (2 * n + 1));
			const term = coefficient * Indices.power(x, 2 * n + 1);
			result += term;
		}

		return result;
	}

	/**
	 * Calculates the arctangent of a given number using the specified accuracy.
	 * @param {number} x - The input number
	 * @param {number} [accuracy=10] - The accuracy of the resulting calculation (default of 10)
	 * @return {number} The calculated arctangent value
	 */
	static arctan(x: number, accuracy = 10): number {
		let result = 0;

		for (let n = 0; n <= accuracy; n++) {
			const coefficient = (n % 2 === 0 ? 1 : -1) / (2 * n + 1);
			const term = coefficient * Indices.power(x, 2 * n + 1);
			result += term;
		}

		return result;
	}

	/**
	 * Calculates the arccsc of a given number using the Maclaurin series expansion.
	 * @param {number} x - The value to calculate the arccsc of
	 * @param {number} [accuracy=10] - The number of terms to use in the Maclaurin series expansion (default of 10)
	 * @returns {number} The arccsc of the given number
	 */
	static arccsc(x: number, accuracy = 10): number {
		let result = 0;

		for (let n = 0; n <= accuracy; n++) {
			const coefficient =
				1 /
				(Factorial(n) *
					Indices.power(
						(1 / Indices.power(2, 2 * n + 1)) *
							Equations.binomialCoefficient(2 * n, n),
						-1,
					));
			const term = coefficient * Indices.power(x, 2 * n + 1);
			result += term;
		}

		return result;
	}

	/**
	 * Calculates arcsecant of a number with given accuracy.
	 * @param {number} x - the input value must be greater than or equal to 1
	 * @param {number} [accuracy=10] - the number of iterations to perform for accuracy (default of 10)
	 * @return {number} the arcsecant of x with given accuracy
	 */
	static arcsec(x: number, accuracy = 10): number {
		if (Absolute(x) < 1) {
			throw new Error('Input value must be greater than or equal to 1');
		}

		let result = this.arccos(1 / x);

		for (let i = 0; i < accuracy; i++) {
			result =
				result -
				(this.sec(result, accuracy) - x) /
					(this.sec(result, accuracy) * this.tan(result, accuracy));
		}

		return result;
	}

	/**
	 * Calculates the arccotangent of a number to a certain accuracy.
	 * @param {number} x - the number to calculate the arccotangent of
	 * @param {number} [accuracy=10] - the number of iterations to perform in the approximation (default of 10)
	 * @return {number} the arccotangent of x to the specified accuracy
	 */
	static arccot(x: number, accuracy = 10): number {
		let result = 0;

		for (let n = 0; n <= accuracy; n++) {
			const term =
				(Indices.power(-1, n) / (2 * n + 1)) *
				Indices.power(x, 2 * n + 1);
			result += term;
		}

		return result;
	}

	/**
	 * Computes the inverse hyperbolic sine (arcsinh) of a given number using the Maclaurin series expansion.
	 * @param {number} x - The number to compute the inverse hyperbolic sine of
	 * @param {number} [accuracy=10] - The number of terms to use in the Maclaurin series expansion (default of 10)
	 * @return {number} The inverse hyperbolic sine (arcsinh) of the given number
	 */
	static arcsinh(x: number, accuracy = 10): number {
		let result = 0;

		for (let n = 0; n <= accuracy; n++) {
			const coefficient =
				(Indices.power(-1, n) / (2 * n + 1)) * Factorial(2 * n);
			const term = coefficient * Indices.power(x, 2 * n + 1);
			result += term;
		}

		return result;
	}

	/**
	 * Computes the inverse hyperbolic cosine of a number.
	 * @param {number} x - A number whose inverse hyperbolic cosine is to be found
	 * @param {number} [accuracy=10] - The number of iterations to perform (default of 10)
	 * @return {number} The inverse hyperbolic cosine of the given number
	 */
	static arccosh(x: number, accuracy = 10): number {
		let result = 0;

		for (let n = 0; n <= accuracy; n++) {
			const coefficient =
				(Indices.power(-1, n) * Factorial(2 * n)) /
				(Indices.power(2, 2 * n) * Indices.power(Factorial(n), 2));
			const term = (coefficient * Indices.power(x, 2 * n)) / (2 * n - 1);
			result += term;
		}

		return result;
	}

	/**
	 * Calculates the arctanh (inverse hyperbolic tangent) of a number up to a certain accuracy.
	 * @param {number} x - The number to calculate the arctanh of
	 * @param {number} [accuracy=10] - The number of iterations to perform to approximate the arctanh value (default of 10)
	 * @return {number} The arctanh value of the input number
	 */
	static arctanh(x: number, accuracy = 10): number {
		let result = 0;

		for (let n = 0; n <= accuracy; n++) {
			const term = Indices.power(x, 2 * n + 1) / (2 * n + 1);
			result += term;
		}

		return result;
	}

	/**
	 * Calculates the inverse hyperbolic cosecant (arcsinh) of a number up to a given accuracy.
	 * @param {number} x - the number to calculate the inverse hyperbolic cosecant of
	 * @param {number} [accuracy=10] - (optional) the number of iterations to use in the approximation (default of 10)
	 * @return {number} the calculated inverse hyperbolic cosecant of the input number
	 */
	static arcscsh(x: number, accuracy = 10): number {
		let result = 0;

		for (let n = 0; n <= accuracy; n++) {
			const coefficient =
				(Indices.power(-1, n) *
					Equations.binomialCoefficient(2 * n, n)) /
				(Factorial(n) * (2 * n + 1));
			const term = coefficient * Indices.power(x, 2 * n + 1);
			result += term;
		}

		return result;
	}

	/**
	 * Computes the inverse hyperbolic secant of a number with a given accuracy.
	 * There is no specific method of finding the inverse hyperbolic secant so this uses the Newton-Raphson method to approximate arcsech(x)
	 * @param {number} x - the number to compute the inverse hyperbolic secant of
	 * @param {number} [accuracy=10] - the number of decimal places to return in the result (default of 10)
	 * @return {number} the inverse hyperbolic secant of x
	 */
	static arcsecsh(x: number, accuracy = 10): number {
		let result = Logarithms.log(
			(1 + Indices.root(1 - x * x)) / x,
			10,
			accuracy,
		);

		for (let i = 0; i < accuracy; i++) {
			const sech = 1 / this.cosh(result);
			const numerator = sech - x;
			const denominator = -sech * this.tanh(result);
			result -= numerator / denominator;
		}

		return result;
	}

	/**
	 * Calculates the inverse hyperbolic cotangent of the given number.
	 * @param {number} x - The number whose inverse hyperbolic cotangent is to be calculated
	 * @return {number} The inverse hyperbolic cotangent of the given number
	 */
	static arccoth(x: number): number {
		return 0.5 * Logarithms.log((x + 1) / (x - 1));
	}
}
