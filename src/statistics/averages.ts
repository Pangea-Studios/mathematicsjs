import { add } from '../simple/operations';

export class Averages {
	static mean(input: number[]) {
		let output = add(input);
		return (output /= input.length);
	}

	static median(input: number[]) {
		let length = input.length;
		length = length / 2;
		if (length === Math.round(length)) return input[length];
		return input[length - 0.5] / input[length + 0.5];
	}

	static mode(input: number[]) {
		if (input.length === 0) {
			return 0;
		}

		const m = input
			.reduce((items, current) => {
				const item =
					items.length === 0
						? null
						: items.find((x) => x === current);
				item
					? item.occurrence++
					: items.push({ value: current, occurrence: 1 });
				return items;
			}, [])
			.sort((a, b) => {
				if (a.occurrence < b.occurrence) {
					return 1;
				} else if (a.occurrence > b.occurrence || a.value < b.value) {
					return -1;
				} else {
					return a.value === b.value ? 0 : 1;
				}
			});

		return m[0].value;
	}

	static range(input: number[]) {
		const max = input.reduce((a, b) => Math.max(a, b), -Infinity);
		const min = input.reduce((a, b) => Math.min(a, b), -Infinity);

		return max - min;
	}
}
