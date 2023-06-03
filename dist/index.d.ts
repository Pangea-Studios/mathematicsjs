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
    /**
     * Calculates the nth root of a given number.
     *
     * @param {number} number - the number to calculate the nth root of.
     * @param {number} root - the root to use for the calculation.
     * @return {number} the result of the nth root calculation.
     */
    static root(number: number, root: number): number;
}

/**
 * Creates a Fraction.
 */
declare class Fraction {
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
 * Find the GCD of two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @param {Object} [options] Extra options
 * @param {number} [options.base] The base of the numbers you inputted
 * @returns {number} The GCD of the two numbers
 */
declare function gcd2(a: number, b: number, options?: object): number;
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
 * @param {number} [options.radius] - The radius of the circle
 * @param {number} [options.diameter] - The diameter of the circle
 * @param {number} [options.circumference] - The circumference of the circle
 * @param {number} [options.area] - The area of the circle
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

/**
 * Class to create and manipulate Matrices
 */
declare class Matrix {
    columns: number;
    rows: number;
    values: number[][];
    constructor(rows: number, columns: number, values: number[][]);
    /**
     * Multiplies two matrices of different sizes.
     *
     * @param {Array<Array<number>>} matrixA - The first matrix to multiply.
     * @param {Array<Array<number>>} matrixB - The second matrix to multiply.
     * @returns {Array<Array<number>>} The resulting matrix from the multiplication.
     * @throws {Error} If the matrices cannot be multiplied.
     */
    multiplyMatrices(matrixA: number[][], matrixB: number[][]): number[][];
    /**
     * Adds two matrices.
     *
     * @param {Array<Array<number>>} matrixA - The first matrix to add.
     * @param {Array<Array<number>>} matrixB - The second matrix to add.
     * @returns {Array<Array<number>>} The resulting matrix from the addition.
     * @throws {Error} If the matrices have different dimensions.
     */
    addMatrices(matrixA: number[][], matrixB: number[][]): number[][];
    /**
     * Divides two matrices.
     *
     * @param {number[][]} matrixA - The first matrix to divide.
     * @param {number[][]} matrixB - The second matrix to divide.
     * @returns {number[][]} The resulting matrix from the division.
     * @throws {Error} If the matrices have different dimensions or if any element of matrixB is zero.
     */
    divideMatrices(matrixA: number[][], matrixB: number[][]): number[][];
    /**
     * Subtracts two matrices.
     *
     * @param {Array<Array<number>>} matrixA - The first matrix to subtract.
     * @param {Array<Array<number>>} matrixB - The second matrix to subtract.
     * @returns {Array<Array<number>>} The resulting matrix from the subtraction.
     * @throws {Error} If the matrices have different dimensions.
     */
    subtractMatrices(matrixA: number[][], matrixB: number[][]): number[][];
    /**
     * Multiplies a matrix by a scalar.
     *
     * @param {Array<Array<number>>} matrix - The matrix to multiply.
     * @param {number} scalar - The scalar to multiply the matrix by.
     * @returns {Array<Array<number>>} The resulting matrix from the multiplication.
     */
    multiplyMatrixByScalar(matrix: number[][], scalar: number): number[][];
    /**
     * Divides a matrix by a scalar.
     *
     * @param {Array<Array<number>>} matrix - The matrix to divide.
     * @param {number} scalar - The scalar to divide the matrix by.
     * @returns {Array<Array<number>>} The resulting matrix from the division.
     * @throws {Error} If the scalar is zero.
     */
    divideMatrixByScalar(matrix: number[][], scalar: number): number[][];
}

declare type OperationsInput = number | {
    numerator: number;
    denominator: number;
};
/**
 * Calculates the sum of all numbers and fraction inputs.
 *
 * @param {Array.<number | {numerator: number, denominator: number}>} inputs - An array of OperationsInput objects.
 * @return {number} The sum of all numbers and fractions.
 */
declare function add(inputs: OperationsInput[]): number;
/**
 * Subtracts all the numbers and fractions in the given array of operations.
 *
 * @param {Array.<number | {numerator: number, denominator: number}>} inputs - An array of numbers and fractions to subtract.
 * @return {number} The result of subtracting all the inputs.
 */
declare function subtract(inputs: OperationsInput[]): number;
/**
 * Multiplies a list of numbers and/or fractions.
 *
 * @param {Array.<number | {numerator: number, denominator: number}>} inputs - An array of numbers and/or fractions to multiply.
 * @return {number} The result of multiplying all inputs together.
 */
declare function multiply(inputs: OperationsInput[]): number;
/**
 * Divides a list of numbers and/or fractions and returns the result.
 *
 * @param {Array.<number | {numerator: number, denominator: number}>} inputs - An array of numbers and/or objects with a numerator and denominator.
 * @return {number} - The result of dividing all the numbers/fractions in the input array.
 */
declare function divide(inputs: OperationsInput[]): number;

declare class physicsFormulae {
}

declare const energyEnum: {
    readonly Joules: "JOULES";
    readonly Electronvolt: "ELECTRONVOLT";
    readonly Kiloelectronvolts: "KILOELECTRONVOLTS";
    readonly Megaelectronvolts: "MEGAELECTRONVOLTS";
    readonly Gigaelectronvolts: "GIGAELECTRONVOLTS";
    readonly Teraelectronvolts: "TERAELECTRONVOLTS";
    readonly Watts: "WATTS";
    readonly Watt_Hours: "WATT_HOURS";
    readonly Kilowatts: "KILOWATTS";
    readonly Kilowatt_Hours: "KILOWATT_HOURS";
    readonly Calories: "CALORIES";
    readonly Kilocalories: "KILOCALORIES";
    readonly British_Thermal_Units: "BRITISH_THERMAL_UNITS";
    readonly US_Therms: "US_THERMS";
    readonly Foot_pounds: "FOOT-POUNDS";
};
declare const angleEnum: {
    readonly Arcminutes: "ARCMINUTES";
    readonly Arcseconds: "ARCSECONDS";
    readonly Degrees: "DEGREES";
    readonly Radians: "RADIANS";
    readonly Gradians: "GRADIANS";
    readonly Milliradians: "MILLIRADIANS";
    readonly Revolutions: "REVOLUTIONS";
    readonly Quadrants: "QUADRANTS";
    readonly Sextants: "SEXTANTS";
    readonly Signs: "SIGNS";
    readonly Octants: "OCTANTS";
};
declare const lengthEnum: {
    readonly Picometers: "PICOMETERS";
    readonly Nanometers: "NANOMETERS";
    readonly Micrometers: "MICROMETERS";
    readonly Millimeters: "MILLIMETERS";
    readonly Centimeters: "CENTIMETERS";
    readonly Decimeters: "DECIMETERS";
    readonly Meters: "METERS";
    readonly Hectometers: "HECTOMETERS";
    readonly Kilometers: "KILOMETERS";
    readonly Astronomical_Unit: "ASTRONOMICAL_UNIT";
    readonly Parsec: "PARSEC";
    readonly Light_Years: "LIGHT_YEARS";
    readonly Inches: "INCHES";
    readonly Feet: "FEET";
    readonly Yards: "YARDS";
    readonly Miles: "MILES";
    readonly Nautical_Miles: "NAUTICAL_MILES";
    readonly Fathoms: "FATHOMS";
    readonly Furlongs: "FURLONGS";
};
declare const timeEnum: {
    readonly Picoseconds: "PICOSECONDS";
    readonly Nanoseconds: "NANOSECONDS";
    readonly Microseconds: "MICROSECONDS";
    readonly Milliseconds: "MILLISECONDS";
    readonly Seconds: "SECONDS";
    readonly Minutes: "MINUTES";
    readonly Hours: "HOURS";
    readonly Days: "DAYS";
    readonly Weeks: "WEEKS";
    readonly Fortnights: "FORTNIGHTS";
};
declare const massEnum: {
    readonly Picograms: "PICOGRAMS";
    readonly Nanograms: "NANOGRAMS";
    readonly Micrograms: "MICROGRAMS";
    readonly Milligrams: "MILLIGRAMS";
    readonly Grams: "GRAMS";
    readonly Kilograms: "KILOGRAMS";
    readonly Metric_Tonnes: "METRIC_TONNES";
    readonly Carats: "CARATS";
    readonly Long_Tons: "LONG_TONS";
    readonly Short_Tons: "SHORT_TONS";
    readonly Ounces: "OUNCES";
    readonly Pounds: "POUNDS";
    readonly Stone: "STONE";
    readonly Earth_Masses: "EARTH_MASSES";
    readonly Solar_Masses: "SOLAR_MASSES";
};
declare const temperatureEnum: {
    readonly Celcius: "CELCIUS";
    readonly Fahrenheit: "FAHRENHEIT";
    readonly Klevin: "KLEVIN";
};
declare class Conversions {
    /**
     * Converts an angle from one unit to another.
     *
     * @param {number} value - The value of the angle to convert.
     * @param {typeof angleEnum | string} fromUnit - The unit of the input angle.
     * @param {typeof angleEnum | string} toUnit - The desired unit of the output angle.
     * @throws {Error} Unknown unit: {fromUnit} or Unknown unit: {toUnit} if the provided units are not recognized.
     * @return {number} The converted angle value.
     */
    static convertAngle(value: number, fromUnit: typeof angleEnum | string, toUnit: typeof angleEnum | string): number;
    /**
     * Converts a length value from one unit to another.
     *
     * @param {number} value - The value to convert.
     * @param {typeof lengthEnum | string} fromUnit - The unit to convert from.
     * @param {typeof lengthEnum | string} toUnit - The unit to convert to.
     * @return {number} The converted value.
     */
    static convertLength(value: number, fromUnit: typeof lengthEnum | string, toUnit: typeof lengthEnum | string): number;
    /**
     * Converts a time value from one unit to another.
     *
     * @param {number} value - The value to convert.
     * @param {typeof timeEnum | string} fromUnit - The unit of the input value.
     * @param {typeof timeEnum | string} toUnit - The desired unit of the output value.
     * @returns {number} - The converted value in the desired unit.
     */
    static convertTime(value: number, fromUnit: typeof timeEnum | string, toUnit: typeof timeEnum | string): number;
    /**
     * Converts a mass value from one unit to another.
     *
     * @param {number} value - The mass value to be converted.
     * @param {typeof massEnum | string} fromUnit - The unit to convert from.
     * @param {typeof massEnum | string} toUnit - The unit to convert to.
     * @return {number} The converted mass value.
     */
    static convertMass(value: number, fromUnit: typeof massEnum | string, toUnit: typeof massEnum | string): number;
    /**
     * Convert an energy value from one unit to another.
     *
     * @param {number} value - the energy value to convert
     * @param {typeof energyEnum | string} fromUnit - the unit of the input value
     * @param {typeof energyEnum | string} toUnit - the desired output unit
     * @return {number} - the converted energy value
     */
    static convertEnergy(value: number, fromUnit: typeof energyEnum | string, toUnit: typeof energyEnum | string): number;
    /**
     * Converts a temperature value from one unit to another.
     *
     * @param {number} value - The temperature value to be converted.
     * @param {typeof temperatureEnum | string} fromUnit - The unit of the input temperature value.
     * @param {typeof temperatureEnum | string} toUnit - The unit of the output temperature value.
     * @return {number} The converted temperature value in the desired unit.
     */
    static convertTemperature(value: number, fromUnit: typeof temperatureEnum | string, toUnit: typeof temperatureEnum | string): number;
}

declare class Averages {
    static mean(input: number[]): number;
    static median(input: number[]): number;
    static mode(input: number[]): any;
    static range(input: number[]): number;
}

export { Averages, Circle, Conversions, Fraction, Indices, Matrix, add, angleEnum, convertBase, divide, energyEnum, gcd, gcd2, lengthEnum, massEnum, multiply, physicsFormulae, subtract, temperatureEnum, timeEnum };
