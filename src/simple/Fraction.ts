import { gcd2 } from '../util'

export class Faction {
	public numerator: number;
	public denominator: number;
	public simplifiedNumerator: number;
	public simplifiedDenominator: number;
	constructor(numerator: number, denominator: number) {
		let newNum = numerator,
			newDen = denominator,
			numDec = 0,
			denDec = 0;
		if (Math.floor(numerator) != numerator) {
			numDec = numerator.toString().split('.')[1].length || 0;
		}
		if (Math.floor(denominator) != denominator) {
			denDec = denominator.toString().split('.')[1].length || 0;
		}
		if (numDec > 0 || denDec > 0) {
			if (numDec > denDec) {
				for (let i = 0; i < numDec; i++) {
					newNum = newNum * 10;
					newDen = newDen * 10;
				}
			} else if (numDec < denDec) {
				for (let i = 0; i < denDec; i++) {
					newNum = newNum * 10;
					newDen = newDen * 10;
				}
			}
		}
		this.numerator = numerator;
		this.denominator = denominator;
		return this;
	}

	simplified() {
		const gcd = gcd2(this.numerator,this.denominator)
		this.simplifiedNumerator = this.numerator / gcd;
		this.simplifiedDenominator = this.denominator / gcd;
		return [this.numerator / gcd, this.denominator / gcd];
	}

	decimal() {
		return this.numerator / this.denominator;
	}

	percentage() {
		return (this.numerator / this.denominator) * 100;
	}

	toString() {
		return `${this.numerator}/${this.denominator}`;
	}
	toSimplifiedString() {
		if (!this.simplifiedDenominator || this.simplifiedNumerator)
			throw new Error('The Fraction has not been simplified yet.');
		return `${this.simplifiedNumerator}/${this.simplifiedDenominator}`;
	}
}
