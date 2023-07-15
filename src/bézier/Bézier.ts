import { Vector } from '../matrices/Vectors';

export class QuadraticBézier {
	public startPoint: Vector;
	public endPoint: Vector;
	public controlPoint: Vector;
	readonly dimensions: number;

	constructor(startPoint: Vector, endPoint: Vector, controlPoint: Vector) {
		this.dimensions = startPoint.dimensions;
		if (
			endPoint.dimensions !== this.dimensions ||
			controlPoint.dimensions !== this.dimensions
		) {
			throw new Error(
				'All vectors of the Quadratic Bezier must have the same dimensions.',
			);
		}
		this.controlPoint = controlPoint;
		this.startPoint = startPoint;
		this.endPoint = endPoint;
	}

	/**
	 * Calculates a point on a quadratic Bezier curve given a parameter t.
	 *
	 * @param {number} t - The parameter value between 0 and 1 exclusive.
	 * @return {Vector} The calculated point on the curve.
	 */
	getPoint(t: number): Vector {
		const result = Vector.zeros(this.dimensions);
		if (t <= 0 || t >= 1) {
			throw new Error('t must be a value between 0 and 1 exclusive.');
		}

		for (let i = 0; i < this.dimensions; i++) {
			result.values[i] =
				(1 - t) ** 2 * this.startPoint.values[i] +
				2 * (1 - t) * t * this.controlPoint.values[i] +
				t ** 2 * this.endPoint.values[i];
		}
		return result;
	}

	/**
	 * Generates an array of points based on the given interval.
	 *
	 * @param {number} interval - The number of intervals to divide the range into.
	 * @return {Vector[]} An array of vector points.
	 */
	getPoints(interval: number): Vector[] {
		const result: Vector[] = [];
		for (let i = 0; i < interval; i++) {
			result.push(this.getPoint(i / interval));
		}
		return result;
	}
}

export class CubicBézier {
	public startPoint: Vector;
	public endPoint: Vector;
	public controlPoint1: Vector;
	public controlPoint2: Vector;
	readonly dimensions: number;
	constructor(
		startPoint: Vector,
		endPoint: Vector,
		controlPoint1: Vector,
		controlPoint2: Vector,
	) {
		this.dimensions = startPoint.dimensions;
		if (
			endPoint.dimensions !== this.dimensions ||
			controlPoint1.dimensions !== this.dimensions ||
			controlPoint2.dimensions !== this.dimensions
		) {
			throw new Error(
				'All vectors of the Quadratic Bezier must have the same dimensions.',
			);
		}
		this.controlPoint1 = controlPoint1;
		this.controlPoint2 = controlPoint2;
		this.startPoint = startPoint;
		this.endPoint = endPoint;
	}

	/**
	 * Calculates a point on the curve at a given parameter value.
	 *
	 * @param {number} t - The parameter value between 0 and 1 exclusive.
	 * @return {Vector} The calculated point on the curve.
	 */
	getPoint(t: number): Vector {
		const result = Vector.zeros(this.dimensions);
		if (t <= 0 || t >= 1) {
			throw new Error('t must be a value between 0 and 1 exclusive.');
		}

		for (let i = 0; i < this.dimensions; i++) {
			result.values[i] =
				(1 - t) ** 3 * this.startPoint.values[i] +
				3 * (1 - t) ** 2 * t * this.controlPoint1.values[i] +
				3 * (1 - t) * t ** 2 * this.controlPoint2.values[i] +
				t ** 3 * this.endPoint.values[i];
		}
		return result;
	}

	/**
	 * Retrieves an array of Vector points based on the given interval.
	 *
	 * @param {number} interval - The number of intervals for generating points.
	 * @return {Vector[]} An array of Vector points.
	 */
	getPoints(interval: number): Vector[] {
		const result: Vector[] = [];
		for (let i = 0; i < interval; i++) {
			result.push(this.getPoint(i / interval));
		}
		return result;
	}
}
