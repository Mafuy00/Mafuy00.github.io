// Add event listener to the Add button
document.getElementById('addButton').addEventListener('click', function() {

    const productInput = document.getElementById('productInput');
    const productName = productInput.value.trim();

    if (productName !== "") {
        addItemToWishlist(productName);
        
        productInput.value = ""; // Clear the input field
    }
});


// Function to add item to wishlist
function addItemToWishlist(name) {

    const wishlist = document.getElementById('wishlist');
    
    // Create a new list item (li) element
    const listItem = document.createElement('li');
    
    // Create a span element to hold the product name
    const productText = document.createElement('span');
    productText.innerText = name;
    
    // Create the "Remove" button
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.className = 'remove';
    removeButton.addEventListener('click', function() {
        removeItem(listItem);
    });

    // Create the "Mark as Purchased" button
    const purchasedButton = document.createElement('button');
    purchasedButton.innerText = 'Mark as Purchased';
    purchasedButton.className = 'purchased';
    purchasedButton.style.backgroundColor = 'green'; // Set initial background to green
    purchasedButton.addEventListener('click', function() {
        togglePurchased(productText, purchasedButton);
    });

    // Create a div to group the buttons
    const buttonGroup = document.createElement('div');
    buttonGroup.appendChild(purchasedButton);
    buttonGroup.appendChild(removeButton);

    // Append the product text and button group to the list item
    listItem.appendChild(productText);
    listItem.appendChild(buttonGroup);

    // Append the list item to the wishlist
    wishlist.appendChild(listItem);
}


// Function to remove item from wishlist
function removeItem(item) {
    const wishlist = document.getElementById('wishlist');
    wishlist.removeChild(item);
}


// Function to toggle the purchased state
function togglePurchased(itemText, purchasedButton) {

    // Check if the item is already marked as purchased
    if (purchasedButton.innerText === 'Unmark as Purchased') {
        // Unmark as purchased: remove strikethrough, reset button color
        itemText.style.textDecoration = 'none'; // Remove strikethrough
        purchasedButton.innerText = 'Mark as Purchased';
        purchasedButton.style.backgroundColor = 'green'; // Set back to green when unmarked
    }
    else {
        // Mark as purchased: add strikethrough, change button color to black
        itemText.style.textDecoration = 'line-through'; // Add strikethrough
        purchasedButton.innerText = 'Unmark as Purchased';
        purchasedButton.style.backgroundColor = 'black'; // Change background to black when marked
    }
}
