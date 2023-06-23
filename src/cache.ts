import { TrigonometryFunctions } from "./trigonometry/Functions";
import { Logarithms } from "./equations/Logarithms";

/**
 * Enum for cache types
 * @readonly
 * @enum
 */
export const CacheEnum = {
	Sin: "sin",
	Cos: "cos",
	Tan: "tan",
	Asin: "asin",
	Acos: "acos",
	Atan: "atan",
	Csc: "csc",
	Sec: "sec",
	Cot: "cot",
	Sinh: "sinh",
	Cosh: "cosh",
	Tanh: "tanh",
	Asinh: "asinh",
	Acosh: "acosh",
	Atanh: "atanh",
	Csch: "csch",
	Sech: "sech",
	Coth: "coth",
	Acsc: "acsc",
	Asech: "asech",
	Acoth: "acoth",
	Asec: "asec",
	Acot: "acot",
	Acsch: "acsch",
	Log: "log",
	Ln: "ln",
} as const ;

export class CacheManager {
	static add(type: typeof CacheEnum | string, input: number, output: number) {
		switch (type) {
			case "sin":
				return TrigonometryFunctions.sinCache.set(input, output);
			case "cos":
				return TrigonometryFunctions.cosCache.set(input, output);
			case "tan":
				return TrigonometryFunctions.tanCache.set(input, output);
			case "asin":
				return TrigonometryFunctions.asinCache.set(input, output);
			case "acos":
				return TrigonometryFunctions.acosCache.set(input, output);
			case "atan":
				return TrigonometryFunctions.atanCache.set(input, output);
			case "csc":
				return TrigonometryFunctions.cscCache.set(input, output);
			case "sec":
				return TrigonometryFunctions.secCache.set(input, output);
			case "cot":
				return TrigonometryFunctions.cotCache.set(input, output);
			case "sinh":
				return TrigonometryFunctions.sinhCache.set(input, output);
			case "cosh":
				return TrigonometryFunctions.coshCache.set(input, output);
			case "tanh":
				return TrigonometryFunctions.tanhCache.set(input, output);
			case "asinh":
				return TrigonometryFunctions.asinhCache.set(input, output);
			case "acosh":
				return TrigonometryFunctions.acoshCache.set(input, output);
			case "atanh":
				return TrigonometryFunctions.atanhCache.set(input, output);
			case "csch":
				return TrigonometryFunctions.cschCache.set(input, output);
			case "sech":
				return TrigonometryFunctions.sechCache.set(input, output);
			case "coth":
				return TrigonometryFunctions.cothCache.set(input, output);
			case "acsc":
				return TrigonometryFunctions.acscCache.set(input, output);
			case "asech":
				return TrigonometryFunctions.asechCache.set(input, output);
			case "acoth":
				return TrigonometryFunctions.acothCache.set(input, output);
			case "asec":
				return TrigonometryFunctions.asecCache.set(input, output);
			case "acot":
				return TrigonometryFunctions.acotCache.set(input, output);
			case "acsch":
				return TrigonometryFunctions.acschCache.set(input, output);
			case "log":
				return Logarithms.logCache.set(input, output);
			case "ln":
				return Logarithms.lnCache.set(input, output);
		}
	}

	static get(type: typeof CacheEnum | string, input: number) {
		switch (type) {
			case "sin":
				return TrigonometryFunctions.sinCache.get(input);
			case "cos":
				return TrigonometryFunctions.cosCache.get(input);
			case "tan":
				return TrigonometryFunctions.tanCache.get(input);
			case "asin":
				return TrigonometryFunctions.asinCache.get(input);
			case "acos":
				return TrigonometryFunctions.acosCache.get(input);
			case "atan":
				return TrigonometryFunctions.atanCache.get(input);
			case "csc":
				return TrigonometryFunctions.cscCache.get(input);
			case "sec":
				return TrigonometryFunctions.secCache.get(input);
			case "cot":
				return TrigonometryFunctions.cotCache.get(input);
			case "sinh":
				return TrigonometryFunctions.sinhCache.get(input);
			case "cosh":
				return TrigonometryFunctions.coshCache.get(input);
			case "tanh":
				return TrigonometryFunctions.tanhCache.get(input);
			case "asinh":
				return TrigonometryFunctions.asinhCache.get(input);
			case "acosh":
				return TrigonometryFunctions.acoshCache.get(input);
			case "atanh":
				return TrigonometryFunctions.atanhCache.get(input);
			case "csch":
				return TrigonometryFunctions.cschCache.get(input);
			case "sech":
				return TrigonometryFunctions.sechCache.get(input);
			case "coth":
				return TrigonometryFunctions.cothCache.get(input);
			case "acsc":
				return TrigonometryFunctions.acscCache.get(input);
			case "asech":
				return TrigonometryFunctions.asechCache.get(input);
			case "acoth":
				return TrigonometryFunctions.acothCache.get(input);
			case "asec":
				return TrigonometryFunctions.asecCache.get(input);
			case "acot":
				return TrigonometryFunctions.acotCache.get(input);
			case "acsch":
				return TrigonometryFunctions.acschCache.get(input);
			case "log":
				return Logarithms.logCache.get(input);
			case "ln":
				return Logarithms.lnCache.get(input);
		}
	}
}