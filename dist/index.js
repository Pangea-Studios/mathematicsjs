/**
 * Class for all indices related functions.
 */
class Indices {
    /**
     * Returns the inputted number multiplied by itself the specified amount of times.
     * @param {number} number - The number to multiply by itself
     * @param {(number|object)} [power=2] - The amount of times to multiply number by itself
     * @example <caption>Example 1 - Without specifying a power</caption>
     * // returns 25
     * Indices.power(5)
     * @example <caption>Example 2 - With specifying a power</caption>
     * // returns 8
     * Indices.power(2, 3)
     * @returns {number} The inputted number multiplied by itself the specified amount of times
     */
    static power(number, power) {
        let p;
        if (typeof power === 'object' &&
            'numerator' in power &&
            'denominator' in power) {
            if (power.denominator &&
                power.numerator &&
                typeof power.numerator === 'number' &&
                typeof power.denominator === 'number') {
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
    /**
     * Calculates the nth root of a given number.
     *
     * @param {number} number - the number to calculate the nth root o
     * @param {number} root - the root to use for the calculation.
     * @return {number} the result of the nth root calculation
     */
    static root(number, root = 2) {
        // TODO: object compatibility
        return this.power(number, 1 / root);
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
 * Find the GCD of two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @param {Object} [options] Extra options
 * @param {number} [options.base] The base of the numbers you inputted
 * @returns {number} The GCD of the two numbers
 */
function gcd2(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
        const t = b;
        b = a % b;
        a = t;
    }
    return a;
}
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
function convertBase(number, fromBase, toBase) {
    if (fromBase > 36 || fromBase < 2 || toBase > 36 || toBase < 2) {
        return null;
    }
    const base10 = parseInt(number.toString(), fromBase);
    if (toBase === 10) {
        return base10;
    }
    else {
        return base10.toString(toBase);
    }
}
/**
 * Concatenates two numbers in a given base.
 *
 * @param {number} a - The first number to concatenate.
 * @param {number} b - The second number to concatenate.
 * @param {number} [base=10] - The base to use for the concatenation.
 * @return {number} The concatenated number in the given base.
 */
function concatenate(a, b) {
    return a * Math.pow(10, Math.floor(Math.log(b) / Math.log(10)) + 1) + b;
}
class Color {
    constructor(red, green, blue, alpha) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }
}
class Range {
    constructor(min, operand1, max, operand2) {
        // min <= x < max
        this.operand1 = operand1;
        this.operand2 = operand2;
        this.min = min;
        this.max = max;
    }
    returnString() {
        return (String(this.min) +
            ' ' +
            this.operand1 +
            ' x ' +
            String(this.max) +
            ' ' +
            this.operand2);
    }
}
/**
 * Counts the number of occurrences of a target value in an array or string.
 *
 * @param {Array<any> | string} array - The array or string to search in.
 * @param {any} target - The target value to count occurrences of.
 * @return {number} The number of occurrences of the target value.
 */
function find(array, target) {
    let count = 0;
    if (Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === target) {
                count++;
            }
        }
    }
    else if (typeof array === 'string') {
        array = array.split('');
        for (let i = 0; i < array.length; i++) {
            if (array[i] === target) {
                count++;
            }
        }
    }
    return count;
}
/**
 * Checks if the given object exists in all of the arrays.
 *
 * @param {any} object - The object to check.
 * @param {any[][]} arrays - The arrays to search.
 * @return {boolean} Returns true if the object exists in all arrays, false otherwise.
 */
function isInAllArrays(object, arrays) {
    for (const array of arrays) {
        if (find(array, object) === 0) {
            return false;
        }
    }
    return true;
}
/**
 * Replaces a portion of an array with a new set of values.
 *
 * @param {any[]} array - The original array.
 * @param {any[]} values - The values to insert into the array.
 * @param {number} startPos - The starting position of the replacement.
 * @param {number} endPos - The ending position of the replacement.
 * @return {any[]} - The modified array.
 */
function arrayReplace(array, values, startPos, endPos) {
    return [...array.slice(0, startPos), ...values, ...array.slice(endPos + 1)];
}

/**
 * Creates a Fraction.
 */
class Fraction {
    /**
     * Creates the fraction.
     * @param {number} numerator - The numerator(upper number) of the fraction
     * @param {number} denominator - The denominator(lower number) of the fraction
     * @example <caption>Example - Create Fraction</caption>
     * // returns { numerator: 3, denominator: 6 }
     * new Fraction(3,6)
     * @returns {Object}
     */
    constructor(numerator, denominator) {
        if (denominator === 0) {
            throw new Error('Denominator cannot be zero.');
        }
        const sign = denominator < 0 ? -1 : 1;
        numerator *= sign;
        denominator *= sign;
        const gcd = gcd2(numerator, denominator);
        this.numerator = sign * (numerator / gcd);
        this.denominator = denominator / gcd;
    }
    /**
     * Simplify the number.
     * @example <caption>Example - Simplify Fraction</caption>
     * // Returns [1,2]
     * const myFraction = new Fraction(3,6)
     * myFraction.simplified()
     * @returns {number[]} Simplified Fraction
     */
    simplified() {
        const gcd = gcd2(this.numerator, this.denominator);
        this.simplifiedNumerator = this.numerator / gcd;
        this.simplifiedDenominator = this.denominator / gcd;
        return [this.numerator / gcd, this.denominator / gcd];
    }
    /**
     * Converts the fraction to a decimal.
     * @example <caption>Example - Convert Fraction to Decimal</caption>
     * // returns 0.5
     * const myFraction = new Fraction(3,6)
     * myFraction.decimal()
     * @returns {number} Decimal
     */
    decimal() {
        return this.numerator / this.denominator;
    }
    /**
     * Converts the fraction to a percentage.
     * @example <caption>Example - Convert Fraction to Percentage</caption>
     * // returns 50
     * const myFraction = new Fraction(3,6)
     * myFraction.percentage()
     * @returns {number} Percentage
     */
    percentage() {
        return (this.numerator / this.denominator) * 100;
    }
    /**
     * Converts the fraction to a string.
     * @example <caption>Example - Convert Fraction to String</caption>
     * // returns "3/6"
     * const myFraction = new Fraction(3,6)
     * myFraction.toString()
     * @returns {string} Fraction String
     */
    toString() {
        return `${this.numerator}/${this.denominator}`;
    }
    /**
     * Converts the fraction to a simplified string.
     * @example <caption>Example - Convert Fraction Simplified String</caption>
     * // returns "1/2"
     * const myFraction = new Fraction(3,6)
     * myFraction.toSimplifiedString()
     * @returns {string} Simplified Fraction String
     */
    toSimplifiedString() {
        const x = this.simplified();
        return `${x[0]}/${x[1]}`;
    }
}

const NumberTypes = {
    Natural: {
        symbol: 'ℕ',
        description: 'Natural Numbers also known as counting numbers, natural numbers are the positive integers starting from 1 and extending indefinitely (1, 2, 3, 4, 5, ...).',
    },
    Whole: {
        symbol: 'ℤ',
        description: 'Whole numbers include zero along with the natural numbers (0, 1, 2, 3, 4, ...).',
    },
    Integer: {
        symbol: '𝕀',
        description: 'Integers encompass all positive and negative whole numbers, including zero (-∞, ..., -3, -2, -1, 0, 1, 2, 3, ..., +∞).',
    },
    Rational: {
        symbol: 'ℚ',
        description: 'Rational Numbers: Rational numbers are numbers that can be expressed as a fraction of two integers, where the denominator is not zero. They can be terminating (e.g., 1/2 = 0.5) or repeating decimals (e.g., 1/3 = 0.333...). Rational numbers include integers and fractions.',
    },
    Real: {
        symbol: 'ℝ',
        description: 'Real numbers encompass both rational and irrational numbers. They include all possible numbers on the number line and can be represented as decimal expansions.',
    },
    Prime: {
        symbol: 'ℙ',
        description: 'Prime numbers are natural numbers greater than 1 that have no divisors other than 1 and themselves. Examples include 2, 3, 5, 7, 11, and so on.',
    },
    Transcendental: {
        symbol: '𝕋',
        description: "Transcendental numbers are real or complex numbers that are not algebraic, meaning they are not solutions to any non-zero polynomial equation with integer coefficients. π and e (Euler's number) are examples of transcendental numbers.",
    },
    Algebraic: {
        symbol: '𝔸',
        description: 'Algebraic numbers are a subset of the complex numbers that are solutions to polynomial equations with integer coefficients. In other words, an algebraic number is a root of a non-zero polynomial equation with integer coefficients.',
    },
    Complex: {
        symbol: 'ℝ',
        description: 'Complex numbers are numbers of the form a + bi, where a and b are real numbers and i is the imaginary unit. They include both real and imaginary numbers.',
    },
    Irrational: {
        symbol: '𝕀',
        description: 'Irrational numbers cannot be expressed as fractions or ratios of integers. They are non-repeating and non-terminating decimals. Famous examples include π (pi) and √2 (square root of 2).',
    },
    Imaginary: {
        symbol: '𝕚',
        description: 'Imaginary numbers are numbers that involve the imaginary unit, denoted by "i," which is defined as the square root of -1. Numbers of the form a + bi, where a and b are real numbers, are called complex numbers.',
    },
};
/**
 * Enum for constants
 * @readonly
 * @enum
 */
const MathsConstants = {
    e: { value: 2.718281828459045, type: NumberTypes.Transcendental },
    eulersNumber: {
        value: 2.718281828459045,
        type: NumberTypes.Transcendental,
    },
    pi: { value: 3.141592653589793, type: NumberTypes.Transcendental },
    π: { value: 3.141592653589793, type: NumberTypes.Transcendental },
    ε: 0.0001,
    epsilon: 0.0001,
    τ0: { value: 6.283185307179586, type: NumberTypes.Transcendental },
    tau: { value: 6.283185307179586, type: NumberTypes.Transcendental },
    ϕ: { value: 1.618033988749894, type: NumberTypes.Algebraic },
    phi: { value: 1.618033988749894, type: NumberTypes.Algebraic },
    goldenRatio: {
        value: 1.618033988749894,
        type: NumberTypes.Algebraic,
    },
    φ: { value: 1.618033988749894, type: NumberTypes.Algebraic },
    sqrt2: { value: 1.414213562373095, type: NumberTypes.Algebraic },
    sqrt3: { value: 1.732050807568877, type: NumberTypes.Algebraic },
    sqrt5: { value: 2.236067977499789, type: NumberTypes.Algebraic },
    silverRatio: {
        value: 2.414213562373095,
        type: NumberTypes.Algebraic,
    },
    δ_S: { value: 2.414213562373095, type: NumberTypes.Algebraic },
    cubeRoot2: {
        value: 1.259921049894873,
        type: NumberTypes.Algebraic,
    },
    cubeRoot3: {
        value: 1.442249570307408,
        type: NumberTypes.Algebraic,
    },
    twelthRoot2: {
        value: 1.059463094359295,
        type: NumberTypes.Algebraic,
    },
    liouvillesConstant: {
        value: 0.110001,
        type: NumberTypes.Transcendental,
    },
    L0: { value: 0.110001, type: NumberTypes.Transcendental },
    supergoldenRatio: {
        value: 1.465571231876768,
        type: NumberTypes.Algebraic,
    },
    ψ0: { value: 1.465571231876768, type: NumberTypes.Algebraic },
    µ0: { value: 1.847759065022573, type: NumberTypes.Algebraic },
    hexagonalLatticeConnectiveConstant: {
        value: 1.847759065022573,
        type: NumberTypes.Algebraic,
    },
    keplerBouwkampConstant: {
        value: 0.114942044853296,
        type: NumberTypes.Real,
    },
    K0: { value: 0.114942044853296, type: NumberTypes.Real },
    WallisConstant: {
        value: 0.114942044853296,
        type: NumberTypes.Algebraic,
    },
    ln2: { value: 0.693147180559945, type: NumberTypes.Transcendental },
    lemniscateConstant: {
        value: 2.622057554292119,
        type: NumberTypes.Transcendental,
    },
    ϖ: { value: 2.622057554292119, type: NumberTypes.Transcendental },
    eulersConstant: {
        value: 0.577215664901532,
        type: NumberTypes.Real,
    },
    γ0: { value: 0.577215664901532, type: NumberTypes.Real },
    erdősBorweinConstant: {
        value: 1.606695152415291,
        type: NumberTypes.Irrational,
    },
    E: { value: 1.606695152415291, type: NumberTypes.Irrational },
    omegaConstant: {
        value: 0.567143290409783,
        type: NumberTypes.Transcendental,
    },
    Ω0: { value: 0.567143290409783, type: NumberTypes.Transcendental },
    apérysConstant: {
        value: 1.202056903159594,
        type: NumberTypes.Irrational,
    },
    ζ3: { value: 1.202056903159594, type: NumberTypes.Irrational },
    laplaceLimit: {
        value: 1.202056903159594,
        type: NumberTypes.Transcendental,
    },
    RamanujanSoldnerConstant: {
        value: 1.451369234883381,
        type: NumberTypes.Real,
    },
    μ1: { value: 1.451369234883381, type: NumberTypes.Real },
    GausssConstant: {
        value: 1.451369234883381,
        type: NumberTypes.Transcendental,
    },
    G0: { value: 1.451369234883381, type: NumberTypes.Transcendental },
    secondHermiteConstant: {
        value: 1.154700538379251,
        type: NumberTypes.Algebraic,
    },
    γ1: { value: 1.154700538379251, type: NumberTypes.Algebraic },
    firstContinuedFractionConstant: {
        value: 0.697774657964007,
        type: NumberTypes.Irrational,
    },
    C_1: { value: 0.697774657964007, type: NumberTypes.Irrational },
    RamanujansConstant: {
        value: 2.62537412640768e16,
        type: NumberTypes.Transcendental,
    },
    glaisherKinkelinConstant: {
        value: 1.282427129100622,
        type: NumberTypes.Real,
    },
    A0: { value: 1.282427129100622, type: NumberTypes.Real },
    catalansConstant: { value: 0.915965594177219, type: NumberTypes.Real },
    G1: { value: 0.915965594177219, type: NumberTypes.Real },
    dottieNumber: {
        value: 0.73908513321516,
        type: NumberTypes.Transcendental,
    },
    meisselMertensConstant: {
        value: 0.261497212847642,
        type: NumberTypes.Real,
    },
    M: { value: 0.261497212847642, type: NumberTypes.Real },
    univeralParabolicConstant: {
        value: 2.295587149392638,
        type: NumberTypes.Transcendental,
    },
    P0: { value: 2.295587149392638, type: NumberTypes.Transcendental },
    cahensConstant: {
        value: 0.643410546288338,
        type: NumberTypes.Transcendental,
    },
    C1: { value: 0.643410546288338, type: NumberTypes.Transcendental },
    gelfondsConstant: {
        value: 23.1406926327792,
        type: NumberTypes.Transcendental,
    },
    α0: { value: 23.1406926327792, type: NumberTypes.Transcendental },
    e_π: { value: 23.1406926327792, type: NumberTypes.Transcendental },
    gelfondSchneiderConstant: {
        value: 2.665144142690225,
        type: NumberTypes.Transcendental,
    },
    two_sqrt2: {
        value: 2.665144142690225,
        type: NumberTypes.Transcendental,
    },
    secondFavardConstant: {
        value: 1.233700550136169,
        type: NumberTypes.Transcendental,
    },
    K_2: { value: 1.233700550136169, type: NumberTypes.Transcendental },
    goldenAngle: {
        value: 2.399963229728653,
        type: NumberTypes.Transcendental,
    },
    g: { value: 2.399963229728653, type: NumberTypes.Transcendental },
    sierpińskisConstant: { value: 2.584981759579253, type: NumberTypes.Real },
    K2: { value: 2.584981759579253, type: NumberTypes.Real },
    landauRamanujanConstant: {
        value: 0.76422365358922,
        type: NumberTypes.Real,
    },
    K3: { value: 0.76422365358922, type: NumberTypes.Real },
    firstNielesRamanujanConstant: {
        value: 0.822467033424113,
        type: NumberTypes.Transcendental,
    },
    a_1: { value: 0.822467033424113, type: NumberTypes.Transcendental },
    giesekingConstant: { value: 1.014941606409653, type: NumberTypes.Real },
    G2: { value: 1.014941606409653, type: NumberTypes.Real },
    bernsteinsConstant: { value: 0.280169499023869, type: NumberTypes.Real },
    β0: { value: 0.280169499023869, type: NumberTypes.Real },
    brunsConstant: { value: 1.902160583104, type: NumberTypes.Real },
    B_2: { value: 1.902160583104, type: NumberTypes.Real },
    tribonacciConstant: {
        value: 1.839286755214161,
        type: NumberTypes.Algebraic,
    },
    twinPrimesConstant: { value: 0.660161815846869, type: NumberTypes.Real },
    C0_2: { value: 0.660161815846869, type: NumberTypes.Real },
    plasticNumber: { value: 1.324717957244746, type: NumberTypes.Algebraic },
    ρ0: { value: 1.324717957244746, type: NumberTypes.Algebraic },
    blochsConstant: {
        value: new Range(0.4332, '≤', 0.4719, '≤'),
        type: NumberTypes.Real,
    },
    B0: { value: new Range(0.4332, '≤', 0.4719, '≤'), type: NumberTypes.Real },
    Z_975: { value: 1.959963984540054, type: NumberTypes.Real },
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
        value: 0.412454033640107,
        type: NumberTypes.Transcendental,
    },
    τ1: { value: 0.412454033640107, type: NumberTypes.Transcendental },
    golombDickmanConstant: {
        value: 0.62432998854355,
        type: NumberTypes.Real,
    },
    λ0: { value: 0.62432998854355, type: NumberTypes.Real },
    lebesgueConstant: { value: 0.989431273831146, type: NumberTypes.Real },
    c: { value: 0.989431273831146, type: NumberTypes.Real },
    fellerTornierConstant: {
        value: 0.661317049469622,
        type: NumberTypes.Real,
    },
    C_FT: { value: 0.661317049469622, type: NumberTypes.Real },
    champernowne10Constant: {
        value: 0.123456789101112,
        type: NumberTypes.Transcendental,
    },
    C_10: { value: 0.123456789101112, type: NumberTypes.Transcendental },
    salemConstant: { value: 1.176280818259917, type: NumberTypes.Algebraic },
    σ_10: { value: 1.176280818259917, type: NumberTypes.Algebraic },
    khinchinsConstant: { value: 2.685452001065306, type: NumberTypes.Real },
    K_0: { value: 2.685452001065306, type: NumberTypes.Real },
    lévysConstant1: { value: 1.186569110415625, type: NumberTypes.Real },
    β1: { value: 1.186569110415625, type: NumberTypes.Real },
    lévysConstant2: { value: 3.275822918721811, type: NumberTypes.Real },
    e_β: { value: 3.275822918721811, type: NumberTypes.Real },
    copelandErdősConstant: {
        value: 0.235711131719232,
        type: NumberTypes.Irrational,
    },
    C_CE: { value: 0.235711131719232, type: NumberTypes.Irrational },
    millsConstant: { value: 1.30637788386308, type: NumberTypes.Real },
    A2: { value: 1.30637788386308, type: NumberTypes.Real },
    gompertzConstant: { value: 0.596347362323194, type: NumberTypes.Real },
    δ0: { value: 0.596347362323194, type: NumberTypes.Real },
    deBrujinNewmanConstant: {
        value: new Range(0, '≤', 0.2, '≤'),
        type: NumberTypes.Real,
    },
    Λ: { value: new Range(0, '≤', 0.2, '≤'), type: NumberTypes.Real },
    vanDerPauwConstant: {
        value: 4.532360141827193,
        type: NumberTypes.Irrational,
    },
    πln2: { value: 4.532360141827193, type: NumberTypes.Irrational },
    magicAngle: {
        value: 0.9553166181245092,
        type: NumberTypes.Transcendental,
    },
    Θ_m: { value: 0.9553166181245092, type: NumberTypes.Transcendental },
    artinsConstant: { value: 0.373955813619202, type: NumberTypes.Real },
    C_Artin: { value: 0.373955813619202, type: NumberTypes.Real },
    portersConstant: { value: 1.467078079433975, type: NumberTypes.Real },
    C0: { value: 1.467078079433975, type: NumberTypes.Real },
    stephensConstant: { value: 0.575959968892945, type: NumberTypes.Real },
    lochsConstant: { value: 0.970270114392033, type: NumberTypes.Real },
    L2: { value: 0.970270114392033, type: NumberTypes.Real },
    deViccisTesseractConstant: {
        value: 1.007434756884279,
        type: NumberTypes.Algebraic,
    },
    liebsSquareIceConstant: {
        value: 1.539600717839002,
        type: NumberTypes.Algebraic,
    },
    nivensConstant: { value: 1.705211140105367, type: NumberTypes.Real },
    C2: { value: 1.705211140105367, type: NumberTypes.Real },
    regularPaperFoldingSequence: {
        value: 0.850736188201867,
        type: NumberTypes.Transcendental,
    },
    P1: { value: 0.850736188201867, type: NumberTypes.Transcendental },
    reciprocalFibonacciConstant: {
        value: 3.359885666243177,
        type: NumberTypes.Irrational,
    },
    ψ1: { value: 3.359885666243177, type: NumberTypes.Irrational },
    chvátalSankoffConstant: {
        value: new Range(0.788071, '≤', 0.82628, '≤'),
        type: NumberTypes.Real,
    },
    γ_2: {
        value: new Range(0.788071, '≤', 0.82628, '≤'),
        type: NumberTypes.Real,
    },
    feigenbaumConstant: {
        value: 4.66920160910299,
        type: NumberTypes.Real,
    },
    δ1: { value: 4.66920160910299, type: NumberTypes.Real },
    chaitinConstant: {
        value: 0.007874996997812,
        type: NumberTypes.Transcendental,
    },
    Ω1: { value: 0.007874996997812, type: NumberTypes.Transcendental },
    robbinsConstant: {
        value: 0.661707182267176,
        type: NumberTypes.Transcendental,
    },
    Δ3: { value: 0.661707182267176, type: NumberTypes.Transcendental },
    weirerstrassConstant: {
        value: 0.47494937998792,
        type: NumberTypes.Transcendental,
    },
    fransénRobinsonConstant: {
        value: 2.807770242028519,
        type: NumberTypes.Real,
    },
    F: { value: 2.807770242028519, type: NumberTypes.Real },
    feingenbaumConstant: {
        value: 2.502907875095892,
        type: NumberTypes.Real,
    },
    α1: { value: 2.502907875095892, type: NumberTypes.Real },
    secondDuBoisReymondConstant: {
        value: 0.194528049465325,
        type: NumberTypes.Transcendental,
    },
    C1_2: { value: 0.194528049465325, type: NumberTypes.Transcendental },
    erdősTenenbaumFordconstant: {
        value: 0.860713320559342,
        type: NumberTypes.Real,
    },
    δ2: { value: 0.860713320559342, type: NumberTypes.Real },
    conwaysConstant: {
        value: 1.303577269034296,
        type: NumberTypes.Algebraic,
    },
    λ1: { value: 1.303577269034296, type: NumberTypes.Algebraic },
    hafnerSarnakMcCurleyConstant: {
        value: 0.353236371854995,
        type: NumberTypes.Real,
    },
    σ0: { value: 0.353236371854995, type: NumberTypes.Real },
    backHousesConstant: {
        value: 1.456074948582689,
        type: NumberTypes.Real,
    },
    B1: { value: 1.456074948582689, type: NumberTypes.Real },
    visanathConstant: {
        value: 1.1319882487943,
        type: NumberTypes.Real,
    },
    komornikLoretiConstant: {
        value: 1.787231650182965,
        type: NumberTypes.Transcendental,
    },
    q: { value: 1.787231650182965, type: NumberTypes.Transcendental },
    embreeTrefethenConstant: {
        value: 0.70258,
        type: NumberTypes.Real,
    },
    β_asterix: { value: 0.70258, type: NumberTypes.Real },
    heathBrownMorozConstant: {
        value: 0.001317641154853,
        type: NumberTypes.Real,
    },
    C3: { value: 0.001317641154853, type: NumberTypes.Real },
    MRBConstant: {
        value: 0.187859642462067,
        type: NumberTypes.Real,
    },
    S: { value: 0.187859642462067, type: NumberTypes.Real },
    primeConstant: {
        value: 0.414682509851111,
        type: NumberTypes.Irrational,
    },
    ρ1: { value: 0.414682509851111, type: NumberTypes.Irrational },
    somosQuadraticSequenceConstant: {
        value: 1.661687949633594,
        type: NumberTypes.Real,
    },
    σ1: { value: 1.661687949633594, type: NumberTypes.Real },
    logmarithmicCapacityOfTheUnitDisk: {
        value: 0.590170299508048,
        type: NumberTypes.Transcendental,
    },
    taniguchiConstant: {
        value: 0.678234491917391,
        type: NumberTypes.Real,
    },
};

/**
 * Creates a circle.
 * @param {Object} options
 * @param {number} [options.radius] - The radius of the circle
 * @param {number} [options.diameter] - The diameter of the circle
 * @param {number} [options.circumference] - The circumference of the circle
 * @param {number} [options.area] - The area of the circle
 * @example <caption>Example 1 - Create Circle by Radius</caption>
 * // returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }
 * new Circle({ radius: 1 })
 * @example <caption>Example 2 - Create Circle by Diameter</caption>
 * // returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }
 * new Circle({ diameter: 2 })
 * @example <caption>Example 3 - Create Circle by Circumference</caption>
 * // returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }
 * new Circle({ circumference: 3.14 })
 * @example <caption>Example 4 - Create Circle by Area</caption>
 * // returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }
 * new Circle({ area: 3.14 })
 * @returns {Object} All Measurements
 */
class Circle {
    /**
     * Creates a circle.
     * @param {Object} options
     * @param {number} options.radius - The radius of the circle
     * @param {number} options.diameter - The diameter of the circle
     * @param {number} options.circumference - The circumference of the circle
     * @param {number} options.area - The area of the circle
     * @example <caption>Example 1 - Create Circle by Radius</caption>
     * // returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }
     * new Circle({ radius: 1 })
     * @example <caption>Example 1 - Create Circle by Diameter</caption>
     * // returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }
     * new Circle({ diameter: 2 })
     * @example <caption>Example 1 - Create Circle by Circumference</caption>
     * // returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }
     * new Circle({ circumference: 3.14 })
     * @example <caption>Example 1 - Create Circle by Area</caption>
     * // returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }
     * new Circle({ area: 3.14 })
     * @returns {Object}
     * @see https://en.wikipedia.org/wiki/Circumference
     * @see https://en.wikipedia.org/wiki/Area
     * @see https://en.wikipedia.org/wiki/Pi
     * @see https://en.wikipedia.org/wiki/Radius
     * @see https://en.wikipedia.org/wiki/Diameter
     */
    constructor({ radius, diameter, circumference, area, }) {
        if (isNaN(radius) || radius <= 0) {
            throw new Error('ValueError: Radius must be greater than 0');
        }
        else if (isNaN(diameter) || diameter <= 0) {
            throw new Error('ValueError: Diameter must be greater than 0');
        }
        else if (isNaN(circumference) || circumference <= 0) {
            throw new Error('ValueError: Circumference must be greater than 0');
        }
        else if (isNaN(area) || area <= 0) {
            throw new Error('ValueError: Area must be greater than 0');
        }
        if (radius) {
            this.radius = radius;
            this.diameter = radius * 2;
            this.circumference = 2 * MathsConstants.pi * this.radius;
            this.area = MathsConstants.pi * this.radius * this.radius;
        }
        else if (diameter) {
            this.radius = diameter / 2;
            this.diameter = diameter;
            this.circumference = 2 * MathsConstants.pi * this.radius;
            this.area = MathsConstants.pi * this.radius * this.radius;
        }
        else if (circumference) {
            this.radius = circumference / MathsConstants.pi / 2;
            this.diameter = this.radius * 2;
            this.circumference = circumference;
            this.area = MathsConstants.pi * this.radius * this.radius;
        }
        else if (area) {
            this.radius = Math.sqrt(area / MathsConstants.pi);
            this.diameter = this.radius * 2;
            this.circumference = 2 * MathsConstants.pi * this.radius;
            this.area = area;
        }
        else {
            throw new Error('ValueError: At least one of following: Radius, Diameter, Circumference, or Area must be specified');
        }
    }
}

/**
 * Class to create and manipulate Matrices
 */
class Matrix {
    /**
     * Creates a new matrix
     *
     * @param {Array.<Array.<number>>} values - The values of the matrix
     */
    constructor(values) {
        this.rows = values.length;
        this.columns = values[0].length;
        this.values = values;
    }
    /**
     * Calculate and return the determinant of the matrix.
     *
     * @return {number} The determinant of the matrix.
     */
    calculateDeterminant() {
        // Calculate and return the determinant of the matrix
        if (this.rows === 2 && this.columns === 2) {
            const [[a, b], [c, d]] = this.values;
            return a * d - b * c;
        }
        else {
            console.log('Determinant calculation not implemented for matrices larger than 2x2.');
            return 0;
        }
    }
    /**
     * Concatenate two matrices horizontally.
     *
     * @param {Matrix} matrix2 - The matrix to be concatenated.
     * @return {Matrix} A new matrix that is the concatenation of this matrix and matrix2.
     */
    concatMatrix(matrix2) {
        // Concatenate two matrices horizontally
        const result = [];
        for (let i = 0; i < this.values.length; i++) {
            result.push(this.values[i].concat(matrix2[i]));
        }
        return new Matrix(result);
    }
    /**
     * Returns the inverse values of the matrix.
     *
     * @return {Matrix} The matrix with the inverse values.
     */
    getInverseValues() {
        const numRows = this.rows;
        const numCols = this.columns;
        const result = [];
        for (let i = 0; i < numRows; i++) {
            const row = [];
            for (let j = numCols / 2; j < numCols; j++) {
                row.push(this.values[i][j]);
            }
            result.push(row);
        }
        return new Matrix(result);
    }
    /**
     * Apply Gaussian elimination to the matrix and return the reduced row echelon form.
     *
     * @return {Matrix} The matrix in reduced row echelon form.
     */
    applyGaussianElimination() {
        // Apply Gaussian elimination to the matrix and return the reduced row echelon form
        const numRows = this.rows;
        const numCols = this.columns;
        const result = this.values.map((row) => [...row]); // Create a copy of the matrix
        let lead = 0;
        for (let r = 0; r < numRows; r++) {
            if (numCols <= lead) {
                break;
            }
            let i = r;
            while (result[i][lead] === 0) {
                i++;
                if (numRows === i) {
                    i = r;
                    lead++;
                    if (numCols === lead) {
                        break;
                    }
                }
            }
            if (numCols === lead) {
                break;
            }
            [result[i], result[r]] = [result[r], result[i]];
            const lv = result[r][lead];
            for (let j = 0; j < numCols; j++) {
                result[r][j] /= lv;
            }
            for (let i = 0; i < numRows; i++) {
                if (i !== r) {
                    const lv2 = result[i][lead];
                    for (let j = 0; j < numCols; j++) {
                        result[i][j] -= lv2 * result[r][j];
                    }
                }
            }
            lead++;
        }
        return new Matrix(result);
    }
    /**
     * Inverts the matrix.
     *
     * @return {Matrix | null} The inverted matrix, or null if it is not possible to invert.
     */
    invert() {
        // Check if the matrix is square (has equal rows and columns)
        if (this.rows !== this.columns) {
            console.log('Cannot invert a non-square matrix.');
            return null;
        }
        // Calculate the determinant of the matrix
        const determinant = this.calculateDeterminant();
        if (determinant === 0) {
            console.log('Matrix is not invertible (determinant is zero).');
            return null;
        }
        // Create an identity matrix of the same size
        const identityMatrix = Matrix.eye(this.columns);
        // Apply Gaussian elimination to find the inverse
        const augmentedMatrix = this.concatMatrix(identityMatrix);
        const reducedRowEchelonForm = augmentedMatrix.applyGaussianElimination();
        const inverseValues = reducedRowEchelonForm.getInverseValues();
        // Create and return the inverted matrix
        return inverseValues;
    }
    /**
     * Calculates the product of two matrices.
     * @param {Matrix} other - The matrix to multiply with.
     * @return {Matrix} A new matrix that is the product of this matrix and other.
     * @throws {Error} If the number of columns of this matrix does not match the number of rows of the other matrix.
     */
    multiply(other) {
        const numRowsA = this.values.length;
        const numColsA = this.values[0].length;
        const numRowsB = other.values.length;
        const numColsB = other.values[0].length;
        if (numColsA !== numRowsB) {
            throw new Error('Matrices cannot be multiplied');
        }
        const result = [];
        for (let i = 0; i < numRowsA; i++) {
            result[i] = [];
            for (let j = 0; j < numColsB; j++) {
                let sum = 0;
                for (let k = 0; k < numColsA; k++) {
                    sum += this.values[i][k] * other.values[k][j];
                }
                result[i][j] = sum;
            }
        }
        return new Matrix(result);
    }
    /**
     * Adds the values of two matrices together.
     * @param {Matrix} other - The matrix to add to this one.
     * @return {Matrix} A new matrix with the added values.
     * @throws {Error} If matrices do not have the same number of rows and columns.
     */
    add(other) {
        const numRowsA = this.values.length;
        const numColsA = this.values[0].length;
        const numRowsB = other.values.length;
        const numColsB = other.values[0].length;
        if (numRowsA !== numRowsB || numColsA !== numColsB) {
            throw new Error('Matrices must have same dimensions to be added');
        }
        const result = [];
        for (let i = 0; i < numRowsA; i++) {
            result[i] = [];
            for (let j = 0; j < numColsA; j++) {
                result[i][j] = this.values[i][j] + other.values[i][j];
            }
        }
        return new Matrix(result);
    }
    /**
     * Divides this matrix by another one element-wise and returns the result as a new matrix.
     * @param {Matrix} other - the matrix to divide by
     * @throws {Error} When matrices do not have the same dimensions or when dividing by 0
     * @return {Matrix} A new matrix that is the result of the element-wise division
     */
    divide(other) {
        const numRowsA = this.values.length;
        const numColsA = this.values[0].length;
        const numRowsB = other.values.length;
        const numColsB = other.values[0].length;
        if (numRowsA !== numRowsB || numColsA !== numColsB) {
            throw new Error('Matrices must have same dimensions to be divided');
        }
        const result = [];
        for (let i = 0; i < numRowsA; i++) {
            result[i] = [];
            for (let j = 0; j < numColsA; j++) {
                if (other[i][j] === 0) {
                    throw new Error('Cannot divide by zero');
                }
                result[i][j] = this.values[i][j] / other.values[i][j];
            }
        }
        return new Matrix(result);
    }
    /**
     * Subtract two matrices of the same dimensions and return the result.
     * @param {Matrix} other - the matrix to subtract from this one
     * @return {Matrix} a new matrix that is the result of the subtraction
     * @throws {Error} if matrices do not have the same dimensions
     */
    subtract(other) {
        const numRowsA = this.values.length;
        const numColsA = this.values[0].length;
        const numRowsB = other.values.length;
        const numColsB = other.values[0].length;
        if (numRowsA !== numRowsB || numColsA !== numColsB) {
            throw new Error('Matrices must have same dimensions to be subtracted');
        }
        const result = [];
        for (let i = 0; i < numRowsA; i++) {
            result[i] = [];
            for (let j = 0; j < numColsA; j++) {
                result[i][j] = this.values[i][j] - other.values[i][j];
            }
        }
        return new Matrix(result);
    }
    /**
     * Multiplies the matrix by a scalar.
     * @param {number} scalar - the scalar to multiply with.
     * @return {Matrix} a new Matrix object that is the result of the scalar multiplication.
     */
    multiplyScalar(scalar) {
        const numRows = this.values.length;
        const numCols = this.values[0].length;
        const result = [];
        for (let i = 0; i < numRows; i++) {
            result[i] = [];
            for (let j = 0; j < numCols; j++) {
                result[i][j] = this.values[i][j] * scalar;
            }
        }
        return new Matrix(result);
    }
    /**
     * Divides every element in the matrix by a scalar.
     * @param {number} scalar - the scalar to divide by
     * @return {Matrix} a new matrix with the results of the division
     * @throws {Error} if scalar is zero
     */
    divideScalar(scalar) {
        if (scalar === 0) {
            throw new Error('Cannot divide by zero');
        }
        const numRows = this.values.length;
        const numCols = this.values[0].length;
        const result = [];
        for (let i = 0; i < numRows; i++) {
            result[i] = [];
            for (let j = 0; j < numCols; j++) {
                result[i][j] = this.values[i][j] / scalar;
            }
        }
        return new Matrix(result);
    }
    /**
     * Performs eigenvalue decomposition on a square matrix.
     *
     * @return {object} An object containing the eigenvalues and eigenvectors.
     */
    eigenvalueDecomposition() {
        // Check if the matrix is square
        if (this.rows !== this.columns) {
            throw new Error('Eigenvalue decomposition can only be performed on square matrices.');
        }
        // Create an initial identity matrix for eigenvectors
        let eigenvectors = Matrix.eye(this.rows);
        // Create a copy of the matrix for calculations
        let A = new Matrix(this.values);
        // Set the maximum number of iterations
        const maxIterations = 100;
        // Perform the QR algorithm
        for (let i = 0; i < maxIterations; i++) {
            // Compute the QR decomposition of the matrix
            const { Q, R } = A.qrDecomposition();
            // Update the matrix A with the new value of RQ
            A = R.multiply(Q);
            // Update the eigenvectors by multiplying with Q
            eigenvectors = eigenvectors.multiply(Q);
            // Check if the matrix A is almost diagonal
            if (A.isDiagonal()) {
                break;
            }
        }
        // Extract the diagonal elements as eigenvalues
        const eigenvalues = A.getDiagonal();
        // Normalize the eigenvectors
        eigenvectors = eigenvectors.normalizeColumns();
        // Return the eigenvalues and eigenvectors
        return {
            eigenvalues: eigenvalues,
            eigenvectors: eigenvectors,
        };
    }
    /**
     * Create an identity matrix of the specified size
     *
     * @param {number} size - The size of the identity matrix
     * @returns {Matrix} - The identity matrix
     */
    static eye(size) {
        const values = [];
        for (let i = 0; i < size; i++) {
            const row = new Array(size).fill(0);
            row[i] = 1;
            values.push(row);
        }
        return new Matrix(values);
    }
    /**
     * Check if the matrix is diagonal (all off-diagonal elements are close to zero)
     *
     * @returns {boolean} - True if the matrix is diagonal, false otherwise
     */
    isDiagonal() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                if (i !== j && Math.abs(this.values[i][j]) > 1e-10) {
                    return false;
                }
            }
        }
        return true;
    }
    /**
     * Get the diagonal elements of the matrix
     *
     * @returns {number[]} - Array of diagonal elements
     */
    getDiagonal() {
        if (this.rows !== this.columns) {
            throw new Error('Diagonal elements can only be obtained from a square matrix.');
        }
        const diagonal = [];
        for (let i = 0; i < this.rows; i++) {
            diagonal.push(this.values[i][i]);
        }
        return diagonal;
    }
    /**
     * Normalize the columns of the matrix
     *
     * @returns {Matrix} - The normalized matrix
     */
    normalizeColumns() {
        // Create a copy of the matrix
        const normalizedMatrix = new Matrix(this.values);
        // Iterate over each column
        for (let col = 0; col < this.columns; col++) {
            // Compute the column norm
            let norm = 0;
            for (let row = 0; row < this.rows; row++) {
                norm += Math.pow(this.values[row][col], 2);
            }
            norm = Math.sqrt(norm);
            // Normalize the column elements
            for (let row = 0; row < this.rows; row++) {
                normalizedMatrix.values[row][col] /= norm;
            }
        }
        return normalizedMatrix;
    }
    /**
     * Perform QR decomposition of the matrix
     *
     * @returns {Object} - Object containing orthogonal matrix Q and upper triangular matrix R
     */
    qrDecomposition() {
        if (this.rows < this.columns) {
            throw new Error('QR decomposition requires a matrix with more rows than columns.');
        }
        const A = new Matrix(this.values);
        const Q = Matrix.zeros(this.rows, this.columns);
        const R = Matrix.zeros(this.columns, this.columns);
        for (let j = 0; j < this.columns; j++) {
            let v = A.getColumn(j);
            for (let i = 0; i < j; i++) {
                const q = Q.getColumn(i);
                const r = q.transpose().multiply(v);
                R.set(i, j, r.values[0][0]);
                v = v.subtract(q.multiply(r));
            }
            const norm = v.norm();
            R.set(j, j, norm);
            Q.setColumn(j, v.divideScalar(norm));
        }
        return { Q, R };
    }
    /**
     * Calculates the norm of the matrix.
     *
     * @return {number} The norm of the matrix.
     */
    norm() {
        let sum = 0;
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                sum += this.values[i][j] * this.values[i][j];
            }
        }
        return Math.sqrt(sum);
    }
    /**
     * Creates a matrix filled with zeros.
     *
     * @param {number} rows - The number of rows in the matrix.
     * @param {number} columns - The number of columns in the matrix.
     * @return {Matrix} The matrix filled with zeros.
     */
    static zeros(rows, columns) {
        const values = new Array(rows)
            .fill(0)
            .map(() => new Array(columns).fill(0));
        return new Matrix(values);
    }
    /**
     * Gets a column from the matrix.
     *
     * @param {number} columnIndex - The index of the column to retrieve.
     * @return {Matrix} A new Matrix containing the column values.
     */
    getColumn(columnIndex) {
        const columnValues = this.values.map((row) => [row[columnIndex]]);
        return new Matrix(columnValues);
    }
    /**
     * Set the values of a specific column in the matrix.
     *
     * @param {number} columnIndex - The index of the column to set.
     * @param {Matrix} column - The column values to set.
     * @return {void} This function does not return a value.
     */
    setColumn(columnIndex, column) {
        if (column.rows !== this.rows || column.columns !== 1) {
            throw new Error('Invalid column dimensions.');
        }
        for (let i = 0; i < this.rows; i++) {
            this.values[i][columnIndex] = column.values[i][0];
        }
    }
    /**
     * Set the value of a specific cell in the matrix.
     *
     * @param {number} row - The row index of the cell.
     * @param {number} column - The column index of the cell.
     * @param {number} value - The value to set in the cell.
     * @return {void} This function does not return a value.
     */
    set(row, column, value) {
        this.values[row][column] = value;
    }
    /**
     * Transposes the matrix.
     *
     * @return {Matrix} The transposed matrix.
     */
    transpose() {
        const resultValues = new Array(this.columns)
            .fill(0)
            .map(() => new Array(this.rows).fill(0));
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                resultValues[j][i] = this.values[i][j];
            }
        }
        return new Matrix(resultValues);
    }
}

/**
 * Calculates the sum of all numbers and fraction inputs.
 *
 * @param {Array.<number | {numerator: number, denominator: number}>} inputs - An array of OperationsInput objects
 * @return {number} The sum of all numbers and fractions
 */
function add(inputs) {
    let total;
    for (const input of inputs) {
        if (typeof input === 'number') {
            total += input;
        }
        else if (typeof input === 'object' &&
            'numerator' in input &&
            'denominator' in input) {
            total += input.numerator / input.denominator;
        }
    }
    return total;
}
/**
 * Subtracts all the numbers and fractions in the given array of operations.
 *
 * @param {Array.<number | {numerator: number, denominator: number}>} inputs - An array of numbers and fractions to subtract
 * @return {number} The result of subtracting all the inputs
 */
function subtract(inputs) {
    let total = null;
    for (const input of inputs) {
        if (typeof input === 'number') {
            if (input === inputs[0] && total === null) {
                total = input;
            }
            else {
                total -= input;
            }
        }
        else if (typeof input === 'object' &&
            'numerator' in input &&
            'denominator' in input) {
            if (input === inputs[0] && total === null) {
                total = input.numerator / input.denominator;
            }
            else {
                total -= input.numerator / input.denominator;
            }
        }
    }
    return total;
}
/**
 * Multiplies a list of numbers and/or fractions.
 *
 * @param {Array.<number | {numerator: number, denominator: number}>} inputs - An array of numbers and/or fractions to multiply
 * @return {number} The result of multiplying all inputs together
 */
function multiply(inputs) {
    let total = null;
    for (const input of inputs) {
        if (typeof input === 'number') {
            if (input === inputs[0] && total === null) {
                total = input;
            }
            else {
                total *= input;
            }
        }
        else if (typeof input === 'object' &&
            'numerator' in input &&
            'denominator' in input) {
            if (input === inputs[0] && total === null) {
                total = input.numerator / input.denominator;
            }
            else {
                total *= input.numerator / input.denominator;
            }
        }
    }
    return total;
}
/**
 * Divides a list of numbers and/or fractions and returns the result.
 *
 * @param {Array.<number | {numerator: number, denominator: number}>} inputs - An array of numbers and/or objects with a numerator and denominator
 * @return {number} - The result of dividing all the numbers/fractions in the input array
 */
function divide(inputs) {
    let total = null;
    for (const input of inputs) {
        if (typeof input === 'number') {
            if (input === inputs[0] && total === null) {
                total = input;
            }
            else {
                total /= input;
            }
        }
        else if (typeof input === 'object' &&
            'numerator' in input &&
            'denominator' in input) {
            if (input === inputs[0] && total === null) {
                total = input.numerator / input.denominator;
            }
            else {
                total /= input.numerator / input.denominator;
            }
        }
    }
    return total;
}
/**
 * Returns the absolute value of a number.
 *
 * @param {number} x - The number to get the absolute value o
 * @return {number} The absolute value of the input number.
 */
function Absolute(x) {
    if (x < 0) {
        return -x;
    }
    return x;
}
/**
 * Calculates the factorial of a given number.
 *
 * @param {number} x - The number to calculate the factorial of
 * @return {number} The factorial of the given number
 */
function Factorial(x) {
    let result;
    for (let i = 1; i <= x; i++) {
        result *= i;
    }
    return result;
}

class physicsFormulae {
}

/**
 * @typedef {string} TemperatureType
 * @typedef {string} LengthType
 * @typedef {string} AngleType
 * @typedef {string} MassType
 * @typedef {string} VolumeType
 * @typedef {string} EnergyType
 * @typedef {string} SpeedType
 * @typedef {string} TimeType
 * @typedef {string} AreaType
 * @typedef {string} PressureType
 */
/**
 * Enum for length units
 * @readonly
 * @enum
 */
const lengthUnits = {
    Picometers: 'pm',
    Nanometers: 'nm',
    Micrometers: 'μm',
    Millimeters: 'mm',
    Centimeters: 'cm',
    Decimeters: 'dm',
    Meters: 'm',
    Hectometers: 'hm',
    Kilometers: 'km',
    Inches: 'in',
    Feet: 'ft',
    Yards: 'yd',
    Miles: 'mi',
    NauticalMiles: 'nmi',
    AstronomicalUnit: 'AU',
    Parsec: 'pc',
    Light_Years: 'LY',
    Fathoms: 'ftm',
    Furlongs: 'fur',
};
/**
 * Enum for energy units
 * @readonly
 * @enum
 */
const energyUnits = {
    Joules: 'J',
    Electronvolt: 'eV',
    Kiloelectronvolts: 'KeV',
    Megaelectronvolts: 'MeV',
    Gigaelectronvolts: 'GeV',
    Teraelectronvolts: 'TeV',
    Watts: 'W',
    WattHours: 'Wh',
    Kilowatts: 'kW',
    KilowattHours: 'kWh',
    Calories: 'cal',
    Kilocalories: 'kcal',
    BritishThermalUnits: 'BTU',
    USTherms: 'UST',
    Footpounds: 'ft-lb',
};
/**
 * Enum for volume units
 * @readonly
 * @enum
 */
const volumeUnits = {
    Liters: 'L',
    Milliliters: 'mL',
    CubicMeters: 'm³',
    CubicCentimeters: 'cm³',
    CubicMillimeters: 'mm³',
    CubicInches: 'in³',
    CubicFeet: 'ft³',
    USLiquidGallons: 'galUS',
    USLiquidQuarts: 'qtUS',
    USLiquidPints: 'ptUS',
    USLegalCups: 'cupUS',
    USTeaspoons: 'tspUS',
    USTablespoons: 'tbspUS',
    Fluid_Ounces: 'oz',
    ImperialGallons: 'galImp',
    ImperialQuarts: 'qtImp',
    ImperialPints: 'ptImp',
    ImperialCups: 'cupsImp',
    ImperialFluidOunces: 'ozImp',
    ImperialTeaspoons: 'tspImp',
    ImperialTablespoons: 'tbspImp',
};
/**
 * Enum for angle units
 * @readonly
 * @enum
 */
const angleUnits = {
    Arcminutes: "'",
    Arcseconds: '"',
    Degrees: '°',
    Radians: 'rad',
    Gradians: 'grad',
    Milliradians: 'mrad',
    Revolutions: 'rev',
    Quadrants: 'q',
    Sextants: 's',
    Signs: 'sgn',
    Octants: 'o',
};
/**
 * Enum for speed units
 * @readonly
 * @enum
 */
const speedUnits = {
    MetersPerSecond: 'm/s',
    FeetPerSecond: 'ft/s',
    MilesPerHour: 'mi/h',
    KilometersPerHour: 'km/h',
    Knots: 'kn',
};
/**
 * Enum for time units
 * @readonly
 * @enum
 */
const timeUnits = {
    Picoseconds: 'ps',
    Nanoseconds: 'ns',
    Microseconds: 'μs',
    Milliseconds: 'ms',
    Seconds: 's',
    Minutes: 'm',
    Hours: 'h',
    Days: 'd',
    Weeks: 'w',
    Fortnights: 'f',
};
/**
 * Enum for area units
 * @readonly
 * @enum
 */
const areaUnits = {
    SquareMeters: 'm²',
    SquareKilometers: 'km²',
    SquareInches: 'in²',
    SquareFeet: 'ft²',
    SquareYards: 'yd²',
    SquareMiles: 'mi²',
    Acres: 'acre',
    Hectares: 'ha',
};
/**
 * Enum for mass units
 * @readonly
 * @enum
 */
const massUnits = {
    Picograms: 'pg',
    Nanograms: 'ng',
    Micrograms: 'μg',
    Milligrams: 'mg',
    Grams: 'g',
    Kilograms: 'kg',
    MetricTonnes: 't',
    Carats: 'c',
    Long_Tons: 'Lt',
    Short_Tons: 'St',
    Ounces: 'oz',
    Pounds: 'lb',
    Stone: 'st',
    Earth_Masses: 'M⊕',
    Solar_Masses: 'M☉',
};
/**
 * Enum for temperature units
 * @readonly
 * @enum
 */
const temperatureUnits = {
    Celsius: '°C',
    Fahrenheit: '°F',
    Kelvin: 'K',
};
/**
 * Enum for pressure units
 * @readonly
 * @enum
 */
const pressureUnits = {
    Bars: 'bar',
    Millibars: 'mbar',
    Pascals: 'Pa',
    Hectopascals: 'hPa',
    Kilopascals: 'kPa',
    Pounds_per_Square_Inch: 'psi',
    Torr: 'Torr',
};
/**
 * Enum for energy measurements
 * @readonly
 * @enum {EnergyType}
 */
const energyEnum = {
    Joules: 'JOULES',
    Electronvolt: 'ELECTRONVOLT',
    Kiloelectronvolts: 'KILOELECTRONVOLTS',
    Megaelectronvolts: 'MEGAELECTRONVOLTS',
    Gigaelectronvolts: 'GIGAELECTRONVOLTS',
    Teraelectronvolts: 'TERAELECTRONVOLTS',
    Watts: 'WATTS',
    WattHours: 'WATT_HOURS',
    Kilowatts: 'KILOWATTS',
    KilowattHours: 'KILOWATT_HOURS',
    Calories: 'CALORIES',
    Kilocalories: 'KILOCALORIES',
    BritishThermalUnits: 'BRITISH_THERMAL_UNITS',
    US_Therms: 'US_THERMS',
    Foot_pounds: 'FOOT-POUNDS',
};
/**
 * Enum for volume measurements
 * @readonly
 * @enum {VolumeType}
 */
const volumeEnum = {
    Liters: 'LITERS',
    Milliliters: 'MILLILITERS',
    CubicMeters: 'CUBIC_METERS',
    CubicCentimeters: 'CUBIC_CENTIMETERS',
    CubicMillimeters: 'CUBIC_MILLIMETERS',
    CubicInches: 'CUBIC_INCHES',
    CubicFeet: 'CUBIC_FEET',
    USLiquidGallons: 'US_LIQUID_GALLONS',
    USLiquidQuarts: 'US_LIQUID_QUARTS',
    USLiquidPints: 'US_LIQUID_PINTS',
    USLegalCups: 'US_LEGAL_CUPS',
    USTeaspoons: 'US_TEASPOONS',
    USTablespoons: 'US_TABLESPOONS',
    FluidOunces: 'FLUID_OUNCES',
    ImperialGallons: 'IMPERIAL_GALLONS',
    ImperialQuarts: 'IMPERIAL_QUARTS',
    ImperialPints: 'IMPERIAL_PINTS',
    ImperialCups: 'IMPERIAL_CUPS',
    ImperialFluidOunces: 'IMPERIAL_FLUID_OUNCES',
    ImperialTeaspoons: 'IMPERIAL_TEASPOONS',
    ImperialTablespoons: 'IMPERIAL_TABLESPOONS',
};
/**
 * Enum for angle measurements
 * @readonly
 * @enum {AngleType}
 */
const angleEnum = {
    Arcminutes: 'ARCMINUTES',
    Arcseconds: 'ARCSECONDS',
    Degrees: 'DEGREES',
    Radians: 'RADIANS',
    Gradians: 'GRADIANS',
    Milliradians: 'MILLIRADIANS',
    Revolutions: 'REVOLUTIONS',
    Quadrants: 'QUADRANTS',
    Sextants: 'SEXTANTS',
    Signs: 'SIGNS',
    Octants: 'OCTANTS',
};
const lengthEnum = {
    Picometers: 'PICOMETERS',
    Nanometers: 'NANOMETERS',
    Micrometers: 'MICROMETERS',
    Millimeters: 'MILLIMETERS',
    Centimeters: 'CENTIMETERS',
    Decimeters: 'DECIMETERS',
    Meters: 'METERS',
    Hectometers: 'HECTOMETERS',
    Kilometers: 'KILOMETERS',
    AstronomicalUnit: 'ASTRONOMICAL_UNIT',
    Parsec: 'PARSEC',
    LightYears: 'LIGHT_YEARS',
    Inches: 'INCHES',
    Feet: 'FEET',
    Yards: 'YARDS',
    Miles: 'MILES',
    NauticalMiles: 'NAUTICAL_MILES',
    Fathoms: 'FATHOMS',
    Furlongs: 'FURLONGS',
};
/**
 * Enum for speed measurements
 * @readonly
 * @enum {SpeedType}
 */
const speedEnum = {
    MetersPerSecond: 'METERS_PER_SECOND',
    FeetPerSecond: 'FEET_PER_SECOND',
    MilesPerHour: 'MILES_PER_HOUR',
    KilometersPerHour: 'KILOMETERS_PER_HOUR',
    Knots: 'KNOTS',
};
/**
 * Enum for time measurements
 * @readonly
 * @enum {TimeType}
 */
const timeEnum = {
    Picoseconds: 'PICOSECONDS',
    Nanoseconds: 'NANOSECONDS',
    Microseconds: 'MICROSECONDS',
    Milliseconds: 'MILLISECONDS',
    Seconds: 'SECONDS',
    Minutes: 'MINUTES',
    Hours: 'HOURS',
    Days: 'DAYS',
    Weeks: 'WEEKS',
    Fortnights: 'FORTNIGHTS',
};
/**
 * Enum for area measurements
 * @readonly
 * @enum {AreaType}
 */
const areaEnum = {
    SquareMeters: 'SQUARE_METERS',
    SquareKilometers: 'SQUARE_KILOMETERS',
    SquareInches: 'SQUARE_INCHES',
    SquareFeet: 'SQUARE_FEET',
    SquareYards: 'SQUARE_YARDS',
    SquareMiles: 'SQUARE_MILES',
    Acres: 'ACRES',
    Hectares: 'HECTARES',
};
/**
 * Enum for mass measurements
 * @readonly
 * @enum {MassType}
 */
const massEnum = {
    Picograms: 'PICOGRAMS',
    Nanograms: 'NANOGRAMS',
    Micrograms: 'MICROGRAMS',
    Milligrams: 'MILLIGRAMS',
    Grams: 'GRAMS',
    Kilograms: 'KILOGRAMS',
    MetricTonnes: 'METRIC_TONNES',
    Carats: 'CARATS',
    Long_Tons: 'LONG_TONS',
    Short_Tons: 'SHORT_TONS',
    Ounces: 'OUNCES',
    Pounds: 'POUNDS',
    Stone: 'STONE',
    EarthMasses: 'EARTH_MASSES',
    SolarMasses: 'SOLAR_MASSES',
};
/**
 * Enum for temperature measurements
 * @readonly
 * @enum {TemperatureType}
 */
const temperatureEnum = {
    Celsius: 'CELSIUS',
    Fahrenheit: 'FAHRENHEIT',
    Kelvin: 'KELVIN',
};
/**
 * Enum for pressure measurements
 * @readonly
 * @enum {PressureType}
 */
const pressureEnum = {
    Bars: 'BARS',
    Millibars: 'MILLIBARS',
    Pascals: 'PASCALS',
    Hectopascals: 'HECTOPASCALS',
    Kilopascals: 'KILOPASCALS',
    PoundsPerSquareInch: 'POUNDS_PER_SQUARE_INCH',
    Torr: 'TORR',
};
/**
 * Class to convert between different units of measure
 */
class Conversions {
    /**
     * Converts an angle value from one unit to another.
     *
     * @param {number} value - The value to be converted
     * @param {AngleType | string} fromUnit - The current unit of the value. Must be a string from angleEnum
     * @param {AngleType | string} toUnit - The desired unit to convert the value to. Must be a string from angleEnum
     * @return {number} The converted angle value in the desired unit
     */
    static convertAngle(value, fromUnit, toUnit) {
        let degrees;
        switch (fromUnit) {
            case 'ARCMINUTES':
                degrees = value * (1 / 60);
                break;
            case 'ARCSECONDS':
                degrees = value * (1 / 3600);
                break;
            case 'DEGREES':
                degrees = value * 1;
                break;
            case 'RADIANS':
                degrees = value * (180 / MathsConstants.pi.value);
                break;
            case 'GRADIANS':
                degrees = value * 0.9;
                break;
            case 'MILLIRADIANS':
                degrees = value * (180 / (MathsConstants.pi.value * 1000));
                break;
            case 'REVOLUTIONS':
                degrees = value * 360;
                break;
            case 'QUADRANTS':
                degrees = value * 90;
                break;
            case 'SEXTANTS':
                degrees = value * 60;
                break;
            case 'SIGNS':
                degrees = value * 30;
                break;
            case 'OCTANTS':
                degrees = value * 45;
                break;
            default:
                throw new Error(`Unknown unit: ${fromUnit}`);
        }
        let output;
        switch (toUnit) {
            case 'ARCMINUTES':
                output = degrees / (1 / 60);
                break;
            case 'ARCSECONDS':
                output = degrees / (1 / 3600);
                break;
            case 'DEGREES':
                output = degrees / 1;
                break;
            case 'RADIANS':
                output = degrees / (180 / MathsConstants.pi.value);
                break;
            case 'GRADIANS':
                output = degrees / 0.9;
                break;
            case 'MILLIRADIANS':
                output = degrees / (180 / (MathsConstants.pi.value * 1000));
                break;
            case 'REVOLUTIONS':
                output = degrees / 360;
                break;
            case 'QUADRANTS':
                output = degrees / 90;
                break;
            case 'SEXTANTS':
                output = degrees / 60;
                break;
            case 'SIGNS':
                output = degrees / 30;
                break;
            case 'OCTANTS':
                output = degrees / 45;
                break;
            default:
                throw new Error(`Unknown unit: ${toUnit}`);
        }
        return output;
    }
    /**
     * Converts a length value from one unit to another.
     *
     * @param {number} value - The value to convert
     * @param {LengthType | string} fromUnit - The unit to convert from
     * @param {LengthType | string} toUnit - The unit to convert to
     * @return {number} The converted value
     */
    static convertLength(value, fromUnit, toUnit) {
        let meters;
        switch (fromUnit) {
            case 'PICOMETERS':
                meters = value * 1e-12;
                break;
            case 'NANOMETERS':
                meters = value * 1e-9;
                break;
            case 'MICROMETERS':
                meters = value * 1e-6;
                break;
            case 'MILLIMETERS':
                meters = value * 0.001;
                break;
            case 'CENTIMETERS':
                meters = value * 0.01;
                break;
            case 'DECIMETERS':
                meters = value * 0.1;
                break;
            case 'METERS':
                meters = value * 1;
                break;
            case 'HECTOMETERS':
                meters = value * 100;
                break;
            case 'KILOMETERS':
                meters = value * 1000;
                break;
            case 'ASTRONOMICAL_UNIT':
                meters = value * 149598550000;
                break;
            case 'PARSEC':
                meters = value * 30856776000000000;
                break;
            case 'LIGHT_YEARS':
                meters = value * 9460528405000000;
                break;
            case 'INCHES':
                meters = value * (1 / 39.370079);
                break;
            case 'FEET':
                meters = value * (1 / 3.28084);
                break;
            case 'YARDS':
                meters = value * (1 / 1.093613);
                break;
            case 'MILES':
                meters = value * 1609.344;
                break;
            case 'NAUTICAL_MILES':
                meters = value * 1852;
                break;
            case 'FATHOMS':
                meters = value * 1.8288;
                break;
            case 'FURLONGS':
                meters = value * 201.168;
                break;
            default:
                throw new Error(`Unknown unit: ${fromUnit}`);
        }
        let output;
        switch (toUnit) {
            case 'PICOMETERS':
                output = meters / 1e-12;
                break;
            case 'NANOMETERS':
                output = meters / 1e-9;
                break;
            case 'MICROMETERS':
                output = meters / 1e-6;
                break;
            case 'MILLIMETERS':
                output = meters / 0.001;
                break;
            case 'CENTIMETERS':
                output = meters / 0.01;
                break;
            case 'DECIMETERS':
                output = meters / 0.1;
                break;
            case 'METERS':
                output = meters / 1;
                break;
            case 'HECTOMETERS':
                output = meters / 100;
                break;
            case 'KILOMETERS':
                output = meters / 1000;
                break;
            case 'ASTRONOMICAL_UNIT':
                output = meters / 149598550000;
                break;
            case 'PARSEC':
                output = meters / 30856776000000000;
                break;
            case 'LIGHT_YEARS':
                output = meters / 9460528405000000;
                break;
            case 'INCHES':
                output = meters / (1 / 39.370079);
                break;
            case 'FEET':
                output = meters / (1 / 3.28084);
                break;
            case 'YARDS':
                output = meters / (1 / 1.093613);
                break;
            case 'MILES':
                output = meters / 1609.344;
                break;
            case 'NAUTICAL_MILES':
                output = meters / 1852;
                break;
            case 'FATHOMS':
                output = meters / 1.8288;
                break;
            case 'FURLONGS':
                output = meters / 201.168;
                break;
            default:
                throw new Error(`Unknown unit: ${toUnit}`);
        }
        return output;
    }
    /**
     * Converts a time value from one unit to another.
     *
     * @param {number} value - The value to convert
     * @param {TimeType | string} fromUnit - The unit of the input value
     * @param {TimeType | string} toUnit - The desired unit of the output value
     * @returns {number} - The converted value in the desired unit
     */
    static convertTime(value, fromUnit, toUnit) {
        let seconds;
        switch (fromUnit) {
            case 'PICOSECONDS':
                seconds = value * 1e-12;
                break;
            case 'NANOSECONDS':
                seconds = value * 1e-9;
                break;
            case 'MICROSECONDS':
                seconds = value * 1e-6;
                break;
            case 'MILLISECONDS':
                seconds = value * 0.001;
                break;
            case 'SECONDS':
                seconds = value * 1;
                break;
            case 'MINUTES':
                seconds = value * 60;
                break;
            case 'HOURS':
                seconds = value * 3600;
                break;
            case 'DAYS':
                seconds = value * 86400;
                break;
            case 'WEEKS':
                seconds = value * 604800;
                break;
            case 'FORTNIGHTS':
                seconds = value * 1209600;
                break;
            default:
                throw new Error(`Unknown unit: ${fromUnit}`);
        }
        let output;
        switch (toUnit) {
            case 'PICOSECONDS':
                output = seconds / 1e-12;
                break;
            case 'NANOSECONDS':
                output = seconds / 1e-9;
                break;
            case 'MICROSECONDS':
                output = seconds / 1e-6;
                break;
            case 'MILLISECONDS':
                output = seconds / 0.001;
                break;
            case 'SECONDS':
                output = seconds / 1;
                break;
            case 'MINUTES':
                output = seconds / 60;
                break;
            case 'HOURS':
                output = seconds / 3600;
                break;
            case 'DAYS':
                output = seconds / 86400;
                break;
            case 'WEEKS':
                output = seconds / 604800;
                break;
            case 'FORTNIGHTS':
                output = seconds / 1209600;
                break;
            default:
                throw new Error(`Unknown unit: ${toUnit}`);
        }
        return output;
    }
    /**
     * Converts a mass value from one unit to another.
     *
     * @param {number} value - The mass value to be converted
     * @param {MassType | string} fromUnit - The unit to convert from
     * @param {MassType | string} toUnit - The unit to convert to
     * @return {number} The converted mass value
     */
    static convertMass(value, fromUnit, toUnit) {
        let grams;
        switch (fromUnit) {
            case 'PICOGRAMS':
                grams = value * 1e-12;
                break;
            case 'NANOGRAMS':
                grams = value * 1e-9;
                break;
            case 'MICROGRAMS':
                grams = value * 1e-6;
                break;
            case 'MILLIGRAMS':
                grams = value * 0.001;
                break;
            case 'GRAMS':
                grams = value * 1;
                break;
            case 'KILOGRAMS':
                grams = value * 1000;
                break;
            case 'METRIC_TONNES':
                grams = value * 1000000;
                break;
            case 'CARATS':
                grams = value * 0.2;
                break;
            case 'LONG_TONS':
                grams = value * 1016046.9088;
                break;
            case 'SHORT_TONS':
                grams = value * 907184.74;
                break;
            case 'OUNCES':
                grams = value * 28.349523;
                break;
            case 'POUNDS':
                grams = value * 453.59237;
                break;
            case 'STONE':
                grams = value * 6350.29318;
                break;
            case 'EARTH_MASSES':
                grams = value * 5.98e27;
                break;
            case 'SOLAR_MASSES':
                grams = value * 1.9889999999999998e33;
                break;
            default:
                throw new Error(`Unknown unit: ${fromUnit}`);
        }
        let output;
        switch (toUnit) {
            case 'PICOGRAMS':
                output = grams / 1e-12;
                break;
            case 'NANOGRAMS':
                output = grams / 1e-9;
                break;
            case 'MICROGRAMS':
                output = grams / 1e-6;
                break;
            case 'MILLIGRAMS':
                output = grams / 0.001;
                break;
            case 'GRAMS':
                output = grams / 1;
                break;
            case 'KILOGRAMS':
                output = grams / 1000;
                break;
            case 'METRIC_TONNES':
                output = grams / 1000000;
                break;
            case 'CARATS':
                output = grams / 0.2;
                break;
            case 'LONG_TONS':
                output = grams / 1016046.9088;
                break;
            case 'SHORT_TONS':
                output = grams / 907184.74;
                break;
            case 'OUNCES':
                output = grams / 28.349523;
                break;
            case 'POUNDS':
                output = grams / 453.59237;
                break;
            case 'STONE':
                output = grams / 6350.29318;
                break;
            case 'EARTH_MASSES':
                output = grams / 5.98e27;
                break;
            case 'SOLAR_MASSES':
                output = grams / 1.9889999999999998e33;
                break;
            default:
                throw new Error(`Unknown unit: ${toUnit}`);
        }
        return output;
    }
    /**
     * Convert an energy value from one unit to another.
     *
     * @param {number} value - the energy value to convert
     * @param {EnergyType | string} fromUnit - the unit of the input value
     * @param {EnergyType | string} toUnit - the desired output unit
     * @return {number} - the converted energy value
     */
    static convertEnergy(value, fromUnit, toUnit) {
        let joules;
        switch (fromUnit) {
            case 'JOULES':
                joules = value * 1;
                break;
            case 'ELECTRONVOLT':
                joules = value * 1.6022e-19;
                break;
            case 'KILOELECTRONVOLTS':
                joules = value * 1.6022000000000002e-16;
                break;
            case 'MEGAELECTRONVOLTS':
                joules = value * 1.6022e-13;
                break;
            case 'GIGAELECTRONVOLTS':
                joules = value * 1.6022000000000002e-10;
                break;
            case 'TERAELECTRONVOLTS':
                joules = value * 1.6022000000000001e-7;
                break;
            case 'WATTS':
                joules = value * 1;
                break;
            case 'WATT_HOURS':
                joules = value * 3600;
                break;
            case 'KILOWATTS':
                joules = value * 1000;
                break;
            case 'KILOWATT_HOURS':
                joules = value * 3600000;
                break;
            case 'CALORIES':
                joules = value * 4.184;
                break;
            case 'KILOCALORIES':
                joules = value * 4184;
                break;
            case 'BRITISH_THERMAL_UNITS':
                joules = value * 1055.06;
                break;
            case 'US_THERMS':
                joules = value * 105500000.0;
                break;
            case 'FOOT-POUNDS':
                joules = value * 1.35582;
                break;
            default:
                throw new Error(`Unknown unit: ${fromUnit}`);
        }
        let output;
        switch (toUnit) {
            case 'JOULES':
                output = joules / 1;
                break;
            case 'ELECTRONVOLT':
                output = joules / 1.6022e-19;
                break;
            case 'KILOELECTRONVOLTS':
                output = joules / 1.6022000000000002e-16;
                break;
            case 'MEGAELECTRONVOLTS':
                output = joules / 1.6022e-13;
                break;
            case 'GIGAELECTRONVOLTS':
                output = joules / 1.6022000000000002e-10;
                break;
            case 'TERAELECTRONVOLTS':
                output = joules / 1.6022000000000001e-7;
                break;
            case 'WATTS':
                output = joules / 1;
                break;
            case 'WATT_HOURS':
                output = joules / 3600;
                break;
            case 'KILOWATTS':
                output = joules / 1000;
                break;
            case 'KILOWATT_HOURS':
                output = joules / 3600000;
                break;
            case 'CALORIES':
                output = joules / 4.184;
                break;
            case 'KILOCALORIES':
                output = joules / 4184;
                break;
            case 'BRITISH_THERMAL_UNITS':
                output = joules / 1055.06;
                break;
            case 'US_THERMS':
                output = joules / 105500000.0;
                break;
            case 'FOOT-POUNDS':
                output = joules / 1.35582;
                break;
            default:
                throw new Error(`Unknown unit: ${toUnit}`);
        }
        return output;
    }
    /**
     * Converts a temperature value from one unit to another.
     *
     * @param {number} value - The temperature value to be converted
     * @param {TemperatureType | string} fromUnit - The unit of the input temperature value
     * @param {TemperatureType | string} toUnit - The unit of the output temperature value
     * @return {number} The converted temperature value in the desired unit
     */
    static convertTemperature(value, fromUnit, toUnit) {
        let kelvin;
        switch (fromUnit) {
            case 'CELSIUS':
                kelvin = value + 273.15;
                break;
            case 'FAHRENHEIT':
                kelvin = ((value - 32) * 5) / 9 + 273.15;
                break;
            case 'KELVIN':
                kelvin = value * 1;
                break;
            default:
                throw new Error(`Unknown unit: ${fromUnit}`);
        }
        let output;
        switch (toUnit) {
            case 'CELSIUS':
                output = kelvin - 273.15;
                break;
            case 'FAHRENHEIT':
                output = ((kelvin - 273.15) * 9) / 5 + 32;
                break;
            case 'KELVIN':
                output = kelvin / 1;
                break;
            default:
                throw new Error(`Unknown unit: ${toUnit}`);
        }
        return output;
    }
    /**
     * Converts a speed value from one unit to another.
     *
     * @param {number} value - the value to be converted
     * @param {SpeedType | string} fromUnit - the unit to convert from
     * @param {SpeedType | string} toUnit - the unit to convert to
     * @return {number} - the converted value
     */
    static convertSpeed(value, fromUnit, toUnit) {
        let mps;
        switch (fromUnit) {
            case 'METERS_PER_SECOND':
                mps = value * 1;
                break;
            case 'FEET_PER_SECOND':
                mps = value * 0.3048;
                break;
            case 'MILES_PER_HOUR':
                mps = value * 0.44704;
                break;
            case 'KILOMETERS_PER_HOUR':
                mps = value * 0.277778;
                break;
            case 'KNOTS':
                mps = value * 0.514444;
                break;
            default:
                throw new Error(`Unknown unit: ${fromUnit}`);
        }
        let output;
        switch (toUnit) {
            case 'METERS_PER_SECOND':
                output = mps / 1;
                break;
            case 'FEET_PER_SECOND':
                output = mps / 0.3048;
                break;
            case 'MILES_PER_HOUR':
                output = mps / 0.44704;
                break;
            case 'KILOMETERS_PER_HOUR':
                output = mps / 0.277778;
                break;
            case 'KNOTS':
                output = mps / 0.514444;
                break;
            default:
                throw new Error(`Unknown unit: ${toUnit}`);
        }
        return output;
    }
    /**
     * Converts a pressure value from one unit to another.
     *
     * @param {number} value - The pressure value to convert
     * @param {PressureType | string} fromUnit - The unit to convert from
     * @param {PressureType | string} toUnit - The unit to convert to
     * @return {number} The converted pressure value
     */
    static convertPressure(value, fromUnit, toUnit) {
        let bars;
        switch (fromUnit) {
            case 'BARS':
                bars = value * 1;
                break;
            case 'MILLIBARS':
                bars = value * 0.001;
                break;
            case 'PASCALS':
                bars = value * 1e-5;
                break;
            case 'KILOPASCALS':
                bars = value * 0.01;
                break;
            case 'POUNDS_PER_SQUARE_INCH':
                bars = value * 0.0689476;
                break;
            case 'TORR':
                bars = value * 0.00133322;
                break;
            default:
                throw new Error(`Unknown unit: ${fromUnit}`);
        }
        let output;
        switch (toUnit) {
            case 'BARS':
                output = bars / 1;
                break;
            case 'MILLIBARS':
                output = bars / 0.001;
                break;
            case 'PASCALS':
                output = bars / 1e-5;
                break;
            case 'KILOPASCALS':
                output = bars / 0.01;
                break;
            case 'POUNDS_PER_SQUARE_INCH':
                output = bars / 0.0689476;
                break;
            case 'TORR':
                output = bars / 0.00133322;
                break;
            default:
                throw new Error(`Unknown unit: ${toUnit}`);
        }
        return output;
    }
    /**
     * Converts an area measurement from one unit to another.
     *
     * @param {number} value - The numerical value of the area measurement in the fromUnit
     * @param {AreaType | string} fromUnit - The unit to convert from
     * @param {AreaType | string} toUnit - The unit to convert to
     * @return {number} - The numerical value of the converted area measurement in the toUnit
     */
    static convertArea(value, fromUnit, toUnit) {
        let sqrm;
        switch (fromUnit) {
            case 'SQUARE_METERS':
                sqrm = value * 1;
                break;
            case 'SQUARE_KILOMETERS':
                sqrm = value * 1000000;
                break;
            case 'SQUARE_INCHES':
                sqrm = value * (1 / 1550);
                break;
            case 'SQUARE_FEET':
                sqrm = value * (1 / 10.764);
                break;
            case 'SQUARE_YARDS':
                sqrm = value * (1 / 1.196);
                break;
            case 'SQUARE_MILES':
                sqrm = value * 2590000.0;
                break;
            case 'ACRES':
                sqrm = value * 4046.86;
                break;
            case 'HECTARES':
                sqrm = value * 10000;
                break;
            default:
                throw new Error(`Unknown unit: ${fromUnit}`);
        }
        let output;
        switch (toUnit) {
            case 'SQUARE_METERS':
                output = sqrm / 1;
                break;
            case 'SQUARE_KILOMETERS':
                output = sqrm / 1000000;
                break;
            case 'SQUARE_INCHES':
                output = sqrm / (1 / 1550);
                break;
            case 'SQUARE_FEET':
                output = sqrm / (1 / 10.764);
                break;
            case 'SQUARE_YARDS':
                output = sqrm / (1 / 1.196);
                break;
            case 'SQUARE_MILES':
                output = sqrm / 2590000.0;
                break;
            case 'ACRES':
                output = sqrm / 4046.86;
                break;
            case 'HECTARES':
                output = sqrm / 10000;
                break;
            default:
                throw new Error(`Unknown unit: ${toUnit}`);
        }
        return output;
    }
    /**
     * Converts an volume measurement from one unit to another.
     *
     * @param {number} value - The numerical value of the volume measurement in the fromUnit
     * @param {VolumeType | string} fromUnit - The unit to convert from
     * @param {VolumeType | string} toUnit - The unit to convert to
     * @return {number} - The numerical value of the converted volume measurement in the toUnit
     */
    static convertVolume(value, fromUnit, toUnit) {
        let liters;
        switch (fromUnit) {
            case 'LITERS':
                liters = value * 1;
                break;
            case 'MILLILITERS':
                liters = value * 0.001;
                break;
            case 'CUBIC_METERS':
                liters = value * 1000;
                break;
            case 'CUBIC_CENTIMETERS':
                liters = value * 0.001;
                break;
            case 'CUBIC_MILLIMETERS':
                liters = value * 1e-5;
                break;
            case 'CUBIC_INCHES':
                liters = value * 0.0163871;
                break;
            case 'CUBIC_FEET':
                liters = value * 28.3168;
                break;
            case 'US_LIQUID_GALLONS':
                liters = value * 3.78541;
                break;
            case 'US_LIQUID_QUARTS':
                liters = value * 0.946353;
                break;
            case 'US_LIQUID_PINTS':
                liters = value * 0.473176;
                break;
            case 'US_LEGAL_CUPS':
                liters = value * 0.24;
                break;
            case 'US_TEASPOONS':
                liters = value * 0.00492892;
                break;
            case 'US_TABLESPOONS':
                liters = value * 0.0147868;
                break;
            case 'FLUID_OUNCES':
                liters = value * 0.0295735;
                break;
            case 'IMPERIAL_GALLONS':
                liters = value * 4.54609;
                break;
            case 'IMPERIAL_QUARTS':
                liters = value * 1.13652;
                break;
            case 'IMPERIAL_PINTS':
                liters = value * 0.568261;
                break;
            case 'IMPERIAL_CUPS':
                liters = value * 0.284131;
                break;
            case 'IMPERIAL_FLUID_OUNCES':
                liters = value * 0.0284131;
                break;
            case 'IMPERIAL_TEASPOONS':
                liters = value * 0.00591939;
                break;
            case 'IMPERIAL_TABLESPOONS':
                liters = value * 0.0177582;
                break;
            default:
                throw new Error(`Unknown unit: ${fromUnit}`);
        }
        let output;
        switch (toUnit) {
            case 'LITERS':
                output = liters / 1;
                break;
            case 'MILLILITERS':
                output = liters / 0.001;
                break;
            case 'CUBIC_METERS':
                output = liters / 1000;
                break;
            case 'CUBIC_CENTIMETERS':
                output = liters / 0.001;
                break;
            case 'CUBIC_MILLIMETERS':
                output = liters / 1e-5;
                break;
            case 'CUBIC_INCHES':
                output = liters / 0.0163871;
                break;
            case 'CUBIC_FEET':
                output = liters / 28.3168;
                break;
            case 'US_LIQUID_GALLONS':
                output = liters / 3.78541;
                break;
            case 'US_LIQUID_QUARTS':
                output = liters / 0.946353;
                break;
            case 'US_LIQUID_PINTS':
                output = liters / 0.473176;
                break;
            case 'US_LEGAL_CUPS':
                output = liters / 0.24;
                break;
            case 'US_TEASPOONS':
                output = liters / 0.00492892;
                break;
            case 'US_TABLESPOONS':
                output = liters / 0.0147868;
                break;
            case 'FLUID_OUNCES':
                output = liters / 0.0295735;
                break;
            case 'IMPERIAL_GALLONS':
                output = liters / 4.54609;
                break;
            case 'IMPERIAL_QUARTS':
                output = liters / 1.13652;
                break;
            case 'IMPERIAL_PINTS':
                output = liters / 0.568261;
                break;
            case 'IMPERIAL_CUPS':
                output = liters / 0.284131;
                break;
            case 'IMPERIAL_FLUID_OUNCES':
                output = liters / 0.0284131;
                break;
            case 'IMPERIAL_TEASPOONS':
                output = liters / 0.00591939;
                break;
            case 'IMPERIAL_TABLESPOONS':
                output = liters / 0.0177582;
                break;
            default:
                throw new Error(`Unknown unit: ${toUnit}`);
        }
        return output;
    }
}

/**
 * Class to find averages of an array of numbers
 */
class StatisticalOperations {
    /**
     * Finds the mean of an array of numbers
     * @param {Array.<number>} - The array of numbers to find the mean of
     * @return {number} - The mean of the inputted numbers
     */
    static mean(input) {
        let output = add(input);
        return (output /= input.length);
    }
    /**
     * Finds the median of an array of numbers
     * @param {Array.<number>} - The array of numbers to find the median of
     * @return {number} - The median of the inputted numbers
     */
    static median(input) {
        let length = input.length;
        length = length / 2;
        if (length === Math.round(length))
            return input[length];
        return input[length - 0.5] / input[length + 0.5];
    }
    /**
     * Finds the mode of an array of numbers
     * @param {Array.<number>} - The array of numbers to find the mode of
     * @return {number} - The mode of the inputted numbers
     */
    static mode(input) {
        if (input.length === 0) {
            return 0;
        }
        const m = input
            .reduce((items, current) => {
            const item = items.length === 0
                ? null
                : items.find((x) => x === current);
            item
                ? item.occurrence++
                : items.push({ value: current, occurrence: 1 });
            return items;
        }, [])
            .sort((a, b) => {
            if (a.occurrence < b.occurrence) {
                return 1;
            }
            else if (a.occurrence > b.occurrence || a.value < b.value) {
                return -1;
            }
            else {
                return a.value === b.value ? 0 : 1;
            }
        });
        return m[0].value;
    }
    /**
     * Finds the range of an array of numbers
     * @param {Array.<number>} - The array of numbers to find the range of
     * @return {number} - The range of the inputted numbers
     */
    static range(input) {
        const max = input.reduce((a, b) => Math.max(a, b), -Infinity);
        const min = input.reduce((a, b) => Math.min(a, b), -Infinity);
        return max - min;
    }
    /**
     * Union of arrays.
     *
     * @param {number[][]} arrays - The arrays to be unioned.
     * @return {number[]} The union of the arrays.
     */
    static union(arrays) {
        let result;
        for (let i = 0; i < arrays.length; i++) {
            for (let j = 0; j < arrays[i].length; j++) {
                if (find(result, arrays[i][j]) === 0) {
                    result.push(arrays[i][j]);
                }
            }
        }
        return result;
    }
    /**
     * Finds the intersection of multiple arrays.
     *
     * @param {number[][]} arrays - The arrays to find the intersection of.
     * @return {number[]} - The resulting array with common elements.
     */
    static intersection(arrays) {
        let result;
        for (let i = 0; i < arrays.length; i++) {
            for (let j = 0; j < arrays[i].length; j++) {
                if (find(result, arrays[i][j]) === 0 &&
                    isInAllArrays(arrays[i][j], arrays)) {
                    result.push(arrays[i][j]);
                }
            }
        }
        return result;
    }
}

class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    multiply(other) {
        const real = this.real * other.real - this.imaginary * other.imaginary;
        const imaginary = this.real * other.imaginary + this.imaginary * other.real;
        return new ComplexNumber(real, imaginary);
    }
    getImaginary() {
        return this.imaginary;
    }
    add(other) {
        const real = this.real + other.real;
        const imaginary = this.imaginary + other.imaginary;
        return new ComplexNumber(real, imaginary);
    }
    subtract(other) {
        const real = this.real - other.real;
        const imaginary = this.imaginary - other.imaginary;
        return new ComplexNumber(real, imaginary);
    }
    divide(other) {
        const denominator = other.real * other.real + other.imaginary * other.imaginary;
        const real = (this.real * other.real + this.imaginary * other.imaginary) /
            denominator;
        const imaginary = (this.imaginary * other.real - this.real * other.imaginary) /
            denominator;
        return new ComplexNumber(real, imaginary);
    }
    getModulus() {
        return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
    }
    getArgument() {
        return Math.atan2(this.imaginary, this.real);
    }
    getConjugate() {
        return new ComplexNumber(this.real, -this.imaginary);
    }
}

/**
 * Class containing logarithm functions
 */
class Logarithms {
    /**
     * Calculates the natural logarithm of a given number using an iterative series approximation.
     *
     * @param {number} x - the number to calculate the natural logarithm of
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @param {number} [options.centre=1] - the centre value
     * @throws {Error} Invalid input. ln(x) is only defined for x > 0
     * @return {number} the natural logarithm of the given number
     */
    static ln(x, options = { accuracy: 10, cache: true, centre: 1 }) {
        if (x <= 0) {
            throw new Error('Invalid input. ln(x) is only defined for x > 0');
        }
        if (this.lnCache.has(x)) {
            return this.lnCache.get(x);
        }
        let result = 0;
        for (let n = 1; n <= options.accuracy * 1000; n++) {
            result += (Math.pow((-1), (n + 1)) / n) * Math.pow((x - options.centre), n);
        }
        if (options.cache === true) {
            this.lnCache.set(x, result);
        }
        return result;
    }
    /**
     * Calculates the logarithm of a number with a specified base to a given accuracy.
     *
     * @param {number} x - The number to calculate the logarithm of
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @param {number} [options.centre=1] - the centre value
     * @return {number} - The calculated logarithm of x with base base, with the specified accuracy.
     */
    static log(x, base = 10, options = { accuracy: 10, cache: true, centre: 1 }) {
        if (this.logCache.has(x)) {
            return this.logCache.get(x);
        }
        const result = this.ln(x, {
            accuracy: options.accuracy,
            cache: options.cache,
            centre: options.centre,
        }) /
            this.ln(base, {
                accuracy: options.accuracy,
                cache: options.cache,
                centre: options.centre,
            });
        if (options.cache === true) {
            this.logCache.set(x, result);
        }
        return result;
    }
}
Logarithms.logCache = new Map();
Logarithms.lnCache = new Map();

/**
 * Class containing all trigometric functions
 */
class TrigonometryFunctions {
    /**
     * Calculates the sine of an angle in degrees.
     * @param {number} x - the angle in degrees
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} the sine of the angle
     */
    static sin(x, options = { accuracy: 10, cache: true }) {
        if (this.sinCache.has(x)) {
            return this.sinCache.get(x);
        }
        const a = (x % 360) * (Math.PI / 180);
        let result = 0;
        for (let i = 0; i <= options.accuracy; i++) {
            result += (Math.pow((-1), i) * Math.pow(a, (2 * i + 1))) / Factorial(2 * i + 1);
        }
        this.sinCache.set(x, result);
        return result;
    }
    /**
     * Calculates the cosine of a given angle in degrees.
     * @param {number} x - the angle in degrees
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} - the cosine of the angle
     */
    static cos(x, options = { accuracy: 10, cache: true }) {
        if (this.cosCache.has(x)) {
            return this.cosCache.get(x);
        }
        const result = this.sin(x - 90, {
            accuracy: options.accuracy,
            cache: options.cache,
        });
        if (options.cache === true) {
            this.cosCache.set(x, result);
        }
        return result;
    }
    /**
     * Calculates the tangent of an angle in degrees.
     * @param {number} x - the angle in degrees
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} the tangent of the angle
     */
    static tan(x, options = { accuracy: 10, cache: true }) {
        if (this.tanCache.has(x)) {
            return this.tanCache.get(x);
        }
        const result = this.sin(x, {
            accuracy: options.accuracy,
            cache: options.cache,
        }) /
            this.cos(x, {
                accuracy: options.accuracy,
                cache: options.cache,
            });
        if (options.cache === true) {
            this.tanCache.set(x, result);
        }
        return result;
    }
    /**
     * Calculates the cosecant of an angle in degrees.
     * @param {number} x - the angle in degrees
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} the cosecant of the angle
     */
    static csc(x, options = { accuracy: 10, cache: true }) {
        if (this.cscCache.has(x)) {
            return this.cscCache.get(x);
        }
        const result = 1 /
            this.sin(x, {
                accuracy: options.accuracy,
                cache: options.cache,
            });
        if (options.cache === true) {
            this.cscCache.set(x, result);
        }
        return result;
    }
    /**
     * Calculates the secant of a given angle in degrees.
     * @param {number} x - the angle in degrees
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} the secant of the given angle
     */
    static sec(x, options = { accuracy: 10, cache: true }) {
        if (this.secCache.has(x)) {
            return this.secCache.get(x);
        }
        const result = 1 /
            this.cos(x, {
                accuracy: options.accuracy,
                cache: options.cache,
            });
        if (options.cache === true) {
            this.secCache.set(x, result);
        }
        return result;
    }
    /**
     * Calculates the cotangent of a given angle in degrees.
     * @param {number} x -the angle in degrees
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} the cotangent of the angle
     */
    static cot(x, options = { accuracy: 10, cache: true }) {
        if (this.cotCache.has(x)) {
            return this.cotCache.get(x);
        }
        const result = 1 /
            this.tan(x, {
                accuracy: options.accuracy,
                cache: options.cache,
            });
        if (options.cache === true) {
            this.cotCache.set(x, result);
        }
        return result;
    }
    /**
     * Calculates the hyperbolic sine of a number.
     * @param {number} x - the number to apply the function to
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @return {number} the hyperbolic sine of the input number
     */
    static sinh(x, options = { cache: true }) {
        if (this.sinhCache.has(x)) {
            return this.sinhCache.get(x);
        }
        const e = MathsConstants.e.value;
        const result = Math.pow(e, x) - Math.pow(e, -x) / 2;
        if (options.cache === true) {
            this.sinhCache.set(x, result);
        }
        return result;
    }
    /**
     * Returns the hyperbolic cosine of a number.
     * @param {number} x - The number for which to return the hyperbolic cosine
     * @param {object} [options] - options
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} The hyperbolic cosine of the number
     */
    static cosh(x, options = { cache: true }) {
        if (this.coshCache.has(x)) {
            return this.coshCache.get(x);
        }
        const e = MathsConstants.e.value;
        const result = (Math.pow(e, x) + Math.pow(e, -x)) / 2;
        if (options.cache === true) {
            this.coshCache.set(x, result);
        }
        return result;
    }
    /**
     * Calculates the hyperbolic tangent of a number.
     * @param {number} x - The number to calculate the tangent of
     * @param {object} [options] - options
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} The hyperbolic tangent of the number
     */
    static tanh(x, options = { cache: true }) {
        if (this.tanhCache.has(x)) {
            return this.tanhCache.get(x);
        }
        const result = this.sinh(x, {
            cache: options.cache,
        }) /
            this.cosh(x, {
                cache: options.cache,
            });
        if (options.cache === true) {
            this.tanhCache.set(x, result);
        }
        return result;
    }
    /**
     * Takes a number and returns the hyperbolic secant of that number.
     *
     * @param {number} x - the number whose hyperbolic secant is to be returned.
     * @param {object} [options] - options
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} the hyperbolic secant of the given number.
     */
    static sech(x, options = { cache: true }) {
        if (this.sechCache.has(x)) {
            return this.sechCache.get(x);
        }
        const result = 1 /
            this.cosh(x, {
                cache: options.cache,
            });
        if (options.cache === true) {
            this.sechCache.set(x, result);
        }
        return result;
    }
    /**
     * Calculates the hyperbolic cosecant of a given number.
     *
     * @param {number} x - The number to calculate the hyperbolic cosecant of.
     * @param {object} [options] - options
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} The hyperbolic cosecant of the given number.
     */
    static csch(x, options = { cache: true }) {
        if (this.cschCache.has(x)) {
            return this.cschCache.get(x);
        }
        const result = 1 /
            this.sinh(x, {
                cache: options.cache,
            });
        if (options.cache === true) {
            this.cschCache.set(x, result);
        }
        return result;
    }
    /**
     * Computes the hyperbolic cotangent of a number.
     *
     * @param {number} x - The number in radians for which to compute the hyperbolic cotangent.
     * @param {object} [options] - options
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} The hyperbolic cotangent of the given number.
     */
    static coth(x, options = { cache: true }) {
        if (this.cothCache.has(x)) {
            return this.cothCache.get(x);
        }
        const result = 1 /
            this.tanh(x, {
                cache: options.cache,
            });
        if (options.cache === true) {
            this.cothCache.set(x, result);
        }
        return result;
    }
    /**
     * Computes the arcsine of x using the given accuracy.
     * @param {number} x - The value to compute the arcsine for
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} The computed arcsine value
     */
    static asin(x, options = { accuracy: 10, cache: true }) {
        if (this.asinCache.has(x)) {
            return this.asinCache.get(x);
        }
        let result = 0;
        for (let n = 0; n <= options.accuracy; n++) {
            const coefficient = (1 / Indices.power(2, n)) *
                (Equations.binomialCoefficient(2 * n, n) / (2 * n + 1));
            const term = coefficient * Indices.power(x, 2 * n + 1);
            result += term;
        }
        if (options.cache === true) {
            this.asinCache.set(x, result);
        }
        return result;
    }
    /**
     * Calculates the arccosine of a given number with a specified accuracy.
     * @param {number} x - The number to get the arccosine of
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} The arccosine of the given number
     */
    static acos(x, options = { accuracy: 10, cache: true }) {
        if (this.acosCache.has(x)) {
            return this.acosCache.get(x);
        }
        let result = MathsConstants.pi.value / 2;
        for (let n = 0; n <= options.accuracy; n++) {
            const coefficient = (1 / Indices.power(2, n)) *
                (Equations.binomialCoefficient(2 * n, n) / (2 * n + 1));
            const term = coefficient * Indices.power(x, 2 * n + 1);
            result += term;
        }
        if (options.cache === true) {
            this.acosCache.set(x, result);
        }
        return result;
    }
    /**
     * Calculates the arctangent of a given number using the specified accuracy.
     * @param {number} x - The input number
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} The calculated arctangent value
     */
    static atan(x, options = { accuracy: 10, cache: true }) {
        if (this.atanCache.has(x)) {
            return this.atanCache.get(x);
        }
        let result = 0;
        for (let n = 0; n <= options.accuracy; n++) {
            const coefficient = (n % 2 === 0 ? 1 : -1) / (2 * n + 1);
            const term = coefficient * Indices.power(x, 2 * n + 1);
            result += term;
        }
        if (options.cache === true) {
            this.atanCache.set(x, result);
        }
        return result;
    }
    /**
     * Calculates the arccosecant of a given number using the Maclaurin series expansion.
     * @param {number} x - The value to calculate the arccsc of
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @returns {number} The arccosecant of the given number
     */
    static acsc(x, options = { accuracy: 10, cache: true }) {
        if (this.acscCache.has(x)) {
            return this.acscCache.get(x);
        }
        let result = 0;
        for (let n = 0; n <= options.accuracy; n++) {
            const coefficient = 1 /
                (Factorial(n) *
                    Indices.power((1 / Indices.power(2, 2 * n + 1)) *
                        Equations.binomialCoefficient(2 * n, n), -1));
            const term = coefficient * Indices.power(x, 2 * n + 1);
            result += term;
        }
        if (options.cache === true) {
            this.acscCache.set(x, result);
        }
        return result;
    }
    /**
     * Calculates arcsecant of a number with given accuracy.
     * @param {number} x - the input value must be greater than or equal to 1
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} the arcsecant of x with given accuracy
     */
    static asec(x, options = { accuracy: 10, cache: true }) {
        if (Absolute(x) < 1) {
            throw new Error('Input value must be greater than or equal to 1');
        }
        if (this.asecCache.has(x)) {
            return this.asecCache.get(x);
        }
        let result = this.acos(1 / x);
        for (let i = 0; i < options.accuracy; i++) {
            result =
                result -
                    (this.sec(result, {
                        accuracy: options.accuracy,
                        cache: options.cache,
                    }) -
                        x) /
                        (this.sec(result, {
                            accuracy: options.accuracy,
                            cache: options.cache,
                        }) *
                            this.tan(result, {
                                accuracy: options.accuracy,
                                cache: options.cache,
                            }));
        }
        if (options.cache === true) {
            this.asecCache.set(x, result);
        }
        return result;
    }
    /**
     * Calculates the arccotangent of a number to a certain accuracy.
     * @param {number} x - the number to calculate the arccotangent of
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} the arccotangent of x to the specified accuracy
     */
    static acot(x, options = { accuracy: 10, cache: true }) {
        if (this.acotCache.has(x)) {
            return this.acotCache.get(x);
        }
        let result = 0;
        for (let n = 0; n <= options.accuracy; n++) {
            const term = (Indices.power(-1, n) / (2 * n + 1)) *
                Indices.power(x, 2 * n + 1);
            result += term;
        }
        if (options.cache === true) {
            this.acotCache.set(x, result);
        }
        return result;
    }
    /**
     * Computes the inverse hyperbolic sine (arcsinh) of a given number using the Maclaurin series expansion.
     * @param {number} x - The number to compute the inverse hyperbolic sine of
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} The inverse hyperbolic sine (arcsinh) of the given number
     */
    static asinh(x, options = { accuracy: 10, cache: true }) {
        if (this.asinhCache.has(x)) {
            return this.asinhCache.get(x);
        }
        let result = 0;
        for (let n = 0; n <= options.accuracy; n++) {
            const coefficient = (Indices.power(-1, n) / (2 * n + 1)) * Factorial(2 * n);
            const term = coefficient * Indices.power(x, 2 * n + 1);
            result += term;
        }
        if (options.cache === true) {
            this.asinhCache.set(x, result);
        }
        return result;
    }
    /**
     * Computes the inverse hyperbolic cosine of a number.
     * @param {number} x - A number whose inverse hyperbolic cosine is to be found
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} The inverse hyperbolic cosine of the given number
     */
    static acosh(x, options = { accuracy: 10, cache: true }) {
        if (this.acoshCache.has(x)) {
            return this.acoshCache.get(x);
        }
        let result = 0;
        for (let n = 0; n <= options.accuracy; n++) {
            const coefficient = (Indices.power(-1, n) * Factorial(2 * n)) /
                (Indices.power(2, 2 * n) * Indices.power(Factorial(n), 2));
            const term = (coefficient * Indices.power(x, 2 * n)) / (2 * n - 1);
            result += term;
        }
        if (options.cache === true) {
            this.acoshCache.set(x, result);
        }
        return result;
    }
    /**
     * Calculates the arctanh (inverse hyperbolic tangent) of a number up to a certain accuracy.
     * @param {number} x - The number to calculate the arctanh of
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} The arctanh value of the input number
     */
    static atanh(x, options = { accuracy: 10, cache: true }) {
        if (this.atanhCache.has(x)) {
            return this.atanhCache.get(x);
        }
        let result = 0;
        for (let n = 0; n <= options.accuracy; n++) {
            const term = Indices.power(x, 2 * n + 1) / (2 * n + 1);
            result += term;
        }
        if (options.cache === true) {
            this.atanhCache.set(x, result);
        }
        return result;
    }
    /**
     * Calculates the inverse hyperbolic cosecant (arcsinh) of a number up to a given accuracy.
     * @param {number} x - the number to calculate the inverse hyperbolic cosecant of
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} the calculated inverse hyperbolic cosecant of the input number
     */
    static acsch(x, options = { accuracy: 10, cache: true }) {
        if (this.acschCache.has(x)) {
            return this.acschCache.get(x);
        }
        let result = 0;
        for (let n = 0; n <= options.accuracy; n++) {
            const coefficient = (Indices.power(-1, n) *
                Equations.binomialCoefficient(2 * n, n)) /
                (Factorial(n) * (2 * n + 1));
            const term = coefficient * Indices.power(x, 2 * n + 1);
            result += term;
        }
        if (options.cache === true) {
            this.acschCache.set(x, result);
        }
        return result;
    }
    /**
     * Computes the inverse hyperbolic secant of a number with a given accuracy.
     * There is no specific method of finding the inverse hyperbolic secant so this uses the Newton-Raphson method to approximate arcsech(x)
     * @param {number} x - the number to compute the inverse hyperbolic secant of
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} the inverse hyperbolic secant of x
     */
    static asech(x, options = { accuracy: 10, cache: true }) {
        if (this.asechCache.has(x)) {
            return this.asechCache.get(x);
        }
        let result = Logarithms.log((1 + Indices.root(1 - x * x)) / x, {
            accuracy: options.accuracy,
            cache: options.cache,
        });
        for (let i = 0; i < options.accuracy; i++) {
            const sech = 1 / this.cosh(result);
            const numerator = sech - x;
            const denominator = -sech * this.tanh(result);
            result -= numerator / denominator;
        }
        if (options.cache === true) {
            this.asechCache.set(x, result);
        }
        return result;
    }
    /**
     * Calculates the inverse hyperbolic cotangent of the given number.
     * @param {number} x - The number whose inverse hyperbolic cotangent is to be calculated
     * @param {object} [options] - options
     * @param {number} [options.accuracy=10] - precision of the result (default of 10)
     * @param {boolean} [options.cache=true] - cache the result
     * @return {number} The inverse hyperbolic cotangent of the given number
     */
    static acoth(x, options = { accuracy: 10, cache: true }) {
        if (this.acothCache.has(x)) {
            return this.acothCache.get(x);
        }
        const result = 0.5 *
            Logarithms.log((x + 1) / (x - 1), {
                accuracy: options.accuracy,
                cache: options.cache,
            });
        if (options.cache === true) {
            this.acothCache.set(x, result);
        }
        return result;
    }
}
TrigonometryFunctions.sinCache = new Map();
TrigonometryFunctions.cosCache = new Map();
TrigonometryFunctions.tanCache = new Map();
TrigonometryFunctions.asinCache = new Map();
TrigonometryFunctions.acosCache = new Map();
TrigonometryFunctions.atanCache = new Map();
TrigonometryFunctions.cscCache = new Map();
TrigonometryFunctions.secCache = new Map();
TrigonometryFunctions.cotCache = new Map();
TrigonometryFunctions.sinhCache = new Map();
TrigonometryFunctions.coshCache = new Map();
TrigonometryFunctions.tanhCache = new Map();
TrigonometryFunctions.asinhCache = new Map();
TrigonometryFunctions.acoshCache = new Map();
TrigonometryFunctions.atanhCache = new Map();
TrigonometryFunctions.cschCache = new Map();
TrigonometryFunctions.sechCache = new Map();
TrigonometryFunctions.cothCache = new Map();
TrigonometryFunctions.acscCache = new Map();
TrigonometryFunctions.asecCache = new Map();
TrigonometryFunctions.acotCache = new Map();
TrigonometryFunctions.acschCache = new Map();
TrigonometryFunctions.asechCache = new Map();
TrigonometryFunctions.acothCache = new Map();

/**
 * Class containing equation utilities
 */
class Equations {
    static find(array, target) {
        let count = 0;
        if (Array.isArray(array)) {
            count = array.filter((item) => item === target).length;
        }
        else if (typeof array === 'string') {
            count = array.split('').filter((char) => char === target).length;
        }
        return count;
    }
    /**
     * Parses a mathematical equation string with given variables.
     *
     * @param {string} equation - the equation to be parsed
     * @return {Array<string|number> | 'Error'} the result of the evaluation or 'Error' if the equation is invalid
     */
    static parseEquation(equation) {
        const result = equation.replace(/\s/g, '').split('');
        if (equation === '' ||
            !equation ||
            Equations.find(result, '(') !== Equations.find(result, ')')) {
            throw new Error('Invalid equation');
        }
        for (let i = 0; i < result.length; i++) {
            if (!isNaN(Number(result[i])) && !isNaN(Number(result[i + 1]))) {
                result[i] = Number(result[i].concat(result[i + 1]));
                result.splice(i + 1, 1);
                i--;
            }
            else if (result[i] === '-' &&
                !isNaN(Number(result[i + 1])) &&
                isNaN(Number(result[i - 1]))) {
                result[i] = Number(result[i].concat(result[i + 1]));
                result.splice(i + 1, 1);
                i--;
            }
            else if (result[i] === '.' && !isNaN(Number(result[i + 1]))) {
                result[i] = Number(result[i].concat(result[i + 1]));
                result.splice(i + 1, 1);
                i--;
            }
            else if (!isNaN(Number(result[i])) &&
                result[i + 1] === '.' &&
                !isNaN(Number(result[i + 2]))) {
                result[i] = result[i] = Number(result[i].concat(result[i + 1], result[i + 2]));
                result.splice(i + 1, 2);
                i--;
            }
            else if (result[i] === 'r' && result[i + 1] === 't') {
                result[i] = result[i].concat(result[i + 1]);
                result.splice(i + 1, 1);
                i--;
            }
            else if (result[i] === 'l' && result[i + 1] === 'n') {
                result[i] = result[i].concat(result[i + 1]);
                result.splice(i + 1, 1);
                i--;
            }
            else if (result[i] === 'a' &&
                result[i + 1] === 'b' &&
                result[i + 2] === 's') {
                result[i] = result[i] = result[i].concat(result[i + 1], result[i + 2]);
                result.splice(i + 1, 2);
                i--;
            }
            else if (result[i] === 'l' &&
                result[i + 1] === 'o' &&
                result[i + 2] === 'g') {
                result[i] = result[i] = result[i].concat(result[i + 1], result[i + 2]);
                result.splice(i + 1, 2);
                i--;
            }
            else if (result[i] === 'a' &&
                result[i + 1] === 's' &&
                result[i + 2] === 'i' &&
                result[i + 3] === 'n' &&
                result[i + 4] === 'h') {
                result[i] = result[i].concat(result[i + 1], result[i + 2], result[i + 3], result[i + 4]);
                result.splice(i + 1, 4);
                i--;
            }
            else if (result[i] === 'a' &&
                result[i + 1] === 'c' &&
                result[i + 2] === 'o' &&
                result[i + 3] === 's' &&
                result[i + 4] === 'h') {
                result[i] = result[i].concat(result[i + 1], result[i + 2], result[i + 3], result[i + 4]);
                result.splice(i + 1, 4);
                i--;
            }
            else if (result[i] === 'a' &&
                result[i + 1] === 't' &&
                result[i + 2] === 'a' &&
                result[i + 3] === 'n' &&
                result[i + 4] === 'h') {
                result[i] = result[i].concat(result[i + 1], result[i + 2], result[i + 3], result[i + 4]);
                result.splice(i + 1, 4);
                i--;
            }
            else if (result[i] === 'a' &&
                result[i + 1] === 's' &&
                result[i + 2] === 'e' &&
                result[i + 3] === 'c' &&
                result[i + 4] === 'h') {
                result[i] = result[i].concat(result[i + 1], result[i + 2], result[i + 3], result[i + 4]);
                result.splice(i + 1, 4);
                i--;
            }
            else if (result[i] === 'a' &&
                result[i + 1] === 'c' &&
                result[i + 2] === 's' &&
                result[i + 3] === 'c' &&
                result[i + 4] === 'h') {
                result[i] = result[i].concat(result[i + 1], result[i + 2], result[i + 3], result[i + 4]);
                result.splice(i + 1, 4);
                i--;
            }
            else if (result[i] === 'a' &&
                result[i + 1] === 'c' &&
                result[i + 2] === 'o' &&
                result[i + 3] === 't' &&
                result[i + 4] === 'h') {
                result[i] = result[i].concat(result[i + 1], result[i + 2], result[i + 3], result[i + 4]);
                result.splice(i + 1, 4);
                i--;
            }
            else if (result[i] === 'a' &&
                result[i + 1] === 's' &&
                result[i + 2] === 'i' &&
                result[i + 3] === 'n') {
                result[i] = result[i].concat(result[i + 1], result[i + 2], result[i + 3]);
                result.splice(i + 1, 3);
                i--;
            }
            else if (result[i] === 'a' &&
                result[i + 1] === 'c' &&
                result[i + 2] === 'o' &&
                result[i + 3] === 's') {
                result[i] = result[i].concat(result[i + 1], result[i + 2], result[i + 3]);
                result.splice(i + 1, 3);
                i--;
            }
            else if (result[i] === 'a' &&
                result[i + 1] === 't' &&
                result[i + 2] === 'a' &&
                result[i + 3] === 'n') {
                result[i] = result[i].concat(result[i + 1], result[i + 2], result[i + 3]);
                result.splice(i + 1, 3);
                i--;
            }
            else if (result[i] === 'a' &&
                result[i + 1] === 's' &&
                result[i + 2] === 'e' &&
                result[i + 3] === 'c') {
                result[i] = result[i].concat(result[i + 1], result[i + 2], result[i + 3]);
                result.splice(i + 1, 3);
                i--;
            }
            else if (result[i] === 'a' &&
                result[i + 1] === 'c' &&
                result[i + 2] === 's' &&
                result[i + 3] === 'c') {
                result[i] = result[i].concat(result[i + 1], result[i + 2], result[i + 3]);
                result.splice(i + 1, 3);
                i--;
            }
            else if (result[i] === 'a' &&
                result[i + 1] === 'c' &&
                result[i + 2] === 'o' &&
                result[i + 3] === 't') {
                result[i] = result[i].concat(result[i + 1], result[i + 2], result[i + 3]);
                result.splice(i + 1, 3);
                i--;
            }
            else if (result[i] === 's' &&
                result[i + 1] === 'i' &&
                result[i + 2] === 'n' &&
                result[i + 3] === 'h') {
                result[i] = result[i].concat(result[i + 1], result[i + 2], result[i + 3]);
                result.splice(i + 1, 3);
                i--;
            }
            else if (result[i] === 'c' &&
                result[i + 1] === 'o' &&
                result[i + 2] === 's' &&
                result[i + 3] === 'h') {
                result[i] = result[i].concat(result[i + 1], result[i + 2], result[i + 3]);
                result.splice(i + 1, 3);
                i--;
            }
            else if (result[i] === 't' &&
                result[i + 1] === 'a' &&
                result[i + 2] === 'n' &&
                result[i + 3] === 'h') {
                result[i] = result[i].concat(result[i + 1], result[i + 2], result[i + 3]);
                result.splice(i + 1, 3);
                i--;
            }
            else if (result[i] === 's' &&
                result[i + 1] === 'e' &&
                result[i + 2] === 'c' &&
                result[i + 3] === 'h') {
                result[i] = result[i].concat(result[i + 1], result[i + 2], result[i + 3]);
                result.splice(i + 1, 3);
                i--;
            }
            else if (result[i] === 'c' &&
                result[i + 1] === 's' &&
                result[i + 2] === 'c' &&
                result[i + 3] === 'h') {
                result[i] = result[i].concat(result[i + 1], result[i + 2], result[i + 3]);
                result.splice(i + 1, 3);
                i--;
            }
            else if (result[i] === 'c' &&
                result[i + 1] === 'o' &&
                result[i + 2] === 't' &&
                result[i + 3] === 'h') {
                result[i] = result[i] = result[i].concat(result[i + 1], result[i + 2], result[i + 3]);
                result.splice(i + 1, 3);
                i--;
            }
            else if (result[i] === 's' &&
                result[i + 1] === 'i' &&
                result[i + 2] === 'n') {
                result[i] = result[i] = result[i].concat(result[i + 1], result[i + 2]);
                result.splice(i + 1, 2);
                i--;
            }
            else if (result[i] === 'c' &&
                result[i + 1] === 'o' &&
                result[i + 2] === 's') {
                result[i] = result[i] = result[i].concat(result[i + 1], result[i + 2]);
                result.splice(i + 1, 2);
                i--;
            }
            else if (result[i] === 't' &&
                result[i + 1] === 'a' &&
                result[i + 2] === 'n') {
                result[i] = result[i] = result[i].concat(result[i + 1], result[i + 2]);
                result.splice(i + 1, 2);
                i--;
            }
            else if (result[i] === 's' &&
                result[i + 1] === 'e' &&
                result[i + 2] === 'c') {
                result[i] = result[i] = result[i].concat(result[i + 1], result[i + 2]);
                result.splice(i + 1, 2);
                i--;
            }
            else if (result[i] === 'c' &&
                result[i + 1] === 's' &&
                result[i + 2] === 'c') {
                result[i] = result[i] = result[i].concat(result[i + 1], result[i + 2]);
                result.splice(i + 1, 2);
                i--;
            }
            else if (result[i] === 'c' &&
                result[i + 1] === 'o' &&
                result[i + 2] === 't') {
                result[i] = result[i] = result[i].concat(result[i + 1], result[i + 2]);
                result.splice(i + 1, 2);
                i--;
            }
            else if (!isNaN(Number(result[i]))) {
                result[i] = Number(result[i]);
            }
        }
        return result;
    }
    /**
     * Evaluates a mathematical equation string with given variables.
     *
     * @param {string} equation - the equation to be evaluated
     * @param {{ Array.<string>: number }} variables - an object with variable names and their values
     * @return { number | 'Error'} the result of the evaluation or 'Error' if the equation is invalid
     */
    static evaluate(equation, variables) {
        const result = this.parseEquation(equation);
        console.log(result);
        for (let i = 0; i < result.length; i++) {
            if (i > 0 && typeof result[i - 1] === 'number') {
                result.splice(i, 0, '*');
                i++;
            }
            if (i < result.length - 1 && typeof result[i + 1] === 'number') {
                result.splice(i + 1, 0, '*');
            }
            result[i] = variables[result[i]];
        }
        const evaluateNoBrackets = (array) => {
            while (array.length !== 1) {
                for (let i = 0; i < array.length; i++) {
                    switch (array[i]) {
                        case '!':
                            array[i - 1] = Factorial(Number(array[i - 1]));
                            array.splice(i);
                            break;
                        case 'ln':
                            array[i] = Logarithms.ln(Number(array[i + 1]));
                            array.splice(i);
                            break;
                        case 'log':
                            array[i] = Logarithms.log(Number(array[i + 1]), Number(array[i + 2]));
                            array.splice(i + 1, 2);
                            break;
                        case 'sin':
                            array[i] = TrigonometryFunctions.sin(Number(array[i + 1]));
                            array.splice(i + 1, 1);
                            break;
                        case 'cos':
                            array[i] = TrigonometryFunctions.cos(Number(array[i + 1]));
                            array.splice(i + 1, 1);
                            break;
                        case 'tan':
                            array[i] = TrigonometryFunctions.tan(Number(array[i + 1]));
                            array.splice(i + 1, 1);
                            break;
                        case 'sec':
                            array[i] = TrigonometryFunctions.sec(Number(array[i + 1]));
                            array.splice(i + 1, 1);
                            break;
                        case 'csc':
                            array[i] = TrigonometryFunctions.csc(Number(array[i + 1]));
                            array.splice(i + 1, 1);
                            break;
                        case 'cot':
                            array[i] = TrigonometryFunctions.tan(Number(array[i + 1]));
                            array.splice(i + 1, 1);
                            break;
                        case 'sinh':
                            array[i] = TrigonometryFunctions.sinh(Number(array[i + 1]));
                            array.splice(i + 1, 1);
                            break;
                        case 'cosh':
                            array[i] = TrigonometryFunctions.cosh(Number(array[i + 1]));
                            array.splice(i + 1, 1);
                            break;
                        case 'tanh':
                            array[i] = TrigonometryFunctions.tanh(Number(array[i + 1]));
                            array.splice(i + 1, 1);
                            break;
                        case 'sech':
                            array[i] = TrigonometryFunctions.sech(Number(array[i + 1]));
                            array.splice(i + 1, 1);
                            break;
                        case 'csch':
                            array[i] = TrigonometryFunctions.csch(Number(array[i + 1]));
                            array.splice(i + 1, 1);
                            break;
                        case 'coth':
                            array[i] = TrigonometryFunctions.coth(Number(array[i + 1]));
                            array.splice(i + 1, 1);
                            break;
                        case 'asin':
                            array[i] = TrigonometryFunctions.asin(Number(array[i + 1]));
                            array.splice(i + 1, 1);
                            break;
                        case 'acot':
                            array[i] = TrigonometryFunctions.acot(Number(array[i + 1]));
                            array.splice(i + 1, 1);
                            break;
                        case 'acos':
                            array[i] = TrigonometryFunctions.acos(Number(array[i + 1]));
                            array.splice(i + 1, 1);
                            break;
                        case 'atan':
                            array[i] = TrigonometryFunctions.atan(Number(array[i + 1]));
                            array.splice(i + 1, 1);
                            break;
                        case 'asec':
                            array[i] = TrigonometryFunctions.asec(Number(array[i + 1]));
                            array.splice(i + 1, 1);
                            break;
                        case 'acsc':
                            array[i] = TrigonometryFunctions.acsc(Number(array[i + 1]));
                            array.splice(i + 1, 1);
                            break;
                        case 'asinh':
                            array[i] = TrigonometryFunctions.asinh(Number(array[i + 1]));
                            array.splice(i + 1, 1);
                            break;
                        case 'acoth':
                            array[i] = TrigonometryFunctions.acoth(Number(array[i + 1]));
                            array.splice(i + 1, 1);
                            break;
                        case 'acosh':
                            array[i] = TrigonometryFunctions.acosh(Number(array[i + 1]));
                            array.splice(i + 1, 1);
                            break;
                        case 'atanh':
                            array[i] = TrigonometryFunctions.atanh(Number(array[i + 1]));
                            array.splice(i + 1, 1);
                            break;
                        case 'asech':
                            array[i] = TrigonometryFunctions.asech(Number(array[i + 1]));
                            array.splice(i + 1, 1);
                            break;
                        case 'acsch':
                            array[i] = TrigonometryFunctions.acsch(Number(array[i + 1]));
                            array.splice(i + 1, 1);
                            break;
                    }
                }
                for (let i = 0; i < array.length; i++) {
                    switch (array[i]) {
                        case '^':
                            array[i - 1] ===
                                Math.pow(Number(array[i - 1]), Number(array[i + 1]));
                            array.splice(i, 2);
                            break;
                        case '√':
                            if (Number.isInteger(Number(array[i - 1]))) {
                                array[i - 1] ===
                                    Math.pow(Number(array[i + 1]), 1) /
                                        Number(array[i - 1]);
                                array.splice(i, 2);
                            }
                            else {
                                array[i] = Math.pow(Number(array[i + 1]), 0.5);
                                array.splice(i + 1);
                            }
                            break;
                    }
                }
                for (let i = 0; i < array.length; i++) {
                    switch (array[i]) {
                        case '*':
                            array[i - 1] =
                                Number(array[i - 1]) * Number(array[i + 1]);
                            array.splice(i, 2);
                            break;
                        case '/':
                            array[i - 1] =
                                Number(array[i - 1]) / Number(array[i + 1]);
                            array.splice(i, 2);
                            break;
                    }
                }
                for (let i = 0; i < array.length; i++) {
                    switch (array[i]) {
                        case '+':
                            array[i - 1] =
                                Number(array[i - 1]) + Number(array[i + 1]);
                            array.splice(i, 2);
                            break;
                        case '-':
                            array[i - 1] =
                                Number(array[i - 1]) - Number(array[i + 1]);
                            array.splice(i, 2);
                            break;
                    }
                }
            }
            return array[0];
        };
        while (Equations.find(result, '(') > 0) {
            let startPos = -1;
            let endPos = -1;
            for (let i = 0; i < result.length; i++) {
                if (result[i] === '(') {
                    startPos = i;
                }
                else if (result[i] === ')' && startPos >= 0) {
                    endPos = i;
                }
            }
            if (startPos !== -1 && endPos !== -1) {
                const subEquation = result.slice(startPos + 1, endPos);
                result[startPos] = evaluateNoBrackets(subEquation);
                result.splice(startPos + 1, endPos - startPos);
            }
        }
        return Number(evaluateNoBrackets(result));
    }
    /**
     * Calculates the binomial coefficient of two given numbers.
     *
     * @param {number} n - The total number of items.
     * @param {number} k - The number of items to choose.
     * @return {number} The calculated binomial coefficient.
     */
    static binomialCoefficient(n, k) {
        if (k < 0 || k > n)
            return 0;
        if (k === 0 || k === n)
            return 1;
        let coefficient = 1;
        k = Math.min(k, n - k);
        for (let i = 1; i <= k; i++) {
            coefficient *= (n - i + 1) / i;
        }
        return coefficient;
    }
    static simplify(expression) {
        let result = this.parseEquation(expression);
        while (Equations.find(result, '(') > 0) {
            const startPos = result.lastIndexOf('(');
            const endPos = result.indexOf(')', startPos);
            if (startPos !== -1 && endPos !== -1) {
                const subEquation = result.slice(startPos + 1, endPos);
                result[startPos] = this.simplifyArray(subEquation);
                result.splice(startPos + 1, endPos - startPos);
            }
        }
        return this.simplifyArray(result).join('');
        // 1 + [1 + 2 + [4x+1]]
        // 1 + [1 + 2 + 4x + 1]
        // 1 + 4 + 4x
        // 5 + 4x
    }
    static parseEquation2(array) {
        for (let i = 0; i < array.length; i++) {
            if (typeof array[i] === 'string' && array[i].length === 1) ;
        }
    }
    static simplifyArray(array) {
        for (let i = 0; i < array.length; i++) {
            switch (array[i]) {
                case '!':
                    if (!isNaN(array[i - 1])) {
                        array[i - 1] = Factorial(Number(array[i - 1]));
                        array.splice(i);
                        break;
                    }
                case 'ln':
                    if (!isNaN(array[i + 1])) {
                        array[i] = Logarithms.ln(Number(array[i + 1]));
                        array.splice(i + 1);
                        break;
                    }
                case 'log':
                    if (!isNaN(array[i + 1]) && !isNaN(array[i + 2])) {
                        array[i] = Logarithms.log(Number(array[i + 1]), Number(array[i + 2]));
                        array.splice(i + 1, 2);
                        break;
                    }
                case 'sin':
                    if (!isNaN(array[i + 1])) {
                        array[i] = TrigonometryFunctions.sin(Number(array[i + 1]));
                        array.splice(i + 1, 1);
                        break;
                    }
                case 'cos':
                    if (!isNaN(array[i + 1])) {
                        array[i] = TrigonometryFunctions.cos(Number(array[i + 1]));
                        array.splice(i + 1, 1);
                        break;
                    }
                case 'tan':
                    if (!isNaN(array[i + 1])) {
                        array[i] = TrigonometryFunctions.tan(Number(array[i + 1]));
                        array.splice(i + 1, 1);
                        break;
                    }
                case 'sec':
                    if (!isNaN(array[i + 1])) {
                        array[i] = TrigonometryFunctions.sec(Number(array[i + 1]));
                        array.splice(i + 1, 1);
                        break;
                    }
                case 'csc':
                    if (!isNaN(array[i + 1])) {
                        array[i] = TrigonometryFunctions.csc(Number(array[i + 1]));
                        array.splice(i + 1, 1);
                        break;
                    }
                case 'cot':
                    if (!isNaN(array[i + 1])) {
                        array[i] = TrigonometryFunctions.tan(Number(array[i + 1]));
                        array.splice(i + 1, 1);
                        break;
                    }
                case 'sinh':
                    if (!isNaN(array[i + 1])) {
                        array[i] = TrigonometryFunctions.sinh(Number(array[i + 1]));
                        array.splice(i + 1, 1);
                        break;
                    }
                case 'cosh':
                    if (!isNaN(array[i + 1])) {
                        array[i] = TrigonometryFunctions.cosh(Number(array[i + 1]));
                        array.splice(i + 1, 1);
                        break;
                    }
                case 'tanh':
                    if (!isNaN(array[i + 1])) {
                        array[i] = TrigonometryFunctions.tanh(Number(array[i + 1]));
                        array.splice(i + 1, 1);
                        break;
                    }
                case 'sech':
                    if (!isNaN(array[i + 1])) {
                        array[i] = TrigonometryFunctions.sech(Number(array[i + 1]));
                        array.splice(i + 1, 1);
                        break;
                    }
                case 'csch':
                    if (!isNaN(array[i + 1])) {
                        array[i] = TrigonometryFunctions.csch(Number(array[i + 1]));
                        array.splice(i + 1, 1);
                        break;
                    }
                case 'coth':
                    if (!isNaN(array[i + 1])) {
                        array[i] = TrigonometryFunctions.coth(Number(array[i + 1]));
                        array.splice(i + 1, 1);
                        break;
                    }
                case 'asin':
                    if (!isNaN(array[i + 1])) {
                        array[i] = TrigonometryFunctions.asin(Number(array[i + 1]));
                        array.splice(i + 1, 1);
                        break;
                    }
                case 'acot':
                    if (!isNaN(array[i + 1])) {
                        array[i] = TrigonometryFunctions.acot(Number(array[i + 1]));
                        array.splice(i + 1, 1);
                        break;
                    }
                case 'acos':
                    if (!isNaN(array[i + 1])) {
                        array[i] = TrigonometryFunctions.acos(Number(array[i + 1]));
                        array.splice(i + 1, 1);
                        break;
                    }
                case 'atan':
                    if (!isNaN(array[i + 1])) {
                        array[i] = TrigonometryFunctions.atan(Number(array[i + 1]));
                        array.splice(i + 1, 1);
                        break;
                    }
                case 'asec':
                    if (!isNaN(array[i + 1])) {
                        array[i] = TrigonometryFunctions.asec(Number(array[i + 1]));
                        array.splice(i + 1, 1);
                        break;
                    }
                case 'acsc':
                    if (!isNaN(array[i + 1])) {
                        array[i] = TrigonometryFunctions.acsc(Number(array[i + 1]));
                        array.splice(i + 1, 1);
                        break;
                    }
                case 'asinh':
                    if (!isNaN(array[i + 1])) {
                        array[i] = TrigonometryFunctions.asinh(Number(array[i + 1]));
                        array.splice(i + 1, 1);
                        break;
                    }
                case 'acoth':
                    if (!isNaN(array[i + 1])) {
                        array[i] = TrigonometryFunctions.acoth(Number(array[i + 1]));
                        array.splice(i + 1, 1);
                        break;
                    }
                case 'acosh':
                    if (!isNaN(array[i + 1])) {
                        array[i] = TrigonometryFunctions.acosh(Number(array[i + 1]));
                        array.splice(i + 1, 1);
                        break;
                    }
                case 'atanh':
                    if (!isNaN(array[i + 1])) {
                        array[i] = TrigonometryFunctions.atanh(Number(array[i + 1]));
                        array.splice(i + 1, 1);
                        break;
                    }
                case 'asech':
                    if (!isNaN(array[i + 1])) {
                        array[i] = TrigonometryFunctions.asech(Number(array[i + 1]));
                        array.splice(i + 1, 1);
                        break;
                    }
                case 'acsch':
                    if (!isNaN(array[i + 1])) {
                        array[i] = TrigonometryFunctions.acsch(Number(array[i + 1]));
                        array.splice(i + 1, 1);
                        break;
                    }
            }
        }
        for (let i = 0; i < array.length; i++) {
            switch (array[i]) {
                case '^':
                    if (!isNaN(array[i - 1]) && !isNaN(array[i + 1])) {
                        array[i - 1] ===
                            Math.pow(Number(array[i - 1]), Number(array[i + 1]));
                        array.splice(i, 2);
                        break;
                    }
                case '√':
                    if (!isNaN(Number(array[i + 1]))) {
                        if (!isNaN(Number(array[i - 1]))) {
                            array[i - 1] ===
                                Math.pow(Number(array[i + 1]), 1) /
                                    Number(array[i - 1]);
                            array.splice(i, 2);
                        }
                        else {
                            array[i] = Math.pow(Number(array[i + 1]), 0.5);
                            array.splice(i + 1);
                        }
                        break;
                    }
            }
        }
        for (let i = 0; i < array.length; i++) {
            switch (array[i]) {
                case '*':
                    if (!isNaN(array[i - 1]) && !isNaN(array[i + 1])) {
                        array[i - 1] =
                            Number(array[i - 1]) * Number(array[i + 1]);
                        array.splice(i, 2);
                        break;
                    }
                case '/':
                    if (!isNaN(array[i - 1]) && !isNaN(array[i + 1])) {
                        array[i - 1] =
                            Number(array[i - 1]) / Number(array[i + 1]);
                        array.splice(i, 2);
                        break;
                    }
            }
        }
        for (let i = 0; i < array.length; i++) {
            switch (array[i]) {
                case '+':
                    if (!isNaN(array[i - 1]) && !isNaN(array[i + 1])) {
                        array[i - 1] =
                            Number(array[i - 1]) + Number(array[i + 1]);
                        array.splice(i, 2);
                        break;
                    }
                case '-':
                    if (!isNaN(array[i - 1]) && !isNaN(array[i + 1])) {
                        array[i - 1] =
                            Number(array[i - 1]) - Number(array[i + 1]);
                        array.splice(i, 2);
                        break;
                    }
            }
        }
        return array[0];
    }
}

/**
 * Class containing summation functions
 */
class LargeOperators {
    /**
     * Calculates the additive summation of a given equation within a specified range.
     *
     * @param {string} equation - The equation to be evaluated.
     * @param {number} start - The starting value of the range.
     * @param {number} end - The ending value of the range.
     * @param {number} interval - The interval between each value in the range.
     * @return {number} The sum of the evaluated equation for each value in the range.
     */
    static AdditiveSummation(equation, start, end, interval) {
        let result = 0;
        for (let n = start; n <= end; n += interval) {
            result += Number(Equations.evaluate(equation, { n: n }));
        }
        return result;
    }
    /**
     * Calculates the multiplicative summation of a given equation.
     *
     * @param {string} equation - The equation to evaluate.
     * @param {number} start - The starting value for the summation.
     * @param {number} end - The ending value for the summation.
     * @param {number} interval - The interval between each value in the summation.
     * @return {number} - The result of the multiplicative summation.
     */
    static MultiplicativeSummation(equation, start, end, interval) {
        let result = 0;
        for (let n = start; n <= end; n += interval) {
            result *= Number(Equations.evaluate(equation, { n: n }));
        }
        return result;
    }
}

/**
 * @typedef {string} CacheType
 */
/**
 * Enum for cache types
 * @readonly
 * @enum {CacheType}
 */
const CacheEnum = {
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
};
const trig = [
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
const log = ['log', 'ln'];
/**
 * Class to add and read current cache
 */
class CacheManager {
    /**
     * Adds the input/output pair to the appropriate cache based on the given type.
     *
     * @param {CacheType | string} type - The type of cache to add the pair to.
     * @param {any} input - The input value of the pair
     * @param {any} output - The output value of the pair
     * @return {any} - The cache object that the pair was added to
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static add(type, input, output) {
        if (typeof type !== 'string')
            type = type.toString();
        if (!trig.includes(type) && !log.includes(type))
            throw new Error('Invalid input type');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let cache;
        if (trig.includes(type))
            cache = TrigonometryFunctions[`${type}Cache`];
        if (log.includes(type))
            cache = Logarithms[`${type}Cache`];
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
    static get(type, input) {
        if (typeof type !== 'string')
            type = type.toString();
        if (!trig.includes(type) && !log.includes(type))
            throw new Error('Invalid input type');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let cache;
        if (trig.includes(type))
            cache = TrigonometryFunctions[`${type}Cache`];
        if (log.includes(type))
            cache = Logarithms[`${type}Cache`];
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
    static delete(type, input) {
        if (typeof type !== 'string')
            type = type.toString();
        if (!trig.includes(type) && !log.includes(type))
            throw new Error('Invalid input type');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let cache;
        if (trig.includes(type))
            cache = TrigonometryFunctions[`${type}Cache`];
        if (log.includes(type))
            cache = Logarithms[`${type}Cache`];
        return cache.delete(input);
    }
    /**
     * Clears the cache for a given trigonometric or logarithmic function.
     *
     * @param {CacheType | string} type - A string or CacheEnum representing the function to clear cache for
     * @return {void} undefined
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static clear(type) {
        if (typeof type !== 'string')
            type = type.toString();
        if (!trig.includes(type) && !log.includes(type))
            throw new Error('Invalid input type');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let cache;
        if (trig.includes(type))
            cache = TrigonometryFunctions[`${type}Cache`];
        if (log.includes(type))
            cache = Logarithms[`${type}Cache`];
        return cache.clear();
    }
    /**
     * Clears all cached values
     *
     * @return {void} undefined
     */
    static clearAll() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const trigCache = trig.forEach((cache) => {
            return (cache = TrigonometryFunctions[`${cache}Cache`]);
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const logCache = log.forEach((cache) => {
            return (cache = Logarithms[`${cache}Cache`]);
        });
        return trigCache.concat(logCache).forEach((cache) => cache.clear());
    }
}

class PieChart {
    constructor(Sections) {
        this.Sections = Sections;
    }
}
class BarChart {
    constructor(sections, orientation) {
        this.Sections = sections;
        this.Orientation = orientation;
    }
}
class ScatterGraph {
    constructor(values) {
        this.Values = values;
    }
}
class LineGraph {
    constructor(values, xName, yName) {
        this.Values = values;
        this.xName = xName;
        this.yName = yName;
    }
}
class FrequencyGraph {
    constructor(values) {
        this.Values = values;
    }
}

export { Absolute, BarChart, CacheEnum, CacheManager, Circle, Color, ComplexNumber, Conversions, Equations, Factorial, Fraction, FrequencyGraph, Indices, LargeOperators, LineGraph, Logarithms, MathsConstants, Matrix, NumberTypes, PieChart, Range, ScatterGraph, StatisticalOperations, TrigonometryFunctions, add, angleEnum, angleUnits, areaEnum, areaUnits, arrayReplace, concatenate, convertBase, divide, energyEnum, energyUnits, find, gcd, gcd2, isInAllArrays, lengthEnum, lengthUnits, massEnum, massUnits, multiply, physicsFormulae, pressureEnum, pressureUnits, speedEnum, speedUnits, subtract, temperatureEnum, temperatureUnits, timeEnum, timeUnits, volumeEnum, volumeUnits };
