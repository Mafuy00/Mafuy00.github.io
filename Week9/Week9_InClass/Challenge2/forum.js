const app = Vue.createApp({

    // Data Properties
    data() {
        return {
            
            // Sample forum posts are keyed in here by default
            // so that you can test the table <tr> display.
            posts: [
                {
                    author: "Justin Bieber",
                    category: "Music",
                    comment: "Baby baby you are my baby",
                    create_timestamp: "2024-01-11 16:00:00",
                    id: 1
                },
                {
                    author: "Selena Gomez",
                    category: "Love",
                    comment: "I don't actually like dates. I get awkward as I never know what to do.",
                    create_timestamp: "2024-04-01 22:00:00",
                    id: 2
                }
            ],

            new_author: '',

            new_category: '',

            new_comment: ''
        }
    },


    // Methods
    methods: {

        get_posts() {

            console.log("=== [START] get_posts() ===");

            let api_endpoint_url = "http://localhost/krazyforum/api/forum/read.php";

            axios.get(api_endpoint_url)
            .then(response => {

                // YOUR CODE GOES HERE

            })
            .catch(error => {
                console.log(error.message)
            })

            console.log("=== [END] get_posts() ===");

        },

        insert_new_post() {

            console.log("=== [START] insert_new_post() ===");

            let api_endpoint_url = "http://localhost/krazyforum/api/forum/write.php";

            // New post as a JavaScript object
            // MODIFY THE BELOW
            // DATA CANNOT BE HARD-CODED
            // DATA COME FROM THE USER INPUT
            let new_post = {
                author: "Tiger Shroff",
                category: "Just Saying",
                comment: "I am not at all stylish. For me, style is a state of mind and individuality."
            }

            axios.get(api_endpoint_url, {
                params: new_post
            })
            .then(response => {

                // YOUR CODE GOES HERE


                // Clear/empty the 3 input fields
                this.new_author = '';
                this.new_category = '';
                this.new_comment = '';

            })
            .catch(error => {
                console.log(error.message);
            })

            console.log("=== [END] insert_new_post() ===");

        }
    },

    // This will run when the page loads for the first time
    created() {
        console.log("=== [START] created() ===");

        // YOUR CODE GOES HERE

        console.log("=== [END] created() ===");
    }

});


// Is the Vue app mounted to the "root" element in weather.html?
// YOUR CODE GOES HERE