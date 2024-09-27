var score = 0;
var flippedCards = [];  // Array to store the currently flipped cards
let matchedPairs = 0;  // Number of pairs matched
let totalPairs = 0;    // Total number of pairs in the game

function generate_board() {

    //============================================================================
    // Task 1
    // Retrieve the friend name(s) from the 'friends' multi-select dropdown menu
    //============================================================================

    // Array to contain the names of user-selected friend(s)
    // For example, if the user selected 'Darryl' and 'Yin Kit',
    //   this array's value will be:
    //      [ 'darryl', 'yinkit' ]
    //
    let friends = []; // Initialize to empty


    // YOUR CODE GOES HERE
    var nameOfCard = document.getElementById("friends");

    // console.log(nameOfCard);
    for (let option of nameOfCard.options){
        if (option.selected) {
            friends.push(option.value);  // Add the selected value to the array
        }
    }

    // Display user's selection in Developer Tools --> Console.
    console.log(friends);
    // return;


    //============================================================================
    // Task 2
    // Given one or more selected friends and given 4 fruit names,
    //   generate a 'randomized' Array of finalized card names.
    // 
    // Card names are as follows:
    //    apple_brandon.png
    //    banana_brandon.png
    //    kiwi_brandon.png
    //    orange_brandon.png
    //
    // where 'brandon' can be replaced with another friend's name,
    // e.g.
    //    apple_nick.png
    // (and so on)
    //
    // Display all 4 fruit cards of one or more selected friends.
    //
    // NOTE: Each card must be displayed TWO and ONLY TWO times (thus, a "pair")
    //       (such that the user can attempt to 'match').
    //
    // Check out this utility function (declared at the bottom of this file)
    //   for randomizing the order of Array elements.
    //        shuffleArray()
    //============================================================================
    const fruits = [ 'apple', 'banana', 'kiwi', 'orange' ];

    // YOUR CODE GOES HERE
    let gameBoard = document.getElementById("game-board");

    let array = [];

    for (let i = 0; i < friends.length; i++){
        for (let j = 0; j < fruits.length; j++){
            console.log('cards/' + fruits[j] + "_" + friends[i]+".png");
            array.push('cards/' + fruits[j] + "_" + friends[i]+".png");
            array.push('cards/' + fruits[j] + "_" + friends[i]+".png");

        }

    }

    console.log(array);
    var shuffledArray = shuffleArray(array);
    console.log(shuffledArray);
  

    // gameBoard.innerHTML = 'cards/apple_' + friends[i]+".png";
    
    // let img = document.createElement('img');
    // img.src = 'cards/apple_brandon.png';
    // gameBoard.appendChild(img);
    // gameBoard.innerHTML = `<img src='cards/apple_${friends}.png'`;

    console.log(gameBoard.innerHTML);

    //============================================================================
    // Task 3
    // Display the cards in <div id="game-board">
    //
    // For this, we will make use of Template Literal (using backticks).
    //
    // NOTE: The game board will always have 4 columns and N rows, where N denotes
    //       (number of selected friends) x 2.
    //
    //       For example, if I chose 'Brandon', 'Darryl', and 'Nick' (3 friends),
    //         then the newly generated game board will be
    //         6 (rows) by 4 (columns).
    //============================================================================
    const num_cols = fruits.length;
    const num_rows = friends.length * 2;

    console.log("# of columns: " + num_cols)
    console.log("# of rows: " + num_rows);


    // YOUR CODE GOES HERE
    totalPairs = (num_cols * num_rows) / 2;  // Calculate total number of pairs



    var result_str = `
    <h1 id="score">Total Score: ${score}</h1>
    `;

    for (i = 0; i < num_rows; i++) {
        result_str += `
        <div class='row'>`;
        for (j = 0; j < num_cols; j++) {
            let card = shuffledArray.pop();
            console.log(card);
            result_str += `
            <div class='column' onclick="flipCard(this, '${card}')">
                <div class="flipper">
                    <img class="front" src="cards/hidden.png">
                    <img class="back" src="${card}">
                </div>
            </div>`;
        }
        result_str += `</div>`;
    }

    // DO NOT MODIFY THE FOLLOWING
    // Replace the innerHTML of <div id="game-board">
    //   with a newly prepared HTML string (result_str).
    document.getElementById('game-board').innerHTML = result_str;
}

// Function to handle card flipping and matching logic
function flipCard(cardElement, cardValue) {
    cardElement.classList.toggle('flipped');

    // Add the card to the flippedCards array
    flippedCards.push({ element: cardElement, value: cardValue });

      // If two cards are flipped, check for a match
      if (flippedCards.length === 2) {
        if (flippedCards[0].value === flippedCards[1].value) {
            // Cards match, increment the score and matched pairs
            score++;
            matchedPairs++;
            document.getElementById('score').innerText = `Total Score: ${score}`;

            // Check if all pairs have been matched
            if (matchedPairs === totalPairs) {
                // Display the congratulations message
                document.getElementById('score').innerHTML = `<h2>All Matched, Congratulations!</h2>`;
            }

            // Clear the flipped cards array for the next round
            flippedCards = [];
        } else {
            // Cards don't match, flip them back after a short delay
            setTimeout(() => {
                flippedCards[0].element.classList.remove('flipped');
                flippedCards[1].element.classList.remove('flipped');
                flippedCards = [];
            }, 1000);  // Delay to show the mismatched cards
        }
    }
    
}
console.log(flippedCards);

// Utility Function
// DO NOT MODIFY
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];  // Swap elements
    }
    return array;
}