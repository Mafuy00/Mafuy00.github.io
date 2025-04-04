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
    var result_str = ``;

    for(i=0;i<num_rows;i++){
        result_str += `
        <div class='row'>`
        //     <div class='column'>test</div>
        for(j=0;j<num_cols;j++){
            let card = shuffledArray.pop();
            console.log(card);
            result_str += `
            <div class='column'>
            <img src="${card}">
            </div>`
            
        }
        

        result_str += `</div>`

        

    }

    // <div class="row">
    //     <div class="column">
    //         photo here
    //     </div>
    //     <div class="column">
    //         photo here
    //     </div>
    //     <div class="column">
    //         photo here
    //     </div>
    //     <div class="column">
    //         photo here
    //     </div>
    // </div>
    
    // You will need to rewrite the value of this result_str (String).
    // for (let i = 0; i < array.length; i++) {
    //     // Start a new row every num_cols items
    //     if (i % num_cols === 0 && i !== 0) {
    //         result_str += `</div><div class='row'>`;
    //     }

    //     let shuffledArray = shuffleArray(array);

    //     result_str += `
    //         <div class='col-3'>
    //             <img src='${shuffledArray[i]}' class='card-img'>
    //         </div>
    //     `;
    // }
    
    // for (let i=0; i<array.length;i++){
    //     result_str += `
    //     <img src='${array[i]}'>
    //     `.repeat(2);
    // console.log(array[i])
    // }

    // result_str += `</div></div>`;

    // DO NOT MODIFY THE FOLLOWING
    // Replace the innerHTML of <div id="game-board">
    //   with a newly prepared HTML string (result_str).
    document.getElementById('game-board').innerHTML = result_str;
}


// Utility Function
// DO NOT MODIFY
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}