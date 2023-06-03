const { Averages } = require('../dist/index.cjs');

test('Mode', () => {
	expect(Averages.mode([1, 2, 1, 2, 1])).toBe(1);
});
