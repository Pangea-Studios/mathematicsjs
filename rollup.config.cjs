/* eslint-disable @typescript-eslint/no-var-requires */
const typescript = require('@rollup/plugin-typescript');
const { babel } = require('@rollup/plugin-babel');
const { nodeResolve: resolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const { terser } = require('rollup-plugin-terser');
const dts = require('rollup-plugin-dts').default;
const del = require('rollup-plugin-delete');

const { builtinModules } = require('module');

module.exports = [
	{
		input: 'src/index.ts',
		output: [
			{
				file: `dist/index.cjs`,
				format: 'cjs',
				preferConst: true,
			},
			{
				file: `dist/index.js`,
				format: 'esm',
				preferConst: true,
			},
		],
		plugins: [
			typescript({ tsconfig: './tsconfig.json' }),
			babel({
				babelHelpers: 'bundled',
				exclude: '**/node_modules/**',
			}),
			resolve(),
			commonjs(),
		],
		external: [...builtinModules],
		onwarn: function onwarn(warning, warn) {},
	},
	{
		input: 'dist/dts/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'es' }],
		plugins: [dts(), del({ hook: 'buildEnd', targets: './dist/dts' })],
	},
];
