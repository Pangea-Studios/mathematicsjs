declare enum Circles {
    pi = 3.141592653589793
}

/**
 * Class for all indices related functions.
 */
declare class Indices {
    /**
     * Returns the inputted number multiplied by itself the specified amount of times
     * @param {number} number - The number to multiply by itself
     * @param {(number|Object)} [power=2] - The amount of times to multiply number by itself
     * @example <caption>Example 1 - Without specifying a power</caption>
     * // returns 25
     * Indices.power(5)
     * @example <caption>Example 2 - With specifying a power</caption>
     * // returns 8
     * Indices.power(2, 3)
     * @returns {number} The inputted number multiplied by itself the specified amount of times
     */
    static power(number: number, power: any): number;
}

/**
 * Creates a Fraction.
 */
declare class Faction {
    numerator: number;
    denominator: number;
    simplifiedNumerator: number;
    simplifiedDenominator: number;
    /**
     * Creates the fraction
     * @param {number} numerator - The numerator(upper number) of the fraction
     * @param {number} denominator - The denominator(lower number) of the fraction
     * @example <caption>Example - Create Fraction</caption>
     * // returns { numerator: 3, denominator: 6 }
     * new Fraction(3,6)
     * @returns {Object}
     */
    constructor(numerator: number, denominator: number);
    /**
     * Simplify the number
     * @example <caption>Example - Simplify Fraction</caption>
     * // Returns [1,2]
     * const myFraction = new Fraction(3,6)
     * myFraction.simplified()
     * @returns {number[]} Simplified Fraction
     */
    simplified(): number[];
    /**
     * Converts the fraction to a decimal
     * @example <caption>Example - Convert Fraction to Decimal</caption>
     * // returns 0.5
     * const myFraction = new Fraction(3,6)
     * myFraction.decimal()
     * @returns {number} Decimal
     */
    decimal(): number;
    /**
     * Converts the fraction to a percentage
     * @example <caption>Example - Convert Fraction to Percentage</caption>
     * // returns 50
     * const myFraction = new Fraction(3,6)
     * myFraction.percentage()
     * @returns {number} Percentage
     */
    percentage(): number;
    /**
     * Converts the fraction to a string
     * @example <caption>Example - Convert Fraction to String</caption>
     * // returns "3/6"
     * const myFraction = new Fraction(3,6)
     * myFraction.toString()
     * @returns {string} Fraction String
     */
    toString(): string;
    /**
     * Converts the fraction to a simplified string
     * @example <caption>Example - Convert Fraction Simplified String</caption>
     * // returns "1/2"
     * const myFraction = new Fraction(3,6)
     * myFraction.toSimplifiedString()
     * @returns {string} Simplified Fraction String
     */
    toSimplifiedString(): string;
}

/**
 * Find the GCD of 2 numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @param {Object} [options] Extra options
 * @param {number} [options.base] The base of the numbers you inputted
 * @example <caption>Example 1 - Non Prime Numbers</caption>
 * // returns 2
 * gcd(8,12)
 * @example <caption>Example 2 - Prime Numbers</caption>
 * // returns 1
 * gcd(5,7)
 * @returns {number} The GCD of the two inputted numbers
 */
declare function gcd2(a: number, b: number, options?: Object): number;
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
declare function gcd(arr: number[], options?: Object): number;
/**
 * Convert a number to a different base
 * @param {number|string} number - The inputted number
 * @param {number} baseN - The base of the inputted number
 * @param {number} toBaseN - The base to convert to
 * @example <caption>Example - Converting Base 10 to Base 36</caption>
 * // returns 'zz'
 * baseNtoBaseN(3535, 10, 36)
 * @returns {number|string} The inputted number in the specified base
 */
declare function baseNtoBaseN(number: number | string, baseN: number, toBaseN: number): string | number;

export { Circles, Faction, Indices, baseNtoBaseN, gcd, gcd2 };
