import { Equations } from '../equations/Equations';
import { Summation } from '../equations/Summation';
import { Conversions } from '../units/Units';
import { Constants } from '../units/Constants';
import { Indices } from '../core/Indices';
import { Factorial } from '../core/Operations';
import { Absolute } from '../core/Operations';
import { Logarithms } from '../equations/Logarithms';

export const sineList = [
	0, 0.01745240643728351, 0.03489949670250097, 0.05233595624294383,
	0.0697564737441253, 0.08715574274765817, 0.10452846326765346,
	0.12186934340514748, 0.13917310096006544, 0.15643446504023087,
	0.17364817766693033, 0.1908089953765448, 0.20791169081775931,
	0.224951054343865, 0.24192189559966773, 0.25881904510252074,
	0.27563735581699916, 0.29237170472273677, 0.3090169943749474,
	0.32556815445715664, 0.3420201433256687, 0.35836794954530027,
	0.374606593415912, 0.3907311284892737, 0.40673664307580015,
	0.42261826174069944, 0.4383711467890774, 0.45399049973954675,
	0.4694715627858908, 0.48480962024633706, 0.49999999999999994,
	0.5150380749100542, 0.5299192642332049, 0.5446390350150271,
	0.5591929034707469, 0.573576436351046, 0.5877852522924731,
	0.6018150231520483, 0.6156614753256582, 0.6293203910498374,
	0.6427876096865393, 0.6560590289905072, 0.6691306063588582,
	0.6819983600624985, 0.6946583704589973, 0.7071067811865475,
	0.7193398003386511, 0.7313537016191705, 0.7431448254773942,
	0.754709580222772, 0.766044443118978, 0.7771459614569708, 0.788010753606722,
	0.7986355100472928, 0.8090169943749475, 0.8191520442889918,
	0.8290375725550417, 0.8386705679454239, 0.8480480961564261,
	0.8571673007021122, 0.8660254037844386, 0.8746197071393957,
	0.8829475928589269, 0.8910065241883678, 0.898794046299167,
	0.9063077870366499, 0.9135454576426009, 0.9205048534524403,
	0.9271838545667874, 0.9335804264972017, 0.9396926207859083,
	0.9455185755993167, 0.9510565162951535, 0.9563047559630354,
	0.9612616959383189, 0.9659258262890683, 0.9702957262759965,
	0.9743700647852352, 0.9781476007338056, 0.981627183447664,
	0.984807753012208, 0.9876883405951378, 0.9902680687415703,
	0.992546151641322, 0.9945218953682733, 0.9961946980917455,
	0.9975640502598242, 0.9986295347545738, 0.9993908270190958,
	0.9998476951563913, 1, 0.9998476951563913, 0.9993908270190958,
	0.9986295347545738, 0.9975640502598242, 0.9961946980917455,
	0.9945218953682734, 0.9925461516413221, 0.9902680687415704,
	0.9876883405951377, 0.984807753012208, 0.981627183447664,
	0.9781476007338057, 0.9743700647852352, 0.9702957262759965,
	0.9659258262890683, 0.9612616959383189, 0.9563047559630355,
	0.9510565162951536, 0.9455185755993168, 0.9396926207859084,
	0.9335804264972017, 0.9271838545667874, 0.9205048534524404,
	0.913545457642601, 0.90630778703665, 0.8987940462991669, 0.8910065241883679,
	0.8829475928589271, 0.8746197071393959, 0.8660254037844387,
	0.8571673007021123, 0.8480480961564261, 0.838670567945424,
	0.8290375725550417, 0.819152044288992, 0.8090169943749475,
	0.7986355100472927, 0.788010753606722, 0.777145961456971, 0.766044443118978,
	0.7547095802227718, 0.7431448254773942, 0.7313537016191706,
	0.7193398003386514, 0.7071067811865476, 0.6946583704589971,
	0.6819983600624986, 0.6691306063588583, 0.6560590289905073,
	0.6427876096865395, 0.6293203910498377, 0.6156614753256584,
	0.6018150231520482, 0.5877852522924732, 0.5735764363510464,
	0.5591929034707469, 0.5446390350150269, 0.5299192642332049,
	0.5150380749100544, 0.49999999999999994, 0.48480962024633717,
	0.4694715627858911, 0.45399049973954686, 0.4383711467890773,
	0.4226182617406995, 0.40673664307580043, 0.39073112848927416,
	0.37460659341591224, 0.3583679495453002, 0.3420201433256689,
	0.325568154457157, 0.3090169943749475, 0.29237170472273705,
	0.27563735581699966, 0.258819045102521, 0.24192189559966773,
	0.22495105434386478, 0.20791169081775931, 0.19080899537654497,
	0.17364817766693028, 0.15643446504023098, 0.13917310096006574,
	0.12186934340514755, 0.10452846326765373, 0.08715574274765864,
	0.06975647374412552, 0.05233595624294381, 0.0348994967025007,
	0.01745240643728344, 0,
];

export class TrigonometryFunctions {
	/**
	 * Calculates the sine of an angle in degrees.
	 * @param {number} x - the angle in degrees.
	 * @param {number} [accuracy=10] - precision of the result.
	 * @return {number} the sine of the angle.
	 */
	static sin(x: number, accuracy: number = 10): number {
		let result = x % 360;
		if (result <= 0) {
			if (result >= -180) {
				if (result % 1 === 0) {
					return -sineList[-result];
				} else {
					return Summation.AdditiveSummation(
						`(((-1)^n)*(${Conversions.convertAngle(
							result,
							'DEGREES',
							'RADIANS',
						)}^(2n+1)))/((2n+1)!)`,
						0,
						accuracy,
						1,
					);
				}
			} else if (result <= -180) {
				if (result % 1 === 0) {
					return sineList[-result % 180];
				} else {
					return Summation.AdditiveSummation(
						`(((-1)^n)*(${Conversions.convertAngle(
							-result % 180,
							'DEGREES',
							'RADIANS',
						)}^(2n+1)))/((2n+1)!)`,
						0,
						accuracy,
						1,
					);
				}
			}
		} else {
			if (result <= 180) {
				if (result % 1 === 0) {
					return sineList[result];
				} else {
					return Summation.AdditiveSummation(
						`(((-1)^n)*(${Conversions.convertAngle(
							result,
							'DEGREES',
							'RADIANS',
						)}^(2n+1)))/((2n+1)!)`,
						0,
						accuracy,
						1,
					);
				}
			} else if (result >= 180) {
				if (result % 1 === 0) {
					return -sineList[result % 180];
				} else {
					return -Summation.AdditiveSummation(
						`(((-1)^n)*(${Conversions.convertAngle(
							result % 180,
							'DEGREES',
							'RADIANS',
						)}^(2n+1)))/((2n+1)!)`,
						0,
						accuracy,
						1,
					);
				}
			}
		}
	}
	/**
	 * Calculates the cosine of a given angle in degrees.
	 * @param {number} x - the angle in degrees
	 * @param {number} [accuracy=10] - the number of decimal places to calculate the result
	 * @return {number} - the cosine of the angle
	 */
	static cos(x: number, accuracy: number = 10): number {
		return this.sin(x - 90, accuracy);
	}

	/**
	 * Calculates the tangent of a number using the sine and cosine functions.
	 * @param {number} x - The input number in radians.
	 * @param {number} [accuracy=10] - The number of decimal places to calculate the result to.
	 * @return {number} The tangent of the input number, rounded to the specified accuracy.
	 */
	static tan(x: number, accuracy: number = 10): number {
		return this.sin(x, accuracy) / this.cos(x, accuracy);
	}

	/**
	 * Calculates the cosecant of an angle in radians with a given accuracy.
	 * @param {number} x - the angle in radians
	 * @param {number} [accuracy=10] - the number of decimal places to approximate the result to
	 * @return {number} the cosecant of the angle with the given accuracy
	 */
	static csc(x: number, accuracy: number = 10): number {
		return 1 / this.sin(x, accuracy);
	}

	/**
	 * Calculates the secant of a given angle in radians.
	 * @param {number} x - The angle in radians.
	 * @param {number} [accuracy=10] - The number of decimal places to round the result to. Defaults to 10.
	 * @return {number} The secant of the given angle.
	 */
	static sec(x: number, accuracy: number = 10): number {
		return 1 / this.cos(x, accuracy);
	}

	/**
	 * Calculates the cotangent of a given angle in radians.
	 * @param {number} x - The angle in radians.
	 * @param {number} [accuracy=10] - The accuracy of the result.
	 * @return {number} The cotangent of the angle.
	 */
	static cot(x: number, accuracy: number = 10): number {
		return 1 / this.tan(x, accuracy);
	}

	/**
	 * Calculates the hyperbolic sine of a number.
	 * @param {number} x - The number to apply the function to.
	 * @return {number} The hyperbolic sine of the input number.
	 */
	static sinh(x: number): number {
		const e = Constants.e;
		return e ** x - e ** -x / 2;
	}

	/**
	 * Returns the hyperbolic cosine of a number.
	 * @param {number} x - The number for which to return the hyperbolic cosine.
	 * @return {number} The hyperbolic cosine of the number.
	 */
	static cosh(x: number): number {
		const e = Constants.e;
		return (e ** x + e ** -x) / 2;
	}

	/**
	 * Calculates the hyperbolic tangent of a number.
	 * @param {number} x - The number to calculate the tangent of.
	 * @return {number} The hyperbolic tangent of the number.
	 */
	static tanh(x: number): number {
		return this.sinh(x) / this.cosh(x);
	}

	/**
	 * Computes the arcsine of x using the given accuracy.
	 * @param {number} x - The value to compute the arcsine for.
	 * @param {number} [accuracy=10] - The accuracy to use in the computation.
	 * @return {number} The computed arcsine value.
	 */
	static arcsin(x: number, accuracy: number = 10): number {
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
	 * @param {number} x - The number to get the arccosine of.
	 * @param {number} [accuracy=10] - The number of iterations to perform. Defaults to 10.
	 * @return {number} The arccosine of the given number.
	 */
	static arccos(x: number, accuracy: number = 10): number {
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
	 * @param {number} x - The input number.
	 * @param {number} [accuracy=10] - The accuracy of the resulting calculation. Defaults to 10.
	 * @return {number} The calculated arctangent value.
	 */
	static arctan(x: number, accuracy: number = 10): number {
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
	 * @param {number} x - The value to calculate the arccsc of.
	 * @param {number} [accuracy=10] - The number of terms to use in the Maclaurin series expansion. Defaults to 10.
	 * @returns {number} The arccsc of the given number.
	 */
	static arccsc(x: number, accuracy: number = 10): number {
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
	 * @param {number} [accuracy=10] - the number of iterations to perform for accuracy
	 * @return {number} the arcsecant of x with given accuracy
	 */
	static arcsec(x: number, accuracy: number = 10): number {
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
	 * @param {number} [accuracy=10] - the number of iterations to perform in the approximation
	 * @return {number} the arccotangent of x to the specified accuracy
	 */
	static arccot(x: number, accuracy: number = 10): number {
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
	 * @param {number} x - The number to compute the inverse hyperbolic sine of.
	 * @param {number} [accuracy=10] - The number of terms to use in the Maclaurin series expansion.
	 * @return {number} The inverse hyperbolic sine (arcsinh) of the given number.
	 */
	static arcsinh(x: number, accuracy: number = 10): number {
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
	 * @param {number} x - A number whose inverse hyperbolic cosine is to be found.
	 * @param {number} [accuracy=10] - The number of iterations to perform. Default value is 10.
	 * @return {number} The inverse hyperbolic cosine of the given number.
	 */
	static arccosh(x: number, accuracy: number = 10): number {
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
	 * @param {number} x - The number to calculate the arctanh of.
	 * @param {number} [accuracy=10] - The number of iterations to perform to approximate the arctanh value.
	 * @return {number} The arctanh value of the input number.
	 */
	static arctanh(x: number, accuracy: number = 10): number {
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
	 * @param {number} [accuracy=10] - (optional) the number of iterations to use in the approximation, defaults to 10
	 * @return {number} the calculated inverse hyperbolic cosecant of the input number
	 */
	static arcscsh(x: number, accuracy: number = 10): number {
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
	 * @param {number} x - the number to compute the inverse hyperbolic secant of.
	 * @param {number} [accuracy=10] - the number of decimal places to return in the result. Default is 10.
	 * @return {number} the inverse hyperbolic secant of x.
	 */
	static arcsecsh(x: number, accuracy: number = 10): number {
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
	 * @param {number} x - The number whose inverse hyperbolic cotangent is to be calculated.
	 * @return {number} The inverse hyperbolic cotangent of the given number.
	 */
	static arccoth(x: number): number {
		return 0.5 * Logarithms.log((x + 1) / (x - 1));
	}
}
