import { Indices } from '../dist/index.mjs';

test('Multiply number to a power', () => {
	expect(Indices.power(2, 3)).toBe(8);
});
