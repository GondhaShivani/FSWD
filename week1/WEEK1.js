/* //task-1

// Using var
var myVar = 'Hello';
console.log(myVar);

// Using let
let myLet = 123;
console.log(myLet);

// Using const
const myConst = true;
console.log(myConst); */



/* //1.1
function xyz(){
  var a="hello";
  let b="yess";
  const c="nooo";
}

xyz();
console.log(a); //a is not defined
console.log(b); //b is not defined
console.log(c); //c is not defined */


/* //1.2
var a="hello";
let b="yess";
const c="nooo";

function print(){
  console.log(a); 
  console.log(b); 
  console.log(c);
}

print(); //can access all 3. */


/* //task-2


function Operations(num1, num2) {
    var sum = num1 + num2;
    var difference = num1 - num2;
    var mul = num1 * num2;
    var div = num1 / num2;
  
    console.log(`Sum is : ${sum}`);
    console.log(`Difference is : ${difference}`);
    console.log(`Multiplication is : ${mul}`);
    console.log(`Division is : ${div}`);
  }

Operations(10, 5); */


/* //task-3
function ageCalculation() {
    var age = parseInt(prompt("Please enter your age:"));
  
    if (age < 18) {
      console.log("You are a minor.");
    } else if (age >= 18 && age <= 65) {
      console.log("You are an adult.");
    } else {
      console.log("You are a senior citizen.");
    }
}
  
ageCalculation(); */


/* //task-4
function findMinMaxSalary(salaries) {
    //spread operator(...) : that allows an iterable (such as an array or a string) to be expanded into individual elements. 
    var minSalary = Math.min(...salaries);  
    var maxSalary = Math.max(...salaries);
  
    return [minSalary, maxSalary];
  }

var salaries = [25000, 30000, 40000, 20000, 35000];
var result = findMinMaxSalary(salaries);
console.log("Minimum Salary: " + result[0]);
console.log("Maximum Salary: " + result[1]); */


/* //task-5
var favBooks = ["abc", "def", "ghi", "jkl", "mno"];

function displayBooks(books) {
  for (var i = 0; i < books.length; i++) {
    console.log(books[i]);
  }
}

displayBooks(favBooks); */


//task-6
/* //6.1 using let
function myFunction() {
    let y = 10;
    console.log(y); // Output 10
}
  
myFunction();
console.log(y); // Error: y is not defined */
  
/* //6.2 using const
function myFunction() {
    const z = 20;
    console.log(z); // Output: 20
}

myFunction();
console.log(z); // Error: z is not defined  */

/* //6.3 using var
function myFunction() {
  var z = 40;
  console.log(z); // Output: 20
}

myFunction();
console.log(z); // Error: z is not defined  */ 
  

/*//task-7

 document.addEventListener("DOMContentLoaded", function(event) {

  var button = document.getElementById("btn");
  button.addEventListener("click", function(){
    button.innerHTML = "Button Clicked";
  });

});  */


/* //task-8
function checkNumber(number) {
  if (number < 0) {
    throw new Error("The number cannot be negative.");
  }

  return number;
}

function handleInput() {
  var userInput = parseFloat(prompt("Enter a number:"));

  try {
    var result = checkNumber(userInput);
    alert("The number is: " + result);
  } catch (error) {
    alert("Error: " + error.message);
  }
}
 */


//task-9
function timeOut(callback) {
  setTimeout(function() {
    var result = 42; 
    callback(result);
  }, 2000);  //gap 2 seconds
}

function printResult(result) {
  console.log("Result:", result);
}

timeOut(printResult);