import { Equations } from '../equations/Equations';
import { Constants } from '../units/Constants';
import { Indices } from '../core/Indices';
import { Factorial, Absolute } from '../core/operations';
import { Logarithms } from '../equations/Logarithms';

interface options {
	accuracy?: number;
	cache?: boolean;
}

interface singleOptions {
	cache?: boolean;
}

/**
 * Class containing all trigometric functions
 */
export class TrigonometryFunctions {
	static readonly sinCache = new Map<number, number>();
	static readonly cosCache = new Map<number, number>();
	static readonly tanCache = new Map<number, number>();
	static readonly asinCache = new Map<number, number>();
	static readonly acosCache = new Map<number, number>();
	static readonly atanCache = new Map<number, number>();
	static readonly cscCache = new Map<number, number>();
	static readonly secCache = new Map<number, number>();
	static readonly cotCache = new Map<number, number>();
	static readonly sinhCache = new Map<number, number>();
	static readonly coshCache = new Map<number, number>();
	static readonly tanhCache = new Map<number, number>();
	static readonly asinhCache = new Map<number, number>();
	static readonly acoshCache = new Map<number, number>();
	static readonly atanhCache = new Map<number, number>();
	static readonly cschCache = new Map<number, number>();
	static readonly sechCache = new Map<number, number>();
	static readonly cothCache = new Map<number, number>();
	static readonly acscCache = new Map<number, number>();
	static readonly asecCache = new Map<number, number>();
	static readonly acotCache = new Map<number, number>();
	static readonly acschCache = new Map<number, number>();
	static readonly asechCache = new Map<number, number>();
	static readonly acothCache = new Map<number, number>();

	/**
	 * Calculates the sine of an angle in degrees.
	 * @param {number} x - the angle in degrees
	 * @param {object} [options] - options
	 * @param {number} [options.accuracy=10] - precision of the result (default of 10)
	 * @param {boolean} [options.cache=true] - cache the result
	 * @return {number} the sine of the angle
	 */
	static sin(
		x: number,
		options: options = { accuracy: 10, cache: true },
	): number {
		if (this.sinCache.has(x)) {
			return this.sinCache.get(x);
		}
		const a = (x % 360) * (Math.PI / 180);
		let result = 0;

		for (let i = 0; i <= options.accuracy; i++) {
			result += ((-1) ** i * a ** (2 * i + 1)) / Factorial(2 * i + 1);
		}
		this.sinCache.set(x, result);
		return result;
	}

	/**
	 * Calculates the cosine of a given angle in degrees.
	 * @param {number} x - the angle in degrees
	 * @param {object} [options] - options
	 * @param {number} [options.accuracy=10] - precision of the result (default of 10)
	 * @param {boolean} [options.cache=true] - cache the result
	 * @return {number} - the cosine of the angle
	 */
	static cos(
		x: number,
		options: options = { accuracy: 10, cache: true },
	): number {
		if (this.cosCache.has(x)) {
			return this.cosCache.get(x);
		}
		const result = this.sin(x - 90, {
			accuracy: options.accuracy,
			cache: options.cache,
		});
		if (options.cache === true) {
			this.cosCache.set(x, result);
		}
		return result;
	}

	/**
	 * Calculates the tangent of an angle in degrees.
	 * @param {number} x - the angle in degrees
	 * @param {object} [options] - options
	 * @param {number} [options.accuracy=10] - precision of the result (default of 10)
	 * @param {boolean} [options.cache=true] - cache the result
	 * @return {number} the tangent of the angle
	 */
	static tan(
		x: number,
		options: options = { accuracy: 10, cache: true },
	): number {
		if (this.tanCache.has(x)) {
			return this.tanCache.get(x);
		}
		const result =
			this.sin(x, {
				accuracy: options.accuracy,
				cache: options.cache,
			}) /
			this.cos(x, {
				accuracy: options.accuracy,
				cache: options.cache,
			});
		if (options.cache === true) {
			this.tanCache.set(x, result);
		}
		return result;
	}

	/**
	 * Calculates the cosecant of an angle in degrees.
	 * @param {number} x - the angle in degrees
	 * @param {object} [options] - options
	 * @param {number} [options.accuracy=10] - precision of the result (default of 10)
	 * @param {boolean} [options.cache=true] - cache the result
	 * @return {number} the cosecant of the angle
	 */
	static csc(
		x: number,
		options: options = { accuracy: 10, cache: true },
	): number {
		if (this.cscCache.has(x)) {
			return this.cscCache.get(x);
		}
		const result =
			1 /
			this.sin(x, {
				accuracy: options.accuracy,
				cache: options.cache,
			});
		if (options.cache === true) {
			this.cscCache.set(x, result);
		}
		return result;
	}

	/**
	 * Calculates the secant of a given angle in degrees.
	 * @param {number} x - the angle in degrees
	 * @param {object} [options] - options
	 * @param {number} [options.accuracy=10] - precision of the result (default of 10)
	 * @param {boolean} [options.cache=true] - cache the result
	 * @return {number} the secant of the given angle
	 */
	static sec(
		x: number,
		options: options = { accuracy: 10, cache: true },
	): number {
		if (this.secCache.has(x)) {
			return this.secCache.get(x);
		}
		const result =
			1 /
			this.cos(x, {
				accuracy: options.accuracy,
				cache: options.cache,
			});
		if (options.cache === true) {
			this.secCache.set(x, result);
		}
		return result;
	}

	/**
	 * Calculates the cotangent of a given angle in degrees.
	 * @param {number} x -the angle in degrees
	 * @param {object} [options] - options
	 * @param {number} [options.accuracy=10] - precision of the result (default of 10)
	 * @param {boolean} [options.cache=true] - cache the result
	 * @return {number} the cotangent of the angle
	 */
	static cot(
		x: number,
		options: options = { accuracy: 10, cache: true },
	): number {
		if (this.cotCache.has(x)) {
			return this.cotCache.get(x);
		}
		const result =
			1 /
			this.tan(x, {
				accuracy: options.accuracy,
				cache: options.cache,
			});
		if (options.cache === true) {
			this.cotCache.set(x, result);
		}
		return result;
	}

	/**
	 * Calculates the hyperbolic sine of a number.
	 * @param {number} x - the number to apply the function to
	 * @param {object} [options] - options
	 * @param {number} [options.accuracy=10] - precision of the result (default of 10)
	 * @return {number} the hyperbolic sine of the input number
	 */
	static sinh(x: number, options: singleOptions = { cache: true }): number {
		if (this.sinhCache.has(x)) {
			return this.sinhCache.get(x);
		}
		const e = Constants.e;
		const result = e ** x - e ** -x / 2;
		if (options.cache === true) {
			this.sinhCache.set(x, result);
		}
		return result;
	}

	/**
	 * Returns the hyperbolic cosine of a number.
	 * @param {number} x - The number for which to return the hyperbolic cosine
	 * @param {object} [options] - options
	 * @param {boolean} [options.cache=true] - cache the result
	 * @return {number} The hyperbolic cosine of the number
	 */
	static cosh(x: number, options: singleOptions = { cache: true }): number {
		if (this.coshCache.has(x)) {
			return this.coshCache.get(x);
		}
		const e = Constants.e;
		const result = (e ** x + e ** -x) / 2;
		if (options.cache === true) {
			this.coshCache.set(x, result);
		}
		return result;
	}

	/**
	 * Calculates the hyperbolic tangent of a number.
	 * @param {number} x - The number to calculate the tangent of
	 * @param {object} [options] - options
	 * @param {boolean} [options.cache=true] - cache the result
	 * @return {number} The hyperbolic tangent of the number
	 */
	static tanh(x: number, options: singleOptions = { cache: true }): number {
		if (this.tanhCache.has(x)) {
			return this.tanhCache.get(x);
		}
		const result =
			this.sinh(x, {
				cache: options.cache,
			}) /
			this.cosh(x, {
				cache: options.cache,
			});
		if (options.cache === true) {
			this.tanhCache.set(x, result);
		}
		return result;
	}

	/**
	 * Takes a number and returns the hyperbolic secant of that number.
	 *
	 * @param {number} x - the number whose hyperbolic secant is to be returned.
	 * @param {object} [options] - options
	 * @param {boolean} [options.cache=true] - cache the result
	 * @return {number} the hyperbolic secant of the given number.
	 */
	static sech(x: number, options: singleOptions = { cache: true }): number {
		if (this.sechCache.has(x)) {
			return this.sechCache.get(x);
		}
		const result =
			1 /
			this.cosh(x, {
				cache: options.cache,
			});
		if (options.cache === true) {
			this.sechCache.set(x, result);
		}
		return result;
	}

	/**
	 * Calculates the hyperbolic cosecant of a given number.
	 *
	 * @param {number} x - The number to calculate the hyperbolic cosecant of.
	 * @param {object} [options] - options
	 * @param {boolean} [options.cache=true] - cache the result
	 * @return {number} The hyperbolic cosecant of the given number.
	 */
	static csch(x: number, options: singleOptions = { cache: true }): number {
		if (this.cschCache.has(x)) {
			return this.cschCache.get(x);
		}
		const result =
			1 /
			this.sinh(x, {
				cache: options.cache,
			});
		if (options.cache === true) {
			this.cschCache.set(x, result);
		}
		return result;
	}

	/**
	 * Computes the hyperbolic cotangent of a number.
	 *
	 * @param {number} x - The number in radians for which to compute the hyperbolic cotangent.
	 * @param {object} [options] - options
	 * @param {boolean} [options.cache=true] - cache the result
	 * @return {number} The hyperbolic cotangent of the given number.
	 */
	static coth(x: number, options: singleOptions = { cache: true }): number {
		if (this.cothCache.has(x)) {
			return this.cothCache.get(x);
		}
		const result =
			1 /
			this.tanh(x, {
				cache: options.cache,
			});
		if (options.cache === true) {
			this.cothCache.set(x, result);
		}
		return result;
	}

	/**
	 * Computes the arcsine of x using the given accuracy.
	 * @param {number} x - The value to compute the arcsine for
	 * @param {object} [options] - options
	 * @param {number} [options.accuracy=10] - precision of the result (default of 10)
	 * @param {boolean} [options.cache=true] - cache the result
	 * @return {number} The computed arcsine value
	 */
	static asin(
		x: number,
		options: options = { accuracy: 10, cache: true },
	): number {
		if (this.asinCache.has(x)) {
			return this.asinCache.get(x);
		}
		let result = 0;

		for (let n = 0; n <= options.accuracy; n++) {
			const coefficient =
				(1 / Indices.power(2, n)) *
				(Equations.binomialCoefficient(2 * n, n) / (2 * n + 1));
			const term = coefficient * Indices.power(x, 2 * n + 1);
			result += term;
		}
		if (options.cache === true) {
			this.asinCache.set(x, result);
		}
		return result;
	}

	/**
	 * Calculates the arccosine of a given number with a specified accuracy.
	 * @param {number} x - The number to get the arccosine of
	 * @param {object} [options] - options
	 * @param {number} [options.accuracy=10] - precision of the result (default of 10)
	 * @param {boolean} [options.cache=true] - cache the result
	 * @return {number} The arccosine of the given number
	 */
	static acos(
		x: number,
		options: options = { accuracy: 10, cache: true },
	): number {
		if (this.acosCache.has(x)) {
			return this.acosCache.get(x);
		}
		let result = Constants.pi / 2;

		for (let n = 0; n <= options.accuracy; n++) {
			const coefficient =
				(1 / Indices.power(2, n)) *
				(Equations.binomialCoefficient(2 * n, n) / (2 * n + 1));
			const term = coefficient * Indices.power(x, 2 * n + 1);
			result += term;
		}
		if (options.cache === true) {
			this.acosCache.set(x, result);
		}
		return result;
	}

	/**
	 * Calculates the arctangent of a given number using the specified accuracy.
	 * @param {number} x - The input number
	 * @param {object} [options] - options
	 * @param {number} [options.accuracy=10] - precision of the result (default of 10)
	 * @param {boolean} [options.cache=true] - cache the result
	 * @return {number} The calculated arctangent value
	 */
	static atan(
		x: number,
		options: options = { accuracy: 10, cache: true },
	): number {
		if (this.atanCache.has(x)) {
			return this.atanCache.get(x);
		}
		let result = 0;

		for (let n = 0; n <= options.accuracy; n++) {
			const coefficient = (n % 2 === 0 ? 1 : -1) / (2 * n + 1);
			const term = coefficient * Indices.power(x, 2 * n + 1);
			result += term;
		}
		if (options.cache === true) {
			this.atanCache.set(x, result);
		}
		return result;
	}

	/**
	 * Calculates the arccosecant of a given number using the Maclaurin series expansion.
	 * @param {number} x - The value to calculate the arccsc of
	 * @param {object} [options] - options
	 * @param {number} [options.accuracy=10] - precision of the result (default of 10)
	 * @param {boolean} [options.cache=true] - cache the result
	 * @returns {number} The arccosecant of the given number
	 */
	static acsc(
		x: number,
		options: options = { accuracy: 10, cache: true },
	): number {
		if (this.acscCache.has(x)) {
			return this.acscCache.get(x);
		}
		let result = 0;

		for (let n = 0; n <= options.accuracy; n++) {
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
		if (options.cache === true) {
			this.acscCache.set(x, result);
		}
		return result;
	}

	/**
	 * Calculates arcsecant of a number with given accuracy.
	 * @param {number} x - the input value must be greater than or equal to 1
	 * @param {object} [options] - options
	 * @param {number} [options.accuracy=10] - precision of the result (default of 10)
	 * @param {boolean} [options.cache=true] - cache the result
	 * @return {number} the arcsecant of x with given accuracy
	 */
	static asec(
		x: number,
		options: options = { accuracy: 10, cache: true },
	): number {
		if (Absolute(x) < 1) {
			throw new Error('Input value must be greater than or equal to 1');
		}
		if (this.asecCache.has(x)) {
			return this.asecCache.get(x);
		}
		let result = this.acos(1 / x);

		for (let i = 0; i < options.accuracy; i++) {
			result =
				result -
				(this.sec(result, {
					accuracy: options.accuracy,
					cache: options.cache,
				}) -
					x) /
					(this.sec(result, {
						accuracy: options.accuracy,
						cache: options.cache,
					}) *
						this.tan(result, {
							accuracy: options.accuracy,
							cache: options.cache,
						}));
		}
		if (options.cache === true) {
			this.asecCache.set(x, result);
		}
		return result;
	}

	/**
	 * Calculates the arccotangent of a number to a certain accuracy.
	 * @param {number} x - the number to calculate the arccotangent of
	 * @param {object} [options] - options
	 * @param {number} [options.accuracy=10] - precision of the result (default of 10)
	 * @param {boolean} [options.cache=true] - cache the result
	 * @return {number} the arccotangent of x to the specified accuracy
	 */
	static acot(
		x: number,
		options: options = { accuracy: 10, cache: true },
	): number {
		if (this.acotCache.has(x)) {
			return this.acotCache.get(x);
		}
		let result = 0;

		for (let n = 0; n <= options.accuracy; n++) {
			const term =
				(Indices.power(-1, n) / (2 * n + 1)) *
				Indices.power(x, 2 * n + 1);
			result += term;
		}
		if (options.cache === true) {
			this.acotCache.set(x, result);
		}
		return result;
	}

	/**
	 * Computes the inverse hyperbolic sine (arcsinh) of a given number using the Maclaurin series expansion.
	 * @param {number} x - The number to compute the inverse hyperbolic sine of
	 * @param {object} [options] - options
	 * @param {number} [options.accuracy=10] - precision of the result (default of 10)
	 * @param {boolean} [options.cache=true] - cache the result
	 * @return {number} The inverse hyperbolic sine (arcsinh) of the given number
	 */
	static asinh(
		x: number,
		options: options = { accuracy: 10, cache: true },
	): number {
		if (this.asinhCache.has(x)) {
			return this.asinhCache.get(x);
		}
		let result = 0;

		for (let n = 0; n <= options.accuracy; n++) {
			const coefficient =
				(Indices.power(-1, n) / (2 * n + 1)) * Factorial(2 * n);
			const term = coefficient * Indices.power(x, 2 * n + 1);
			result += term;
		}
		if (options.cache === true) {
			this.asinhCache.set(x, result);
		}
		return result;
	}

	/**
	 * Computes the inverse hyperbolic cosine of a number.
	 * @param {number} x - A number whose inverse hyperbolic cosine is to be found
	 * @param {object} [options] - options
	 * @param {number} [options.accuracy=10] - precision of the result (default of 10)
	 * @param {boolean} [options.cache=true] - cache the result
	 * @return {number} The inverse hyperbolic cosine of the given number
	 */
	static acosh(
		x: number,
		options: options = { accuracy: 10, cache: true },
	): number {
		if (this.acoshCache.has(x)) {
			return this.acoshCache.get(x);
		}
		let result = 0;

		for (let n = 0; n <= options.accuracy; n++) {
			const coefficient =
				(Indices.power(-1, n) * Factorial(2 * n)) /
				(Indices.power(2, 2 * n) * Indices.power(Factorial(n), 2));
			const term = (coefficient * Indices.power(x, 2 * n)) / (2 * n - 1);
			result += term;
		}
		if (options.cache === true) {
			this.acoshCache.set(x, result);
		}
		return result;
	}

	/**
	 * Calculates the arctanh (inverse hyperbolic tangent) of a number up to a certain accuracy.
	 * @param {number} x - The number to calculate the arctanh of
	 * @param {object} [options] - options
	 * @param {number} [options.accuracy=10] - precision of the result (default of 10)
	 * @param {boolean} [options.cache=true] - cache the result
	 * @return {number} The arctanh value of the input number
	 */
	static atanh(
		x: number,
		options: options = { accuracy: 10, cache: true },
	): number {
		if (this.atanhCache.has(x)) {
			return this.atanhCache.get(x);
		}
		let result = 0;

		for (let n = 0; n <= options.accuracy; n++) {
			const term = Indices.power(x, 2 * n + 1) / (2 * n + 1);
			result += term;
		}
		if (options.cache === true) {
			this.atanhCache.set(x, result);
		}
		return result;
	}

	/**
	 * Calculates the inverse hyperbolic cosecant (arcsinh) of a number up to a given accuracy.
	 * @param {number} x - the number to calculate the inverse hyperbolic cosecant of
	 * @param {object} [options] - options
	 * @param {number} [options.accuracy=10] - precision of the result (default of 10)
	 * @param {boolean} [options.cache=true] - cache the result
	 * @return {number} the calculated inverse hyperbolic cosecant of the input number
	 */
	static acsch(
		x: number,
		options: options = { accuracy: 10, cache: true },
	): number {
		if (this.acschCache.has(x)) {
			return this.acschCache.get(x);
		}
		let result = 0;

		for (let n = 0; n <= options.accuracy; n++) {
			const coefficient =
				(Indices.power(-1, n) *
					Equations.binomialCoefficient(2 * n, n)) /
				(Factorial(n) * (2 * n + 1));
			const term = coefficient * Indices.power(x, 2 * n + 1);
			result += term;
		}
		if (options.cache === true) {
			this.acschCache.set(x, result);
		}
		return result;
	}

	/**
	 * Computes the inverse hyperbolic secant of a number with a given accuracy.
	 * There is no specific method of finding the inverse hyperbolic secant so this uses the Newton-Raphson method to approximate arcsech(x)
	 * @param {number} x - the number to compute the inverse hyperbolic secant of
	 * @param {object} [options] - options
	 * @param {number} [options.accuracy=10] - precision of the result (default of 10)
	 * @param {boolean} [options.cache=true] - cache the result
	 * @return {number} the inverse hyperbolic secant of x
	 */
	static asech(
		x: number,
		options: options = { accuracy: 10, cache: true },
	): number {
		if (this.asechCache.has(x)) {
			return this.asechCache.get(x);
		}
		let result = Logarithms.log((1 + Indices.root(1 - x * x)) / x, {
			accuracy: options.accuracy,
			cache: options.cache,
		});

		for (let i = 0; i < options.accuracy; i++) {
			const sech = 1 / this.cosh(result);
			const numerator = sech - x;
			const denominator = -sech * this.tanh(result);
			result -= numerator / denominator;
		}
		if (options.cache === true) {
			this.asechCache.set(x, result);
		}
		return result;
	}

	/**
	 * Calculates the inverse hyperbolic cotangent of the given number.
	 * @param {number} x - The number whose inverse hyperbolic cotangent is to be calculated
	 * @param {object} [options] - options
	 * @param {number} [options.accuracy=10] - precision of the result (default of 10)
	 * @param {boolean} [options.cache=true] - cache the result
	 * @return {number} The inverse hyperbolic cotangent of the given number
	 */
	static acoth(
		x: number,
		options: options = { accuracy: 10, cache: true },
	): number {
		if (this.acothCache.has(x)) {
			return this.acothCache.get(x);
		}
		const result =
			0.5 *
			Logarithms.log((x + 1) / (x - 1), {
				accuracy: options.accuracy,
				cache: options.cache,
			});
		if (options.cache === true) {
			this.acothCache.set(x, result);
		}
		return result;
	}
}
