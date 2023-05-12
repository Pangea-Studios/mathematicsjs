'use strict';
const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');
const path = require('path');

const outputDir = 'docs/classes';
const outputDir1 = 'docs/functions';

/* get template data */
const templateData = jsdoc2md.getTemplateDataSync({ files: 'dist/index.js' });
console.log(templateData);

/* reduce templateData to an array of class names */
const classNames = templateData.reduce((classNames, identifier) => {
	if (identifier.kind === 'class') classNames.push(identifier.name);
	return classNames;
}, []);

const functionNames = templateData.reduce((functionNames, identifier) => {
	if (identifier.kind === 'function' && identifier.scope === 'global') functionNames.push(identifier.name);
	return functionNames;
}, []);

/* create a documentation file for each class */
for (const className of classNames) {
	const template = `{{#class name="${className}"}}{{>docs}}{{/class}}`;
	console.log(`rendering ${className}, template: ${template}`);
	const output = jsdoc2md.renderSync({
		data: templateData,
		template: template,
	});
	try {
		fs.writeFileSync(
			path.resolve(__dirname + `/../${outputDir}/${className}.md`),
			output,
			{ encoding: 'utf-8', flag: 'w+' },
		);
	} catch (err) {
		console.log(err);
	}
}

for (const functionName of functionNames) {
	const template = `{{#function name="${functionName}"}}{{>docs}}{{/function}}`;
	console.log(`rendering ${functionName}, template: ${template}`);
	const output = jsdoc2md.renderSync({
		data: templateData,
		template: template,
	});
	try {
		fs.writeFileSync(
			path.resolve(__dirname + `/../${outputDir1}/${functionName}.md`),
			output,
			{ encoding: 'utf-8', flag: 'w+' },
		);
	} catch (err) {
		console.log(err);
	}
}
