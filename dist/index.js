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

class Matrix {
	constructor(rows, columns, values) {
		this.rows = rows;
		this.columns = columns;
		this.values = values;
	}
	/**
	 * Multiplies two matrices of different sizes.
	 *
	 * @param {number[][]} matrixA - The first matrix to multiply.
	 * @param {number[][]} matrixB - The second matrix to multiply.
	 * @returns {number[][]} The resulting matrix from the multiplication.
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
	 * @param {number[][]} matrixA - The first matrix to add.
	 * @param {number[][]} matrixB - The second matrix to add.
	 * @returns {number[][]} The resulting matrix from the addition.
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
	 * @param {number[][]} matrixA - The first matrix to subtract.
	 * @param {number[][]} matrixB - The second matrix to subtract.
	 * @returns {number[][]} The resulting matrix from the subtraction.
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
	 * @param {number[][]} matrix - The matrix to multiply.
	 * @param {number} scalar - The scalar to multiply the matrix by.
	 * @returns {number[][]} The resulting matrix from the multiplication.
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
	 * @param {number[][]} matrix - The matrix to divide.
	 * @param {number} scalar - The scalar to divide the matrix by.
	 * @returns {number[][]} The resulting matrix from the division.
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
 * @param {OperationsInput[]} inputs - An array of OperationsInput objects.
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
 * @param {OperationsInput[]} inputs - An array of numbers and fractions to subtract.
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
 * @param {OperationsInput[]} inputs - An array of numbers and/or fractions to multiply.
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
 * @param {OperationsInput[]} inputs - An array of numbers and/or objects with a numerator and denominator.
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

class physicsFormulae {
	/**
	 * Calculates the speed given a distance and time.
	 *
	 * @param {number} distance - the distance traveled
	 * @param {number} time - the time taken to travel the distance
	 * @return {number} the speed in units per hour
	 */
	static Speed(distance, time) {
		return distance / time;
	}
	/**
	 * Calculates the distance traveled based on speed and time.
	 *
	 * @param {number} speed - the speed of the object in units per hour
	 * @param {number} time - the time taken by the object to travel in hours
	 * @return {number} the distance traveled by the object in units
	 */
	static Distance(speed, time) {
		return speed * time;
	}
	/**
	 * Calculates the time it takes to travel a certain distance at a given speed.
	 *
	 * @param {number} distance - The distance to be traveled.
	 * @param {number} speed - The speed at which to travel.
	 * @return {number} The time it takes to travel the distance at the given speed.
	 */
	static Time(distance, speed) {
		return distance / speed;
	}
	/**-------------------------------------------------------------------------------------*/
	/**
	 * Calculates pressure given force and area.
	 *
	 * @param {number} force - the amount of force applied
	 * @param {number} area - the area over which the force is applied
	 * @return {number} the pressure calculated by dividing force by area
	 */
	static Pressure(force, area) {
		return force / area;
	}
	/**
	 * Calculates the force exerted given a pressure and area.
	 *
	 * @param {number} pressure - the pressure applied.
	 * @param {number} area - the area on which the pressure is applied.
	 * @return {number} the force exerted.
	 */
	static Force(pressure, area) {
		return pressure * area;
	}
	/**
	 * Calculates the area given the pressure and force.
	 *
	 * @param {number} pressure - the pressure applied
	 * @param {number} force - the force applied
	 * @return {number} the area calculated from the given pressure and force
	 */
	static Area(pressure, force) {
		return force / pressure;
	}
	/**-------------------------------------------------------------------------------------*/
	/**
	 * Calculates the density of an object given its mass and volume.
	 *
	 * @param {number} mass - the mass of the object in kilograms
	 * @param {number} volume - the volume of the object in cubic meters
	 * @return {number} the density of the object in kilograms per cubic meter
	 */
	static Density(mass, volume) {
		return mass / volume;
	}
	/**
	 * Returns the mass of an object given its density and volume.
	 *
	 * @param {number} density - the density of the object
	 * @param {number} volume - the volume of the object
	 * @return {number} the mass of the object
	 */
	static Mass(density, volume) {
		return density * volume;
	}
	/**
	 * Calculates the volume given the density and mass.
	 *
	 * @param {number} density - the density of the object
	 * @param {number} mass - the mass of the object
	 * @return {number} the calculated volume
	 */
	static Volume(density, mass) {
		return density * mass;
	}
}

class Conversions {
	/**
	 * Converts meters to other length units.
	 *
	 * @param {number} meters - The length in meters to convert.
	 * @return {object} An object containing the converted lengths in inches, feet, yards, miles, nautical miles and paces.
	 */
	static metersToOtherLengths(meters) {
		const inches = meters * 39.3701;
		const feet = meters * 3.28084;
		const yards = meters * 1.09361;
		const miles = meters / 1609.344;
		const nauticalMiles = meters / 1852;
		const paces = meters / 0.762;
		return { inches, feet, yards, miles, nauticalMiles, paces };
	}
	/**
	 * Converts inches to other length units.
	 *
	 * @param {number} inches - The length in inches to convert.
	 * @return {object} An object containing the converted lengths in meters, feet, yards, miles, nautical miles and paces.
	 */
	static inchesToOtherLengths(inches) {
		const meters = inches / 39.3701;
		const feet = inches / 12;
		const yards = inches / 36;
		const miles = inches / 63360;
		const nauticalMiles = inches / 72913.386;
		const paces = inches / 29.5;
		return { meters, feet, yards, miles, nauticalMiles, paces };
	}
	/**
	 * Converts feet to other length units.
	 *
	 * @param {number} feet - The length in feet to convert.
	 * @return {object} An object containing the converted lengths in meters, inches, yards, miles, nautical miles and paces.
	 */
	static feetToOtherLengths(feet) {
		const meters = feet / 3.28084;
		const inches = feet * 12;
		const yards = feet / 3;
		const miles = feet / 5280;
		const nauticalMiles = feet / 6076.12;
		const paces = feet / 2.5;
		return { meters, inches, yards, miles, nauticalMiles, paces };
	}
	/**
	 * Converts yards to other length units.
	 *
	 * @param {number} yards - The length in yards to convert.
	 * @return {object} An object containing the converted lengths in meters, inches, feet, miles, nautical miles and paces.
	 */
	static yardsToOtherLengths(yards) {
		const meters = yards / 1.09361;
		const inches = yards * 36;
		const feet = yards * 3;
		const miles = yards / 1760;
		const nauticalMiles = yards / 2025.372;
		const paces = yards / 0.9144;
		return { meters, inches, feet, miles, nauticalMiles, paces };
	}
	/**
	 * Converts miles to other length units.
	 *
	 * @param {number} miles - The length in miles to convert.
	 * @return {object} An object containing the converted lengths in meters, inches, feet, yards, nautical miles and paces.
	 */
	static milesToOtherLengths(miles) {
		const meters = miles * 1609.344;
		const inches = miles * 63360;
		const feet = miles * 5280;
		const yards = miles * 1760;
		const nauticalMiles = miles / 1.15078;
		const paces = miles * 2112;
		return { meters, inches, feet, yards, nauticalMiles, paces };
	}
	/**
	 * Converts nautical miles to other length units.
	 *
	 * @param {number} nauticalMiles - The length in nautical miles to convert.
	 * @return {object} An object containing the converted lengths in meters, inches, feet, yards, miles and paces.
	 */
	static nauticalMilesToOtherLengths(nauticalMiles) {
		const meters = nauticalMiles * 1852;
		const inches = nauticalMiles * 72913.386;
		const feet = nauticalMiles * 6076.12;
		const yards = nauticalMiles * 2025.372;
		const miles = nauticalMiles * 1.15078;
		const paces = nauticalMiles * 6076.11549;
		return { meters, inches, feet, yards, miles, paces };
	}
	/**
	 * Converts paces to other length units.
	 *
	 * @param {number} paces - The length in paces to convert.
	 * @return {object} An object containing the converted lengths in meters, inches, feet, yards, miles and nautical miles.
	 */
	static pacesToOtherLengths(paces) {
		const meters = paces * 0.762;
		const inches = paces * 29.5;
		const feet = paces * 2.5;
		const yards = paces * 0.9144;
		const miles = paces / 2112;
		const nauticalMiles = paces / 6076.11549;
		return { meters, inches, feet, yards, miles, nauticalMiles };
	}
	/**
	 * Converts Kelvin to other temperature units.
	 *
	 * @param {number} kelvin - The temperature in Kelvin to convert.
	 * @return {object} An object containing the converted temperatures in Celsius and Fahrenheit.
	 */
	static kelvinToOtherTemperatures(kelvin) {
		const celsius = kelvin - 273.15;
		const fahrenheit = celsius * (9 / 5) + 32;
		return { celsius, fahrenheit };
	}
	/**
	 * Converts Celsius to other temperature units.
	 *
	 * @param {number} celsius - The temperature in Celsius to convert.
	 * @return {object} An object containing the converted temperatures in Kelvin and Fahrenheit.
	 */
	static celsiusToOtherTemperatures(celsius) {
		const kelvin = celsius + 273.15;
		const fahrenheit = celsius * (9 / 5) + 32;
		return { kelvin, fahrenheit };
	}
	/**
	 * Converts Fahrenheit to other temperature units.
	 *
	 * @param {number} fahrenheit - The temperature in Fahrenheit to convert.
	 * @return {object} An object containing the converted temperatures in Celsius and Kelvin.
	 */
	static fahrenheitToOtherTemperatures(fahrenheit) {
		const celsius = (fahrenheit - 32) * (5 / 9);
		const kelvin = celsius + 273.15;
		return { celsius, kelvin };
	}
	/**
	 * Converts degrees to other angle units.
	 *
	 * @param {number} degrees - The angle in degrees to convert.
	 * @return {object} An object containing the converted angles in gradians, radians, minutes and seconds.
	 */
	static degreesToOtherAngles(degrees) {
		const gradians = (degrees * 10) / 9;
		const radians = (degrees * Math.PI) / 180;
		const minutes = degrees * 60;
		const seconds = degrees * 3600;
		return { gradians, radians, minutes, seconds };
	}
	/**
	 * Converts gradians to other angle units.
	 *
	 * @param {number} gradians - The angle in gradians to convert.
	 * @return {object} An object containing the converted angles in degrees, radians, minutes and seconds.
	 */
	static gradiansToOtherAngles(gradians) {
		const degrees = (gradians * 9) / 10;
		const radians = (degrees * Math.PI) / 180;
		const minutes = degrees * 60;
		const seconds = degrees * 3600;
		return { degrees, radians, minutes, seconds };
	}
	/**
	 * Converts radians to other angle units.
	 *
	 * @param {number} radians - The angle in radians to convert.
	 * @return {object} An object containing the converted angles in degrees, gradians, minutes and seconds.
	 */
	static radiansToOtherAngles(radians) {
		const degrees = (radians * 180) / Math.PI;
		const gradians = (degrees * 10) / 9;
		const minutes = degrees * 60;
		const seconds = degrees * 3600;
		return { degrees, gradians, minutes, seconds };
	}
	/**
	 * Converts minutes to other angle units.
	 *
	 * @param {number} minutes - The angle in minutes to convert.
	 * @return {object} An object containing the converted angles in degrees, gradians, radians and seconds.
	 */
	static minutesToOtherAngles(minutes) {
		const degrees = minutes / 60;
		const gradians = (degrees * 10) / 9;
		const radians = (degrees * Math.PI) / 180;
		const seconds = degrees * 3600;
		return { degrees, gradians, radians, seconds };
	}
	/**
	 * Converts seconds to other angle units.
	 *
	 * @param {number} seconds - The angle in seconds to convert.
	 * @return {object} An object containing the converted angles in degrees, gradians, radians and minutes.
	 */
	static secondsToOtherAngles(seconds) {
		const degrees = seconds / 3600;
		const gradians = (degrees * 10) / 9;
		const radians = (degrees * Math.PI) / 180;
		const minutes = degrees * 60;
		return { degrees, gradians, radians, minutes };
	}
}

export {
	Circle,
	Conversions,
	Fraction,
	Indices,
	Matrix,
	add,
	convertBase,
	divide,
	gcd,
	gcd2,
	multiply,
	physicsFormulae,
	subtract,
};
