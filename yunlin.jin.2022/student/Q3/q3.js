/*
  NAME: Jin Yun Lin
  EMAIL: yunlin.jin.2022
*/
// Global variables provided
let logNumber = 0;
const maxLogs = 10;

// Add any other global variables you need here
//
// End of add global variables

function addLog(newLog) {
    const logBox = document.getElementById("logs");

    for(log of newLog) {
        // Part C: Add code below
        var li = document.createElement("li");

        li.innerText += log;

        logBox.appendChild(li);
        // End of Part C
    }
}

function halveLogs() {
    const logBox = document.getElementById("logs");
    const logItems = logBox.getElementsByTagName('li');

    // Part E: Add code below
    console.log(logBox);
    console.log(logItems);
    numItems = Math.floor(logItems.length / 2);
    // for (i=0;i<numItems; i++){
    //     logBox.removeChild();
    // }
    // for (i=logItems.length; i < numItems; i--){
    //     logBox.removeChild();
    // }
    // End of Part E
}

function changeColor() {
    const toggleButtonIsDisabled = document.getElementById('toggleButton').disabled;
    if (!toggleButtonIsDisabled) {
        // Part D: Debug the following block of if code
        // logNumber = newLog.length;
        // const logBox = document.getElementById("logs");
        // const logItems = logBox.getElementsByTagName('li');
        // logNumber = logItems.length;
        console.log(logNumber);
        if(logNumber > maxLogs) {
            document.getElementById("errorMsg").innerText  = "Clear some logs before proceeding";
            console.log(document.getElementById("errorMsg").innerText);
        }
        // End debugging task Part D

        else {
            const bulb = document.getElementById('bulb');
            // Part A: Add code below
            console.log(bulb);
            if(bulb.style.fill !== 'yellow') {
                bulb.style.fill = 'yellow';                
            }
            else {
                bulb.style.fill = 'white';              
            }
            
            // End of Part A
            
            delayButton();

            if(bulb.style.fill == 'yellow') {
                addLog(["User interacts.", "ON.", "Bulb lights up."]);
            }
            else {
                addLog(["User interacts.", "OFF.", "Bulb turns off."]);
            }
        }
    }
}

function delayButton() {
    // Part B: Add code below 
    if(bulb.style.fill == 'yellow') {
        console.log("User interacts.", "ON.", "Bulb lights up.");
    }
    else {
        console.log("User interacts.", "OFF.", "Bulb turns off.");
    }
    // End of Part B
}