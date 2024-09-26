const root = Vue.createApp({

    data() {
        return {
            // DO NOT MODIFY DATA PROPERTIES (USE AS IS)

            // Array of Strings
            table_headers: [
                "Name",
                "Photo",
                "# Likes",
                "Like Button",
                "Dislike Button"
            ],

            // Array of Objects
            celebrities: [
                {
                    name: "Justin Bieber",
                    likes: 0,
                    photo: "photos/Justin.jpg"
                },
                {
                    name: "Selena Gomez",
                    likes: 0,
                    photo: "photos/selena.jpg"
                },
                {
                    name: "Demi Lovato",
                    likes: 0,
                    photo: "photos/demi.jpg"
                },
                {
                    name: "Hey Instacat",
                    likes: 0,
                    photo: "photos/hey.jpg"
                }
            ]
        };
    },

    methods: {
        add_like(index) {
            // ADD YOUR CODE BELOW
            // Logic to add a like to the celebrity
            this.celebrities[index].likes += 1;  
            
            // if (this.celebrities[index].likes > 5){
            //     var color = document.getElementsByClassName("color")[0];
            //     console.log(color);
            // }
        },

        delete_like(index) {
            // ADD YOUR CODE BELOW
            // Logic to add a like to the celebrity
            // NOTE: The minimum allowed # of likes is ZERO (0).
            //       # of likes cannot be a negative number.

            this.celebrities[index].likes -= 1;  
            
            if (this.celebrities[index].likes <= 0){
                this.celebrities[index].likes = 0;
            }


        }
    }

});

root.mount('#root');