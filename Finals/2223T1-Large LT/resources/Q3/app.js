/*
    
Name:   
Email:  

*/


/*  use the following predefined global variables as you deem fit
    you may also define additional variables if necessary
*/
var door1 =  document.getElementById('door1');
var door2 =  document.getElementById('door2');
var light1 = document.getElementById('light1');
var light2 = document.getElementById('light2');
var couch =  document.getElementById('couch');
var isAlarmActive = false 
var count = 0;
var count2 = 0;
var light1On = false;
var light2On = false;

// add event listener codes below
// console.log(door1.src);
door1.addEventListener("click", door1Func);
door2.addEventListener("click", door2Func);
couch.addEventListener("mouseover", couchFunc);

// implement the event handling functions below
function door1Func() {

    // Add Code Here
    // let doorOpen = false;
    
    count++;
    door1.src = "image/door-open.png";
    light1.src = "image/light-on.png";
    // doorOpen = true;
    console.log(count);

    if (count>1){
        light1.src = "image/light-on.png";
        door1.src = "image/door-close.png";
        console.log(count);
        light1On = true;
    }

   
}

function door2Func() {

    // Add Code Here
    light2.src = "image/light-on.png";
    door2.src = "image/door-open.png";
    count2++;

    if (light1On == true){
        light1.src = "image/light-off.png";
        light1On = false;
    }

    console.log(light1.src);
    // light2On = true;

    if(count2 > 1){
        light2.src = "image/light-off.png";
        door2.src = "image/door-close.png";
        // light2On = false;
    }


}

function couchFunc() {

     // Add Code Here
    setInterval(function () {


        if (light1On == true && light2On == true ){
            light1.src = "image/light-off.png";
            light2.src = "image/light-off.png";
            light1On = false;
            light2On = false;
        } else {
            light1.src = "image/light-on.png";
            light2.src = "image/light-on.png";
    
            light1On = true;
            light2On = true;
        }


    },1000);

}
