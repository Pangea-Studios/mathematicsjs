import { TrigonometryFunctions as Trig } from '../trigonometry/Functions';

export class Polygon {
	public sideLengths: number[];
	public angles: number[];
	readonly sides: number;
	readonly isRegular: boolean;
	constructor(sideLengths: number[], angles: number[]) {
		if (sideLengths.length !== angles.length) {
			throw new Error('sideLengths and angles must have the same length');
		}
		this.sideLengths = sideLengths;
		this.angles = angles;
		this.sides = sideLengths.length;
		const statement = [true];

		for (let i = 0; i < this.sides; i++) {
			if (this.angles[0] !== this.angles[i]) {
				statement[0] = false;
				break;
			}
		}
		this.isRegular = statement[0];
	}

	/**
	 * Calculates the area of a regular polygon.
	 *
	 * @return {number} The area of the regular polygon.
	 */
	calculateRegularPolygonalArea() {
		if (this.isRegular === true) {
			return (
				(this.sides * this.sideLengths[0] ** 2) /
				(4 * Trig.tan(180 / this.sides))
			);
		} else {
			throw new Error('Polygon is not regular');
		}
	}
}
