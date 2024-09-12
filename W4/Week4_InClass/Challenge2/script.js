// Task 1
// Add an event listner to the button (the user drags his mouse over the button)


// Task 2
// Add an event listner to the button (the user drags his mouse out of the button)
var justinBtn = document.getElementById("justin-btn");
var result = document.getElementById("result")

justinBtn.addEventListener("mouseover", mOver);
justinBtn.addEventListener("mouseout", mOut);

// Another way to write
/*
document.getElementById('justin-btn').addEventListener(
    'mouseout',
    function (){
        result.style="background-color: black; color:red";
        result.innerText = "Don't Leave My Heart";
    }
)

*/

function mOver() {
    result.style="background-color: pink; color:blue";
    result.innerText = "Welcome to My Heart";
}

function mOut() {
    result.style="background-color: black; color:red";
    result.innerText = "Don't Leave My Heart";
}
