import { Color } from '../util';
export class PieChart {
	readonly Sections: { [key: string]: { percent: number; color: Color } };
	constructor(Sections: {
		[key: string]: { percent: number; color: Color };
	}) {
		this.Sections = Sections;
	}
}

export class BarChart {
	readonly Sections: { [key: string]: { percent: number; color: Color } };
	readonly Orientation: 'horizontal' | 'vertical';
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
	readonly xName: string;
	readonly yName: string;
	readonly Values: {
		[x: number]: { [y: number]: { color: Color; name: string } };
	};
	constructor(values: {
		[x: number]: { [y: number]: { color: Color; name: string } };
	}) {
		this.Values = values;
	}
}

export class LineGraph {
	readonly xName: string;
	readonly yName: string;
	readonly Values: { [lineName: string]: { color: Color; values: number[] } };
	constructor(
		values: {
			[lineName: string]: { color: Color; values: number[] };
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
	readonly Values: { value: number; frequency: number; class: Range }[];
	constructor(values: { value: number; frequency: number; class: Range }[]) {
		this.Values = values;
	}
}
