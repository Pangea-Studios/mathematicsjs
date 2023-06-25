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

	τ0: { value: 6.28318_53071_79586, type: NumberTypes.Transcendental },
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
	δ_S: { value: 2.41421_35623_73095, type: NumberTypes.Algebraic },

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
	ψ0: { value: 1.46557_12318_76768, type: NumberTypes.Algebraic },

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
	Ω0: { value: 0.56714_32904_09783, type: NumberTypes.Transcendental },

	apérysConstant: {
		value: 1.20205_69031_59594,
		type: NumberTypes.Irrational,
	},
	ζ3: { value: 1.20205_69031_59594, type: NumberTypes.Irrational },

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

	firstContinuedFractionConstant: {
		value: 0.69777_46579_64007,
		type: NumberTypes.Irrational,
	},
	C_1: { value: 0.69777_46579_64007, type: NumberTypes.Irrational },

	RamanujansConstant: {
		value: 26253_74126_40768.75399_99999_99999_25e+3,
		type: NumberTypes.Transcendental,
	},

	glaisherKinkelinConstant: {
		value: 1.28242_71291_00622,
		type: NumberTypes.Real,
	},
	A0: { value: 1.28242_71291_00622, type: NumberTypes.Real },

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
	P0: { value: 2.29558_71493_92638, type: NumberTypes.Transcendental },

	cahensConstant: {
		value: 0.64341_05462_88338,
		type: NumberTypes.Transcendental,
	},
	C1: { value: 0.64341_05462_88338, type: NumberTypes.Transcendental },

	gelfondsConstant: {
		value: 23.14069_26327_792,
		type: NumberTypes.Transcendental,
	},
	α0: { value: 23.14069_26327_792, type: NumberTypes.Transcendental },
	e_π: { value: 23.14069_26327_792, type: NumberTypes.Transcendental },

	gelfondSchneiderConstant: {
		value: 2.66514_41426_90225,
		type: NumberTypes.Transcendental,
	},
	two_sqrt2: {
		value: 2.66514_41426_90225,
		type: NumberTypes.Transcendental,
	},

	secondFavardConstant: {
		value: 1.23370_05501_36169,
		type: NumberTypes.Transcendental,
	},
	K_2: { value: 1.23370_05501_36169, type: NumberTypes.Transcendental },

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
	a_1: { value: 0.82246_70334_24113, type: NumberTypes.Transcendental },

	giesekingConstant: { value: 1.01494_16064_09653, type: NumberTypes.Real },
	G2: { value: 1.01494_16064_09653, type: NumberTypes.Real },

	bernsteinsConstant: { value: 0.28016_94990_23869, type: NumberTypes.Real },
	β0: { value: 0.28016_94990_23869, type: NumberTypes.Real },

	brunsConstant: { value: 1.90216_05831_04, type: NumberTypes.Real },
	B_2: { value: 1.90216_05831_04, type: NumberTypes.Real },

	tribonacciConstant: {
		value: 1.83928_67552_14161,
		type: NumberTypes.Algebraic,
	},

	twinPrimesConstant: { value: 0.66016_18158_46869, type: NumberTypes.Real },
	C0_2: { value: 0.66016_18158_46869, type: NumberTypes.Real },

	plasticNumber: { value: 1.32471_79572_44746, type: NumberTypes.Algebraic },
	ρ0: { value: 1.32471_79572_44746, type: NumberTypes.Algebraic },

	blochsConstant: {
		value: new Range(0.4332, '≤', 0.4719, '≤'),
		type: NumberTypes.Real,
	},
	B0: { value: new Range(0.4332, '≤', 0.4719, '≤'), type: NumberTypes.Real },

	Z_975: { value: 1.95996_39845_40054, type: NumberTypes.Real },

	landausConstant: {
		value: new Range(0.5, '<', 0.54326, '≤'),
		type: NumberTypes.Real,
	},
	L1: { value: new Range(0.5, '<', 0.54326, '≤'), type: NumberTypes.Real },

	landausThirdConstant: {
		value: new Range(0.5, '<', 0.7853, '≤'),
		type: NumberTypes.Real,
	},
	A1: { value: new Range(0.5, '<', 0.7853, '≤'), type: NumberTypes.Real },

	prouhetThueMorseConstant: {
		value: 0.41245_40336_40107,
		type: NumberTypes.Transcendental,
	},
	τ1: { value: 0.41245_40336_40107, type: NumberTypes.Transcendental },

	golombDickmanConstant: {
		value: 0.62432_99885_43550,
		type: NumberTypes.Real,
	},
	λ0: { value: 0.62432_99885_43550, type: NumberTypes.Real },

	lebesgueConstant: { value: 0.98943_12738_31146, type: NumberTypes.Real },
	c: { value: 0.98943_12738_31146, type: NumberTypes.Real },

	fellerTornierConstant: {
		value: 0.66131_70494_69622,
		type: NumberTypes.Real,
	},
	C_FT: { value: 0.66131_70494_69622, type: NumberTypes.Real },

	champernowne10Constant: {
		value: 0.12345_67891_01112,
		type: NumberTypes.Transcendental,
	},
	C_10: { value: 0.12345_67891_01112, type: NumberTypes.Transcendental },

	salemConstant: { value: 1.17628_08182_59917, type: NumberTypes.Algebraic },
	σ_10: { value: 1.17628_08182_59917, type: NumberTypes.Algebraic },

	khinchinsConstant: { value: 2.68545_20010_65306, type: NumberTypes.Real },
	K_0: { value: 2.68545_20010_65306, type: NumberTypes.Real },

	lévysConstant1: { value: 1.18656_91104_15625, type: NumberTypes.Real },
	β1: { value: 1.18656_91104_15625, type: NumberTypes.Real },

	lévysConstant2: { value: 3.27582_29187_21811, type: NumberTypes.Real },
	e_β: { value: 3.27582_29187_21811, type: NumberTypes.Real },

	copelandErdősConstant: {
		value: 0.23571_11317_19232,
		type: NumberTypes.Irrational,
	},
	C_CE: { value: 0.23571_11317_19232, type: NumberTypes.Irrational },

	millsConstant: { value: 1.30637_78838_63080, type: NumberTypes.Real },
	A2: { value: 1.30637_78838_63080, type: NumberTypes.Real },

	gompertzConstant: { value: 0.59634_73623_23194, type: NumberTypes.Real },
	δ0: { value: 0.59634_73623_23194, type: NumberTypes.Real },

	deBrujinNewmanConstant: {
		value: new Range(0, '≤', 0.2, '≤'),
		type: NumberTypes.Real,
	},
	Λ: { value: new Range(0, '≤', 0.2, '≤'), type: NumberTypes.Real },

	vanDerPauwConstant: {
		value: 4.53236_01418_27193,
		type: NumberTypes.Irrational,
	},
	πln2: { value: 4.53236_01418_27193, type: NumberTypes.Irrational },

	magicAngle: {
		value: 0.95531_66181_245092,
		type: NumberTypes.Transcendental,
	},
	Θ_m: { value: 0.95531_66181_245092, type: NumberTypes.Transcendental },

	artinsConstant: { value: 0.37395_58136_19202, type: NumberTypes.Real },
	C_Artin: { value: 0.37395_58136_19202, type: NumberTypes.Real },

	portersConstant: { value: 1.46707_80794_33975, type: NumberTypes.Real },
	C0: { value: 1.46707_80794_33975, type: NumberTypes.Real },

	stephensConstant: { value: 0.57595_99688_92945, type: NumberTypes.Real },

	lochsConstant: { value: 0.97027_01143_92033, type: NumberTypes.Real },
	L2: { value: 0.97027_01143_92033, type: NumberTypes.Real },

	deViccisTesseractConstant: {
		value: 1.00743_47568_84279,
		type: NumberTypes.Algebraic,
	},

	liebsSquareIceConstant: {
		value: 1.53960_07178_39002,
		type: NumberTypes.Algebraic,
	},

	nivensConstant: { value: 1.70521_11401_05367, type: NumberTypes.Real },
	C2: { value: 1.70521_11401_05367, type: NumberTypes.Real },

	regularPaperFoldingSequence: {
		value: 0.85073_61882_01867,
		type: NumberTypes.Transcendental,
	},
	P1: { value: 0.85073_61882_01867, type: NumberTypes.Transcendental },

	reciprocalFibonacciConstant: {
		value: 3.35988_56662_43177,
		type: NumberTypes.Irrational,
	},
	ψ1: { value: 3.35988_56662_43177, type: NumberTypes.Irrational },

	chvátalSankoffConstant: {
		value: new Range(0.788071, '≤', 0.82628, '≤'),
		type: NumberTypes.Real,
	},
	γ_2: {
		value: new Range(0.788071, '≤', 0.82628, '≤'),
		type: NumberTypes.Real,
	},

	feigenbaumConstant: {
		value: 4.66920_16091_02990,
		type: NumberTypes.Real,
	},
	δ1: { value: 4.66920_16091_02990, type: NumberTypes.Real },

	chaitinConstant: {
		value: 0.00787_49969_97812,
		type: NumberTypes.Transcendental,
	},
	Ω1: { value: 0.00787_49969_97812, type: NumberTypes.Transcendental },

	robbinsConstant: {
		value: 0.66170_71822_67176,
		type: NumberTypes.Transcendental,
	},
	Δ3: { value: 0.66170_71822_67176, type: NumberTypes.Transcendental },

	weirerstrassConstant: {
		value: 0.47494_93799_87920,
		type: NumberTypes.Transcendental,
	},

	fransénRobinsonConstant: {
		value: 2.80777_02420_28519,
		type: NumberTypes.Real,
	},
	F: { value: 2.80777_02420_28519, type: NumberTypes.Real },

	feingenbaumConstant: {
		value: 2.50290_78750_95892,
		type: NumberTypes.Real,
	},
	α1: { value: 2.50290_78750_95892, type: NumberTypes.Real },

	secondDuBoisReymondConstant: {
		value: 0.19452_80494_65325,
		type: NumberTypes.Transcendental,
	},
	C1_2: { value: 0.19452_80494_65325, type: NumberTypes.Transcendental },

	erdősTenenbaumFordconstant: {
		value: 0.86071_33205_59342,
		type: NumberTypes.Real,
	},
	δ2: { value: 0.86071_33205_59342, type: NumberTypes.Real },

	conwaysConstant: {
		value: 1.30357_72690_34296,
		type: NumberTypes.Algebraic,
	},
	λ1: { value: 1.30357_72690_34296, type: NumberTypes.Algebraic },

	hafnerSarnakMcCurleyConstant: {
		value: 0.35323_63718_54995,
		type: NumberTypes.Real,
	},
	σ0: { value: 0.35323_63718_54995, type: NumberTypes.Real },

	backHousesConstant: {
		value: 1.45607_49485_82689,
		type: NumberTypes.Real,
	},
	B1: { value: 1.45607_49485_82689, type: NumberTypes.Real },

	visanathConstant: {
		value: 1.13198_82487_943,
		type: NumberTypes.Real,
	},

	komornikLoretiConstant: {
		value: 1.78723_16501_82965,
		type: NumberTypes.Transcendental,
	},
	q: { value: 1.78723_16501_82965, type: NumberTypes.Transcendental },

	embreeTrefethenConstant: {
		value: 0.70258,
		type: NumberTypes.Real,
	},
	β_asterix: { value: 0.70258, type: NumberTypes.Real },

	heathBrownMorozConstant: {
		value: 0.00131_76411_54853,
		type: NumberTypes.Real,
	},
	C3: { value: 0.00131_76411_54853, type: NumberTypes.Real },

	MRBConstant: {
		value: 0.18785_96424_62067,
		type: NumberTypes.Real,
	},
	S: { value: 0.18785_96424_62067, type: NumberTypes.Real },

	primeConstant: {
		value: 0.41468_25098_51111,
		type: NumberTypes.Irrational,
	},
	ρ1: { value: 0.41468_25098_51111, type: NumberTypes.Irrational },

	somosQuadraticSequenceConstant: {
		value: 1.66168_79496_33594,
		type: NumberTypes.Real,
	},
	σ1: { value: 1.66168_79496_33594, type: NumberTypes.Real },

	logmarithmicCapacityOfTheUnitDisk: {
		value: 0.59017_02995_08048,
		type: NumberTypes.Transcendental,
	},

	taniguchiConstant: {
		value: 0.67823_44919_17391,
		type: NumberTypes.Real,
	},
} as const;
