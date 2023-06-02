export const angleEnum = {
	Arcminutes: 'ARCMINUTES',
	Arcseconds: 'ARCSECONDS',
	Degrees: 'DEGREES',
	Radians: 'RADIANS',
	Gradians: 'GRADIANS',
	Milliradians: 'MILLIRADIANS',
	Revolutions: 'REVOLUTIONS',
	Quadrants: 'QUADRANTS',
	Sextants: 'SEXTANTS',
	Signs: 'SIGNS',
	Octants: 'OCTANTS',
} as const;

export class Conversions {
	/**
	 * Converts an angle from one unit to another.
	 *
	 * @param {number} value - The value of the angle to convert.
	 * @param {typeof angleEnum | string} fromUnit - The unit of the input angle.
	 * @param {typeof angleEnum | string} toUnit - The desired unit of the output angle.
	 * @throws {Error} Unknown unit: {fromUnit} or Unknown unit: {toUnit} if the provided units are not recognized.
	 * @return {number} The converted angle value.
	 */
	static convertAngle(value: number, fromUnit: typeof angleEnum | string, toUnit: typeof angleEnum | string,): number {
		let degrees: number;
		switch (fromUnit) {
			case 'ARCMINUTES':
				degrees = value * (1 / 60);
				break;
			case 'ARCSECONDS':
				degrees = value * (1 / 3600);
				break;
			case 'DEGREES':
				degrees = value * 1;
				break;
			case 'RADIANS':
				degrees = value * (180 / 3.14159265359);
				break;
			case 'GRADIANS':
				degrees = value * 0.9;
				break;
			case 'MILLIRADIANS':
				degrees = value * (180 / 3141.59265359);
				break;
			case 'REVOLUTIONS':
				degrees = value * 360;
				break;
			case 'QUADRANTS':
				degrees = value * 90;
				break;
			case 'SEXTANTS':
				degrees = value * 60;
				break;
			case 'SIGNS':
				degrees = value * 30;
				break;
			case 'OCTANTS':
				degrees = value * 45;
				break;
			default:
				throw new Error(`Unknown unit: ${fromUnit}`);
		}

		let output: number;
		switch (toUnit) {
			case 'ARCMINUTES':
				output = degrees / (1 / 60);
				break;
			case 'ARCSECONDS':
				output = degrees / (1 / 3600);
				break;
			case 'DEGREES':
				output = degrees / 1;
				break;
			case 'RADIANS':
				output = degrees / (180 / 3.14159265359);
				break;
			case 'GRADIANS':
				output = degrees / 0.9;
				break;
			case 'MILLIRADIANS':
				output = degrees / (180 / 3141.59265359);
				break;
			case 'REVOLUTIONS':
				output = degrees / 360;
				break;
			case 'QUADRANTS':
				output = degrees / 90;
				break;
			case 'SEXTANTS':
				output = degrees / 60;
				break;
			case 'SIGNS':
				output = degrees / 30;
				break;
			case 'OCTANTS':
				output = degrees / 45;
				break;
			default:
				throw new Error(`Unknown unit: ${toUnit}`);
		}
		return output;
	}
}
