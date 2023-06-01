'use strict';
const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');
const path = require('path');

const outputDir = 'docs/Classes';
const outputDir1 = 'docs/Functions';
const outputDir2 = 'docs/Enums';

/* get template data */
const templateData = jsdoc2md.getTemplateDataSync({ files: 'dist/index.js' });

/* reduce templateData to an array of class names */
const classNames = templateData.reduce((classNames, identifier) => {
	if (identifier.kind === 'class') classNames.push(identifier.name);
	return classNames;
}, []);

const functionNames = templateData.reduce((functionNames, identifier) => {
	if (identifier.kind === 'function' && identifier.scope === 'global')
		functionNames.push(identifier.name);
	return functionNames;
}, []);

const enumNames = templateData.reduce((enumNames, identifier) => {
    if (identifier.kind === 'enum' && identifier.scope === 'global')
        enumNames.push(identifier.name);
    return enumNames;
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

for (const enumName of enumNames) {
    const template = `{{#enum name="${enumName}"}}{{>docs}}{{/enum}}`;
    console.log(`rendering ${enumName}, template: ${template}`);
    const output = jsdoc2md.renderSync({
        data: templateData,
        template: template,
    });
    try {
        fs.writeFileSync(
            path.resolve(__dirname + `/../${outputDir2}/${enumName}.md`),
            output,
            { encoding: 'utf-8', flag: 'w+' },
        );
    } catch (err) {
        console.log(err);
    }
}