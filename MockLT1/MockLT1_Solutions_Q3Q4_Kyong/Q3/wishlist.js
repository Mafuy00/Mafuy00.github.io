/*
    Name:  YOUR NAME GOES HERE (KIM Pyong Yang)
    Email: YOUR SMU EMAIL ID GOES HERE (e.g. kim.pyongyang.2023)
*/

/* YOU MAY MODIFY THIS FILE */


document.getElementById('addButton').addEventListener('click', function() {
    
    // YOUR CODE GOES HERE

    // ADVICE
    // Do not CODE right away
    // Always think through the solution logic as a series of steps
    // Write down the steps as pseudocode as COMMENTS first

    /* Pseudocode

        1. Retrieve user input from
            <input type="text" id="productInput"

        2. JavaScript DOM to create this structure:

            <li>
                <span>Kimchi</span>
                <div>
                    <button class="purchased" style="background-color: green;">
                        Mark as Purchased
                    </button>
                    <button class="remove">
                        Remove
                    </button>
                </div>
            </li>

        3. Append the above <li> parent element
            <ul id="wishlist">
    */

    let productInput = document.getElementById('productInput').value;
    // console.log(productInput);


    // <li>
    let li = document.createElement('li');


    // <span>
    let span = document.createElement('span');
    span.innerText = productInput;
    li.appendChild(span);


    // <div>
    let div = document.createElement('div');

    // <button> button 1
    let button1 = document.createElement('button');
    button1.className = 'purchased';
    button1.style.backgroundColor = 'green';
    button1.innerText = 'Mark as Purchased';
    button1.setAttribute('onclick', 'togglePurchased(this)');
    div.appendChild(button1);

    // <button> button 2
    let button2 = document.createElement('button');
    button2.className = 'remove';
    button2.innerText = 'Remove';
    // onclick="removeItem(this)
    button2.setAttribute('onclick', 'removeItem(this)');
    div.appendChild(button2);


    li.appendChild(div);

    
    // 3. Append the above <li> parent element
    document.getElementById('wishlist').appendChild(li);


    // Clear input field
    document.getElementById('productInput').value = '';

});


// Feel free to write more functions here
//   and call these functions from inside the Event Listener function.
function removeItem(button_elem) {
    console.log(button_elem);

    // Get to grandpa <li>
    let li = button_elem.parentElement.parentElement;
    console.log(li);

    document.getElementById('wishlist').removeChild(li);
}


function togglePurchased(button_elem) {

    console.log(button_elem);

    let span = button_elem.parentElement.parentElement.children[0];

    if(button_elem.innerText == 'Mark as Purchased') {
        span.style.textDecoration = 'line-through';

        button_elem.innerText = 'Unmark as Purchased';
        button_elem.style.backgroundColor = 'black';
    }
    else {
        // span text already has strikethrough, so need to remove it
        span.style.textDecoration = 'none';

        button_elem.innerText = 'Mark as Purchased';
        button_elem.style.backgroundColor = 'green';
    }

    console.log(span);


}