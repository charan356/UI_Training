var ans

//function

function doFirst(){
    document.write('first function');
    doSecond();

}

function doSecond(){
    document.write('second function');
    doFirst();
}

doFirst();


// global scope and local scope.

var g1 = "kelly";
function spit(){
    document.write(g1);
}
spit();
document.write(g1);
