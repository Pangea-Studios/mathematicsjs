import { Color } from '../util';
import { NumberRange } from '../util';
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

		const denominator = Math.sqrt(denominatorX * denominatorY);
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

		// If the total frequency is even and exactly in the middle, return the average of the two middle values
		if (totalFrequency % 2 === 0) {
			const firstMiddleIndex =
				count - sortedValues[sortedValues.length - 1].frequency;
			const secondMiddleIndex = count;
			const firstMiddleValue = sortedValues[firstMiddleIndex];
			const secondMiddleValue = sortedValues[secondMiddleIndex];
			return (firstMiddleValue.value + secondMiddleValue.value) / 2;
		}

		// If the total frequency is odd and exactly in the middle, return the middle value
		return sortedValues[count - 1].value;
	}
}
