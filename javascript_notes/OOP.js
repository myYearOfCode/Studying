
example object
  var cat = {
    name: "Whiskers",
    "legs": 4,
    "tails": 1,
    5: "five",
    "enemies": ["Water", "Dogs"]
  };
// all properties/args are converted to strings

// accessing properties of an object. dot notation or bracket notation
// brackets can be used with things that have spaces in them, dots cannot.
  var myObj = {
    prop1: "val1",
    prop2: "val2"
  };
  // two equivalent ways to use the key to return its value
  var prop1val = myObj.prop1; // val1 dot
  var prop1val = myObj["prop1"]; // val1 bracket
  var prop2val = myObj.prop2; // val2 dot
  var prop2val = myObj["prop2"]; // val2 bracket

// don't use numbers to start variable names
// avoid spaces and hyphens as well.
// bracket notation will work, but dot notation will break it.

// updating object properties
  ourDog.name = "Happy Camper";
  ourDog["name"] = "Happy Camper";

// deleting an object property
delete myDog.tails;

// using an object as a switch statement
  function phoneticLookup(val) {
  var result = "";
  var myObj = {
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank"
  }
  result=myObj[val];
    return result;
  }

// check for a property
  arrayName.hasOwnProperty(propname)
// This returns true or false.

// accessing nested arrays
  var myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  var secondTree = myPlants[1].list[1];


// destructuring assignment
// easily unpack an object to variables.
// essentially this allows you to grab object properties and apply them to another 
// object at will. you can rename them if needed.

  var voxel = {x: 3.6, y: 7.4, z: 6.54 };
  const { x, y, z } = voxel; // x = 3.6, y = 7.4, z = 6.54
// If instead you want to store the values of voxel.x into a, voxel.y into b, and 
// voxel.z into c, you have that freedom as well.
  const { x : a, y : b, z : c } = voxel // a = 3.6, b = 7.4, c = 6.5

destructuring assignment in nested objects.
it seems like I might not use this a ton. 
here is an example.

  const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
  };
  function getMaxOfTmrw(forecast) {
    "use strict";

    const {tomorrow:{max:maxOfTomorrow}}=forecast ;
    return maxOfTomorrow;
  }
  console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6


use destructuring assignment to pass an object in as a function's parameters.
I hope to care about this some day. currently it seems nuanced and a small thing 
to remember compared to the rest of human knowledge.
Consider the code below:
  const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
    // do something with these variables
  }

This effectively destructures the object sent into the function. This can also be done in-place:
  const profileUpdate = ({ name, age, nationality, location }) => {
    /* do something with these fields */
  }
This removes some extra lines and makes our code look neat.

getters and setters to control access to an object
  class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer(){
      return this._author;
    }
    // setter
    set writer(updatedAuthor){
      this._author = updatedAuthor;
    }
  }
  const lol = new Book('anonymous');
  console.log(lol.writer);  // anonymous
  lol.writer = 'wut';
  console.log(lol.writer);  // wut
