/**
 * @typedef {string} CacheType
 */

import { TrigonometryFunctions } from './trigonometry/Functions';
import { Logarithms } from './equations/Logarithms';

/**
 * Enum for cache types
 * @readonly
 * @enum {CacheType}
 */
export const CacheEnum = {
	Sin: 'sin',
	Cos: 'cos',
	Tan: 'tan',
	Asin: 'asin',
	Acos: 'acos',
	Atan: 'atan',
	Csc: 'csc',
	Sec: 'sec',
	Cot: 'cot',
	Sinh: 'sinh',
	Cosh: 'cosh',
	Tanh: 'tanh',
	Asinh: 'asinh',
	Acosh: 'acosh',
	Atanh: 'atanh',
	Csch: 'csch',
	Sech: 'sech',
	Coth: 'coth',
	Acsc: 'acsc',
	Asech: 'asech',
	Acoth: 'acoth',
	Asec: 'asec',
	Acot: 'acot',
	Acsch: 'acsch',
	Log: 'log',
	Ln: 'ln',
} as const;

const trig  = [
    'sin',
    'cos',
    'tan',
    'asin',
    'acos',
    'atan',
    'csc',
    'sec',
    'cot',
    'sinh',
    'cosh',
    'tanh',
    'asinh',
    'acosh',
    'atanh',
    'csch',
    'sech',
    'coth',
    'acsc',
    'asech',
    'acoth',
    'asec',
    'acot',
	'acsch',
];

const log = [
	'log',
	'ln',
]

/**
 * Class to add and read current cache
 */
export class CacheManager {
    /**
     * Adds the input/output pair to the appropriate cache based on the given type.
     *
     * @param {CacheType | string} type - The type of cache to add the pair to.
     * @param {any} input - The input value of the pair
     * @param {any} output - The output value of the pair
     * @return {any} - The cache object that the pair was added to
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static add(type: typeof CacheEnum | string, input: any, output: any): any {
        if (typeof type !== 'string') type = type.toString();
        if (!trig.includes(type) && !log.includes(type))
            throw new Error('Invalid input type');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let cache: any;
        if (trig.includes(type)) cache = TrigonometryFunctions[`${type}Cache`];
        if (log.includes(type)) cache = Logarithms[`${type}Cache`];
        return cache.set(input, output);
    }

    /**
     * Returns a cached value based on the input and the type of cache.
     *
     * @param {CacheType | string} type - The type of cache to retrieve the value from.
     * @param {any} input - The input value used to retrieve the cached value
     * @return {any} The cached value retrieved from the specified cache
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static get(type: typeof CacheEnum | string, input: number): any {
        if (typeof type !== 'string') type = type.toString();
        if (!trig.includes(type) && !log.includes(type))
            throw new Error('Invalid input type');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let cache: any;
        if (trig.includes(type)) cache = TrigonometryFunctions[`${type}Cache`];
        if (log.includes(type)) cache = Logarithms[`${type}Cache`];
        return cache.get(input);
    }

    /**
     * Deletes the input/output pair from the appropriate cache based on the given type.
     *
     * @param {CacheType | string} type - The type of cache to delete the pair from
     * @param {any} input - The input value of the pair
     * @return {any} - The cache object that the pair was deleted from
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static delete(type: typeof CacheEnum | string, input: any): any {
        if (typeof type !== 'string') type = type.toString();
        if (!trig.includes(type) && !log.includes(type))
            throw new Error('Invalid input type');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let cache: any;
        if (trig.includes(type)) cache = TrigonometryFunctions[`${type}Cache`];
        if (log.includes(type)) cache = Logarithms[`${type}Cache`];
        return cache.delete(input);
    }

    /**
     * Clears the cache for a given trigonometric or logarithmic function.
     *
     * @param {CacheType | string} type - A string or CacheEnum representing the function to clear cache for
     * @return {void} undefined
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static clear(type: typeof CacheEnum | string): void {
        if (typeof type !== 'string') type = type.toString();
        if (!trig.includes(type) && !log.includes(type))
            throw new Error('Invalid input type');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let cache: any;
        if (trig.includes(type)) cache = TrigonometryFunctions[`${type}Cache`];
        if (log.includes(type)) cache = Logarithms[`${type}Cache`];
        return cache.clear();
    }

    /**
     * Clears all cached values
     *
     * @return {void} undefined
     */
    static clearAll(): void {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const trigCache: any = trig.forEach((cache) => {
            return (cache = TrigonometryFunctions[`${cache}Cache`]);
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const logCache: any = log.forEach((cache) => {
            return (cache = Logarithms[`${cache}Cache`]);
        });

        return trigCache.concat(logCache).forEach((cache) => cache.clear());
    }
}
