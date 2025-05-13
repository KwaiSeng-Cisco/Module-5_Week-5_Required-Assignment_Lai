/*Conditional Statements in JavaScript (5 Marks) 

Write a JavaScript program that uses if-else and switch statements to make decisions based on user input. 

a) Prompt the user to enter a input and store it in a variable. 

b) Write an if-else statement to check if the input is positive, negative, or zero. 

c) Display the appropriate message based on the condition. 


let isStudent = prompt("Are you a student :");

console.log("Hello " + name + ",")

*/

const ps = require("prompt-sync");

const prompt = ps();

let input = prompt("Please enter a number :");
let number = Number(input)

console.log ("Parsing input yields " + number)


if (Number.isNaN(number)){
    console.log (input + " is not a valid input!");
}
else if (number < 0){
    console.log (input + " is Negative input")
}
else if (number == 0){
    console.log ( "Input is " + input )

}
else if (number > 0){
    console.log (input + " is Possitive input")
}


