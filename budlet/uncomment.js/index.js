var fs = require('fs');
var uncomment = require('./uncomment.js');

var str = fs.readFileSync(path.join(path.dirname('data.json'), '..'), 'utf8');
console.log(str)
/*
var res = uncomment(str, {
    removeEmptyLines: false
});

fs.writeFileSync('budlet/data.uncom.json', res, 'utf8');
 
*/
