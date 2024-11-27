/*
    Name  : 
    Email : 
*/
const app = Vue.createApp({

    data() {
        return {
            singers: {}, // DO NOT MODIFY/REMOVE THIS
            
            // YOU MAY ADD MORE
            // DATA PROPERTIES
        };
    },

    // DO NOT MODIFY THIS SECTION
    created() {
        // Fetch data from JSON file using Axios
        var self = this;
        axios.get('q3_data.json')  // Updated to fetch from JSON file
        .then(response => {
            self.singers = response.data;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    },

    methods: {
        
        // YOU MAY ADD MORE METHODS

    }

});


app.mount('#app');
