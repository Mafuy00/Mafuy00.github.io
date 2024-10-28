// Vue instance

const INTERNAL_API_DIR_PATH = "api/";
const INTERNAL_API_ENDPOINT_URL = "api/pets.php";


var app = Vue.createApp({

    // DO NOT MODIFY THIS
    data() {
        return {
            category_list: {}, // Store pet categories and pets
            selected_pets: [], // Store pets in the selected category
            selected_pet: null // Store the selected pet details
        };
    },

    // DO NOT MODIFY THIS
    methods: {

        fetch_categories() {
            console.log("=== [START] fetch_categories() ===");

            axios.get(INTERNAL_API_ENDPOINT_URL)
            .then(response => {
                this.category_list = response.data;
            })
            .catch(error => {
                console.error("Error fetching categories:", error);
            });

            console.log("=== [END] fetch_categories() ===");
        },

        select_category(category) {
            console.log("=== [START] select_category() ===");

            this.selected_pets = this.category_list[category]; // Set the pets for the selected category
            this.selected_pet = null; // Clear any previously selected pet

            console.log("=== [END] select_category() ===");
        },

        select_pet(pet) {
            console.log("=== [START] select_pet() ===");

            this.selected_pet = pet; // Set the selected pet

            console.log("=== [END] select_pet() ===");
        }
    },

    // DO NOT MODIFY THIS
    created() {
        console.log("=== [START] created() ===");

        this.fetch_categories();

        console.log("=== [END] created() ===");
    }
});


// Task 1
app.component('category-list', {

    // Complete this section
    props: [  ],

    // Complete this section
    template: `
        
    `
});


// Task 2
app.component('pet-list', {

    // Complete this section
    props: [  ],

    // Complete this section
    template: `
        
    `
});


// Task 3
app.component('pet-detail', {

    // Complete this section
    props: [  ],

    // Complete this section
    template: `
        
    `
});


// DO NOT REMOVE THIS
app.mount("#app");
