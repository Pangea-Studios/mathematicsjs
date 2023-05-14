/**
 * Find the GCD of 2 numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @param {Object} [options] Extra options
 * @param {number} [options.base] The base of the numbers you inputted
 * @example <caption>Example 1 - Non Prime Numbers</caption>
 * // returns 2
 * gcd(8,12)
 * @example <caption>Example 2 - Prime Numbers</caption>
 * // returns 1
 * gcd(5,7)
 * @returns {number} The GCD of the two inputted numbers
 */
export function gcd2(a: number, b: number, options?: object): number {
    if (!options) options = {};
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (options.base) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        a = baseNtoBaseN(a, options.base, 10);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        b = baseNtoBaseN(b, options.base, 10);
    }
    if (a === 0) return b;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (options.base) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return baseNtoBaseN(gcd2(a % b, a, options), 10, options.base);
    } else {
        return gcd2(a % b, a, options);
    }
}

/**
 * Find the GCD of the inputted numbers
 * @param {number[]} arr - The numbers to find the GCD of
 * @param {Object} [options] Extra options
 * @param {number} [options.base] The base of the numbers you inputted
 * @example <caption>Example 1 - Non Prime Numbers</caption>
 * // returns 2
 * gcd([8,12,16])
 * @example <caption>Example 2 - Prime Numbers</caption>
 * // returns 1
 * gcd([7,13,5])
 * @returns {number} The GCD of the inputted numbers
 */
export function gcd(arr: number[], options?: object): number {
    if (!options) options = {};
    const n = arr.length;
    let result = arr[0];
    for (let i = 1; i < n; i++) {
        result = gcd2(arr[i], result, options);

        if (result == 1) {
            return 1;
        }
    }
    return result;
}

/**
 * Convert a number to a different base
 * @param {number|string} number - The inputted number
 * @param {number} baseN - The base of the inputted number
 * @param {number} toBaseN - The base to convert to
 * @example <caption>Example - Converting Base 10 to Base 36</caption>
 * // returns 'zz'
 * baseNtoBaseN(3535, 10, 36)
 * @returns {number|string} The inputted number in the specified base
 */
/**
 * Converts a number from one base to another.
 * @param {number|string} number - The inputted number to be converted.
 * @param {number} fromBase - The base of the inputted number.
 * @param {number} toBase - The base to convert to.
 * @example <caption>Example - Converting Base 10 to Base 36</caption>
 * // returns 'zz'
 * convertBase(number: 3535, fromBase: 10, toBase: 36)
 * @returns {number|string} - The inputted number in the specified base.
 */
export function convertBase(
    number: number | string,
    fromBase: number,
    toBase: number,
) {
    if (fromBase > 36 || fromBase < 2 || toBase > 36 || toBase < 2) {
        return null;
    }

    const base10 = parseInt(number.toString(), fromBase);

    if (toBase === 10) {
        return base10;
    } else {
        return base10.toString(toBase);
    }
}
