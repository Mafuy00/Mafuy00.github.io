document.getElementById("justin-btn").addEventListener("mouseover", function() {

    document.getElementById("result").style.backgroundColor = 'pink';
    document.getElementById("result").style.color = 'blue';
    document.getElementById("result").innerText = "Welcome to My Heart";

});

document.getElementById("justin-btn").addEventListener("mouseout", function() {

    document.getElementById("result").style.backgroundColor = 'black';
    document.getElementById("result").style.color = 'red';
    document.getElementById("result").innerText = "Don't Leave My Heart";

});
