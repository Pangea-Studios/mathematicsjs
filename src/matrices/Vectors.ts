/**
 * Class to create and manipulate Vectors
 */
export class Vector {
	public dimensions: number;
	public values: number[];
	public magnitude: number;

	constructor(values: number[]) {
		this.dimensions = values.length;
		this.values = values;
	}

	/**
	 * Calculates the magnitude of the vector.
	 *
	 * @return {number} The magnitude of the vector.
	 */
	getMagnitude(): number {
		let result = 0;

		for (let i = 0; i < this.values.length; i++) {
			result += this.values[i] * this.values[i];
		}

		return result ** 0.5;
	}

	/**
	 * Converts the vector to a unit vector.
	 *
	 * @return {Vector} The unit vector.
	 */
	toUnitVector(): Vector {
		const result = [];
		for (let i = 0; i < this.values.length; i++) {
			result.push(this.values[i] / this.getMagnitude());
		}

		return new Vector(result);
	}

	/**
	 * Adds another Vector to this Vector and returns the result.
	 *
	 * @param {Vector} other - The Vector to add to this Vector.
	 * @return {Vector} - The resulting Vector after the addition.
	 */
	add(other: Vector): Vector {
		const result = [];
		for (let i = 0; i < this.values.length; i++) {
			result.push(this.values[i] + other.values[i]);
		}
		return new Vector(result);
	}

	/**
	 * Subtract another vector from this vector.
	 *
	 * @param {Vector} other - The vector to subtract.
	 * @return {Vector} - A new vector containing the result of the subtraction.
	 */
	subtract(other: Vector): Vector {
		const result = [];
		for (let i = 0; i < this.values.length; i++) {
			result.push(this.values[i] - other.values[i]);
		}
		return new Vector(result);
	}

	/**
	 * Multiplies this vector by another vector element-wise.
	 *
	 * @param {Vector} other - The vector to multiply with.
	 * @return {Vector} - The resulting vector after element-wise multiplication.
	 */
	multiply(other: Vector): Vector {
		const result = [];
		for (let i = 0; i < this.values.length; i++) {
			result.push(this.values[i] * other.values[i]);
		}
		return new Vector(result);
	}

	/**
	 * Divides this vector by another vector element-wise.
	 *
	 * @param {Vector} other - The vector to divide by.
	 * @return {Vector} A new vector that contains the result of the division.
	 */
	divide(other: Vector): Vector {
		const result = [];
		for (let i = 0; i < this.values.length; i++) {
			result.push(this.values[i] / other.values[i]);
		}
		return new Vector(result);
	}

	/**
	 * Multiplies each element in the vector by a scalar.
	 *
	 * @param {number} scalar - The scalar to multiply each element by.
	 * @return {Vector} - A new vector with the elements multiplied by the scalar.
	 */
	multiplyByScalar(scalar: number): Vector {
		const result = [];
		for (let i = 0; i < this.values.length; i++) {
			result.push(this.values[i] * scalar);
		}
		return new Vector(result);
	}

	/**
	 * Divides each element of the vector by a scalar.
	 *
	 * @param {number} scalar - The scalar value to divide by.
	 * @return {Vector} - A new vector with the divided values.
	 */
	divideByScalar(scalar: number): Vector {
		const result = [];
		for (let i = 0; i < this.values.length; i++) {
			result.push(this.values[i] / scalar);
		}
		return new Vector(result);
	}

	/**
	 * Calculates the dot product between two vectors.
	 *
	 * @param {Vector} vector1 - The first vector.
	 * @param {Vector} vector2 - The second vector.
	 * @return {number} - The dot product of the two vectors.
	 */
	static calculateDotProduct(vector1: Vector, vector2: Vector): number {
		if (vector1.dimensions !== vector2.dimensions) {
			throw new Error('Vectors must have the same dimensions.');
		}

		let dotProduct = 0;
		for (let i = 0; i < vector1.dimensions; i++) {
			dotProduct += vector1.values[i] * vector2.values[i];
		}

		return dotProduct;
	}

	/**
	 * Calculates the cross product between two vectors.
	 *
	 * @param {Vector} vector1 - The first vector.
	 * @param {Vector} vector2 - The second vector.
	 * @return {Vector} - The cross product vector.
	 */
	static calculateCrossProduct(vector1: Vector, vector2: Vector): Vector {
		if (vector1.dimensions !== 3 || vector2.dimensions !== 3) {
			throw new Error('Cross product is only defined for 3D vectors.');
		}

		const x =
			vector1.values[1] * vector2.values[2] -
			vector1.values[2] * vector2.values[1];
		const y =
			vector1.values[2] * vector2.values[0] -
			vector1.values[0] * vector2.values[2];
		const z =
			vector1.values[0] * vector2.values[1] -
			vector1.values[1] * vector2.values[0];

		return new Vector([x, y, z]);
	}
}
