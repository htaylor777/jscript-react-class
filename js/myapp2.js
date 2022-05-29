
function makeGreeting(language) {

    var firstname = document.getElementById('fname').value;
    var lastname = document.getElementById('lname').value;
    // alert("fn: " + firstname + ' ' + lastname);

    if (language === 'en') {
        var ans = 'Hello ' + firstname + ' ' + lastname;
        document.getElementById("displayjs1").value = ans;
        document.getElementById("displayjs2").value = '';
    }

    if (language === 'es') {
        var ans = 'Hola ' + firstname + ' ' + lastname;
        document.getElementById("displayjs2").value = ans;
        document.getElementById("displayjs1").value = '';
    }
}


function makeGreeting2(language) {

    return function (firstname, lastname) {

        if (language === 'en') {
            var ans = 'Hello ' + firstname + ' ' + lastname;
            document.getElementById("displayjs1").value = '';
            document.getElementById("displayjs1").value = ans;
        }

        if (language === 'es') {
            var ans = 'Hola ' + firstname + ' ' + lastname;
            document.getElementById("displayjs2").value = '';
            document.getElementById("displayjs2").value = ans;
        }
    }
}
var greetEnglish = makeGreeting2('en');
var greetSpanish = makeGreeting2('es');

function procGreetings() {
    var firstname = document.getElementById('fname').value;
    var lastname = document.getElementById('lname').value;
    greetEnglish(firstname, lastname);
    greetSpanish(firstname, lastname);
}


function tellDone(callback) {
    var a = 'hello';
    //  document.getElementById("displayjs2").value = a;
    callback();

}

tellDone(function () {
    alert("callback?");

});


tellDone(function () {
    document.getElementById("displayjs2").value = 'callback?'
    console.log('i am done');

});

//-------------functional programming 

function mapForEach(arr, fn) {

    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i])
        )
    };
    return newArr;
}

var arr1 = [1, 2, 3];
console.log('multiply by 2 ech array element');
var arr2 = mapForEach(arr1, function (item) {
    return item * 2;
});

console.log(arr2);

//................limiter...................
var arr7 = [1, 2, 3, 4, 5, 6, 7];

// helper function to setup the limiter
var checkPastLimit = function (limiter, item) {
    return item > limiter;
}

// returns the ouptput as boolean t-f
var arr9 = mapForEach(arr7, checkPastLimit.bind(this, 1));
console.log("arr9: " + arr9);

//-----------make a resusable function to do the same thing

var checkPastLinitSimplified = function (limiter) {
    return function (limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
};

var arr10 = mapForEach(arr7, checkPastLinitSimplified(2));
console.log("arr10: " + arr10);
//------- this keyword --------- 
//  In these examples, this is the guy and guy2 objects:
const guy = {
    firstName: "Johnathen",
    lastName: "DowwTest",
    id: 5566,
    myFunction: function () {
        return this;
    }
};

const guy2 = {
    firstName: "JohnJay",
    lastName: "DoodooHead",
    id: 6778688,
    fullName: function () {
        return this.firstName + ":" + this.lastName;
    }
};

console.log(guy);
console.log(guy2);

//------------call ---------------------------------------   

// example below calls person1.fullName with person2 as an argument, 
//this refers to person2, even if fullName is a method of person1:

const person1 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}


const person2 = {
    firstName: "John",
    lastName: "Doe",
}

// Return "John Doe":
person1.fullName.call(person2);
//-----------------------------------------------------------

//With the bind() method, an object can borrow a method from 
another object.
//This example creates 2 objects (person and member).

The member object borrows the fullname method from the person object:

Example
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);