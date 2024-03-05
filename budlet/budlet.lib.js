import { createRequire } from "module";
const require = createRequire(import.meta.url);

//const jsonfile = require('jsonfile')
//const file = './data.uncom.json'
//jsonfile.readFile(file, function (err, obj) {
//  if (err) console.error(err)
//  console.dir(obj)
//})

// shortest code possible, step by step code https://you.com/search?q=how+to+load+a+file+the+normal+way+const+jsonfile+%3D+require%28%27jsonfile%27%29%0Aconst+file+%3D+%27.%2Fdata.uncom.json%27%0Ajsonfile.readFile%28file%2C+function+%28err%2C+obj%29+%7B%0A++if+%28err%29+console.error%28err%29%0A++console.dir%28obj%29%0A%7D%29+shortest+code+possible%2C+step+by+step+code&cid=c1_b2697567-f373-4035-bfe8-0246b0f8f69a&tbm=youchat
const fs = require('fs');

// Path to the JSON file
const filePath = './data.uncom.json';

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
// Custom function to encode keys and string values
//    const encodeKeysAndValues = (obj) => {
//      const result = {};
//      for (const key in obj) {
//        if (Object.prototype.hasOwnProperty.call(obj, key)) {
//          const encodedKey = encodeURIComponent(key);
//          const value = obj[key];
//          const encodedValue = typeof value === 'string' ? encodeURIComponent(value) : value;
//          result[encodedKey] = typeof encodedValue === 'object' ? encodeKeysAndValues(encodedValue) : encodedValue;
//        }
//      }
//      return result;
//    };
//
//    const encodedJSON = JSON.stringify(encodeKeysAndValues(data));
//
//    console.log(encodedJSON);

console.log(encodeURIComponent(data)
  .replaceAll(/%3A/g, ':')  // Preserve ':'
  .replaceAll(/%2C/g, ',')  // Preserve ','
  .replaceAll(/%7B/g, '{')  // Preserve '{'
  .replaceAll(/%7D/g, '}')  // Preserve '}'
  .replaceAll(/%22/g, '"')  // Preserve '"'
  .replaceAll(/%20/g, ' ')  // Preserve space
  .replaceAll(/%2F/g, '/')  // Preserve '/'
  .replaceAll(/%5B/g, '[')  // Preserve '['
  .replaceAll(/%5D/g, ']') // Preserve ']'
  .replaceAll(/%0D%0A/g, '\t') // Preserve new tab character
  .replaceAll(/%09/g, '			')
)


  }
});