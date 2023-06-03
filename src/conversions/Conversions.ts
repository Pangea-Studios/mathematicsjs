export const energyEnum = {
	Joules: 'JOULES',
	Electronvolt: 'ELECTRONVOLT',
	Kiloelectronvolts: 'KILOELECTRONVOLTS',
	Megaelectronvolts: 'MEGAELECTRONVOLTS',
	Gigaelectronvolts: 'GIGAELECTRONVOLTS',
	Teraelectronvolts: 'TERAELECTRONVOLTS',
	Watts: 'WATTS',
	Watt_Hours: 'WATT_HOURS',
	Kilowatts: 'KILOWATTS',
	Kilowatt_Hours: 'KILOWATT_HOURS',
	Calories: 'CALORIES',
	Kilocalories: 'KILOCALORIES',
	British_Thermal_Units: 'BRITISH_THERMAL_UNITS',
	US_Therms: 'US_THERMS',
	Foot_pounds: 'FOOT-POUNDS',
} as const;

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

export const lengthEnum = {
	Picometers: 'PICOMETERS',
	Nanometers: 'NANOMETERS',
	Micrometers: 'MICROMETERS',
	Millimeters: 'MILLIMETERS',
	Centimeters: 'CENTIMETERS',
	Decimeters: 'DECIMETERS',
	Meters: 'METERS',
	Hectometers: 'HECTOMETERS',
	Kilometers: 'KILOMETERS',
	Astronomical_Unit: 'ASTRONOMICAL_UNIT',
	Parsec: 'PARSEC',
	Light_Years: 'LIGHT_YEARS',
	Inches: 'INCHES',
	Feet: 'FEET',
	Yards: 'YARDS',
	Miles: 'MILES',
	Nautical_Miles: 'NAUTICAL_MILES',
	Fathoms: 'FATHOMS',
	Furlongs: 'FURLONGS',
} as const;

export const timeEnum = {
	Picoseconds: 'PICOSECONDS',
	Nanoseconds: 'NANOSECONDS',
	Microseconds: 'MICROSECONDS',
	Milliseconds: 'MILLISECONDS',
	Seconds: 'SECONDS',
	Minutes: 'MINUTES',
	Hours: 'HOURS',
	Days: 'DAYS',
	Weeks: 'WEEKS',
	Fortnights: 'FORTNIGHTS',
} as const;

export const massEnum = {
	Picograms: 'PICOGRAMS',
	Nanograms: 'NANOGRAMS',
	Micrograms: 'MICROGRAMS',
	Milligrams: 'MILLIGRAMS',
	Grams: 'GRAMS',
	Kilograms: 'KILOGRAMS',
	Metric_Tonnes: 'METRIC_TONNES',
	Carats: 'CARATS',
	Long_Tons: 'LONG_TONS',
	Short_Tons: 'SHORT_TONS',
	Ounces: 'OUNCES',
	Pounds: 'POUNDS',
	Stone: 'STONE',
	Earth_Masses: 'EARTH_MASSES',
	Solar_Masses: 'SOLAR_MASSES',
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
	static convertAngle(
		value: number,
		fromUnit: typeof angleEnum | string,
		toUnit: typeof angleEnum | string,
	): number {
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
	/**
	 * Converts a length value from one unit to another.
	 *
	 * @param {number} value - The value to convert.
	 * @param {typeof lengthEnum | string} fromUnit - The unit to convert from.
	 * @param {typeof lengthEnum | string} toUnit - The unit to convert to.
	 * @return {number} The converted value.
	 */
	static convertLength(
		value: number,
		fromUnit: typeof lengthEnum | string,
		toUnit: typeof lengthEnum | string,
	): number {
		let meters: number;
		switch (fromUnit) {
			case 'PICOMETERS':
				meters = value * 1e-12;
				break;
			case 'NANOMETERS':
				meters = value * 1e-9;
				break;
			case 'MICROMETERS':
				meters = value * 1e-6;
				break;
			case 'MILLIMETERS':
				meters = value * 0.001;
				break;
			case 'CENTIMETERS':
				meters = value * 0.01;
				break;
			case 'DECIMETERS':
				meters = value * 0.1;
				break;
			case 'METERS':
				meters = value * 1;
				break;
			case 'HECTOMETERS':
				meters = value * 100;
				break;
			case 'KILOMETERS':
				meters = value * 1000;
				break;
			case 'ASTRONOMICAL_UNIT':
				meters = value * 149598550000;
				break;
			case 'PARSEC':
				meters = value * 30856776000000000;
				break;
			case 'LIGHT_YEARS':
				meters = value * 9460528405000000;
				break;
			case 'INCHES':
				meters = value * (1 / 39.370079);
				break;
			case 'FEET':
				meters = value * (1 / 3.28084);
				break;
			case 'YARDS':
				meters = value * (1 / 1.093613);
				break;
			case 'MILES':
				meters = value * 1609.344;
				break;
			case 'NAUTICAL_MILES':
				meters = value * 1852;
				break;
			case 'FATHOMS':
				meters = value * 1.8288;
				break;
			case 'FURLONGS':
				meters = value * 201.168;
				break;
			default:
				throw new Error(`Unknown unit: ${fromUnit}`);
		}

		let output: number;
		switch (toUnit) {
			case 'PICOMETERS':
				output = meters / 1e-12;
				break;
			case 'NANOMETERS':
				output = meters / 1e-9;
				break;
			case 'MICROMETERS':
				output = meters / 1e-6;
				break;
			case 'MILLIMETERS':
				output = meters / 0.001;
				break;
			case 'CENTIMETERS':
				output = meters / 0.01;
				break;
			case 'DECIMETERS':
				output = meters / 0.1;
				break;
			case 'METERS':
				output = meters / 1;
				break;
			case 'HECTOMETERS':
				output = meters / 100;
				break;
			case 'KILOMETERS':
				output = meters / 1000;
				break;
			case 'ASTRONOMICAL_UNIT':
				output = meters / 149598550000;
				break;
			case 'PARSEC':
				output = meters / 30856776000000000;
				break;
			case 'LIGHT_YEARS':
				output = meters / 9460528405000000;
				break;
			case 'INCHES':
				output = meters / (1 / 39.370079);
				break;
			case 'FEET':
				output = meters / (1 / 3.28084);
				break;
			case 'YARDS':
				output = meters / (1 / 1.093613);
				break;
			case 'MILES':
				output = meters / 1609.344;
				break;
			case 'NAUTICAL_MILES':
				output = meters / 1852;
				break;
			case 'FATHOMS':
				output = meters / 1.8288;
				break;
			case 'FURLONGS':
				output = meters / 201.168;
				break;
			default:
				throw new Error(`Unknown unit: ${toUnit}`);
		}
		return output;
	}

	/**
	 * Converts a time value from one unit to another.
	 *
	 * @param {number} value - The value to convert.
	 * @param {typeof timeEnum | string} fromUnit - The unit of the input value.
	 * @param {typeof timeEnum | string} toUnit - The desired unit of the output value.
	 * @returns {number} - The converted value in the desired unit.
	 */
	static convertTime(
		value: number,
		fromUnit: typeof timeEnum | string,
		toUnit: typeof timeEnum | string,
	): number {
		let seconds: number;
		switch (fromUnit) {
			case 'PICOSECONDS':
				seconds = value * 1e-12;
				break;
			case 'NANOSECONDS':
				seconds = value * 1e-9;
				break;
			case 'MICROSECONDS':
				seconds = value * 1e-6;
				break;
			case 'MILLISECONDS':
				seconds = value * 0.001;
				break;
			case 'SECONDS':
				seconds = value * 1;
				break;
			case 'MINUTES':
				seconds = value * 60;
				break;
			case 'HOURS':
				seconds = value * 3600;
				break;
			case 'DAYS':
				seconds = value * 86400;
				break;
			case 'WEEKS':
				seconds = value * 604800;
				break;
			case 'FORTNIGHTS':
				seconds = value * 1209600;
				break;
			default:
				throw new Error(`Unknown unit: ${fromUnit}`);
		}

		let output: number;
		switch (toUnit) {
			case 'PICOSECONDS':
				output = seconds / 1e-12;
				break;
			case 'NANOSECONDS':
				output = seconds / 1e-9;
				break;
			case 'MICROSECONDS':
				output = seconds / 1e-6;
				break;
			case 'MILLISECONDS':
				output = seconds / 0.001;
				break;
			case 'SECONDS':
				output = seconds / 1;
				break;
			case 'MINUTES':
				output = seconds / 60;
				break;
			case 'HOURS':
				output = seconds / 3600;
				break;
			case 'DAYS':
				output = seconds / 86400;
				break;
			case 'WEEKS':
				output = seconds / 604800;
				break;
			case 'FORTNIGHTS':
				output = seconds / 1209600;
				break;
			default:
				throw new Error(`Unknown unit: ${toUnit}`);
		}
		return output;
	}

	/**
	 * Converts a mass value from one unit to another.
	 *
	 * @param {number} value - The mass value to be converted.
	 * @param {typeof massEnum | string} fromUnit - The unit to convert from.
	 * @param {typeof massEnum | string} toUnit - The unit to convert to.
	 * @return {number} The converted mass value.
	 */
	static convertMass(
		value: number,
		fromUnit: typeof massEnum | string,
		toUnit: typeof massEnum | string,
	): number {
		let grams: number;
		switch (fromUnit) {
			case 'PICOGRAMS':
				grams = value * 1e-12;
				break;
			case 'NANOGRAMS':
				grams = value * 1e-9;
				break;
			case 'MICROGRAMS':
				grams = value * 1e-6;
				break;
			case 'MILLIGRAMS':
				grams = value * 0.001;
				break;
			case 'GRAMS':
				grams = value * 1;
				break;
			case 'KILOGRAMS':
				grams = value * 1000;
				break;
			case 'METRIC_TONNES':
				grams = value * 1000000;
				break;
			case 'CARATS':
				grams = value * 0.2;
				break;
			case 'LONG_TONS':
				grams = value * 1016046.9088;
				break;
			case 'SHORT_TONS':
				grams = value * 907184.74;
				break;
			case 'OUNCES':
				grams = value * 28.349523;
				break;
			case 'POUNDS':
				grams = value * 453.59237;
				break;
			case 'STONE':
				grams = value * 6350.29318;
				break;
			case 'EARTH_MASSES':
				grams = value * 5.98e27;
				break;
			case 'SOLAR_MASSES':
				grams = value * 1.9889999999999998e33;
				break;
			default:
				throw new Error(`Unknown unit: ${fromUnit}`);
		}

		let output: number;
		switch (toUnit) {
			case 'PICOGRAMS':
				output = grams / 1e-12;
				break;
			case 'NANOGRAMS':
				output = grams / 1e-9;
				break;
			case 'MICROGRAMS':
				output = grams / 1e-6;
				break;
			case 'MILLIGRAMS':
				output = grams / 0.001;
				break;
			case 'GRAMS':
				output = grams / 1;
				break;
			case 'KILOGRAMS':
				output = grams / 1000;
				break;
			case 'METRIC_TONNES':
				output = grams / 1000000;
				break;
			case 'CARATS':
				output = grams / 0.2;
				break;
			case 'LONG_TONS':
				output = grams / 1016046.9088;
				break;
			case 'SHORT_TONS':
				output = grams / 907184.74;
				break;
			case 'OUNCES':
				output = grams / 28.349523;
				break;
			case 'POUNDS':
				output = grams / 453.59237;
				break;
			case 'STONE':
				output = grams / 6350.29318;
				break;
			case 'EARTH_MASSES':
				output = grams / 5.98e27;
				break;
			case 'SOLAR_MASSES':
				output = grams / 1.9889999999999998e33;
				break;
			default:
				throw new Error(`Unknown unit: ${toUnit}`);
		}
		return output;
	}

	/**
	 * Convert an energy value from one unit to another.
	 *
	 * @param {number} value - the energy value to convert
	 * @param {typeof energyEnum | string} fromUnit - the unit of the input value
	 * @param {typeof energyEnum | string} toUnit - the desired output unit
	 * @return {number} - the converted energy value
	 */
	static convertEnergy(
		value: number,
		fromUnit: typeof energyEnum | string,
		toUnit: typeof energyEnum | string,
	): number {
		let joules: number;
		switch (fromUnit) {
			case 'JOULES':
				joules = value * 1;
				break;
			case 'ELECTRONVOLT':
				joules = value * 1.6022e-19;
				break;
			case 'KILOELECTRONVOLTS':
				joules = value * 1.6022000000000002e-16;
				break;
			case 'MEGAELECTRONVOLTS':
				joules = value * 1.6022e-13;
				break;
			case 'GIGAELECTRONVOLTS':
				joules = value * 1.6022000000000002e-10;
				break;
			case 'TERAELECTRONVOLTS':
				joules = value * 1.6022000000000001e-7;
				break;
			case 'WATTS':
				joules = value * 1;
				break;
			case 'WATT_HOURS':
				joules = value * 3600;
				break;
			case 'KILOWATTS':
				joules = value * 1000;
				break;
			case 'KILOWATT_HOURS':
				joules = value * 3600000;
				break;
			case 'CALORIES':
				joules = value * 4.184;
				break;
			case 'KILOCALORIES':
				joules = value * 4184;
				break;
			case 'BRITISH_THERMAL_UNITS':
				joules = value * 1055.06;
				break;
			case 'US_THERMS':
				joules = value * 105500000.0;
				break;
			case 'FOOT-POUNDS':
				joules = value * 1.35582;
				break;
			default:
				throw new Error(`Unknown unit: ${fromUnit}`);
		}

		let output: number;
		switch (toUnit) {
			case 'JOULES':
				output = joules / 1;
				break;
			case 'ELECTRONVOLT':
				output = joules / 1.6022e-19;
				break;
			case 'KILOELECTRONVOLTS':
				output = joules / 1.6022000000000002e-16;
				break;
			case 'MEGAELECTRONVOLTS':
				output = joules / 1.6022e-13;
				break;
			case 'GIGAELECTRONVOLTS':
				output = joules / 1.6022000000000002e-10;
				break;
			case 'TERAELECTRONVOLTS':
				output = joules / 1.6022000000000001e-7;
				break;
			case 'WATTS':
				output = joules / 1;
				break;
			case 'WATT_HOURS':
				output = joules / 3600;
				break;
			case 'KILOWATTS':
				output = joules / 1000;
				break;
			case 'KILOWATT_HOURS':
				output = joules / 3600000;
				break;
			case 'CALORIES':
				output = joules / 4.184;
				break;
			case 'KILOCALORIES':
				output = joules / 4184;
				break;
			case 'BRITISH_THERMAL_UNITS':
				output = joules / 1055.06;
				break;
			case 'US_THERMS':
				output = joules / 105500000.0;
				break;
			case 'FOOT-POUNDS':
				output = joules / 1.35582;
				break;
			default:
				throw new Error(`Unknown unit: ${toUnit}`);
		}
		return output;
	}
}
