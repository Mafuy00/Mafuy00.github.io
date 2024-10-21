const app = Vue.createApp({

    // Data Properties
    data() {
        return {
            
        }
    },


    // Methods
    methods: {

        get_all() {

            console.log("=== [START] get_all() ===");

            // Get all stars from KrazyStars API
            let api_endpoint_url = 'http://krazywoman.com/krazystars/api/star/read.php';

            axios.get(api_endpoint_url)
            .then(response => {

                console.log("=== [GOT API RESPONSE] get_all_stars() ")


            })
            .catch(error => {
                console.log(error.message)
            })

            console.log("=== [END] get_all() ===");

        }
    },

    
    // This will run when the page loads for the first time
    created() {
        console.log("=== [START] created() ===");
        
        console.log("=== [END] created() ===");
    }

});

app.mount("#root");