/*
Write a function in JavaScript that takes two parameters (numbers), multiplies them together, and returns the result. 

a) Create a JavaScript function called calculateArea. 

b) This function should take two parameters: length and width. 

c) It should return the area of a rectangle. 

d) Call this function with sample values and display the result.
*/

function GetArea(x, y) {
/*
GetArea returns the are if a rectangle with width = y, length = x
it will return -1 if any of the length or width is invalid measurement
*/

    let lenght = x ;
    let width = y ;

    if(ValidDimension(lenght) && ValidDimension(width))
        return x*y;
    else 
        return -1;

    
}

function ValidDimension(input){

/*
ValidDimension return true or false.
True if it is a number and >=0
False if it is not a number or -ve
*/
    let number = Number(input)


    if (Number.isNaN(number)){
        console.log (input + " is not a valid measurement!");
        return false;
    }
    else if (number < 0){
        console.log (input + " is not a valid measurement!")
        return false;
    }
    else if (number == 0){
        return true;

    }
    else if (number > 0){
        return true;
    }    
}

const ps = require("prompt-sync");

const prompt = ps();


/*
let Area = GetArea( 20, 30)
console.log("Area = " + Area)
*/

var width=0;
var length=0;

/* Get width of Rectangle, must be >=0  */

while(true) {
    /* Loop indefinitely until user enter a valid width */
    width = prompt("Width of Rectangle :");

    if(ValidDimension(width)){
        console.log("Valid Width : " + width)
        break
    }
}

/* Get length of Rectangle, must be >=0  */

while(true) {
    /* Loop indefinitely until user enter a valid length */
    length = prompt("Length of Rectangle :");

    if(ValidDimension(width)){
        console.log("Valid Length : " + length)
        break
    }
}

let Area = GetArea( length, width)
console.log("Area = " + Area)



