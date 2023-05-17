/* If you have more than 5
conditions than you can use
the switch conditional statement (if-else & switch) */

/* OPERATORS:
arithmetic (+, - , /, *, %),
logical { (&&) all the conditons are true, (||) 'or' operator , (!) 'not' operator},
assignment {just assign values},
comparison { (==) comapres values only, (===) compares values and datatypes}
Remember, !+ve (not of any positive number) is 0
*/

/* Ternary operator

const mymarks = 20;
mymarks>30? console.log("passed");console.log("fail");

output --> fail
*/

/*var a = 2;
var b = 0;
var c = 2;

b = a++; //postfix (so basically, b=a is applied first and then the value of a is incremented)
c = ++a; //prefix (for this case, value of a is incremented first and then the value of a is assigned to c)

console.log({a,b,c});*/

/* For loop, while loop, dowhile loop*/

/* for (initialisation);condition checking;increment/decrement) {
code
}

e.g.

for (var num = 0; num <=100;num++) {
  console.log(num)
}

e.g.

var num1 = 0;
while(num1 <=100) {
  if(num%5 ===0) {
  console.log(num);
  }
  num++
}

e.g. for do-while loop, it is a exit loop where
the code is executed first and then the condition is checked.

var num1 = 0;
do {
  if(num%5 ===0) {
  console.log(num);
  }
  num++
} while (num1<=100);

*/

//FUNCTIONS

/*const items = {
  food:1000,
  drinks:2000
};

var cart = 0;

//Arrow function --> It has its drawbacks also
var addToCart = (item) =>{ //parameter
  return cart+item
};

function addCartValue(item) {
  cart = addToCart(item)
}

addCartValue(items.drinks);

console.log("cart: ", cart);*/


//this (a lesson on using the keyword mentioned)

/*const ourObject = {
  name: "this keyword",
  getThis: function() {
    console.log(this);
  }
}
ourObject.getThis();

function getThis() {
  console.log(this);
}

getThis();
const arrowGetThis = () => {
  console.log(this);
};
arrowGetThis();*/


//arrays

/*var myArray = [1,2,3,4,5,6];
console.log(myArray);
myArray.push(7);
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.unshift(0);
console.log(myArray);
myArray.shift();
console.log(myArray);*/

//Recursive FUNCTIONS

/*var num=1
function printNum() {
  console.log(num);
  num++

  if(num<=10) {
    printNum();
  }

  else {
    return;
  }
}
printNum();*/

//maps (like for loop)

/* // the letter i just represent each element, can change it with any letter
myArray = [1,2,3]
const newArray = myArray.map((i) => (i+1));
console.log(newArray);
console.log(myArray);*/

//filter

/*myArray = [10,20,50];
newArray = myArray.filter(e => e<50);
console.log(newArray);
console.log(myArray);*/

// ES 6
// Default parameter

// the name = " world" is the default parameter if there is no input given
/*function hello(name="world") {
  console.log("hello " +name);
}
hello("viswa");*/

// Template Literals
/*console.log(`
  Apple
  Banana
  Mango
  grapes  `
);*/


//Scoping

/*function outer() {
  var name1 = "xyz";
  let name2 = "pqr";

// The inner function only has a scope from lines 179 to 182.
//Hence it doesnt change the name1 from "xxyyzz" to "xyz"
  function inner() {
    var name1 = "xxyyzz";
    console.log(name1);
  }
  inner();
  console.log(name1);
}
outer();*/

//ASYNCHOROUS JS (it just means that js will get the data but not in the real time, will give priority to the synchronous data first)

//PROMISES
//for fetching data, we will use the keyword "fetch" and put the url inside (e.g. shown below)

/*//First we are fetching the data from the website
fetch("https://jsonplaceholder.typicode.com/users")
//then we are changing the format of the data into a json file (json just converts any form of received data into key:value pairs)
.then((result) => result.json())
//then we store it in data and we log it to the console
.then((data) => console.log(data));*/


//we can write in a neater and in a await format

/*const getData = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await result.json();
  console.log(data);
};
getData();*/

/*async function getData() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await result.json();
  console.log(data);
}
getData();*/
