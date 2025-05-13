/*
3. Loops and Arrays (5 Marks) 

Write a JavaScript program that demonstrates the use of a for loop. 

a) Create an array named fruits that contains four different fruit names. 

b) Use a for loop to iterate through each element in the array. 

c) Log each fruit name to the console. 
*/

const fruits = ["durian", "apple", "dragon fruit","starwberry"];

/* Method 1 : Use "const of elemenr" */

for (const element of fruits) {
  console.log(element);
}

/* Method 2 : Use counter */
for (var count=0; count< fruits.length; count++){
  console.log("Counting " + (count+1)  + " of " + fruits.length + " : " + fruits[count]);
}