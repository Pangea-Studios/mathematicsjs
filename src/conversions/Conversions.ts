/**
 * @typedef {string} TemperatureType
 * @typedef {string} LengthType
 * @typedef {string} AngleType
 * @typedef {string} MassType
 * @typedef {string} VolumeType
 */

/**
 * Enum for temperature measurements
 * @readonly
 * @enum {TemperatureType}
 */
export const temperatureEnum = {
	Kelvin: 'KELVIN',
	Celsius: 'CELSIUS',
	Fahrenheit: 'FAHRENHEIT',
} as const;

/**
 * Enum for length measurements
 * @readonly
 * @enum {LengthType}
 */
export const lengthEnum = {
	Millimeters: 'MILLIMETERS',
	Decimeters: 'DECIMETERS',
	Centimeters: 'CENTIMETERS',
	Meters: 'METERS',
	Kilometers: 'KILOMETERS',
	Micrometers: 'MICROMETERS',
	Nanometers: 'NANOMETERS',
	Picometers: 'PICOMETERS',
	Inches: 'INCHES',
	Feet: 'FEET',
	Yards: 'YARDS',
	Miles: 'MILES',
	NauticalMiles: 'NAUTICAL_MILES',
	Paces: 'PACES',
} as const;

/**
 * Enum for angle measurements
 * @readonly
 * @enum {AngleType}
 */
export const angleEnum = {
	Degrees: 'DEGREES',
	Radians: 'RADIANS',
	Gradians: 'GRADIANS',
	Minutes: 'MINUTES',
	Seconds: 'SECONDS',
} as const;

/**
 * Enum for mass measurements
 * @readonly
 * @enum {MassType}
 */
export const massEnum = {
	Grams: 'GRAMS',
	Kilograms: 'KILOGRAMS',
	Milligrams: 'MILLIGRAMS',
	Micrograms: 'MICROGRAMS',
	Nanograms: 'NANOGRAMS',
	Pounds: 'POUNDS',
	Ounces: 'OUNCES',
	Stone: 'STONE',
	ImperialTons: 'IMPERIAL_TONS',
	USTons: 'US_TONS',
	Tonnes: 'TONNES',
	Picograms: 'PICOGRAMS',
} as const;

/**
 * Enum for volume measurements
 * @readonly
 * @enum {VolumeType}
 */
export const volumeEnum = {
	CubicMeters: 'CUBIC_METERS',
	CubicFeet: 'CUBIC_FEET',
	CubicYards: 'CUBIC_YARDS',
	CubicInches: 'CUBIC_INCHES',
	CubicCentimeters: 'CUBIC_CENTIMETERS',
	CubicMillimeters: 'CUBIC_MILLIMETERS',
	CubicMicrometers: 'CUBIC_MICROMETERS',
	CubicNanometers: 'CUBIC_NANOMETERS',
	CubicPicometers: 'CUBIC_PICOMETERS',
	CubicHectometers: 'CUBIC_HECTOMETERS',
	CubicKilometers: 'CUBIC_KILOMETERS',
	CubicDecimeters: 'CUBIC_DECIMETERS',
	Liters: 'LITERS',
	Milliliters: 'MILLILITERS',
	ImperialGallons: 'IMPERIAL_GALLONS',
	USLiquidGallons: 'US_LIQUID_GALLONS',
	ImperialTeaspoons: 'IMPERIAL_TEASPOONS',
	ImperialTablespoons: 'IMPERIAL_TABLESPOONS',
	ImperialCups: 'IMPERIAL_CUPS',
	ImperialPints: 'IMPERIAL_PINTS',
	ImperialQuarts: 'IMPERIAL_QUARTS',
	USFluidQuarts: 'US_LIQUID_QUARTS',
	ImperialFluidOunces: 'IMPERIAL_FLUID_OUNCES',
	USTeaspoons: 'US_TEASPOONS',
	USTablespoons: 'US_TABLESPOONS',
	FluidOunces: 'FLUID_OUNCES',
	USLegalCups: 'US_LEGAL_CUPS',
	USLiquidPints: 'US_LIQUID_PINTS',
} as const;

/**
 * Class containing all conversions.
 */
export class Conversions {
	/**
	 * Converts a length value from one unit to another.
	 *
	 * @param {number} value - The value to be converted.
	 * @param {LengthType | string} fromUnit - The unit to convert from.
	 * @param {LengthType | string} toUnit - The unit to convert to.
	 * @return {number} - The converted value.
	 */
	static convertLength(
		value: number,
		fromUnit: typeof lengthEnum | string,
		toUnit: typeof lengthEnum | string,
	): number {
		// Convert input to meters
		let meters: number;
		switch (fromUnit) {
			case 'MILLIMETERS':
				meters = value / 1000;
				break;
			case 'DECIMETERS':
				meters = value / 10;
				break;
			case 'CENTIMETERS':
				meters = value / 100;
				break;
			case 'METERS':
				meters = value;
				break;
			case 'KILOMETERS':
				meters = value * 1000;
				break;
			case 'MICROMETERS':
				meters = value / 1000000;
				break;
			case 'NANOMETERS':
				meters = value / 1000000000;
				break;
			case 'PICOMETERS':
				meters = value / 1000000000000;
				break;
			case 'INCHES':
				meters = value / 39.3701;
				break;
			case 'FEET':
				meters = value / 3.28084;
				break;
			case 'YARDS':
				meters = value / 1.09361;
				break;
			case 'MILES':
				meters = value * 1609.344;
				break;
			case 'NAUTICAL_MILES':
				meters = value * 1852;
				break;
			case 'PACES':
				meters = value * 0.762;
				break;
			default:
				throw new Error(`Unknown unit: ${fromUnit}`);
		}

		// Convert meters to output unit
		let output: number;
		switch (toUnit) {
			case 'MILLIMETERS':
				output = meters * 1000;
				break;
			case 'DECIMETERS':
				output = meters * 10;
				break;
			case 'CENTIMETERS':
				output = meters * 100;
				break;
			case 'METERS':
				output = meters;
				break;
			case 'KILOMETERS':
				output = meters / 1000;
				break;
			case 'MICROMETERS':
				output = meters * 1000000;
				break;
			case 'NANOMETERS':
				output = meters * 1000000000;
				break;
			case 'PICOMETERS':
				output = meters * 1000000000000;
				break;
			case 'INCHES':
				output = meters * 39.3701;
				break;
			case 'FEET':
				output = meters * 3.28084;
				break;
			case 'YARDS':
				output = meters * 1.09361;
				break;
			case 'MILES':
				output = meters / 1609.344;
				break;
			case 'NAUTICAL_MILES':
				output = meters / 1852;
				break;
			case 'PACES':
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
	 * @param {TemperatureType | string} fromUnit - The unit of the input value.
	 * @param {TemperatureType | string} toUnit - The desired output unit.
	 * @throws {Error} Unknown unit: fromUnit or toUnit, if the unit is not recognized.
	 * @return {number} The temperature value converted to the desired unit.
	 */
	static convertTemperature(
		value: number,
		fromUnit: typeof temperatureEnum | string,
		toUnit: typeof temperatureEnum | string,
	): number {
		// Convert input to Kelvin
		let kelvin: number;
		switch (fromUnit) {
			case 'KELVIN':
				kelvin = value;
				break;
			case 'CELSIUS':
				kelvin = value + 273.15;
				break;
			case 'FAHRENHEIT':
				kelvin = (value + 459.67) * (5 / 9);
				break;
			default:
				throw new Error(`Unknown unit: ${fromUnit}`);
		}

		// Convert Kelvin to output unit
		let output: number;
		switch (toUnit) {
			case 'KELVIN':
				output = kelvin;
				break;
			case 'CELSIUS':
				output = kelvin - 273.15;
				break;
			case 'FAHRENHEIT':
				output = kelvin * (9 / 5) - 459.67;
				break;
			default:
				throw new Error(`Unknown unit: ${toUnit}`);
		}

		return output;
	}

	/**
	 * Converts an angle value from one unit of measurement to another.
	 *
	 * @param {number} value - The value of the angle to be converted.
	 * @param {AngleType | string} fromUnit - The unit of measurement of the input angle.
	 * @param {AngleType | string} toUnit - The unit of measurement to which the angle needs to be converted.
	 * @return {number} The value of the input angle converted to the specified unit of measurement.
	 */
	static convertAngle(
		value: number,
		fromUnit: typeof angleEnum | string,
		toUnit: typeof angleEnum | string,
	): number {
		// Convert input to degrees
		let degrees: number;
		switch (fromUnit) {
			case 'DEGREES':
				degrees = value;
				break;
			case 'RADIANS':
				degrees = (value * 180) / Math.PI;
				break;
			case 'GRADIANS':
				degrees = value * 0.9;
				break;
			case 'MINUTES':
				degrees = value / 60;
				break;
			case 'SECONDS':
				degrees = value / 3600;
				break;
			default:
				throw new Error(`Unknown unit: ${fromUnit}`);
		}

		// Convert degrees to output unit
		let output: number;
		switch (toUnit) {
			case 'DEGREES':
				output = degrees;
				break;
			case 'RADIANS':
				output = (degrees * Math.PI) / 180;
				break;
			case 'GRADIANS':
				output = degrees / 0.9;
				break;
			case 'MINUTES':
				output = degrees * 60;
				break;
			case 'SECONDS':
				output = degrees * 3600;
				break;
			default:
				throw new Error(`Unknown unit: ${toUnit}`);
		}

		return output;
	}

	/**
	 * Converts a mass value from one unit to another.
	 *
	 * @param {number} value - The value to be converted.
	 * @param {MassType | string} fromUnit - The unit to convert from.
	 * @param {MassType | string} toUnit - The unit to convert to.
	 * @return {number} The converted value.
	 */
	static convertMass(
		value: number,
		fromUnit: typeof massEnum | string,
		toUnit: typeof massEnum | string,
	): number {
		// Convert input to grams
		let grams: number;
		switch (fromUnit) {
			case 'GRAMS':
				grams = value;
				break;
			case 'KILOGRAMS':
				grams = value * 1000;
				break;
			case 'MILLIGRAMS':
				grams = grams / 1000;
				break;
			case 'MICROGRAMS':
				grams = value / 1000000;
				break;
			case 'NANOGRAMS':
				grams = value / 1000000000;
				break;
			case 'PICOGRAMS':
				grams = value / 1000000000000;
				break;
			case 'POUNDS':
				grams = value * 453.592;
				break;
			case 'OUNCES':
				grams = value * 28.3495;
				break;
			case 'US_TONS':
				grams = value * 907200;
				break;
			case 'STONES':
				grams = value * 6350.293;
				break;
			case 'TONNES':
				grams = value * 1000000;
				break;
			case 'IMPERIAL_TONS':
				grams = value * 1016047;
				break;
			default:
				throw new Error(`Unknown unit: ${fromUnit}`);
		}

		// Convert mass to output unit
		let output: number;
		switch (toUnit) {
			case 'GRAMS':
				output = grams;
				break;
			case 'KILOGRAMS':
				output = grams / 1000;
				break;
			case 'TONNES':
				output = grams / 1000000;
				break;
			case 'MILLIGRAMS':
				output = grams * 1000;
				break;
			case 'MICROGRAMS':
				output = grams * 1000000;
				break;
			case 'NANOGRAMS':
				output = grams * 1000000000;
				break;
			case 'PICOGRAMS':
				output = grams * 1000000000000;
				break;
			case 'POUNDS':
				output = grams / 453.592;
				break;
			case 'OUNCES':
				output = grams / 28.3495;
				break;
			case 'USTONS':
				output = grams / 907200;
				break;
			case 'STONES':
				output = grams / 6350.293;
				break;
			case 'IMPERIAL_TONS':
				output = grams / 1016047;
				break;
			default:
				throw new Error(`Unknown unit: ${toUnit}`);
		}

		return output;
	}

	/**
	 * Converts a volume value from one unit to another.
	 *
	 * @param {number} value - The value to be converted.
	 * @param {VolumeType | string} fromUnit - The unit to convert from.
	 * @param {VolumeType | string} toUnit - The unit to convert to.
	 * @return {number} The converted value.
	 */
	static convertVolume(
		value: number,
		fromUnit: typeof volumeEnum | string,
		toUnit: typeof volumeEnum | string,
	): number {
		let litres: number;
		switch (fromUnit) {
			case 'LITRES':
				litres = value;
				break;
			case 'CUBIC_METERS':
				litres = value * 1000;
				break;
			case 'CUBIC_FEET':
				litres = value * 28.3168;
				break;
			case 'CUBIC_INCHES':
				litres = value * 0.0163871;
				break;
			case 'CUBIC_CENTIMETERS':
				litres = value * 0.001;
				break;
			case 'CUBIC_DECIMETERS':
				litres = value;
				break;
			case 'CUBIC_MILLIMETERS':
				litres = value * 0.000001;
				break;
			case 'CUBIC_MICROMETERS':
				litres = value * 0.000000000000001;
				break;
			case 'CUBIC_NANOMETERS':
				litres = value * 0.000000000000000000000001;
				break;
			case 'CUBIC_PICOMETERS':
				litres = value * 0.000000000000000000000000000000001;
				break;
			case 'CUBIC_KILOMETERS':
				litres = value * 1000000000000;
				break;
			case 'CUBIC_HECTOMETERS':
				litres = value * 1000000000;
				break;
			case 'CUBIC_YARDS':
				litres = value / 1760;
				break;
			case 'MILLILITERS':
				litres = value * 0.001;
				break;
			case 'IMPERIAL_GALLONS':
				litres = value * 4.54609;
				break;
			case 'IMPERIAL_PINTS':
				litres = value * 0.568261;
				break;
			case 'IMPERIAL_QUARTS':
				litres = value * 1.13652;
				break;
			case 'IMPERIAL_CUPS':
				litres = value * 0.284131;
				break;
			case 'IMPERIAL_FLUID_OUNCE':
				litres = value * 0.0284131;
				break;
			case 'IMPERIAL_TEASPOONS':
				litres = value * 0.00591939;
				break;
			case 'IMPERIAL_TABLESPOONS':
				litres = value * 0.0177582;
				break;
			case 'US_LIQUID_GALLONS':
				litres = value * 3.78541;
				break;
			case 'US_LIQUID_PINTS':
				litres = value * 0.473176;
				break;
			case 'US_LIQUID_QUARTS':
				litres = value * 0.946353;
				break;
			case 'US_LEGAL_CUPS':
				litres = value * 0.24;
				break;
			case 'US_TABLESPOONS':
				litres = value * 0.0147868;
				break;
			case 'US_TEASPOONS':
				litres = value * 0.00492892;
				break;
			case 'FLUID_OUNCE':
				litres = value * 0.00295735;
				break;
			default:
				throw new Error(`Unknown unit: ${fromUnit}`);
		}

		let output: number;
		switch (toUnit) {
			case 'LITRES':
				output = litres;
				break;
			case 'MILLILITRES':
				output = litres * 1000;
				break;
			case 'CUBIC_METERS':
				output = litres * 0.001;
				break;
			case 'CUBIC_FEET':
				output = litres * 0.0353147;
				break;
			case 'CUBIC_INCHES':
				output = litres * 61.0237;
				break;
			case 'CUBIC_CENTIMETERS':
				output = litres * 1000;
				break;
			case 'CUBIC_MILLIMETERS':
				output = litres * 1000000;
				break;
			case 'CUBIC_MICROMETERS':
				output = litres * 1000000000000000;
				break;
			case 'CUBIC_NANOMETERS':
				output = litres * 1000000000000000000000000;
				break;
			case 'CUBIC_PICOMETERS':
				output = litres * 1000000000000000000000000000000000;
				break;
			case 'CUBIC_DECIMETERS':
				output = litres;
				break;
			case 'CUBIC_KILOMETERS':
				output = litres * 0.000000000001;
				break;
			case 'CUBIC_HECTOMETERS':
				output = litres * 0.000000001;
				break;
			case 'CUBIC_YARDS':
				output = litres * 0.00130795;
				break;
			case 'IMPERIAL_GALLONS':
				output = litres * 4.54609;
				break;
			case 'IMPERIAL_PINTS':
				output = litres * 1.75975;
				break;
			case 'IMPERIAL_QUARTS':
				output = litres * 0.879877;
				break;
			case 'IMPERIAL_CUPS':
				output = litres * 3.51951;
				break;
			case 'IMPERIAL_FLUID_OUNCES':
				output = litres * 35.1951;
				break;
			case 'IMPERIAL_TEASPOONS':
				output = litres * 168.936;
				break;
			case 'IMPERIAL_TABLESPOONS':
				output = litres * 56.3121;
				break;
			case 'US_LIQUID_GALLONS':
				output = litres * 0.264172;
				break;
			case 'US_LIQUID_PINTS':
				output = litres * 2.11338;
				break;
			case 'US_LIQUID_QUARTS':
				output = litres * 1.05669;
				break;
			case 'US_LEGAL_CUPS':
				output = litres * 4.16667;
				break;
			case 'US_TABLESPOONS':
				output = litres * 67.628;
				break;
			case 'US_TEASPOONS':
				output = litres * 0.00492892;
				break;
			case 'FLUID_OUNCE':
				output = litres * 33.814;
				break;
			default:
				throw new Error(`Unknown unit: ${toUnit}`);
		}
		return output;
	}
}
