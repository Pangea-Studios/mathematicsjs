import { TrigonometryFunctions as Trig } from '../trigonometry/Functions';

export class RightAngledTriangle {
	public hypotenuse: number;
	public sideA: number;
	public sideB: number;
	public angleA: number;
	public angleB: number;

	constructor(
		hypotenuse: number = null,
		sideA: number = null,
		sideB: number = null,
		angleA: number = null,
		angleB: number = null,
	) {
		if (hypotenuse === null) {
			if (sideA && sideB) {
				this.hypotenuse = (sideA * sideA + sideB * sideB) ** 0.5;
			}
		}

		if (sideA === null) {
			if (sideB && hypotenuse) {
				sideA = (hypotenuse * hypotenuse - sideB * sideB) ** 0.5;
			}
		}

		if (sideB === null) {
			if (sideA && hypotenuse) {
				sideB = (hypotenuse * hypotenuse - sideA * sideA) ** 0.5;
			}
		}
	}
}
