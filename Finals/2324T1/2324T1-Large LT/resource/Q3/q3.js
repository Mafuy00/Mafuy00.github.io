// Name:  
// Email:

// DO NOT MODIFY
const riceBasePrice = 12
const milkBasePrice = 5
const oilBasePrice = 8
// END 

function addToCart() {
    var groceryItem = document.getElementById('groceryItem');
    var quantity = document.getElementById('quantity');

    if (groceryItem.validity.valid && quantity.validity.valid && quantity.value > 0) {
        var selectedOption = groceryItem.options[groceryItem.selectedIndex];
        var itemName = selectedOption.value; // Get the item's name (e.g., "Milk")
        var price = selectedOption.getAttribute('data-price');
        var newQuantity = parseInt(quantity.value);
        var itemId = itemName.toLowerCase(); // Unique ID based on the item name
        var existingItem = document.getElementById(itemId);

        if (existingItem) {
            // Update existing item's quantity and subtotal
            var currentQuantity = parseInt(existingItem.getAttribute('data-quantity'));
            var updatedQuantity = currentQuantity + newQuantity;
            var updatedSubtotal = updatedQuantity * price;

            // Update the quantity and subtotal text without removing the delete button
            var textNode = existingItem.querySelector(".item-text");
            textNode.textContent = `${itemName} - Quantity: ${updatedQuantity}, Subtotal: $${updatedSubtotal}`;
            existingItem.setAttribute('data-quantity', updatedQuantity);
        } else {
            // Create a new list item for the item
            var li = document.createElement("li");
            li.id = itemId; // Set unique ID for the item
            li.setAttribute('data-quantity', newQuantity);
            li.style.listStyle = "none";

            // Add item text
            var textNode = document.createElement("span");
            textNode.className = "item-text";
            textNode.textContent = `${itemName} - Quantity: ${newQuantity}, Subtotal: $${newQuantity * price}`;
            li.appendChild(textNode);

            // Add delete button
            var deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete Item";
            deleteBtn.className = "btn btn-danger btn-sm ms-2";

            // Add delete button functionality
            deleteBtn.onclick = function () {
                li.remove(); // Remove the item from the cart
            };

            li.appendChild(deleteBtn);
            document.getElementById("cart").appendChild(li);
        }

        // Reset the form
        document.getElementById('groceryForm').reset();
    }
}


function showFinalDetails() {
    // Part D - To complete code for showFinalDetails()
    //
    //
    // End of Part D
} 