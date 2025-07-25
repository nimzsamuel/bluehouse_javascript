//2.1 exercise

// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}
q1();
// alerts 3

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}
q2();
q22();
//alerts 5

//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}
q3();
q32();
//alerts 'hello'

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}
alert(a);
// alerts 1


//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);
//alerts 5 twice 

//4.2 exercise

//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

// var experiencePoints = winBattle() ? 10 : 1;


//Using this function, answer the questions below:
function moveCommand(direction) { 
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}


//#2 return value when moveCommant("forward"); 'undefined'

//#3 return value when moveCommant("back"); 'you arrived home'

//#4 return value when moveCommant("right"); 'you found the river'

//#5 return value when moveCommant("left"); 'undifined'

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

function fruitColor(fruit) {
    switch (fruit) {
        case "guava":
            return "yellow";
        case "apple":
            return "red or green";
        case "pawpaw":
            return "orange";
        case "grape":
            return "purple";
        default:
            return "unknown color";
    }
}

console.log(fruitColor("apple")); 

6.2 exercise3

// change everything below to the newer Javascript!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = test;

//answer
let a = 'test';
const b = true;
const c = 789;

a = 'test'; 



// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

//answer
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

const { firstName, lastName, age, eyeColor } = person;



// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = { 
  a: a,
  b: b,
  c: c
};

//answer
const a = 'test';
const b = true;
const c = 789;

const okObj = { a, b, c };



// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

//answer
const message = `Hello ${firstName}, have I met you before? I think we met in ${city} last summer no???`;


// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}
//answer
const isValidAge = (age = 10) => age;


// Symbol
// Create a symbol: "This is my first Symbol"

// answer
const mySymbol = Symbol("This is my first Symbol");


// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

//answer
const whereAmI = (username, location) => (username && location) ? "I am not lost" : "I am totally lost!";
