'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Class for all indices related functions.
 */
class Indices {
    /**
     * Returns the inputted number multiplied by itself the specified amount of times
     * @param {number} number - The number to multiply by itself
     * @param {(number|object)} [power=2] - The amount of times to multiply number by itself
     * @example <caption>Example 1 - Without specifying a power</caption>
     * // returns 25
     * Indices.power(5)
     * @example <caption>Example 2 - With specifying a power</caption>
     * // returns 8
     * Indices.power(2, 3)
     * @returns {number} The inputted number multiplied by itself the specified amount of times
     */
    static power(number, power) {
        let p;
        if (typeof power === 'object' &&
            'numerator' in power &&
            'denominator' in power) {
            if (power.denominator &&
                power.numerator &&
                typeof power.numerator === 'number' &&
                typeof power.denominator === 'number') {
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
/**
 * Converts a number from one base to another.
 * @param {number|string} number - The inputted number to be converted.
 * @param {number} fromBase - The base of the inputted number.
 * @param {number} toBase - The base to convert to.
 * @example <caption>Example - Converting Base 10 to Base 36</caption>
 * // returns 'zz'
 * convertBase(number: 3535, fromBase: 10, toBase: 36)
 * @returns {number|string} - The inputted number in the specified base.
 */
function convertBase(number, fromBase, toBase) {
    if (fromBase > 36 || fromBase < 2 || toBase > 36 || toBase < 2) {
        return null;
    }
    const base10 = parseInt(number.toString(), fromBase);
    if (toBase === 10) {
        return base10;
    }
    else {
        return base10.toString(toBase);
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

/**
 * Creates a circle
 * @param {Object} options
 * @param {number} options.radius - The radius of the circle
 * @param {number} options.diameter - The diameter of the circle
 * @param {number} options.circumference - The circumference of the circle
 * @param {number} options.area - The area of the circle
 * @example <caption>Example 1 - Create Circle by Radius</caption>
 * // returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }
 * new Circle({ radius: 1 })
 * @example <caption>Example 1 - Create Circle by Diameter</caption>
 * // returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }
 * new Circle({ diameter: 2 })
 * @example <caption>Example 1 - Create Circle by Circumference</caption>
 * // returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }
 * new Circle({ circumference: 3.14 })
 * @example <caption>Example 1 - Create Circle by Area</caption>
 * // returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }
 * new Circle({ area: 3.14 })
 * @returns {Object}
 * @see https://en.wikipedia.org/wiki/Circumference
 * @see https://en.wikipedia.org/wiki/Area
 * @see https://en.wikipedia.org/wiki/Pi
 * @see https://en.wikipedia.org/wiki/Radius
 * @see https://en.wikipedia.org/wiki/Diameter
 */
class Circle {
    /**
     * Creates a circle
     * @param {Object} options
     * @param {number} options.radius - The radius of the circle
     * @param {number} options.diameter - The diameter of the circle
     * @param {number} options.circumference - The circumference of the circle
     * @param {number} options.area - The area of the circle
     * @example <caption>Example 1 - Create Circle by Radius</caption>
     * // returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }
     * new Circle({ radius: 1 })
     * @example <caption>Example 1 - Create Circle by Diameter</caption>
     * // returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }
     * new Circle({ diameter: 2 })
     * @example <caption>Example 1 - Create Circle by Circumference</caption>
     * // returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }
     * new Circle({ circumference: 3.14 })
     * @example <caption>Example 1 - Create Circle by Area</caption>
     * // returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }
     * new Circle({ area: 3.14 })
     * @returns {Object}
     * @see https://en.wikipedia.org/wiki/Circumference
     * @see https://en.wikipedia.org/wiki/Area
     * @see https://en.wikipedia.org/wiki/Pi
     * @see https://en.wikipedia.org/wiki/Radius
     * @see https://en.wikipedia.org/wiki/Diameter
     */
    constructor({ radius, diameter, circumference, area, }) {
        /**
         * Gets the value of pi
         * @example <caption>Example - Get Pi</caption>
         * // returns 3.14
         * new Circle(1).pi
         * @returns {number}
         * @see https://en.wikipedia.org/wiki/Circumference
         */
        this.pi = Math.PI;
        if (isNaN(radius) || radius <= 0) {
            throw new Error('ValueError: Radius must be greater than 0');
        }
        else if (isNaN(diameter) || diameter <= 0) {
            throw new Error('ValueError: Diameter must be greater than 0');
        }
        else if (isNaN(circumference) || circumference <= 0) {
            throw new Error('ValueError: Circumference must be greater than 0');
        }
        else if (isNaN(area) || area <= 0) {
            throw new Error('ValueError: Area must be greater than 0');
        }
        if (radius) {
            this.radius = radius;
            this.diameter = radius * 2;
            this.circumference = 2 * Math.PI * this.radius;
            this.area = Math.PI * this.radius * this.radius;
        }
        else if (diameter) {
            this.radius = diameter / 2;
            this.diameter = diameter;
            this.circumference = 2 * Math.PI * this.radius;
            this.area = Math.PI * this.radius * this.radius;
        }
        else if (circumference) {
            this.radius = circumference / Math.PI / 2;
            this.diameter = this.radius * 2;
            this.circumference = circumference;
            this.area = Math.PI * this.radius * this.radius;
        }
        else if (area) {
            this.radius = Math.sqrt(area / Math.PI);
            this.diameter = this.radius * 2;
            this.circumference = 2 * Math.PI * this.radius;
            this.area = area;
        }
    }
}

exports.Circle = Circle;
exports.Faction = Faction;
exports.Indices = Indices;
exports.convertBase = convertBase;
exports.gcd = gcd;
exports.gcd2 = gcd2;
