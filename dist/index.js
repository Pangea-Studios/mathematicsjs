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
    /**
     * Calculates the nth root of a given number.
     *
     * @param {number} number - the number to calculate the nth root of.
     * @param {number} root - the root to use for the calculation.
     * @return {number} the result of the nth root calculation.
     */
    static root(number, root) {
        // TODO: object compatibility
        return this.power(number, 1 / root);
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
 * Find the GCD of two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @param {Object} [options] Extra options
 * @param {number} [options.base] The base of the numbers you inputted
 * @returns {number} The GCD of the two numbers
 */
function gcd2(a, b, options) {
    if (!options)
        options = {};
    const base = options['base'] || 10;
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
        const t = b;
        b = a % b;
        a = t;
    }
    // If the base is not 10, convert the GCD to the desired base
    if (base !== 10) {
        a = parseInt(a.toString(base), 10);
    }
    return a;
}
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
class Fraction {
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
         * @type {number}
         * @example <caption>Example - Get Pi</caption>
         * // returns 3.14
         * Circle.pi
         * @returns {number}
         * @see https://en.wikipedia.org/wiki/Pi
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
        else {
            throw new Error('ValueError: At least one of following: Radius, Diameter, Circumference, or Area must be specified');
        }
    }
}

/**
 * Class to create and manipulate Matrices
 */
class Matrix {
    constructor(rows, columns, values) {
        this.rows = rows;
        this.columns = columns;
        this.values = values;
    }
    /**
     * Multiplies two matrices of different sizes.
     *
     * @param {Array<Array<number>>} matrixA - The first matrix to multiply.
     * @param {Array<Array<number>>} matrixB - The second matrix to multiply.
     * @returns {Array<Array<number>>} The resulting matrix from the multiplication.
     * @throws {Error} If the matrices cannot be multiplied.
     */
    multiplyMatrices(matrixA, matrixB) {
        const numRowsA = matrixA.length;
        const numColsA = matrixA[0].length;
        const numRowsB = matrixB.length;
        const numColsB = matrixB[0].length;
        if (numColsA !== numRowsB) {
            throw new Error('Matrices cannot be multiplied');
        }
        const result = [];
        for (let i = 0; i < numRowsA; i++) {
            result[i] = [];
            for (let j = 0; j < numColsB; j++) {
                let sum = 0;
                for (let k = 0; k < numColsA; k++) {
                    sum += matrixA[i][k] * matrixB[k][j];
                }
                result[i][j] = sum;
            }
        }
        return result;
    }
    /**
     * Adds two matrices.
     *
     * @param {Array<Array<number>>} matrixA - The first matrix to add.
     * @param {Array<Array<number>>} matrixB - The second matrix to add.
     * @returns {Array<Array<number>>} The resulting matrix from the addition.
     * @throws {Error} If the matrices have different dimensions.
     */
    addMatrices(matrixA, matrixB) {
        const numRowsA = matrixA.length;
        const numColsA = matrixA[0].length;
        const numRowsB = matrixB.length;
        const numColsB = matrixB[0].length;
        if (numRowsA !== numRowsB || numColsA !== numColsB) {
            throw new Error('Matrices must have same dimensions to be added');
        }
        const result = [];
        for (let i = 0; i < numRowsA; i++) {
            result[i] = [];
            for (let j = 0; j < numColsA; j++) {
                result[i][j] = matrixA[i][j] + matrixB[i][j];
            }
        }
        return result;
    }
    /**
     * Divides two matrices.
     *
     * @param {number[][]} matrixA - The first matrix to divide.
     * @param {number[][]} matrixB - The second matrix to divide.
     * @returns {number[][]} The resulting matrix from the division.
     * @throws {Error} If the matrices have different dimensions or if any element of matrixB is zero.
     */
    divideMatrices(matrixA, matrixB) {
        const numRowsA = matrixA.length;
        const numColsA = matrixA[0].length;
        const numRowsB = matrixB.length;
        const numColsB = matrixB[0].length;
        if (numRowsA !== numRowsB || numColsA !== numColsB) {
            throw new Error('Matrices must have same dimensions to be divided');
        }
        const result = [];
        for (let i = 0; i < numRowsA; i++) {
            result[i] = [];
            for (let j = 0; j < numColsA; j++) {
                if (matrixB[i][j] === 0) {
                    throw new Error('Cannot divide by zero');
                }
                result[i][j] = matrixA[i][j] / matrixB[i][j];
            }
        }
        return result;
    }
    /**
     * Subtracts two matrices.
     *
     * @param {Array<Array<number>>} matrixA - The first matrix to subtract.
     * @param {Array<Array<number>>} matrixB - The second matrix to subtract.
     * @returns {Array<Array<number>>} The resulting matrix from the subtraction.
     * @throws {Error} If the matrices have different dimensions.
     */
    subtractMatrices(matrixA, matrixB) {
        const numRowsA = matrixA.length;
        const numColsA = matrixA[0].length;
        const numRowsB = matrixB.length;
        const numColsB = matrixB[0].length;
        if (numRowsA !== numRowsB || numColsA !== numColsB) {
            throw new Error('Matrices must have same dimensions to be subtracted');
        }
        const result = [];
        for (let i = 0; i < numRowsA; i++) {
            result[i] = [];
            for (let j = 0; j < numColsA; j++) {
                result[i][j] = matrixA[i][j] - matrixB[i][j];
            }
        }
        return result;
    }
    /**
     * Multiplies a matrix by a scalar.
     *
     * @param {Array<Array<number>>} matrix - The matrix to multiply.
     * @param {number} scalar - The scalar to multiply the matrix by.
     * @returns {Array<Array<number>>} The resulting matrix from the multiplication.
     */
    multiplyMatrixByScalar(matrix, scalar) {
        const numRows = matrix.length;
        const numCols = matrix[0].length;
        const result = [];
        for (let i = 0; i < numRows; i++) {
            result[i] = [];
            for (let j = 0; j < numCols; j++) {
                result[i][j] = matrix[i][j] * scalar;
            }
        }
        return result;
    }
    /**
     * Divides a matrix by a scalar.
     *
     * @param {Array<Array<number>>} matrix - The matrix to divide.
     * @param {number} scalar - The scalar to divide the matrix by.
     * @returns {Array<Array<number>>} The resulting matrix from the division.
     * @throws {Error} If the scalar is zero.
     */
    divideMatrixByScalar(matrix, scalar) {
        if (scalar === 0) {
            throw new Error('Cannot divide by zero');
        }
        const numRows = matrix.length;
        const numCols = matrix[0].length;
        const result = [];
        for (let i = 0; i < numRows; i++) {
            result[i] = [];
            for (let j = 0; j < numCols; j++) {
                result[i][j] = matrix[i][j] / scalar;
            }
        }
        return result;
    }
}

/**
 * Calculates the sum of all numbers and fraction inputs.
 *
 * @param {Array.<number | {numerator: number, denominator: number}>} inputs - An array of OperationsInput objects.
 * @return {number} The sum of all numbers and fractions.
 */
function add(inputs) {
    let total;
    for (const input of inputs) {
        if (typeof input === 'number') {
            total += input;
        }
        else if (typeof input === 'object' &&
            'numerator' in input &&
            'denominator' in input) {
            total += input.numerator / input.denominator;
        }
    }
    return total;
}
/**
 * Subtracts all the numbers and fractions in the given array of operations.
 *
 * @param {Array.<number | {numerator: number, denominator: number}>} inputs - An array of numbers and fractions to subtract.
 * @return {number} The result of subtracting all the inputs.
 */
function subtract(inputs) {
    let total = null;
    for (const input of inputs) {
        if (typeof input === 'number') {
            if (input === inputs[0] && total === null) {
                total = input;
            }
            else {
                total -= input;
            }
        }
        else if (typeof input === 'object' &&
            'numerator' in input &&
            'denominator' in input) {
            if (input === inputs[0] && total === null) {
                total = input.numerator / input.denominator;
            }
            else {
                total -= input.numerator / input.denominator;
            }
        }
    }
    return total;
}
/**
 * Multiplies a list of numbers and/or fractions.
 *
 * @param {Array.<number | {numerator: number, denominator: number}>} inputs - An array of numbers and/or fractions to multiply.
 * @return {number} The result of multiplying all inputs together.
 */
function multiply(inputs) {
    let total = null;
    for (const input of inputs) {
        if (typeof input === 'number') {
            if (input === inputs[0] && total === null) {
                total = input;
            }
            else {
                total *= input;
            }
        }
        else if (typeof input === 'object' &&
            'numerator' in input &&
            'denominator' in input) {
            if (input === inputs[0] && total === null) {
                total = input.numerator / input.denominator;
            }
            else {
                total *= input.numerator / input.denominator;
            }
        }
    }
    return total;
}
/**
 * Divides a list of numbers and/or fractions and returns the result.
 *
 * @param {Array.<number | {numerator: number, denominator: number}>} inputs - An array of numbers and/or objects with a numerator and denominator.
 * @return {number} - The result of dividing all the numbers/fractions in the input array.
 */
function divide(inputs) {
    let total = null;
    for (const input of inputs) {
        if (typeof input === 'number') {
            if (input === inputs[0] && total === null) {
                total = input;
            }
            else {
                total /= input;
            }
        }
        else if (typeof input === 'object' &&
            'numerator' in input &&
            'denominator' in input) {
            if (input === inputs[0] && total === null) {
                total = input.numerator / input.denominator;
            }
            else {
                total /= input.numerator / input.denominator;
            }
        }
    }
    return total;
}

class physicsFormulae {
}

/**
 * @typedef {string} TemperatureType
 * @typedef {string} LengthType
 * @typedef {string} AngleType
 * @typedef {string} MassType
 * @typedef {string} VolumeType
 * @typedef {string} EnergyType
 * @typedef {string} SpeedType
 * @typedef {string} TimeType
 * @typedef {string} AreaType
 * @typedef {string} PressureType
 */
/**
 * Enum for energy measurements
 * @readonly
 * @enum {EnergyType}
 */
const energyEnum = {
    Joules: 'JOULES',
    Electronvolt: 'ELECTRONVOLT',
    Kiloelectronvolts: 'KILOELECTRONVOLTS',
    Megaelectronvolts: 'MEGAELECTRONVOLTS',
    Gigaelectronvolts: 'GIGAELECTRONVOLTS',
    Teraelectronvolts: 'TERAELECTRONVOLTS',
    Watts: 'WATTS',
    Watt_Hours: 'WATT_HOURS',
    Kilowatts: 'KILOWATTS',
    Kilowatt_Hours: 'KILOWATT_HOURS',
    Calories: 'CALORIES',
    Kilocalories: 'KILOCALORIES',
    British_Thermal_Units: 'BRITISH_THERMAL_UNITS',
    US_Therms: 'US_THERMS',
    Foot_pounds: 'FOOT-POUNDS',
};
/**
 * Enum for volume measurements
 * @readonly
 * @enum {VolumeType}
 */
const volumeEnum = {
    Liters: 'LITERS',
    Milliliters: 'MILLILITERS',
    Cubic_Meters: 'CUBIC_METERS',
    Cubic_Centimeters: 'CUBIC_CENTIMETERS',
    Cubic_Millimeters: 'CUBIC_MILLIMETERS',
    Cubic_Inches: 'CUBIC_INCHES',
    Cubic_Feet: 'CUBIC_FEET',
    US_Liquid_Gallons: 'US_LIQUID_GALLONS',
    US_Liquid_Quarts: 'US_LIQUID_QUARTS',
    US_Liquid_Pints: 'US_LIQUID_PINTS',
    US_Legal_Cups: 'US_LEGAL_CUPS',
    US_Teaspoons: 'US_TEASPOONS',
    US_Tablespoons: 'US_TABLESPOONS',
    Fluid_Ounces: 'FLUID_OUNCES',
    Imperial_Gallons: 'IMPERIAL_GALLONS',
    Imperial_Quarts: 'IMPERIAL_QUARTS',
    Imperial_Pints: 'IMPERIAL_PINTS',
    Imperial_Cups: 'IMPERIAL_CUPS',
    Imperial_Fluid_Ounces: 'IMPERIAL_FLUID_OUNCES',
    Imperial_Teaspoons: 'IMPERIAL_TEASPOONS',
    Imperial_Tablespoons: 'IMPERIAL_TABLESPOONS',
};
/**
 * Enum for angle measurements
 * @readonly
 * @enum {AngleType}
 */
const angleEnum = {
    Arcminutes: 'ARCMINUTES',
    Arcseconds: 'ARCSECONDS',
    Degrees: 'DEGREES',
    Radians: 'RADIANS',
    Gradians: 'GRADIANS',
    Milliradians: 'MILLIRADIANS',
    Revolutions: 'REVOLUTIONS',
    Quadrants: 'QUADRANTS',
    Sextants: 'SEXTANTS',
    Signs: 'SIGNS',
    Octants: 'OCTANTS',
};
const lengthEnum = {
    Picometers: 'PICOMETERS',
    Nanometers: 'NANOMETERS',
    Micrometers: 'MICROMETERS',
    Millimeters: 'MILLIMETERS',
    Centimeters: 'CENTIMETERS',
    Decimeters: 'DECIMETERS',
    Meters: 'METERS',
    Hectometers: 'HECTOMETERS',
    Kilometers: 'KILOMETERS',
    Astronomical_Unit: 'ASTRONOMICAL_UNIT',
    Parsec: 'PARSEC',
    Light_Years: 'LIGHT_YEARS',
    Inches: 'INCHES',
    Feet: 'FEET',
    Yards: 'YARDS',
    Miles: 'MILES',
    Nautical_Miles: 'NAUTICAL_MILES',
    Fathoms: 'FATHOMS',
    Furlongs: 'FURLONGS',
};
/**
 * Enum for speed measurements
 * @readonly
 * @enum {SpeedType}
 */
const speedEnum = {
    Meters_per_Second: 'METERS_PER_SECOND',
    Feet_per_Second: 'FEET_PER_SECOND',
    Miles_per_Hour: 'MILES_PER_HOUR',
    Kilometers_per_hour: 'KILOMETERS_PER_HOUR',
    Knots: 'KNOTS',
};
/**
 * Enum for time measurements
 * @readonly
 * @enum {TimeType}
 */
const timeEnum = {
    Picoseconds: 'PICOSECONDS',
    Nanoseconds: 'NANOSECONDS',
    Microseconds: 'MICROSECONDS',
    Milliseconds: 'MILLISECONDS',
    Seconds: 'SECONDS',
    Minutes: 'MINUTES',
    Hours: 'HOURS',
    Days: 'DAYS',
    Weeks: 'WEEKS',
    Fortnights: 'FORTNIGHTS',
};
/**
 * Enum for area measurements
 * @readonly
 * @enum {AreaType}
 */
const areaEnum = {
    Square_Meters: 'SQUARE_METERS',
    Square_Kilometers: 'SQUARE_KILOMETERS',
    Square_Inches: 'SQUARE_INCHES',
    Square_Feet: 'SQUARE_FEET',
    Square_Yards: 'SQUARE_YARDS',
    Square_Miles: 'SQUARE_MILES',
    Acres: 'ACRES',
    Hectares: 'HECTARES',
};
/**
 * Enum for mass measurements
 * @readonly
 * @enum {MassType}
 */
const massEnum = {
    Picograms: 'PICOGRAMS',
    Nanograms: 'NANOGRAMS',
    Micrograms: 'MICROGRAMS',
    Milligrams: 'MILLIGRAMS',
    Grams: 'GRAMS',
    Kilograms: 'KILOGRAMS',
    Metric_Tonnes: 'METRIC_TONNES',
    Carats: 'CARATS',
    Long_Tons: 'LONG_TONS',
    Short_Tons: 'SHORT_TONS',
    Ounces: 'OUNCES',
    Pounds: 'POUNDS',
    Stone: 'STONE',
    Earth_Masses: 'EARTH_MASSES',
    Solar_Masses: 'SOLAR_MASSES',
};
/**
 * Enum for temperature measurements
 * @readonly
 * @enum {TemperatureType}
 */
const temperatureEnum = {
    Celsius: 'CELSIUS',
    Fahrenheit: 'FAHRENHEIT',
    Klevin: 'KLEVIN',
};
/**
 * Enum for pressure measurements
 * @readonly
 * @enum {PressureType}
 */
const pressureEnum = {
    Bars: 'BARS',
    Millibars: 'MILLIBARS',
    Pascals: 'PASCALS',
    Kilopascals: 'KILOPASCALS',
    Pounds_per_Square_Inch: 'POUNDS_PER_SQUARE_INCH',
    Torr: 'TORR',
};
/**
 * Class for Conversions
 */
class Conversions {
    /**
     * Converts an angle from one unit to another.
     *
     * @param {number} value - The value of the angle to convert.
     * @param {AngleType | string} fromUnit - The unit of the input angle.
     * @param {AngleType | string} toUnit - The desired unit of the output angle.
     * @throws {Error} Unknown unit: {fromUnit} or Unknown unit: {toUnit} if the provided units are not recognized.
     * @return {number} The converted angle value.
     */
    static convertAngle(value, fromUnit, toUnit) {
        let degrees;
        switch (fromUnit) {
            case 'ARCMINUTES':
                degrees = value * (1 / 60);
                break;
            case 'ARCSECONDS':
                degrees = value * (1 / 3600);
                break;
            case 'DEGREES':
                degrees = value * 1;
                break;
            case 'RADIANS':
                degrees = value * (180 / 3.14159265359);
                break;
            case 'GRADIANS':
                degrees = value * 0.9;
                break;
            case 'MILLIRADIANS':
                degrees = value * (180 / 3141.59265359);
                break;
            case 'REVOLUTIONS':
                degrees = value * 360;
                break;
            case 'QUADRANTS':
                degrees = value * 90;
                break;
            case 'SEXTANTS':
                degrees = value * 60;
                break;
            case 'SIGNS':
                degrees = value * 30;
                break;
            case 'OCTANTS':
                degrees = value * 45;
                break;
            default:
                throw new Error(`Unknown unit: ${fromUnit}`);
        }
        let output;
        switch (toUnit) {
            case 'ARCMINUTES':
                output = degrees / (1 / 60);
                break;
            case 'ARCSECONDS':
                output = degrees / (1 / 3600);
                break;
            case 'DEGREES':
                output = degrees / 1;
                break;
            case 'RADIANS':
                output = degrees / (180 / 3.14159265359);
                break;
            case 'GRADIANS':
                output = degrees / 0.9;
                break;
            case 'MILLIRADIANS':
                output = degrees / (180 / 3141.59265359);
                break;
            case 'REVOLUTIONS':
                output = degrees / 360;
                break;
            case 'QUADRANTS':
                output = degrees / 90;
                break;
            case 'SEXTANTS':
                output = degrees / 60;
                break;
            case 'SIGNS':
                output = degrees / 30;
                break;
            case 'OCTANTS':
                output = degrees / 45;
                break;
            default:
                throw new Error(`Unknown unit: ${toUnit}`);
        }
        return output;
    }
    /**
     * Converts a length value from one unit to another.
     *
     * @param {number} value - The value to convert.
     * @param {LengthType | string} fromUnit - The unit to convert from.
     * @param {LengthType | string} toUnit - The unit to convert to.
     * @return {number} The converted value.
     */
    static convertLength(value, fromUnit, toUnit) {
        let meters;
        switch (fromUnit) {
            case 'PICOMETERS':
                meters = value * 1e-12;
                break;
            case 'NANOMETERS':
                meters = value * 1e-9;
                break;
            case 'MICROMETERS':
                meters = value * 1e-6;
                break;
            case 'MILLIMETERS':
                meters = value * 0.001;
                break;
            case 'CENTIMETERS':
                meters = value * 0.01;
                break;
            case 'DECIMETERS':
                meters = value * 0.1;
                break;
            case 'METERS':
                meters = value * 1;
                break;
            case 'HECTOMETERS':
                meters = value * 100;
                break;
            case 'KILOMETERS':
                meters = value * 1000;
                break;
            case 'ASTRONOMICAL_UNIT':
                meters = value * 149598550000;
                break;
            case 'PARSEC':
                meters = value * 30856776000000000;
                break;
            case 'LIGHT_YEARS':
                meters = value * 9460528405000000;
                break;
            case 'INCHES':
                meters = value * (1 / 39.370079);
                break;
            case 'FEET':
                meters = value * (1 / 3.28084);
                break;
            case 'YARDS':
                meters = value * (1 / 1.093613);
                break;
            case 'MILES':
                meters = value * 1609.344;
                break;
            case 'NAUTICAL_MILES':
                meters = value * 1852;
                break;
            case 'FATHOMS':
                meters = value * 1.8288;
                break;
            case 'FURLONGS':
                meters = value * 201.168;
                break;
            default:
                throw new Error(`Unknown unit: ${fromUnit}`);
        }
        let output;
        switch (toUnit) {
            case 'PICOMETERS':
                output = meters / 1e-12;
                break;
            case 'NANOMETERS':
                output = meters / 1e-9;
                break;
            case 'MICROMETERS':
                output = meters / 1e-6;
                break;
            case 'MILLIMETERS':
                output = meters / 0.001;
                break;
            case 'CENTIMETERS':
                output = meters / 0.01;
                break;
            case 'DECIMETERS':
                output = meters / 0.1;
                break;
            case 'METERS':
                output = meters / 1;
                break;
            case 'HECTOMETERS':
                output = meters / 100;
                break;
            case 'KILOMETERS':
                output = meters / 1000;
                break;
            case 'ASTRONOMICAL_UNIT':
                output = meters / 149598550000;
                break;
            case 'PARSEC':
                output = meters / 30856776000000000;
                break;
            case 'LIGHT_YEARS':
                output = meters / 9460528405000000;
                break;
            case 'INCHES':
                output = meters / (1 / 39.370079);
                break;
            case 'FEET':
                output = meters / (1 / 3.28084);
                break;
            case 'YARDS':
                output = meters / (1 / 1.093613);
                break;
            case 'MILES':
                output = meters / 1609.344;
                break;
            case 'NAUTICAL_MILES':
                output = meters / 1852;
                break;
            case 'FATHOMS':
                output = meters / 1.8288;
                break;
            case 'FURLONGS':
                output = meters / 201.168;
                break;
            default:
                throw new Error(`Unknown unit: ${toUnit}`);
        }
        return output;
    }
    /**
     * Converts a time value from one unit to another.
     *
     * @param {number} value - The value to convert.
     * @param {TimeType | string} fromUnit - The unit of the input value.
     * @param {TimeType | string} toUnit - The desired unit of the output value.
     * @returns {number} - The converted value in the desired unit.
     */
    static convertTime(value, fromUnit, toUnit) {
        let seconds;
        switch (fromUnit) {
            case 'PICOSECONDS':
                seconds = value * 1e-12;
                break;
            case 'NANOSECONDS':
                seconds = value * 1e-9;
                break;
            case 'MICROSECONDS':
                seconds = value * 1e-6;
                break;
            case 'MILLISECONDS':
                seconds = value * 0.001;
                break;
            case 'SECONDS':
                seconds = value * 1;
                break;
            case 'MINUTES':
                seconds = value * 60;
                break;
            case 'HOURS':
                seconds = value * 3600;
                break;
            case 'DAYS':
                seconds = value * 86400;
                break;
            case 'WEEKS':
                seconds = value * 604800;
                break;
            case 'FORTNIGHTS':
                seconds = value * 1209600;
                break;
            default:
                throw new Error(`Unknown unit: ${fromUnit}`);
        }
        let output;
        switch (toUnit) {
            case 'PICOSECONDS':
                output = seconds / 1e-12;
                break;
            case 'NANOSECONDS':
                output = seconds / 1e-9;
                break;
            case 'MICROSECONDS':
                output = seconds / 1e-6;
                break;
            case 'MILLISECONDS':
                output = seconds / 0.001;
                break;
            case 'SECONDS':
                output = seconds / 1;
                break;
            case 'MINUTES':
                output = seconds / 60;
                break;
            case 'HOURS':
                output = seconds / 3600;
                break;
            case 'DAYS':
                output = seconds / 86400;
                break;
            case 'WEEKS':
                output = seconds / 604800;
                break;
            case 'FORTNIGHTS':
                output = seconds / 1209600;
                break;
            default:
                throw new Error(`Unknown unit: ${toUnit}`);
        }
        return output;
    }
    /**
     * Converts a mass value from one unit to another.
     *
     * @param {number} value - The mass value to be converted.
     * @param {MassType | string} fromUnit - The unit to convert from.
     * @param {MassType | string} toUnit - The unit to convert to.
     * @return {number} The converted mass value.
     */
    static convertMass(value, fromUnit, toUnit) {
        let grams;
        switch (fromUnit) {
            case 'PICOGRAMS':
                grams = value * 1e-12;
                break;
            case 'NANOGRAMS':
                grams = value * 1e-9;
                break;
            case 'MICROGRAMS':
                grams = value * 1e-6;
                break;
            case 'MILLIGRAMS':
                grams = value * 0.001;
                break;
            case 'GRAMS':
                grams = value * 1;
                break;
            case 'KILOGRAMS':
                grams = value * 1000;
                break;
            case 'METRIC_TONNES':
                grams = value * 1000000;
                break;
            case 'CARATS':
                grams = value * 0.2;
                break;
            case 'LONG_TONS':
                grams = value * 1016046.9088;
                break;
            case 'SHORT_TONS':
                grams = value * 907184.74;
                break;
            case 'OUNCES':
                grams = value * 28.349523;
                break;
            case 'POUNDS':
                grams = value * 453.59237;
                break;
            case 'STONE':
                grams = value * 6350.29318;
                break;
            case 'EARTH_MASSES':
                grams = value * 5.98e27;
                break;
            case 'SOLAR_MASSES':
                grams = value * 1.9889999999999998e33;
                break;
            default:
                throw new Error(`Unknown unit: ${fromUnit}`);
        }
        let output;
        switch (toUnit) {
            case 'PICOGRAMS':
                output = grams / 1e-12;
                break;
            case 'NANOGRAMS':
                output = grams / 1e-9;
                break;
            case 'MICROGRAMS':
                output = grams / 1e-6;
                break;
            case 'MILLIGRAMS':
                output = grams / 0.001;
                break;
            case 'GRAMS':
                output = grams / 1;
                break;
            case 'KILOGRAMS':
                output = grams / 1000;
                break;
            case 'METRIC_TONNES':
                output = grams / 1000000;
                break;
            case 'CARATS':
                output = grams / 0.2;
                break;
            case 'LONG_TONS':
                output = grams / 1016046.9088;
                break;
            case 'SHORT_TONS':
                output = grams / 907184.74;
                break;
            case 'OUNCES':
                output = grams / 28.349523;
                break;
            case 'POUNDS':
                output = grams / 453.59237;
                break;
            case 'STONE':
                output = grams / 6350.29318;
                break;
            case 'EARTH_MASSES':
                output = grams / 5.98e27;
                break;
            case 'SOLAR_MASSES':
                output = grams / 1.9889999999999998e33;
                break;
            default:
                throw new Error(`Unknown unit: ${toUnit}`);
        }
        return output;
    }
    /**
     * Convert an energy value from one unit to another.
     *
     * @param {number} value - the energy value to convert
     * @param {EnergyType | string} fromUnit - the unit of the input value
     * @param {EnergyType | string} toUnit - the desired output unit
     * @return {number} - the converted energy value
     */
    static convertEnergy(value, fromUnit, toUnit) {
        let joules;
        switch (fromUnit) {
            case 'JOULES':
                joules = value * 1;
                break;
            case 'ELECTRONVOLT':
                joules = value * 1.6022e-19;
                break;
            case 'KILOELECTRONVOLTS':
                joules = value * 1.6022000000000002e-16;
                break;
            case 'MEGAELECTRONVOLTS':
                joules = value * 1.6022e-13;
                break;
            case 'GIGAELECTRONVOLTS':
                joules = value * 1.6022000000000002e-10;
                break;
            case 'TERAELECTRONVOLTS':
                joules = value * 1.6022000000000001e-7;
                break;
            case 'WATTS':
                joules = value * 1;
                break;
            case 'WATT_HOURS':
                joules = value * 3600;
                break;
            case 'KILOWATTS':
                joules = value * 1000;
                break;
            case 'KILOWATT_HOURS':
                joules = value * 3600000;
                break;
            case 'CALORIES':
                joules = value * 4.184;
                break;
            case 'KILOCALORIES':
                joules = value * 4184;
                break;
            case 'BRITISH_THERMAL_UNITS':
                joules = value * 1055.06;
                break;
            case 'US_THERMS':
                joules = value * 105500000.0;
                break;
            case 'FOOT-POUNDS':
                joules = value * 1.35582;
                break;
            default:
                throw new Error(`Unknown unit: ${fromUnit}`);
        }
        let output;
        switch (toUnit) {
            case 'JOULES':
                output = joules / 1;
                break;
            case 'ELECTRONVOLT':
                output = joules / 1.6022e-19;
                break;
            case 'KILOELECTRONVOLTS':
                output = joules / 1.6022000000000002e-16;
                break;
            case 'MEGAELECTRONVOLTS':
                output = joules / 1.6022e-13;
                break;
            case 'GIGAELECTRONVOLTS':
                output = joules / 1.6022000000000002e-10;
                break;
            case 'TERAELECTRONVOLTS':
                output = joules / 1.6022000000000001e-7;
                break;
            case 'WATTS':
                output = joules / 1;
                break;
            case 'WATT_HOURS':
                output = joules / 3600;
                break;
            case 'KILOWATTS':
                output = joules / 1000;
                break;
            case 'KILOWATT_HOURS':
                output = joules / 3600000;
                break;
            case 'CALORIES':
                output = joules / 4.184;
                break;
            case 'KILOCALORIES':
                output = joules / 4184;
                break;
            case 'BRITISH_THERMAL_UNITS':
                output = joules / 1055.06;
                break;
            case 'US_THERMS':
                output = joules / 105500000.0;
                break;
            case 'FOOT-POUNDS':
                output = joules / 1.35582;
                break;
            default:
                throw new Error(`Unknown unit: ${toUnit}`);
        }
        return output;
    }
    /**
     * Converts a temperature value from one unit to another.
     *
     * @param {number} value - The temperature value to be converted.
     * @param {TemperatureType | string} fromUnit - The unit of the input temperature value.
     * @param {TemperatureType | string} toUnit - The unit of the output temperature value.
     * @return {number} The converted temperature value in the desired unit.
     */
    static convertTemperature(value, fromUnit, toUnit) {
        let kelvin;
        switch (fromUnit) {
            case 'CELCIUS':
                kelvin = value + 273.15;
                break;
            case 'FAHRENHEIT':
                kelvin = ((value - 32) * 5) / 9 + 273.15;
                break;
            case 'KLEVIN':
                kelvin = value * 1;
                break;
            default:
                throw new Error(`Unknown unit: ${fromUnit}`);
        }
        let output;
        switch (toUnit) {
            case 'CELCIUS':
                output = kelvin - 273.15;
                break;
            case 'FAHRENHEIT':
                output = ((kelvin - 273.15) * 9) / 5 + 32;
                break;
            case 'KLEVIN':
                output = kelvin / 1;
                break;
            default:
                throw new Error(`Unknown unit: ${toUnit}`);
        }
        return output;
    }
    /**
     * Converts a speed value from one unit to another.
     *
     * @param {number} value - the value to be converted
     * @param {SpeedType | string} fromUnit - the unit to convert from
     * @param {SpeedType | string} toUnit - the unit to convert to
     * @return {number} - the converted value
     */
    static convertSpeed(value, fromUnit, toUnit) {
        let mps;
        switch (fromUnit) {
            case 'METERS_PER_SECOND':
                mps = value * 1;
                break;
            case 'FEET_PER_SECOND':
                mps = value * 0.3048;
                break;
            case 'MILES_PER_HOUR':
                mps = value * 0.44704;
                break;
            case 'KILOMETERS_PER_HOUR':
                mps = value * 0.277778;
                break;
            case 'KNOTS':
                mps = value * 0.514444;
                break;
            default:
                throw new Error(`Unknown unit: ${fromUnit}`);
        }
        let output;
        switch (toUnit) {
            case 'METERS_PER_SECOND':
                output = mps / 1;
                break;
            case 'FEET_PER_SECOND':
                output = mps / 0.3048;
                break;
            case 'MILES_PER_HOUR':
                output = mps / 0.44704;
                break;
            case 'KILOMETERS_PER_HOUR':
                output = mps / 0.277778;
                break;
            case 'KNOTS':
                output = mps / 0.514444;
                break;
            default:
                throw new Error(`Unknown unit: ${toUnit}`);
        }
        return output;
    }
    /**
     * Converts a pressure value from one unit to another.
     *
     * @param {number} value - The pressure value to convert.
     * @param {PressureType | string} fromUnit - The unit to convert from.
     * @param {PressureType | string} toUnit - The unit to convert to.
     * @return {number} The converted pressure value.
     */
    static convertPressure(value, fromUnit, toUnit) {
        let bars;
        switch (fromUnit) {
            case 'BARS':
                bars = value * 1;
                break;
            case 'MILLIBARS':
                bars = value * 0.001;
                break;
            case 'PASCALS':
                bars = value * 1e-5;
                break;
            case 'KILOPASCALS':
                bars = value * 0.01;
                break;
            case 'POUNDS_PER_SQUARE_INCH':
                bars = value * 0.0689476;
                break;
            case 'TORR':
                bars = value * 0.00133322;
                break;
            default:
                throw new Error(`Unknown unit: ${fromUnit}`);
        }
        let output;
        switch (toUnit) {
            case 'BARS':
                output = bars / 1;
                break;
            case 'MILLIBARS':
                output = bars / 0.001;
                break;
            case 'PASCALS':
                output = bars / 1e-5;
                break;
            case 'KILOPASCALS':
                output = bars / 0.01;
                break;
            case 'POUNDS_PER_SQUARE_INCH':
                output = bars / 0.0689476;
                break;
            case 'TORR':
                output = bars / 0.00133322;
                break;
            default:
                throw new Error(`Unknown unit: ${toUnit}`);
        }
        return output;
    }
    /**
     * Converts an area measurement from one unit to another.
     *
     * @param {number} value - The numerical value of the area measurement in the fromUnit.
     * @param {AreaType | string} fromUnit - The unit to convert from.
     * @param {AreaType | string} toUnit - The unit to convert to.
     * @return {number} - The numerical value of the converted area measurement in the toUnit.
     */
    static convertArea(value, fromUnit, toUnit) {
        let sqrm;
        switch (fromUnit) {
            case 'SQUARE_METERS':
                sqrm = value * 1;
                break;
            case 'SQUARE_KILOMETERS':
                sqrm = value * 1000000;
                break;
            case 'SQUARE_INCHES':
                sqrm = value * (1 / 1550);
                break;
            case 'SQUARE_FEET':
                sqrm = value * (1 / 10.764);
                break;
            case 'SQUARE_YARDS':
                sqrm = value * (1 / 1.196);
                break;
            case 'SQUARE_MILES':
                sqrm = value * 2590000.0;
                break;
            case 'ACRES':
                sqrm = value * 4046.86;
                break;
            case 'HECTARES':
                sqrm = value * 10000;
                break;
            default:
                throw new Error(`Unknown unit: ${fromUnit}`);
        }
        let output;
        switch (toUnit) {
            case 'SQUARE_METERS':
                output = sqrm / 1;
                break;
            case 'SQUARE_KILOMETERS':
                output = sqrm / 1000000;
                break;
            case 'SQUARE_INCHES':
                output = sqrm / (1 / 1550);
                break;
            case 'SQUARE_FEET':
                output = sqrm / (1 / 10.764);
                break;
            case 'SQUARE_YARDS':
                output = sqrm / (1 / 1.196);
                break;
            case 'SQUARE_MILES':
                output = sqrm / 2590000.0;
                break;
            case 'ACRES':
                output = sqrm / 4046.86;
                break;
            case 'HECTARES':
                output = sqrm / 10000;
                break;
            default:
                throw new Error(`Unknown unit: ${toUnit}`);
        }
        return output;
    }
    /**
     * Converts an volume measurement from one unit to another.
     *
     * @param {number} value - The numerical value of the volume measurement in the fromUnit.
     * @param {VolumeType | string} fromUnit - The unit to convert from.
     * @param {VolumeType | string} toUnit - The unit to convert to.
     * @return {number} - The numerical value of the converted volume measurement in the toUnit.
     */
    static convertVolume(value, fromUnit, toUnit) {
        let liters;
        switch (fromUnit) {
            case 'LITERS':
                liters = value * 1;
                break;
            case 'MILLILITERS':
                liters = value * 0.001;
                break;
            case 'CUBIC_METERS':
                liters = value * 1000;
                break;
            case 'CUBIC_CENTIMETERS':
                liters = value * 0.001;
                break;
            case 'CUBIC_MILLIMETERS':
                liters = value * 1e-5;
                break;
            case 'CUBIC_INCHES':
                liters = value * 0.0163871;
                break;
            case 'CUBIC_FEET':
                liters = value * 28.3168;
                break;
            case 'US_LIQUID_GALLONS':
                liters = value * 3.78541;
                break;
            case 'US_LIQID_QUARTS':
                liters = value * 0.946353;
                break;
            case 'US_LIQUID_PINTS':
                liters = value * 0.473176;
                break;
            case 'US_LEGAL_CUPS':
                liters = value * 0.24;
                break;
            case 'US_TEASPOONS':
                liters = value * 0.00492892;
                break;
            case 'US_TABLESPOONS':
                liters = value * 0.0147868;
                break;
            case 'FLUID_OUNCES':
                liters = value * 0.0295735;
                break;
            case 'IMPERIAL_GALLONS':
                liters = value * 4.54609;
                break;
            case 'IMPERIAL_QUARTS':
                liters = value * 1.13652;
                break;
            case 'IMPERIAL_PINTS':
                liters = value * 0.568261;
                break;
            case 'IMPERIAL_CUPS':
                liters = value * 0.284131;
                break;
            case 'IMPERIAL_FLUID_OUNCES':
                liters = value * 0.0284131;
                break;
            case 'IMPERIAL_TEASPOONS':
                liters = value * 0.00591939;
                break;
            case 'IMPERIAL_TABLESPOONS':
                liters = value * 0.0177582;
                break;
            default:
                throw new Error(`Unknown unit: ${fromUnit}`);
        }
        let output;
        switch (toUnit) {
            case 'LITERS':
                output = liters / 1;
                break;
            case 'MILLILITERS':
                output = liters / 0.001;
                break;
            case 'CUBIC_METERS':
                output = liters / 1000;
                break;
            case 'CUBIC_CENTIMETERS':
                output = liters / 0.001;
                break;
            case 'CUBIC_MILLIMETERS':
                output = liters / 1e-5;
                break;
            case 'CUBIC_INCHES':
                output = liters / 0.0163871;
                break;
            case 'CUBIC_FEET':
                output = liters / 28.3168;
                break;
            case 'US_LIQUID_GALLONS':
                output = liters / 3.78541;
                break;
            case 'US_LIQUID_QUARTS':
                output = liters / 0.946353;
                break;
            case 'US_LIQUID_PINTS':
                output = liters / 0.473176;
                break;
            case 'US_LEGAL_CUPS':
                output = liters / 0.24;
                break;
            case 'US_TEASPOONS':
                output = liters / 0.00492892;
                break;
            case 'US_TABLESPOONS':
                output = liters / 0.0147868;
                break;
            case 'FLUID_OUNCES':
                output = liters / 0.0295735;
                break;
            case 'IMPERIAL_GALLONS':
                output = liters / 4.54609;
                break;
            case 'IMPERIAL_QUARTS':
                output = liters / 1.13652;
                break;
            case 'IMPERIAL_PINTS':
                output = liters / 0.568261;
                break;
            case 'IMPERIAL_CUPS':
                output = liters / 0.284131;
                break;
            case 'IMPERIAL_FLUID_OUNCES':
                output = liters / 0.0284131;
                break;
            case 'IMPERIAL_TEASPOONS':
                output = liters / 0.00591939;
                break;
            case 'IMPERIAL_TABLESPOONS':
                output = liters / 0.0177582;
                break;
            default:
                throw new Error(`Unknown unit: ${toUnit}`);
        }
        return output;
    }
}

/**
 * Class to find averages of an array of numbers
 */
class Averages {
    /**
     * Finds the mean of an array of numbers
     * @param {Array<number>} - The array of numbers to find the mean of
     * @return {number} - The mean of the inputted numbers
     */
    static mean(input) {
        let output = add(input);
        return (output /= input.length);
    }
    /**
     * Finds the median of an array of numbers
     * @param {Array<number>} - The array of numbers to find the median of
     * @return {number} - The median of the inputted numbers
     */
    static median(input) {
        let length = input.length;
        length = length / 2;
        if (length === Math.round(length))
            return input[length];
        return input[length - 0.5] / input[length + 0.5];
    }
    /**
     * Finds the mode of an array of numbers
     * @param {Array<number>} - The array of numbers to find the mode of
     * @return {number} - The mode of the inputted numbers
     */
    static mode(input) {
        if (input.length === 0) {
            return 0;
        }
        const m = input
            .reduce((items, current) => {
            const item = items.length === 0
                ? null
                : items.find((x) => x === current);
            item
                ? item.occurrence++
                : items.push({ value: current, occurrence: 1 });
            return items;
        }, [])
            .sort((a, b) => {
            if (a.occurrence < b.occurrence) {
                return 1;
            }
            else if (a.occurrence > b.occurrence || a.value < b.value) {
                return -1;
            }
            else {
                return a.value === b.value ? 0 : 1;
            }
        });
        return m[0].value;
    }
    /**
     * Finds the range of an array of numbers
     * @param {Array<number>} - The array of numbers to find the range of
     * @return {number} - The range of the inputted numbers
     */
    static range(input) {
        const max = input.reduce((a, b) => Math.max(a, b), -Infinity);
        const min = input.reduce((a, b) => Math.min(a, b), -Infinity);
        return max - min;
    }
}

export { Averages, Circle, Conversions, Fraction, Indices, Matrix, add, angleEnum, areaEnum, convertBase, divide, energyEnum, gcd, gcd2, lengthEnum, massEnum, multiply, physicsFormulae, pressureEnum, speedEnum, subtract, temperatureEnum, timeEnum, volumeEnum };
