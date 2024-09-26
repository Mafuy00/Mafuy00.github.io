const main = Vue.createApp({
     
    // Data Properties
    // Holds data that HTML can refer to
    data() {
        return {
            greeting: "Hello World",
            fullname: "Supreme Leader",
            pet: "<p style='color: blue'> Quiddy </p>",
            // Existing fruits in the basket
            fruits: [
                'Apple',
                'Orange',
                'Pear'
            ],
            add_fruit_name: 'new fruit name',
            remove_fruit_name: '',
            news_url: 'https://www.channelnewsasia.com/'
        }
     },

     // Business Logics
     methods: {
        add_fruit() {

            console.log("Im inside add_fruit");
            console.log(this.add_fruit_name);
            this.fruits.push(this.add_fruit_name);

            this.add_fruit_name = '';

            // YOUR CODE GOES HERE
            // let newFruitName = document.getElementById("add_fruit_name").value;
            // console.log(newFruitName);
            // var ul = document.getElementById("fruits");
        
            // var li = document.createElement("li");
            // var node = document.createTextNode(newFruitName);
            // li.appendChild(node);
            // ul.appendChild(li);
        },
        remove_fruit() {
            // this.fruits.splice(this.fruits.indexOf(this.remove_fruit_name),1);

            // this.remove_fruit_name = '';

            let index = this.fruits.indexOf(this.remove_fruit_name);
            console.log(index);

            if(index >= 0){
                this.fruits.splice(index,1);
            }

        }

    }
})

// Link this VUe app to HTML
main.mount('#main');



// Task 2
// Add a new fruit input by the user
// DO NOT USE Template Literals

    // console.log(newFruitName);
    // var ul = document.getElementById("fruits");

    // var newFruit = document.getElementById("add_fruit_name").value;
    
    // var newItem = document.createElement("li")
    // var node = document.createTextNode(newFruit);
    // newItem.appendChild(node);
    // ul.appendChild(newItem);
    // console.log(newFruit);

    


// Task 3
// Remove a fruit whose name is input by the user
// If the given fruit name can't be found, then don't do anything.
// DO NOT USE Template Literals
