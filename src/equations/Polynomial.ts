export class polynomial {
	readonly a: number;
	readonly b: number;
	readonly c: number;
	readonly d: number;
	readonly e: number;
	readonly string: string;
	constructor(a = 0, b = 0, c = 0, d = 0, e = 0) {
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.e = e;
		this.string =
			this.e +
			'x^4 + ' +
			this.d +
			'x^3 + ' +
			this.c +
			'x^2 + ' +
			this.b +
			'x + ' +
			this.d;
	}

	evaluate(x: number): number {
		return (
			this.e * x ** 4 +
			this.d * x ** 3 +
			this.c * x ** 2 +
			this.b * x +
			this.a
		);
	}
}
