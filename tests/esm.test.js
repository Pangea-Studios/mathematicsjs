import { hashing } from '../dist/index.js';

test('SHA512', () => {
	console.log(hashing.SHA512('123'));
});
