class ComplexNumber {
	private real: number;
	private imaginary: number;

	constructor(real: number, imaginary: number) {
		this.real = real;
		this.imaginary = imaginary;
	}

	multiply(other: ComplexNumber): ComplexNumber {
		const real = this.real * other.real - this.imaginary * other.imaginary;
		const imaginary =
			this.real * other.imaginary + this.imaginary * other.real;
		return new ComplexNumber(real, imaginary);
	}

	getImaginary(): number {
		return this.imaginary;
	}

	add(other: ComplexNumber): ComplexNumber {
		const real = this.real + other.real;
		const imaginary = this.imaginary + other.imaginary;
		return new ComplexNumber(real, imaginary);
	}

	subtract(other: ComplexNumber): ComplexNumber {
		const real = this.real - other.real;
		const imaginary = this.imaginary - other.imaginary;
		return new ComplexNumber(real, imaginary);
	}

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

	getModulus(): number {
		return Math.sqrt(
			this.real * this.real + this.imaginary * this.imaginary,
		);
	}

	getArgument(): number {
		return Math.atan2(this.imaginary, this.real);
	}

	getConjugate(): ComplexNumber {
		return new ComplexNumber(this.real, -this.imaginary);
	}
}
