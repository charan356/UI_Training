
//Interview question

// object oriented programming in javascript is different than most programming languages

// All the properties and methods inside the objects are name value pairs.


/*
Different ways of creating an object in javascript?
1. object constructor
2. object literal notation
3. constructor function

*/


//Object Creation
var jack = new Object();
jack.age = 19;
jack.getAge = function getAge(){
    return this.age;
};
document.write( jack.getAge() );






//Object Literal Notation

var jack = {
    age: 19,
    getAge: function getAge()
    {
        return this.age;
    }
}
document.write( jack.getAge() );


//Constructor Function


function Person( name, age )
{
    this.name = name;
    this.age = age;
    this.getName = function getName(){
        return this.name;
    }
    this.getAge = function getAge(){
        return this.age;
    }
}


var jack = new Person( 'Jack', 19 );
document.write( jack.getName() + '<br />' );
var sam = new Person( 'Sam', 22 );
document.write( sam.getName() + '<br />' );