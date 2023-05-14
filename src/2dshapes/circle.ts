/**
 * Makes a circle
 * @class
 * @example <caption>Example - Make Circle</caption>
 * // returns { radius: 1 }
 * new Circle(1)
 * @returns {Object}
 * @see https://en.wikipedia.org/wiki/Circumference
 */
export class Circle {
	public radius: number;

	/**
	 * Gets the circumference
	 * @example <caption>Example - Get Circumference</caption>
	 * // returns 3
	 * new Circle(1).circumference
	 * @returns {number}
	 * @see https://en.wikipedia.org/wiki/Circumference
	 */
	readonly circumference: number;

	/**
	 * Gets the diameter
	 * @example <caption>Example - Get Diameter</caption>
	 * // returns 2
	 * new Circle(1).diameter
	 * @returns {number}
	 * @see https://en.wikipedia.org/wiki/Circumference
	 */
	readonly diameter: number;

	/**
	 * Gets the area
	 * @example <caption>Example - Get Area</caption>
	 * // returns 3.14
	 * new Circle(1).area
	 * @returns {number}
	 * @see https://en.wikipedia.org/wiki/Circumference
	 */
	readonly area: number;

	/**
	 * Gets the value of pi
	 * @example <caption>Example - Get Pi</caption>
	 * // returns 3.14
	 * new Circle(1).pi
	 * @returns {number}
	 * @see https://en.wikipedia.org/wiki/Circumference
	 */
	readonly pi: number = Math.PI;

	/**
	 * Creates the circle
	 * @param {number} radius - The radius
	 * @example <caption>Example - Create Circle</caption>
	 * // returns { radius: 1 }
	 * new Circle(1)
	 * @returns {Object}
	 * @see https://en.wikipedia.org/wiki/Circumference
	 */
	constructor(radius: number) {
		if (radius <= 0) {
			throw new Error('ValueError: Radius must be greater than 0');
		}
		this.radius = radius;
		this.diameter = radius * 2;
		this.circumference = 2 * Math.PI * this.radius;
		this.area = Math.PI * this.radius * this.radius;
	}
}