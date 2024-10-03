/*
 Name: Jin Yun Lin
 Email: yunlin.jin.2022
*/

/* YOU MAY MODIFY THIS FILE */


document.getElementById('addButton').addEventListener('click', function() {
    
    // YOUR CODE GOES HERE
    var item = document.getElementById("productInput").value;
    var ul = document.getElementById("wishlist");

    var li = document.createElement("li");
    var span = document.createElement("span");
    var div = document.createElement("div");
    var node = document.createTextNode(item);


    let btn1 = document.createElement("button");
    btn1.className = 'purchased';
    btn1.style.backgroundColor = "green";
    btn1.innerText = "Mark as Purchased";
    btn1.setAttribute('onclick', 'togglePurchased(this)')
    
    let btn2 = document.createElement("button");
    btn2.className = 'remove';
    btn2.style.backgroundColor = "red";
    btn2.innerText = "Remove";
    btn2.setAttribute('onclick', 'removeItem(this)')

    span.appendChild(node);
    li.appendChild(span);
    div.appendChild(btn1);
    div.appendChild(btn2);
    li.appendChild(div);
    ul.appendChild(li)
    // ul.appendChild(div);

    // let str = `<div>
    //                     <button class="purchased" id="purchased" style="background-color: green;
    //                     onclick=mark()">
    //                         Mark as Purchased
    //                     </button>
    //                     <button class="remove">
    //                         Remove
    //                     </button>
    //                 </div>
                    
    //             `;
    

    // li.innerHTML += str;

    // var purchaseBtn = document.createElement("button");
    // var removeBtn = document.createElement("button");
    // var span = document.createElement("span");
    // span.innerHTML = `${item}`;
    // li.appendChild(span);

    // purchaseBtn.class= "purchased";

    // purchaseBtn.style.backgroundColor = "green";
    // purchaseBtn.style.color= "white";
    // purchaseBtn.style.border= "none";
    // purchaseBtn.style.padding= "5px 10px";
    // purchaseBtn.style.cursor= "pointer";
    // purchaseBtn.style.margin = "0px";
    // purchaseBtn.style.alignItems = "right"
    // purchaseBtn.innerText = `Mark as Purchased`;
    // li.appendChild(purchaseBtn);
    
    // removeBtn.style.backgroundColor = "red";
    // removeBtn.style.color= "white";
    // removeBtn.style.border= "none";
    // removeBtn.style.padding= "5px 10px";
    // removeBtn.style.cursor= "pointer";
    // removeBtn.innerText = `Remove`;
    // li.appendChild(removeBtn);


    // and then append child


    // ADVICE
    // Do not CODE right away
    // Always think through the solution logic as a series of steps
    // Write down the steps as pseudocode as COMMENTS first

});


// Feel free to write more functions here
//   and call these functions from inside the Event Listener function.

function removeItem(button_ele){
    console.log(button_ele);

    // Get to grandpa <li>
    let li = button_ele.parentElement.parentElement;
    document.getElementById('wishlist').removeChild(li);

}

function togglePurchased(button_ele){
    let span = button_ele.parentElement.parentElement.children[0];

    if(button_ele.innerText == "Mark as Purchased"){
        span.style.textDecoration = "line-through";

        button_ele.innerText = "Unmark as Purchased";
        button_ele.style.backgroundColor = "black";
    } else {
        span.style.textDecoration = "none";

        button_ele.innerText = "Mark as Purchased";
        button_ele.style.backgroundColor = "green";
    }
}


