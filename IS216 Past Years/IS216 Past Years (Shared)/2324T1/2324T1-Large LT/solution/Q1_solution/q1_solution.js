/*
	Name: <TODO>
	Email: <TODO>

	q1.js

	Acknowledgement: 
	This code is adapted from https://www.geeksforgeeks.org/javascript-calculator 
*/

// inserted this statement so that "lastExpression is not defined" error won't appear. Students are not required to do this. 
var lastExpression="";
		
// Function that displays value 
function dis(val) { 
	document.getElementById("result").value += val 
} 

function myFunction(event) { 
	if (event.key == '0' || event.key == '1' 
		|| event.key == '2' || event.key == '3' 
		|| event.key == '4' || event.key == '5' 
		|| event.key == '6' || event.key == '7' 
		|| event.key == '8' || event.key == '9' 
		|| event.key == '+' || event.key == '-' 
		|| event.key == '*' || event.key == '/') 
		document.getElementById("result").value += event.key; 
} 

var cal = document.getElementById("calcu"); 
cal.onkeyup = function (event) { 
	if (event.keyCode === 13) { 
		let x = document.getElementById("result").value 
		solve(); 
	} 
} 

// Function that evaluates the digit and return result 
function solve() { 
	let x = document.getElementById("result").value 
	if (x!=""){
		lastExpression = x; // answer (insert this)
		let y = math.evaluate(x) 
		document.getElementById("result").value = y
	}
} 

// Function that clears the display 
function clr() { 
	document.getElementById("result").value = "" 
} 

// answer: Backspace function 
function onBkSpace() {
	let temp = document.getElementById("result").value;
	if (temp!=""){
		temp = temp.slice(0, -1);
		document.getElementById("result").value = temp;
	}
} 

// answer: undo function 
function onUndo() {
	document.getElementById("result").value = lastExpression;
} 

// answer: pi function 
function onPi() {
	dis("3.14");
} 