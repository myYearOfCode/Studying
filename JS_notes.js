7 different data types - 
undefined, 
null, 
boolean, 
string, 
symbol, 
number,
object.

'Infinity is a number in js!'


.length is the way to find a length of a string

strings are immutable, but only kind of. you can overwrite them, but you cannot change the chars with bracket notation,
arrays are mutable, they can be changed in place

.push() adds elements to the end of an array.
.unshift() adds elements to the beginning of an array.
.pop() removes the last element and returns it.
.shift() is like a front-pop. it returns the element as well.

LOOK UP ES6 VAR SCOPING
(let, vs var vs const)

what is it called when a local is created with the same name as a global var? is that shadowing?

typeof is the way to find out the type of an item.
typeof myVar;
>> number





Throwing Errors

function isPositive(a) {
     if (a > 0) {
         return "YES"
    } else if (a < 0) {
         throw new Error("Negative Error")
    } else {
         throw new Error("Zero Error")
    }
}


Math.random() can return a 0 but never quite return a 1
Math.floor() rounds a number down to its nearest whole number.
Math.ceil() rounds up.

generate a random number between two numbers
Math.floor(Math.random() * (max - min + 1)) + min

parseInt converts a string to an int, or returns a NaN

parseInt can also do radix or binary number conversions (ie other bases)

function convertToInteger(str) {
  return parseInt(str,2)
}
convertToInteger("10011")

ternary operators!
condition ? statement-if-true : statement-if-false;
return a > b ? "a is greater" : "b is greater";

ES6

let vs var vs const
let does not allow you to reassign a variable
var can create global variables in root level for statements. let keeps the var 
in the statement and throws an error when accessed outside of it (if not 
defined outside of it).
const is similar to let, but read only once assigned.
A common practice when naming constants is to use all uppercase letters, with 
words separated by an underscore.
...but...
objects and arrays created with const are still mutable, it only prevents you 
from swapping the obj or array entirely for another.

ARROW FUNCTIONS
old way of defining an anon. function

const myFunc = function(args) {
  const myVar = "value";
  return myVar;
}
new way
const myFunc = (args) => {
  const myVar = "value";
  return myVar;
}
single line way with only a return value
const myFunc= () => "value"

passing parameters into an arrow function
put it in parens after an '=' and before the arrow. kinda weird. I know.
// doubles input value and returns it
const doubler = (item) => item * 2;

arrows, maps and filter examples
  const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
  const squareList = (arr) => {
    "use strict";

    const integers = arr.filter((num) => Number.isInteger(num) && num >0) ;
    // filter the array to only include positive integers
    const squaredIntegers = integers.map(x => x*x)
    // map the array onto squaredIntegers and square it.
    return squaredIntegers;
  };
  const squaredIntegers = squareList(realNumberArray);
  console.log(squaredIntegers);

default parameters (introduced in es6)
in short - just give it a value in the function definition and it will use that if nothing is passed in.
  function greeting(name = "Anonymous") {
    return "Hello " + name;
  }
  console.log(greeting("John")); // Hello John
  console.log(greeting()); // Hello Anonymous

rest operator ( ... )
if you use this in a function declaration it allows it to accept any number of 
  arguments. it then puts them in an array
  function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
  }
  console.log(howMany(0, 1, 2)); // You have passed 3 arguments
  console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.
       //another example
  const sum = (function() {
  "use strict";
  return function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
  };
  })();
  console.log(sum(1, 2, 3)); // 6

spread operator
using the ... in front of an array name will 'unpack' it into multiple arguments
spread can be used to concat arrays. is it a good idea? i have no idea.
However, the spread operator only works in-place, like in an argument to a 
function or in an array literal. The following code will not work:
  const spreaded = ...arr; // will throw a syntax error


Destructuring assignment in arrays
much easier syntax to understand
  const [a, b] = [1, 2, 3, 4, 5, 6];
  console.log(a, b); // 1, 2
you can also use commas as unnamed variables when you need to get past them to 
the real data.
  const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
  console.log(a, b, c); // 1, 2, 5

swapping two variables in arrays with Destructuring assignment 
  let a = 8, b = 6;
  (() => {
    "use strict";
    [a,b] = [b,a];
  })();
  console.log(a); // should be 6
  console.log(b); // should be 8

using the rest operator to collect the undestructured elements.
pick the first ones that you want and then use the rest operator to grab until 
the end. this does not work with other number sequences though. (ie first , third and last) :/
  const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
  console.log(a, b); // 1, 2
  console.log(arr); // [3, 4, 5, 7]

  const source = [1,2,3,4,5,6,7,8,9,10];
  function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [a,b, ...arr] = list; // change this
  // change code above this line
  return arr;
  }
  const arr = removeFirstTwo(source);
  console.log(arr); // should be [3,4,5,6,7,8,9,10]
  console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

require() is the old way of importing a module. it brings in all of it. import() allows you to bring in one function at a time.
import { countItems } from "math_array_functions"
import is a non-browser feature. what does that mean?

export() needs to be done if you want to import() your own code. here is how you do that. you can also export variables.
where does it save these to? is this similar to a library now?
const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);

}

export { capitalizeString } //How to export functions.
export const foo = "bar"; //How to export variables.

import all modules from a file using * notation.
import * as myStuff from "capitalize_strings";

export fallback with export default
this feels weird. you can export one value from a file. it cant be a var, let or const though.
export default function add(x,y) {
  return x + y;
}

DEBUGGING

console.log(typeof yourVariableName) //this is gonna get a lot of use.

missing a paren or bracket
using = instead of ===
typos
missing a () after a function call.
argument order is incorrect.
off by one errors (OBOE)

DATA STRUCTURES

one d arrays only have one level. ie no nested elements.
array.length is useful
arrays are mutable, their length and contents can change over time.
pop
push
shift
unshift
.splice(indexStart,#ofElementsToRemove[optionalAddElement])
arr.splice(0,2,'DarkSalmon','BlanchedAlmond') // will swap the two elements into the first two positions
splice mutates the array
slice returns a new array
.slice(start, upToButNotIncludingStop)
es6 spread operator allows you to push an array onto another array without iterating through it.
 newArr.push([...arr]);
you can also spread an array out into another array while defining it. 
 let sentence= ['learning', ...fragment, 'is', 'fun'];
.indexOf() will return an index of a passed element.
return inputArray.indexOf(searchElement) == -1 ? false : true; // this will return true or false if an element is in an array.

basic algo scripting

convert farenheit to celsius
function convertToF(celsius) {
let fahrenheit=celsius*(9/5)+32;
return fahrenheit;
}
string reversal
function reverseString(str) {
  let newStr=""
  for (var i=str.length-1;i>=0; i--){
    newStr+=(str[i]);
  }
  console.log(newStr)
  return newStr;
}

reverseString("hello");

factorialize a number
function factorialize(num) {
  let sum=1;
  for (let i=num; i>0;i--){
    sum=sum*i
  }
  return sum;
}

factorialize(5)

find the longest word in a string
function findLongestWordLength(str) {
let longest=0;
let regex=/[^ ]/g;
let strings=str.split(" ")
console.log(strings)
for (let item in strings){
console.log(strings[item].length)
if (strings[item].length>longest){
longest=strings[item].length;
}
};
console.log(longest)
return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog”);

split string on whitespace
let strings=str.split(" ")

check if a string ends with a target string
function confirmEnding(str, target) {
// "Never give up and good luck will find you."
// -- Falcor
if (target == str.slice(str.length-target.length)){
return true
} else {
return false
}

}

confirmEnding("Bastian", "n");

repeat string x times
function repeatStringNumTimes(str, num) {
let outStr="";
for (let i = 0;i<num;i++){
outStr+=str;
}
console.log(outStr)
return outStr;
}

repeatStringNumTimes("abc", 3);

return the first occurrence of an element in an array that matches a function

function findElement(arr, func) { 
let num = (arr.filter(func)) 
return num[0]; 
}

findElement([1, 2, 3, 4], num => num % 2 === 0); 

str.toUpperCase() will uppercase a string!

title case a string
function titleCase(str) {
let words=str.toLowerCase().split(" ")
let outStr=""
for (let word in words){
outStr+=words[word][0].toUpperCase()+words[word].slice(1)
if (word<words.length-1){
outStr+=" "
}
}
console.log(outStr)
return outStr;
}

titleCase("I'm a little tea pot");


function frankenSplice(arr1, arr2, n) {
// It's alive. It's alive!
let newArr= []
newArr.push(...arr2.slice(0,n))
newArr.splice(n+1,0,...arr1)
newArr.push(...arr2.slice(n))
console.log(newArr)
// console.log(typeof newArr)
return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
frankenSplice([1, 2, 3], [4, 5], 1)
frankenSplice([1, 2], ["a", "b"], 1)
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)

delete ‘false’ values from array
function bouncer(arr) {
// Don't show a false ID to this bouncer.
let outArray=[]
for (let i in arr)
if (Boolean(arr[i])==true){
outArray.push(arr[i])
}
return outArray;
}

bouncer([7, "ate", "", false, 9]);

compare values in order to get sort() to work for numbers
points.sort(function(a, b){return a-b});

inserting values in an unsorted array
function getIndexToIns(arr, num) {
arr=arr.sort(function(a, b){return a-b});
console.log(arr)
let greaterThan=null;
for (let i in arr){
if (num<=arr[i]){
console.log(arr[i]+' is greater than '+num)
if (greaterThan == null){
greaterThan = i
}
}
}
if (greaterThan == null){
greaterThan = arr.length;
}
// Find my place in this sorted array.
return Number(greaterThan);
}

// getIndexToIns([40, 60], 50);
// getIndexToIns([10, 20, 30, 40, 50], 35)
// getIndexToIns([10, 20, 30, 40, 50], 30)
getIndexToIns([2, 5, 10], 15)

find if all letters in a word are found in another word

function mutation(arr) {

for (let i in arr[1]){
console.log('looking for '+arr[1][i])
console.log(arr[0].includes(arr[1][i]))
if (arr[0].toLowerCase().includes(arr[1][i].toLowerCase()) == false){
console.log('output false')
return false
}
}
console.log('output true')
return true
}

mutation(["hello", "hey"]);


cut an array into a 2d array of a specified size

function chunkArrayInGroups(arr, size) {
let outArr=[];
for (let i=0;i<arr.length;i+=size){
console.log(arr.slice(i,i+size))
outArr.push(arr.slice(i,i+size))
}
return outArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

OBJECT ORIENTED PROGRAMMING

object example
let duck = {
  name: "Aflac",
  numLegs: 2
};

example method
let dog = {
name: "Spot",
numLegs: 4,
sayLegs: function() {return `This dog has ${this.numLegs} legs.`}
};

dog.sayLegs();


constructors are functions that construct objects
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}


Constructors follow a few conventions:

* Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
* Constructors use the keyword this to set properties of the object they will create. Inside the constructor, thisrefers to the new object it will create.
* Constructors define properties and behaviors instead of returning a value as other functions might.


using new with constructors
if you don't use new it will not point to the newly created object, which will give unexpected results.
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
let hound = new Dog();

passing args into constructors
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog();

verify an object's constructor with instanceof
/* jshint expr: true */
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
let myHouse = new House(3)
myHouse instanceof House;

understanding own properties - moving them into an array
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Add your code below this line
for (let property in canary) {
    if(canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}

using prototype to remove redundant variables from objects.
if all objects have the same value for the same variable, then it is better to save it into the prototype so that it does not store redundant variables in memory. It saves it as a rule that all of this type of object have this value, vs every object having the value inherently stored inside.

Bird.prototype.numLegs = 2;

iterate over own and prototype properties of an object
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]

check the constructor property
the constructor prop is the name of the constructor that generated the object. it can be overwritten so it is safer to use instanceof, but this is how you can check it regardless.

function Dog(name) {
    this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog){
         return true
    } else {
         return false
    }
}


Applying the prototype with a new object
instead of adding each property individually, pass in an object that has all of the right properties. If you don't define the constructor in this, then it will return undefined when accessed

function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    constructor: Dog, // define the constructor property
    numLegs: 3,
    eat: function() {
    console.log("mmmmmm")
},
    describe: function(){
        console.log(`I have ${numLegs} legs`)
    }
};

using isPrototypeOf
idk how this is different than constructor of, but I guess it can be useful
Dog.prototype.isPrototypeOf(beagle)
Understand the Prototype Chain

prototypes can have prototypes. All things inherit properties from Object.prototype
supertype is the same as parent and subtype is the same as child.

 Don't Repeat Yourself (DRY)
make a prototype in order to share methods across objects

making an instance of a supertype
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

let duck=new Animal(); // Change this line
let beagle=new Animal(); // Change this line

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom”

setting the prototype of an object after creating it
function Animal() { }

Animal.prototype = {
     constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();
beagle.eat(); // Should print "nom nom nom”

reset the inherited constructor type
Dog.prototype.constructor = Dog;

add methods after inheritance
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog
Dog.prototype.bark = function() { console.log('Woof!')}

let beagle = new Dog();
beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"

overriding an inherited method
just redeclare it with the same name
function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

// Inherit all methods from Animal
Bird.prototype = Object.create(Animal.prototype);

// Bird.eat() overrides Animal.eat()
Bird.prototype.eat = function() {
  return "peck peck peck";
};

using mixin
some times it is not preferred to use inheritance with unrelated objects. Mixin allows you to load methods into an object.
a mixin is just a function that adds a method to an object. you pass an obj into it and it changes that obj.

let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);
   
 CLASSES
classes were introduced in ecma6, and they are a layer on top of objects in order to more imply and clearly create objects and deal with inheritance. Ideally, we always write class names in TitleCase. Class declarations are not hoisted, so be careful with where you write them vs call them. you will get a reference error if you call a class before it is created.


class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

let p = new Polygon(1, 2);
console.log('Polygon p:', p);

subclassing with extends
'use strict';

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name, 'speaks.');
    }
}

class Dog extends Animal {
    speak() {
        console.log(this.name, 'barks.');
    }
}

let spot = new Dog('Spot');
spot.speak();

spot = new Animal('Spot');
spot.speak();

class inheriting from another class
The Square class inherits the constructor and function from Rectangle. The use of super(w,h) and constructor(w,h) is pretty confusing.

class Rectangle {
    constructor(w, h) {
         this.w = w;
         this.h = h;
    }
}
/*
* Write code that adds an 'area' method to the Rectangle class' prototype
*/
Rectangle.prototype.area = function() {
    return this.w*this.h
}
/*
* Create a Square class that inherits from Rectangle and implement its class constructor
*/
class Square extends Rectangle {
    constructor(w,h){
         super(w,h);
         this.w = w;
         this.h = w;
}


Closure
some variables shouldn't be allowed to be changed by any part of the program. declaring a variable after object creation makes it a public property. They can be changed anywhere, by anything.

bird.name = "Duffy"; //public property

defining it inside of the object will make it private and only allow things with the same scope to modify it.

function Bird() {
  let hatchedEgg = 10; // private property

  this.getHatchedEggCount = function() { // publicly available method that a bird object can use
    return hatchedEgg; //note, no 'this' here
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount(); // returns 10

 Immediately Invoked Function Expression (IIFE)

a function wrapped in parens and passed a trailing this () that is unnamed and immediately run after declaration
(function () {
console.log("A cozy nest is ready");
})();

// these are prob good for one-liners

// Use an IIFE to Create a Module

// assigning an iife to a variable results in a module. it is a way to create objects quickly 
// the module below will return an object that has the mixins as defined inside of it.
let motionModule = (function () {
  return {
    glideMixin: function (obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
}) (); // The two parentheses cause the function to be immediately invoked

// functional programming

// Functional programming is about:
// 1) Isolated functions - there is no dependence on the state of the program, 
// which includes global variables that are subject to change
// 2) Pure functions - the same input always gives the same output
// 3) Functions with limited side effects - any changes, or mutations, to the state 
// of the program outside the function are carefully controlled
/**
* A long process to prepare tea.
* @return {string} A cup of tea.
**/
const prepareTea = () => 'greenTea';

/**
* Get given number of cups of tea.
* @param {number} numOfCups Number of required cups of tea.
* @return {Array<string>} Given amount of tea cups.
**/
const getTea = (numOfCups) => {
const teaCups = [];

for(let cups = 1; cups <= numOfCups; cups += 1) {
const teaCup = prepareTea();
teaCups.push(teaCup);
}

return teaCups;
};
const tea4TeamFCC = getTea(40); // :(

console.log(tea4TeamFCC);

// Callbacks are the functions that are slipped or passed into another function 
// to decide the invocation of that function.
// Functions that can be assigned to a variable, passed into another function, 
// or returned from another function just like any other normal value, are called 
// first class functions. In JavaScript, all functions are first class functions.
// The functions that take a function as an argument, or return a function as a 
// return value are called higher order functions.
// When the functions are passed in to another function or returned from another 
// function, then those functions which gets passed in or returned can be called 
// a lambda.

// using map to apply a function to each element of an array

var rating = [];
let myFunction= function(x){
rating.push(({title: x["Title"], rating: x["imdbRating"]})); //push the array into rating
}
watchList.map(x => myFunction(x))
console.log(rating)
// Add your code above this line

console.log(rating);

// making my own map function so I can understand it

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
     var newArray = [];
    this.forEach(function(element) {
        newArray.push(callback(element))
    })
    return newArray;
};

var new_s = s.myMap(function(item){
     return item * 2;
});

using filter 
var filteredList=[];
var firstList=[];

watchList.forEach(function(object){
    firstList.push({title: object['Title'], rating: object['imdbRating']})
})
filteredList = firstList.filter(film => Number(film['rating'])>=8)

// making my own filter to understand it

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
    var newArray = [];

    this.forEach(function(each){ //iterate through the array
        if (callback(each)==true){ //check true on filterfunction
            newArray.push(each) //push true condition to newArray
        }
    });

return newArray;
};

var new_s = s.myFilter(function(item){
return item % 2 === 1;
});

return part of an array with slice
function sliceArray(anim, beginSlice, endSlice) {

    return anim.slice(beginSlice,endSlice)
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);


// using slice instead of splice to leave the input array intact

function nonMutatingSplice(cities) {
// Add your code below this line
//return cities.splice(3) // old way - mutating
return cities.slice(0,3)  // new way - non-mutating
// Add your code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

combining arrays with concat
[1, 2, 3].concat([4, 5, 6]);
// Returns a new array [1, 2, 3, 4, 5, 6]

// concat can be used in this way to act like a push. you are combining arrays without mutating anything 

// using the reduce method to get an average

averageRating;
var allRatings=[];
var filteredList=[];
var initialValue=0;
filteredList=watchList.filter(film => (film['Director']=="Christopher Nolan"))
console.log(filteredList)
allRatings=filteredList.reduce( (accumulator, currentValue) {
accumulator + Number(currentValue.imdbRating)
},initialValue)

// without this initial value, it won't add things together.
averageRating=allRatings/filteredList.length

console.log(averageRating);


// sorting an array alphabetically 

function alphabeticalOrder(arr) {

// arr.sort() //this works, but not with capitalized letters
arr.sort(function(a, b){
    var nameA=a.toLowerCase(), nameB=b.toLowerCase();
         if (nameA < nameB) //sort string ascending
              return -1;
         if (nameA > nameB)
              return 1;
         return 0; //default return value (no sorting)
    });
     console.log(arr)
     return(arr)
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

// return a sorted array without mutating the original

var globalArray = [5,6 ,3 ,2 ,9 ];

function nonMutatingSort(arr) {

let localArray=[]
localArray=localArray.concat(arr)
console.log(localArray);
localArray.sort()
console.log(localArray)
return localArray

}
nonMutatingSort(globalArray);

// split a string into an array

function splitify(str) {
    let outStr=""
    outStr=str.split(/\W/) //regex for non-word characters
    return outStr
}
splitify();
"Hello World,I-am code”

// use join to combine an array into a string

sentensify(str) {
function
str.split(/\W/).join()
return" "
}
sentensify();
"May-the-force-be-with-you"

// Convert strings to urls without replace

// the global variable
var globalTitle = "Winter Is Coming";
// var globalTitle =" Winter Is Coming";

function urlSlug(title) {
let localTitle=title //assign local variable to global value
localTitle=localTitle.toLowerCase().match(/\w+.+/)[0] // to lowercase and strip leading spaces. it returns an array, so select the first element to bring it back to a string
localTitle=localTitle.split(/\W+/) //split on non-whitespace
return localTitle.join("-") // join with hyphens to make the url
}

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"

// Use Every() to check every element in an array

function checkPositive(arr) {
     return arr.every(function(currentValue){
         return currentValue>0
    })
}
checkPositive([1, 2, 3, -4, 5]);

// Use some() to check if ANY element in an array passes criteria
function checkPositive(arr) {
      return arr.some(function(currentValue){
         return currentValue>0
})
}
checkPositive([1, 2, 3, -4, 5]);

// Introduction to Currying and Partial Application

Currying
//Un-curried function
function unCurried(x, y) {
  return x + y;
}

//Curried function
function curried(x) { //named function
  return function(y) {//note the return and unnamed function
    return x + y; //note the return
  }
}

curried(1)(2) // Returns 3

// This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. Here's an example using the curried function in the example above:

// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3
// Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments.
// Here's an example:

//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13

// || is logical or.
(someVariableName || 0) // this means if the variable exists then use it, but
// use 0 if the variable is false / undefined / 0 or ""
// there is a weird pattern with ? and :
// ifThisIsTrue ? doThisPart : doThisIfItWasFalse
lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
// the line above either increments lookup[letter] or sets it to 1
