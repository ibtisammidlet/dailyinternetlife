var fs = require('fs');
var uncomment = require('./uncomment.js');
var path = require('path');

var jsonFilePath = path.join(__dirname, '..', '..', '..', './alertgene/alert-gene/base.json'); // Build the correct file path
var str = fs.readFileSync(jsonFilePath, 'utf8'); // Read the content of the JSON file

var res = uncomment(str, {
    removeEmptyLines: false
});

fs.writeFileSync('../alertgene.uncom.json', res, 'utf8'); // Write the resulting data to a file


/* following my standards ended in closed route
import { createRequire } from "module";
const require = createRequire(import.meta.url);

import fs from 'fs';
import path from 'path';

const jsonFilePath = path.join(path.dirname(import.meta.url), '..', 'data.json'); // Build the correct file path

const uncommentModule = await import('./uncomment.js'); // Dynamically import the uncomment module
const uncomment = uncommentModule.default || uncommentModule; // Retrieve the uncomment function from the module

const json = require(jsonFilePath); // Use require to import the JSON data

const res = uncomment(json, {
    removeEmptyLines: false
});

fs.writeFileSync('budlet/data.uncom.json', JSON.stringify(res), 'utf8'); // Write the resulting data to a file
*/