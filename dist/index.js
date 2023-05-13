/**
 * Enum for Circle Related values.
 * @enum
 * @readonly
 * @example <caption>Example - Value of pi</caption>
 * // returns 3.141592653589793
 * Circles.pi
 */
var Circles;
(function (Circles) {
    Circles[Circles["pi"] = 3.141592653589793] = "pi";
})(Circles || (Circles = {}));

/**
 * Class for all indices related functions.
 */
class Indices {
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
    static power(number, power) {
        if (typeof power != 'number' && !power.denominator)
            throw new Error('TypeError: power must be a number or an object with a denominator or numerator');
        let p;
        if (typeof number === 'object') {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (power.denominator && power.numerator) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                p = power.numerator / power.denominator;
            }
            else {
                throw new Error('TypeError: power must be a number or an object with a denominator or numerator');
            }
        }
        else if (typeof power === 'number') {
            p = power;
        }
        else
            throw new Error('TypeError: power must be a number or an object with a denominator or numerator');
        if (!power)
            p = 2;
        return Math.pow(number, p);
    }
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
function gcd2(a, b, options) {
    if (!options)
        options = {};
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (options.base) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        a = baseNtoBaseN(a, options.base, 10);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        b = baseNtoBaseN(b, options.base, 10);
    }
    if (a === 0)
        return b;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (options.base) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return baseNtoBaseN(gcd2(a % b, a, options), 10, options.base);
    }
    else {
        return gcd2(a % b, a, options);
    }
}
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
function gcd(arr, options) {
    if (!options)
        options = {};
    const n = arr.length;
    let result = arr[0];
    for (let i = 1; i < n; i++) {
        result = gcd2(arr[i], result, options);
        if (result == 1) {
            return 1;
        }
    }
    return result;
}
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
function baseNtoBaseN(number, baseN, toBaseN) {
    if (baseN > 36 || baseN < 2 || toBaseN > 36 || toBaseN < 2) {
        return null;
    }
    let base10 = parseInt(number.toString(), baseN);
    if (toBaseN === 10) {
        return base10;
    }
    else {
        return base10.toString(toBaseN);
    }
}

/**
 * Creates a Fraction.
 */
class Faction {
    /**
     * Creates the fraction
     * @param {number} numerator - The numerator(upper number) of the fraction
     * @param {number} denominator - The denominator(lower number) of the fraction
     * @example <caption>Example - Create Fraction</caption>
     * // returns { numerator: 3, denominator: 6 }
     * new Fraction(3,6)
     * @returns {Object}
     */
    constructor(numerator, denominator) {
        if (Math.floor(numerator) != numerator) {
            numerator.toString().split('.')[1].length || 0;
        }
        if (Math.floor(denominator) != denominator) {
            denominator.toString().split('.')[1].length || 0;
        }
        this.numerator = numerator;
        this.denominator = denominator;
        return this;
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

export { Circles, Faction, Indices, baseNtoBaseN, gcd, gcd2 };
