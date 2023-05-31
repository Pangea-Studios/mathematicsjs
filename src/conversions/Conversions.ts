export class Conversions {
	/**
	 * Converts a length from one unit to another.
	 *
	 * @param {number} value - The value to convert.
	 * @param {string} fromUnit - The unit of the input value.
	 * @param {string} toUnit - The desired unit for the output value.
	 * @throws {Error} Unknown unit: {fromUnit} or Unknown unit: {toUnit} if the provided units are not recognized.
	 * @return {number} The converted length in the desired unit.
	 */
	static convertLength(value: number, fromUnit: string, toUnit: string): number {
		// Convert input to meters
		let meters: number;
		switch (fromUnit) {
			case "millimeters":
				meters = value / 1000;
				break;
			case "decimeters":
				meters = value / 10;
				break;
			case "centimeters":
				meters = value / 100;
				break;
			case "meters":
				meters = value;
				break;
			case "kilometers":
				meters = value * 1000;
				break;
			case "megameters":
				meters = value * 1000000;
				break;
			case "micrometers":
				meters = value / 1000000;
				break;
			case "nanometers":
				meters = value / 1000000000;
				break;
			case "picometers":
				meters = value / 1000000000000;
				break;
			case "inches":
				meters = value / 39.3701;
				break;
			case "feet":
				meters = value / 3.28084;
				break;
			case "yards":
				meters = value / 1.09361;
				break;
			case "miles":
				meters = value * 1609.344;
				break;
			case "nautical miles":
				meters = value * 1852;
				break;
			case "paces":
				meters = value * 0.762;
				break;
			default:
				throw new Error(`Unknown unit: ${fromUnit}`);
		}

		// Convert meters to output unit
		let output: number;
		switch (toUnit) {
			case "millimeters":
				output = meters * 1000;
				break;
			case "decimeters":
				output = meters * 10;
				break;
			case "centimeters":
				output = meters * 100;
				break;
			case "meters":
				output = meters;
				break;
			case "kilometers":
				output = meters / 1000;
				break;
			case "megameters":
				output = meters / 1000000;
				break;
			case "micrometers":
				output = meters * 1000000;
				break;
			case "nanometers":
				output = meters * 1000000000;
				break;
			case "picometers":
				output = meters * 1000000000000;
				break;
			case "inches":
				output = meters * 39.3701;
				break;
			case "feet":
				output = meters * 3.28084;
				break;
			case "yards":
				output = meters * 1.09361;
				break;
			case "miles":
				output = meters / 1609.344;
				break;
			case "nautical miles":
				output = meters / 1852;
				break;
			case "paces":
				output = meters / 0.762;
				break;
			default:
				throw new Error(`Unknown unit: ${toUnit}`);
		}

		return output;
	}

	/**
	 * Converts a temperature value from one unit to another.
	 *
	 * @param {number} value - the value to convert
	 * @param {string} fromUnit - the unit of the input value (kelvin, celsius, or fahrenheit)
	 * @param {string} toUnit - the desired output unit (kelvin, celsius, or fahrenheit)
	 * @return {number} - the converted temperature value in the specified output unit
	 */
	static convertTemperature(value: number, fromUnit: string, toUnit: string): number {
		// Convert input to Kelvin
		let kelvin: number;
		switch (fromUnit) {
			case "kelvin":
				kelvin = value;
				break;
			case "celsius":
				kelvin = value + 273.15;
				break;
			case "fahrenheit":
				kelvin = (value + 459.67) * (5 / 9);
				break;
			default:
				throw new Error(`Unknown unit: ${fromUnit}`);
		}

		// Convert Kelvin to output unit
		let output: number;
		switch (toUnit) {
			case "kelvin":
				output = kelvin;
				break;
			case "celsius":
				output = kelvin - 273.15;
				break;
			case "fahrenheit":
				output = kelvin * (9 / 5) - 459.67;
				break;
			default:
				throw new Error(`Unknown unit: ${toUnit}`);
		}

		return output;
	}
	  
	  
}
