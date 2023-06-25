export const NumberTypes = {
	Natural: {
		symbol: 'ℕ',
		description:
			'Natural Numbers also known as counting numbers, natural numbers are the positive integers starting from 1 and extending indefinitely (1, 2, 3, 4, 5, ...).',
	},
	Whole: {
		symbol: 'ℤ',
		description:
			'Whole numbers include zero along with the natural numbers (0, 1, 2, 3, 4, ...).',
	},
	Integer: {
		symbol: '𝕀',
		description:
			'Integers encompass all positive and negative whole numbers, including zero (-∞, ..., -3, -2, -1, 0, 1, 2, 3, ..., +∞).',
	},
	Rational: {
		symbol: 'ℚ',
		description:
			'Rational Numbers: Rational numbers are numbers that can be expressed as a fraction of two integers, where the denominator is not zero. They can be terminating (e.g., 1/2 = 0.5) or repeating decimals (e.g., 1/3 = 0.333...). Rational numbers include integers and fractions.',
	},
	Real: {
		symbol: 'ℝ',
		description:
			'Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.',
	},
	Prime: {
		symbol: 'ℙ',
		description:
			'Prime numbers are natural numbers greater than 1 that have no divisors other than 1 and themselves. Examples include 2, 3, 5, 7, 11, and so on.',
	},
	Transcendental: {
		symbol: '𝕋',
		description:
			"Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.",
	},
	Algebraic: {
		symbol: '𝔸',
		description:
			'Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.',
	},
	Complex: {
		symbol: 'ℝ',
		description:
			'Complex numbers are numbers of the form a + bi, where a and b are real numbers and i is the imaginary unit. They include both real and imaginary numbers.',
	},
	Irrational: {
		symbol: '𝕀',
		description:
			'Irrational numbers cannot be expressed as fractions or ratios of integers. They are non-repeating and non-terminating decimals. Famous examples include π (pi) and √2 (square root of 2).',
	},
	Imaginary: {
		symbol: '𝕚',
		description:
			'Imaginary numbers are numbers that involve the imaginary unit, denoted by "i," which is defined as the square root of -1. Numbers of the form a + bi, where a and b are real numbers, are called complex numbers.',
	},
} as const;

import { Range } from '../util';

/**
 * Enum for constants
 * @readonly
 * @enum
 */

export const MathsConstants = {
	e: { value: 2.71828_18284_59045, type: NumberTypes.Transcendental },
	eulersNumber: {
		value: 2.71828_18284_59045,
		type: NumberTypes.Transcendental,
	},

	pi: { value: 3.14159_26535_89793, type: NumberTypes.Transcendental },
	π: { value: 3.14159_26535_89793, type: NumberTypes.Transcendental },

	ε: 0.0001,
	epsilon: 0.0001,

	τ: { value: 6.28318_53071_79586, type: NumberTypes.Transcendental },
	tau: { value: 6.28318_53071_79586, type: NumberTypes.Transcendental },

	ϕ: { value: 1.61803_39887_49894, type: NumberTypes.Algebraic },
	phi: { value: 1.61803_39887_49894, type: NumberTypes.Algebraic },
	goldenRatio: {
		value: 1.61803_39887_49894,
		type: NumberTypes.Algebraic,
	},
	φ: { value: 1.61803_39887_49894, type: NumberTypes.Algebraic },

	sqrt2: { value: 1.41421_35623_73095, type: NumberTypes.Algebraic },
	sqrt3: { value: 1.73205_08075_68877, type: NumberTypes.Algebraic },
	sqrt5: { value: 2.23606_79774_99789, type: NumberTypes.Algebraic },

	silverRatio: {
		value: 2.41421_35623_73095,
		type: NumberTypes.Algebraic,
	},
	δS: { value: 2.41421_35623_73095, type: NumberTypes.Algebraic },

	cubeRoot2: {
		value: 1.25992_10498_94873,
		type: NumberTypes.Algebraic,
	},
	cubeRoot3: {
		value: 1.44224_95703_07408,
		type: NumberTypes.Algebraic,
	},
	twelthRoot2: {
		value: 1.05946_30943_59295,
		type: NumberTypes.Algebraic,
	},

	supergoldenRatio: {
		value: 1.46557_12318_76768,
		type: NumberTypes.Algebraic,
	},
	ψ: { value: 1.46557_12318_76768, type: NumberTypes.Algebraic },

	µ0: { value: 1.84775_90650_22573, type: NumberTypes.Algebraic },
	hexagonalLatticeConnectiveConstant: {
		value: 1.84775_90650_22573,
		type: NumberTypes.Algebraic,
	},

	keplerBouwkampConstant: {
		value: 0.11494_20448_53296,
		type: NumberTypes.Real,
	},
	K0: { value: 0.11494_20448_53296, type: NumberTypes.Real },

	WallisConstant: {
		value: 0.11494_20448_53296,
		type: NumberTypes.Algebraic,
	},

	ln2: { value: 0.69314_71805_59945, type: NumberTypes.Transcendental },

	lemniscateConstant: {
		value: 2.62205_75542_92119,
		type: NumberTypes.Transcendental,
	},
	ϖ: { value: 2.62205_75542_92119, type: NumberTypes.Transcendental },

	eulersConstant: {
		value: 0.57721_56649_01532,
		type: NumberTypes.Real,
	},
	γ0: { value: 0.57721_56649_01532, type: NumberTypes.Real },

	erdősBorweinConstant: {
		value: 1.60669_51524_15291,
		type: NumberTypes.Irrational,
	},
	E: { value: 1.60669_51524_15291, type: NumberTypes.Irrational },

	omegaConstant: {
		value: 0.56714_32904_09783,
		type: NumberTypes.Transcendental,
	},
	Ω: { value: 0.56714_32904_09783, type: NumberTypes.Transcendental },

	apérysConstant: {
		value: 1.20205_69031_59594,
		type: NumberTypes.Irrational,
	},
	'ζ(3)': { value: 1.20205_69031_59594, type: NumberTypes.Irrational },

	laplaceLimit: {
		value: 1.20205_69031_59594,
		type: NumberTypes.Transcendental,
	},

	RamanujanSoldnerConstant: {
		value: 1.45136_92348_83381,
		type: NumberTypes.Real,
	},
	μ1: { value: 1.45136_92348_83381, type: NumberTypes.Real },

	GausssConstant: {
		value: 1.45136_92348_83381,
		type: NumberTypes.Transcendental,
	},
	G0: { value: 1.45136_92348_83381, type: NumberTypes.Transcendental },

	secondHermiteConstant: {
		value: 1.15470_05383_79251,
		type: NumberTypes.Algebraic,
	},
	γ1: { value: 1.15470_05383_79251, type: NumberTypes.Algebraic },

	liouvillesConstant: {
		value: 0.11000_10000_00000_00000_0001,
		type: NumberTypes.Transcendental,
	},
	L: {
		value: 0.11000_10000_00000_00000_0001,
		type: NumberTypes.Transcendental,
	},

	firstContinuedFractionConstant: {
		value: 0.69777_46579_64007,
		type: NumberTypes.Irrational,
	},
	C0: { value: 0.69777_46579_64007, type: NumberTypes.Irrational },

	RamanujansConstant: {
		value: 262_53741_26407_68743.99999_99999_99250,
		type: NumberTypes.Transcendental,
	},

	glaisherKinkelinConstant: {
		value: 1.28242_71291_00622,
		type: NumberTypes.Real,
	},
	A: { value: 1.28242_71291_00622, type: NumberTypes.Real },

	catalansConstant: { value: 0.91596_55941_77219, type: NumberTypes.Real },
	G1: { value: 0.91596_55941_77219, type: NumberTypes.Real },

	dottieNumber: {
		value: 0.73908_51332_15160,
		type: NumberTypes.Transcendental,
	},

	meisselMertensConstant: {
		value: 0.26149_72128_47642,
		type: NumberTypes.Real,
	},
	M: { value: 0.26149_72128_47642, type: NumberTypes.Real },

	univeralParabolicConstant: {
		value: 2.29558_71493_92638,
		type: NumberTypes.Transcendental,
	},
	P: { value: 2.29558_71493_92638, type: NumberTypes.Transcendental },

	cahensConstant: {
		value: 0.64341_05462_88338,
		type: NumberTypes.Transcendental,
	},
	C1: { value: 0.64341_05462_88338, type: NumberTypes.Transcendental },

	gelfondsConstant: {
		value: 23.14069_26327_792,
		type: NumberTypes.Transcendental,
	},
	α: { value: 23.14069_26327_792, type: NumberTypes.Transcendental },
	e_pi: { value: 23.14069_26327_792, type: NumberTypes.Transcendental },

	gelfondSchneiderConstant: {
		value: 2.66514_41426_90225,
		type: NumberTypes.Transcendental,
	},
	two_sqrt2: { value: 2.66514_41426_90225, type: NumberTypes.Transcendental },

	secondFavardConstant: {
		value: 1.23370_05501_36169,
		type: NumberTypes.Transcendental,
	},
	K1: { value: 1.23370_05501_36169, type: NumberTypes.Transcendental },

	goldenAngle: {
		value: 2.39996_32297_28653,
		type: NumberTypes.Transcendental,
	},
	g: { value: 2.39996_32297_28653, type: NumberTypes.Transcendental },

	sierpińskisConstant: { value: 2.58498_17595_79253, type: NumberTypes.Real },
	K2: { value: 2.58498_17595_79253, type: NumberTypes.Real },

	landauRamanujanConstant: {
		value: 0.76422_36535_89220,
		type: NumberTypes.Real,
	},
	K3: { value: 0.76422_36535_89220, type: NumberTypes.Real },

	firstNielesRamanujanConstant: {
		value: 0.82246_70334_24113,
		type: NumberTypes.Transcendental,
	},
	a1: { value: 0.82246_70334_24113, type: NumberTypes.Transcendental },

	giesekingConstant: { value: 1.01494_16064_09653, type: NumberTypes.Real },
	G2: { value: 1.01494_16064_09653, type: NumberTypes.Real },

	bernsteinsConstant: { value: 0.28016_94990_23869, type: NumberTypes.Real },
	β: { value: 0.28016_94990_23869, type: NumberTypes.Real },

	brunsConstant: { value: 1.90216_05831_04, type: NumberTypes.Real },
	B2: { value: 1.90216_05831_04, type: NumberTypes.Real },

	tribonacciConstant: {
		value: 1.83928_67552_14161,
		type: NumberTypes.Algebraic,
	},

	twinPrimesConstant: { value: 0.66016_18158_46869, type: NumberTypes.Real },
	C2: { value: 0.66016_18158_46869, type: NumberTypes.Real },

	plasticNumber: { value: 1.32471_79572_44746, type: NumberTypes.Algebraic },
	ρ: { value: 1.32471_79572_44746, type: NumberTypes.Algebraic },

	blochsConstant: {
		value: new Range(0.4332, '≤', 0.4719, '≤'),
		type: NumberTypes.Real,
	},
	B: { value: new Range(0.4332, '≤', 0.4719, '≤'), type: NumberTypes.Real },
} as const;
