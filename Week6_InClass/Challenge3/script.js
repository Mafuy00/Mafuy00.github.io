const root = Vue.createApp({

    // Data Properties
    data() {
        return {

            // DO NOT MODIFY THESE DATA PROPERTIES (USE AS IS)

            // Array of Objects (Celebrities)
            celebrities: [
                {
                    name: "Justin Bieber",
                    photo: "photos/justin.jpg"
                },
                {
                    name: "Selena Gomez",
                    photo: "photos/selena.jpg"
                },
                {
                    name: "Demi Lovato",
                    photo: "photos/demi.jpg"
                }
            ],

            // Array of Objects (Pets)
            pets: [
                {
                    name: "Buddy",
                    type: "Dog",
                    photo: "photos/dog.jpg"
                },
                {
                    name: "Whiskers",
                    type: "Cat",
                    photo: "photos/cat.jpg"
                },
                {
                    name: "Nibbles",
                    type: "Hamster",
                    photo: "photos/hamster.jpg"
                }
            ],

            // Selected celebrity and pet
            selected_celebrity: null,
            selected_pet: null,

            // Match flag
            match_made: false,
            celebrity_message: ""
        };
    },

    methods: {
        generate_match() {
            // ADD YOUR CODE BELOW
            // Logic to randomly select a celebrity and a pet

        },
        
        reset_match() {
            // ADD YOUR CODE BELOW
            // Logic to reset the match

        }
    }
});

root.mount("#root");
