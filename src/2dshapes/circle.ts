import { MathsConstants } from '../units/Constants';

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
export class Circle {
	/**
	 * Gets the radius
	 * @type {number}
	 * @example <caption>Example - Get Radius</caption>
	 * // returns 1
	 * new Circle({ diameter: 2 }).radius
	 * @returns {number}
	 * @see https://en.wikipedia.org/wiki/Radius
	 */
	public radius: number;

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
	}) {
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
			this.circumference = 2 * MathsConstants.pi.value * this.radius;
			this.area = MathsConstants.pi.value * this.radius * this.radius;
		} else if (diameter) {
			this.radius = diameter / 2;
			this.diameter = diameter;
			this.circumference = 2 * MathsConstants.pi.value * this.radius;
			this.area = MathsConstants.pi.value * this.radius * this.radius;
		} else if (circumference) {
			this.radius = circumference / MathsConstants.pi.value / 2;
			this.diameter = this.radius * 2;
			this.circumference = circumference;
			this.area = MathsConstants.pi.value * this.radius * this.radius;
		} else if (area) {
			this.radius = (area / MathsConstants.pi.value) ** 0.5;
			this.diameter = this.radius * 2;
			this.circumference = 2 * MathsConstants.pi.value * this.radius;
			this.area = area;
		} else {
			throw new Error(
				'ValueError: At least one of following: Radius, Diameter, Circumference, or Area must be specified',
			);
		}
	}
}
