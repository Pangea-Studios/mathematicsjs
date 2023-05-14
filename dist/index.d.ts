/**
 * Class for all indices related functions.
 */
declare class Indices {
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
    static power(number: number, power: number | object): number;
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
declare function gcd2(a: number, b: number, options?: object): number;
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
declare function gcd(arr: number[], options?: object): number;
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
declare function convertBase(number: number | string, fromBase: number, toBase: number): string | number;

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
 * @example <caption>Example 2 - Create Circle by Diameter</caption>
 * // returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }
 * new Circle({ diameter: 2 })
 * @example <caption>Example 3 - Create Circle by Circumference</caption>
 * // returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }
 * new Circle({ circumference: 3.14 })
 * @example <caption>Example 4 - Create Circle by Area</caption>
 * // returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }
 * new Circle({ area: 3.14 })
 * @returns {Object} All Measurements
 */
declare class Circle {
    /**
     * Gets the radius
     * @type {number}
     * @example <caption>Example - Get Radius</caption>
     * // returns 1
     * new Circle({ diameter: 2 }).radius
     * @returns {number}
     * @see https://en.wikipedia.org/wiki/Radius
     */
    radius: number;
    /**
     * Gets the circumference
     * @type {number}
     * @example <caption>Example - Get Circumference</caption>
     * // returns 3.14
     * new Circle({ radius: 1 }).circumference
     * @returns {number}
     * @see https://en.wikipedia.org/wiki/Circumference
     */
    readonly circumference: number;
    /**
     * Gets the diameter
     * @type {number}
     * @example <caption>Example - Get Diameter</caption>
     * // returns 2
     * new Circle({ radius: 1 }).diameter
     * @returns {number}
     * @see https://en.wikipedia.org/wiki/Diameter
     */
    readonly diameter: number;
    /**
     * Gets the area
     * @type {number}
     * @example <caption>Example - Get Area</caption>
     * // returns 3.14
     * new Circle({ radius: 1 }).area
     * @returns {number}
     * @see https://en.wikipedia.org/wiki/Area
     */
    readonly area: number;
    /**
     * Gets the value of pi
     * @type {number}
     * @example <caption>Example - Get Pi</caption>
     * // returns 3.14
     * Circle.pi
     * @returns {number}
     * @see https://en.wikipedia.org/wiki/Pi
     */
    readonly pi: number;
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
    constructor({ radius, diameter, circumference, area, }: {
        radius?: number;
        diameter?: number;
        circumference?: number;
        area?: number;
    });
}

export { Circle, Faction, Indices, convertBase, gcd, gcd2 };
