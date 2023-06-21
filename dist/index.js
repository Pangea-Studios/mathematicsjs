/**
 * Class for all indices related functions.
 */
class Indices {
    /**
     * Returns the inputted number multiplied by itself the specified amount of times.
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
     * @param {number} number - the number to calculate the nth root o
     * @param {number} root - the root to use for the calculation.
     * @return {number} the result of the nth root calculation
     */
    static root(number, root = 2) {
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
     * Creates the fraction.
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
     * Simplify the number.
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
     * Converts the fraction to a decimal.
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
     * Converts the fraction to a percentage.
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
     * Converts the fraction to a string.
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
     * Converts the fraction to a simplified string.
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
 * Enum for constants
 * @readonly
 * @enum
 */
const Constants = {
    e: 2.718281828459045,
    pi: 3.141592653589793,
    π: 3.141592653589793,
    ΔvCs: { value: 9192631770, unit: 'Hz' },
    c: 299792458,
    h: 6.62607015e-34,
    k: 1.380649e-23,
    NA: 6.02214076e-23,
    Kcd: 683,
};

/**
 * Creates a circle.
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
     * Creates a circle.
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
            this.circumference = 2 * Constants.pi * this.radius;
            this.area = Constants.pi * this.radius * this.radius;
        }
        else if (diameter) {
            this.radius = diameter / 2;
            this.diameter = diameter;
            this.circumference = 2 * Constants.pi * this.radius;
            this.area = Constants.pi * this.radius * this.radius;
        }
        else if (circumference) {
            this.radius = circumference / Constants.pi / 2;
            this.diameter = this.radius * 2;
            this.circumference = circumference;
            this.area = Constants.pi * this.radius * this.radius;
        }
        else if (area) {
            this.radius = Math.sqrt(area / Constants.pi);
            this.diameter = this.radius * 2;
            this.circumference = 2 * Constants.pi * this.radius;
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
    /**
     * Creates a new matrix
     *
     * @param {number} rows - The number of rows
     * @param {number} columns - The number of columns
     * @param {Array.<Array.<number>>} values - The values of the matrix
     */
    constructor(rows, columns, values) {
        this.rows = rows;
        this.columns = columns;
        this.values = values;
    }
    /**
     * Calculates the product of two matrices.
     * @param {MatrixConstructor} other - The matrix to multiply with.
     * @return {Matrix} A new matrix that is the product of this matrix and other.
     * @throws {Error} If the number of columns of this matrix does not match the number of rows of the other matrix.
     */
    multiply(other) {
        const numRowsA = this.values.length;
        const numColsA = this.values[0].length;
        const numRowsB = other.values.length;
        const numColsB = other.values[0].length;
        if (numColsA !== numRowsB) {
            throw new Error('Matrices cannot be multiplied');
        }
        const result = [];
        for (let i = 0; i < numRowsA; i++) {
            result[i] = [];
            for (let j = 0; j < numColsB; j++) {
                let sum = 0;
                for (let k = 0; k < numColsA; k++) {
                    sum += this.values[i][k] * other.values[k][j];
                }
                result[i][j] = sum;
            }
        }
        return new Matrix(result.length, result[0].length, result);
    }
    /**
     * Adds the values of two matrices together.
     * @param {MatrixConstructor} other - The matrix to add to this one.
     * @return {Matrix} A new matrix with the added values.
     * @throws {Error} If matrices do not have the same number of rows and columns.
     */
    add(other) {
        const numRowsA = this.values.length;
        const numColsA = this.values[0].length;
        const numRowsB = other.values.length;
        const numColsB = other.values[0].length;
        if (numRowsA !== numRowsB || numColsA !== numColsB) {
            throw new Error('Matrices must have same dimensions to be added');
        }
        const result = [];
        for (let i = 0; i < numRowsA; i++) {
            result[i] = [];
            for (let j = 0; j < numColsA; j++) {
                result[i][j] = this.values[i][j] + other.values[i][j];
            }
        }
        return new Matrix(result.length, result[0].length, result);
    }
    /**
     * Divides this matrix by another one element-wise and returns the result as a new matrix.
     * @param {MatrixConstructor} other - the matrix to divide by
     * @throws {Error} When matrices do not have the same dimensions or when dividing by 0
     * @return {Matrix} A new matrix that is the result of the element-wise division
     */
    divide(other) {
        const numRowsA = this.values.length;
        const numColsA = this.values[0].length;
        const numRowsB = other.values.length;
        const numColsB = other.values[0].length;
        if (numRowsA !== numRowsB || numColsA !== numColsB) {
            throw new Error('Matrices must have same dimensions to be divided');
        }
        const result = [];
        for (let i = 0; i < numRowsA; i++) {
            result[i] = [];
            for (let j = 0; j < numColsA; j++) {
                if (other[i][j] === 0) {
                    throw new Error('Cannot divide by zero');
                }
                result[i][j] = this.values[i][j] / other.values[i][j];
            }
        }
        return new Matrix(result.length, result[0].length, result);
    }
    /**
     * Subtract two matrices of the same dimensions and return the result.
     * @param {MatrixConstructor} other - the matrix to subtract from this one
     * @return {Matrix} a new matrix that is the result of the subtraction
     * @throws {Error} if matrices do not have the same dimensions
     */
    subtract(other) {
        const numRowsA = this.values.length;
        const numColsA = this.values[0].length;
        const numRowsB = other.values.length;
        const numColsB = other.values[0].length;
        if (numRowsA !== numRowsB || numColsA !== numColsB) {
            throw new Error('Matrices must have same dimensions to be subtracted');
        }
        const result = [];
        for (let i = 0; i < numRowsA; i++) {
            result[i] = [];
            for (let j = 0; j < numColsA; j++) {
                result[i][j] = this.values[i][j] - other.values[i][j];
            }
        }
        return new Matrix(result.length, result[0].length, result);
    }
    /**
     * Multiplies the matrix by a scalar.
     * @param {number} scalar - the scalar to multiply with.
     * @return {Matrix} a new Matrix object that is the result of the scalar multiplication.
     */
    multiplyScalar(scalar) {
        const numRows = this.values.length;
        const numCols = this.values[0].length;
        const result = [];
        for (let i = 0; i < numRows; i++) {
            result[i] = [];
            for (let j = 0; j < numCols; j++) {
                result[i][j] = this.values[i][j] * scalar;
            }
        }
        return new Matrix(result.length, result[0].length, result);
    }
    /**
     * Divides every element in the matrix by a scalar.
     * @param {number} scalar - the scalar to divide by
     * @return {Matrix} a new matrix with the results of the division
     * @throws {Error} if scalar is zero
     */
    divideScalar(scalar) {
        if (scalar === 0) {
            throw new Error('Cannot divide by zero');
        }
        const numRows = this.values.length;
        const numCols = this.values[0].length;
        const result = [];
        for (let i = 0; i < numRows; i++) {
            result[i] = [];
            for (let j = 0; j < numCols; j++) {
                result[i][j] = this.values[i][j] / scalar;
            }
        }
        return new Matrix(result.length, result[0].length, result);
    }
}

/**
 * Calculates the sum of all numbers and fraction inputs.
 *
 * @param {Array.<number | {numerator: number, denominator: number}>} inputs - An array of OperationsInput objects
 * @return {number} The sum of all numbers and fractions
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
 * @param {Array.<number | {numerator: number, denominator: number}>} inputs - An array of numbers and fractions to subtract
 * @return {number} The result of subtracting all the inputs
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
 * @param {Array.<number | {numerator: number, denominator: number}>} inputs - An array of numbers and/or fractions to multiply
 * @return {number} The result of multiplying all inputs together
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
 * @param {Array.<number | {numerator: number, denominator: number}>} inputs - An array of numbers and/or objects with a numerator and denominator
 * @return {number} - The result of dividing all the numbers/fractions in the input array
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
/**
 * Returns the absolute value of a number.
 *
 * @param {number} x - The number to get the absolute value o
 * @return {number} The absolute value of the input number.
 */
function Absolute(x) {
    if (x < 0) {
        return -x;
    }
    return x;
}
/**
 * Calculates the factorial of a given number.
 *
 * @param {number} x - The number to calculate the factorial of
 * @return {number} The factorial of the given number
 */
function Factorial(x) {
    let result;
    for (let i = 1; i <= x; i++) {
        result *= i;
    }
    return result;
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
 * Enum for length units
 * @readonly
 * @enum
 */
const lengthUnits = {
    Picometers: 'pm',
    Nanometers: 'nm',
    Micrometers: 'μm',
    Millimeters: 'mm',
    Centimeters: 'cm',
    Decimeters: 'dm',
    Meters: 'm',
    Hectometers: 'hm',
    Kilometers: 'km',
    Inches: 'in',
    Feet: 'ft',
    Yards: 'yd',
    Miles: 'mi',
    NauticalMiles: 'nmi',
    AstronomicalUnit: 'AU',
    Parsec: 'pc',
    Light_Years: 'LY',
    Fathoms: 'ftm',
    Furlongs: 'fur',
};
/**
 * Enum for energy units
 * @readonly
 * @enum
 */
const energyUnits = {
    Joules: 'J',
    Electronvolt: 'eV',
    Kiloelectronvolts: 'KeV',
    Megaelectronvolts: 'MeV',
    Gigaelectronvolts: 'GeV',
    Teraelectronvolts: 'TeV',
    Watts: 'W',
    WattHours: 'Wh',
    Kilowatts: 'kW',
    KilowattHours: 'kWh',
    Calories: 'cal',
    Kilocalories: 'kcal',
    BritishThermalUnits: 'BTU',
    USTherms: 'UST',
    Footpounds: 'ft-lb',
};
/**
 * Enum for volume units
 * @readonly
 * @enum
 */
const volumeUnits = {
    Liters: 'L',
    Milliliters: 'mL',
    CubicMeters: 'm³',
    CubicCentimeters: 'cm³',
    CubicMillimeters: 'mm³',
    CubicInches: 'in³',
    CubicFeet: 'ft³',
    USLiquidGallons: 'galUS',
    USLiquidQuarts: 'qtUS',
    USLiquidPints: 'ptUS',
    USLegalCups: 'cupUS',
    USTeaspoons: 'tspUS',
    USTablespoons: 'tbspUS',
    Fluid_Ounces: 'oz',
    ImperialGallons: 'galImp',
    ImperialQuarts: 'qtImp',
    ImperialPints: 'ptImp',
    ImperialCups: 'cupsImp',
    ImperialFluidOunces: 'ozImp',
    ImperialTeaspoons: 'tspImp',
    ImperialTablespoons: 'tbspImp',
};
/**
 * Enum for angle units
 * @readonly
 * @enum
 */
const angleUnits = {
    Arcminutes: "'",
    Arcseconds: '"',
    Degrees: '°',
    Radians: 'rad',
    Gradians: 'grad',
    Milliradians: 'mrad',
    Revolutions: 'rev',
    Quadrants: 'q',
    Sextants: 's',
    Signs: 'sgn',
    Octants: 'o',
};
/**
 * Enum for speed units
 * @readonly
 * @enum
 */
const speedUnits = {
    MetersPerSecond: 'm/s',
    FeetPerSecond: 'ft/s',
    MilesPerHour: 'mi/h',
    KilometersPerHour: 'km/h',
    Knots: 'kn',
};
/**
 * Enum for time units
 * @readonly
 * @enum
 */
const timeUnits = {
    Picoseconds: 'ps',
    Nanoseconds: 'ns',
    Microseconds: 'μs',
    Milliseconds: 'ms',
    Seconds: 's',
    Minutes: 'm',
    Hours: 'h',
    Days: 'd',
    Weeks: 'w',
    Fortnights: 'f',
};
/**
 * Enum for area units
 * @readonly
 * @enum
 */
const areaUnits = {
    SquareMeters: 'm²',
    SquareKilometers: 'km²',
    SquareInches: 'in²',
    SquareFeet: 'ft²',
    SquareYards: 'yd²',
    SquareMiles: 'mi²',
    Acres: 'acre',
    Hectares: 'ha',
};
/**
 * Enum for mass units
 * @readonly
 * @enum
 */
const massUnits = {
    Picograms: 'pg',
    Nanograms: 'ng',
    Micrograms: 'μg',
    Milligrams: 'mg',
    Grams: 'g',
    Kilograms: 'kg',
    MetricTonnes: 't',
    Carats: 'c',
    Long_Tons: 'Lt',
    Short_Tons: 'St',
    Ounces: 'oz',
    Pounds: 'lb',
    Stone: 'st',
    Earth_Masses: 'M⊕',
    Solar_Masses: 'M☉',
};
/**
 * Enum for temperature units
 * @readonly
 * @enum
 */
const temperatureUnits = {
    Celsius: '°C',
    Fahrenheit: '°F',
    Kelvin: 'K',
};
/**
 * Enum for pressure units
 * @readonly
 * @enum
 */
const pressureUnits = {
    Bars: 'bar',
    Millibars: 'mbar',
    Pascals: 'Pa',
    Hectopascals: 'hPa',
    Kilopascals: 'kPa',
    Pounds_per_Square_Inch: 'psi',
    Torr: 'Torr',
};
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
    WattHours: 'WATT_HOURS',
    Kilowatts: 'KILOWATTS',
    KilowattHours: 'KILOWATT_HOURS',
    Calories: 'CALORIES',
    Kilocalories: 'KILOCALORIES',
    BritishThermalUnits: 'BRITISH_THERMAL_UNITS',
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
    CubicMeters: 'CUBIC_METERS',
    CubicCentimeters: 'CUBIC_CENTIMETERS',
    CubicMillimeters: 'CUBIC_MILLIMETERS',
    CubicInches: 'CUBIC_INCHES',
    CubicFeet: 'CUBIC_FEET',
    USLiquidGallons: 'US_LIQUID_GALLONS',
    USLiquidQuarts: 'US_LIQUID_QUARTS',
    USLiquidPints: 'US_LIQUID_PINTS',
    USLegalCups: 'US_LEGAL_CUPS',
    USTeaspoons: 'US_TEASPOONS',
    USTablespoons: 'US_TABLESPOONS',
    FluidOunces: 'FLUID_OUNCES',
    ImperialGallons: 'IMPERIAL_GALLONS',
    ImperialQuarts: 'IMPERIAL_QUARTS',
    ImperialPints: 'IMPERIAL_PINTS',
    ImperialCups: 'IMPERIAL_CUPS',
    ImperialFluidOunces: 'IMPERIAL_FLUID_OUNCES',
    ImperialTeaspoons: 'IMPERIAL_TEASPOONS',
    ImperialTablespoons: 'IMPERIAL_TABLESPOONS',
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
    AstronomicalUnit: 'ASTRONOMICAL_UNIT',
    Parsec: 'PARSEC',
    LightYears: 'LIGHT_YEARS',
    Inches: 'INCHES',
    Feet: 'FEET',
    Yards: 'YARDS',
    Miles: 'MILES',
    NauticalMiles: 'NAUTICAL_MILES',
    Fathoms: 'FATHOMS',
    Furlongs: 'FURLONGS',
};
/**
 * Enum for speed measurements
 * @readonly
 * @enum {SpeedType}
 */
const speedEnum = {
    MetersPerSecond: 'METERS_PER_SECOND',
    FeetPerSecond: 'FEET_PER_SECOND',
    MilesPerHour: 'MILES_PER_HOUR',
    KilometersPerHour: 'KILOMETERS_PER_HOUR',
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
    SquareMeters: 'SQUARE_METERS',
    SquareKilometers: 'SQUARE_KILOMETERS',
    SquareInches: 'SQUARE_INCHES',
    SquareFeet: 'SQUARE_FEET',
    SquareYards: 'SQUARE_YARDS',
    SquareMiles: 'SQUARE_MILES',
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
    MetricTonnes: 'METRIC_TONNES',
    Carats: 'CARATS',
    Long_Tons: 'LONG_TONS',
    Short_Tons: 'SHORT_TONS',
    Ounces: 'OUNCES',
    Pounds: 'POUNDS',
    Stone: 'STONE',
    EarthMasses: 'EARTH_MASSES',
    SolarMasses: 'SOLAR_MASSES',
};
/**
 * Enum for temperature measurements
 * @readonly
 * @enum {TemperatureType}
 */
const temperatureEnum = {
    Celsius: 'CELSIUS',
    Fahrenheit: 'FAHRENHEIT',
    Kelvin: 'KELVIN',
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
    Hectopascals: 'HECTOPASCALS',
    Kilopascals: 'KILOPASCALS',
    PoundsPerSquareInch: 'POUNDS_PER_SQUARE_INCH',
    Torr: 'TORR',
};
/**
 * Class to convert between different units of measure
 */
class Conversions {
    /**
     * Converts an angle value from one unit to another.
     *
     * @param {number} value - The value to be converted
     * @param {AngleType | string} fromUnit - The current unit of the value. Must be a string from angleEnum
     * @param {AngleType | string} toUnit - The desired unit to convert the value to. Must be a string from angleEnum
     * @return {number} The converted angle value in the desired unit
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
                degrees = value * (180 / Constants.pi);
                break;
            case 'GRADIANS':
                degrees = value * 0.9;
                break;
            case 'MILLIRADIANS':
                degrees = value * (180 / (Constants.pi * 1000));
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
                output = degrees / (180 / Constants.pi);
                break;
            case 'GRADIANS':
                output = degrees / 0.9;
                break;
            case 'MILLIRADIANS':
                output = degrees / (180 / (Constants.pi * 1000));
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
     * @param {number} value - The value to convert
     * @param {LengthType | string} fromUnit - The unit to convert from
     * @param {LengthType | string} toUnit - The unit to convert to
     * @return {number} The converted value
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
     * @param {number} value - The value to convert
     * @param {TimeType | string} fromUnit - The unit of the input value
     * @param {TimeType | string} toUnit - The desired unit of the output value
     * @returns {number} - The converted value in the desired unit
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
     * @param {number} value - The mass value to be converted
     * @param {MassType | string} fromUnit - The unit to convert from
     * @param {MassType | string} toUnit - The unit to convert to
     * @return {number} The converted mass value
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
     * @param {number} value - The temperature value to be converted
     * @param {TemperatureType | string} fromUnit - The unit of the input temperature value
     * @param {TemperatureType | string} toUnit - The unit of the output temperature value
     * @return {number} The converted temperature value in the desired unit
     */
    static convertTemperature(value, fromUnit, toUnit) {
        let kelvin;
        switch (fromUnit) {
            case 'CELSIUS':
                kelvin = value + 273.15;
                break;
            case 'FAHRENHEIT':
                kelvin = ((value - 32) * 5) / 9 + 273.15;
                break;
            case 'KELVIN':
                kelvin = value * 1;
                break;
            default:
                throw new Error(`Unknown unit: ${fromUnit}`);
        }
        let output;
        switch (toUnit) {
            case 'CELSIUS':
                output = kelvin - 273.15;
                break;
            case 'FAHRENHEIT':
                output = ((kelvin - 273.15) * 9) / 5 + 32;
                break;
            case 'KELVIN':
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
     * @param {number} value - The pressure value to convert
     * @param {PressureType | string} fromUnit - The unit to convert from
     * @param {PressureType | string} toUnit - The unit to convert to
     * @return {number} The converted pressure value
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
     * @param {number} value - The numerical value of the area measurement in the fromUnit
     * @param {AreaType | string} fromUnit - The unit to convert from
     * @param {AreaType | string} toUnit - The unit to convert to
     * @return {number} - The numerical value of the converted area measurement in the toUnit
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
     * @param {number} value - The numerical value of the volume measurement in the fromUnit
     * @param {VolumeType | string} fromUnit - The unit to convert from
     * @param {VolumeType | string} toUnit - The unit to convert to
     * @return {number} - The numerical value of the converted volume measurement in the toUnit
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
     * @param {Array.<number>} - The array of numbers to find the mean of
     * @return {number} - The mean of the inputted numbers
     */
    static mean(input) {
        let output = add(input);
        return (output /= input.length);
    }
    /**
     * Finds the median of an array of numbers
     * @param {Array.<number>} - The array of numbers to find the median of
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
     * @param {Array.<number>} - The array of numbers to find the mode of
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
     * @param {Array.<number>} - The array of numbers to find the range of
     * @return {number} - The range of the inputted numbers
     */
    static range(input) {
        const max = input.reduce((a, b) => Math.max(a, b), -Infinity);
        const min = input.reduce((a, b) => Math.min(a, b), -Infinity);
        return max - min;
    }
}

class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    multiply(other) {
        const real = this.real * other.real - this.imaginary * other.imaginary;
        const imaginary = this.real * other.imaginary + this.imaginary * other.real;
        return new ComplexNumber(real, imaginary);
    }
    getImaginary() {
        return this.imaginary;
    }
    add(other) {
        const real = this.real + other.real;
        const imaginary = this.imaginary + other.imaginary;
        return new ComplexNumber(real, imaginary);
    }
    subtract(other) {
        const real = this.real - other.real;
        const imaginary = this.imaginary - other.imaginary;
        return new ComplexNumber(real, imaginary);
    }
    divide(other) {
        const denominator = other.real * other.real + other.imaginary * other.imaginary;
        const real = (this.real * other.real + this.imaginary * other.imaginary) /
            denominator;
        const imaginary = (this.imaginary * other.real - this.real * other.imaginary) /
            denominator;
        return new ComplexNumber(real, imaginary);
    }
    getModulus() {
        return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
    }
    getArgument() {
        return Math.atan2(this.imaginary, this.real);
    }
    getConjugate() {
        return new ComplexNumber(this.real, -this.imaginary);
    }
}

/**
 * Class containing logarithm functions
 */
class Logarithms {
    /**
     * Calculates the natural logarithm of a given number using an iterative series approximation.
     *
     * @param {number} x - the number to calculate the natural logarithm of
     * @param {number} [accuracy=10] - the number of terms to use in the series approximation (default of 10)
     * @throws {Error} Invalid input. ln(x) is only defined for x > 0
     * @return {number} the natural logarithm of the given number
     */
    static ln(x, accuracy = 10) {
        if (x <= 0) {
            throw new Error('Invalid input. ln(x) is only defined for x > 0');
        }
        let result = 0;
        for (let n = 1; n <= accuracy; n++) {
            const coefficient = (n % 2 === 0 ? -1 : 1) / n;
            const term = coefficient * Math.pow((x - 1) / x, n);
            result += term;
        }
        return result;
    }
    /**
     * Calculates the logarithm of a number with a specified base to a given accuracy.
     *
     * @param {number} x - The number to calculate the logarithm of.
     * @param {number} [base = 10] - The base of the logarithm (default of 10)
     * @param {number} [accuracy = 10] - The number of decimal places to calculate to (default of 10)
     * @return {number} - The calculated logarithm of x with base base, with the specified accuracy.
     */
    static log(x, base = 10, accuracy = 10) {
        return this.ln(x, accuracy) / this.ln(base, accuracy);
    }
}

/**
 * Class containing all trigometrical functions
 */
class TrigonometryFunctions {
    /**
     * Calculates the sine of an angle in degrees.
     * @param {number} x - the angle in degrees
     * @param {number} [accuracy=10] - precision of the result (default of 10)
     * @return {number} the sine of the angle
     */
    static sin(x, accuracy = 10) {
        const a = (x % 360) * (Math.PI / 180);
        let result = 0;
        for (let i = 0; i <= accuracy; i++) {
            result += (Math.pow((-1), i) * Math.pow(a, (2 * i + 1))) / Factorial(2 * i + 1);
        }
        return result;
    }
    /**
     * Calculates the cosine of a given angle in degrees.
     * @param {number} x - the angle in degrees
     * @param {number} [accuracy=10] - the number of decimal places to calculate the result (default of 10)
     * @return {number} - the cosine of the angle
     */
    static cos(x, accuracy = 10) {
        return this.sin(x - 90, accuracy);
    }
    /**
     * Calculates the tangent of a number using the sine and cosine functions.
     * @param {number} x - The input number in degrees
     * @param {number} [accuracy=10] - The number of decimal places to calculate the result to (default of 10)
     * @return {number} The tangent of the input number, rounded to the specified accuracy
     */
    static tan(x, accuracy = 10) {
        return this.sin(x, accuracy) / this.cos(x, accuracy);
    }
    /**
     * Calculates the cosecant of an angle in degrees with a given accuracy.
     * @param {number} x - the angle in degrees
     * @param {number} [accuracy=10] - the number of decimal places to approximate the result to (default of 10)
     * @return {number} the cosecant of the angle with the given accuracy
     */
    static csc(x, accuracy = 10) {
        return 1 / this.sin(x, accuracy);
    }
    /**
     * Calculates the secant of a given angle in degrees.
     * @param {number} x - The angle in degrees
     * @param {number} [accuracy=10] - The number of decimal places to round the result to (default of 10)
     * @return {number} The secant of the given angle
     */
    static sec(x, accuracy = 10) {
        return 1 / this.cos(x, accuracy);
    }
    /**
     * Calculates the cotangent of a given angle in degrees.
     * @param {number} x - The angle in degrees
     * @param {number} [accuracy=10] - The accuracy of the result (default of 10)
     * @return {number} The cotangent of the angle
     */
    static cot(x, accuracy = 10) {
        return 1 / this.tan(x, accuracy);
    }
    /**
     * Calculates the hyperbolic sine of a number.
     * @param {number} x - The number to apply the function to
     * @return {number} The hyperbolic sine of the input number
     */
    static sinh(x) {
        const e = Constants.e;
        return Math.pow(e, x) - Math.pow(e, -x) / 2;
    }
    /**
     * Returns the hyperbolic cosine of a number.
     * @param {number} x - The number for which to return the hyperbolic cosine
     * @return {number} The hyperbolic cosine of the number
     */
    static cosh(x) {
        const e = Constants.e;
        return (Math.pow(e, x) + Math.pow(e, -x)) / 2;
    }
    /**
     * Calculates the hyperbolic tangent of a number.
     * @param {number} x - The number to calculate the tangent of
     * @return {number} The hyperbolic tangent of the number
     */
    static tanh(x) {
        return this.sinh(x) / this.cosh(x);
    }
    /**
     * Computes the arcsine of x using the given accuracy.
     * @param {number} x - The value to compute the arcsine for
     * @param {number} [accuracy=10] - The accuracy to use in the computation (default of 10)
     * @return {number} The computed arcsine value
     */
    static arcsin(x, accuracy = 10) {
        let result = 0;
        for (let n = 0; n <= accuracy; n++) {
            const coefficient = (1 / Indices.power(2, n)) *
                (Equations.binomialCoefficient(2 * n, n) / (2 * n + 1));
            const term = coefficient * Indices.power(x, 2 * n + 1);
            result += term;
        }
        return result;
    }
    /**
     * Calculates the arccosine of a given number with a specified accuracy.
     * @param {number} x - The number to get the arccosine of
     * @param {number} [accuracy=10] - The number of iterations to perform (default of 10)
     * @return {number} The arccosine of the given number
     */
    static arccos(x, accuracy = 10) {
        let result = Constants.pi / 2;
        for (let n = 0; n <= accuracy; n++) {
            const coefficient = (1 / Indices.power(2, n)) *
                (Equations.binomialCoefficient(2 * n, n) / (2 * n + 1));
            const term = coefficient * Indices.power(x, 2 * n + 1);
            result += term;
        }
        return result;
    }
    /**
     * Calculates the arctangent of a given number using the specified accuracy.
     * @param {number} x - The input number
     * @param {number} [accuracy=10] - The accuracy of the resulting calculation (default of 10)
     * @return {number} The calculated arctangent value
     */
    static arctan(x, accuracy = 10) {
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
     * @param {number} x - The value to calculate the arccsc of
     * @param {number} [accuracy=10] - The number of terms to use in the Maclaurin series expansion (default of 10)
     * @returns {number} The arccsc of the given number
     */
    static arccsc(x, accuracy = 10) {
        let result = 0;
        for (let n = 0; n <= accuracy; n++) {
            const coefficient = 1 /
                (Factorial(n) *
                    Indices.power((1 / Indices.power(2, 2 * n + 1)) *
                        Equations.binomialCoefficient(2 * n, n), -1));
            const term = coefficient * Indices.power(x, 2 * n + 1);
            result += term;
        }
        return result;
    }
    /**
     * Calculates arcsecant of a number with given accuracy.
     * @param {number} x - the input value must be greater than or equal to 1
     * @param {number} [accuracy=10] - the number of iterations to perform for accuracy (default of 10)
     * @return {number} the arcsecant of x with given accuracy
     */
    static arcsec(x, accuracy = 10) {
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
     * @param {number} [accuracy=10] - the number of iterations to perform in the approximation (default of 10)
     * @return {number} the arccotangent of x to the specified accuracy
     */
    static arccot(x, accuracy = 10) {
        let result = 0;
        for (let n = 0; n <= accuracy; n++) {
            const term = (Indices.power(-1, n) / (2 * n + 1)) *
                Indices.power(x, 2 * n + 1);
            result += term;
        }
        return result;
    }
    /**
     * Computes the inverse hyperbolic sine (arcsinh) of a given number using the Maclaurin series expansion.
     * @param {number} x - The number to compute the inverse hyperbolic sine of
     * @param {number} [accuracy=10] - The number of terms to use in the Maclaurin series expansion (default of 10)
     * @return {number} The inverse hyperbolic sine (arcsinh) of the given number
     */
    static arcsinh(x, accuracy = 10) {
        let result = 0;
        for (let n = 0; n <= accuracy; n++) {
            const coefficient = (Indices.power(-1, n) / (2 * n + 1)) * Factorial(2 * n);
            const term = coefficient * Indices.power(x, 2 * n + 1);
            result += term;
        }
        return result;
    }
    /**
     * Computes the inverse hyperbolic cosine of a number.
     * @param {number} x - A number whose inverse hyperbolic cosine is to be found
     * @param {number} [accuracy=10] - The number of iterations to perform (default of 10)
     * @return {number} The inverse hyperbolic cosine of the given number
     */
    static arccosh(x, accuracy = 10) {
        let result = 0;
        for (let n = 0; n <= accuracy; n++) {
            const coefficient = (Indices.power(-1, n) * Factorial(2 * n)) /
                (Indices.power(2, 2 * n) * Indices.power(Factorial(n), 2));
            const term = (coefficient * Indices.power(x, 2 * n)) / (2 * n - 1);
            result += term;
        }
        return result;
    }
    /**
     * Calculates the arctanh (inverse hyperbolic tangent) of a number up to a certain accuracy.
     * @param {number} x - The number to calculate the arctanh of
     * @param {number} [accuracy=10] - The number of iterations to perform to approximate the arctanh value (default of 10)
     * @return {number} The arctanh value of the input number
     */
    static arctanh(x, accuracy = 10) {
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
     * @param {number} [accuracy=10] - (optional) the number of iterations to use in the approximation (default of 10)
     * @return {number} the calculated inverse hyperbolic cosecant of the input number
     */
    static arcscsh(x, accuracy = 10) {
        let result = 0;
        for (let n = 0; n <= accuracy; n++) {
            const coefficient = (Indices.power(-1, n) *
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
     * @param {number} x - the number to compute the inverse hyperbolic secant of
     * @param {number} [accuracy=10] - the number of decimal places to return in the result (default of 10)
     * @return {number} the inverse hyperbolic secant of x
     */
    static arcsecsh(x, accuracy = 10) {
        let result = Logarithms.log((1 + Indices.root(1 - x * x)) / x, 10, accuracy);
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
     * @param {number} x - The number whose inverse hyperbolic cotangent is to be calculated
     * @return {number} The inverse hyperbolic cotangent of the given number
     */
    static arccoth(x) {
        return 0.5 * Logarithms.log((x + 1) / (x - 1));
    }
}

/**
 * Class containing equation utilities
 */
class Equations {
    /**
     * Parses a mathematical equation string with given variables.
     *
     * @param {string} equation - the equation to be parsed
     * @param {{ Array.<string>: number }} variables - an object with variable names and their values
     * @return {Array<string|number> | 'Error'} the result of the evaluation or 'Error' if the equation is invalid
     */
    static parseEquation(equation, variables) {
        const result = equation
            .replace(/\s/g, '')
            .split('');
        const find = (array, target) => {
            let count = 0;
            if (Array.isArray(array)) {
                for (let i = 0; i < array.length; i++) {
                    if (array[i] === target) {
                        count++;
                    }
                }
            }
            else if (typeof array === 'string') {
                array = array.split('');
                for (let i = 0; i < array.length; i++) {
                    if (array[i] === target) {
                        count++;
                    }
                }
            }
            return count;
        };
        if (equation === '' ||
            !equation ||
            find(result, '(') !== find(result, ')')) {
            return 'Error';
        }
        for (let i = 0; i < result.length; i++) {
            if (!isNaN(Number(result[i])) && !isNaN(Number(result[i + 1]))) {
                result[i] = Number(result[i]) + Number(result[i + 1]);
                result.splice(i + 1, 1);
                i--;
            }
            else if (result[i] === '-' &&
                !isNaN(Number(result[i + 1])) &&
                isNaN(Number(result[i - 1]))) {
                result[i] = Number(result[i]) + Number(result[i + 1]);
                result.splice(i + 1, 1);
                i--;
            }
            else if (result[i] === '.' && !isNaN(Number(result[i + 1]))) {
                result[i] = Number(result[i]) + Number(result[i + 1]);
                result.splice(i + 1, 1);
                i--;
            }
            else if (!isNaN(Number(result[i])) &&
                result[i + 1] === '.' &&
                !isNaN(Number(result[i + 2]))) {
                result[i] =
                    Number(result[i]) +
                        Number(result[i + 1]) +
                        Number(result[i + 2]);
                result.splice(i + 1, 2);
                i--;
            }
            else if (result[i] === 'r' && result[i + 1] === 't') {
                result[i] = Number(result[i]) + Number(result[i + 1]);
                result.splice(i + 1, 1);
                i--;
            }
            else if (result[i] === 'l' && result[i + 1] === 'n') {
                result[i] = Number(result[i]) + Number(result[i + 1]);
                result.splice(i + 1, 1);
                i--;
            }
            else if (result[i] === 'a' &&
                result[i + 1] === 'b' &&
                result[i + 2] === 's') {
                result[i] =
                    Number(result[i]) +
                        Number(result[i + 1]) +
                        Number(result[i + 2]);
                result.splice(i + 1, 2);
                i--;
            }
            else if (result[i] === 'l' &&
                result[i + 1] === 'o' &&
                result[i + 2] === 'g') {
                result[i] =
                    Number(result[i]) +
                        Number(result[i + 1]) +
                        Number(result[i + 2]);
                result.splice(i + 1, 2);
                i--;
            }
            else if (result[i] === 'a' &&
                result[i + 1] === 's' &&
                result[i + 2] === 'i' &&
                result[i + 3] === 'n' &&
                result[i + 4] === 'h') {
                result[i] =
                    Number(result[i]) +
                        Number(result[i + 1]) +
                        Number(result[i + 2]) +
                        Number(result[i + 3]) +
                        Number(result[i + 4]);
                result.splice(i + 1, 4);
                i--;
            }
            else if (result[i] === 'a' &&
                result[i + 1] === 'c' &&
                result[i + 2] === 'o' &&
                result[i + 3] === 's' &&
                result[i + 4] === 'h') {
                result[i] =
                    Number(result[i]) +
                        Number(result[i + 1]) +
                        Number(result[i + 2]) +
                        Number(result[i + 3]) +
                        Number(result[i + 4]);
                result.splice(i + 1, 4);
                i--;
            }
            else if (result[i] === 'a' &&
                result[i + 1] === 't' &&
                result[i + 2] === 'a' &&
                result[i + 3] === 'n' &&
                result[i + 4] === 'h') {
                result[i] =
                    Number(result[i]) +
                        Number(result[i + 1]) +
                        Number(result[i + 2]) +
                        Number(result[i + 3]) +
                        Number(result[i + 4]);
                result.splice(i + 1, 4);
                i--;
            }
            else if (result[i] === 'a' &&
                result[i + 1] === 's' &&
                result[i + 2] === 'e' &&
                result[i + 3] === 'c' &&
                result[i + 4] === 'h') {
                result[i] =
                    Number(result[i]) +
                        Number(result[i + 1]) +
                        Number(result[i + 2]) +
                        Number(result[i + 3]) +
                        Number(result[i + 4]);
                result.splice(i + 1, 4);
                i--;
            }
            else if (result[i] === 'a' &&
                result[i + 1] === 'c' &&
                result[i + 2] === 's' &&
                result[i + 3] === 'c' &&
                result[i + 4] === 'h') {
                result[i] =
                    Number(result[i]) +
                        Number(result[i + 1]) +
                        Number(result[i + 2]) +
                        Number(result[i + 3]) +
                        Number(result[i + 4]);
                result.splice(i + 1, 4);
                i--;
            }
            else if (result[i] === 'a' &&
                result[i + 1] === 'c' &&
                result[i + 2] === 'o' &&
                result[i + 3] === 't' &&
                result[i + 4] === 'h') {
                result[i] =
                    Number(result[i]) +
                        Number(result[i + 1]) +
                        Number(result[i + 2]) +
                        Number(result[i + 3]) +
                        Number(result[i + 4]);
                result.splice(i + 1, 4);
                i--;
            }
            else if (result[i] === 'a' &&
                result[i + 1] === 's' &&
                result[i + 2] === 'i' &&
                result[i + 3] === 'n') {
                result[i] =
                    Number(result[i]) +
                        Number(result[i + 1]) +
                        Number(result[i + 2]) +
                        Number(result[i + 3]);
                result.splice(i + 1, 3);
                i--;
            }
            else if (result[i] === 'a' &&
                result[i + 1] === 'c' &&
                result[i + 2] === 'o' &&
                result[i + 3] === 's') {
                result[i] =
                    Number(result[i]) +
                        Number(result[i + 1]) +
                        Number(result[i + 2]) +
                        Number(result[i + 3]);
                result.splice(i + 1, 3);
                i--;
            }
            else if (result[i] === 'a' &&
                result[i + 1] === 't' &&
                result[i + 2] === 'a' &&
                result[i + 3] === 'n') {
                result[i] =
                    Number(result[i]) +
                        Number(result[i + 1]) +
                        Number(result[i + 2]) +
                        Number(result[i + 3]);
                result.splice(i + 1, 3);
                i--;
            }
            else if (result[i] === 'a' &&
                result[i + 1] === 's' &&
                result[i + 2] === 'e' &&
                result[i + 3] === 'c') {
                result[i] =
                    Number(result[i]) +
                        Number(result[i + 1]) +
                        Number(result[i + 2]) +
                        Number(result[i + 3]);
                result.splice(i + 1, 3);
                i--;
            }
            else if (result[i] === 'a' &&
                result[i + 1] === 'c' &&
                result[i + 2] === 's' &&
                result[i + 3] === 'c') {
                result[i] =
                    Number(result[i]) +
                        Number(result[i + 1]) +
                        Number(result[i + 2]) +
                        Number(result[i + 3]);
                result.splice(i + 1, 3);
                i--;
            }
            else if (result[i] === 'a' &&
                result[i + 1] === 'c' &&
                result[i + 2] === 'o' &&
                result[i + 3] === 't') {
                result[i] =
                    Number(result[i]) +
                        Number(result[i + 1]) +
                        Number(result[i + 2]) +
                        Number(result[i + 3]);
                result.splice(i + 1, 3);
                i--;
            }
            else if (result[i] === 's' &&
                result[i + 1] === 'i' &&
                result[i + 2] === 'n' &&
                result[i + 3] === 'h') {
                result[i] =
                    Number(result[i]) +
                        Number(result[i + 1]) +
                        Number(result[i + 2]) +
                        Number(result[i + 3]);
                result.splice(i + 1, 3);
                i--;
            }
            else if (result[i] === 'c' &&
                result[i + 1] === 'o' &&
                result[i + 2] === 's' &&
                result[i + 3] === 'h') {
                result[i] =
                    Number(result[i]) +
                        Number(result[i + 1]) +
                        Number(result[i + 2]) +
                        Number(result[i + 3]);
                result.splice(i + 1, 3);
                i--;
            }
            else if (result[i] === 't' &&
                result[i + 1] === 'a' &&
                result[i + 2] === 'n' &&
                result[i + 3] === 'h') {
                result[i] =
                    Number(result[i]) +
                        Number(result[i + 1]) +
                        Number(result[i + 2]) +
                        Number(result[i + 3]);
                result.splice(i + 1, 3);
                i--;
            }
            else if (result[i] === 's' &&
                result[i + 1] === 'e' &&
                result[i + 2] === 'c' &&
                result[i + 3] === 'h') {
                result[i] =
                    Number(result[i]) +
                        Number(result[i + 1]) +
                        Number(result[i + 2]) +
                        Number(result[i + 3]);
                result.splice(i + 1, 3);
                i--;
            }
            else if (result[i] === 'c' &&
                result[i + 1] === 's' &&
                result[i + 2] === 'c' &&
                result[i + 3] === 'h') {
                result[i] =
                    Number(result[i]) +
                        Number(result[i + 1]) +
                        Number(result[i + 2]) +
                        Number(result[i + 3]);
                result.splice(i + 1, 3);
                i--;
            }
            else if (result[i] === 'c' &&
                result[i + 1] === 'o' &&
                result[i + 2] === 't' &&
                result[i + 3] === 'h') {
                result[i] =
                    Number(result[i]) +
                        Number(result[i + 1]) +
                        Number(result[i + 2]) +
                        Number(result[i + 3]);
                result.splice(i + 1, 3);
                i--;
            }
            else if (result[i] === 's' &&
                result[i + 1] === 'i' &&
                result[i + 2] === 'n') {
                result[i] =
                    Number(result[i]) +
                        Number(result[i + 1]) +
                        Number(result[i + 2]);
                result.splice(i + 1, 2);
                i--;
            }
            else if (result[i] === 'c' &&
                result[i + 1] === 'o' &&
                result[i + 2] === 's') {
                result[i] =
                    Number(result[i]) +
                        Number(result[i + 1]) +
                        Number(result[i + 2]);
                result.splice(i + 1, 2);
                i--;
            }
            else if (result[i] === 't' &&
                result[i + 1] === 'a' &&
                result[i + 2] === 'n') {
                result[i] =
                    Number(result[i]) +
                        Number(result[i + 1]) +
                        Number(result[i + 2]);
                result.splice(i + 1, 2);
                i--;
            }
            else if (result[i] === 's' &&
                result[i + 1] === 'e' &&
                result[i + 2] === 'c') {
                result[i] =
                    Number(result[i]) +
                        Number(result[i + 1]) +
                        Number(result[i + 2]);
                result.splice(i + 1, 2);
                i--;
            }
            else if (result[i] === 'c' &&
                result[i + 1] === 's' &&
                result[i + 2] === 'c') {
                result[i] =
                    Number(result[i]) +
                        Number(result[i + 1]) +
                        Number(result[i + 2]);
                result.splice(i + 1, 2);
                i--;
            }
            else if (result[i] === 'c' &&
                result[i + 1] === 'o' &&
                result[i + 2] === 't') {
                result[i] =
                    Number(result[i]) +
                        Number(result[i + 1]) +
                        Number(result[i + 2]);
                result.splice(i + 1, 2);
                i--;
            }
            else if (!isNaN(Number(result[i]))) {
                result[i] = Number(result[i]);
            }
        }
        for (let i = 0; i < result.length; i++) {
            if (typeof result[i] === 'string' && result[i] in variables) {
                if (i > 0 && typeof result[i - 1] === 'number') {
                    result.splice(i, 0, '*');
                    i++;
                }
                if (i < result.length - 1 &&
                    typeof result[i + 1] === 'number') {
                    result.splice(i + 1, 0, '*');
                }
                result[i] = variables[result[i]];
            }
        }
        return result;
    }
    /**
     * Evaluates a mathematical equation string with given variables.
     *
     * @param {string} equation - the equation to be evaluated
     * @param {{ Array.<string>: number }} variables - an object with variable names and their values
     * @return {number | 'Error'} the result of the evaluation or 'Error' if the equation is invalid
     */
    static evaluate(equation, variables) {
        const result = this.parseEquation(equation, variables);
        if (result === 'Error') {
            return 'Error';
        }
        const find = (array, target) => {
            let count = 0;
            if (Array.isArray(array)) {
                for (let i = 0; i < array.length; i++) {
                    if (array[i] === target) {
                        count++;
                    }
                }
            }
            else if (typeof array === 'string') {
                array = array.split('');
                for (let i = 0; i < array.length; i++) {
                    if (array[i] === target) {
                        count++;
                    }
                }
            }
            return count;
        };
        const evaluateNoBrackets = (array) => {
            while (array.length !== 1) {
                for (let i = 0; i < array.length; i++) {
                    switch (array[i]) {
                        case '!':
                            array[i - 1] = Factorial(Number(array[i - 1]));
                            array.splice(i);
                            break;
                        case 'ln':
                            array[i] = Logarithms.ln(Number(array[i + 1]));
                            array.splice(i + 1);
                            break;
                        case 'log':
                            array[i] = Logarithms.log(Number(array[i + 1]), Number(array[i + 2]));
                            array.splice(i + 1, i + 2);
                            break;
                        case 'sin':
                            array[i] = TrigonometryFunctions.sin(Number(array[i + 1]));
                            array.splice(i + 1);
                            break;
                    }
                }
                for (let i = 0; i < array.length; i++) {
                    switch (array[i]) {
                        case '^':
                            array[i - 1] ===
                                Math.pow(Number(array[i - 1]), Number(array[i + 1]));
                            array.splice(i, i + 1);
                            break;
                        case '√':
                            if (Number.isInteger(Number(array[i - 1]))) {
                                array[i - 1] ===
                                    Math.pow(Number(array[i + 1]), 1) /
                                        Number(array[i - 1]);
                                array.splice(i, i + 1);
                            }
                            else {
                                array[i] = Math.pow(Number(array[i + 1]), 0.5);
                                array.splice(i + 1);
                            }
                            break;
                    }
                }
                for (let i = 0; i < array.length; i++) {
                    switch (array[i]) {
                        case '*':
                            array[i - 1] =
                                Number(array[i - 1]) * Number(array[i + 1]);
                            array.splice(i, i + 1);
                            break;
                        case '/':
                            array[i - 1] =
                                Number(array[i - 1]) / Number(array[i + 1]);
                            array.splice(i, i + 1);
                            break;
                    }
                }
                for (let i = 0; i < array.length; i++) {
                    switch (array[i]) {
                        case '+':
                            array[i - 1] =
                                Number(array[i - 1]) + Number(array[i + 1]);
                            array.splice(i, i + 1);
                            break;
                        case '-':
                            array[i - 1] =
                                Number(array[i - 1]) - Number(array[i + 1]);
                            array.splice(i, 2);
                            break;
                    }
                }
            }
            return array[0];
        };
        while (find(result, '(') > 0) {
            let startPos = -1;
            let endPos = -1;
            for (let i = 0; i < result.length; i++) {
                if (result[i] === '(') {
                    startPos = i;
                }
                else if (result[i] === ')' && startPos >= 0) {
                    endPos = i;
                }
            }
            if (startPos !== -1 && endPos !== -1) {
                const subEquation = result.slice(startPos + 1, endPos);
                result[startPos] = evaluateNoBrackets(subEquation);
                result.splice(startPos + 1, endPos - startPos);
            }
        }
        return Number(evaluateNoBrackets(result));
    }
    /**
     * Calculates the binomial coefficient of two given numbers.
     *
     * @param {number} n - The total number of items.
     * @param {number} k - The number of items to choose.
     * @return {number} The calculated binomial coefficient.
     */
    static binomialCoefficient(n, k) {
        if (k < 0 || k > n)
            return 0;
        if (k === 0 || k === n)
            return 1;
        let coefficient = 1;
        k = Math.min(k, n - k);
        for (let i = 1; i <= k; i++) {
            coefficient *= (n - i + 1) / i;
        }
        return coefficient;
    }
}

/**
 * Class containing summation functions
 */
class Summation {
    /**
     * Calculates the additive summation of an equation for a given range and interval.
     *
     * @param {string} equation - The equation to be evaluated, can use variable 'n'.
     * @param {number} start - The starting value for variable 'n'.
     * @param {number} end - The ending value for variable 'n'.
     * @param {number} interval - The increment between each value of 'n'.
     * @return {number} The result of the additive summation of the equation for the given range and interval.
     */
    static AdditiveSummation(equation, start, end, interval) {
        let result = 0;
        for (let n = start; n <= end; n += interval) {
            result += Number(Equations.evaluate(equation, { n: n }));
        }
        return result;
    }
    /**
     * Calculates the multiplicative summation of the given equation for a given range.
     *
     * @param {string} equation - the equation to be evaluated
     * @param {number} start - the start value of the range
     * @param {number} end - the end value of the range
     * @param {number} interval - the interval between each value in the range
     * @return {number} the result of the multiplicative summation
     */
    static MultiplicativeSummation(equation, start, end, interval) {
        let result = 0;
        for (let n = start; n <= end; n += interval) {
            result *= Number(Equations.evaluate(equation, { n: n }));
        }
        return result;
    }
}

export { Absolute, Averages, Circle, ComplexNumber, Constants, Conversions, Equations, Factorial, Fraction, Indices, Logarithms, Matrix, Summation, TrigonometryFunctions, add, angleEnum, angleUnits, areaEnum, areaUnits, convertBase, divide, energyEnum, energyUnits, gcd, gcd2, lengthEnum, lengthUnits, massEnum, massUnits, multiply, physicsFormulae, pressureEnum, pressureUnits, speedEnum, speedUnits, subtract, temperatureEnum, temperatureUnits, timeEnum, timeUnits, volumeEnum, volumeUnits };
