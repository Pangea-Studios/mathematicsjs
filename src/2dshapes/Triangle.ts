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
			} else if (sideA && angleA) {
				this.hypotenuse= (sideA/Trig.cos(angleA))
			} else if (sideB && angleB) {
				this.hypotenuse = (sideB/Trig.cos(angleB))
			} else if (sideA && angleB) {
				this.hypotenuse = (sideA/Trig.sin(angleB))
			} else if (sideB && angleA) {
				this.hypotenuse = (sideB/Trig.sin(angleA))
			}
		} else {
			this.hypotenuse = hypotenuse;
		}

		if (sideA === null) {
			if (sideB && hypotenuse) {
				sideA = (hypotenuse * hypotenuse - sideB * sideB) ** 0.5;
			} else if (angleA && hypotenuse) {
				sideA = hypotenuse * Trig.cos(angleA)
			} else if (angleB && hypotenuse) {
				sideA = hypotenuse * Trig.cos(angleB)
			}
		} else {
			this.sideA = sideA;
		}

		if (sideB === null) {
			if (sideA && hypotenuse) {
				sideB = (hypotenuse * hypotenuse - sideA * sideA) ** 0.5;
			}
		} else {
			this.sideB = sideB;
		}
	}
}
