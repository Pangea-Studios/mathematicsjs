import { ComplexNumber as Complex } from '../complex/ComplexNumbers';
import { MathsConstants } from '../units/Constants';
import { StatisticalOperations as SO } from '../statistics/StatisticalOperations';

export class SignalProcessing {
	/**
	 * Evaluates a Fourier series at a given value.
	 *
	 * @param {number} x - The value at which to evaluate the Fourier series.
	 * @param {Complex[]} coefficients - The coefficients of the Fourier series.
	 * @return {Complex} The result of evaluating the Fourier series at the given value.
	 */
	evaluateFourierSeries(x: number, coefficients: Complex[]): Complex {
		const n = coefficients.length;
		let sum = Complex.zero();

		for (let i = 0; i < n; i++) {
			const coeff = coefficients[i];
			const k = i - Math.floor(n / 2); // Centering coefficients around zero frequency
			const term = Complex.fromPolar(
				coeff.modulus(),
				2 * MathsConstants.pi.value * k * x + coeff.phase(),
			);
			sum = sum.add(term);
		}

		return sum;
	}

	/**
	 * Applies a low-pass filter to the input signal using a specified cutoff frequency.
	 *
	 * @param {number[]} signal - The input signal to be filtered.
	 * @param {number} cutoffFrequency - The cutoff frequency of the low-pass filter.
	 * @returns {number[]} The filtered signal.
	 */
	applyLowPassFilter(signal: number[], cutoffFrequency: number): number[] {
		const n = signal.length;
		const coefficients = this.calculateFourierSeries(signal);

		for (let i = 0; i < n; i++) {
			const frequency = (i / n) * (1 / 2);
			if (frequency > cutoffFrequency) {
				coefficients[i] = Complex.zero();
				coefficients[n - i] = Complex.zero();
			}
		}

		return this.inverseFourierTransform(coefficients).map((c) => c.real);
	}

	/**
	 * Applies a high-pass filter to the input signal using a specified cutoff frequency.
	 *
	 * @param {number[]} signal - The input signal to be filtered.
	 * @param {number} cutoffFrequency - The cutoff frequency of the high-pass filter.
	 * @returns {number[]} The filtered signal.
	 */
	applyHighPassFilter(signal: number[], cutoffFrequency: number): number[] {
		const n = signal.length;
		const coefficients = this.calculateFourierSeries(signal);

		for (let i = 0; i < n; i++) {
			const frequency = (i / n) * (1 / 2);
			if (frequency < cutoffFrequency) {
				coefficients[i] = Complex.zero();
				coefficients[n - i] = Complex.zero();
			}
		}

		return this.inverseFourierTransform(coefficients).map((c) => c.real);
	}

	/**
	 * Applies a band-pass filter to the input signal using specified cutoff frequencies.
	 *
	 * @param {number[]} signal - The input signal to be filtered.
	 * @param {number} lowerCutoffFrequency - The lower cutoff frequency of the band-pass filter.
	 * @param {number} upperCutoffFrequency - The upper cutoff frequency of the band-pass filter.
	 * @returns {number[]} The filtered signal.
	 */
	applyBandPassFilter(
		signal: number[],
		lowerCutoffFrequency: number,
		upperCutoffFrequency: number,
	): number[] {
		const n = signal.length;
		const coefficients = this.calculateFourierSeries(signal);

		for (let i = 0; i < n; i++) {
			const frequency = (i / n) * (1 / 2);
			if (
				frequency < lowerCutoffFrequency ||
				frequency > upperCutoffFrequency
			) {
				coefficients[i] = Complex.zero();
				coefficients[n - i] = Complex.zero();
			}
		}

		return this.inverseFourierTransform(coefficients).map((c) => c.real);
	}

	/**
	 * Calculates the Fourier series coefficients of the input signal using the Fast Fourier Transform (fastFourierTransform) algorithm.
	 *
	 * @param {number[]} signal - The input signal.
	 * @returns {Complex[]} The Fourier series coefficients.
	 */
	calculateFourierSeries(signal: number[]): Complex[] {
		const complexSignal = signal.map((value) => new Complex(value, 0));
		return this.fastFourierTransform(complexSignal);
	}

	/**
	 * Performs the inverse Fourier Transform to obtain the original signal from its Fourier series coefficients.
	 *
	 * @param {Complex[]} coefficients - The Fourier series coefficients.
	 * @returns {Complex[]} The original signal.
	 */
	inverseFourierTransform(coefficients: Complex[]): Complex[] {
		const complexSignal = this.fastFourierTransform(
			coefficients.map((c) => c.conjugate()),
		);
		return complexSignal.map((c) => c.scale(1 / complexSignal.length));
	}

	/**
	 * Fast Fourier Transform algorithm implementation.
	 *
	 * @param {Complex[]} signal - The input signal.
	 * @returns {Complex[]} The Fourier transform of the input signal.
	 */
	fastFourierTransform(signal: Complex[]): Complex[] {
		const n = signal.length;

		if (n <= 1) {
			return signal;
		}

		const even = this.fastFourierTransform(
			signal.filter((_, index) => index % 2 === 0),
		);
		const odd = this.fastFourierTransform(
			signal.filter((_, index) => index % 2 !== 0),
		);

		const result = new Array(n);
		for (let k = 0; k < n / 2; k++) {
			const term = Complex.fromPolar(
				1,
				(-2 * MathsConstants.pi.value * k) / n,
			).multiply(odd[k]);
			result[k] = even[k].add(term);
			result[k + n / 2] = even[k].subtract(term);
		}

		return result;
	}

	/**
	 * Modulates the given signal using the provided carrier frequency.
	 *
	 * @param {number[]} signal - The signal to be modulated.
	 * @param {number} carrierFrequency - The frequency of the carrier signal.
	 * @return {number[]} The modulated signal.
	 */
	modulateSignal(signal: number[], carrierFrequency: number): number[] {
		const n = signal.length;
		const modulatedSignal = [];

		for (let i = 0; i < n; i++) {
			const t = (i / n) * (1 / carrierFrequency);
			const carrier = Complex.fromPolar(
				1,
				2 * MathsConstants.pi.value * carrierFrequency * t,
			);
			const modulatedValue = signal[i] * carrier.real; // Take the real part after modulation
			modulatedSignal.push(modulatedValue);
		}

		return modulatedSignal;
	}

	/**
	 * Calculates the Laplace transform of the input signal.
	 *
	 * @param {number[]} signal - The input signal.
	 * @returns {Complex[]} The Laplace transform of the input signal.
	 */
	calculateLaplaceTransform(signal: number[]): Complex[] {
		const n = signal.length;
		const complexSignal = signal.map((value) => new Complex(value, 0));
		const transformedSignal = this.fastFourierTransform(complexSignal);
		return transformedSignal.map((c) => c.scale(1 / n));
	}

	/**
	 * Calculates the Z-transform of the input signal.
	 *
	 * @param {number[]} signal - The input signal.
	 * @returns {Complex[]} The Z-transform of the input signal.
	 */
	calculateZTransform(signal: number[]): Complex[] {
		const n = signal.length;
		const complexSignal = signal.map((value) => new Complex(value, 0));
		const transformedSignal = this.fastFourierTransform(complexSignal);
		const z = Complex.fromPolar(1, (2 * MathsConstants.pi.value) / n);
		return transformedSignal.map((c) => c.multiply(z.toExponent(-1)));
	}

	/**
	 * Calculates the wavelet transform of the input signal.
	 *
	 * @param {number[]} signal - The input signal.
	 * @param {number[]} wavelet - The wavelet function.
	 * @returns {number[]} The wavelet transform of the input signal.
	 */
	calculateWaveletTransform(signal: number[], wavelet: number[]): number[] {
		const n = signal.length;
		const m = wavelet.length;
		const transformedSignal = [];

		for (let k = 0; k <= n - m; k++) {
			let sum = 0;
			for (let i = 0; i < m; i++) {
				sum += signal[k + i] * wavelet[i];
			}
			transformedSignal.push(sum);
		}

		return transformedSignal;
	}

	/**
	 * Performs sampling on the input signal with a given sampling rate.
	 *
	 * @param {number[]} signal - The input signal.
	 * @param {number} samplingRate - The sampling rate in samples per second.
	 * @returns {number[]} The sampled signal.
	 */
	performSampling(signal, samplingRate) {
		const samplePeriod = 1 / samplingRate;
		const sampledSignal = [];
		for (let i = 0; i < signal.length; i += samplePeriod) {
			sampledSignal.push(signal[Math.floor(i)]);
		}
		return sampledSignal;
	}

	/**
	 * Performs quantization on the input signal with a given number of bits.
	 *
	 * @param {number[]} signal - The input signal.
	 * @param {number} numBits - The number of bits for quantization.
	 * @returns {number[]} The quantized signal.
	 */
	performQuantization(signal: number[], numBits: number) {
		const quantizationLevels = 2 ** numBits;
		const maxAmplitude = SO.max(signal);
		const minAmplitude = SO.min(signal);
		const amplitudeRange = maxAmplitude - minAmplitude;
		const quantizationStep = amplitudeRange / quantizationLevels;

		const quantizedSignal = signal.map((sample) => {
			const quantizationLevel = Math.round(
				(sample - minAmplitude) / quantizationStep,
			);
			const quantizedSample =
				quantizationLevel * quantizationStep + minAmplitude;
			return quantizedSample;
		});

		return quantizedSignal;
	}

	/**
	 * Performs convolution between two input signals.
	 *
	 * @param {number[]} signal1 - The first input signal.
	 * @param {number[]} signal2 - The second input signal.
	 * @returns {number[]} The convolved signal.
	 */
	performConvolution(signal1, signal2) {
		const M = signal1.length;
		const N = signal2.length;
		const resultLength = M + N - 1;
		const result = new Array(resultLength).fill(0);

		for (let i = 0; i < M; i++) {
			for (let j = 0; j < N; j++) {
				result[i + j] += signal1[i] * signal2[j];
			}
		}

		return result;
	}
}
