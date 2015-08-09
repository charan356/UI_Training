function alertRandomNumber1() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    alert(randomNumber);
}


goToCoffeShop();
//function cannot start with numbers.


var alertRandomNumber = function () {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    alert(randomNumber);
}

//return a value from the function
function sayHello() {
    return 'Hello world';
}

alert(sayHello());



// get the element by ID;
function isEmailEmpty() {
    var field = document.getElementById('email');
    if (field.value === '') {
        return true;
    }else{
        return false;
    }
}

var fieldTest = isEmailEmpty();


// send information to a function.
function goToCoffeeShop(drink){
    alert(drink + ' ' +'This is your order');
}

//interactive web page with javascript
// modern front end development.

// HTML for the content
// Css for the style
// Javascript for the interactivity;

// window object : location and document.