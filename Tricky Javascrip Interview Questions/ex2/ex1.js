


// String.prototype.repeatify || Another important point here is to demonstrate that you are aware about
// how to not override possible already defined functions
/*
String.prototype.repeatify = String.prototype.repeatify || function(times) {
        var str = '';

        for (var i = 0; i < times; i++) {
            str += this;
        }

        return str;
    };

console.log('hello'.repeatify(3));

*/


//Part2
/*

test();

function test() {

    //console.log(a1);
    console.log(a);
    console.log(foo());
    var a = 1;
    //window.a1=1;

    function foo() {
        return 2;
    }
}

*/


//part3

/*var fullname = 'John Doe';
var obj = {
    fullname: 'Colin Ihrig',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
            return this.fullname;
        }
    }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());*/




//
//function foo1()
//{
//    return {
//        bar: "hello"
//    };
//}
//
//function foo2()
//{
//    return
//    {
//        bar: "hello"
//    };
//}
//
//
//console.log(foo1());
//console.log(foo2());



var num = 10,
    name = "Addy Osmani",
    obj1 = {
        value: "first value"
    },
    obj2 = {
        value: "second value"
    },
    obj3 = obj2;

function change(num, name, obj1, obj2) {
    num = num * 10;
    name = "Paul Irish";
    obj1 = obj2;
    obj2.value = "new value";
}

change(num, name, obj1, obj2);

console.log(num); // 10
console.log(name);// "Addy Osmani"
console.log(obj1.value);//"first value"
console.log(obj2.valuee);//"new value"
console.log(obj3.valuee);//"new value"


















