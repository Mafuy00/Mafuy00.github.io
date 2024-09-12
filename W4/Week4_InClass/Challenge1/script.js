function calculate() {

    if (validate_numbers() == false){
        document.getElementById("result").innerHTML = "<span style='color: red'> One or more numbers are missing! </span>"
        return;
    }



    // YOUR CODE GOES HERE
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;

    var sum = 0;

    for (var i=num1; i<=num2; i++) {
        sum += parseInt(i);
    }

    var result = document.getElementById("result");
    result.innerHTML= " <span style='color: blue'>The sum is: " + sum + "</span>";
    // innerHTML can put html code inside to style
    // innerText cannot
}

function validate_numbers(){
    console.log("[START] validate_numbers");

    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;

    if(num1.trim() == '' || num2.trim() == '') {
        return false;
    } else {
        return true;
    }

}

