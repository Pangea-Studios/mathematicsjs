class Long {
	readonly hi: number;
	readonly lo: number;

	constructor(hi: number, lo: number) {
		this.hi = hi >>> 0;
		this.lo = lo >>> 0;
	}

	static fromString(string: string) {
		const hi = parseInt(string.slice(0, -8), 16);
		const lo = parseInt(string.slice(-8), 16);

		return new Long(hi, lo);
	}

	toString() {
		const hi = ('00000000' + this.hi.toString(16)).slice(-8);
		const lo = ('00000000' + this.lo.toString(16)).slice(-8);

		return hi + lo;
	}

	add(that: Long) {
		const lo = this.lo + that.lo;
		const hi = this.hi + that.hi + (lo > 0x100000000 ? 1 : 0);

		return new Long(hi >>> 0, lo >>> 0);
	}

	and(that: Long) {
		return new Long(this.hi & that.hi, this.lo & that.lo);
	}

	xor(that: Long) {
		return new Long(this.hi ^ that.hi, this.lo ^ that.lo);
	}

	not() {
		return new Long(~this.hi, ~this.lo);
	}

	shr(n: number) {
		if (n == 0) return this;
		if (n == 32) return new Long(0, this.hi);
		if (n > 32) return new Long(0, this.hi >>> (n - 32));
		return new Long(this.hi >>> n, (this.lo >>> n) | (this.hi << (32 - n)));
	}
}

/**
 * Class for irreversible ciphers
 */
export class Hashing {
	/**
	 * Calculates the SHA256 hash of the input.
	 *
	 * @param {string | number[]} input - The input to be hashed.
	 * @param {object} options - The options for the hashing algorithm.
	 * @param {string} options.inputFormat - The format of the input ('string' or 'hex-bytes').
	 * @param {string} options.outputFormat - The format of the output ('hex' or 'hex-w').
	 * @return {string} The SHA256 hash of the input.
	 */
	static SHA256(
		input: string,
		options: {
			inputFormat: 'string' | 'hex-bytes';
			outputFormat: 'hex' | 'hex-w';
		} = { inputFormat: 'string', outputFormat: 'hex' },
	) {
		switch (options.inputFormat) {
			default:
			case 'string':
				input = utf8Encode(input);
				break;
			case 'hex-bytes':
				input = hexBytesToString(input);
				break;
		}

		const K = [
			0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
			0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
			0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
			0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc,
			0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152,
			0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147,
			0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc,
			0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
			0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819,
			0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08,
			0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f,
			0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
			0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
		];

		const H = [
			0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
			0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
		];

		input += String.fromCharCode(0x80);

		const l = input.length / 4 + 2;
		const N = Math.ceil(l / 16);
		const M = new Array(N);

		for (let i = 0; i < N; i++) {
			M[i] = new Array(16);
			for (let j = 0; j < 16; j++) {
				M[i][j] =
					(input.charCodeAt(i * 64 + j * 4 + 0) << 24) |
					(input.charCodeAt(i * 64 + j * 4 + 1) << 16) |
					(input.charCodeAt(i * 64 + j * 4 + 2) << 8) |
					(input.charCodeAt(i * 64 + j * 4 + 3) << 0);
			}
		}

		const lenHi = ((input.length - 1) * 8) / Math.pow(2, 32);
		const lenLo = ((input.length - 1) * 8) >>> 0;
		M[N - 1][14] = Math.floor(lenHi);
		M[N - 1][15] = lenLo;

		for (let i = 0; i < N; i++) {
			const W = new Array(64);

			for (let t = 0; t < 16; t++) W[t] = M[i][t];
			for (let t = 16; t < 64; t++) {
				W[t] =
					(Hashing.σ1(W[t - 2]) +
						W[t - 7] +
						Hashing.σ0(W[t - 15]) +
						W[t - 16]) >>>
					0;
			}

			let a = H[0],
				b = H[1],
				c = H[2],
				d = H[3],
				e = H[4],
				f = H[5],
				g = H[6],
				h = H[7];

			for (let t = 0; t < 64; t++) {
				const T1 =
					h + Hashing.Σ1(e) + Hashing.Choice(e, f, g) + K[t] + W[t];
				const T2 = Hashing.Σ0(a) + Hashing.Majority(a, b, c);
				h = g;
				g = f;
				f = e;
				e = (d + T1) >>> 0;
				d = c;
				c = b;
				b = a;
				a = (T1 + T2) >>> 0;
			}
			H[0] = (H[0] + a) >>> 0;
			H[1] = (H[1] + b) >>> 0;
			H[2] = (H[2] + c) >>> 0;
			H[3] = (H[3] + d) >>> 0;
			H[4] = (H[4] + e) >>> 0;
			H[5] = (H[5] + f) >>> 0;
			H[6] = (H[6] + g) >>> 0;
			H[7] = (H[7] + h) >>> 0;
		}

		for (let h = 0; h < H.length; h++)
			H[h] = ('00000000' + H[h].toString(16)).slice(-8);
		// attempt to remove the warning here and die

		const separator = options.outputFormat == 'hex-w' ? ' ' : '';

		return H.join(separator);

		/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

		function utf8Encode(str: string) {
			try {
				return new TextEncoder()
					.encode(str)
					.reduce(
						(prev, curr) => prev + String.fromCharCode(curr),
						'',
					);
			} catch (e) {
				return decodeURIComponent(encodeURIComponent(str));
			}
		}

		function hexBytesToString(hexStr) {
			const str = hexStr.replace(' ', '');
			return str == ''
				? ''
				: str
						.match(/.{2}/g)
						.map((byte) => String.fromCharCode(parseInt(byte, 16)))
						.join('');
		}
	}

	/**
	 * Calculates the SHA1 hash of the given input.
	 * Please dont use this for security reasons because it is insecure.
	 *
	 * @param {any} input - The input to be hashed.
	 * @param {Object} options - Optional configuration options.
	 * @param {string} options.inputFormat - The format of the input. Valid values are 'string' or 'hex-bytes'.
	 * @param {string} options.outputFormat - The format of the output hash. Valid values are 'hex' or 'hex-w'.
	 * @return {string} The SHA1 hash of the input.
	 */
	static SHA1(
		input: string,
		options: {
			inputFormat: 'string' | 'hex-bytes';
			outputFormat: 'hex' | 'hex-w';
		} = { inputFormat: 'string', outputFormat: 'hex' },
	) {
		switch (options.inputFormat) {
			default:
			case 'string':
				input = Hashing.utf8Encode(input);
				break;
			case 'hex-bytes':
				input = Hashing.hexBytesToString(input);
				break;
		}

		const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];

		const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

		input += String.fromCharCode(0x80);

		const l = input.length / 4 + 2;
		const N = Math.ceil(l / 16);
		const M = new Array(N);

		for (let i = 0; i < N; i++) {
			M[i] = new Array(16);
			for (let j = 0; j < 16; j++) {
				M[i][j] =
					(input.charCodeAt(i * 64 + j * 4 + 0) << 24) |
					(input.charCodeAt(i * 64 + j * 4 + 1) << 16) |
					(input.charCodeAt(i * 64 + j * 4 + 2) << 8) |
					(input.charCodeAt(i * 64 + j * 4 + 3) << 0);
			}
		}

		M[N - 1][14] = ((input.length - 1) * 8) / Math.pow(2, 32);
		M[N - 1][14] = Math.floor(M[N - 1][14]);
		M[N - 1][15] = ((input.length - 1) * 8) & 0xffffffff;

		for (let i = 0; i < N; i++) {
			const W = new Array(80);

			for (let t = 0; t < 16; t++) W[t] = M[i][t];
			for (let t = 16; t < 80; t++)
				W[t] = Hashing.ROTL(
					W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16],
					1,
				);

			let a = H[0],
				b = H[1],
				c = H[2],
				d = H[3],
				e = H[4];

			for (let t = 0; t < 80; t++) {
				const s = Math.floor(t / 20);
				const T =
					(Hashing.ROTL(a, 5) +
						Hashing.f(s, b, c, d) +
						e +
						K[s] +
						W[t]) >>>
					0;
				e = d;
				d = c;
				c = Hashing.ROTL(b, 30) >>> 0;
				b = a;
				a = T;
			}

			H[0] = (H[0] + a) >>> 0;
			H[1] = (H[1] + b) >>> 0;
			H[2] = (H[2] + c) >>> 0;
			H[3] = (H[3] + d) >>> 0;
			H[4] = (H[4] + e) >>> 0;
		}
		for (let h = 0; h < H.length; h++)
			H[h] = ('00000000' + H[h].toString(16)).slice(-8);

		const separator = options.outputFormat == 'hex-w' ? ' ' : '';

		return H.join(separator);
	}

	/**
	 * Calculates the SHA512 hash of the given input string.
	 *
	 * @param {string} input - The input string to be hashed.
	 * @param {object} options - The options for input and output format.
	 * @param {string} options.inputFormat - The format of the input string. Can be 'string' or 'hex-bytes'.
	 * @param {string} options.outputFormat - The format of the output hash. Can be 'hex' or 'hex-w'.
	 * @returns {string} - The SHA512 hash of the input string in the specified output format.
	 */
	static SHA512(
		input: string,
		options: {
			inputFormat: 'string' | 'hex-bytes';
			outputFormat: 'hex' | 'hex-w';
		} = { inputFormat: 'string', outputFormat: 'hex' },
	) {
		switch (options.inputFormat) {
			default:
			case 'string':
				input = Hashing.utf8Encode(input);
				break;
			case 'hex-bytes':
				input = Hashing.hexBytesToString(input);
				break;
		}

		// constants [§4.2.3]
		const K = [
			'428a2f98d728ae22',
			'7137449123ef65cd',
			'b5c0fbcfec4d3b2f',
			'e9b5dba58189dbbc',
			'3956c25bf348b538',
			'59f111f1b605d019',
			'923f82a4af194f9b',
			'ab1c5ed5da6d8118',
			'd807aa98a3030242',
			'12835b0145706fbe',
			'243185be4ee4b28c',
			'550c7dc3d5ffb4e2',
			'72be5d74f27b896f',
			'80deb1fe3b1696b1',
			'9bdc06a725c71235',
			'c19bf174cf692694',
			'e49b69c19ef14ad2',
			'efbe4786384f25e3',
			'0fc19dc68b8cd5b5',
			'240ca1cc77ac9c65',
			'2de92c6f592b0275',
			'4a7484aa6ea6e483',
			'5cb0a9dcbd41fbd4',
			'76f988da831153b5',
			'983e5152ee66dfab',
			'a831c66d2db43210',
			'b00327c898fb213f',
			'bf597fc7beef0ee4',
			'c6e00bf33da88fc2',
			'd5a79147930aa725',
			'06ca6351e003826f',
			'142929670a0e6e70',
			'27b70a8546d22ffc',
			'2e1b21385c26c926',
			'4d2c6dfc5ac42aed',
			'53380d139d95b3df',
			'650a73548baf63de',
			'766a0abb3c77b2a8',
			'81c2c92e47edaee6',
			'92722c851482353b',
			'a2bfe8a14cf10364',
			'a81a664bbc423001',
			'c24b8b70d0f89791',
			'c76c51a30654be30',
			'd192e819d6ef5218',
			'd69906245565a910',
			'f40e35855771202a',
			'106aa07032bbd1b8',
			'19a4c116b8d2d0c8',
			'1e376c085141ab53',
			'2748774cdf8eeb99',
			'34b0bcb5e19b48a8',
			'391c0cb3c5c95a63',
			'4ed8aa4ae3418acb',
			'5b9cca4f7763e373',
			'682e6ff3d6b2b8a3',
			'748f82ee5defb2fc',
			'78a5636f43172f60',
			'84c87814a1f0ab72',
			'8cc702081a6439ec',
			'90befffa23631e28',
			'a4506cebde82bde9',
			'bef9a3f7b2c67915',
			'c67178f2e372532b',
			'ca273eceea26619c',
			'd186b8c721c0c207',
			'eada7dd6cde0eb1e',
			'f57d4f7fee6ed178',
			'06f067aa72176fba',
			'0a637dc5a2c898a6',
			'113f9804bef90dae',
			'1b710b35131c471b',
			'28db77f523047d84',
			'32caab7b40c72493',
			'3c9ebe0a15c9bebc',
			'431d67c49c100d4c',
			'4cc5d4becb3e42b6',
			'597f299cfc657e2a',
			'5fcb6fab3ad6faec',
			'6c44198c4a475817',
		].map((k) => Long.fromString(k));

		const H = [
			'6a09e667f3bcc908',
			'bb67ae8584caa73b',
			'3c6ef372fe94f82b',
			'a54ff53a5f1d36f1',
			'510e527fade682d1',
			'9b05688c2b3e6c1f',
			'1f83d9abfb41bd6b',
			'5be0cd19137e2179',
		].map((h) => Long.fromString(h));

		input += String.fromCharCode(0x80);

		const l = input.length / 8 + 2;
		const N = Math.ceil(l / 16);
		const M = new Array(N);

		for (let i = 0; i < N; i++) {
			M[i] = new Array(16);
			for (let j = 0; j < 16; j++) {
				const lo =
					(input.charCodeAt(i * 128 + j * 8 + 0) << 24) |
					(input.charCodeAt(i * 128 + j * 8 + 1) << 16) |
					(input.charCodeAt(i * 128 + j * 8 + 2) << 8) |
					(input.charCodeAt(i * 128 + j * 8 + 3) << 0);
				const hi =
					(input.charCodeAt(i * 128 + j * 8 + 4) << 24) |
					(input.charCodeAt(i * 128 + j * 8 + 5) << 16) |
					(input.charCodeAt(i * 128 + j * 8 + 6) << 8) |
					(input.charCodeAt(i * 128 + j * 8 + 7) << 0);
				M[i][j] = new Long(lo, hi);
			}
		}

		M[N - 1][14] = new Long(0, 0);

		const lenHi = ((input.length - 1) * 8) / Math.pow(2, 32);
		const lenLo = ((input.length - 1) * 8) >>> 0;
		M[N - 1][15] = new Long(Math.floor(lenHi), lenLo);

		for (let i = 0; i < N; i++) {
			const W = new Array(80);

			for (let t = 0; t < 16; t++) {
				W[t] = M[i][t];
			}
			for (let t = 16; t < 80; t++) {
				W[t] = Hashing.Longσ1(W[t - 2])
					.add(W[t - 7])
					.add(Hashing.Longσ0(W[t - 15]))
					.add(W[t - 16]);
			}

			let a = H[0],
				b = H[1],
				c = H[2],
				d = H[3],
				e = H[4],
				f = H[5],
				g = H[6],
				h = H[7];

			for (let t = 0; t < 80; t++) {
				const T1 = h
					.add(Hashing.LongΣ1(e))
					.add(Hashing.LongChoice(e, f, g))
					.add(K[t])
					.add(W[t]);
				const T2 = Hashing.LongΣ0(a).add(Hashing.LongMajority(a, b, c));
				h = g;
				g = f;
				f = e;
				e = d.add(T1);
				d = c;
				c = b;
				b = a;
				a = T1.add(T2);
			}

			H[0] = H[0].add(a);
			H[1] = H[1].add(b);
			H[2] = H[2].add(c);
			H[3] = H[3].add(d);
			H[4] = H[4].add(e);
			H[5] = H[5].add(f);
			H[6] = H[6].add(g);
			H[7] = H[7].add(h);
		}

		for (let h = 0; h < H.length; h++) {
			H[h] = H[h].toString();
		}

		const separator = options.outputFormat == 'hex-w' ? ' ' : '';

		return H.join(separator);
	}

	/**
	 * Generates SHA-3 / Keccak hash of message M.
	 *
	 * @param   {number} r - Bitrate 'r' (b−c)
	 * @param   {number} c - Capacity 'c' (b−r), md length × 2
	 * @param   {string} M - Message
	 * @param   {Object} options - padding: sha-3 / keccak; inputFormat: string / hex; outFormat: hex / hex-b / hex-w.
	 * @returns {string} Hash as hex-encoded string.
	 *
	 */
	static keccak1600(
		bitrate: number,
		capacity: number,
		input: string,
		options: {
			padding: 'sha-3' | 'keccak';
			inputFormat: 'string' | 'hex-bytes';
			outFormat: 'hex' | 'hex-b' | 'hex-w';
		} = { padding: 'sha-3', inputFormat: 'string', outFormat: 'hex' },
	): string {
		const l = capacity / 2; // message digest output length in bits

		let string = null;
		switch (options.inputFormat) {
			default: // convert string to UTF-8 to ensure all characters fit within single byte
			case 'string':
				string = utf8Encode(input);
				break;
			case 'hex-bytes':
				string = hexBytesToString(input);
				break; // mostly for NIST test vectors
		}

		/**
		 * Keccak state is a 5 × 5 x w array of bits (w=64 for keccak-f[1600] / SHA-3).
		 *
		 * Here, it is implemented as a 5 × 5 array of BigInt. The first subscript (x) defines the
		 * sheet, the second (y) defines the plane, together they define a lane. Slices, columns,
		 * and individual bits are obtained by bit operations on the BigInt representing the lane
		 * (note BigInt is the JavaScript equivalent of Int64 / long).
		 */
		const state = [[], [], [], [], []];
		for (let x = 0; x < 5; x++) {
			for (let y = 0; y < 5; y++) {
				state[x][y] = 0;
			}
		}

		// append padding (for SHA-3 the domain is 01 hence M||0110*1) [FIPS §B.2]
		const q = bitrate / 8 - (string.length % (bitrate / 8));
		if (q == 1) {
			string += String.fromCharCode(
				options.padding == 'keccak' ? 0x81 : 0x86,
			);
		} else {
			string += String.fromCharCode(
				options.padding == 'keccak' ? 0x01 : 0x06,
			);
			string += String.fromCharCode(0x00).repeat(q - 2);
			string += String.fromCharCode(0x80);
		}

		// absorbing phase: work through input message in blocks of r bits (r/64 longs, r/8 bytes)

		const w = 64; // for keccak-f[1600]
		const blocksize = (bitrate / w) * 8; // block size in bytes (≡ utf-8 characters)

		for (let i = 0; i < string.length; i += blocksize) {
			for (let j = 0; j < bitrate / w; j++) {
				const i64 =
					(BigInt(string.charCodeAt(i + j * 8 + 0)) << 0n) +
					(BigInt(string.charCodeAt(i + j * 8 + 1)) << 8n) +
					(BigInt(string.charCodeAt(i + j * 8 + 2)) << 16n) +
					(BigInt(string.charCodeAt(i + j * 8 + 3)) << 24n) +
					(BigInt(string.charCodeAt(i + j * 8 + 4)) << 32n) +
					(BigInt(string.charCodeAt(i + j * 8 + 5)) << 40n) +
					(BigInt(string.charCodeAt(i + j * 8 + 6)) << 48n) +
					(BigInt(string.charCodeAt(i + j * 8 + 7)) << 56n);
				const x = j % 5;
				const y = Math.floor(j / 5);
				state[x][y] = state[x][y] ^ i64;
			}
			Hashing.keccak_f_1600(state);
		}

		// squeezing phase: first l bits of state are message digest

		// transpose state, concatenate (little-endian) hex values, & truncate to l bits
		let md = transpose(state)
			.map((plane) =>
				plane
					.map((lane) =>
						lane
							.toString(16)
							.padStart(16, '0')
							.match(/.{2}/g)
							.reverse()
							.join(''),
					)
					.join(''),
			)
			.join('')
			.slice(0, l / 4);

		// if required, group message digest into bytes or words
		if (options.outFormat == 'hex-b') md = md.match(/.{2}/g).join(' ');
		if (options.outFormat == 'hex-w') md = md.match(/.{8,16}/g).join(' ');

		return md;

		/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

		function transpose(array) {
			// to iterate across y (columns) before x (rows)
			return array.map((row, r) => array.map((col) => col[r]));
		}

		function utf8Encode(str) {
			try {
				return new TextEncoder()
					.encode(str)
					.reduce(
						(prev, curr) => prev + String.fromCharCode(curr),
						'',
					);
			} catch (e) {
				// no TextEncoder available?
				return unescape(encodeURIComponent(str)); // monsur.hossa.in/2012/07/20/utf-8-in-javascript.html
			}
		}

		function hexBytesToString(hexStr) {
			// convert string of hex numbers to a string of chars (eg '616263' -> 'abc').
			const str = hexStr.replace(' ', ''); // allow space-separated groups
			return str == ''
				? ''
				: str
						.match(/.{2}/g)
						.map((byte) => String.fromCharCode(parseInt(byte, 16)))
						.join('');
		}
	}

	/**
	 * Applies permutation Keccak-f[1600] to state a.
	 *
	 * @param {BigInt[][]} a - State to be permuted (5 × 5 array of BigInt).
	 *
	 * @private
	 */
	static keccak_f_1600(a) {
		const nRounds = 24;
		const RC = [
			0x0000000000000001n,
			0x0000000000008082n,
			0x800000000000808an,
			0x8000000080008000n,
			0x000000000000808bn,
			0x0000000080000001n,
			0x8000000080008081n,
			0x8000000000008009n,
			0x000000000000008an,
			0x0000000000000088n,
			0x0000000080008009n,
			0x000000008000000an,
			0x000000008000808bn,
			0x800000000000008bn,
			0x8000000000008089n,
			0x8000000000008003n,
			0x8000000000008002n,
			0x8000000000000080n,
			0x000000000000800an,
			0x800000008000000an,
			0x8000000080008081n,
			0x8000000000008080n,
			0x0000000080000001n,
			0x8000000080008008n,
		];

		for (let r = 0; r < nRounds; r++) {
			const C = [],
				D = [];
			for (let x = 0; x < 5; x++) {
				C[x] = a[x][0];
				for (let y = 1; y < 5; y++) {
					C[x] = C[x] ^ a[x][y];
				}
			}
			for (let x = 0; x < 5; x++) {
				D[x] = C[(x + 4) % 5] ^ ROT(C[(x + 1) % 5], 1);
				for (let y = 0; y < 5; y++) {
					a[x][y] = a[x][y] ^ D[x];
				}
			}

			let [x, y] = [1, 0];
			let current = a[x][y];
			for (let t = 0; t < 24; t++) {
				const [X, Y] = [y, (2 * x + 3 * y) % 5];
				const tmp = a[X][Y];
				a[X][Y] = ROT(current, (((t + 1) * (t + 2)) / 2) % 64);
				current = tmp;
				[x, y] = [X, Y];
			}

			for (let y = 0; y < 5; y++) {
				const C = [];
				for (let x = 0; x < 5; x++) C[x] = a[x][y];
				for (let x = 0; x < 5; x++) {
					a[x][y] = C[x] ^ (~C[(x + 1) % 5] & C[(x + 2) % 5]);
				}
			}

			a[0][0] = a[0][0] ^ RC[r];
		}

		function ROT(a, d) {
			return BigInt.asUintN(64, (a << BigInt(d)) | (a >> BigInt(64 - d)));
		}
	}

	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

	static f(s, x, y, z) {
		switch (s) {
			case 0:
				return (x & y) ^ (~x & z);
			case 1:
				return x ^ y ^ z;
			case 2:
				return (x & y) ^ (x & z) ^ (y & z);
			case 3:
				return x ^ y ^ z;
		}
	}

	static ROTR(n: number, x: number): number {
		return (x >>> n) | (x << (32 - n));
	}

	static ROTL(x: number, n: number) {
		return (x << n) | (x >>> (32 - n));
	}

	static Σ0(x: number): number {
		return Hashing.ROTR(2, x) ^ Hashing.ROTR(13, x) ^ Hashing.ROTR(22, x);
	}
	static Σ1(x: number): number {
		return Hashing.ROTR(6, x) ^ Hashing.ROTR(11, x) ^ Hashing.ROTR(25, x);
	}

	static σ0(x: number): number {
		return Hashing.ROTR(7, x) ^ Hashing.ROTR(18, x) ^ (x >>> 3);
	}

	static σ1(x: number): number {
		return Hashing.ROTR(17, x) ^ Hashing.ROTR(19, x) ^ (x >>> 10);
	}

	static Choice(x: number, y: number, z: number): number {
		return (x & y) ^ (~x & z);
	}

	static Majority(x: number, y: number, z: number): number {
		return (x & y) ^ (x & z) ^ (y & z);
	}

	static LongROTR(x: Long, n: number): Long {
		// emulates (x >>> n) | (x << (64-n)
		if (n == 0) return x;
		if (n == 32) return new Long(x.lo, x.hi);

		let hi = x.hi,
			lo = x.lo;

		if (n > 32) {
			[lo, hi] = [hi, lo]; // swap hi/lo
			n -= 32;
		}

		const hi1 = (hi >>> n) | (lo << (32 - n));
		const lo1 = (lo >>> n) | (hi << (32 - n));

		return new Long(hi1, lo1);
	}

	static LongΣ0(x: Long) {
		return Hashing.LongROTR(x, 28)
			.xor(Hashing.LongROTR(x, 34))
			.xor(Hashing.LongROTR(x, 39));
	}
	static LongΣ1(x: Long) {
		return Hashing.LongROTR(x, 14)
			.xor(Hashing.LongROTR(x, 18))
			.xor(Hashing.LongROTR(x, 41));
	}
	static Longσ0(x: Long) {
		return Hashing.LongROTR(x, 1).xor(Hashing.LongROTR(x, 8)).xor(x.shr(7));
	}
	static Longσ1(x: Long) {
		return Hashing.LongROTR(x, 19)
			.xor(Hashing.LongROTR(x, 61))
			.xor(x.shr(6));
	}
	static LongChoice(x: Long, y: Long, z: Long) {
		return x.and(y).xor(x.not().and(z));
	}
	static LongMajority(x: Long, y: Long, z: Long) {
		return x.and(y).xor(x.and(z)).xor(y.and(z));
	}

	/**
	 * Encodes a given string to UTF-8 format.
	 *
	 * @param {string} str - The string to be encoded.
	 * @return {string} The encoded string in UTF-8 format.
	 */
	static utf8Encode(str: string) {
		try {
			return new TextEncoder()
				.encode(str)
				.reduce((prev, curr) => prev + String.fromCharCode(curr), '');
		} catch (e) {
			return decodeURIComponent(encodeURIComponent(str));
		}
	}

	/**
	 * Converts a hexadecimal string to a string of ASCII characters.
	 *
	 * @param {string} hexStr - The hexadecimal string to convert.
	 * @return {string} The converted string of ASCII characters.
	 */
	static hexBytesToString(hexStr) {
		const str = hexStr.replace(' ', '');
		return str == ''
			? ''
			: str
					.match(/.{2}/g)
					.map((byte) => String.fromCharCode(parseInt(byte, 16)))
					.join('');
	}
}
