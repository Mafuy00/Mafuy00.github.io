var app = Vue.createApp({

    // Data Property
    data() {
        return {
            birth_timestamp: 1726185600000 // Example timestamp (October 13, 2024)
        }
    },

    computed: {

        formatted_date() {
            console.log("=== computed property formatted_date ===");

            return new Date(this.birth_timestamp).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
    }

});

app.mount("#root");