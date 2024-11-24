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

        // Part B - Completed code for add item feature
        var cartDiv = document.getElementById('cart');
        var itemDiv = document.getElementById(selectedOption.value.toLowerCase());

        if (!itemDiv) {
            // Item does not exist, create a new div
            itemDiv = document.createElement('div');
            itemDiv.id = selectedOption.value.toLowerCase();
            itemDiv.classList.add('my-2')
            cartDiv.appendChild(itemDiv);
        }

        // Update data attributes and text in the element
        itemDiv.dataset.quantity = parseInt(itemDiv.dataset.quantity || 0) + parseInt(quantity.value);
        itemDiv.dataset.subtotal = parseInt(itemDiv.dataset.subtotal || 0) + subtotal;
        itemDiv.innerText = `${selectedOption.value} - Quantity: ${itemDiv.dataset.quantity}, Subtotal: $${itemDiv.dataset.subtotal}`;

        // End of Part B

        // Part C - Completed code for delete button
        var deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete Item';
        deleteButton.classList.add('btn', 'btn-danger', 'ms-2');
        deleteButton.addEventListener('click', function () {
            cartDiv.removeChild(itemDiv);
        });

        itemDiv.appendChild(deleteButton);

        // End of Part C

        // Reset the form
        document.getElementById('groceryForm').reset();
    }
}

function showFinalDetails() {
    // Part D - Completed code for showFinalDetails()
    const items = ["rice", "milk", "oil"];
    const dataArray = [];

    let dataExist = false;

    items.forEach(item => {
        const data = {};
        try {
            data.subtotal = document.getElementById(item).dataset.subtotal;
            data.item = item;
            dataArray.push(data);
            dataExist = true;
        } catch (error) {
        }
    });

    if (dataExist) {
        const url = "q3.php";
        console.log(dataArray)
        axios.post(url, { data: dataArray })
            .then(response => {
                const finalResult = response.data;

                const finalPriceElement = document.getElementById("finalPrice");
                finalPriceElement.innerText = "";
                finalPriceElement.style = "";

                const priceText = finalResult.discountReached ?
                    `Final Price (5% discount) = $${finalResult.finalTotal}` :
                    `Final Price = $${finalResult.finalTotal}`;

                finalPriceElement.innerText = priceText;

                window.scrollTo(0, document.body.scrollHeight);
            })
            .catch(error => {
                console.log(error.message);
            });
    }
    // End of Part D
}
