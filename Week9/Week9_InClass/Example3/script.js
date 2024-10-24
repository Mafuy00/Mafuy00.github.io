const app = Vue.createApp({

    // Data Properties
    data() {
        return {
            stars: [] // Empty Array
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

                console.log(response.data.records); // this is an array of objects

                // 'this' is a special keyword
                // it refers to this/current Vue app
                this.stars = response.data.records;

                // for (star_obj of this.stars){
                //     stars.push(star_obj.fullname);
                //     console.log(star_obj.fullname);
                // }
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
        // this.get_all();
        console.log("=== [END] created() ===");
    }

});

app.mount("#root");