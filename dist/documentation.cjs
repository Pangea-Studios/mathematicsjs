'use strict';
const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');
const path = require('path');
const glob = require('glob')


const outputDir = 'docs';

/* get template data */
const templateData = jsdoc2md.getTemplateDataSync({ files: 'index.js' });

/* reduce templateData to an array of class names */
const classNames = templateData.reduce((classNames, identifier) => {
    if (identifier.kind === 'class') classNames.push(identifier.name);
    return classNames;
}, []);

/* create a documentation file for each class */
for (const className of classNames) {
    const template = `{{#class name="${className}"}}{{>docs}}{{/class}}`;
    console.log(`rendering ${className}, template: ${template}`);
    const output = jsdoc2md.renderSync({
        data: templateData,
        template: template,
    });
    fs.writeFileSync(path.resolve(outputDir, `${className}.md`), output);
}
