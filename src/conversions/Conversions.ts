export class Conversions {
	/**
	 * Converts a temperature from Fahrenheit to Celsius.
	 *
	 * @param {number} fahrenheit - The temperature in Fahrenheit to be converted.
	 * @return {number} The temperature in Celsius after the conversion.
	 */
	static FahrenheitToCelsius(fahrenheit: number): number {
		return ((fahrenheit - 32) * 5) / 9;
	}

	/**
	 * Converts a temperature in Kelvin to Celsius.
	 *
	 * @param {number} kelvin - The temperature in Kelvin.
	 * @return {number} The temperature in Celsius.
	 */
	static KelvinToCelsius(kelvin: number): number {
		return kelvin - 273.15;
	}

	/**
	 * Converts a Celsius temperature value to its Fahrenheit equivalent.
	 *
	 * @param {number} celsius - The temperature value in Celsius to convert.
	 * @return {number} The equivalent temperature value in Fahrenheit.
	 */
	static CelsiusToFahrenheit(celsius: number): number {
		return (celsius * 9) / 5 + 32;
	}

	/**
	 * Converts a temperature from Kelvin to Fahrenheit.
	 *
	 * @param {number} kelvin - the temperature in Kelvin.
	 * @return {number} the temperature in Fahrenheit.
	 */
	static KelvinToFahrenheit(kelvin: number): number {
		return ((kelvin - 273.15) * 9) / 5 + 32;
	}

	/**
	 * Converts a temperature value from Celsius to Kelvin.
	 *
	 * @param {number} celsius - The temperature value in Celsius to be converted.
	 * @return {number} The temperature value in Kelvin.
	 */
	static CelsiusToKelvin(celsius: number): number {
		return celsius + 273.15;
	}

	/**
	 * Converts temperature in Fahrenheit to Kelvin.
	 *
	 * @param {number} fahrenheit - temperature in Fahrenheit to be converted
	 * @return {number} temperature in Kelvin
	 */
	static FahrenheitToKelvin(fahrenheit: number): number {
		return ((fahrenheit - 32) * 5) / 9 + 273.15;
	}

	/**
	 * Converts radians to degrees.
	 *
	 * @param {number} radians - The angle in radians to be converted.
	 * @return {number} The angle in degrees.
	 */
	static RadiansToDegrees(radians: number): number {
		return (radians * 180) / Math.PI;
	}

	/**
	 * Converts an angle from gradians to degrees.
	 *
	 * @param {number} gradians - The angle in gradians to be converted.
	 * @return {number} The angle in degrees after conversion.
	 */
	static GradiansToDegrees(gradians: number): number {
		return (gradians * 180) / Math.PI;
	}

	/**
	 * Converts degrees to radians.
	 *
	 * @param {number} degrees - The angle in degrees to be converted.
	 * @return {number} The angle converted to radians.
	 */
	static DegreesToRadians(degrees: number): number {
		return (degrees * Math.PI) / 180;
	}

	/**
	 * Converts an angle from gradians to radians.
	 *
	 * @param {number} gradians - The angle in gradians to convert.
	 * @return {number} The converted angle in radians.
	 */
	static GradiansToRadians(gradians: number): number {
		return (gradians * Math.PI) / 200;
	}
}
