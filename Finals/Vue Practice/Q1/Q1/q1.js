const app = Vue.createApp({

    data() {
        return {

            // DO NOT MODIFY THIS DATA PROPERTY
            products: [
                { name: "Smartphone", description: "A modern smartphone with excellent features.", votes: 10 },
                { name: "Laptop", description: "A lightweight laptop suitable for everyday tasks.", votes: 5 },
                { name: "Headphones", description: "Noise-cancelling headphones for music lovers.", votes: 8 },
            ]

            // YOU DO NOT NEED TO ADD MORE DATA PROPERTIES
        };
    }

});

// MODIFY AND COMPLETE THIS
app.component("product-list", {

    // COMPLETE THIS
    props: ["products"],

    // COMPLETE THIS
    template: `
        <div>

            ADD YOUR CODE HERE
            <div v-for="item in products">
                <ul>
                    <li>{{item.name}}</li>
                    <li>{{item.description}}</li>
                    <li>{{item.votes}}</li>
                </ul>

            <button @click='vote(item, 1)'>Upvote</button>
            <button @click='vote(item, -1)'>Downvote</button>
            </div>

        </div>
    `,

    methods: {
        // COMPLETE THIS
        // product  :  Object
        // value    :  Numeric (integer)
        // Increment/Decrement a given product object's 'votes' value
        vote(product, value) {
            
            // YOUR CODE GOES HERE
            // pass through item arr as the product, 1 = +1, -1 = -1
            product.votes += value;

        }
    }

});


app.mount("#app");
