/**
 * Class for all indices related functions.
 */
declare class Indices {
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
    static power(number: number, power: number | object): number;
    /**
     * Calculates the nth root of a given number.
     *
     * @param {number} number - the number to calculate the nth root o
     * @param {number} root - the root to use for the calculation.
     * @return {number} the result of the nth root calculation
     */
    static root(number: number, root?: number): number;
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
     * Creates the fraction.
     * @param {number} numerator - The numerator(upper number) of the fraction
     * @param {number} denominator - The denominator(lower number) of the fraction
     * @example <caption>Example - Create Fraction</caption>
     * // returns { numerator: 3, denominator: 6 }
     * new Fraction(3,6)
     * @returns {Object}
     */
    constructor(numerator: number, denominator: number);
    /**
     * Simplify the number.
     * @example <caption>Example - Simplify Fraction</caption>
     * // Returns [1,2]
     * const myFraction = new Fraction(3,6)
     * myFraction.simplified()
     * @returns {number[]} Simplified Fraction
     */
    simplified(): number[];
    /**
     * Converts the fraction to a decimal.
     * @example <caption>Example - Convert Fraction to Decimal</caption>
     * // returns 0.5
     * const myFraction = new Fraction(3,6)
     * myFraction.decimal()
     * @returns {number} Decimal
     */
    decimal(): number;
    /**
     * Converts the fraction to a percentage.
     * @example <caption>Example - Convert Fraction to Percentage</caption>
     * // returns 50
     * const myFraction = new Fraction(3,6)
     * myFraction.percentage()
     * @returns {number} Percentage
     */
    percentage(): number;
    /**
     * Converts the fraction to a string.
     * @example <caption>Example - Convert Fraction to String</caption>
     * // returns "3/6"
     * const myFraction = new Fraction(3,6)
     * myFraction.toString()
     * @returns {string} Fraction String
     */
    toString(): string;
    /**
     * Converts the fraction to a simplified string.
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
declare function gcd(arr: number[]): number;
/**
 * Find the GCD of two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @param {Object} [options] Extra options
 * @param {number} [options.base] The base of the numbers you inputted
 * @returns {number} The GCD of the two numbers
 */
declare function gcd2(a: number, b: number): number;
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
 * Concatenates two numbers in a given base.
 *
 * @param {number} a - The first number to concatenate.
 * @param {number} b - The second number to concatenate.
 * @param {number} [base=10] - The base to use for the concatenation.
 * @return {number} The concatenated number in the given base.
 */
declare function concatenate(a: number, b: number): number;
declare class Color {
    readonly red: number;
    readonly green: number;
    readonly blue: number;
    readonly alpha: number;
    constructor(red: number, green: number, blue: number, alpha: number);
}
declare class Range {
    readonly min: number;
    readonly max: number;
    readonly operand1: '≤' | '<';
    readonly operand2: '≤' | '<';
    constructor(min: number, operand1: '≤' | '<', max: number, operand2: '≤' | '<');
    returnString(): string;
}
/**
 * Counts the number of occurrences of a target value in an array or string.
 *
 * @param {Array<any> | string} array - The array or string to search in.
 * @param {any} target - The target value to count occurrences of.
 * @return {number} The number of occurrences of the target value.
 */
declare function find(array: Array<any> | string, target: any): number;
/**
 * Checks if the given object exists in all of the arrays.
 *
 * @param {any} object - The object to check.
 * @param {any[][]} arrays - The arrays to search.
 * @return {boolean} Returns true if the object exists in all arrays, false otherwise.
 */
declare function isInAllArrays(object: any, arrays: any[][]): boolean;
/**
 * Replaces a portion of an array with a new set of values.
 *
 * @param {any[]} array - The original array.
 * @param {any[]} values - The values to insert into the array.
 * @param {number} startPos - The starting position of the replacement.
 * @param {number} endPos - The ending position of the replacement.
 * @return {any[]} - The modified array.
 */
declare function arrayReplace(array: any[], values: any[], startPos: number, endPos: number): any[];

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
     * Gets the circumference.
     * @type {number}
     * @example <caption>Example - Get Circumference</caption>
     * // returns 3.14
     * new Circle({ radius: 1 }).circumference
     * @returns {number}
     * @see https://en.wikipedia.org/wiki/Circumference
     */
    readonly circumference: number;
    /**
     * Gets the diameter.
     * @type {number}
     * @example <caption>Example - Get Diameter</caption>
     * // returns 2
     * new Circle({ radius: 1 }).diameter
     * @returns {number}
     * @see https://en.wikipedia.org/wiki/Diameter
     */
    readonly diameter: number;
    /**
     * Gets the area.
     * @type {number}
     * @example <caption>Example - Get Area</caption>
     * // returns 3.14
     * new Circle({ radius: 1 }).area
     * @returns {number}
     * @see https://en.wikipedia.org/wiki/Area
     */
    readonly area: number;
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
    /**
     * Creates a new matrix
     *
     * @param {Array.<Array.<number>>} values - The values of the matrix
     */
    constructor(values: number[][]);
    /**
     * Calculate and return the determinant of the matrix.
     *
     * @return {number} The determinant of the matrix.
     */
    calculateDeterminant(): number;
    /**
     * Concatenate two matrices horizontally.
     *
     * @param {Matrix} matrix2 - The matrix to be concatenated.
     * @return {Matrix} A new matrix that is the concatenation of this matrix and matrix2.
     */
    concatMatrix(matrix2: Matrix): Matrix;
    /**
     * Returns the inverse values of the matrix.
     *
     * @return {Matrix} The matrix with the inverse values.
     */
    getInverseValues(): Matrix;
    /**
     * Apply Gaussian elimination to the matrix and return the reduced row echelon form.
     *
     * @return {Matrix} The matrix in reduced row echelon form.
     */
    applyGaussianElimination(): Matrix;
    /**
     * Inverts the matrix.
     *
     * @return {Matrix | null} The inverted matrix, or null if it is not possible to invert.
     */
    invert(): Matrix | null;
    /**
     * Calculates the product of two matrices.
     * @param {Matrix} other - The matrix to multiply with.
     * @return {Matrix} A new matrix that is the product of this matrix and other.
     * @throws {Error} If the number of columns of this matrix does not match the number of rows of the other matrix.
     */
    multiply(other: Matrix): Matrix;
    /**
     * Adds the values of two matrices together.
     * @param {Matrix} other - The matrix to add to this one.
     * @return {Matrix} A new matrix with the added values.
     * @throws {Error} If matrices do not have the same number of rows and columns.
     */
    add(other: Matrix): Matrix;
    /**
     * Divides this matrix by another one element-wise and returns the result as a new matrix.
     * @param {Matrix} other - the matrix to divide by
     * @throws {Error} When matrices do not have the same dimensions or when dividing by 0
     * @return {Matrix} A new matrix that is the result of the element-wise division
     */
    divide(other: Matrix): Matrix;
    /**
     * Subtract two matrices of the same dimensions and return the result.
     * @param {Matrix} other - the matrix to subtract from this one
     * @return {Matrix} a new matrix that is the result of the subtraction
     * @throws {Error} if matrices do not have the same dimensions
     */
    subtract(other: Matrix): Matrix;
    /**
     * Multiplies the matrix by a scalar.
     * @param {number} scalar - the scalar to multiply with.
     * @return {Matrix} a new Matrix object that is the result of the scalar multiplication.
     */
    multiplyScalar(scalar: number): Matrix;
    /**
     * Divides every element in the matrix by a scalar.
     * @param {number} scalar - the scalar to divide by
     * @return {Matrix} a new matrix with the results of the division
     * @throws {Error} if scalar is zero
     */
    divideScalar(scalar: number): Matrix;
    /**
     * Performs eigenvalue decomposition on a square matrix.
     *
     * @return {object} An object containing the eigenvalues and eigenvectors.
     */
    eigenvalueDecomposition(): {
        eigenvalues: any[];
        eigenvectors: Matrix;
    };
    /**
     * Create an identity matrix of the specified size
     *
     * @param {number} size - The size of the identity matrix
     * @returns {Matrix} - The identity matrix
     */
    static eye(size: number): Matrix;
    /**
     * Check if the matrix is diagonal (all off-diagonal elements are close to zero)
     *
     * @returns {boolean} - True if the matrix is diagonal, false otherwise
     */
    isDiagonal(): boolean;
    /**
     * Get the diagonal elements of the matrix
     *
     * @returns {number[]} - Array of diagonal elements
     */
    getDiagonal(): any[];
    /**
     * Normalize the columns of the matrix
     *
     * @returns {Matrix} - The normalized matrix
     */
    normalizeColumns(): Matrix;
    /**
     * Perform QR decomposition of the matrix
     *
     * @returns {Object} - Object containing orthogonal matrix Q and upper triangular matrix R
     */
    qrDecomposition(): {
        Q: Matrix;
        R: Matrix;
    };
    /**
     * Calculates the norm of the matrix.
     *
     * @return {number} The norm of the matrix.
     */
    norm(): number;
    /**
     * Creates a matrix filled with zeros.
     *
     * @param {number} rows - The number of rows in the matrix.
     * @param {number} columns - The number of columns in the matrix.
     * @return {Matrix} The matrix filled with zeros.
     */
    static zeros(rows: number, columns: number): Matrix;
    /**
     * Gets a column from the matrix.
     *
     * @param {number} columnIndex - The index of the column to retrieve.
     * @return {Matrix} A new Matrix containing the column values.
     */
    getColumn(columnIndex: number): Matrix;
    /**
     * Set the values of a specific column in the matrix.
     *
     * @param {number} columnIndex - The index of the column to set.
     * @param {Matrix} column - The column values to set.
     * @return {void} This function does not return a value.
     */
    setColumn(columnIndex: number, column: Matrix): void;
    /**
     * Set the value of a specific cell in the matrix.
     *
     * @param {number} row - The row index of the cell.
     * @param {number} column - The column index of the cell.
     * @param {number} value - The value to set in the cell.
     * @return {void} This function does not return a value.
     */
    set(row: number, column: number, value: number): void;
    /**
     * Transposes the matrix.
     *
     * @return {Matrix} The transposed matrix.
     */
    transpose(): Matrix;
}

declare type OperationsInput = number | {
    numerator: number;
    denominator: number;
};
/**
 * Calculates the sum of all numbers and fraction inputs.
 *
 * @param {Array.<number | {numerator: number, denominator: number}>} inputs - An array of OperationsInput objects
 * @return {number} The sum of all numbers and fractions
 */
declare function add(inputs: OperationsInput[]): number;
/**
 * Subtracts all the numbers and fractions in the given array of operations.
 *
 * @param {Array.<number | {numerator: number, denominator: number}>} inputs - An array of numbers and fractions to subtract
 * @return {number} The result of subtracting all the inputs
 */
declare function subtract(inputs: OperationsInput[]): number;
/**
 * Multiplies a list of numbers and/or fractions.
 *
 * @param {Array.<number | {numerator: number, denominator: number}>} inputs - An array of numbers and/or fractions to multiply
 * @return {number} The result of multiplying all inputs together
 */
declare function multiply(inputs: OperationsInput[]): number;
/**
 * Divides a list of numbers and/or fractions and returns the result.
 *
 * @param {Array.<number | {numerator: number, denominator: number}>} inputs - An array of numbers and/or objects with a numerator and denominator
 * @return {number} - The result of dividing all the numbers/fractions in the input array
 */
declare function divide(inputs: OperationsInput[]): number;
/**
 * Returns the absolute value of a number.
 *
 * @param {number} x - The number to get the absolute value o
 * @return {number} The absolute value of the input number.
 */
declare function Absolute(x: any): any;
/**
 * Calculates the factorial of a given number.
 *
 * @param {number} x - The number to calculate the factorial of
 * @return {number} The factorial of the given number
 */
declare function Factorial(x: any): number;

declare class physicsFormulae {
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
declare const lengthUnits: {
    readonly Picometers: "pm";
    readonly Nanometers: "nm";
    readonly Micrometers: "μm";
    readonly Millimeters: "mm";
    readonly Centimeters: "cm";
    readonly Decimeters: "dm";
    readonly Meters: "m";
    readonly Hectometers: "hm";
    readonly Kilometers: "km";
    readonly Inches: "in";
    readonly Feet: "ft";
    readonly Yards: "yd";
    readonly Miles: "mi";
    readonly NauticalMiles: "nmi";
    readonly AstronomicalUnit: "AU";
    readonly Parsec: "pc";
    readonly Light_Years: "LY";
    readonly Fathoms: "ftm";
    readonly Furlongs: "fur";
};
/**
 * Enum for energy units
 * @readonly
 * @enum
 */
declare const energyUnits: {
    readonly Joules: "J";
    readonly Electronvolt: "eV";
    readonly Kiloelectronvolts: "KeV";
    readonly Megaelectronvolts: "MeV";
    readonly Gigaelectronvolts: "GeV";
    readonly Teraelectronvolts: "TeV";
    readonly Watts: "W";
    readonly WattHours: "Wh";
    readonly Kilowatts: "kW";
    readonly KilowattHours: "kWh";
    readonly Calories: "cal";
    readonly Kilocalories: "kcal";
    readonly BritishThermalUnits: "BTU";
    readonly USTherms: "UST";
    readonly Footpounds: "ft-lb";
};
/**
 * Enum for volume units
 * @readonly
 * @enum
 */
declare const volumeUnits: {
    readonly Liters: "L";
    readonly Milliliters: "mL";
    readonly CubicMeters: "m³";
    readonly CubicCentimeters: "cm³";
    readonly CubicMillimeters: "mm³";
    readonly CubicInches: "in³";
    readonly CubicFeet: "ft³";
    readonly USLiquidGallons: "galUS";
    readonly USLiquidQuarts: "qtUS";
    readonly USLiquidPints: "ptUS";
    readonly USLegalCups: "cupUS";
    readonly USTeaspoons: "tspUS";
    readonly USTablespoons: "tbspUS";
    readonly Fluid_Ounces: "oz";
    readonly ImperialGallons: "galImp";
    readonly ImperialQuarts: "qtImp";
    readonly ImperialPints: "ptImp";
    readonly ImperialCups: "cupsImp";
    readonly ImperialFluidOunces: "ozImp";
    readonly ImperialTeaspoons: "tspImp";
    readonly ImperialTablespoons: "tbspImp";
};
/**
 * Enum for angle units
 * @readonly
 * @enum
 */
declare const angleUnits: {
    readonly Arcminutes: "'";
    readonly Arcseconds: "\"";
    readonly Degrees: "°";
    readonly Radians: "rad";
    readonly Gradians: "grad";
    readonly Milliradians: "mrad";
    readonly Revolutions: "rev";
    readonly Quadrants: "q";
    readonly Sextants: "s";
    readonly Signs: "sgn";
    readonly Octants: "o";
};
/**
 * Enum for speed units
 * @readonly
 * @enum
 */
declare const speedUnits: {
    readonly MetersPerSecond: "m/s";
    readonly FeetPerSecond: "ft/s";
    readonly MilesPerHour: "mi/h";
    readonly KilometersPerHour: "km/h";
    readonly Knots: "kn";
};
/**
 * Enum for time units
 * @readonly
 * @enum
 */
declare const timeUnits: {
    readonly Picoseconds: "ps";
    readonly Nanoseconds: "ns";
    readonly Microseconds: "μs";
    readonly Milliseconds: "ms";
    readonly Seconds: "s";
    readonly Minutes: "m";
    readonly Hours: "h";
    readonly Days: "d";
    readonly Weeks: "w";
    readonly Fortnights: "f";
};
/**
 * Enum for area units
 * @readonly
 * @enum
 */
declare const areaUnits: {
    readonly SquareMeters: "m²";
    readonly SquareKilometers: "km²";
    readonly SquareInches: "in²";
    readonly SquareFeet: "ft²";
    readonly SquareYards: "yd²";
    readonly SquareMiles: "mi²";
    readonly Acres: "acre";
    readonly Hectares: "ha";
};
/**
 * Enum for mass units
 * @readonly
 * @enum
 */
declare const massUnits: {
    readonly Picograms: "pg";
    readonly Nanograms: "ng";
    readonly Micrograms: "μg";
    readonly Milligrams: "mg";
    readonly Grams: "g";
    readonly Kilograms: "kg";
    readonly MetricTonnes: "t";
    readonly Carats: "c";
    readonly Long_Tons: "Lt";
    readonly Short_Tons: "St";
    readonly Ounces: "oz";
    readonly Pounds: "lb";
    readonly Stone: "st";
    readonly Earth_Masses: "M⊕";
    readonly Solar_Masses: "M☉";
};
/**
 * Enum for temperature units
 * @readonly
 * @enum
 */
declare const temperatureUnits: {
    readonly Celsius: "°C";
    readonly Fahrenheit: "°F";
    readonly Kelvin: "K";
};
/**
 * Enum for pressure units
 * @readonly
 * @enum
 */
declare const pressureUnits: {
    readonly Bars: "bar";
    readonly Millibars: "mbar";
    readonly Pascals: "Pa";
    readonly Hectopascals: "hPa";
    readonly Kilopascals: "kPa";
    readonly Pounds_per_Square_Inch: "psi";
    readonly Torr: "Torr";
};
/**
 * Enum for energy measurements
 * @readonly
 * @enum {EnergyType}
 */
declare const energyEnum: {
    readonly Joules: "JOULES";
    readonly Electronvolt: "ELECTRONVOLT";
    readonly Kiloelectronvolts: "KILOELECTRONVOLTS";
    readonly Megaelectronvolts: "MEGAELECTRONVOLTS";
    readonly Gigaelectronvolts: "GIGAELECTRONVOLTS";
    readonly Teraelectronvolts: "TERAELECTRONVOLTS";
    readonly Watts: "WATTS";
    readonly WattHours: "WATT_HOURS";
    readonly Kilowatts: "KILOWATTS";
    readonly KilowattHours: "KILOWATT_HOURS";
    readonly Calories: "CALORIES";
    readonly Kilocalories: "KILOCALORIES";
    readonly BritishThermalUnits: "BRITISH_THERMAL_UNITS";
    readonly US_Therms: "US_THERMS";
    readonly Foot_pounds: "FOOT-POUNDS";
};
/**
 * Enum for volume measurements
 * @readonly
 * @enum {VolumeType}
 */
declare const volumeEnum: {
    readonly Liters: "LITERS";
    readonly Milliliters: "MILLILITERS";
    readonly CubicMeters: "CUBIC_METERS";
    readonly CubicCentimeters: "CUBIC_CENTIMETERS";
    readonly CubicMillimeters: "CUBIC_MILLIMETERS";
    readonly CubicInches: "CUBIC_INCHES";
    readonly CubicFeet: "CUBIC_FEET";
    readonly USLiquidGallons: "US_LIQUID_GALLONS";
    readonly USLiquidQuarts: "US_LIQUID_QUARTS";
    readonly USLiquidPints: "US_LIQUID_PINTS";
    readonly USLegalCups: "US_LEGAL_CUPS";
    readonly USTeaspoons: "US_TEASPOONS";
    readonly USTablespoons: "US_TABLESPOONS";
    readonly FluidOunces: "FLUID_OUNCES";
    readonly ImperialGallons: "IMPERIAL_GALLONS";
    readonly ImperialQuarts: "IMPERIAL_QUARTS";
    readonly ImperialPints: "IMPERIAL_PINTS";
    readonly ImperialCups: "IMPERIAL_CUPS";
    readonly ImperialFluidOunces: "IMPERIAL_FLUID_OUNCES";
    readonly ImperialTeaspoons: "IMPERIAL_TEASPOONS";
    readonly ImperialTablespoons: "IMPERIAL_TABLESPOONS";
};
/**
 * Enum for angle measurements
 * @readonly
 * @enum {AngleType}
 */
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
    readonly AstronomicalUnit: "ASTRONOMICAL_UNIT";
    readonly Parsec: "PARSEC";
    readonly LightYears: "LIGHT_YEARS";
    readonly Inches: "INCHES";
    readonly Feet: "FEET";
    readonly Yards: "YARDS";
    readonly Miles: "MILES";
    readonly NauticalMiles: "NAUTICAL_MILES";
    readonly Fathoms: "FATHOMS";
    readonly Furlongs: "FURLONGS";
};
/**
 * Enum for speed measurements
 * @readonly
 * @enum {SpeedType}
 */
declare const speedEnum: {
    readonly MetersPerSecond: "METERS_PER_SECOND";
    readonly FeetPerSecond: "FEET_PER_SECOND";
    readonly MilesPerHour: "MILES_PER_HOUR";
    readonly KilometersPerHour: "KILOMETERS_PER_HOUR";
    readonly Knots: "KNOTS";
};
/**
 * Enum for time measurements
 * @readonly
 * @enum {TimeType}
 */
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
/**
 * Enum for area measurements
 * @readonly
 * @enum {AreaType}
 */
declare const areaEnum: {
    readonly SquareMeters: "SQUARE_METERS";
    readonly SquareKilometers: "SQUARE_KILOMETERS";
    readonly SquareInches: "SQUARE_INCHES";
    readonly SquareFeet: "SQUARE_FEET";
    readonly SquareYards: "SQUARE_YARDS";
    readonly SquareMiles: "SQUARE_MILES";
    readonly Acres: "ACRES";
    readonly Hectares: "HECTARES";
};
/**
 * Enum for mass measurements
 * @readonly
 * @enum {MassType}
 */
declare const massEnum: {
    readonly Picograms: "PICOGRAMS";
    readonly Nanograms: "NANOGRAMS";
    readonly Micrograms: "MICROGRAMS";
    readonly Milligrams: "MILLIGRAMS";
    readonly Grams: "GRAMS";
    readonly Kilograms: "KILOGRAMS";
    readonly MetricTonnes: "METRIC_TONNES";
    readonly Carats: "CARATS";
    readonly Long_Tons: "LONG_TONS";
    readonly Short_Tons: "SHORT_TONS";
    readonly Ounces: "OUNCES";
    readonly Pounds: "POUNDS";
    readonly Stone: "STONE";
    readonly EarthMasses: "EARTH_MASSES";
    readonly SolarMasses: "SOLAR_MASSES";
};
/**
 * Enum for temperature measurements
 * @readonly
 * @enum {TemperatureType}
 */
declare const temperatureEnum: {
    readonly Celsius: "CELSIUS";
    readonly Fahrenheit: "FAHRENHEIT";
    readonly Kelvin: "KELVIN";
};
/**
 * Enum for pressure measurements
 * @readonly
 * @enum {PressureType}
 */
declare const pressureEnum: {
    readonly Bars: "BARS";
    readonly Millibars: "MILLIBARS";
    readonly Pascals: "PASCALS";
    readonly Hectopascals: "HECTOPASCALS";
    readonly Kilopascals: "KILOPASCALS";
    readonly PoundsPerSquareInch: "POUNDS_PER_SQUARE_INCH";
    readonly Torr: "TORR";
};
/**
 * Class to convert between different units of measure
 */
declare class Conversions {
    /**
     * Converts an angle value from one unit to another.
     *
     * @param {number} value - The value to be converted
     * @param {AngleType | string} fromUnit - The current unit of the value. Must be a string from angleEnum
     * @param {AngleType | string} toUnit - The desired unit to convert the value to. Must be a string from angleEnum
     * @return {number} The converted angle value in the desired unit
     */
    static convertAngle(value: number, fromUnit: typeof angleEnum | string, toUnit: typeof angleEnum | string): number;
    /**
     * Converts a length value from one unit to another.
     *
     * @param {number} value - The value to convert
     * @param {LengthType | string} fromUnit - The unit to convert from
     * @param {LengthType | string} toUnit - The unit to convert to
     * @return {number} The converted value
     */
    static convertLength(value: number, fromUnit: typeof lengthEnum | string, toUnit: typeof lengthEnum | string): number;
    /**
     * Converts a time value from one unit to another.
     *
     * @param {number} value - The value to convert
     * @param {TimeType | string} fromUnit - The unit of the input value
     * @param {TimeType | string} toUnit - The desired unit of the output value
     * @returns {number} - The converted value in the desired unit
     */
    static convertTime(value: number, fromUnit: typeof timeEnum | string, toUnit: typeof timeEnum | string): number;
    /**
     * Converts a mass value from one unit to another.
     *
     * @param {number} value - The mass value to be converted
     * @param {MassType | string} fromUnit - The unit to convert from
     * @param {MassType | string} toUnit - The unit to convert to
     * @return {number} The converted mass value
     */
    static convertMass(value: number, fromUnit: typeof massEnum | string, toUnit: typeof massEnum | string): number;
    /**
     * Convert an energy value from one unit to another.
     *
     * @param {number} value - the energy value to convert
     * @param {EnergyType | string} fromUnit - the unit of the input value
     * @param {EnergyType | string} toUnit - the desired output unit
     * @return {number} - the converted energy value
     */
    static convertEnergy(value: number, fromUnit: typeof energyEnum | string, toUnit: typeof energyEnum | string): number;
    /**
     * Converts a temperature value from one unit to another.
     *
     * @param {number} value - The temperature value to be converted
     * @param {TemperatureType | string} fromUnit - The unit of the input temperature value
     * @param {TemperatureType | string} toUnit - The unit of the output temperature value
     * @return {number} The converted temperature value in the desired unit
     */
    static convertTemperature(value: number, fromUnit: typeof temperatureEnum | string, toUnit: typeof temperatureEnum | string): number;
    /**
     * Converts a speed value from one unit to another.
     *
     * @param {number} value - the value to be converted
     * @param {SpeedType | string} fromUnit - the unit to convert from
     * @param {SpeedType | string} toUnit - the unit to convert to
     * @return {number} - the converted value
     */
    static convertSpeed(value: number, fromUnit: typeof speedEnum | string, toUnit: typeof speedEnum | string): number;
    /**
     * Converts a pressure value from one unit to another.
     *
     * @param {number} value - The pressure value to convert
     * @param {PressureType | string} fromUnit - The unit to convert from
     * @param {PressureType | string} toUnit - The unit to convert to
     * @return {number} The converted pressure value
     */
    static convertPressure(value: number, fromUnit: typeof pressureEnum | string, toUnit: typeof pressureEnum | string): number;
    /**
     * Converts an area measurement from one unit to another.
     *
     * @param {number} value - The numerical value of the area measurement in the fromUnit
     * @param {AreaType | string} fromUnit - The unit to convert from
     * @param {AreaType | string} toUnit - The unit to convert to
     * @return {number} - The numerical value of the converted area measurement in the toUnit
     */
    static convertArea(value: number, fromUnit: typeof areaEnum | string, toUnit: typeof areaEnum | string): number;
    /**
     * Converts an volume measurement from one unit to another.
     *
     * @param {number} value - The numerical value of the volume measurement in the fromUnit
     * @param {VolumeType | string} fromUnit - The unit to convert from
     * @param {VolumeType | string} toUnit - The unit to convert to
     * @return {number} - The numerical value of the converted volume measurement in the toUnit
     */
    static convertVolume(value: number, fromUnit: typeof volumeEnum | string, toUnit: typeof volumeEnum | string): number;
}

/**
 * Class to find averages of an array of numbers
 */
declare class Averages {
    /**
     * Finds the mean of an array of numbers
     * @param {Array.<number>} - The array of numbers to find the mean of
     * @return {number} - The mean of the inputted numbers
     */
    static mean(input: number[]): number;
    /**
     * Finds the median of an array of numbers
     * @param {Array.<number>} - The array of numbers to find the median of
     * @return {number} - The median of the inputted numbers
     */
    static median(input: number[]): number;
    /**
     * Finds the mode of an array of numbers
     * @param {Array.<number>} - The array of numbers to find the mode of
     * @return {number} - The mode of the inputted numbers
     */
    static mode(input: number[]): any;
    /**
     * Finds the range of an array of numbers
     * @param {Array.<number>} - The array of numbers to find the range of
     * @return {number} - The range of the inputted numbers
     */
    static range(input: number[]): number;
}

declare class ComplexNumber {
    real: number;
    imaginary: number;
    constructor(real: number, imaginary: number);
    multiply(other: ComplexNumber): ComplexNumber;
    getImaginary(): number;
    add(other: ComplexNumber): ComplexNumber;
    subtract(other: ComplexNumber): ComplexNumber;
    divide(other: ComplexNumber): ComplexNumber;
    getModulus(): number;
    getArgument(): number;
    getConjugate(): ComplexNumber;
}

/**
 * Class containing equation utilities
 */
declare class Equations {
    private static find;
    /**
     * Parses a mathematical equation string with given variables.
     *
     * @param {string} equation - the equation to be parsed
     * @return {Array<string|number> | 'Error'} the result of the evaluation or 'Error' if the equation is invalid
     */
    static parseEquation(equation: string): any[];
    /**
     * Evaluates a mathematical equation string with given variables.
     *
     * @param {string} equation - the equation to be evaluated
     * @param {{ Array.<string>: number }} variables - an object with variable names and their values
     * @return { number | 'Error'} the result of the evaluation or 'Error' if the equation is invalid
     */
    static evaluate(equation: string, variables: {
        [key: string]: number;
    }): number;
    /**
     * Calculates the binomial coefficient of two given numbers.
     *
     * @param {number} n - The total number of items.
     * @param {number} k - The number of items to choose.
     * @return {number} The calculated binomial coefficient.
     */
    static binomialCoefficient(n: number, k: number): number;
    static simplify(expression: string): string;
    private static simplifyArray;
}

/**
 * Class containing summation functions
 */
declare class LargeOperators {
    /**
     * Calculates the additive summation of a given equation within a specified range.
     *
     * @param {string} equation - The equation to be evaluated.
     * @param {number} start - The starting value of the range.
     * @param {number} end - The ending value of the range.
     * @param {number} interval - The interval between each value in the range.
     * @return {number} The sum of the evaluated equation for each value in the range.
     */
    static AdditiveSummation(equation: string, start: number, end: number, interval: number): number;
    /**
     * Calculates the multiplicative summation of a given equation.
     *
     * @param {string} equation - The equation to evaluate.
     * @param {number} start - The starting value for the summation.
     * @param {number} end - The ending value for the summation.
     * @param {number} interval - The interval between each value in the summation.
     * @return {number} - The result of the multiplicative summation.
     */
    static MultiplicativeSummation(equation: string, start: number, end: number, interval: number): number;
    /**
     * Union of arrays.
     *
     * @param {number[][]} arrays - The arrays to be unioned.
     * @return {number[]} The union of the arrays.
     */
    static union(arrays: number[][]): number[];
    /**
     * Finds the intersection of multiple arrays.
     *
     * @param {number[][]} arrays - The arrays to find the intersection of.
     * @return {number[]} - The resulting array with common elements.
     */
    static intersection(arrays: number[][]): number[];
}

declare const NumberTypes: {
    readonly Natural: {
        readonly symbol: "ℕ";
        readonly description: "Natural Numbers also known as counting numbers, natural numbers are the positive integers starting from 1 and extending indefinitely (1, 2, 3, 4, 5, ...).";
    };
    readonly Whole: {
        readonly symbol: "ℤ";
        readonly description: "Whole numbers include zero along with the natural numbers (0, 1, 2, 3, 4, ...).";
    };
    readonly Integer: {
        readonly symbol: "𝕀";
        readonly description: "Integers encompass all positive and negative whole numbers, including zero (-∞, ..., -3, -2, -1, 0, 1, 2, 3, ..., +∞).";
    };
    readonly Rational: {
        readonly symbol: "ℚ";
        readonly description: "Rational Numbers: Rational numbers are numbers that can be expressed as a fraction of two integers, where the denominator is not zero. They can be terminating (e.g., 1/2 = 0.5) or repeating decimals (e.g., 1/3 = 0.333...). Rational numbers include integers and fractions.";
    };
    readonly Real: {
        readonly symbol: "ℝ";
        readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
    };
    readonly Prime: {
        readonly symbol: "ℙ";
        readonly description: "Prime numbers are natural numbers greater than 1 that have no divisors other than 1 and themselves. Examples include 2, 3, 5, 7, 11, and so on.";
    };
    readonly Transcendental: {
        readonly symbol: "𝕋";
        readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
    };
    readonly Algebraic: {
        readonly symbol: "𝔸";
        readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
    };
    readonly Complex: {
        readonly symbol: "ℝ";
        readonly description: "Complex numbers are numbers of the form a + bi, where a and b are real numbers and i is the imaginary unit. They include both real and imaginary numbers.";
    };
    readonly Irrational: {
        readonly symbol: "𝕀";
        readonly description: "Irrational numbers cannot be expressed as fractions or ratios of integers. They are non-repeating and non-terminating decimals. Famous examples include π (pi) and √2 (square root of 2).";
    };
    readonly Imaginary: {
        readonly symbol: "𝕚";
        readonly description: "Imaginary numbers are numbers that involve the imaginary unit, denoted by \"i,\" which is defined as the square root of -1. Numbers of the form a + bi, where a and b are real numbers, are called complex numbers.";
    };
};

/**
 * Enum for constants
 * @readonly
 * @enum
 */
declare const MathsConstants: {
    readonly e: {
        readonly value: 2.718281828459045;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly eulersNumber: {
        readonly value: 2.718281828459045;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly pi: {
        readonly value: 3.141592653589793;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly π: {
        readonly value: 3.141592653589793;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly ε: 0.0001;
    readonly epsilon: 0.0001;
    readonly τ0: {
        readonly value: 6.283185307179586;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly tau: {
        readonly value: 6.283185307179586;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly ϕ: {
        readonly value: 1.618033988749894;
        readonly type: {
            readonly symbol: "𝔸";
            readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
        };
    };
    readonly phi: {
        readonly value: 1.618033988749894;
        readonly type: {
            readonly symbol: "𝔸";
            readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
        };
    };
    readonly goldenRatio: {
        readonly value: 1.618033988749894;
        readonly type: {
            readonly symbol: "𝔸";
            readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
        };
    };
    readonly φ: {
        readonly value: 1.618033988749894;
        readonly type: {
            readonly symbol: "𝔸";
            readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
        };
    };
    readonly sqrt2: {
        readonly value: 1.414213562373095;
        readonly type: {
            readonly symbol: "𝔸";
            readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
        };
    };
    readonly sqrt3: {
        readonly value: 1.732050807568877;
        readonly type: {
            readonly symbol: "𝔸";
            readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
        };
    };
    readonly sqrt5: {
        readonly value: 2.236067977499789;
        readonly type: {
            readonly symbol: "𝔸";
            readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
        };
    };
    readonly silverRatio: {
        readonly value: 2.414213562373095;
        readonly type: {
            readonly symbol: "𝔸";
            readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
        };
    };
    readonly δ_S: {
        readonly value: 2.414213562373095;
        readonly type: {
            readonly symbol: "𝔸";
            readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
        };
    };
    readonly cubeRoot2: {
        readonly value: 1.259921049894873;
        readonly type: {
            readonly symbol: "𝔸";
            readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
        };
    };
    readonly cubeRoot3: {
        readonly value: 1.442249570307408;
        readonly type: {
            readonly symbol: "𝔸";
            readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
        };
    };
    readonly twelthRoot2: {
        readonly value: 1.059463094359295;
        readonly type: {
            readonly symbol: "𝔸";
            readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
        };
    };
    readonly liouvillesConstant: {
        readonly value: 0.110001;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly L0: {
        readonly value: 0.110001;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly supergoldenRatio: {
        readonly value: 1.465571231876768;
        readonly type: {
            readonly symbol: "𝔸";
            readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
        };
    };
    readonly ψ0: {
        readonly value: 1.465571231876768;
        readonly type: {
            readonly symbol: "𝔸";
            readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
        };
    };
    readonly µ0: {
        readonly value: 1.847759065022573;
        readonly type: {
            readonly symbol: "𝔸";
            readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
        };
    };
    readonly hexagonalLatticeConnectiveConstant: {
        readonly value: 1.847759065022573;
        readonly type: {
            readonly symbol: "𝔸";
            readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
        };
    };
    readonly keplerBouwkampConstant: {
        readonly value: 0.114942044853296;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly K0: {
        readonly value: 0.114942044853296;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly WallisConstant: {
        readonly value: 0.114942044853296;
        readonly type: {
            readonly symbol: "𝔸";
            readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
        };
    };
    readonly ln2: {
        readonly value: 0.693147180559945;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly lemniscateConstant: {
        readonly value: 2.622057554292119;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly ϖ: {
        readonly value: 2.622057554292119;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly eulersConstant: {
        readonly value: 0.577215664901532;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly γ0: {
        readonly value: 0.577215664901532;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly erdősBorweinConstant: {
        readonly value: 1.606695152415291;
        readonly type: {
            readonly symbol: "𝕀";
            readonly description: "Irrational numbers cannot be expressed as fractions or ratios of integers. They are non-repeating and non-terminating decimals. Famous examples include π (pi) and √2 (square root of 2).";
        };
    };
    readonly E: {
        readonly value: 1.606695152415291;
        readonly type: {
            readonly symbol: "𝕀";
            readonly description: "Irrational numbers cannot be expressed as fractions or ratios of integers. They are non-repeating and non-terminating decimals. Famous examples include π (pi) and √2 (square root of 2).";
        };
    };
    readonly omegaConstant: {
        readonly value: 0.567143290409783;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly Ω0: {
        readonly value: 0.567143290409783;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly apérysConstant: {
        readonly value: 1.202056903159594;
        readonly type: {
            readonly symbol: "𝕀";
            readonly description: "Irrational numbers cannot be expressed as fractions or ratios of integers. They are non-repeating and non-terminating decimals. Famous examples include π (pi) and √2 (square root of 2).";
        };
    };
    readonly ζ3: {
        readonly value: 1.202056903159594;
        readonly type: {
            readonly symbol: "𝕀";
            readonly description: "Irrational numbers cannot be expressed as fractions or ratios of integers. They are non-repeating and non-terminating decimals. Famous examples include π (pi) and √2 (square root of 2).";
        };
    };
    readonly laplaceLimit: {
        readonly value: 1.202056903159594;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly RamanujanSoldnerConstant: {
        readonly value: 1.451369234883381;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly μ1: {
        readonly value: 1.451369234883381;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly GausssConstant: {
        readonly value: 1.451369234883381;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly G0: {
        readonly value: 1.451369234883381;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly secondHermiteConstant: {
        readonly value: 1.154700538379251;
        readonly type: {
            readonly symbol: "𝔸";
            readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
        };
    };
    readonly γ1: {
        readonly value: 1.154700538379251;
        readonly type: {
            readonly symbol: "𝔸";
            readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
        };
    };
    readonly firstContinuedFractionConstant: {
        readonly value: 0.697774657964007;
        readonly type: {
            readonly symbol: "𝕀";
            readonly description: "Irrational numbers cannot be expressed as fractions or ratios of integers. They are non-repeating and non-terminating decimals. Famous examples include π (pi) and √2 (square root of 2).";
        };
    };
    readonly C_1: {
        readonly value: 0.697774657964007;
        readonly type: {
            readonly symbol: "𝕀";
            readonly description: "Irrational numbers cannot be expressed as fractions or ratios of integers. They are non-repeating and non-terminating decimals. Famous examples include π (pi) and √2 (square root of 2).";
        };
    };
    readonly RamanujansConstant: {
        readonly value: 26253741264076800;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly glaisherKinkelinConstant: {
        readonly value: 1.282427129100622;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly A0: {
        readonly value: 1.282427129100622;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly catalansConstant: {
        readonly value: 0.915965594177219;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly G1: {
        readonly value: 0.915965594177219;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly dottieNumber: {
        readonly value: 0.73908513321516;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly meisselMertensConstant: {
        readonly value: 0.261497212847642;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly M: {
        readonly value: 0.261497212847642;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly univeralParabolicConstant: {
        readonly value: 2.295587149392638;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly P0: {
        readonly value: 2.295587149392638;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly cahensConstant: {
        readonly value: 0.643410546288338;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly C1: {
        readonly value: 0.643410546288338;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly gelfondsConstant: {
        readonly value: 23.1406926327792;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly α0: {
        readonly value: 23.1406926327792;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly e_π: {
        readonly value: 23.1406926327792;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly gelfondSchneiderConstant: {
        readonly value: 2.665144142690225;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly two_sqrt2: {
        readonly value: 2.665144142690225;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly secondFavardConstant: {
        readonly value: 1.233700550136169;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly K_2: {
        readonly value: 1.233700550136169;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly goldenAngle: {
        readonly value: 2.399963229728653;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly g: {
        readonly value: 2.399963229728653;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly sierpińskisConstant: {
        readonly value: 2.584981759579253;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly K2: {
        readonly value: 2.584981759579253;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly landauRamanujanConstant: {
        readonly value: 0.76422365358922;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly K3: {
        readonly value: 0.76422365358922;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly firstNielesRamanujanConstant: {
        readonly value: 0.822467033424113;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly a_1: {
        readonly value: 0.822467033424113;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly giesekingConstant: {
        readonly value: 1.014941606409653;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly G2: {
        readonly value: 1.014941606409653;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly bernsteinsConstant: {
        readonly value: 0.280169499023869;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly β0: {
        readonly value: 0.280169499023869;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly brunsConstant: {
        readonly value: 1.902160583104;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly B_2: {
        readonly value: 1.902160583104;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly tribonacciConstant: {
        readonly value: 1.839286755214161;
        readonly type: {
            readonly symbol: "𝔸";
            readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
        };
    };
    readonly twinPrimesConstant: {
        readonly value: 0.660161815846869;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly C0_2: {
        readonly value: 0.660161815846869;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly plasticNumber: {
        readonly value: 1.324717957244746;
        readonly type: {
            readonly symbol: "𝔸";
            readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
        };
    };
    readonly ρ0: {
        readonly value: 1.324717957244746;
        readonly type: {
            readonly symbol: "𝔸";
            readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
        };
    };
    readonly blochsConstant: {
        readonly value: Range;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly B0: {
        readonly value: Range;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly Z_975: {
        readonly value: 1.959963984540054;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly landausConstant: {
        readonly value: Range;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly L1: {
        readonly value: Range;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly landausThirdConstant: {
        readonly value: Range;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly A1: {
        readonly value: Range;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly prouhetThueMorseConstant: {
        readonly value: 0.412454033640107;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly τ1: {
        readonly value: 0.412454033640107;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly golombDickmanConstant: {
        readonly value: 0.62432998854355;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly λ0: {
        readonly value: 0.62432998854355;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly lebesgueConstant: {
        readonly value: 0.989431273831146;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly c: {
        readonly value: 0.989431273831146;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly fellerTornierConstant: {
        readonly value: 0.661317049469622;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly C_FT: {
        readonly value: 0.661317049469622;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly champernowne10Constant: {
        readonly value: 0.123456789101112;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly C_10: {
        readonly value: 0.123456789101112;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly salemConstant: {
        readonly value: 1.176280818259917;
        readonly type: {
            readonly symbol: "𝔸";
            readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
        };
    };
    readonly σ_10: {
        readonly value: 1.176280818259917;
        readonly type: {
            readonly symbol: "𝔸";
            readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
        };
    };
    readonly khinchinsConstant: {
        readonly value: 2.685452001065306;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly K_0: {
        readonly value: 2.685452001065306;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly lévysConstant1: {
        readonly value: 1.186569110415625;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly β1: {
        readonly value: 1.186569110415625;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly lévysConstant2: {
        readonly value: 3.275822918721811;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly e_β: {
        readonly value: 3.275822918721811;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly copelandErdősConstant: {
        readonly value: 0.235711131719232;
        readonly type: {
            readonly symbol: "𝕀";
            readonly description: "Irrational numbers cannot be expressed as fractions or ratios of integers. They are non-repeating and non-terminating decimals. Famous examples include π (pi) and √2 (square root of 2).";
        };
    };
    readonly C_CE: {
        readonly value: 0.235711131719232;
        readonly type: {
            readonly symbol: "𝕀";
            readonly description: "Irrational numbers cannot be expressed as fractions or ratios of integers. They are non-repeating and non-terminating decimals. Famous examples include π (pi) and √2 (square root of 2).";
        };
    };
    readonly millsConstant: {
        readonly value: 1.30637788386308;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly A2: {
        readonly value: 1.30637788386308;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly gompertzConstant: {
        readonly value: 0.596347362323194;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly δ0: {
        readonly value: 0.596347362323194;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly deBrujinNewmanConstant: {
        readonly value: Range;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly Λ: {
        readonly value: Range;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly vanDerPauwConstant: {
        readonly value: 4.532360141827193;
        readonly type: {
            readonly symbol: "𝕀";
            readonly description: "Irrational numbers cannot be expressed as fractions or ratios of integers. They are non-repeating and non-terminating decimals. Famous examples include π (pi) and √2 (square root of 2).";
        };
    };
    readonly πln2: {
        readonly value: 4.532360141827193;
        readonly type: {
            readonly symbol: "𝕀";
            readonly description: "Irrational numbers cannot be expressed as fractions or ratios of integers. They are non-repeating and non-terminating decimals. Famous examples include π (pi) and √2 (square root of 2).";
        };
    };
    readonly magicAngle: {
        readonly value: 0.9553166181245092;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly Θ_m: {
        readonly value: 0.9553166181245092;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly artinsConstant: {
        readonly value: 0.373955813619202;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly C_Artin: {
        readonly value: 0.373955813619202;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly portersConstant: {
        readonly value: 1.467078079433975;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly C0: {
        readonly value: 1.467078079433975;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly stephensConstant: {
        readonly value: 0.575959968892945;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly lochsConstant: {
        readonly value: 0.970270114392033;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly L2: {
        readonly value: 0.970270114392033;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly deViccisTesseractConstant: {
        readonly value: 1.007434756884279;
        readonly type: {
            readonly symbol: "𝔸";
            readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
        };
    };
    readonly liebsSquareIceConstant: {
        readonly value: 1.539600717839002;
        readonly type: {
            readonly symbol: "𝔸";
            readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
        };
    };
    readonly nivensConstant: {
        readonly value: 1.705211140105367;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly C2: {
        readonly value: 1.705211140105367;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly regularPaperFoldingSequence: {
        readonly value: 0.850736188201867;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly P1: {
        readonly value: 0.850736188201867;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly reciprocalFibonacciConstant: {
        readonly value: 3.359885666243177;
        readonly type: {
            readonly symbol: "𝕀";
            readonly description: "Irrational numbers cannot be expressed as fractions or ratios of integers. They are non-repeating and non-terminating decimals. Famous examples include π (pi) and √2 (square root of 2).";
        };
    };
    readonly ψ1: {
        readonly value: 3.359885666243177;
        readonly type: {
            readonly symbol: "𝕀";
            readonly description: "Irrational numbers cannot be expressed as fractions or ratios of integers. They are non-repeating and non-terminating decimals. Famous examples include π (pi) and √2 (square root of 2).";
        };
    };
    readonly chvátalSankoffConstant: {
        readonly value: Range;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly γ_2: {
        readonly value: Range;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly feigenbaumConstant: {
        readonly value: 4.66920160910299;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly δ1: {
        readonly value: 4.66920160910299;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly chaitinConstant: {
        readonly value: 0.007874996997812;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly Ω1: {
        readonly value: 0.007874996997812;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly robbinsConstant: {
        readonly value: 0.661707182267176;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly Δ3: {
        readonly value: 0.661707182267176;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly weirerstrassConstant: {
        readonly value: 0.47494937998792;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly fransénRobinsonConstant: {
        readonly value: 2.807770242028519;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly F: {
        readonly value: 2.807770242028519;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly feingenbaumConstant: {
        readonly value: 2.502907875095892;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly α1: {
        readonly value: 2.502907875095892;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly secondDuBoisReymondConstant: {
        readonly value: 0.194528049465325;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly C1_2: {
        readonly value: 0.194528049465325;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly erdősTenenbaumFordconstant: {
        readonly value: 0.860713320559342;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly δ2: {
        readonly value: 0.860713320559342;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly conwaysConstant: {
        readonly value: 1.303577269034296;
        readonly type: {
            readonly symbol: "𝔸";
            readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
        };
    };
    readonly λ1: {
        readonly value: 1.303577269034296;
        readonly type: {
            readonly symbol: "𝔸";
            readonly description: "Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.";
        };
    };
    readonly hafnerSarnakMcCurleyConstant: {
        readonly value: 0.353236371854995;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly σ0: {
        readonly value: 0.353236371854995;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly backHousesConstant: {
        readonly value: 1.456074948582689;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly B1: {
        readonly value: 1.456074948582689;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly visanathConstant: {
        readonly value: 1.1319882487943;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly komornikLoretiConstant: {
        readonly value: 1.787231650182965;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly q: {
        readonly value: 1.787231650182965;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly embreeTrefethenConstant: {
        readonly value: 0.70258;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly β_asterix: {
        readonly value: 0.70258;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly heathBrownMorozConstant: {
        readonly value: 0.001317641154853;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly C3: {
        readonly value: 0.001317641154853;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly MRBConstant: {
        readonly value: 0.187859642462067;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly S: {
        readonly value: 0.187859642462067;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly primeConstant: {
        readonly value: 0.414682509851111;
        readonly type: {
            readonly symbol: "𝕀";
            readonly description: "Irrational numbers cannot be expressed as fractions or ratios of integers. They are non-repeating and non-terminating decimals. Famous examples include π (pi) and √2 (square root of 2).";
        };
    };
    readonly ρ1: {
        readonly value: 0.414682509851111;
        readonly type: {
            readonly symbol: "𝕀";
            readonly description: "Irrational numbers cannot be expressed as fractions or ratios of integers. They are non-repeating and non-terminating decimals. Famous examples include π (pi) and √2 (square root of 2).";
        };
    };
    readonly somosQuadraticSequenceConstant: {
        readonly value: 1.661687949633594;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly σ1: {
        readonly value: 1.661687949633594;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
    readonly logmarithmicCapacityOfTheUnitDisk: {
        readonly value: 0.590170299508048;
        readonly type: {
            readonly symbol: "𝕋";
            readonly description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.";
        };
    };
    readonly taniguchiConstant: {
        readonly value: 0.678234491917391;
        readonly type: {
            readonly symbol: "ℝ";
            readonly description: "Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.";
        };
    };
};

interface options$1 {
    accuracy?: number;
    cache?: boolean;
    centre?: number;
}
/**
 * Class containing logarithm functions
 */
declare class Logarithms {
    static logCache: Map<number, number>;
    static lnCache: Map<number, number>;
    /**
     * Calculates the natural logarithm of a given number using an iterative series approximation.
     *
     * @param {number} x - the number to calculate the natural logarithm of
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @param {number} [options.centre=1] - the centre value
     * @throws {Error} Invalid input. ln(x) is only defined for x > 0
     * @return {number} the natural logarithm of the given number
     */
    static ln(x: number, options?: options$1): number;
    /**
     * Calculates the logarithm of a number with a specified base to a given accuracy.
     *
     * @param {number} x - The number to calculate the logarithm of
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @param {number} [options.centre=1] - the centre value
     * @return {number} - The calculated logarithm of x with base base, with the specified accuracy.
     */
    static log(x: number, options?: options$1): number;
}

interface options {
    accuracy?: number;
    cache?: boolean;
}
interface singleOptions {
    cache?: boolean;
}
/**
 * Class containing all trigometric functions
 */
declare class TrigonometryFunctions {
    static sinCache: Map<number, number>;
    static cosCache: Map<number, number>;
    static tanCache: Map<number, number>;
    static asinCache: Map<number, number>;
    static acosCache: Map<number, number>;
    static atanCache: Map<number, number>;
    static cscCache: Map<number, number>;
    static secCache: Map<number, number>;
    static cotCache: Map<number, number>;
    static sinhCache: Map<number, number>;
    static coshCache: Map<number, number>;
    static tanhCache: Map<number, number>;
    static asinhCache: Map<number, number>;
    static acoshCache: Map<number, number>;
    static atanhCache: Map<number, number>;
    static cschCache: Map<number, number>;
    static sechCache: Map<number, number>;
    static cothCache: Map<number, number>;
    static acscCache: Map<number, number>;
    static asecCache: Map<number, number>;
    static acotCache: Map<number, number>;
    static acschCache: Map<number, number>;
    static asechCache: Map<number, number>;
    static acothCache: Map<number, number>;
    /**
     * Calculates the sine of an angle in degrees.
     * @param {number} x - the angle in degrees
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} the sine of the angle
     */
    static sin(x: number, options?: options): number;
    /**
     * Calculates the cosine of a given angle in degrees.
     * @param {number} x - the angle in degrees
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} - the cosine of the angle
     */
    static cos(x: number, options?: options): number;
    /**
     * Calculates the tangent of an angle in degrees.
     * @param {number} x - the angle in degrees
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} the tangent of the angle
     */
    static tan(x: number, options?: options): number;
    /**
     * Calculates the cosecant of an angle in degrees.
     * @param {number} x - the angle in degrees
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} the cosecant of the angle
     */
    static csc(x: number, options?: options): number;
    /**
     * Calculates the secant of a given angle in degrees.
     * @param {number} x - the angle in degrees
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} the secant of the given angle
     */
    static sec(x: number, options?: options): number;
    /**
     * Calculates the cotangent of a given angle in degrees.
     * @param {number} x -the angle in degrees
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} the cotangent of the angle
     */
    static cot(x: number, options?: options): number;
    /**
     * Calculates the hyperbolic sine of a number.
     * @param {number} x - the number to apply the function to
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @return {number} the hyperbolic sine of the input number
     */
    static sinh(x: number, options?: singleOptions): number;
    /**
     * Returns the hyperbolic cosine of a number.
     * @param {number} x - The number for which to return the hyperbolic cosine
     * @param {object} [options] - options
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} The hyperbolic cosine of the number
     */
    static cosh(x: number, options?: singleOptions): number;
    /**
     * Calculates the hyperbolic tangent of a number.
     * @param {number} x - The number to calculate the tangent of
     * @param {object} [options] - options
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} The hyperbolic tangent of the number
     */
    static tanh(x: number, options?: singleOptions): number;
    /**
     * Takes a number and returns the hyperbolic secant of that number.
     *
     * @param {number} x - the number whose hyperbolic secant is to be returned.
     * @param {object} [options] - options
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} the hyperbolic secant of the given number.
     */
    static sech(x: number, options?: singleOptions): number;
    /**
     * Calculates the hyperbolic cosecant of a given number.
     *
     * @param {number} x - The number to calculate the hyperbolic cosecant of.
     * @param {object} [options] - options
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} The hyperbolic cosecant of the given number.
     */
    static csch(x: number, options?: singleOptions): number;
    /**
     * Computes the hyperbolic cotangent of a number.
     *
     * @param {number} x - The number in radians for which to compute the hyperbolic cotangent.
     * @param {object} [options] - options
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} The hyperbolic cotangent of the given number.
     */
    static coth(x: number, options?: singleOptions): number;
    /**
     * Computes the arcsine of x using the given accuracy.
     * @param {number} x - The value to compute the arcsine for
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} The computed arcsine value
     */
    static asin(x: number, options?: options): number;
    /**
     * Calculates the arccosine of a given number with a specified accuracy.
     * @param {number} x - The number to get the arccosine of
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} The arccosine of the given number
     */
    static acos(x: number, options?: options): number;
    /**
     * Calculates the arctangent of a given number using the specified accuracy.
     * @param {number} x - The input number
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} The calculated arctangent value
     */
    static atan(x: number, options?: options): number;
    /**
     * Calculates the arccosecant of a given number using the Maclaurin series expansion.
     * @param {number} x - The value to calculate the arccsc of
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @returns {number} The arccosecant of the given number
     */
    static acsc(x: number, options?: options): number;
    /**
     * Calculates arcsecant of a number with given accuracy.
     * @param {number} x - the input value must be greater than or equal to 1
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} the arcsecant of x with given accuracy
     */
    static asec(x: number, options?: options): number;
    /**
     * Calculates the arccotangent of a number to a certain accuracy.
     * @param {number} x - the number to calculate the arccotangent of
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} the arccotangent of x to the specified accuracy
     */
    static acot(x: number, options?: options): number;
    /**
     * Computes the inverse hyperbolic sine (arcsinh) of a given number using the Maclaurin series expansion.
     * @param {number} x - The number to compute the inverse hyperbolic sine of
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} The inverse hyperbolic sine (arcsinh) of the given number
     */
    static asinh(x: number, options?: options): number;
    /**
     * Computes the inverse hyperbolic cosine of a number.
     * @param {number} x - A number whose inverse hyperbolic cosine is to be found
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} The inverse hyperbolic cosine of the given number
     */
    static acosh(x: number, options?: options): number;
    /**
     * Calculates the arctanh (inverse hyperbolic tangent) of a number up to a certain accuracy.
     * @param {number} x - The number to calculate the arctanh of
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} The arctanh value of the input number
     */
    static atanh(x: number, options?: options): number;
    /**
     * Calculates the inverse hyperbolic cosecant (arcsinh) of a number up to a given accuracy.
     * @param {number} x - the number to calculate the inverse hyperbolic cosecant of
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} the calculated inverse hyperbolic cosecant of the input number
     */
    static acsch(x: number, options?: options): number;
    /**
     * Computes the inverse hyperbolic secant of a number with a given accuracy.
     * There is no specific method of finding the inverse hyperbolic secant so this uses the Newton-Raphson method to approximate arcsech(x)
     * @param {number} x - the number to compute the inverse hyperbolic secant of
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} the inverse hyperbolic secant of x
     */
    static asech(x: number, options?: options): number;
    /**
     * Calculates the inverse hyperbolic cotangent of the given number.
     * @param {number} x - The number whose inverse hyperbolic cotangent is to be calculated
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} The inverse hyperbolic cotangent of the given number
     */
    static acoth(x: number, options?: options): number;
}

/**
 * @typedef {string} CacheType
 */
/**
 * Enum for cache types
 * @readonly
 * @enum {CacheType}
 */
declare const CacheEnum: {
    readonly Sin: "sin";
    readonly Cos: "cos";
    readonly Tan: "tan";
    readonly Asin: "asin";
    readonly Acos: "acos";
    readonly Atan: "atan";
    readonly Csc: "csc";
    readonly Sec: "sec";
    readonly Cot: "cot";
    readonly Sinh: "sinh";
    readonly Cosh: "cosh";
    readonly Tanh: "tanh";
    readonly Asinh: "asinh";
    readonly Acosh: "acosh";
    readonly Atanh: "atanh";
    readonly Csch: "csch";
    readonly Sech: "sech";
    readonly Coth: "coth";
    readonly Acsc: "acsc";
    readonly Asech: "asech";
    readonly Acoth: "acoth";
    readonly Asec: "asec";
    readonly Acot: "acot";
    readonly Acsch: "acsch";
    readonly Log: "log";
    readonly Ln: "ln";
};
/**
 * Class to add and read current cache
 */
declare class CacheManager {
    /**
     * Adds the input/output pair to the appropriate cache based on the given type.
     *
     * @param {CacheType | string} type - The type of cache to add the pair to.
     * @param {any} input - The input value of the pair
     * @param {any} output - The output value of the pair
     * @return {any} - The cache object that the pair was added to
     */
    static add(type: typeof CacheEnum | string, input: any, output: any): any;
    /**
     * Returns a cached value based on the input and the type of cache.
     *
     * @param {CacheType | string} type - The type of cache to retrieve the value from.
     * @param {any} input - The input value used to retrieve the cached value
     * @return {any} The cached value retrieved from the specified cache
     */
    static get(type: typeof CacheEnum | string, input: number): any;
    /**
     * Deletes the input/output pair from the appropriate cache based on the given type.
     *
     * @param {CacheType | string} type - The type of cache to delete the pair from
     * @param {any} input - The input value of the pair
     * @return {any} - The cache object that the pair was deleted from
     */
    static delete(type: typeof CacheEnum | string, input: any): any;
    /**
     * Clears the cache for a given trigonometric or logarithmic function.
     *
     * @param {CacheType | string} type - A string or CacheEnum representing the function to clear cache for
     * @return {void} undefined
     */
    static clear(type: typeof CacheEnum | string): void;
    /**
     * Clears all cached values
     *
     * @return {void} undefined
     */
    static clearAll(): void;
}

declare class PieChart {
    readonly Sections: {
        [key: string]: {
            percent: number;
            color: Color;
        };
    };
    constructor(Sections: {
        [key: string]: {
            percent: number;
            color: Color;
        };
    });
}
declare class BarChart {
    readonly Sections: {
        [key: string]: {
            percent: number;
            color: Color;
        };
    };
    readonly Orientation: 'horizontal' | 'vertical';
    constructor(sections: {
        [key: string]: {
            percent: number;
            color: Color;
        };
    }, orientation: 'horizontal' | 'vertical');
}
declare class ScatterGraph {
    readonly xName: string;
    readonly yName: string;
    readonly Values: {
        [x: number]: {
            [y: number]: {
                color: Color;
                name: string;
            };
        };
    };
    constructor(values: {
        [x: number]: {
            [y: number]: {
                color: Color;
                name: string;
            };
        };
    });
}
declare class LineGraph {
    readonly xName: string;
    readonly yName: string;
    readonly Values: {
        [lineName: string]: {
            color: Color;
            values: number[];
        };
    };
    constructor(values: {
        [lineName: string]: {
            color: Color;
            values: number[];
        };
    }, xName: string, yName: string);
}
declare class FrequencyGraph {
    readonly Values: {
        value: number;
        frequency: number;
        class: Range;
    }[];
    constructor(values: {
        value: number;
        frequency: number;
        class: Range;
    }[]);
}

export { Absolute, Averages, BarChart, CacheEnum, CacheManager, Circle, Color, ComplexNumber, Conversions, Equations, Factorial, Fraction, FrequencyGraph, Indices, LargeOperators, LineGraph, Logarithms, MathsConstants, Matrix, NumberTypes, PieChart, Range, ScatterGraph, TrigonometryFunctions, add, angleEnum, angleUnits, areaEnum, areaUnits, arrayReplace, concatenate, convertBase, divide, energyEnum, energyUnits, find, gcd, gcd2, isInAllArrays, lengthEnum, lengthUnits, massEnum, massUnits, multiply, physicsFormulae, pressureEnum, pressureUnits, speedEnum, speedUnits, subtract, temperatureEnum, temperatureUnits, timeEnum, timeUnits, volumeEnum, volumeUnits };
