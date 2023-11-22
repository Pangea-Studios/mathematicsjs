// Class for neural networks
export class NeuralNetwork {
	private readonly layerSizes: number[];
	public weights: number[][][];
	public biases: number[][];
	public activationFunctions: string[];
	public a: number;
	public b: number;
	public c: number;
	public d: number;
	public e: number;

	constructor(layerSizes: number[], activationFunctions: string[]) {
		this.layerSizes = layerSizes;
		this.weights = Array(layerSizes.length - 1)
			.fill([])
			.map(() => []);
		this.biases = Array(layerSizes.length - 1)
			.fill([])
			.map(() => []);
		this.activationFunctions = activationFunctions;
		this.a = Math.random() + 1;

		for (let i = 1; i < layerSizes.length; i++) {
			const currentLayerSize = layerSizes[i];
			const prevLayerSize = layerSizes[i - 1];
			const layerWeights: number[][] = Array(currentLayerSize)
				.fill([])
				.map(() => []);
			const layerBiases: number[] = Array(currentLayerSize).fill(0);

			for (let j = 0; j < currentLayerSize; j++) {
				const neuronWeights = Array(prevLayerSize)
					.fill(0)
					.map(() => Math.random());
				layerWeights[j] = neuronWeights;
			}

			this.weights[i - 1] = layerWeights;
			this.biases[i - 1] = layerBiases;
		}
	}

	private sigmoid(x: number): number {
		return 1 / (1 + Math.exp(-x));
	}

	private relu(x: number): number {
		return x < 0 ? 0 : x;
	}

	private prelu(x: number, a: number): number {
		return x < a * x ? a * x : x;
	}

	private elu(x: number, a: number): number {
		return a * (Math.exp(x) - 1);
	}

	private polynomial(
		x: number,
		a: number,
		b: number,
		c: number,
		d: number,
		e: number,
	): number {
		return (
			a * Math.pow(x, 4) +
			b * Math.pow(x, 3) +
			c * Math.pow(x, 2) +
			d * x +
			e
		);
	}

	private feedWithDifferentWeight(
		input: number[],
		i: number,
		j: number,
		k: number,
		value: number,
	): number[] {
		const OG = this.weights[i][j][k];
		this.weights[i][j][k] = value;
		const result = this.feedForward(input);
		this.weights[i][j][k] = OG;
		return result;
	}

	private feedWithDifferentBias(
		input: number[],
		i: number,
		j: number,
		value: number,
	): number[] {
		const OG = this.biases[i][j];
		this.biases[i][j] = value;
		const result = this.feedForward(input);
		this.biases[i][j] = OG;
		return result;
	}

	private feedWithDifferentParameterA(
		input: number[],
		value: number,
	): number[] {
		const OG = this.a;
		this.a = value;
		const result = this.feedForward(input);
		this.a = OG;
		return result;
	}

	private feedWithDifferentParameterB(
		input: number[],
		value: number,
	): number[] {
		const OG = this.b;
		this.b = value;
		const result = this.feedForward(input);
		this.b = OG;
		return result;
	}

	private feedWithDifferentParameterC(
		input: number[],
		value: number,
	): number[] {
		const OG = this.c;
		this.c = value;
		const result = this.feedForward(input);
		this.c = OG;
		return result;
	}

	private feedWithDifferentParameterD(
		input: number[],
		value: number,
	): number[] {
		const OG = this.d;
		this.b = value;
		const result = this.feedForward(input);
		this.d = OG;
		return result;
	}

	private feedWithDifferentParameterE(
		input: number[],
		value: number,
	): number[] {
		const OG = this.e;
		this.e = value;
		const result = this.feedForward(input);
		this.e = OG;
		return result;
	}

	private trainWeightSingle(
		input: number[],
		targetOutput: number[],
		learningRate = 0.01,
	): void {
		for (let i = 0; i < this.weights.length; i++) {
			for (let j = 0; j < this.weights[i].length; j++) {
				this.weights[i][j].forEach((_, k) => {
					const a = this.difference(
						this.feedForward(input),
						targetOutput,
					);
					const b = this.difference(
						this.feedWithDifferentWeight(
							input,
							i,
							j,
							k,
							this.weights[i][j][k] + learningRate,
						),
						targetOutput,
					);
					const c = this.difference(
						this.feedWithDifferentWeight(
							input,
							i,
							j,
							k,
							this.weights[i][j][k] - learningRate,
						),
						targetOutput,
					);

					if (b < a) {
						this.weights[i][j][k] += learningRate;
					} else if (c < a) {
						this.weights[i][j][k] -= learningRate;
					}
				});
			}
		}
	}

	private trainBiasSingle(
		input: number[],
		targetOutput: number[],
		learningRate = 0.01,
	): void {
		for (let i = 0; i < this.biases.length; i++) {
			this.biases[i].forEach((_, j) => {
				const a = this.difference(
					this.feedForward(input),
					targetOutput,
				);
				const b = this.difference(
					this.feedWithDifferentBias(
						input,
						i,
						j,
						this.biases[i][j] + learningRate,
					),
					targetOutput,
				);
				const c = this.difference(
					this.feedWithDifferentBias(
						input,
						i,
						j,
						this.biases[i][j] - learningRate,
					),
					targetOutput,
				);

				if (b < a) {
					this.biases[i][j] += learningRate;
				} else if (c < a) {
					this.biases[i][j] -= learningRate;
				}
			});
		}
	}

	private trainParameterASingle(
		input: number[],
		targetOutput: number[],
		learningRate = 0.01,
	): void {
		const a = this.difference(this.feedForward(input), targetOutput);
		const b = this.difference(
			this.feedWithDifferentParameterA(input, this.a + learningRate),
			targetOutput,
		);
		const c = this.difference(
			this.feedWithDifferentParameterA(input, this.a - learningRate),
			targetOutput,
		);

		if (b < a) {
			this.a += learningRate;
		} else if (c < a) {
			this.a -= learningRate;
		}
	}

	private trainParameterBSingle(
		input: number[],
		targetOutput: number[],
		learningRate = 0.01,
	): void {
		const a = this.difference(this.feedForward(input), targetOutput);
		const b = this.difference(
			this.feedWithDifferentParameterB(input, this.b + learningRate),
			targetOutput,
		);
		const c = this.difference(
			this.feedWithDifferentParameterB(input, this.b - learningRate),
			targetOutput,
		);

		if (b < a) {
			this.b += learningRate;
		} else if (c < a) {
			this.b -= learningRate;
		}
	}

	private trainParameterCSingle(
		input: number[],
		targetOutput: number[],
		learningRate = 0.01,
	): void {
		const a = this.difference(this.feedForward(input), targetOutput);
		const b = this.difference(
			this.feedWithDifferentParameterC(input, this.c + learningRate),
			targetOutput,
		);
		const c = this.difference(
			this.feedWithDifferentParameterC(input, this.c - learningRate),
			targetOutput,
		);

		if (b < a) {
			this.c += learningRate;
		} else if (c < a) {
			this.c -= learningRate;
		}
	}

	private trainParameterDSingle(
		input: number[],
		targetOutput: number[],
		learningRate = 0.01,
	): void {
		const a = this.difference(this.feedForward(input), targetOutput);
		const b = this.difference(
			this.feedWithDifferentParameterD(input, this.d + learningRate),
			targetOutput,
		);
		const c = this.difference(
			this.feedWithDifferentParameterD(input, this.d - learningRate),
			targetOutput,
		);

		if (b < a) {
			this.d += learningRate;
		} else if (c < a) {
			this.d -= learningRate;
		}
	}

	private trainParameterESingle(
		input: number[],
		targetOutput: number[],
		learningRate = 0.01,
	): void {
		const a = this.difference(this.feedForward(input), targetOutput);
		const b = this.difference(
			this.feedWithDifferentParameterE(input, this.e + learningRate),
			targetOutput,
		);
		const c = this.difference(
			this.feedWithDifferentParameterE(input, this.e - learningRate),
			targetOutput,
		);

		if (b < a) {
			this.e += learningRate;
		} else if (c < a) {
			this.e -= learningRate;
		}
	}

	public train(
		inputs: number[][],
		targetOutputs: number[][],
		learningRate = 0.01,
		iterations = 100,
	): void {
		const queryParameter =
			this.activationFunctions.includes('ELU') ||
			this.activationFunctions.includes('PReLU') ||
			this.activationFunctions.includes('Polynomial');
		const queryAll = this.activationFunctions.includes('Polynomial');

		for (let x = 0; x < iterations; x++) {
			inputs.forEach((input, i) => {
				this.trainWeightSingle(input, targetOutputs[i], learningRate);
				this.trainBiasSingle(input, targetOutputs[i], learningRate);
				if (queryParameter) {
					this.trainParameterASingle(
						input,
						targetOutputs[i],
						learningRate,
					);
				} else if (queryAll) {
					this.trainParameterBSingle(
						input,
						targetOutputs[i],
						learningRate,
					);
					this.trainParameterCSingle(
						input,
						targetOutputs[i],
						learningRate,
					);
					this.trainParameterDSingle(
						input,
						targetOutputs[i],
						learningRate,
					);
					this.trainParameterESingle(
						input,
						targetOutputs[i],
						learningRate,
					);
				}
			});
		}
	}

	private difference(a: number[], b: number[]): number {
		let result = 0;
		for (let i = 0; i < a.length; i++) {
			result += Math.abs(a[i] - b[i]) / a[i];
		}
		return (result / a.length) * 100;
	}

	private feedForward(input: number[]): number[] {
		let output = input;

		for (let i = 0; i < this.weights.length; i++) {
			const layerWeights = this.weights[i];
			const layerBiases = this.biases[i];
			const layerOutput: number[] = new Array(layerWeights.length).fill(
				0,
			);

			layerWeights.forEach((neuronWeights, j) => {
				let neuronOutput = 0;

				for (let k = 0; k < neuronWeights.length; k++) {
					neuronOutput += neuronWeights[k] * output[k];
				}

				neuronOutput += layerBiases[j];

				switch (this.activationFunctions[i]) {
					case 'ReLU':
						neuronOutput = this.relu(neuronOutput);
						break;
					case 'ELU':
						neuronOutput = this.elu(neuronOutput, this.a);
						break;
					case 'PReLU':
						neuronOutput = this.prelu(neuronOutput, this.a);
						break;
					case 'tanh':
						neuronOutput = Math.tanh(neuronOutput);
						break;
					case 'Sigmoid':
						neuronOutput = this.sigmoid(neuronOutput);
						break;
					case 'Polynomial':
						neuronOutput = this.polynomial(
							neuronOutput,
							this.a,
							this.b,
							this.c,
							this.d,
							this.e,
						);
					// eslint-disable-next-line no-fallthrough
					default:
						neuronOutput = this.relu(neuronOutput);
						break;
				}

				layerOutput[j] = neuronOutput;
			});

			output = layerOutput;
		}

		return output;
	}
}
