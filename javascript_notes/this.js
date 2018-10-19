// __rules for understanding what 'this' is__
// case 1 when a function is called by itself or when 'this' is used outside of a 
// 	function it refers to the 'window' which is the browser window.

// case 2 when a function is called as a method, 'this'  refers to whatever is on 
// 	the left side of the dot

// case 3 when a function is called as a constructor 'this' refers to the object 
// 	that the constructor is building
// 	in this kind of constructor there is a hint when naming it. If it starts 
// 	with a capital letter it is intended to be used with the new command. ie
function Person(name) {
	this.name = name;
}	

	new Person('gordon'); //this is with capitalized constructors
	person('gordon'); //this is with uncapitalized constructors
// I don't know the difference between these two things
// at the very beginning of a constructor a new object is created. 'this' refers 
// 	to that newly created object when it is run in the callback.
// the 'this' object is returned at the end of the constructor automatically.

// case 4: when you manually set 'this' using bind, apply, or call - what 'this' means is up to you
// bind is a method on functions that returns a copy of the function it is called on where this is set to the first argument passed into bind.
var explicitlySetLogThis = logThis.bind({name: 'gordon'}) // this sets explicitlySetLogThis to a copy of the logThis function with 'this' set to the {name:'gordon'} object

//apply and call are very similar to each other and somewhat similar to bind
//the difference between them is in how they accept function arguments
//apply is a method that allows you to do something similar to bind, but it runs it immediately
logThis.apply({name: 'gordon'}) //
//when passing in arguments you pass them to apply() as an array in the second position
logThis.apply({name: 'gordon'}, ['hi', 'gordon']) //
//call is a method that 
logThis.call({name: 'gordon'}) //
//when you use call you don't need them to be in an array.
logThis.apply({name: 'gordon'}, 'hi', 'gordon') //

//note - you cannot 'rebind' a this value (with any method) Once you set it with .bind it is fixed as that value. the other two calls are re-bindable since you do not assign them 

// case 5: in a callback function apply the above rules methodically
//  basically, just look at how the higher Order function function calls the callback. It will use one of the rules to call it.