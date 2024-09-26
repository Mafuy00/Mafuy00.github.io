// Existing fruits in the basket
let fruits = [
    'Apple',
    'Orange',
    'Pear'
];


// Task 1
// When normal.html loads (fresh load),
//  the HTML page must display the existing fruits in <ul id='fruits'>
// Each fruit will appear as an <li>...</li>
// DO NOT USE Template Literals
function populate_fruits() {
    // YOUR CODE GOES HERE
    var ul = document.getElementById("fruits");

    // createElement takes in the values of ul, li etc. html elements

    for (let i=0;i<fruits.length;i++){
        var newItem = document.createElement("li")
        var node = document.createTextNode(fruits[i])
        newItem.appendChild(node);
        ul.appendChild(newItem);
        console.log(fruits[i])
    }
}

// Task 2
// Add a new fruit input by the user
// DO NOT USE Template Literals
function add_fruit() {
    // YOUR CODE GOES HERE
    let newFruitName = document.getElementById("add_fruit_name").value;
    console.log(newFruitName);
    var ul = document.getElementById("fruits");

    var li = document.createElement("li");
    var node = document.createTextNode(newFruitName);
    li.appendChild(node);
    ul.appendChild(li);
    // console.log(newFruitName);
    // var ul = document.getElementById("fruits");

    // var newFruit = document.getElementById("add_fruit_name").value;
    
    // var newItem = document.createElement("li")
    // var node = document.createTextNode(newFruit);
    // newItem.appendChild(node);
    // ul.appendChild(newItem);
    // console.log(newFruit);

    
}

// Task 3
// Remove a fruit whose name is input by the user
// If the given fruit name can't be found, then don't do anything.
// DO NOT USE Template Literals
function remove_fruit() {
    // YOUR CODE GOES HERE
    var ul = document.getElementById("fruits");

    var getDeleteItem = document.getElementById("remove_fruit_name").value;

    var items = ul.getElementsByTagName("li");

    for (let i = 0; i < items.length; i++) {
        if (items[i].textContent === getDeleteItem) {
            ul.removeChild(items[i]);
            break;
    }
}


    console.log(getDeleteItem);

    // for (fruitName of fruits){
    //     console.log(fruitName);
    //     if (fruitName == getDeleteItem){
    //         ul.removeChild(getDeleteItem);
    //     }
    // }


}