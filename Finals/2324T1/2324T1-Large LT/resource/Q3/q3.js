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
        var price = selectedOption.getAttribute('data-price');
        var subtotal = quantity.value * price;

        // Part B - To complete code for add item feature
        //
        //
        // End of Part B

        // Part C - To complete code for delete button
        //
        //
        // End of Part C

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