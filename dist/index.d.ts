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
declare function convertBase(
	number: number | string,
	fromBase: number,
	toBase: number,
): string | number;

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
	constructor({
		radius,
		diameter,
		circumference,
		area,
	}: {
		radius?: number;
		diameter?: number;
		circumference?: number;
		area?: number;
	});
}

interface MatrixConstructor {
	rows: number;
	columns: number;
	values: number[][];
	new (rows: number, columns: number, values: number[][]): Matrix;
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
	 * @param {number} rows - The number of rows
	 * @param {number} columns - The number of columns
	 * @param {Array.<Array.<number>>} values - The values of the matrix
	 */
	constructor(rows: number, columns: number, values: number[][]);
	/**
	 * Calculates the product of two matrices.
	 * @param {MatrixConstructor} other - The matrix to multiply with.
	 * @return {Matrix} A new matrix that is the product of this matrix and other.
	 * @throws {Error} If the number of columns of this matrix does not match the number of rows of the other matrix.
	 */
	multiply(other: MatrixConstructor): Matrix;
	/**
	 * Adds the values of two matrices together.
	 * @param {MatrixConstructor} other - The matrix to add to this one.
	 * @return {Matrix} A new matrix with the added values.
	 * @throws {Error} If matrices do not have the same number of rows and columns.
	 */
	add(other: MatrixConstructor): Matrix;
	/**
	 * Divides this matrix by another one element-wise and returns the result as a new matrix.
	 * @param {MatrixConstructor} other - the matrix to divide by
	 * @throws {Error} When matrices do not have the same dimensions or when dividing by 0
	 * @return {Matrix} A new matrix that is the result of the element-wise division
	 */
	divide(other: MatrixConstructor): Matrix;
	/**
	 * Subtract two matrices of the same dimensions and return the result.
	 * @param {MatrixConstructor} other - the matrix to subtract from this one
	 * @return {Matrix} a new matrix that is the result of the subtraction
	 * @throws {Error} if matrices do not have the same dimensions
	 */
	subtract(other: MatrixConstructor): Matrix;
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
}

declare type OperationsInput =
	| number
	| {
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

declare class physicsFormulae {}

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
	readonly Picometers: 'pm';
	readonly Nanometers: 'nm';
	readonly Micrometers: 'μm';
	readonly Millimeters: 'mm';
	readonly Centimeters: 'cm';
	readonly Decimeters: 'dm';
	readonly Meters: 'm';
	readonly Hectometers: 'hm';
	readonly Kilometers: 'km';
	readonly Inches: 'in';
	readonly Feet: 'ft';
	readonly Yards: 'yd';
	readonly Miles: 'mi';
	readonly NauticalMiles: 'nmi';
	readonly AstronomicalUnit: 'AU';
	readonly Parsec: 'pc';
	readonly Light_Years: 'LY';
	readonly Fathoms: 'ftm';
	readonly Furlongs: 'fur';
};
/**
 * Enum for energy units
 * @readonly
 * @enum
 */
declare const energyUnits: {
	readonly Joules: 'J';
	readonly Electronvolt: 'eV';
	readonly Kiloelectronvolts: 'KeV';
	readonly Megaelectronvolts: 'MeV';
	readonly Gigaelectronvolts: 'GeV';
	readonly Teraelectronvolts: 'TeV';
	readonly Watts: 'W';
	readonly WattHours: 'Wh';
	readonly Kilowatts: 'kW';
	readonly KilowattHours: 'kWh';
	readonly Calories: 'cal';
	readonly Kilocalories: 'kcal';
	readonly BritishThermalUnits: 'BTU';
	readonly USTherms: 'UST';
	readonly Footpounds: 'ft-lb';
};
/**
 * Enum for volume units
 * @readonly
 * @enum
 */
declare const volumeUnits: {
	readonly Liters: 'L';
	readonly Milliliters: 'mL';
	readonly CubicMeters: 'm³';
	readonly CubicCentimeters: 'cm³';
	readonly CubicMillimeters: 'mm³';
	readonly CubicInches: 'in³';
	readonly CubicFeet: 'ft³';
	readonly USLiquidGallons: 'galUS';
	readonly USLiquidQuarts: 'qtUS';
	readonly USLiquidPints: 'ptUS';
	readonly USLegalCups: 'cupUS';
	readonly USTeaspoons: 'tspUS';
	readonly USTablespoons: 'tbspUS';
	readonly Fluid_Ounces: 'oz';
	readonly ImperialGallons: 'galImp';
	readonly ImperialQuarts: 'qtImp';
	readonly ImperialPints: 'ptImp';
	readonly ImperialCups: 'cupsImp';
	readonly ImperialFluidOunces: 'ozImp';
	readonly ImperialTeaspoons: 'tspImp';
	readonly ImperialTablespoons: 'tbspImp';
};
/**
 * Enum for angle units
 * @readonly
 * @enum
 */
declare const angleUnits: {
	readonly Arcminutes: "'";
	readonly Arcseconds: '"';
	readonly Degrees: '°';
	readonly Radians: 'rad';
	readonly Gradians: 'grad';
	readonly Milliradians: 'mrad';
	readonly Revolutions: 'rev';
	readonly Quadrants: 'q';
	readonly Sextants: 's';
	readonly Signs: 'sgn';
	readonly Octants: 'o';
};
/**
 * Enum for speed units
 * @readonly
 * @enum
 */
declare const speedUnits: {
	readonly MetersPerSecond: 'm/s';
	readonly FeetPerSecond: 'ft/s';
	readonly MilesPerHour: 'mi/h';
	readonly KilometersPerHour: 'km/h';
	readonly Knots: 'kn';
};
/**
 * Enum for time units
 * @readonly
 * @enum
 */
declare const timeUnits: {
	readonly Picoseconds: 'ps';
	readonly Nanoseconds: 'ns';
	readonly Microseconds: 'μs';
	readonly Milliseconds: 'ms';
	readonly Seconds: 's';
	readonly Minutes: 'm';
	readonly Hours: 'h';
	readonly Days: 'd';
	readonly Weeks: 'w';
	readonly Fortnights: 'f';
};
/**
 * Enum for area units
 * @readonly
 * @enum
 */
declare const areaUnits: {
	readonly SquareMeters: 'm²';
	readonly SquareKilometers: 'km²';
	readonly SquareInches: 'in²';
	readonly SquareFeet: 'ft²';
	readonly SquareYards: 'yd²';
	readonly SquareMiles: 'mi²';
	readonly Acres: 'acre';
	readonly Hectares: 'ha';
};
/**
 * Enum for mass units
 * @readonly
 * @enum
 */
declare const massUnits: {
	readonly Picograms: 'pg';
	readonly Nanograms: 'ng';
	readonly Micrograms: 'μg';
	readonly Milligrams: 'mg';
	readonly Grams: 'g';
	readonly Kilograms: 'kg';
	readonly MetricTonnes: 't';
	readonly Carats: 'c';
	readonly Long_Tons: 'Lt';
	readonly Short_Tons: 'St';
	readonly Ounces: 'oz';
	readonly Pounds: 'lb';
	readonly Stone: 'st';
	readonly Earth_Masses: 'M⊕';
	readonly Solar_Masses: 'M☉';
};
/**
 * Enum for temperature units
 * @readonly
 * @enum
 */
declare const temperatureUnits: {
	readonly Celsius: '°C';
	readonly Fahrenheit: '°F';
	readonly Kelvin: 'K';
};
/**
 * Enum for pressure units
 * @readonly
 * @enum
 */
declare const pressureUnits: {
	readonly Bars: 'bar';
	readonly Millibars: 'mbar';
	readonly Pascals: 'Pa';
	readonly Hectopascals: 'hPa';
	readonly Kilopascals: 'kPa';
	readonly Pounds_per_Square_Inch: 'psi';
	readonly Torr: 'Torr';
};
/**
 * Enum for energy measurements
 * @readonly
 * @enum {EnergyType}
 */
declare const energyEnum: {
	readonly Joules: 'JOULES';
	readonly Electronvolt: 'ELECTRONVOLT';
	readonly Kiloelectronvolts: 'KILOELECTRONVOLTS';
	readonly Megaelectronvolts: 'MEGAELECTRONVOLTS';
	readonly Gigaelectronvolts: 'GIGAELECTRONVOLTS';
	readonly Teraelectronvolts: 'TERAELECTRONVOLTS';
	readonly Watts: 'WATTS';
	readonly WattHours: 'WATT_HOURS';
	readonly Kilowatts: 'KILOWATTS';
	readonly KilowattHours: 'KILOWATT_HOURS';
	readonly Calories: 'CALORIES';
	readonly Kilocalories: 'KILOCALORIES';
	readonly BritishThermalUnits: 'BRITISH_THERMAL_UNITS';
	readonly US_Therms: 'US_THERMS';
	readonly Foot_pounds: 'FOOT-POUNDS';
};
/**
 * Enum for volume measurements
 * @readonly
 * @enum {VolumeType}
 */
declare const volumeEnum: {
	readonly Liters: 'LITERS';
	readonly Milliliters: 'MILLILITERS';
	readonly CubicMeters: 'CUBIC_METERS';
	readonly CubicCentimeters: 'CUBIC_CENTIMETERS';
	readonly CubicMillimeters: 'CUBIC_MILLIMETERS';
	readonly CubicInches: 'CUBIC_INCHES';
	readonly CubicFeet: 'CUBIC_FEET';
	readonly USLiquidGallons: 'US_LIQUID_GALLONS';
	readonly USLiquidQuarts: 'US_LIQUID_QUARTS';
	readonly USLiquidPints: 'US_LIQUID_PINTS';
	readonly USLegalCups: 'US_LEGAL_CUPS';
	readonly USTeaspoons: 'US_TEASPOONS';
	readonly USTablespoons: 'US_TABLESPOONS';
	readonly FluidOunces: 'FLUID_OUNCES';
	readonly ImperialGallons: 'IMPERIAL_GALLONS';
	readonly ImperialQuarts: 'IMPERIAL_QUARTS';
	readonly ImperialPints: 'IMPERIAL_PINTS';
	readonly ImperialCups: 'IMPERIAL_CUPS';
	readonly ImperialFluidOunces: 'IMPERIAL_FLUID_OUNCES';
	readonly ImperialTeaspoons: 'IMPERIAL_TEASPOONS';
	readonly ImperialTablespoons: 'IMPERIAL_TABLESPOONS';
};
/**
 * Enum for angle measurements
 * @readonly
 * @enum {AngleType}
 */
declare const angleEnum: {
	readonly Arcminutes: 'ARCMINUTES';
	readonly Arcseconds: 'ARCSECONDS';
	readonly Degrees: 'DEGREES';
	readonly Radians: 'RADIANS';
	readonly Gradians: 'GRADIANS';
	readonly Milliradians: 'MILLIRADIANS';
	readonly Revolutions: 'REVOLUTIONS';
	readonly Quadrants: 'QUADRANTS';
	readonly Sextants: 'SEXTANTS';
	readonly Signs: 'SIGNS';
	readonly Octants: 'OCTANTS';
};
declare const lengthEnum: {
	readonly Picometers: 'PICOMETERS';
	readonly Nanometers: 'NANOMETERS';
	readonly Micrometers: 'MICROMETERS';
	readonly Millimeters: 'MILLIMETERS';
	readonly Centimeters: 'CENTIMETERS';
	readonly Decimeters: 'DECIMETERS';
	readonly Meters: 'METERS';
	readonly Hectometers: 'HECTOMETERS';
	readonly Kilometers: 'KILOMETERS';
	readonly AstronomicalUnit: 'ASTRONOMICAL_UNIT';
	readonly Parsec: 'PARSEC';
	readonly LightYears: 'LIGHT_YEARS';
	readonly Inches: 'INCHES';
	readonly Feet: 'FEET';
	readonly Yards: 'YARDS';
	readonly Miles: 'MILES';
	readonly NauticalMiles: 'NAUTICAL_MILES';
	readonly Fathoms: 'FATHOMS';
	readonly Furlongs: 'FURLONGS';
};
/**
 * Enum for speed measurements
 * @readonly
 * @enum {SpeedType}
 */
declare const speedEnum: {
	readonly MetersPerSecond: 'METERS_PER_SECOND';
	readonly FeetPerSecond: 'FEET_PER_SECOND';
	readonly MilesPerHour: 'MILES_PER_HOUR';
	readonly KilometersPerHour: 'KILOMETERS_PER_HOUR';
	readonly Knots: 'KNOTS';
};
/**
 * Enum for time measurements
 * @readonly
 * @enum {TimeType}
 */
declare const timeEnum: {
	readonly Picoseconds: 'PICOSECONDS';
	readonly Nanoseconds: 'NANOSECONDS';
	readonly Microseconds: 'MICROSECONDS';
	readonly Milliseconds: 'MILLISECONDS';
	readonly Seconds: 'SECONDS';
	readonly Minutes: 'MINUTES';
	readonly Hours: 'HOURS';
	readonly Days: 'DAYS';
	readonly Weeks: 'WEEKS';
	readonly Fortnights: 'FORTNIGHTS';
};
/**
 * Enum for area measurements
 * @readonly
 * @enum {AreaType}
 */
declare const areaEnum: {
	readonly SquareMeters: 'SQUARE_METERS';
	readonly SquareKilometers: 'SQUARE_KILOMETERS';
	readonly SquareInches: 'SQUARE_INCHES';
	readonly SquareFeet: 'SQUARE_FEET';
	readonly SquareYards: 'SQUARE_YARDS';
	readonly SquareMiles: 'SQUARE_MILES';
	readonly Acres: 'ACRES';
	readonly Hectares: 'HECTARES';
};
/**
 * Enum for mass measurements
 * @readonly
 * @enum {MassType}
 */
declare const massEnum: {
	readonly Picograms: 'PICOGRAMS';
	readonly Nanograms: 'NANOGRAMS';
	readonly Micrograms: 'MICROGRAMS';
	readonly Milligrams: 'MILLIGRAMS';
	readonly Grams: 'GRAMS';
	readonly Kilograms: 'KILOGRAMS';
	readonly MetricTonnes: 'METRIC_TONNES';
	readonly Carats: 'CARATS';
	readonly Long_Tons: 'LONG_TONS';
	readonly Short_Tons: 'SHORT_TONS';
	readonly Ounces: 'OUNCES';
	readonly Pounds: 'POUNDS';
	readonly Stone: 'STONE';
	readonly EarthMasses: 'EARTH_MASSES';
	readonly SolarMasses: 'SOLAR_MASSES';
};
/**
 * Enum for temperature measurements
 * @readonly
 * @enum {TemperatureType}
 */
declare const temperatureEnum: {
	readonly Celsius: 'CELSIUS';
	readonly Fahrenheit: 'FAHRENHEIT';
	readonly Kelvin: 'KELVIN';
};
/**
 * Enum for pressure measurements
 * @readonly
 * @enum {PressureType}
 */
declare const pressureEnum: {
	readonly Bars: 'BARS';
	readonly Millibars: 'MILLIBARS';
	readonly Pascals: 'PASCALS';
	readonly Hectopascals: 'HECTOPASCALS';
	readonly Kilopascals: 'KILOPASCALS';
	readonly PoundsPerSquareInch: 'POUNDS_PER_SQUARE_INCH';
	readonly Torr: 'TORR';
};
declare class Conversions {
	/**
	 * Converts an angle value from one unit to another.
	 *
	 * @param {number} value - The value to be converted
	 * @param {AngleType | string} fromUnit - The current unit of the value. Must be a string from angleEnum
	 * @param {AngleType | string} toUnit - The desired unit to convert the value to. Must be a string from angleEnum
	 * @return {number} The converted angle value in the desired unit
	 */
	static convertAngle(
		value: number,
		fromUnit: typeof angleEnum | string,
		toUnit: typeof angleEnum | string,
	): number;
	/**
	 * Converts a length value from one unit to another.
	 *
	 * @param {number} value - The value to convert
	 * @param {LengthType | string} fromUnit - The unit to convert from
	 * @param {LengthType | string} toUnit - The unit to convert to
	 * @return {number} The converted value
	 */
	static convertLength(
		value: number,
		fromUnit: typeof lengthEnum | string,
		toUnit: typeof lengthEnum | string,
	): number;
	/**
	 * Converts a time value from one unit to another.
	 *
	 * @param {number} value - The value to convert
	 * @param {TimeType | string} fromUnit - The unit of the input value
	 * @param {TimeType | string} toUnit - The desired unit of the output value
	 * @returns {number} - The converted value in the desired unit
	 */
	static convertTime(
		value: number,
		fromUnit: typeof timeEnum | string,
		toUnit: typeof timeEnum | string,
	): number;
	/**
	 * Converts a mass value from one unit to another.
	 *
	 * @param {number} value - The mass value to be converted
	 * @param {MassType | string} fromUnit - The unit to convert from
	 * @param {MassType | string} toUnit - The unit to convert to
	 * @return {number} The converted mass value
	 */
	static convertMass(
		value: number,
		fromUnit: typeof massEnum | string,
		toUnit: typeof massEnum | string,
	): number;
	/**
	 * Convert an energy value from one unit to another.
	 *
	 * @param {number} value - the energy value to convert
	 * @param {EnergyType | string} fromUnit - the unit of the input value
	 * @param {EnergyType | string} toUnit - the desired output unit
	 * @return {number} - the converted energy value
	 */
	static convertEnergy(
		value: number,
		fromUnit: typeof energyEnum | string,
		toUnit: typeof energyEnum | string,
	): number;
	/**
	 * Converts a temperature value from one unit to another.
	 *
	 * @param {number} value - The temperature value to be converted
	 * @param {TemperatureType | string} fromUnit - The unit of the input temperature value
	 * @param {TemperatureType | string} toUnit - The unit of the output temperature value
	 * @return {number} The converted temperature value in the desired unit
	 */
	static convertTemperature(
		value: number,
		fromUnit: typeof temperatureEnum | string,
		toUnit: typeof temperatureEnum | string,
	): number;
	/**
	 * Converts a speed value from one unit to another.
	 *
	 * @param {number} value - the value to be converted
	 * @param {SpeedType | string} fromUnit - the unit to convert from
	 * @param {SpeedType | string} toUnit - the unit to convert to
	 * @return {number} - the converted value
	 */
	static convertSpeed(
		value: number,
		fromUnit: typeof speedEnum | string,
		toUnit: typeof speedEnum | string,
	): number;
	/**
	 * Converts a pressure value from one unit to another.
	 *
	 * @param {number} value - The pressure value to convert
	 * @param {PressureType | string} fromUnit - The unit to convert from
	 * @param {PressureType | string} toUnit - The unit to convert to
	 * @return {number} The converted pressure value
	 */
	static convertPressure(
		value: number,
		fromUnit: typeof pressureEnum | string,
		toUnit: typeof pressureEnum | string,
	): number;
	/**
	 * Converts an area measurement from one unit to another.
	 *
	 * @param {number} value - The numerical value of the area measurement in the fromUnit
	 * @param {AreaType | string} fromUnit - The unit to convert from
	 * @param {AreaType | string} toUnit - The unit to convert to
	 * @return {number} - The numerical value of the converted area measurement in the toUnit
	 */
	static convertArea(
		value: number,
		fromUnit: typeof areaEnum | string,
		toUnit: typeof areaEnum | string,
	): number;
	/**
	 * Converts an volume measurement from one unit to another.
	 *
	 * @param {number} value - The numerical value of the volume measurement in the fromUnit
	 * @param {VolumeType | string} fromUnit - The unit to convert from
	 * @param {VolumeType | string} toUnit - The unit to convert to
	 * @return {number} - The numerical value of the converted volume measurement in the toUnit
	 */
	static convertVolume(
		value: number,
		fromUnit: typeof volumeEnum | string,
		toUnit: typeof volumeEnum | string,
	): number;
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

declare class Equations {
	/**
	 * Evaluates the given mathematical equation string, using the provided variables object,
	 * and returns the result. If the equation is empty or null, returns 'Error'. If there are
	 * mismatched brackets, returns 'Error: Mismatched Brackets'.
	 *
	 * @param {string} equation - the mathematical equation to be evaluated, funcs(sin, cos, tan etc) coming soon
	 * @param {object} variables - an object containing variable names and their values
	 * @return {number|string} - the result of the evaluation or 'Error'/'Error: Mismatched Brackets'
	 */
	static evaluate(equation: string, variables: object): any;
	static solve(equation: string, variable: string): string;
	static rearrange(equation: string, makeSubject: string): string;
	/**
	 * Calculates the binomial coefficient of two given numbers.
	 *
	 * @param {number} n - The total number of items.
	 * @param {number} k - The number of items to choose.
	 * @return {number} The calculated binomial coefficient.
	 */
	static binomialCoefficient(n: number, k: number): number;
}

declare class Summation {
	/**
	 * Calculates the additive summation of an equation for a given range and interval.
	 *
	 * @param {string} equation - The equation to be evaluated, can use variable 'n'.
	 * @param {number} start - The starting value for variable 'n'.
	 * @param {number} end - The ending value for variable 'n'.
	 * @param {number} interval - The increment between each value of 'n'.
	 * @return {number} The result of the additive summation of the equation for the given range and interval.
	 */
	static AdditiveSummation(
		equation: string,
		start: number,
		end: number,
		interval: number,
	): number;
	/**
	 * Calculates the multiplicative summation of the given equation for a given range.
	 *
	 * @param {string} equation - the equation to be evaluated
	 * @param {number} start - the start value of the range
	 * @param {number} end - the end value of the range
	 * @param {number} interval - the interval between each value in the range
	 * @return {number} the result of the multiplicative summation
	 */
	static MultiplicativeSummation(
		equation: string,
		start: number,
		end: number,
		interval: number,
	): number;
}

/**
 * Enum for constants
 * @readonly
 * @enum
 */
declare const Constants: {
	readonly e: 2.718281828459045;
	readonly pi: 3.141592653589793;
	readonly π: 3.141592653589793;
};

declare class Logarithms {
	/**
	 * Calculates the natural logarithm of a given number using an iterative series approximation.
	 *
	 * @param {number} x - the number to calculate the natural logarithm of
	 * @param {number} [accuracy=10] - the number of terms to use in the series approximation (default of 10)
	 * @throws {Error} Invalid input. ln(x) is only defined for x > 0
	 * @return {number} the natural logarithm of the given number
	 */
	static ln(x: number, accuracy?: number): number;
	/**
	 * Calculates the logarithm of a number with a specified base to a given accuracy.
	 *
	 * @param {number} x - The number to calculate the logarithm of.
	 * @param {number} [base = 10] - The base of the logarithm (default of 10)
	 * @param {number} [accuracy = 10] - The number of decimal places to calculate to (default of 10)
	 * @return {number} - The calculated logarithm of x with base base, with the specified accuracy.
	 */
	static log(x: number, base?: number, accuracy?: number): number;
}

declare const sineList: number[];
declare class TrigonometryFunctions {
	/**
	 * Calculates the sine of an angle in degrees.
	 * @param {number} x - the angle in degrees
	 * @param {number} [accuracy=10] - precision of the result (default of 10)
	 * @return {number} the sine of the angle
	 */
	static sin(x: number, accuracy?: number): number;
	/**
	 * Calculates the cosine of a given angle in degrees.
	 * @param {number} x - the angle in degrees
	 * @param {number} [accuracy=10] - the number of decimal places to calculate the result (default of 10)
	 * @return {number} - the cosine of the angle
	 */
	static cos(x: number, accuracy?: number): number;
	/**
	 * Calculates the tangent of a number using the sine and cosine functions.
	 * @param {number} x - The input number in radians
	 * @param {number} [accuracy=10] - The number of decimal places to calculate the result to (default of 10)
	 * @return {number} The tangent of the input number, rounded to the specified accuracy
	 */
	static tan(x: number, accuracy?: number): number;
	/**
	 * Calculates the cosecant of an angle in radians with a given accuracy.
	 * @param {number} x - the angle in radians
	 * @param {number} [accuracy=10] - the number of decimal places to approximate the result to (default of 10)
	 * @return {number} the cosecant of the angle with the given accuracy
	 */
	static csc(x: number, accuracy?: number): number;
	/**
	 * Calculates the secant of a given angle in radians.
	 * @param {number} x - The angle in radians
	 * @param {number} [accuracy=10] - The number of decimal places to round the result to (default of 10)
	 * @return {number} The secant of the given angle
	 */
	static sec(x: number, accuracy?: number): number;
	/**
	 * Calculates the cotangent of a given angle in radians.
	 * @param {number} x - The angle in radians
	 * @param {number} [accuracy=10] - The accuracy of the result (default of 10)
	 * @return {number} The cotangent of the angle
	 */
	static cot(x: number, accuracy?: number): number;
	/**
	 * Calculates the hyperbolic sine of a number.
	 * @param {number} x - The number to apply the function to
	 * @return {number} The hyperbolic sine of the input number
	 */
	static sinh(x: number): number;
	/**
	 * Returns the hyperbolic cosine of a number.
	 * @param {number} x - The number for which to return the hyperbolic cosine
	 * @return {number} The hyperbolic cosine of the number
	 */
	static cosh(x: number): number;
	/**
	 * Calculates the hyperbolic tangent of a number.
	 * @param {number} x - The number to calculate the tangent of
	 * @return {number} The hyperbolic tangent of the number
	 */
	static tanh(x: number): number;
	/**
	 * Computes the arcsine of x using the given accuracy.
	 * @param {number} x - The value to compute the arcsine for
	 * @param {number} [accuracy=10] - The accuracy to use in the computation (default of 10)
	 * @return {number} The computed arcsine value
	 */
	static arcsin(x: number, accuracy?: number): number;
	/**
	 * Calculates the arccosine of a given number with a specified accuracy.
	 * @param {number} x - The number to get the arccosine of
	 * @param {number} [accuracy=10] - The number of iterations to perform (default of 10)
	 * @return {number} The arccosine of the given number
	 */
	static arccos(x: number, accuracy?: number): number;
	/**
	 * Calculates the arctangent of a given number using the specified accuracy.
	 * @param {number} x - The input number
	 * @param {number} [accuracy=10] - The accuracy of the resulting calculation (default of 10)
	 * @return {number} The calculated arctangent value
	 */
	static arctan(x: number, accuracy?: number): number;
	/**
	 * Calculates the arccsc of a given number using the Maclaurin series expansion.
	 * @param {number} x - The value to calculate the arccsc of
	 * @param {number} [accuracy=10] - The number of terms to use in the Maclaurin series expansion (default of 10)
	 * @returns {number} The arccsc of the given number
	 */
	static arccsc(x: number, accuracy?: number): number;
	/**
	 * Calculates arcsecant of a number with given accuracy.
	 * @param {number} x - the input value must be greater than or equal to 1
	 * @param {number} [accuracy=10] - the number of iterations to perform for accuracy (default of 10)
	 * @return {number} the arcsecant of x with given accuracy
	 */
	static arcsec(x: number, accuracy?: number): number;
	/**
	 * Calculates the arccotangent of a number to a certain accuracy.
	 * @param {number} x - the number to calculate the arccotangent of
	 * @param {number} [accuracy=10] - the number of iterations to perform in the approximation (default of 10)
	 * @return {number} the arccotangent of x to the specified accuracy
	 */
	static arccot(x: number, accuracy?: number): number;
	/**
	 * Computes the inverse hyperbolic sine (arcsinh) of a given number using the Maclaurin series expansion.
	 * @param {number} x - The number to compute the inverse hyperbolic sine of
	 * @param {number} [accuracy=10] - The number of terms to use in the Maclaurin series expansion (default of 10)
	 * @return {number} The inverse hyperbolic sine (arcsinh) of the given number
	 */
	static arcsinh(x: number, accuracy?: number): number;
	/**
	 * Computes the inverse hyperbolic cosine of a number.
	 * @param {number} x - A number whose inverse hyperbolic cosine is to be found
	 * @param {number} [accuracy=10] - The number of iterations to perform (default of 10)
	 * @return {number} The inverse hyperbolic cosine of the given number
	 */
	static arccosh(x: number, accuracy?: number): number;
	/**
	 * Calculates the arctanh (inverse hyperbolic tangent) of a number up to a certain accuracy.
	 * @param {number} x - The number to calculate the arctanh of
	 * @param {number} [accuracy=10] - The number of iterations to perform to approximate the arctanh value (default of 10)
	 * @return {number} The arctanh value of the input number
	 */
	static arctanh(x: number, accuracy?: number): number;
	/**
	 * Calculates the inverse hyperbolic cosecant (arcsinh) of a number up to a given accuracy.
	 * @param {number} x - the number to calculate the inverse hyperbolic cosecant of
	 * @param {number} [accuracy=10] - (optional) the number of iterations to use in the approximation (default of 10)
	 * @return {number} the calculated inverse hyperbolic cosecant of the input number
	 */
	static arcscsh(x: number, accuracy?: number): number;
	/**
	 * Computes the inverse hyperbolic secant of a number with a given accuracy.
	 * There is no specific method of finding the inverse hyperbolic secant so this uses the Newton-Raphson method to approximate arcsech(x)
	 * @param {number} x - the number to compute the inverse hyperbolic secant of
	 * @param {number} [accuracy=10] - the number of decimal places to return in the result (default of 10)
	 * @return {number} the inverse hyperbolic secant of x
	 */
	static arcsecsh(x: number, accuracy?: number): number;
	/**
	 * Calculates the inverse hyperbolic cotangent of the given number.
	 * @param {number} x - The number whose inverse hyperbolic cotangent is to be calculated
	 * @return {number} The inverse hyperbolic cotangent of the given number
	 */
	static arccoth(x: number): number;
}

export {
	Absolute,
	Averages,
	Circle,
	ComplexNumber,
	Constants,
	Conversions,
	Equations,
	Factorial,
	Fraction,
	Indices,
	Logarithms,
	Matrix,
	MatrixConstructor,
	Summation,
	TrigonometryFunctions,
	add,
	angleEnum,
	angleUnits,
	areaEnum,
	areaUnits,
	convertBase,
	divide,
	energyEnum,
	energyUnits,
	gcd,
	gcd2,
	lengthEnum,
	lengthUnits,
	massEnum,
	massUnits,
	multiply,
	physicsFormulae,
	pressureEnum,
	pressureUnits,
	sineList,
	speedEnum,
	speedUnits,
	subtract,
	temperatureEnum,
	temperatureUnits,
	timeEnum,
	timeUnits,
	volumeEnum,
	volumeUnits,
};
