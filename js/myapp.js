

function showdata() {
    //  alert("I am here");
    var data = "hello now!";
    document.getElementById("displayjs1").value = data;

}


function greet(what) {
    //   alert("greet is here" + what);
    document.getElementById("displayjs1").value = what;

    return function (name) {

        var data = (what + ':' + name);
        // alert("greet is here" + data);
        document.getElementById("displayjs1").value = data;
    }
}
greet('Say What????')('change me');


//closures:
// writes to function j that iterates rather than write to same memory 
//on execution: outputs 0 1 2 0 1 2
function buildFunctions() {

    var array = [];

    for (var i = 0; i < 3; i++) {
        array.push(
            (function (j) {
                return function () {
                    document.getElementById("displayjs1").value = j;
                    console.log(j);
                }
            }(i))
        )
    }
    return array;
}
var fs2 = buildFunctions();
var lt2 = buildFunctions();
fs2[0]();
fs2[1]();
fs2[2]();
lt2[0]();
lt2[1]();
lt2[2]();


//closures:
console.log("using FUNCTIONS:---------------------------------");
// writes to the same memory on execution: outputs 3 3 3 3 3 3 3


function buildFunctions2() {

    var array = [];

    for (var i = 0; i < 3; i++) {
        array.push(
            function () {
                document.getElementById("displayjs2").value = i;
                console.log(i);
            }
        )
    }
    return array;
}
var fs = buildFunctions2();
var lt = buildFunctions2();
fs[0]();
fs[1]();
fs[2]();
lt[0]();
lt[1]();
lt[2]();

//--------bind ------------------------------------------------
console.log("using BIND::---------------------------------");


var person = {
    fname: 'Lawrenece',
    lname: 'Taylor',
    getFullName: function () {

        var fullname = this.fname + ' ' + this.lname;
        return fullname;
    }
}

var logName = function (lang1, lang2) {
    document.getElementById("fullname").value = 'Logged:' + this.getFullName();
    document.getElementById("fname").value = lang1;
    document.getElementById("lname").value = lang2;
    console.log('Logged:' + this.getFullName());
    console.log('Lang Arguments Passed: ' + lang1 + ' ' + lang2);

}

var logPersonName = logName.bind(person);

logPersonName('English', 'French');

// ---------underscore lib ----------------------
console.log("using UNDERSCORE Library using .map:----------------------");

var arrnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr12 = _.map(arrnum, function (item) {
    return item + 10;
});
console.log("underscore: " + arr12);

//---------- OOP Programming --------------------

console.log("OOP Programming:---------------------------------");

function Person(fn, ln) {

    this.firstname = fn;
    this.lastname = ln;
}


var john = new Person('John', 'Taylor');
console.log("Person: " + john.firstname + ' ' + john.lastname);
console.log(john);
//---------------------------------------------------
console.log("PROTOTYPING- FUNCTION CONSTRUCTORS:-------------------------");

String.prototype.isLenghtGreaterThan = function (limit) {
    return this.length > limit;
}

console.log("HELLO!");
console.log("IsJohnGreater?:".isLenghtGreaterThan(30));

//--------ARRAY LOOPING----------------------------------------

console.log("ARRAY LOOPING:---------------------------------");

var arr = ['Jim', 'Bo', 'Buck'];

for (var prop in arr) {
    console.log(prop + ":" + arr[prop]);
}
//safer to use the standard loop rather than the (for in) loop:
for (var i = 0; i < arr.length; i++) {
    console.log(i + ":" + arr[i]);
}

// Remember properties are the numbers i.e. :num->value
//-------------------------------------------------------------

console.log("prototypal inheritence: Object create:------------------------------");

var person = {
    firstname: 'Johnson',
    lastname: 'Powers',
    sayhello: function () {
        console.log('Hi ' + this.firstname + ' ' + this.lastname);
    },
    tellme: function () {
        return "this is the second tier check";
    }
}
var jj = Object.create(person);
console.log(jj);
jj.sayhello();
//--------callback -------------------------------------------

function sayhi(callback) {
    console.log("this is the second B tier check");
    callback();
}

function callback() {
    console.log("this is the third tier check callback function");
}

sayhi(callback);
//---------------------------------------------------------------------------------

var peeps = [
    {
        firstname: 'mookie',
        lastname: 'bets',
        addresses: [
            '123 main st, south las vegas, nv',
            '1228 tessy ave, nv,nv'
        ]
    },
    {
        firstname: 'whoops',
        lastname: 'tuppy',
        addresses: [
            '17 7th Ave, new york, NY',
            'n/a'
        ],
        greeting: function () {
            return 'Hi Dare Dear!'
        }
    }
]
console.log("multiple objects in a var:------------------------------");
console.log(peeps[1].addresses);
console.log(peeps[0].lastname);
console.log(peeps);

//------------JQuery--------------------------------------------

console.log("jQuery----------------------------");
var jq = jQuery("ul.people li");
console.log(jq);
