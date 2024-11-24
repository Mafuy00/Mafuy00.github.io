// use the following predefined global variables as you deem fit
// you may also define additional variables as necessary
var door1 =  document.getElementById('door1');
var door2 =  document.getElementById('door2');
var light1 = document.getElementById('light1');
var light2 = document.getElementById('light2');
var couch =  document.getElementById('couch');
var isAlarmActive = false 


// total: 3 marks
door1.addEventListener("click", door1Func) // 0.5 mark
function door1Func() {
    console.log("in door1")
    // Correct Close behavior 1 mark
    if (door1.src.match('door-open'))
       door1.src = "image/door-close.png"
       // state of light1 do not change 
    else {
       
         // Correct Open behavior 1 mark
        door1.src = "image/door-open.png"

        // 0.5 mark (whenever door1 is open, light1 is on)
        light1.src = "image/light-on.png";
    }
}

// total: 3 marks
door2.addEventListener("click", door2Func) // 0.5 mark
function door2Func() {
   console.log("in door2")
    // 1 mark
    if (door2.src.match('door-open')) {
        door2.src = "image/door-close.png"
        light2.src = "image/light-off.png";  // whenever door2 closes, light2 is off

    } else {
        door2.src = "image/door-open.png"    // 0.5 mark
        // 1 mark (whenever door2 is open, light1 is off and light2 is on)
        light2.src = "image/light-on.png";
        light1.src = "image/light-off.png";   

     
    }
}

// 4 marks
couch.addEventListener("mouseover", couchFunc)
function couchFunc() {
    console.log("in couch")
    if (checkStates()) {
        // 2 mark for correct use of setInterval and logic
        
        let interval = setInterval(function() {
            //if ( !alarmAlreadyActivated  ) { // if alarm already activated, no need to set this again
                if (light1.src.match("light-off")) {
                    light1.src = "image/light-on.png";
                    light2.src = "image/light-on.png";
                } else {
                    light1.src = "image/light-off.png";
                    light2.src = "image/light-off.png";
                }
            //}

            // 2 mark for clearing the alarm correctly
            if (!checkStates()) {
                light1.src = "image/light-on.png";
                light2.src = "image/light-on.png"; 
                clearInterval(interval)  
            }
        },1000)
    }
}


var alarmAlreadyActivated = false
function checkStates() {
 
    if (light1.src.match("light-off") && light2.src.match("light-off") 
    && door1.src.match('door-close') && door2.src.match('door-close')
    ) {
        isAlarmActive = true
        return true
    }
    // alarm still active and door2 remain closes
    else if ( isAlarmActive && door2.src.match('door-close') ) {
        alarmAlreadyActivated = true
        return true
    } 
    // else if ( isAlarmActive && door2.src.match('door-open') ) {
    //     isAlarmActive = false
    //     return false
    // }
    isAlarmActive = false
    alarmAlreadyActivated = false
    return false
}