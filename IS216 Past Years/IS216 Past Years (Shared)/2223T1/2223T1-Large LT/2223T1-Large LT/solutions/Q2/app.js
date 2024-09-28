/*
    
Name:   
Email:  

*/

// 3 mark
function display_character(parentElement, character) {

  parentElement.innerText = character.letter;

  if (character.status == "correct") {
    parentElement.style.backgroundColor = "green";
  } else if (character.status == "partial") {
    parentElement.style.backgroundColor = "yellow";
  } else {
    parentElement.style.backgroundColor = "grey";
  }
}

// 5 mark
function display_game(tableElement, game) {
  for (word of game) {
    let row = document.createElement("tr");
    tableElement.appendChild(row);

    for (character of word) {
      let cell = document.createElement("td");
      row.appendChild(cell);

      display_character(cell, character);
    }
  }
}

// 2 mark
function check_guess(answer, guess) {
  word = [];
  unmatch_letters = [];

  for (let i = 0; i < answer.length; i++) {
    let character = { letter: guess[i] };

    if (guess[i] === answer[i]) {
      character.status = "correct";
    } else {
      character.status = "wrong"; // temporary set as wrong
      unmatch_letters.push(answer[i]);
    }

    word.push(character);
  }

  for (character of word) {
    if (character.status === "wrong") {
      let idx = unmatch_letters.indexOf(character.letter);

      if (idx !== -1) {
        // found
        character.status = "partial";

        unmatch_letters[idx] = ""; // remove from list of unmatched letters
      }
    }
  }

  return word;
}
