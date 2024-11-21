/*
	Name: <TODO>
	Email: <TODO>

	q1.js

	Acknowledgement: 
	This code is adapted from https://www.geeksforgeeks.org/javascript-calculator 
*/

		
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
		|| event.key == '*' || event.key == '/'
	) 
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
	lastVal = x;
	if (x!=""){
		let y = math.evaluate(x) 
		document.getElementById("result").value = y
	}
} 

// Function that clears the display 
function clr() { 
	document.getElementById("result").value = "" 
} 

function onPi() {
	document.getElementById("result").value += 3.14;
	// x += 3.14;
	// console.log(x);
}

function onBkSpace(){
	let str = document.getElementById("result").value;
	str = str.substring(0, str.length - 1);
	document.getElementById("result").value = str;
}

let lastVal = '';

function onUndo(){
	if (lastVal.length != 0){
		document.getElementById("result").value = lastVal;
	} 
	// let str = '';
	// let arr = [];
	// str += document.getElementById("result").value
	// console.log(str);
	// arr.push(str);
	// let curr = solve();
	// arr.push(curr)
	// console.log(curr);
	// document.getElementById("result").value = arr[0];
	// console.log(arr);
	
	// let lastVal = document.getElementById("result").value;
	// console.log(lastVal);
	
	// console.log(solve());
	
	// let currVal = document.getElementById("result").value;
	// console.log(currVal);
	// if (lastVal != currVal) {
	// 	document.getElementById("result").value = lastVal;
	// }
}

// you may insert new functions or edit any function above.