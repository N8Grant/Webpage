let md = require('md5');
let fs = require('fs');
table = [];
for (let i =0; i <= 30000; i++){
    table.push([i,md(i.toString())]);
}
fs.writeFileSync("foo", table);