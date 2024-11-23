// DO NOT MODIFY THIS FILE

const app = Vue.createApp({

    data() {
        return {

            groceryItems: [
                { name: "Apples", price: 3 },
                { name: "Bananas", price: 2 },
                { name: "Carrots", price: 1.5 },
                { name: "Potatoes", price: 4 },
                { name: "Milk", price: 2.5 }
            ],

            shoppingList: []
        };
    },

    computed: {
        totalCost() {
            let total = 0;
            for (let i = 0; i < this.shoppingList.length; i++) {
                total += this.shoppingList[i].price;
            }
            return total;
        }
    },

    methods: {

        addToShoppingList(item) {
            if (!this.shoppingList.includes(item)) {
                this.shoppingList.push(item);
            }
        },

        removeFromShoppingList(index) {
            this.shoppingList.splice(index, 1);
        }

    }

});

app.component("grocery-list", {
    props: ["items"],
    emits: ["add-to-list"],
    template: `
        <div>

            <h2>Available Groceries</h2>

            <ul>
                <li v-for="item in items" :key="item.name">
                    {{ item.name }} - \${{ item.price }}
                    <button class="add" @click="$emit('add-to-list', item)">
                        Add to List
                    </button>
                </li>
            </ul>
            
        </div>
    `
});

app.mount("#app");
