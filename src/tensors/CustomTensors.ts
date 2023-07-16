import { StatisticalOperations as SO } from '../statistics/StatisticalOperations';

/** Class to create and manipulate Tensors.
 *
 * If the tensors are 1 or 2 dimensional then please use the Vector and/or Matrix classes as they are more appropriate and advanced. */
export class Tensors {
	public dimensions: number[];
	public dimension: number;
	public data: any;
	constructor(data: any) {
		this.dimensions = Tensors.getArrayDimensions(data);
		this.dimension = this.dimensions.length;
		this.data = data;
	}

	/**
	 * Returns an array of dimensions of a nested array.
	 *
	 * @param {any[]} arr - The nested array.
	 * @return {number[]} - An array containing the dimensions of the nested array.
	 */
	private static getArrayDimensions(arr: any[]): number[] {
		const dimensions: number[] = [];
		let current = arr;
		while (Array.isArray(current)) {
			dimensions.push(current.length);
			current = current[0];
		}
		return dimensions;
	}

	/**
	 * Multiply the current Tensors instance with another Tensors instance.
	 *
	 * @param {Tensors} other - The Tensors instance to multiply with.
	 * @return {Tensors} A new Tensors instance representing the result of the multiplication.
	 */
	multiply(other: Tensors): Tensors {
		const resultData = this.performElementWiseOperation(
			this.data,
			other.data,
			(a: any, b: any) => a * b,
		);
		return new Tensors(resultData);
	}

	// Performs element-wise division with another tensor
	divide(other: Tensors): Tensors {
		const resultData = this.performElementWiseOperation(
			this.data,
			other.data,
			(a: any, b: any) => a / b,
		);
		return new Tensors(resultData);
	}

	// Performs element-wise addition with another tensor
	add(other: Tensors): Tensors {
		const resultData = this.performElementWiseOperation(
			this.data,
			other.data,
			(a: any, b: any) => a + b,
		);
		return new Tensors(resultData);
	}

	// Performs element-wise subtraction with another tensor
	subtract(other: Tensors): Tensors {
		const resultData = this.performElementWiseOperation(
			this.data,
			other.data,
			(a: any, b: any) => a - b,
		);
		return new Tensors(resultData);
	}

	/**
	 * Performs an element-wise operation on two arrays or elements.
	 *
	 * @param {any} arr1 - The first array or element.
	 * @param {any} arr2 - The second array or element.
	 * @param {(a: any, b: any) => any} operation - The operation to perform on each pair of elements.
	 * @return {any} The result of the element-wise operation.
	 */
	private performElementWiseOperation(
		arr1: any,
		arr2: any,
		operation: (a: any, b: any) => any,
	): any {
		if (Array.isArray(arr1) && Array.isArray(arr2)) {
			const result: any[] = [];
			const maxLength = SO.max([arr1.length, arr2.length]);

			for (let i = 0; i < maxLength; i++) {
				const element1 = arr1[i];
				const element2 = arr2[i];

				if (Array.isArray(element1) || Array.isArray(element2)) {
					result.push(
						this.performElementWiseOperation(
							element1,
							element2,
							operation,
						),
					);
				} else {
					result.push(operation(element1, element2));
				}
			}

			return result;
		} else if (Array.isArray(arr1) && !Array.isArray(arr2)) {
			return arr1.map((element: any) =>
				this.performElementWiseOperation(element, arr2, operation),
			);
		} else if (!Array.isArray(arr1) && Array.isArray(arr2)) {
			return arr2.map((element: any) =>
				this.performElementWiseOperation(arr1, element, operation),
			);
		} else {
			return operation(arr1, arr2);
		}
	}

	/**
	 * Returns the size of the data.
	 *
	 * @return {number} The number of elements in the data.
	 */
	size(): number {
		const flattenedData = this.flattenData();
		return flattenedData.length;
	}

	// Flattens the multi-dimensional data into a 1-dimensional array
	flattenData(): any[] {
		const flattenedData: any[] = [];

		const flattenHelper = (arr: any[]) => {
			for (const element of arr) {
				if (Array.isArray(element)) {
					flattenHelper(element);
				} else {
					flattenedData.push(element);
				}
			}
		};

		flattenHelper(this.data);
		return flattenedData;
	}

	// Reshapes the tensor to the specified dimensions
	reshape(newDimensions: number[]): void {
		const flattenedData = this.flattenData();
		const dataSize = flattenedData.length;
		const newTensorSize = newDimensions.reduce((a, b) => a * b, 1);

		if (dataSize !== newTensorSize) {
			throw new Error(
				'Cannot reshape tensor. The total number of elements must remain the same.',
			);
		}

		this.data = this.buildMultiDimensionalArray(
			flattenedData,
			newDimensions,
		);
		this.dimensions.length = newDimensions.length;
		this.dimensions.push(...newDimensions);
		this.dimension = this.dimensions.length;
	}

	/**
	 * Builds a multi-dimensional array based on the given data and dimensions.
	 *
	 * @param {any[]} data - The input data to build the array from.
	 * @param {number[]} dimensions - The dimensions of the resulting multi-dimensional array.
	 * @return {any} - The multi-dimensional array built from the data and dimensions.
	 */
	private buildMultiDimensionalArray(data: any[], dimensions: number[]): any {
		const [currentDimension, ...remainingDimensions] = dimensions;
		if (remainingDimensions.length === 0) {
			return data;
		}

		const result: any[] = [];
		const chunkSize = data.length / currentDimension;

		for (let i = 0; i < currentDimension; i++) {
			const start = i * chunkSize;
			const end = (i + 1) * chunkSize;
			result.push(
				this.buildMultiDimensionalArray(
					data.slice(start, end),
					remainingDimensions,
				),
			);
		}

		return result;
	}

	// Transposes the tensor (swap dimensions)
	transpose(): void {
		const transposedData = this.transposeArray(this.data);
		this.data = transposedData;
		this.dimensions.reverse();
	}

	/**
	 * Transposes a two-dimensional array.
	 *
	 * @param {any} arr - The array to be transposed.
	 * @return {any} The transposed array.
	 */
	private transposeArray(arr: any): any {
		if (!Array.isArray(arr[0])) {
			return arr;
		}

		const rows = arr.length;
		const columns = arr[0].length;
		const transposed: any[] = [];

		for (let j = 0; j < columns; j++) {
			transposed.push([]);
			for (let i = 0; i < rows; i++) {
				transposed[j].push(arr[i][j]);
			}
		}

		return transposed;
	}

	// Slices the tensor along a specified dimension, returning a new tensor
	slice(dimension: number, start: number, end: number): Tensors {
		const slicedData = this.sliceArray(this.data, dimension, start, end);
		return new Tensors(slicedData);
	}

	/**
	 * Slices an array based on the specified dimension, start, and end indices.
	 *
	 * @param {any} arr - The array to be sliced.
	 * @param {number} dimension - The dimension along which to slice the array.
	 * @param {number} start - The starting index of the slice.
	 * @param {number} end - The ending index of the slice.
	 * @return {any} - The sliced array.
	 */
	private sliceArray(
		arr: any,
		dimension: number,
		start: number,
		end: number,
	): any {
		if (dimension === 0) {
			return arr.slice(start, end);
		}

		return arr.map((subArr: any) =>
			this.sliceArray(subArr, dimension - 1, start, end),
		);
	}
}
