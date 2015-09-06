/**
 * Created by sboyapati on 9/6/15.
 */
var fs = require('fs')

var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)