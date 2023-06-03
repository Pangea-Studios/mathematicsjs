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

export const volumeEnum = {
	Liters: 'LITERS',
	Milliliters: 'MILLILITERS',
	Cubic_Meters: 'CUBIC_METERS',
	Cubic_Centimeters: 'CUBIC_CENTIMETERS',
	Cubic_Millimeters: 'CUBIC_MILLIMETERS',
	Cubic_Inches: 'CUBIC_INCHES',
	Cubic_Feet: 'CUBIC_FEET',
	US_Liquid_Gallons: 'US_LIQUID_GALLONS',
	US_Liquid_Quarts: 'US_LIQUID_QUARTS',
	US_Liquid_Pints: 'US_LIQUID_PINTS',
	US_Legal_Cups: 'US_LEGAL_CUPS',
	US_Teaspoons: 'US_TEASPOONS',
	US_Tablespoons: 'US_TABLESPOONS',
	Fluid_Ounces: 'FLUID_OUNCES',
	Imperial_Gallons: 'IMPERIAL_GALLONS',
	Imperial_Quarts: 'IMPERIAL_QUARTS',
	Imperial_Pints: 'IMPERIAL_PINTS',
	Imperial_Cups: 'IMPERIAL_CUPS',
	Imperial_Fluid_Ounces: 'IMPERIAL_FLUID_OUNCES',
	Imperial_Teaspoons: 'IMPERIAL_TEASPOONS',
	Imperial_Tablespoons: 'IMPERIAL_TABLESPOONS',
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

export const speedEnum = {
	Meters_per_Second: 'METERS_PER_SECOND',
	Feet_per_Second: 'FEET_PER_SECOND',
	Miles_per_Hour: 'MILES_PER_HOUR',
	Kilometers_per_hour: 'KILOMETERS_PER_HOUR',
	Knots: 'KNOTS',
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

export const areaEnum = {
	Square_Meters: 'SQUARE_METERS',
	Square_Kilometers: 'SQUARE_KILOMETERS',
	Square_Inches: 'SQUARE_INCHES',
	Square_Feet: 'SQUARE_FEET',
	Square_Yards: 'SQUARE_YARDS',
	Square_Miles: 'SQUARE_MILES',
	Acres: 'ACRES',
	Hectares: 'HECTARES',
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

export const temperatureEnum = {
	Celcius: 'CELCIUS',
	Fahrenheit: 'FAHRENHEIT',
	Klevin: 'KLEVIN',
} as const;

export const pressureEnum = {
	Bars: 'BARS',
	Millibars: 'MILLIBARS',
	Pascals: 'PASCALS',
	Kilopascals: 'KILOPASCALS',
	Pounds_per_Square_Inch: 'POUNDS_PER_SQUARE_INCH',
	Torr: 'TORR',
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

	/**
	 * Converts a temperature value from one unit to another.
	 *
	 * @param {number} value - The temperature value to be converted.
	 * @param {typeof temperatureEnum | string} fromUnit - The unit of the input temperature value.
	 * @param {typeof temperatureEnum | string} toUnit - The unit of the output temperature value.
	 * @return {number} The converted temperature value in the desired unit.
	 */
	static convertTemperature(
		value: number,
		fromUnit: typeof temperatureEnum | string,
		toUnit: typeof temperatureEnum | string,
	): number {
		let kelvin: number;
		switch (fromUnit) {
			case 'CELCIUS':
				kelvin = value + 273.15;
				break;
			case 'FAHRENHEIT':
				kelvin = ((value - 32) * 5) / 9 + 273.15;
				break;
			case 'KLEVIN':
				kelvin = value * 1;
				break;
			default:
				throw new Error(`Unknown unit: ${fromUnit}`);
		}

		let output: number;
		switch (toUnit) {
			case 'CELCIUS':
				output = kelvin - 273.15;
				break;
			case 'FAHRENHEIT':
				output = ((kelvin - 273.15) * 9) / 5 + 32;
				break;
			case 'KLEVIN':
				output = kelvin / 1;
				break;
			default:
				throw new Error(`Unknown unit: ${toUnit}`);
		}
		return output;
	}

	/**
	 * Converts a speed value from one unit to another.
	 *
	 * @param {number} value - the value to be converted
	 * @param {typeof speedEnum | string} fromUnit - the unit to convert from
	 * @param {typeof speedEnum | string} toUnit - the unit to convert to
	 * @return {number} - the converted value
	 */
	static convertSpeed(
		value: number,
		fromUnit: typeof speedEnum | string,
		toUnit: typeof speedEnum | string,
	): number {
		let mps: number;
		switch (fromUnit) {
			case 'METERS_PER_SECOND':
				mps = value * 1;
				break;
			case 'FEET_PER_SECOND':
				mps = value * 0.3048;
				break;
			case 'MILES_PER_HOUR':
				mps = value * 0.44704;
				break;
			case 'KILOMETERS_PER_HOUR':
				mps = value * 0.277778;
				break;
			case 'KNOTS':
				mps = value * 0.514444;
				break;
			default:
				throw new Error(`Unknown unit: ${fromUnit}`);
		}

		let output: number;
		switch (toUnit) {
			case 'METERS_PER_SECOND':
				output = mps / 1;
				break;
			case 'FEET_PER_SECOND':
				output = mps / 0.3048;
				break;
			case 'MILES_PER_HOUR':
				output = mps / 0.44704;
				break;
			case 'KILOMETERS_PER_HOUR':
				output = mps / 0.277778;
				break;
			case 'KNOTS':
				output = mps / 0.514444;
				break;
			default:
				throw new Error(`Unknown unit: ${toUnit}`);
		}
		return output;
	}

	/**
	 * Converts a pressure value from one unit to another.
	 *
	 * @param {number} value - The pressure value to convert.
	 * @param {typeof pressureEnum|string} fromUnit - The unit to convert from.
	 * @param {typeof pressureEnum|string} toUnit - The unit to convert to.
	 * @return {number} The converted pressure value.
	 */
	static convertPressure(
		value: number,
		fromUnit: typeof pressureEnum | string,
		toUnit: typeof pressureEnum | string,
	): number {
		let bars: number;
		switch (fromUnit) {
			case 'BARS':
				bars = value * 1;
				break;
			case 'MILLIBARS':
				bars = value * 0.001;
				break;
			case 'PASCALS':
				bars = value * 1e-5;
				break;
			case 'KILOPASCALS':
				bars = value * 0.01;
				break;
			case 'POUNDS_PER_SQUARE_INCH':
				bars = value * 0.0689476;
				break;
			case 'TORR':
				bars = value * 0.00133322;
				break;
			default:
				throw new Error(`Unknown unit: ${fromUnit}`);
		}

		let output: number;
		switch (toUnit) {
			case 'BARS':
				output = bars / 1;
				break;
			case 'MILLIBARS':
				output = bars / 0.001;
				break;
			case 'PASCALS':
				output = bars / 1e-5;
				break;
			case 'KILOPASCALS':
				output = bars / 0.01;
				break;
			case 'POUNDS_PER_SQUARE_INCH':
				output = bars / 0.0689476;
				break;
			case 'TORR':
				output = bars / 0.00133322;
				break;
			default:
				throw new Error(`Unknown unit: ${toUnit}`);
		}
		return output;
	}

	/**
	 * Converts an area measurement from one unit to another.
	 *
	 * @param {number} value - The numerical value of the area measurement in the fromUnit.
	 * @param {typeof areaEnum | string} fromUnit - The unit to convert from.
	 * @param {typeof areaEnum | string} toUnit - The unit to convert to.
	 * @return {number} - The numerical value of the converted area measurement in the toUnit.
	 */
	static convertArea(
		value: number,
		fromUnit: typeof areaEnum | string,
		toUnit: typeof areaEnum | string,
	): number {
		let sqrm: number;
		switch (fromUnit) {
			case 'SQUARE_METERS':
				sqrm = value * 1;
				break;
			case 'SQUARE_KILOMETERS':
				sqrm = value * 1000000;
				break;
			case 'SQUARE_INCHES':
				sqrm = value * (1 / 1550);
				break;
			case 'SQUARE_FEET':
				sqrm = value * (1 / 10.764);
				break;
			case 'SQUARE_YARDS':
				sqrm = value * (1 / 1.196);
				break;
			case 'SQUARE_MILES':
				sqrm = value * 2590000.0;
				break;
			case 'ACRES':
				sqrm = value * 4046.86;
				break;
			case 'HECTARES':
				sqrm = value * 10000;
				break;
			default:
				throw new Error(`Unknown unit: ${fromUnit}`);
		}

		let output: number;
		switch (toUnit) {
			case 'SQUARE_METERS':
				output = sqrm / 1;
				break;
			case 'SQUARE_KILOMETERS':
				output = sqrm / 1000000;
				break;
			case 'SQUARE_INCHES':
				output = sqrm / (1 / 1550);
				break;
			case 'SQUARE_FEET':
				output = sqrm / (1 / 10.764);
				break;
			case 'SQUARE_YARDS':
				output = sqrm / (1 / 1.196);
				break;
			case 'SQUARE_MILES':
				output = sqrm / 2590000.0;
				break;
			case 'ACRES':
				output = sqrm / 4046.86;
				break;
			case 'HECTARES':
				output = sqrm / 10000;
				break;
			default:
				throw new Error(`Unknown unit: ${toUnit}`);
		}
		return output;
	}

	static convertVolume(
		value: number,
		fromUnit: typeof volumeEnum | string,
		toUnit: typeof volumeEnum | string,
	): number {
		let liters: number;
		switch (fromUnit) {
			case 'LITERS':
				liters = value * 1;
				break;
			case 'MILLILITERS':
				liters = value * 0.001;
				break;
			case 'CUBIC_METERS':
				liters = value * 1000;
				break;
			case 'CUBIC_CENTIMETERS':
				liters = value * 0.001;
				break;
			case 'CUBIC_MILLIMETERS':
				liters = value * 1e-5;
				break;
			case 'CUBIC_INCHES':
				liters = value * 0.0163871;
				break;
			case 'CUBIC_FEET':
				liters = value * 28.3168;
				break;
			case 'US_LIQUID_GALLONS':
				liters = value * 3.78541;
				break;
			case 'US_LIQID_QUARTS':
				liters = value * 0.946353;
				break;
			case 'US_LIQUID_PINTS':
				liters = value * 0.473176;
				break;
			case 'US_LEGAL_CUPS':
				liters = value * 0.24;
				break;
			case 'US_TEASPOONS':
				liters = value * 0.00492892;
				break;
			case 'US_TABLESPOONS':
				liters = value * 0.0147868;
				break;
			case 'FLUID_OUNCES':
				liters = value * 0.0295735;
				break;
			case 'IMPERIAL_GALLONS':
				liters = value * 4.54609;
				break;
			case 'IMPERIAL_QUARTS':
				liters = value * 1.13652;
				break;
			case 'IMPERIAL_PINTS':
				liters = value * 0.568261;
				break;
			case 'IMPERIAL_CUPS':
				liters = value * 0.284131;
				break;
			case 'IMPERIAL_FLUID_OUNCES':
				liters = value * 0.0284131;
				break;
			case 'IMPERIAL_TEASPOONS':
				liters = value * 0.00591939;
				break;
			case 'IMPERIAL_TABLESPOONS':
				liters = value * 0.0177582;
				break;
			default:
				throw new Error(`Unknown unit: ${fromUnit}`);
		}

		let output: number;
		switch (toUnit) {
			case 'LITERS':
				output = liters / 1;
				break;
			case 'MILLILITERS':
				output = liters / 0.001;
				break;
			case 'CUBIC_METERS':
				output = liters / 1000;
				break;
			case 'CUBIC_CENTIMETERS':
				output = liters / 0.001;
				break;
			case 'CUBIC_MILLIMETERS':
				output = liters / 1e-5;
				break;
			case 'CUBIC_INCHES':
				output = liters / 0.0163871;
				break;
			case 'CUBIC_FEET':
				output = liters / 28.3168;
				break;
			case 'US_LIQUID_GALLONS':
				output = liters / 3.78541;
				break;
			case 'US_LIQUID_QUARTS':
				output = liters / 0.946353;
				break;
			case 'US_LIQUID_PINTS':
				output = liters / 0.473176;
				break;
			case 'US_LEGAL_CUPS':
				output = liters / 0.24;
				break;
			case 'US_TEASPOONS':
				output = liters / 0.00492892;
				break;
			case 'US_TABLESPOONS':
				output = liters / 0.0147868;
				break;
			case 'FLUID_OUNCES':
				output = liters / 0.0295735;
				break;
			case 'IMPERIAL_GALLONS':
				output = liters / 4.54609;
				break;
			case 'IMPERIAL_QUARTS':
				output = liters / 1.13652;
				break;
			case 'IMPERIAL_PINTS':
				output = liters / 0.568261;
				break;
			case 'IMPERIAL_CUPS':
				output = liters / 0.284131;
				break;
			case 'IMPERIAL_FLUID_OUNCES':
				output = liters / 0.0284131;
				break;
			case 'IMPERIAL_TEASPOONS':
				output = liters / 0.00591939;
				break;
			case 'IMPERIAL_TABLESPOONS':
				output = liters / 0.0177582;
				break;
			default:
				throw new Error(`Unknown unit: ${toUnit}`);
		}
		return output;
	}
}
