// document.getElementById("calculate-btn").addEventListener("click", function() {
//     // TODO: Initialize a variable to hold the sum
//     let sum = 0;

//     // TODO: Use a loop to calculate the sum of numbers between 1 and 100
    
//     // TODO: Display the result in the <p> tag with id="result"
//     document.getElementById("result").innerText = "The sum is: " + sum;
// });

// document.getElementById("calculate-btn").addEventListener("click", function() {
//     let sum = 0;
//     for (let i = 1; i <= 100; i++) {
//         sum += i;
//     }
//     document.getElementById("result").innerText = "The sum is: " + sum;
// });

function calculate() {

    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    // Verify the user input in the Console
    // console.log(num1, num2);

    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += Number(i);
    }
    document.getElementById("result").innerText = "The sum is: " + sum;
}