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

/**
 * Class to add and read current cache
 */
export class CacheManager {
    /**
     * Adds the input/output pair to the appropriate cache based on the given type.
     *
     * @param {CacheType | string} type - The type of cache to add the pair to.
     * @param {number} input - The input value of the pair
     * @param {number} output - The output value of the pair
     * @return {any} - The cache object that the pair was added to
     */
    static add(type: typeof CacheEnum | string, input: number, output: number) {
        if (typeof type !== 'string') type = type.toString();
        const trigFuncs = [
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
        const logFuncs = ['log', 'ln'];
        if (!trigFuncs.includes(type) && !logFuncs.includes(type)) return;
        const cache = trigFuncs.includes(type)
            ? TrigonometryFunctions[`${type}Cache`]
            : Logarithms[`${type}Cache`];
        return cache.set(input, output);
    }

    /**
     * Returns a cached value based on the input and the type of cache.
     *
     * @param {CacheType | string} type - The type of cache to retrieve the value from.
     * @param {number} input - The input value used to retrieve the cached value
     * @return {any} The cached value retrieved from the specified cache
     */
    static get(type: typeof CacheEnum | string, input: number) {
        if (typeof type !== 'string') type = type.toString();
        const trigFuncs = [
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
        const logFuncs = ['log', 'ln'];
        if (!trigFuncs.includes(type) && !logFuncs.includes(type)) return;
        const cache = trigFuncs.includes(type)
            ? TrigonometryFunctions[`${type}Cache`]
            : Logarithms[`${type}Cache`];
        return cache.get(input);
    }

    /**
     * Deletes the input/output pair from the appropriate cache based on the given type.
     *
     * @param {CacheType | string} type - The type of cache to delete the pair from
     * @param {number} input - The input value of the pair
     * @return {any} - The cache object that the pair was deleted from
     */
    static delete(type: typeof CacheEnum | string, input: number) {
        if(typeof type !== 'string') type = type.toString()
        const trigFuncs = [
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
        const logFuncs = ['log', 'ln'];
        if (!trigFuncs.includes(type) && !logFuncs.includes(type)) return;
        const cache = trigFuncs.includes(type)
            ? TrigonometryFunctions[`${type}Cache`]
            : Logarithms[`${type}Cache`];
        return cache.delete(input);
    }

    /**
     * Clears the cache for a given trigonometric or logarithmic function.
     *
     * @param {typeof CacheEnum | string} type - A string or CacheEnum representing the function to clear cache for
     * @return {void} undefined
     */
	static clear(type: typeof CacheEnum | string) {
		if(typeof type !== 'string') type = type.toString()
        const trigFuncs = [
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
        const logFuncs = ['log', 'ln'];
        if (!trigFuncs.includes(type) && !logFuncs.includes(type)) return;
        const cache = trigFuncs.includes(type)
            ? TrigonometryFunctions[`${type}Cache`]
            : Logarithms[`${type}Cache`];
        return cache.clear();
    }

	/**
	 * Clears all cached values
	 * 
	 * @return {void} undefined
	 */
	static clearAll(): void {
		const trigFunctions = [
            TrigonometryFunctions.sinCache,
            TrigonometryFunctions.cosCache,
            TrigonometryFunctions.tanCache,
            TrigonometryFunctions.asinCache,
            TrigonometryFunctions.acosCache,
            TrigonometryFunctions.atanCache,
            TrigonometryFunctions.cscCache,
            TrigonometryFunctions.secCache,
            TrigonometryFunctions.cotCache,
            TrigonometryFunctions.sinhCache,
            TrigonometryFunctions.coshCache,
            TrigonometryFunctions.tanhCache,
            TrigonometryFunctions.asinhCache,
            TrigonometryFunctions.acoshCache,
            TrigonometryFunctions.atanhCache,
            TrigonometryFunctions.cschCache,
            TrigonometryFunctions.sechCache,
            TrigonometryFunctions.cothCache,
            TrigonometryFunctions.acscCache,
            TrigonometryFunctions.asechCache,
            TrigonometryFunctions.acothCache,
            TrigonometryFunctions.asecCache,
            TrigonometryFunctions.acotCache,
            TrigonometryFunctions.acschCache,
        ];

		const logFunctions = [
			Logarithms.logCache,
			Logarithms.lnCache
		];

        return trigFunctions.concat(logFunctions).forEach((cache) => cache.clear());
	}
}
