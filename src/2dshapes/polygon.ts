import { TrigonometryFunctions as Trig } from '../trigonometry/Functions';

export class Polygon {
	/**
	 * Calculates the area of a regular polygon given the number of sides and the length of each side.
	 *
	 * @param {number} numberOfSides - the number of sides of the polygon.
	 * @param {number} sideLength - the length of each side of the polygon.
	 * @return {number} the area of the regular polygon.
	 */
	static calculateRegularPolygonArea(
		numberOfSides: number,
		sideLength: number,
	) {
		return (
			(numberOfSides * sideLength ** 2) /
			(4 * Trig.tan(180 / numberOfSides))
		);
	}
}
