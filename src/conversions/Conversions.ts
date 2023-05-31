export class Conversions {
	/**
	 * Converts meters to other length units.
	 *
	 * @param {number} meters - The length in meters to convert.
	 * @return {object} An object containing the converted lengths in inches, feet, yards, miles, nautical miles and paces.
	 */

	static metersToOtherLengths(meters: number): object {
		const inches = meters * 39.3701;
		const feet = meters * 3.28084;
		const yards = meters * 1.09361;
		const miles = meters / 1609.344;
		const nauticalMiles = meters / 1852;
		const paces = meters / 0.762;
		return { inches, feet, yards, miles, nauticalMiles, paces };
	}

	/**
	 * Converts inches to other length units.
	 *
	 * @param {number} inches - The length in inches to convert.
	 * @return {object} An object containing the converted lengths in meters, feet, yards, miles, nautical miles and paces.
	 */
	static inchesToOtherLengths(inches: number): object {
		const meters = inches / 39.3701;
		const feet = inches / 12;
		const yards = inches / 36;
		const miles = inches / 63360;
		const nauticalMiles = inches / 72913.386;
		const paces = inches / 29.5;
		return { meters, feet, yards, miles, nauticalMiles, paces };
	}

	/**
	 * Converts feet to other length units.
	 *
	 * @param {number} feet - The length in feet to convert.
	 * @return {object} An object containing the converted lengths in meters, inches, yards, miles, nautical miles and paces.
	 */
	static feetToOtherLengths(feet: number): object {
		const meters = feet / 3.28084;
		const inches = feet * 12;
		const yards = feet / 3;
		const miles = feet / 5280;
		const nauticalMiles = feet / 6076.12;
		const paces = feet / 2.5;
		return { meters, inches, yards, miles, nauticalMiles, paces };
	}

	/**
	 * Converts yards to other length units.
	 *
	 * @param {number} yards - The length in yards to convert.
	 * @return {object} An object containing the converted lengths in meters, inches, feet, miles, nautical miles and paces.
	 */
	static yardsToOtherLengths(yards: number): object {
		const meters = yards / 1.09361;
		const inches = yards * 36;
		const feet = yards * 3;
		const miles = yards / 1760;
		const nauticalMiles = yards / 2025.372;
		const paces = yards / 0.9144;
		return { meters, inches, feet, miles, nauticalMiles, paces };
	}

	/**
	 * Converts miles to other length units.
	 *
	 * @param {number} miles - The length in miles to convert.
	 * @return {object} An object containing the converted lengths in meters, inches, feet, yards, nautical miles and paces.
	 */
	static milesToOtherLengths(miles: number): object {
		const meters = miles * 1609.344;
		const inches = miles * 63360;
		const feet = miles * 5280;
		const yards = miles * 1760;
		const nauticalMiles = miles / 1.15078;
		const paces = miles * 2112;
		return { meters, inches, feet, yards, nauticalMiles, paces };
	}

	/**
	 * Converts nautical miles to other length units.
	 *
	 * @param {number} nauticalMiles - The length in nautical miles to convert.
	 * @return {object} An object containing the converted lengths in meters, inches, feet, yards, miles and paces.
	 */
	static nauticalMilesToOtherLengths(nauticalMiles: number): object {
		const meters = nauticalMiles * 1852;
		const inches = nauticalMiles * 72913.386;
		const feet = nauticalMiles * 6076.12;
		const yards = nauticalMiles * 2025.372;
		const miles = nauticalMiles * 1.15078;
		const paces = nauticalMiles * 6076.11549;
		return { meters, inches, feet, yards, miles, paces };
	}

	/**
	 * Converts paces to other length units.
	 *
	 * @param {number} paces - The length in paces to convert.
	 * @return {object} An object containing the converted lengths in meters, inches, feet, yards, miles and nautical miles.
	 */
	static pacesToOtherLengths(paces: number): object {
		const meters = paces * 0.762;
		const inches = paces * 29.5;
		const feet = paces * 2.5;
		const yards = paces * 0.9144;
		const miles = paces / 2112;
		const nauticalMiles = paces / 6076.11549;
		return { meters, inches, feet, yards, miles, nauticalMiles };
	}
	/**
	 * Converts Kelvin to other temperature units.
	 *
	 * @param {number} kelvin - The temperature in Kelvin to convert.
	 * @return {object} An object containing the converted temperatures in Celsius and Fahrenheit.
	 */
	static kelvinToOtherTemperatures(kelvin: number): object {
		const celsius = kelvin - 273.15;
		const fahrenheit = celsius * (9 / 5) + 32;
		return { celsius, fahrenheit };
	}

	/**
	 * Converts Celsius to other temperature units.
	 *
	 * @param {number} celsius - The temperature in Celsius to convert.
	 * @return {object} An object containing the converted temperatures in Kelvin and Fahrenheit.
	 */
	static celsiusToOtherTemperatures(celsius: number): object {
		const kelvin = celsius + 273.15;
		const fahrenheit = celsius * (9 / 5) + 32;
		return { kelvin, fahrenheit };
	}

	/**
	 * Converts Fahrenheit to other temperature units.
	 *
	 * @param {number} fahrenheit - The temperature in Fahrenheit to convert.
	 * @return {object} An object containing the converted temperatures in Celsius and Kelvin.
	 */
	static fahrenheitToOtherTemperatures(fahrenheit: number): object {
		const celsius = (fahrenheit - 32) * (5 / 9);
		const kelvin = celsius + 273.15;
		return { celsius, kelvin };
	}
	/**
	 * Converts degrees to other angle units.
	 *
	 * @param {number} degrees - The angle in degrees to convert.
	 * @return {object} An object containing the converted angles in gradians, radians, minutes and seconds.
	 */
	static degreesToOtherAngles(degrees: number): object {
		const gradians = (degrees * 10) / 9;
		const radians = (degrees * Math.PI) / 180;
		const minutes = degrees * 60;
		const seconds = degrees * 3600;
		return { gradians, radians, minutes, seconds };
	}

	/**
	 * Converts gradians to other angle units.
	 *
	 * @param {number} gradians - The angle in gradians to convert.
	 * @return {object} An object containing the converted angles in degrees, radians, minutes and seconds.
	 */
	static gradiansToOtherAngles(gradians: number): object {
		const degrees = (gradians * 9) / 10;
		const radians = (degrees * Math.PI) / 180;
		const minutes = degrees * 60;
		const seconds = degrees * 3600;
		return { degrees, radians, minutes, seconds };
	}

	/**
	 * Converts radians to other angle units.
	 *
	 * @param {number} radians - The angle in radians to convert.
	 * @return {object} An object containing the converted angles in degrees, gradians, minutes and seconds.
	 */
	static radiansToOtherAngles(radians: number): object {
		const degrees = (radians * 180) / Math.PI;
		const gradians = (degrees * 10) / 9;
		const minutes = degrees * 60;
		const seconds = degrees * 3600;
		return { degrees, gradians, minutes, seconds };
	}

	/**
	 * Converts minutes to other angle units.
	 *
	 * @param {number} minutes - The angle in minutes to convert.
	 * @return {object} An object containing the converted angles in degrees, gradians, radians and seconds.
	 */
	static minutesToOtherAngles(minutes: number): object {
		const degrees = minutes / 60;
		const gradians = (degrees * 10) / 9;
		const radians = (degrees * Math.PI) / 180;
		const seconds = degrees * 3600;
		return { degrees, gradians, radians, seconds };
	}

	/**
	 * Converts seconds to other angle units.
	 *
	 * @param {number} seconds - The angle in seconds to convert.
	 * @return {object} An object containing the converted angles in degrees, gradians, radians and minutes.
	 */
	static secondsToOtherAngles(seconds: number): object {
		const degrees = seconds / 3600;
		const gradians = (degrees * 10) / 9;
		const radians = (degrees * Math.PI) / 180;
		const minutes = degrees * 60;
		return { degrees, gradians, radians, minutes };
	}
}
