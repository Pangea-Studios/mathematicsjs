declare enum Circles {
    pi = 3.141592653589793
}

declare type nOF = {
    numerator: number;
    denominator: number;
} | number;
/**
 * Class for all indices related functions.
 */
declare class Indices {
    /**
     * Returns the inputted number multiplied by itself the specified amount of times
     * @param {number} number - The number to multiply by itself
     * @param {nOF} [power] - The amount of times to multiply number by itself
     * @example <caption>Example 1 - Without specifying a power</caption>
     * // returns 25
     * Indices.power(5)
     * @example <caption>Example 2 - With specifying a power</caption>
     * // returns 8
     * Indices.power(2, 3)
     * @returns {number} The inputted number multiplied by itself the specified amount of times
     */
    static power(number: number, power: nOF): number;
}

/**
 * Creates a Fraction.
 */
declare class Faction {
    numerator: number;
    denominator: number;
    simplifiedNumerator: number;
    simplifiedDenominator: number;
    constructor(numerator: number, denominator: number);
    simplified(): number[];
    decimal(): number;
    percentage(): number;
    toString(): string;
    toSimplifiedString(): string;
}

/**
 * Find the GCD of 2 numbers
 * @param {number} a The first number
 * @param {number} b The second number
 * @example <caption>Example 1 - Non Prime Numbers</caption>
 * // returns 2
 * gcd(8,12)
 * @example <caption>Example 2 - Prime Numbers</caption>
 * // returns 1
 * gcd(5,7)
 * @returns {number} The GCD of the two inputted numbers
 */
declare function gcd2(a: number, b: number): number;
/**
 * Find the GCD of the inputted numbers
 * @param {number[]} arr The numbers to find the GCD of
 * @example <caption>Example 1 - Non Prime Numbers</caption>
 * // returns 2
 * gcd([8,12,16])
 * @example <caption>Example 2 - Prime Numbers</caption>
 * // returns 1
 * gcd([7,13,5])
 * @returns {number} The GCD of the inputted numbers
 */
declare function gcd(arr: number[]): number;

export { Circles, Faction, Indices, gcd, gcd2, nOF };
