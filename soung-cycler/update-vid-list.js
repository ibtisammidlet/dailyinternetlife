const PATH = require('path'); 
const dirTree = require('directory-tree');
var fs = require('fs');
var $ = require('jquery');

//* searching dir, of some filetype and then put them in json file
const tree = dirTree('./offline', {extensions:/\.mp4$/}, (item, PATH, stats) => {
//* because the dirTree used \\ instead of / in foler sapartation, i used 2 split and join function to replace it, it needed to be 2 because 1 did not worked for unknown reason
fs.writeFile ("input.json", JSON.stringify(item).split('\\').join('/+').split('/+/+').join('/'), function(err) {
    if (err) throw err;
    console.log('complete');
    }
);
}); 