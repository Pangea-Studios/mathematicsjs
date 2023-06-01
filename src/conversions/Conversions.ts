export const temperatureEnum = {
	Kelvin: "KELVIN",
	Celsius: "CELSIUS",
	Fahrenheit: "FAHRENHEIT"
} as const;

export const lengthEnum = {
	Millimeters: "MILLIMETERS",
	Decimeters: "DECIMETERS",
	Centimeters: "CENTIMETERS",
	Meters: "METERS",
	Kilometers: "KILOMETERS",
	Megameters: "MEGAMETERS",
	Micrometers: "MICROMETERS",
	Nanometers: "NANOMETERS",
	Picometers: "PICOMETERS",
	Inches: "INCHES",
	Feet: "FEET",
	Yards: "YARDS",
	Miles: "MILES",
	NauticalMiles: "NAUTICAL MILES",
	Paces: "PACES"
} as const;

export const angleEnum = {
	Degrees: "DEGREES",
	Radians: "RADIANS",
	Gradians: "GRADIANS",
	Minutes: "MINUTES",
	Seconds: "SECONDS"
} as const;

export const massEnum = {
	Grams: "GRAMS",
	Kilograms: "KILOGRAMS",
	Milligrams: "MILLIGRAMS",
	Micrograms: "MICROGRAMS",
	Nanograms: "NANOGRAMS",
	Pounds: "POUNDS",
	Ounces: "OUNCES",
	Stone: "STONE",
	ImperialTons: "IMPERIALTONS",
	USTons: "USTONS",
	Tonnes: "TONNES",
	Picograms: "PICOGRAMS",
} as const;

export class Conversions {

	/**
	 * Converts a length value from one unit to another.
	 *
	 * @param {number} value - The value to be converted.
	 * @param {typeof lengthEnum | string} fromUnit - The unit to convert from.
	 * @param {typeof lengthEnum | string} toUnit - The unit to convert to.
	 * @return {number} - The converted value.
	 */
	static convertLength(value: number, fromUnit: typeof lengthEnum | string, toUnit: typeof lengthEnum | string): number {
		// Convert input to meters
		let meters: number;
		switch (fromUnit) {
			case "MILLIMETERS":
				meters = value / 1000;
				break;
			case "DECIMETERS":
				meters = value / 10;
				break;
			case "CENTIMETERS":
				meters = value / 100;
				break;
			case "METERS":
				meters = value;
				break;
			case "KILOMETERS":
				meters = value * 1000;
				break;
			case "MEGAMETERS":
				meters = value * 1000000;
				break;
			case "MICROMETERS":
				meters = value / 1000000;
				break;
			case "NANOMETERS":
				meters = value / 1000000000;
				break;
			case "PICOMETERS":
				meters = value / 1000000000000;
				break;
			case "INCHES":
				meters = value / 39.3701;
				break;
			case "FEET":
				meters = value / 3.28084;
				break;
			case "YARDS":
				meters = value / 1.09361;
				break;
			case "MILES":
				meters = value * 1609.344;
				break;
			case "NAUTICAL MILES":
				meters = value * 1852;
				break;
			case "PACES":
				meters = value * 0.762;
				break;
			default:
				throw new Error(`Unknown unit: ${fromUnit}`);
		}

		// Convert meters to output unit
		let output: number;
		switch (toUnit) {
			case "MILLIMETERS":
				output = meters * 1000;
				break;
			case "DECIMETERS":
				output = meters * 10;
				break;
			case "CENTIMETERS":
				output = meters * 100;
				break;
			case "METERS":
				output = meters;
				break;
			case "KILOMETERS":
				output = meters / 1000;
				break;
			case "MEGAMETERS":
				output = meters / 1000000;
				break;
			case "MICROMETERS":
				output = meters * 1000000;
				break;
			case "NANOMETERS":
				output = meters * 1000000000;
				break;
			case "PICOMETERS":
				output = meters * 1000000000000;
				break;
			case "INCHES":
				output = meters * 39.3701;
				break;
			case "FEET":
				output = meters * 3.28084;
				break;
			case "YARDS":
				output = meters * 1.09361;
				break;
			case "MILES":
				output = meters / 1609.344;
				break;
			case "NAUTICAL MILES":
				output = meters / 1852;
				break;
			case "PACES":
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
	 * @param {number} value - The temperature value to convert.
	 * @param {typeof temperatureEnum | string} fromUnit - The unit of the input value.
	 * @param {typeof temperatureEnum | string} toUnit - The desired output unit.
	 * @throws {Error} Unknown unit: fromUnit or toUnit, if the unit is not recognized.
	 * @return {number} The temperature value converted to the desired unit.
	 */
	static convertTemperature(value: number, fromUnit: typeof temperatureEnum | string, toUnit: typeof temperatureEnum | string): number {
		// Convert input to Kelvin
		let kelvin: number;
		switch (fromUnit) {
			case "KELVIN":
				kelvin = value;
				break;
			case "CELSIUS":
				kelvin = value + 273.15;
				break;
			case "FAHRENHEIT":
				kelvin = (value + 459.67) * (5 / 9);
				break;
			default:
				throw new Error(`Unknown unit: ${fromUnit}`);
		}

		// Convert Kelvin to output unit
		let output: number;
		switch (toUnit) {
			case "KELVIN":
				output = kelvin;
				break;
			case "CELSIUS":
				output = kelvin - 273.15;
				break;
			case "FAHRENHEIT":
				output = kelvin * (9 / 5) - 459.67;
				break;
			default:
				throw new Error(`Unknown unit: ${toUnit}`);
		}

		return output;
	}


	/**
	 * Converts an angle from one unit to another.
	 *
	 * @param {number} value - The angle to be converted.
	 * @param {typeof angleEnum | string} fromUnit - The unit of the input angle.
	 * @param {typeof angleEnum | string} toUnit - The unit to convert the input angle to.
	 * @return {number} The converted angle in the desired unit.
	 */
	static convertAngle(value: number, fromUnit: typeof angleEnum | string, toUnit: typeof angleEnum | string): number {
		// Convert input to degrees
		let degrees: number;
		switch (fromUnit) {
			case "DEGREES":
				degrees = value;
				break;
			case "RADIANS":
				degrees = (value * 180) / Math.PI;
				break;
			case "GRADIANS":
				degrees = (value * 0.9);
				break;
			case "MINUTES":
				degrees = value / 60;
				break;
			case "SECONDS":
				degrees = value / 3600;
				break;
			default:
				throw new Error(`Unknown unit: ${fromUnit}`);
		}

		// Convert degrees to output unit
		let output: number;
		switch (toUnit) {
			case "DEGREES":
				output = degrees;
				break;
			case "RADIANS":
				output = (degrees * Math.PI) / 180;
				break;
			case "GRADIANS":
				output = (degrees / 0.9);
				break;
			case "MINUTES":
				output = degrees * 60;
				break;
			case "SECONDS":
				output = degrees * 3600;
				break;
			default:
				throw new Error(`Unknown unit: ${toUnit}`);
		}

		return output;
	}

	static convertMass(value: number, fromUnit: typeof massEnum | string, toUnit: typeof massEnum | string): number {
		// Convert input to grams
		let grams: number;
		switch (fromUnit) {
			case "GRAMS":
				grams = value;
				break;
			case "KILOGRAMS":
				grams = value * 1000;
				break;
			case "MILLIGRAMS":
				grams = grams / 1000;
				break;
			case "MICROGRAMS":
				grams = value / 1000000;
				break;
			case "NANOGRAMS":
				grams = value / 1000000000;
				break;
			case "PICOGRAMS":
				grams = value / 1000000000000;
				break;
			case "POUNDS":
				grams = value * 453.592;
				break;
			case "OUNCES":
				grams = value * 28.3495;
				break;
			case "USTONS":
				grams = value * 907200;
				break;
			case "STONES":
				grams = value * 6350.293;
				break;
			case "TONNES":
				grams = value * 1000000;
				break;
			case "IMPERIALTONS":
				grams = value * 1016047;
				break;
			default:
				throw new Error(`Unknown unit: ${fromUnit}`);
		}

		// Convert degrees to output unit
		let output: number;
		switch (toUnit) {
			case "GRAMS":
				output = grams;
				break;
			case "KILOGRAMS":
				output = grams / 1000;
				break;
			case "TONNES":
				output = grams / 1000000;
				break;
			case "MILLIGRAMS":
				output = grams * 1000;
				break;
			case "MICROGRAMS":
				output = grams * 1000000;
				break;
			case "NANOGRAMS":
				output = grams * 1000000000;
				break;
			case "PICOGRAMS":
				output = grams * 1000000000000;
				break;
			case "POUNDS":
				output = grams/453.592;
				break;
			case "OUNCES":
				output = grams/28.3495;
				break;
			case "USTONS":
				output = grams/907200;
				break;
			case "STONES":
				output = grams/6350.293;
				break;
			case "IMPERIALTONS":
				output = grams/1016047;
				break;
			
			default:
				throw new Error(`Unknown unit: ${toUnit}`);
		}

		return output;
	}
}
