var Circles;
(function (Circles) {
    Circles[Circles["pi"] = 3.141592653589793] = "pi";
})(Circles || (Circles = {}));

/**
 * Class for all indices related functions.
 */
class Indices {
    /**
     * Returns the inputted number multiplied by itself the specified amount of times
     * @param {number} number - The number to multiply by itself
     * @param {nOF} [power] - The amount of times to multiply number by itself
     * @example <caption>Example 1 - Without specifying a power</caption>
     * // returns 25
     * Indices.power(5)
     * @example <caption>Example 2 - With specifying a power</caption>
     * // returns 8
     * Indices.power(2, 3)
     * @returns {number} The inputted number multiplied by itself the specified amount of times
     */
    static power(number, power) {
        if (typeof power != 'number' && !power.denominator)
            throw new Error('TypeError: power must be a number or an object with a denominator or numerator');
        let p;
        if (typeof number === 'object') {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (power.denominator && power.numerator) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                p = power.numerator / power.denominator;
            }
            else {
                throw new Error('TypeError: power must be a number or an object with a denominator or numerator');
            }
        }
        else if (typeof power === 'number') {
            p = power;
        }
        else
            throw new Error('TypeError: power must be a number or an object with a denominator or numerator');
        if (!power)
            p = 2;
        return Math.pow(number, p);
    }
}

/**
 * Find the GCD of 2 numbers
 * @param {number} a The first number
 * @param {number} b The second number
 * @example <caption>Example 1 - Non Prime Numbers</caption>
 * // returns 2
 * gcd(8,12)
 * @example <caption>Example 2 - Prime Numbers</caption>
 * // returns 1
 * gcd(5,7)
 * @returns {number} The GCD of the two inputted numbers
 */
function gcd2(a, b) {
    if (a === 0)
        return b;
    return gcd2(a % b, a);
}
/**
 * Find the GCD of the inputted numbers
 * @param {number[]} arr The numbers to find the GCD of
 * @example <caption>Example 1 - Non Prime Numbers</caption>
 * // returns 2
 * gcd([8,12,16])
 * @example <caption>Example 2 - Prime Numbers</caption>
 * // returns 1
 * gcd([7,13,5])
 * @returns {number} The GCD of the inputted numbers
 */
function gcd(arr) {
    const n = arr.length;
    let result = arr[0];
    for (let i = 1; i < n; i++) {
        result = gcd2(arr[i], result);
        if (result == 1) {
            return 1;
        }
    }
    return result;
}

/**
 * Creates a Fraction.
 */
class Faction {
    constructor(numerator, denominator) {
        if (Math.floor(numerator) != numerator) {
            numerator.toString().split('.')[1].length || 0;
        }
        if (Math.floor(denominator) != denominator) {
            denominator.toString().split('.')[1].length || 0;
        }
        this.numerator = numerator;
        this.denominator = denominator;
        return this;
    }
    simplified() {
        const gcd = gcd2(this.numerator, this.denominator);
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
        const x = this.simplified();
        return `${x[0]}/${x[1]}`;
    }
}

export { Circles, Faction, Indices, gcd, gcd2 };
