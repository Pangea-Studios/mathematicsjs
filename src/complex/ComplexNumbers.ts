class ComplexNumber {
    private real: number;
    private imaginary: number;
  
    constructor(real: number, imaginary: number) {
      this.real = real;
      this.imaginary = imaginary;
    }
  
    multiply(other: ComplexNumber): ComplexNumber {
      const real = this.real * other.real - this.imaginary * other.imaginary;
      const imaginary = this.real * other.imaginary + this.imaginary * other.real;
      return new ComplexNumber(real, imaginary);
    }
  
    getImaginary(): number {
      return this.imaginary;
    }
}