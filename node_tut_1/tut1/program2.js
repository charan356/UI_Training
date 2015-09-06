/**
 * Created by sboyapati on 9/6/15.
 */
//print the sum of numbers

var result = 0

console.log('argv[0]',process.argv[0])
console.log('argv[1]',process.argv[1])
console.log('argv[2]',process.argv[2])

for (var i = 2; i < process.argv.length; i++){
    result += Number(process.argv[i]);
    //console.log('length',process.argv.length);


}

console.log(result)