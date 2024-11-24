/*
    
Name:   
Email:  

*/

function display_character(parentElement, character) {
    // console.log(parentElement);
    // console.log(character);
    if(character.status == "correct"){
        // let spanId = document.getElementById(parentElement);
        parentElement.style.backgroundColor = "green";
        let text = document.createTextNode(character.letter);
        parentElement.appendChild(text);
    } else if (character.status == "partial") {
        parentElement.style.backgroundColor = "yellow";
        let text = document.createTextNode(character.letter);
        parentElement.appendChild(text);
    } else{
        parentElement.style.backgroundColor = "grey";
        let text = document.createTextNode(character.letter);
        parentElement.appendChild(text);
    }
}


function display_game(tableElement, game) {
    console.log(game);
    for (let i = 0; i < game.length; i++) {
        let tr = document.createElement("tr");
        
        for (character in game[i]){
            let td = document.createElement("td");
            display_character(td,game[i][character])
            tr.appendChild(td);
            console.log(game[i][character])
        }
        tableElement.appendChild(tr);
    }
}


function check_guess(answer, guess) {
	
}
