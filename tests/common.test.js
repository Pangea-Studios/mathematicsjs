const { Equations } = require('../dist/index.cjs');

test('evaluate', () => {
	expect(Equations.evaluate('3^x', { x: 1 })).toStrictEqual(3);
});