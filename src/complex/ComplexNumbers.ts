import { Vector } from '../tensors/Vectors';
import { TrigonometryFunctions as Trig } from '../trigonometry/Functions';
export class ComplexNumber {
	public real: number;
	public imaginary: number;

	constructor(real: number, imaginary: number) {
		this.real = real;
		this.imaginary = imaginary;
	}

	static zero(): ComplexNumber {
		return new ComplexNumber(0, 0);
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
	Imaginary(): number {
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
	modulus(): number {
		return (this.real * this.real + this.imaginary * this.imaginary) ** 0.5;
	}

	/**
	 *  s the argument of the complex number.
	 *
	 * @return {number} The argument of the complex number.
	 */
	argument(): number {
		return Trig.atan(this.imaginary / this.real);
	}

	/**
	 * Returns the conjugate of the complex number.
	 *
	 * @return {ComplexNumber} The conjugate of the complex number.
	 */
	conjugate(): ComplexNumber {
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
	invert(): ComplexNumber {
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
		return { r: this.modulus(), phi: this.argument() };
	}

	/**
	 * Converts a polar coordinate to a complex number.
	 *
	 * @param {number} r - The radius of the polar coordinate.
	 * @param {number} phi - The angle (in radians) of the polar coordinate.
	 * @return {ComplexNumber} The complex number representation of the polar coordinate.
	 */
	static fromPolar(r: number, phi: number): ComplexNumber {
		return new ComplexNumber(r * Trig.cos(phi), r * Trig.sin(phi));
	}

	/**
	 * Retrieves the phase value.
	 *
	 * @return {number} The phase value.
	 */
	phase(): number {
		return this.argument();
	}

	/**
	 * Scales the complex number by the given factor.
	 *
	 * @param {number} factor - The factor by which the complex number should be scaled.
	 * @return {ComplexNumber} - The scaled complex number.
	 */
	scale(factor: number): ComplexNumber {
		return new ComplexNumber(this.real * factor, this.imaginary * factor);
	}

	/**
	 * Calculates the complex number raised to the power of the given exponent.
	 *
	 * @param {number} exponent - The exponent to raise the complex number to.
	 * @return {ComplexNumber} - The complex number raised to the power of the exponent.
	 */
	toExponent(exponent: number): ComplexNumber {
		const modulus = this.modulus();
		const phase = this.phase();
		const newModulus = modulus ** exponent;
		const newPhase = phase * exponent;
		const real = newModulus * Trig.cos(newPhase);
		const imaginary = newModulus * Trig.sin(newPhase);
		return new ComplexNumber(real, imaginary);
	}
}
