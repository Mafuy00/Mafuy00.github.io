const root = Vue.createApp({

    // DO NOT MODIFY DATA PROPERTIES (USE AS IS)
    data() {
        return {
            new_pet_name: '',
            new_pet_age: null,
            pets: []
        };
    },

    methods: {
        add_pet() {
            // ADD YOUR CODE BELOW
            // Logic to add a new pet to the list (pets)

        },

        increase_age(index) {
            // ADD YOUR CODE BELOW
            // Logic to increase pet's age
            
        }
    }

});

root.mount('#root');