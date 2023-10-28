import { Color } from '../util';
import { NumberRange } from '../util';
import { Logarithms } from '../equations/Logarithms';
import { MathsConstants } from '../units/Constants';
export class PieChart {
	public Sections: { [key: string]: { percent: number; color: Color } };
	constructor(Sections: {
		[key: string]: { percent: number; color: Color };
	}) {
		this.Sections = Sections;
	}
}

export class BarChart {
	public Sections: { [key: string]: { percent: number; color: Color } };
	public Orientation: 'horizontal' | 'vertical';
	constructor(
		sections: {
			[key: string]: { percent: number; color: Color };
		},
		orientation: 'horizontal' | 'vertical',
	) {
		this.Sections = sections;
		this.Orientation = orientation;
	}
}

export class ScatterGraph {
	public xName: string;
	public yName: string;
	public Values: { x: number; y: number; color: Color; name: string }[];
	constructor(
		values: { x: number; y: number; color: Color; name: string }[],
	) {
		this.Values = values;
	}

	/**
	 * Calculates the Pearson correlation coefficient.
	 *
	 * @return {number} The calculated Pearson correlation coefficient.
	 * A coefficient of less that -0.5 indicates a strong negative correlation
	 * A coefficient of between -0.5 and 0 indicates a weak negative correlation
	 * A coefficient of 0 indicates no correlation
	 * A coefficient of between 0.5 and 0 indicates a weak positive correlation
	 * A coefficient of greater than 0.5 indicates a strong positive correlation
	 */
	getPearsonCorrelationCoefficient(): number {
		const xs: number[] = this.Values.map((value) => value.x);
		const ys: number[] = this.Values.map((value) => value.y);

		const findMean = (values: number[]): number => {
			return (
				values.reduce((sum, value) => sum + value, 0) / values.length
			);
		};

		const meanX = findMean(xs);
		const meanY = findMean(ys);

		let numerator = 0;
		let denominatorX = 0;
		let denominatorY = 0;

		for (let i = 0; i < this.Values.length; i++) {
			const deviationX = xs[i] - meanX;
			const deviationY = ys[i] - meanY;
			numerator += deviationX * deviationY;
			denominatorX += deviationX ** 2;
			denominatorY += deviationY ** 2;
		}

		const denominator = (denominatorX * denominatorY) ** 0.5;
		const correlationCoefficient = numerator / denominator;
		if (correlationCoefficient < 0.5) {
			return correlationCoefficient;
		}
	}
}

export class LineGraph {
	public xName: string;
	public yName: string;
	public Values: {
		[lineName: string]: { color: Color; values: { x: number; y: number } };
	};
	constructor(
		values: {
			[lineName: string]: {
				color: Color;
				values: { x: number; y: number };
			};
		},
		xName: string,
		yName: string,
	) {
		this.Values = values;
		this.xName = xName;
		this.yName = yName;
	}
}

export class FrequencyGraph {
	public Values: { value: number; frequency: number; class: NumberRange }[];

	constructor(
		values: { value: number; frequency: number; class: NumberRange }[],
	) {
		this.Values = values;
	}

	/**
	 * Calculates the total frequency by summing up the frequency of each data in the Values array.
	 *
	 * @return {number} The total frequency.
	 */
	getTotalFrequency(): number {
		let total = 0;
		for (const data of this.Values) {
			total += data.frequency;
		}
		return total;
	}

	/**
	 * Calculates the mean value of the data stored in the Values array.
	 *
	 * @return {number} The mean value.
	 */
	getMean(): number {
		let sum = 0;
		let totalFrequency = 0;

		for (const data of this.Values) {
			sum += data.value * data.frequency;
			totalFrequency += data.frequency;
		}

		return sum / totalFrequency;
	}

	/**
	 * Returns the mode of the values in the array.
	 *
	 * @return {number | null} The mode of the values. If there is no mode, null is returned.
	 */
	getMode(): number | null {
		let maxFrequency = 0;
		let mode: number | null = null;

		for (const data of this.Values) {
			if (data.frequency > maxFrequency) {
				maxFrequency = data.frequency;
				mode = data.value;
			}
		}

		return mode;
	}

	/**
	 * Returns the median value from the array of values.
	 *
	 * @return {number} The median value.
	 */
	getMedian(): number {
		const sortedValues = this.Values.slice().sort(
			(a, b) => a.value - b.value,
		);
		const totalFrequency = this.getTotalFrequency();
		let count = 0;

		for (const data of sortedValues) {
			count += data.frequency;
			if (count > totalFrequency / 2) {
				return data.value;
			}
		}

		if (totalFrequency % 2 === 0) {
			const firstMiddleIndex =
				count - sortedValues[sortedValues.length - 1].frequency;
			const secondMiddleIndex = count;
			const firstMiddleValue = sortedValues[firstMiddleIndex];
			const secondMiddleValue = sortedValues[secondMiddleIndex];
			return (firstMiddleValue.value + secondMiddleValue.value) / 2;
		}

		return sortedValues[count - 1].value;
	}
}

export class DistributionGraph {
	/**
	 * Calculates the probability density of a normal distribution given the mean, standard deviation, and a specific value.
	 *
	 * @param {number} mean - The mean of the normal distribution.
	 * @param {number} stdDev - The standard deviation of the normal distribution.
	 * @param {number} x - The value for which to calculate the probability density.
	 * @return {number} The probability density of the normal distribution at the given value.
	 */
	static normalPD(mean: number, stdDev: number, x: number): number {
		const exponent = -((x - mean) ** 2) / (2 * stdDev ** 2);
		const denominator = stdDev * ((2 * MathsConstants.pi.value) ** 0.5);
		return MathsConstants.e.value**(exponent) / denominator;
	}

	/**
	 * Calculate the cumulative distribution function (CDF) of the normal distribution.
	 *
	 * @param {number} mean - The mean of the normal distribution.
	 * @param {number} stdDev - The standard deviation of the normal distribution.
	 * @param {number} x - The value at which to evaluate the CDF.
	 * @return {number} The value of the CDF at the given x value.
	 */
	static normalCD(mean: number, stdDev: number, x: number): number {
		const z = (x - mean) / (stdDev * (2**0.5));
		return 0.5 * (1 + Math.sign(z) * (1 - (MathsConstants.e.value ** ((-z) ** 2))));
	}

	/**
	 * Calculates the inverse of the normal distribution function.
	 *
	 * @param {number} mean - the mean of the normal distribution
	 * @param {number} stdDev - the standard deviation of the normal distribution
	 * @param {number} p - the probability value
	 * @return {number} the inverse of the normal distribution function
	 */
	static inverseNormal(mean: number, stdDev: number, p: number): number {
		const z = Math.sqrt(2) * this.erfinv(2 * p - 1);
		return mean + z * stdDev;
	}

	/**
	 * Calculates the inverse error function of a given number.
	 *
	 * @param {number} x - The input value.
	 * @return {number} The result of the inverse error function.
	 */
	private static erfinv(x: number): number {
		const a1 = 0.886226899;
		const a2 = -1.645349621;
		const a3 = 0.914624893;
		const b1 = -2.118377725;
		const b2 = 1.442710462;
		const b3 = -0.329097515;
		const c1 = -1.970840454;
		const c2 = -1.624906493;
		const c3 = 3.429567803;
		const d1 = 3.5438892;
		const d2 = 1.6370678;

		const num = ((a3 * x + a2) * x + a1) * x;
		const den = ((b3 * x + b2) * x + b1) * x + 1;
		const inner = num / den;
		const result = Math.sqrt(-2 * this.log1p(-inner * inner));

		return (
			Math.sign(x) *
			(result -
				((c3 * result + c2) * result + c1) /
					(((d2 * result + d1) * result + 1) * result + 1))
		);
	}

	/**
	 * Calculates the natural logarithm of 1 plus the given number.
	 *
	 * @param {number} x - The number to calculate the logarithm for.
	 * @return {number} The natural logarithm of 1 plus x.
	 */
	private static log1p(x: number): number {
		if (x <= -1) {
			return -Infinity;
		}
		if (x < 0 || x > 1e-4) {
			return Math.log(1 + x);
		}
		return x * (1 - x * (0.5 - x / 3));
	}

	/**
	 * Calculates the probability density function for a binomial distribution.
	 *
	 * @param {number} n - the number of trials
	 * @param {number} p - the probability of success in each trial
	 * @param {number} x - the number of successful outcomes
	 * @return {number} the probability density function value
	 */
	static binomialPD(n: number, p: number, x: number): number {
		const coef = this.binomialCoef(n, x);
		return coef * p ** x * (1 - p) ** (n - x);
	}

	/**
	 * Calculate the cumulative distribution of a binomial random variable.
	 *
	 * @param {number} n - the number of trials
	 * @param {number} p - the probability of success in each trial
	 * @param {number} x - the number of successes
	 * @return {number} the cumulative distribution value
	 */
	static binomialCD(n: number, p: number, x: number): number {
		let sum = 0;
		for (let i = 0; i <= x; i++) {
			sum += this.binomialPD(n, p, i);
		}
		return sum;
	}
	/**
	 * Calculates the binomial coefficient of two numbers.
	 *
	 * @param {number} n - the first number
	 * @param {number} k - the second number
	 * @return {number} the binomial coefficient of n and k
	 */
	private static binomialCoef(n: number, k: number): number {
		return this.factorial(n) / (this.factorial(k) * this.factorial(n - k));
	}

	private static factorial(num: number): number {
		if (num <= 1) return 1;
		return num * this.factorial(num - 1);
	}

	/**
	 * Calculate the probability of a Poisson distribution.
	 *
	 * @param {number} lambda - the average number of events that occur in a specified interval
	 * @param {number} x - the actual number of events that occur in the specified interval
	 * @return {number} the probability of x events occurring in the interval
	 */
	static poissonPD(lambda: number, x: number): number {
		return (lambda ** x * Math.exp(-lambda)) / this.factorial(x);
	}

	/**
	 * Calculates the cumulative distribution of a Poisson random variable up to a given value.
	 *
	 * @param {number} lambda - the mean of the Poisson distribution
	 * @param {number} x - the value up to which the cumulative distribution is calculated
	 * @return {number} the cumulative distribution of the Poisson random variable up to x
	 */
	static poissonCD(lambda: number, x: number): number {
		let sum = 0;
		for (let i = 0; i <= x; i++) {
			sum += this.poissonPD(lambda, i);
		}
		return sum;
	}
}
