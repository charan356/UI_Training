/*//Closures
 Closures allow you to take your JavaScript skills to the next level.
 Closures are used in almost every JavaScript code you’ve ever seen.
 You’ve probably ended up using it without knowing it. So, what are closures? A closure is a
 function inside a function. So,
 what’s so special about this? Well,
 you can actually access the variables outside of the inner function.
 * */


function outerFunction(val1) {
    function innerFunction(val2) {
        return val1 + val2;
    }

    return innerFunction;
}

var foo = outerFunction('Jasko');
document.write(foo(' Koyn' ) );