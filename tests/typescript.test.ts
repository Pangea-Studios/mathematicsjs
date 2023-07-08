import { arrayReplace } from '../dist/index.js';

test('Array Replace', () => {
	expect(arrayReplace([1, 2, 3], [1] , 0, 1)).toStrictEqual([1, 3]);
});
