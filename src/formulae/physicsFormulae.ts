export class physicsFormulae {
	/**
	 * Calculates the speed given a distance and time.
	 *
	 * @param {number} distance - the distance traveled
	 * @param {number} time - the time taken to travel the distance
	 * @return {number} the speed in units per hour
	 */
	static Speed(distance: number, time: number): number {
		return distance / time;
	}
	/**
	 * Calculates the distance traveled based on speed and time.
	 *
	 * @param {number} speed - the speed of the object in units per hour
	 * @param {number} time - the time taken by the object to travel in hours
	 * @return {number} the distance traveled by the object in units
	 */
	static Distance(speed: number, time: number): number {
		return speed * time;
	}
	/**
	 * Calculates the time it takes to travel a certain distance at a given speed.
	 *
	 * @param {number} distance - The distance to be traveled.
	 * @param {number} speed - The speed at which to travel.
	 * @return {number} The time it takes to travel the distance at the given speed.
	 */
	static Time(distance: number, speed: number): number {
		return distance / speed;
	}
	/**-------------------------------------------------------------------------------------*/

	/**
	 * Calculates pressure given force and area.
	 *
	 * @param {number} force - the amount of force applied
	 * @param {number} area - the area over which the force is applied
	 * @return {number} the pressure calculated by dividing force by area
	 */
	static Pressure(force: number, area: number) {
		return force / area;
	}

	/**
	 * Calculates the force exerted given a pressure and area.
	 *
	 * @param {number} pressure - the pressure applied.
	 * @param {number} area - the area on which the pressure is applied.
	 * @return {number} the force exerted.
	 */
	static Force(pressure: number, area: number) {
		return pressure * area;
	}

	/**
	 * Calculates the area given the pressure and force.
	 *
	 * @param {number} pressure - the pressure applied
	 * @param {number} force - the force applied
	 * @return {number} the area calculated from the given pressure and force
	 */
	static Area(pressure: number, force: number) {
		return force / pressure;
	}

	/**-------------------------------------------------------------------------------------*/

	/**
	 * Calculates the density of an object given its mass and volume.
	 *
	 * @param {number} mass - the mass of the object in kilograms
	 * @param {number} volume - the volume of the object in cubic meters
	 * @return {number} the density of the object in kilograms per cubic meter
	 */
	static Density(mass: number, volume: number) {
		return mass / volume;
	}

	/**
	 * Returns the mass of an object given its density and volume.
	 *
	 * @param {number} density - the density of the object
	 * @param {number} volume - the volume of the object
	 * @return {number} the mass of the object
	 */
	static Mass(density: number, volume: number) {
		return density * volume;
	}

	/**
	 * Calculates the volume given the density and mass.
	 *
	 * @param {number} density - the density of the object
	 * @param {number} mass - the mass of the object
	 * @return {number} the calculated volume
	 */
	static Volume(density: number, mass: number) {
		return density * mass;
	}
}
