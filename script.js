//============================================================================
// Name        :Library managment system
// Author      :William Hobson
// Version     :1.01
// Copyright   : Your copyright notice
// Description : A simple system
//============================================================================
// Ask the user for their first name and store it in a variable called Fname
let Fname = prompt("Please enter your first name:");

// Display a welcome message with the user's name
alert("Welcome, " + Fname + "!");

// Create a constant to store the value of Pi to 7 significant digits
const piValue = 3.1415926;

// Ask the user for their favorite number and store it in myFavNum
let myFavNum = prompt("What is your favorite number?");

// Convert the input to a number (in case it's read as a string)
myFavNum = parseFloat(myFavNum);

// Calculate the area of a circle using the formula A = πr²
let myArea = piValue * Math.pow(myFavNum, 2);

// Display all variable values in a message on the webpage
document.write("<h2>JavaScript Variable and Area Calculation</h2>");
document.write("<p>Hello " + Fname + ",</p>");
document.write("<p>You entered <strong>" + myFavNum + "</strong> as your favorite number.</p>");
document.write("<p>We used Pi as <strong>" + piValue + "</strong>.</p>");
document.write("<p>If that was the radius of a circle, then the area of the circle would be <strong>" + myArea.toFixed(6) + "</strong>.</p>");
