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

b = a--; //postfix (so basically, b=a is applied first and then the value of a is incremented)
c = --a; //prefix (for this case, value of a is incremented first and then the value of a is assigned to c)

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
