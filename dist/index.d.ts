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
declare function convertBase(
	number: number | string,
	fromBase: number,
	toBase: number,
): string | number;

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

declare class Matrix {
	columns: number;
	rows: number;
	values: number[][];
	constructor(rows: number, columns: number, values: number[][]);
	/**
	 * Multiplies two matrices of different sizes.
	 *
	 * @param {number[][]} matrixA - The first matrix to multiply.
	 * @param {number[][]} matrixB - The second matrix to multiply.
	 * @returns {number[][]} The resulting matrix from the multiplication.
	 * @throws {Error} If the matrices cannot be multiplied.
	 */
	multiplyMatrices(matrixA: number[][], matrixB: number[][]): number[][];
	/**
	 * Adds two matrices.
	 *
	 * @param {number[][]} matrixA - The first matrix to add.
	 * @param {number[][]} matrixB - The second matrix to add.
	 * @returns {number[][]} The resulting matrix from the addition.
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
	 * @param {number[][]} matrixA - The first matrix to subtract.
	 * @param {number[][]} matrixB - The second matrix to subtract.
	 * @returns {number[][]} The resulting matrix from the subtraction.
	 * @throws {Error} If the matrices have different dimensions.
	 */
	subtractMatrices(matrixA: number[][], matrixB: number[][]): number[][];
	/**
	 * Multiplies a matrix by a scalar.
	 *
	 * @param {number[][]} matrix - The matrix to multiply.
	 * @param {number} scalar - The scalar to multiply the matrix by.
	 * @returns {number[][]} The resulting matrix from the multiplication.
	 */
	multiplyMatrixByScalar(matrix: number[][], scalar: number): number[][];
	/**
	 * Divides a matrix by a scalar.
	 *
	 * @param {number[][]} matrix - The matrix to divide.
	 * @param {number} scalar - The scalar to divide the matrix by.
	 * @returns {number[][]} The resulting matrix from the division.
	 * @throws {Error} If the scalar is zero.
	 */
	divideMatrixByScalar(matrix: number[][], scalar: number): number[][];
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
 * @param {OperationsInput[]} inputs - An array of OperationsInput objects.
 * @return {number} The sum of all numbers and fractions.
 */
declare function add(inputs: OperationsInput[]): number;
/**
 * Subtracts all the numbers and fractions in the given array of operations.
 *
 * @param {OperationsInput[]} inputs - An array of numbers and fractions to subtract.
 * @return {number} The result of subtracting all the inputs.
 */
declare function subtract(inputs: OperationsInput[]): number;
/**
 * Multiplies a list of numbers and/or fractions.
 *
 * @param {OperationsInput[]} inputs - An array of numbers and/or fractions to multiply.
 * @return {number} The result of multiplying all inputs together.
 */
declare function multiply(inputs: OperationsInput[]): number;
/**
 * Divides a list of numbers and/or fractions and returns the result.
 *
 * @param {OperationsInput[]} inputs - An array of numbers and/or objects with a numerator and denominator.
 * @return {number} - The result of dividing all the numbers/fractions in the input array.
 */
declare function divide(inputs: OperationsInput[]): number;

declare class physicsFormulae {
	/**
	 * Calculates the speed given a distance and time.
	 *
	 * @param {number} distance - the distance traveled
	 * @param {number} time - the time taken to travel the distance
	 * @return {number} the speed in units per hour
	 */
	static Speed(distance: number, time: number): number;
	/**
	 * Calculates the distance traveled based on speed and time.
	 *
	 * @param {number} speed - the speed of the object in units per hour
	 * @param {number} time - the time taken by the object to travel in hours
	 * @return {number} the distance traveled by the object in units
	 */
	static Distance(speed: number, time: number): number;
	/**
	 * Calculates the time it takes to travel a certain distance at a given speed.
	 *
	 * @param {number} distance - The distance to be traveled.
	 * @param {number} speed - The speed at which to travel.
	 * @return {number} The time it takes to travel the distance at the given speed.
	 */
	static Time(distance: number, speed: number): number;
	/**-------------------------------------------------------------------------------------*/
	/**
	 * Calculates pressure given force and area.
	 *
	 * @param {number} force - the amount of force applied
	 * @param {number} area - the area over which the force is applied
	 * @return {number} the pressure calculated by dividing force by area
	 */
	static Pressure(force: number, area: number): number;
	/**
	 * Calculates the force exerted given a pressure and area.
	 *
	 * @param {number} pressure - the pressure applied.
	 * @param {number} area - the area on which the pressure is applied.
	 * @return {number} the force exerted.
	 */
	static Force(pressure: number, area: number): number;
	/**
	 * Calculates the area given the pressure and force.
	 *
	 * @param {number} pressure - the pressure applied
	 * @param {number} force - the force applied
	 * @return {number} the area calculated from the given pressure and force
	 */
	static Area(pressure: number, force: number): number;
	/**-------------------------------------------------------------------------------------*/
	/**
	 * Calculates the density of an object given its mass and volume.
	 *
	 * @param {number} mass - the mass of the object in kilograms
	 * @param {number} volume - the volume of the object in cubic meters
	 * @return {number} the density of the object in kilograms per cubic meter
	 */
	static Density(mass: number, volume: number): number;
	/**
	 * Returns the mass of an object given its density and volume.
	 *
	 * @param {number} density - the density of the object
	 * @param {number} volume - the volume of the object
	 * @return {number} the mass of the object
	 */
	static Mass(density: number, volume: number): number;
	/**
	 * Calculates the volume given the density and mass.
	 *
	 * @param {number} density - the density of the object
	 * @param {number} mass - the mass of the object
	 * @return {number} the calculated volume
	 */
	static Volume(density: number, mass: number): number;
}

declare class Conversions {
	/**
	 * Converts meters to other length units.
	 *
	 * @param {number} meters - The length in meters to convert.
	 * @return {object} An object containing the converted lengths in inches, feet, yards, miles, nautical miles and paces.
	 */
	static metersToOtherLengths(meters: number): object;
	/**
	 * Converts inches to other length units.
	 *
	 * @param {number} inches - The length in inches to convert.
	 * @return {object} An object containing the converted lengths in meters, feet, yards, miles, nautical miles and paces.
	 */
	static inchesToOtherLengths(inches: number): object;
	/**
	 * Converts feet to other length units.
	 *
	 * @param {number} feet - The length in feet to convert.
	 * @return {object} An object containing the converted lengths in meters, inches, yards, miles, nautical miles and paces.
	 */
	static feetToOtherLengths(feet: number): object;
	/**
	 * Converts yards to other length units.
	 *
	 * @param {number} yards - The length in yards to convert.
	 * @return {object} An object containing the converted lengths in meters, inches, feet, miles, nautical miles and paces.
	 */
	static yardsToOtherLengths(yards: number): object;
	/**
	 * Converts miles to other length units.
	 *
	 * @param {number} miles - The length in miles to convert.
	 * @return {object} An object containing the converted lengths in meters, inches, feet, yards, nautical miles and paces.
	 */
	static milesToOtherLengths(miles: number): object;
	/**
	 * Converts nautical miles to other length units.
	 *
	 * @param {number} nauticalMiles - The length in nautical miles to convert.
	 * @return {object} An object containing the converted lengths in meters, inches, feet, yards, miles and paces.
	 */
	static nauticalMilesToOtherLengths(nauticalMiles: number): object;
	/**
	 * Converts paces to other length units.
	 *
	 * @param {number} paces - The length in paces to convert.
	 * @return {object} An object containing the converted lengths in meters, inches, feet, yards, miles and nautical miles.
	 */
	static pacesToOtherLengths(paces: number): object;
	/**
	 * Converts Kelvin to other temperature units.
	 *
	 * @param {number} kelvin - The temperature in Kelvin to convert.
	 * @return {object} An object containing the converted temperatures in Celsius and Fahrenheit.
	 */
	static kelvinToOtherTemperatures(kelvin: number): object;
	/**
	 * Converts Celsius to other temperature units.
	 *
	 * @param {number} celsius - The temperature in Celsius to convert.
	 * @return {object} An object containing the converted temperatures in Kelvin and Fahrenheit.
	 */
	static celsiusToOtherTemperatures(celsius: number): object;
	/**
	 * Converts Fahrenheit to other temperature units.
	 *
	 * @param {number} fahrenheit - The temperature in Fahrenheit to convert.
	 * @return {object} An object containing the converted temperatures in Celsius and Kelvin.
	 */
	static fahrenheitToOtherTemperatures(fahrenheit: number): object;
	/**
	 * Converts degrees to other angle units.
	 *
	 * @param {number} degrees - The angle in degrees to convert.
	 * @return {object} An object containing the converted angles in gradians, radians, minutes and seconds.
	 */
	static degreesToOtherAngles(degrees: number): object;
	/**
	 * Converts gradians to other angle units.
	 *
	 * @param {number} gradians - The angle in gradians to convert.
	 * @return {object} An object containing the converted angles in degrees, radians, minutes and seconds.
	 */
	static gradiansToOtherAngles(gradians: number): object;
	/**
	 * Converts radians to other angle units.
	 *
	 * @param {number} radians - The angle in radians to convert.
	 * @return {object} An object containing the converted angles in degrees, gradians, minutes and seconds.
	 */
	static radiansToOtherAngles(radians: number): object;
	/**
	 * Converts minutes to other angle units.
	 *
	 * @param {number} minutes - The angle in minutes to convert.
	 * @return {object} An object containing the converted angles in degrees, gradians, radians and seconds.
	 */
	static minutesToOtherAngles(minutes: number): object;
	/**
	 * Converts seconds to other angle units.
	 *
	 * @param {number} seconds - The angle in seconds to convert.
	 * @return {object} An object containing the converted angles in degrees, gradians, radians and minutes.
	 */
	static secondsToOtherAngles(seconds: number): object;
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
