const app = Vue.createApp({

    // Data Properties
    data() {
        return {

            posts: '',
            new_author: '',
            new_category: '',
            new_comment: ''
        }
    },


    // Methods
    methods: {

        get_posts() {

            console.log("=== [START] get_posts() ===");

            // 1) Get all comments from KrazyForum API
            let api_endpoint_url = "http://localhost/krazyforum/api/forum/read.php";

            axios.get(api_endpoint_url)
            .then(response => {

                console.log("=== [GOT API RESPONSE] get_posts() ")

                console.log(response.data.records)

                this.posts = response.data.records // Array

            })
            .catch(error => {
                console.log(error.message)
            })

            console.log("=== [END] get_posts() ===");

        },

        insert_new_post() {

            console.log("=== [START] insert_new_post() ===");



            // 1) Get all comments from KrazyForum API
            let api_endpoint_url = "http://localhost/krazyforum/api/forum/write.php";

            // New post as a JavaScript object
            let new_post = {
                author: this.new_author,
                category: this.new_category,
                comment: this.new_comment
            }

            axios.get(api_endpoint_url, {
                params: new_post
            })
            .then(response => {

                console.log("=== [GOT API RESPONSE] insert_new_post() ");

                console.log(response.data);

                // Update posts (array)
                this.get_posts();

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

        this.get_posts();
        
        console.log("=== [END] created() ===");
    }

});

app.mount("#root");