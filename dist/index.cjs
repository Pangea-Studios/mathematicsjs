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
		if (
			typeof power === 'object' &&
			'numerator' in power &&
			'denominator' in power
		) {
			if (
				power.denominator &&
				power.numerator &&
				typeof power.numerator === 'number' &&
				typeof power.denominator === 'number'
			) {
				p = power.numerator / power.denominator;
			} else {
				throw new Error(
					'TypeError: power must be a number or an object with a denominator or numerator',
				);
			}
		} else if (typeof power === 'number') {
			p = power;
		} else
			throw new Error(
				'TypeError: power must be a number or an object with a denominator or numerator',
			);
		if (!power) p = 2;
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
	if (!options) options = {};
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
	if (!options) options = {};
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
	} else {
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
	constructor({ radius, diameter, circumference, area }) {
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
		} else if (isNaN(diameter) || diameter <= 0) {
			throw new Error('ValueError: Diameter must be greater than 0');
		} else if (isNaN(circumference) || circumference <= 0) {
			throw new Error('ValueError: Circumference must be greater than 0');
		} else if (isNaN(area) || area <= 0) {
			throw new Error('ValueError: Area must be greater than 0');
		}
		if (radius) {
			this.radius = radius;
			this.diameter = radius * 2;
			this.circumference = 2 * Math.PI * this.radius;
			this.area = Math.PI * this.radius * this.radius;
		} else if (diameter) {
			this.radius = diameter / 2;
			this.diameter = diameter;
			this.circumference = 2 * Math.PI * this.radius;
			this.area = Math.PI * this.radius * this.radius;
		} else if (circumference) {
			this.radius = circumference / Math.PI / 2;
			this.diameter = this.radius * 2;
			this.circumference = circumference;
			this.area = Math.PI * this.radius * this.radius;
		} else if (area) {
			this.radius = Math.sqrt(area / Math.PI);
			this.diameter = this.radius * 2;
			this.circumference = 2 * Math.PI * this.radius;
			this.area = area;
		} else {
			throw new Error(
				'ValueError: At least one of following: Radius, Diameter, Circumference, or Area must be specified',
			);
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
			throw new Error(
				'Matrices must have same dimensions to be subtracted',
			);
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
		} else if (
			typeof input === 'object' &&
			'numerator' in input &&
			'denominator' in input
		) {
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
			} else {
				total -= input;
			}
		} else if (
			typeof input === 'object' &&
			'numerator' in input &&
			'denominator' in input
		) {
			if (input === inputs[0] && total === null) {
				total = input.numerator / input.denominator;
			} else {
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
			} else {
				total *= input;
			}
		} else if (
			typeof input === 'object' &&
			'numerator' in input &&
			'denominator' in input
		) {
			if (input === inputs[0] && total === null) {
				total = input.numerator / input.denominator;
			} else {
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
			} else {
				total /= input;
			}
		} else if (
			typeof input === 'object' &&
			'numerator' in input &&
			'denominator' in input
		) {
			if (input === inputs[0] && total === null) {
				total = input.numerator / input.denominator;
			} else {
				total /= input.numerator / input.denominator;
			}
		}
	}
	return total;
}

class physicsFormulae {}

/**
 * @typedef {string} TemperatureType
 * @typedef {string} LengthType
 * @typedef {string} AngleType
 * @typedef {string} MassType
 * @typedef {string} VolumeType
 */
/**
 * Enum for temperature measurements
 * @readonly
 * @enum {TemperatureType}
 */
const temperatureEnum = {
	Kelvin: 'KELVIN',
	Celsius: 'CELSIUS',
	Fahrenheit: 'FAHRENHEIT',
};
/**
 * Enum for length measurements
 * @readonly
 * @enum {LengthType}
 */
const lengthEnum = {
	Millimeters: 'MILLIMETERS',
	Decimeters: 'DECIMETERS',
	Centimeters: 'CENTIMETERS',
	Meters: 'METERS',
	Kilometers: 'KILOMETERS',
	Micrometers: 'MICROMETERS',
	Nanometers: 'NANOMETERS',
	Picometers: 'PICOMETERS',
	Inches: 'INCHES',
	Feet: 'FEET',
	Yards: 'YARDS',
	Miles: 'MILES',
	NauticalMiles: 'NAUTICAL_MILES',
	Paces: 'PACES',
};
/**
 * Enum for angle measurements
 * @readonly
 * @enum {AngleType}
 */
const angleEnum = {
	Degrees: 'DEGREES',
	Radians: 'RADIANS',
	Gradians: 'GRADIANS',
	Minutes: 'MINUTES',
	Seconds: 'SECONDS',
};
/**
 * Enum for mass measurements
 * @readonly
 * @enum {MassType}
 */
const massEnum = {
	Grams: 'GRAMS',
	Kilograms: 'KILOGRAMS',
	Milligrams: 'MILLIGRAMS',
	Micrograms: 'MICROGRAMS',
	Nanograms: 'NANOGRAMS',
	Pounds: 'POUNDS',
	Ounces: 'OUNCES',
	Stone: 'STONE',
	ImperialTons: 'IMPERIAL_TONS',
	USTons: 'US_TONS',
	Tonnes: 'TONNES',
	Picograms: 'PICOGRAMS',
};
/**
 * Enum for volume measurements
 * @readonly
 * @enum {VolumeType}
 */
const volumeEnum = {
	CubicMeters: 'CUBIC_METERS',
	CubicFeet: 'CUBIC_FEET',
	CubicYards: 'CUBIC_YARDS',
	CubicInches: 'CUBIC_INCHES',
	CubicCentimeters: 'CUBIC_CENTIMETERS',
	CubicMillimeters: 'CUBIC_MILLIMETERS',
	CubicMicrometers: 'CUBIC_MICROMETERS',
	CubicNanometers: 'CUBIC_NANOMETERS',
	CubicPicometers: 'CUBIC_PICOMETERS',
	CubicHectometers: 'CUBIC_HECTOMETERS',
	CubicKilometers: 'CUBIC_KILOMETERS',
	CubicDecimeters: 'CUBIC_DECIMETERS',
	Liters: 'LITERS',
	Milliliters: 'MILLILITERS',
	ImperialGallons: 'IMPERIAL_GALLONS',
	USLiquidGallons: 'US_LIQUID_GALLONS',
	ImperialTeaspoons: 'IMPERIAL_TEASPOONS',
	ImperialTablespoons: 'IMPERIAL_TABLESPOONS',
	ImperialCups: 'IMPERIAL_CUPS',
	ImperialPints: 'IMPERIAL_PINTS',
	ImperialQuarts: 'IMPERIAL_QUARTS',
	USFluidQuarts: 'US_LIQUID_QUARTS',
	ImperialFluidOunces: 'IMPERIAL_FLUID_OUNCES',
	USTeaspoons: 'US_TEASPOONS',
	USTablespoons: 'US_TABLESPOONS',
	FluidOunces: 'FLUID_OUNCES',
	USLegalCups: 'US_LEGAL_CUPS',
	USLiquidPints: 'US_LIQUID_PINTS',
};
/**
 * Class containing all conversions.
 */
class Conversions {
	/**
	 * Converts a length value from one unit to another.
	 *
	 * @param {number} value - The value to be converted.
	 * @param {LengthType | string} fromUnit - The unit to convert from.
	 * @param {LengthType | string} toUnit - The unit to convert to.
	 * @throws {Error} - If the conversion is not possible or invalid unit.
	 * @return {number} - The converted value.
	 */
	static convertLength(value, fromUnit, toUnit) {
		// Convert input to meters
		let meters;
		switch (fromUnit) {
			case 'MILLIMETERS':
				meters = value / 1000;
				break;
			case 'DECIMETERS':
				meters = value / 10;
				break;
			case 'CENTIMETERS':
				meters = value / 100;
				break;
			case 'METERS':
				meters = value;
				break;
			case 'KILOMETERS':
				meters = value * 1000;
				break;
			case 'MICROMETERS':
				meters = value / 1000000;
				break;
			case 'NANOMETERS':
				meters = value / 1000000000;
				break;
			case 'PICOMETERS':
				meters = value / 1000000000000;
				break;
			case 'INCHES':
				meters = value / 39.3701;
				break;
			case 'FEET':
				meters = value / 3.28084;
				break;
			case 'YARDS':
				meters = value / 1.09361;
				break;
			case 'MILES':
				meters = value * 1609.344;
				break;
			case 'NAUTICAL_MILES':
				meters = value * 1852;
				break;
			case 'PACES':
				meters = value * 0.762;
				break;
			default:
				throw new Error(`Unknown unit: ${fromUnit}`);
		}
		// Convert meters to output unit
		let output;
		switch (toUnit) {
			case 'MILLIMETERS':
				output = meters * 1000;
				break;
			case 'DECIMETERS':
				output = meters * 10;
				break;
			case 'CENTIMETERS':
				output = meters * 100;
				break;
			case 'METERS':
				output = meters;
				break;
			case 'KILOMETERS':
				output = meters / 1000;
				break;
			case 'MICROMETERS':
				output = meters * 1000000;
				break;
			case 'NANOMETERS':
				output = meters * 1000000000;
				break;
			case 'PICOMETERS':
				output = meters * 1000000000000;
				break;
			case 'INCHES':
				output = meters * 39.3701;
				break;
			case 'FEET':
				output = meters * 3.28084;
				break;
			case 'YARDS':
				output = meters * 1.09361;
				break;
			case 'MILES':
				output = meters / 1609.344;
				break;
			case 'NAUTICAL_MILES':
				output = meters / 1852;
				break;
			case 'PACES':
				output = meters / 0.762;
				break;
			default:
				throw new Error(`Unknown unit: ${toUnit}`);
		}
		return output;
	}
	/**
	 * Converts a temperature value from one unit to another.
	 *
	 * @param {number} value - The temperature value to convert.
	 * @param {TemperatureType | string} fromUnit - The unit of the input value.
	 * @param {TemperatureType | string} toUnit - The desired output unit.
	 * @throws {Error} - If the conversion is not possible or invalid unit.
	 * @return {number} The temperature value converted to the desired unit.
	 */
	static convertTemperature(value, fromUnit, toUnit) {
		// Convert input to Kelvin
		let kelvin;
		switch (fromUnit) {
			case 'KELVIN':
				kelvin = value;
				break;
			case 'CELSIUS':
				kelvin = value + 273.15;
				break;
			case 'FAHRENHEIT':
				kelvin = (value + 459.67) * (5 / 9);
				break;
			default:
				throw new Error(`Unknown unit: ${fromUnit}`);
		}
		// Convert Kelvin to output unit
		let output;
		switch (toUnit) {
			case 'KELVIN':
				output = kelvin;
				break;
			case 'CELSIUS':
				output = kelvin - 273.15;
				break;
			case 'FAHRENHEIT':
				output = kelvin * (9 / 5) - 459.67;
				break;
			default:
				throw new Error(`Unknown unit: ${toUnit}`);
		}
		return output;
	}
	/**
	 * Converts an angle value from one unit of measurement to another.
	 *
	 * @param {number} value - The value of the angle to be converted.
	 * @param {AngleType | string} fromUnit - The unit of measurement of the input angle.
	 * @param {AngleType | string} toUnit - The unit of measurement to which the angle needs to be converted.
	 * @throws {Error} - If the conversion is not possible or invalid unit.
	 * @return {number} The value of the input angle converted to the specified unit of measurement.
	 */
	static convertAngle(value, fromUnit, toUnit) {
		// Convert input to degrees
		let degrees;
		switch (fromUnit) {
			case 'DEGREES':
				degrees = value;
				break;
			case 'RADIANS':
				degrees = (value * 180) / Math.PI;
				break;
			case 'GRADIANS':
				degrees = value * 0.9;
				break;
			case 'MINUTES':
				degrees = value / 60;
				break;
			case 'SECONDS':
				degrees = value / 3600;
				break;
			default:
				throw new Error(`Unknown unit: ${fromUnit}`);
		}
		// Convert degrees to output unit
		let output;
		switch (toUnit) {
			case 'DEGREES':
				output = degrees;
				break;
			case 'RADIANS':
				output = (degrees * Math.PI) / 180;
				break;
			case 'GRADIANS':
				output = degrees / 0.9;
				break;
			case 'MINUTES':
				output = degrees * 60;
				break;
			case 'SECONDS':
				output = degrees * 3600;
				break;
			default:
				throw new Error(`Unknown unit: ${toUnit}`);
		}
		return output;
	}
	/**
	 * Converts a mass value from one unit to another.
	 *
	 * @param {number} value - The value to be converted.
	 * @param {MassType | string} fromUnit - The unit to convert from.
	 * @param {MassType | string} toUnit - The unit to convert to.
	 * @throws {Error} - If the conversion is not possible or invalid unit.
	 * @return {number} The converted value.
	 */
	static convertMass(value, fromUnit, toUnit) {
		// Convert input to grams
		let grams;
		switch (fromUnit) {
			case 'GRAMS':
				grams = value;
				break;
			case 'KILOGRAMS':
				grams = value * 1000;
				break;
			case 'MILLIGRAMS':
				grams = grams / 1000;
				break;
			case 'MICROGRAMS':
				grams = value / 1000000;
				break;
			case 'NANOGRAMS':
				grams = value / 1000000000;
				break;
			case 'PICOGRAMS':
				grams = value / 1000000000000;
				break;
			case 'POUNDS':
				grams = value * 453.592;
				break;
			case 'OUNCES':
				grams = value * 28.3495;
				break;
			case 'US_TONS':
				grams = value * 907200;
				break;
			case 'STONES':
				grams = value * 6350.293;
				break;
			case 'TONNES':
				grams = value * 1000000;
				break;
			case 'IMPERIAL_TONS':
				grams = value * 1016047;
				break;
			default:
				throw new Error(`Unknown unit: ${fromUnit}`);
		}
		// Convert mass to output unit
		let output;
		switch (toUnit) {
			case 'GRAMS':
				output = grams;
				break;
			case 'KILOGRAMS':
				output = grams / 1000;
				break;
			case 'TONNES':
				output = grams / 1000000;
				break;
			case 'MILLIGRAMS':
				output = grams * 1000;
				break;
			case 'MICROGRAMS':
				output = grams * 1000000;
				break;
			case 'NANOGRAMS':
				output = grams * 1000000000;
				break;
			case 'PICOGRAMS':
				output = grams * 1000000000000;
				break;
			case 'POUNDS':
				output = grams / 453.592;
				break;
			case 'OUNCES':
				output = grams / 28.3495;
				break;
			case 'USTONS':
				output = grams / 907200;
				break;
			case 'STONES':
				output = grams / 6350.293;
				break;
			case 'IMPERIAL_TONS':
				output = grams / 1016047;
				break;
			default:
				throw new Error(`Unknown unit: ${toUnit}`);
		}
		return output;
	}
	/**
	 * Converts a volume value from one unit to another.
	 *
	 * @param {number} value - The value to be converted.
	 * @param {VolumeType | string} fromUnit - The unit to convert from.
	 * @param {VolumeType | string} toUnit - The unit to convert to.
	 * @throws {Error} - If the conversion is not possible or invalid unit.
	 * @return {number} The converted value.
	 */
	static convertVolume(value, fromUnit, toUnit) {
		let litres;
		switch (fromUnit) {
			case 'LITRES':
				litres = value;
				break;
			case 'CUBIC_METERS':
				litres = value * 1000;
				break;
			case 'CUBIC_FEET':
				litres = value * 28.3168;
				break;
			case 'CUBIC_INCHES':
				litres = value * 0.0163871;
				break;
			case 'CUBIC_CENTIMETERS':
				litres = value * 0.001;
				break;
			case 'CUBIC_DECIMETERS':
				litres = value;
				break;
			case 'CUBIC_MILLIMETERS':
				litres = value * 0.000001;
				break;
			case 'CUBIC_MICROMETERS':
				litres = value * 0.000000000000001;
				break;
			case 'CUBIC_NANOMETERS':
				litres = value * 0.000000000000000000000001;
				break;
			case 'CUBIC_PICOMETERS':
				litres = value * 0.000000000000000000000000000000001;
				break;
			case 'CUBIC_KILOMETERS':
				litres = value * 1000000000000;
				break;
			case 'CUBIC_HECTOMETERS':
				litres = value * 1000000000;
				break;
			case 'CUBIC_YARDS':
				litres = value / 1760;
				break;
			case 'MILLILITERS':
				litres = value * 0.001;
				break;
			case 'IMPERIAL_GALLONS':
				litres = value * 4.54609;
				break;
			case 'IMPERIAL_PINTS':
				litres = value * 0.568261;
				break;
			case 'IMPERIAL_QUARTS':
				litres = value * 1.13652;
				break;
			case 'IMPERIAL_CUPS':
				litres = value * 0.284131;
				break;
			case 'IMPERIAL_FLUID_OUNCE':
				litres = value * 0.0284131;
				break;
			case 'IMPERIAL_TEASPOONS':
				litres = value * 0.00591939;
				break;
			case 'IMPERIAL_TABLESPOONS':
				litres = value * 0.0177582;
				break;
			case 'US_LIQUID_GALLONS':
				litres = value * 3.78541;
				break;
			case 'US_LIQUID_PINTS':
				litres = value * 0.473176;
				break;
			case 'US_LIQUID_QUARTS':
				litres = value * 0.946353;
				break;
			case 'US_LEGAL_CUPS':
				litres = value * 0.24;
				break;
			case 'US_TABLESPOONS':
				litres = value * 0.0147868;
				break;
			case 'US_TEASPOONS':
				litres = value * 0.00492892;
				break;
			case 'FLUID_OUNCE':
				litres = value * 0.00295735;
				break;
			default:
				throw new Error(`Unknown unit: ${fromUnit}`);
		}
		let output;
		switch (toUnit) {
			case 'LITRES':
				output = litres;
				break;
			case 'MILLILITRES':
				output = litres * 1000;
				break;
			case 'CUBIC_METERS':
				output = litres * 0.001;
				break;
			case 'CUBIC_FEET':
				output = litres * 0.0353147;
				break;
			case 'CUBIC_INCHES':
				output = litres * 61.0237;
				break;
			case 'CUBIC_CENTIMETERS':
				output = litres * 1000;
				break;
			case 'CUBIC_MILLIMETERS':
				output = litres * 1000000;
				break;
			case 'CUBIC_MICROMETERS':
				output = litres * 1000000000000000;
				break;
			case 'CUBIC_NANOMETERS':
				output = litres * 1000000000000000000000000;
				break;
			case 'CUBIC_PICOMETERS':
				output = litres * 1000000000000000000000000000000000;
				break;
			case 'CUBIC_DECIMETERS':
				output = litres;
				break;
			case 'CUBIC_KILOMETERS':
				output = litres * 0.000000000001;
				break;
			case 'CUBIC_HECTOMETERS':
				output = litres * 0.000000001;
				break;
			case 'CUBIC_YARDS':
				output = litres * 0.00130795;
				break;
			case 'IMPERIAL_GALLONS':
				output = litres * 4.54609;
				break;
			case 'IMPERIAL_PINTS':
				output = litres * 1.75975;
				break;
			case 'IMPERIAL_QUARTS':
				output = litres * 0.879877;
				break;
			case 'IMPERIAL_CUPS':
				output = litres * 3.51951;
				break;
			case 'IMPERIAL_FLUID_OUNCES':
				output = litres * 35.1951;
				break;
			case 'IMPERIAL_TEASPOONS':
				output = litres * 168.936;
				break;
			case 'IMPERIAL_TABLESPOONS':
				output = litres * 56.3121;
				break;
			case 'US_LIQUID_GALLONS':
				output = litres * 0.264172;
				break;
			case 'US_LIQUID_PINTS':
				output = litres * 2.11338;
				break;
			case 'US_LIQUID_QUARTS':
				output = litres * 1.05669;
				break;
			case 'US_LEGAL_CUPS':
				output = litres * 4.16667;
				break;
			case 'US_TABLESPOONS':
				output = litres * 67.628;
				break;
			case 'US_TEASPOONS':
				output = litres * 0.00492892;
				break;
			case 'FLUID_OUNCE':
				output = litres * 33.814;
				break;
			default:
				throw new Error(`Unknown unit: ${toUnit}`);
		}
		return output;
	}
}

exports.Circle = Circle;
exports.Conversions = Conversions;
exports.Fraction = Fraction;
exports.Indices = Indices;
exports.Matrix = Matrix;
exports.add = add;
exports.angleEnum = angleEnum;
exports.convertBase = convertBase;
exports.divide = divide;
exports.gcd = gcd;
exports.gcd2 = gcd2;
exports.lengthEnum = lengthEnum;
exports.massEnum = massEnum;
exports.multiply = multiply;
exports.physicsFormulae = physicsFormulae;
exports.subtract = subtract;
exports.temperatureEnum = temperatureEnum;
exports.volumeEnum = volumeEnum;
