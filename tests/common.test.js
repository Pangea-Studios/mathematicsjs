const { Indices } = require('../dist/index.cjs');

test('Multiply number to a power', () => {
	expect(Indices.power(2, 3)).toBe(8);
});
