const { arrayReplace } = require('../dist/index.cjs');

test('Array Replace', () => {
	expect(arrayReplace([1, 2, 3], [1] , 0, 1)).toStrictEqual([1, 3]);
});