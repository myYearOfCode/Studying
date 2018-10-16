//////////////////if statement
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}

//////////////////Switch() example
switch(val){
  case "a":
  answer = "apple";
  break;
  case "b":
  answer = "bird";
  break;
  case "c":
  answer = "cat";
  break;
  default:
  answer = "stuff";
  break;
}

//////////////////while loops sound like a bad idea
// be SURE to have an incrementer, or else it will be an endless loop
var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}

//////////////////for Loops
for ([initialization]; [condition]; [final-expression])
for (let i = 0; i < 10; i++) {
  console.log(i)
}

//////////////////do while loops
//why would I ever use one of these? Because it ALWAYS runs once.
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);


//////////////////for in loops
for (let user in users) {
  console.log(user);
};

//////////////////Try Catch Finally Loops
function reverseString(s) {
     try { //run this code
        s=s.split("").reverse().join("")
    } catch (e) { //catch errors
        console.log(e.message);
    } finally { //do regardless of errors 
        console.log(s)
    }
}

//////////////////forEach loop 
//used on arrays
  this.forEach(function(element) {
      newArray.push(callback(element))
  })