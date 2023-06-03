import { Averages } from '../dist/index.js';

test('Mode', () => {
	expect(Averages.mode([1,2,1,2,1])).toBe(1);
});