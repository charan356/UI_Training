/**
 * Created by sboyapati on 8/3/15.
 */


//Variables and Types


//popup boxes javascript
comfirm("Hi!");
prompt("Bye!");
alert("Hello");


var myNumber = 3;                   // a number
var myString = "Hello, World!"      // a string
var myBoolean = true;               // a boolean


//Array Declaration
var myArray = [];                    // an array
var myObject = {};                  // an object


// undefined.
var newVariable;
console.log(newVariable); //prints undefined


// null
var emptyVariable = null;
console.log(emptyVariable);


//Array declaration
var myArray = [1, 2, 3];
var theSameArray = new Array(1, 2, 3);

//console.log(myArray[1]);      // prints out 2


//Addressing
var myArray = []
myArray[3] = "hello"
console.log(myArray);


//Arrays
var myStack = [];
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack);
console.log(myStack.pop());
console.log(myStack);


//string manipulation
var name = "John";
console.log("Hello " + name + "!");
console.log("The meaning of life is " + 42);
console.log(42 + " is the meaning of life");

console.log(3 - 5);     // outputs -2
console.log(3 * 5);     // outputs 15
console.log(3 / 5);     // outputs 0.6


//if statement
if (confirm("Are you John Smith?")) {
    console.log("Hello John, how are you?");
} else {
    console.log("Then what is your name?");
}


var myNumber = 42;
if (myNumber == 42) {
    console.log("The number is correct.");
}


// used to alert a dialog box on the browser.
//alert('hello world from javascript');


//using javascript to write into the web page.
document.write('hello world');
document.write('<h1>Welcome to javascript </h1>');

var foo = 'hello world';
var foo = 'hello world';

var foo = function () {
    console.log('hello');
};


var foo = 'hello';

var bar = 'world';

console.log(foo + ' ' + bar); // 'hello world'

2 * 3;
2 / 3;

var i = 1;

var j = ++i;  // pre-increment:  j equals 2; i equals 2
var k = i++;  // post-increment: k equals 2; i equals 3


var foo = 1;
var bar = '2';

// coerce the string to a number
console.log(foo + Number(bar));


// if statement
var foo = true;
var bar = false;

if (bar) {
    // this code will never run
    console.log('hello!');
}

if (bar) {
    // this code won't run
} else {
    if (foo) {
        // this code will run
    } else {
        // this code would run if foo and bar were both false
    }
}


// set foo to 1 if bar is true;
// otherwise, set foo to 0
var foo = bar ? 1 : 0;


switch (foo) {

    case 'bar':
        alert('the value was bar -- yay!');
        break;

    case 'baz':
        alert('boo baz :(');
        break;

    default:
        alert('everything else is just ok');
        break;

}


var stuffToDo = {
    'bar': function () {
        alert('the value was bar -- yay!');
    },

    'baz': function () {
        alert('boo baz :(');
    },

    'default': function () {
        alert('everything else is just ok');
    }
};

if (stuffToDo[foo]) {
    stuffToDo[foo]();
} else {
    stuffToDo['default']();
}


for (var i = 0; i < 5; i++) {
    console.log('try ' + i);
}


var i = 0;
while (i < 100) {

    // This block will be executed 100 times
    console.log('Currently at ' + i);

    i++; // increment i

}


var myArray = ['hello', 'world'];
console.log(myArray.length);   // logs 2

var myArray = ['hello', 'world'];
myArray[1] = 'changed';

var myArray = ['hello', 'world'];
myArray.push('new');

var myArray = ['h', 'e', 'l', 'l', 'o'];
var myString = myArray.join('');   // 'hello'
var mySplit = myString.split('');  // [ 'h', 'e', 'l', 'l', 'o' ]


//Objects:

//object declaration

var emptyObject = {};
var personObject = {
    firstName: "John",
    lastName: "Smith"
}

var personObject = {
    firstName: "John",
    lastName: "Smith"
}
personObject.age = 23;
personObject["salary"] = 14000;


var myObject = {
    sayHello: function () {
        console.log('hello');
    },
    myName: 'Rebecca'
};
myObject.sayHello();            // logs 'hello'
console.log(myObject.myName);   // logs 'Rebecca'


var myObject = {
    validIdentifier: 123,
    'some string': 456,
    99999: 789
};


// Functions

function greet(name) {
    return "Hello " + name + "!";
}

var greet = function (name) {
    return "Hello " + name + "!";
}


function foo() { /* do something */
}
var foo = function () { /* do something */
}



var greet = function (person, greeting) {
    var text = greeting + ', ' + person;
    console.log(text);
};
greet('Rebecca', 'Hello');


var greet = function (person, greeting) {
    var text = greeting + ', ' + person;
    return text;
};

console.log(greet('Rebecca', 'hello'));


var greet = function (person, greeting) {
    var text = greeting + ', ' + person;
    return function () {
        console.log(text);
    };
};


var greeting = greet('Rebecca', 'Hello');
greeting();


(function () {
    var foo = 'Hello world';
})();


console.log(foo);   // undefined!


// complex functions

// Passing an anonymous function as an argument
var myFn = function (fn) {
    var result = fn();
    console.log(result);
};

myFn(function () {
    return 'hello world';
});   // logs 'hello world'


//Passing a named function as an argument

var myFn = function (fn) {
    var result = fn();
    console.log(result);
};

var myOtherFn = function () {
    return 'hello world';
};

myFn(myOtherFn);   // logs 'hello world'


// Testing function.
var myFunction = function () {
    console.log('hello');
};

var myObject = {
    foo: 'bar'
};


// callback function
var callback = function() {
    console.log("Done!");
}

setTimeout(callback, 5000);







var myArray = ['a', 'b', 'c'];

var myString = 'hello';

var myNumber = 3;

typeof myFunction;   // returns 'function'
typeof myObject;     // returns 'object'
typeof myArray;      // returns 'object' -- careful!
typeof myString;     // returns 'string';
typeof myNumber;     // returns 'number'

typeof null;         // returns 'object' -- careful!


if (myArray.push && myArray.slice && myArray.join) {
    // probably an array
    // (this is called "duck typing")
}

if (Object.prototype.toString.call(myArray) === '[object Array]') {
    // Definitely an array!
    // This is widely considered as the most robust way
    // to determine if a specific value is an Array.
}


/// this key word in javascript.


var myObject = {
    sayHello: function () {
        console.log('Hi! My name is ' + this.myName);
    },

    myName: 'Rebecca'
};

var secondObject = {
    myName: 'Colin'
};

myObject.sayHello();                  // logs 'Hi! My name is Rebecca'
myObject.sayHello.call(secondObject); // logs 'Hi! My name is Colin'


// Function created using Function.bind

var myName = 'the global object',

    sayHello = function () {
        console.log('Hi! My name is ' + this.myName);
    },

    myObject = {
        myName: 'Rebecca'
    };

var myObjectHello = sayHello.bind(myObject);

sayHello();       // logs 'Hi! My name is the global object'
myObjectHello();  // logs 'Hi! My name is Rebecca'


// A function being attached to an object at runtime

var myName = 'the global object',

    sayHello = function () {
        console.log('Hi! My name is ' + this.myName);
    },

    myObject = {
        myName: 'Rebecca'
    },

    secondObject = {
        myName: 'Colin'
    };

myObject.sayHello = sayHello;
secondObject.sayHello = sayHello;

sayHello();               // logs 'Hi! My name is the global object'
myObject.sayHello();      // logs 'Hi! My name is Rebecca'
secondObject.sayHello();  // logs 'Hi! My name is Colin'


// Note:

var myNamespace = {
    myObject: {
        sayHello: function () {
            console.log('Hi! My name is ' + this.myName);
        },

        myName: 'Rebecca'
    }
};

var hello = myNamespace.myObject.sayHello;

hello();  // logs 'Hi! My name is undefined'


var myNamespace = {
    myObject: {
        sayHello: function () {
            console.log('Hi! My name is ' + this.myName);
        },

        myName: 'Rebecca'
    }
};

var obj = myNamespace.myObject;

obj.sayHello();  // logs 'Hi! My name is Rebecca'


//Scope
var foo = 'hello';

var sayHello = function () {
    console.log(foo);
};

sayHello();         // logs 'hello'
console.log(foo);   // also logs 'hello'


//Code outside the scope in which a variable was defined does not have access to the variable

var sayHello = function () {
    var foo = 'hello';
    console.log(foo);
};

sayHello();         // logs 'hello'
console.log(foo);   // doesn't log anything


//Variables with the same name can exist in different scopes with different values
var foo = 'world';

var sayHello = function () {
    var foo = 'hello';
    console.log(foo);
};

sayHello();         // logs 'hello'
console.log(foo);   // logs 'world'


//Functions can “see” changes in variable values after the function is defined

var myFunction = function () {
    var foo = 'hello';

    var myFn = function () {
        console.log(foo);
    };

    foo = 'world';

    return myFn;
};

var f = myFunction();
f();  // logs 'world' -- uh oh


///scope insanity
// a self-executing anonymous function
(function () {
    var baz = 1;
    var bim = function () {
        alert(baz);
    };
    bar = function () {
        alert(baz);
    };
})();

console.log(baz);  // baz is not defined outside of the function

bar();  // bar is defined outside of the anonymous function
        // because it wasn't declared with var; furthermore,
        // because it was defined in the same scope as baz,
        // it has access to baz even though other code
        // outside of the function does not

bim();  // bim is not defined outside of the anonymous function,
        // so this will result in an error


//Closures


/* this won't behave as we want it to; */
/* every click will alert 5 */
for (var i = 0; i < 5; i++) {
    $('<p>click me</p>').appendTo('body').click(function () {
        alert(i);
    });
}


//Locking in the value of i with a closure

/* fix: 'close' the value of i inside
 createFunction, so it won't change */
var createFunction = function (i) {
    return function () {
        alert(i);
    };
};

for (var i = 0; i < 5; i++) {
    $('<p>click me</p>').appendTo('body').click(createFunction(i));
}


// Using a closure to access inner and outer object instances simultaneously

var outerObj = {
    myName: 'outer',
    outerFunction: function () {

        // provide a reference to outerObj
        // through innerFunction's closure
        var self = this;

        var innerObj = {
            myName: 'inner',
            innerFunction: function () {
                // logs 'outer inner'
                console.log(self.myName, this.myName);
            }
        };

        innerObj.innerFunction();

        console.log(this.myName); // logs 'outer'
    }
};

outerObj.outerFunction();






// object oriented javascript


function Person(firstName, lastName) {
    // construct the object using the arguments
    this.firstName = firstName;
    this.lastName = lastName;

    // a method which returns the full name
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    }
}

var myPerson = new Person("John", "Smith");
console.log(myPerson.fullName());            // outputs "John Smith"




















