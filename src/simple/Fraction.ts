import { gcd2 } from '../util';

/**
 * Creates a Fraction.
 */
export class Fraction {
	public numerator: number;
	public denominator: number;
	public simplifiedNumerator: number;
	public simplifiedDenominator: number;

	/**
	 * Creates the fraction
	 * @param {number} numerator - The numerator(upper number) of the fraction
	 * @param {number} denominator - The denominator(lower number) of the fraction
	 * @example <caption>Example - Create Fraction</caption>
	 * // returns { numerator: 3, denominator: 6 }
	 * new Fraction(3,6)
	 * @returns {Object}
	 */
	constructor(numerator: number, denominator: number) {
		if (denominator === 0) {
			throw new Error('Denominator cannot be zero.');
		}
		const sign = denominator < 0 ? -1 : 1;
		numerator *= sign;
		denominator *= sign;
		const gcd = gcd2(numerator, denominator);
		this.numerator = sign * (numerator / gcd);
		this.denominator = denominator / gcd;
	}

	/**
	 * Simplify the number
	 * @example <caption>Example - Simplify Fraction</caption>
	 * // Returns [1,2]
	 * const myFraction = new Fraction(3,6)
	 * myFraction.simplified()
	 * @returns {number[]} Simplified Fraction
	 */
	simplified() {
		const gcd = gcd2(this.numerator, this.denominator);
		this.simplifiedNumerator = this.numerator / gcd;
		this.simplifiedDenominator = this.denominator / gcd;
		return [this.numerator / gcd, this.denominator / gcd];
	}

	/**
	 * Converts the fraction to a decimal
	 * @example <caption>Example - Convert Fraction to Decimal</caption>
	 * // returns 0.5
	 * const myFraction = new Fraction(3,6)
	 * myFraction.decimal()
	 * @returns {number} Decimal
	 */
	decimal() {
		return this.numerator / this.denominator;
	}

	/**
	 * Converts the fraction to a percentage
	 * @example <caption>Example - Convert Fraction to Percentage</caption>
	 * // returns 50
	 * const myFraction = new Fraction(3,6)
	 * myFraction.percentage()
	 * @returns {number} Percentage
	 */
	percentage() {
		return (this.numerator / this.denominator) * 100;
	}

	/**
	 * Converts the fraction to a string
	 * @example <caption>Example - Convert Fraction to String</caption>
	 * // returns "3/6"
	 * const myFraction = new Fraction(3,6)
	 * myFraction.toString()
	 * @returns {string} Fraction String
	 */
	toString() {
		return `${this.numerator}/${this.denominator}`;
	}

	/**
	 * Converts the fraction to a simplified string
	 * @example <caption>Example - Convert Fraction Simplified String</caption>
	 * // returns "1/2"
	 * const myFraction = new Fraction(3,6)
	 * myFraction.toSimplifiedString()
	 * @returns {string} Simplified Fraction String
	 */
	toSimplifiedString() {
		const x = this.simplified();
		return `${x[0]}/${x[1]}`;
	}
}
