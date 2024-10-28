// Vue instance
const main = Vue.createApp({

    // Data Properties
    // DO NOT MODIFY THIS
    data() {
        return {

            total_cost: 0,

            products: [
                { id: 1, name: 'Laptop', price: 1200 },
                { id: 2, name: 'Smartphone', price: 800 },
                { id: 3, name: 'Headphones', price: 150 }
            ],
            
            clearance_products: [
                { id: 11, name: 'Gaming Keyboards', price: 200, discount: "20%" },
                { id: 12, name: 'HDMI Cables', price: 50, discount: "30%" },
                { id: 13, name: 'Bluetooth Mouse', price: 100, discount: "50%" }
            ]
        }
    },

    methods: {
        // DO NOT MODIFY THIS
        add_to_cart(product_price) {
            this.total_cost += product_price;
        }
    }
});

// TODO
main.component('product-component', {
    // product is an Object
    props: [ 'product' ],

    template: `
        <div>
            <h3>{{ product.name }}: $ {{ product.price }}</h3>
            <slot></slot>
            <button @click="add_to_parent_cart">Add to Cart</button>
            <br>
            <button @click="$emit('add-to-cart',this.product.price)">
                Add to Cart (V2)
            </button>
        </div>
    `,

    methods: {
        add_to_parent_cart() {
            console.log("=== [START] product-component :: add_to_parent_cart() ===");

            // YOUR CODE GOES HERE
            // access parent vue instance's total_cost
            // and increment the value
            // CANNOT DO THIS directly
            // 1) emit's name is add-to-cart
            // 2) to call it

            this.$emit('add-to-cart', this.product.price);

            console.log("=== [END] product-component :: add_to_parent_cart() ===");
        }
    }
});


// Link this Vue instance with <div id="main">
main.mount("#main");