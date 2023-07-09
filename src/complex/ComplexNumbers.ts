import { Vector } from '../matrices/Vectors';
import { TrigonometryFunctions as Trig } from '../trigonometry/Functions';
export class ComplexNumber {
	public real: number;
	public imaginary: number;

	constructor(real: number, imaginary: number) {
		this.real = real;
		this.imaginary = imaginary;
	}

	/**
	 * Multiplies the current complex number with another complex number.
	 *
	 * @param {ComplexNumber} other - The complex number to multiply with.
	 * @return {ComplexNumber} A new complex number representing the result of the multiplication.
	 */
	multiply(other: ComplexNumber): ComplexNumber {
		const real = this.real * other.real - this.imaginary * other.imaginary;
		const imaginary =
			this.real * other.imaginary + this.imaginary * other.real;
		return new ComplexNumber(real, imaginary);
	}

	/**
	 * Retrieve the imaginary component of the number.
	 *
	 * @return {number} The imaginary component.
	 */
	getImaginary(): number {
		return this.imaginary;
	}

	/**
	 * Adds another ComplexNumber to the current ComplexNumber.
	 *
	 * @param {ComplexNumber} other - The ComplexNumber to add.
	 * @return {ComplexNumber} - The result of the addition.
	 */
	add(other: ComplexNumber): ComplexNumber {
		const real = this.real + other.real;
		const imaginary = this.imaginary + other.imaginary;
		return new ComplexNumber(real, imaginary);
	}

	/**
	 * Subtract a complex number from this complex number.
	 *
	 * @param {ComplexNumber} other - The complex number to subtract.
	 * @return {ComplexNumber} A new complex number representing the subtraction result.
	 */
	subtract(other: ComplexNumber): ComplexNumber {
		const real = this.real - other.real;
		const imaginary = this.imaginary - other.imaginary;
		return new ComplexNumber(real, imaginary);
	}

	/**
	 * Divide a complex number by another complex number.
	 *
	 * @param {ComplexNumber} other - The complex number to divide by.
	 * @return {ComplexNumber} - The result of the division as a complex number.
	 */
	divide(other: ComplexNumber): ComplexNumber {
		const denominator =
			other.real * other.real + other.imaginary * other.imaginary;
		const real =
			(this.real * other.real + this.imaginary * other.imaginary) /
			denominator;
		const imaginary =
			(this.imaginary * other.real - this.real * other.imaginary) /
			denominator;
		return new ComplexNumber(real, imaginary);
	}

	/**
	 * Calculates the modulus of a complex number.
	 *
	 * @return {number} The modulus of the complex number.
	 */
	getModulus(): number {
		return (this.real * this.real + this.imaginary * this.imaginary) ** 0.5;
	}

	/**
	 * Gets the argument of the complex number.
	 *
	 * @return {number} The argument of the complex number.
	 */
	getArgument(): number {
		return Trig.atan(this.imaginary / this.real);
	}

	/**
	 * Returns the conjugate of the complex number.
	 *
	 * @return {ComplexNumber} The conjugate of the complex number.
	 */
	getConjugate(): ComplexNumber {
		return new ComplexNumber(this.real, -this.imaginary);
	}

	/**
	 * Negates the complex number by changing the sign of both the real and imaginary parts.
	 *
	 * @return {ComplexNumber} A new complex number with the negated values.
	 */
	negate(): ComplexNumber {
		return new ComplexNumber(-this.real, -this.imaginary);
	}

	/**
	 * Calculates and returns the inverse of the complex number.
	 * The inverse of a complex number is obtained by dividing the real part and
	 * imaginary part of the complex number by the sum of their squares.
	 *
	 * @return {ComplexNumber} The inverse of the complex number.
	 */
	getInverse(): ComplexNumber {
		const denominator = this.real ** 2 + this.imaginary ** 2;
		const inverseReal = this.real / denominator;
		const inverseImaginary = -this.imaginary / denominator;

		return new ComplexNumber(inverseReal, inverseImaginary);
	}

	/**
	 * Converts the complex number to a Vector object.
	 *
	 * @return {Vector} A Vector object representing the complex number.
	 */
	toVector(): Vector {
		return new Vector([this.real, this.imaginary]);
	}

	/**
	 * Converts the complex number to polar coordinates.
	 *
	 * @return {{r: number, phi: number}} The polar coordinates of the complex number.
	 */
	toPolar(): { r: number; phi: number } {
		return { r: this.getModulus(), phi: this.getArgument() };
	}
}
