var app = Vue.createApp({

    // Data Property
    data() {
        return {
<<<<<<< HEAD
            birth_timestamp: 1726185600000, // Example timestamp (October 13, 2024)
            aapl_stock_1min: 700.25 // Price in USD
            // Imagine your Vue app (via Axios API interaction)
            // retrieves a new minutely AAPL stock price

            // Right now, the value is hard-coded
            // But imagine... this value can change:
            // (1) Input field (form), and the value can change
            // (2) Retrieve birth timestamp from some external API
=======
            birth_timestamp: 1726185600000 // Example timestamp (October 13, 2024)
>>>>>>> 962da8cc2b61f66c48449b2d12420cc8b5ebbb02
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
<<<<<<< HEAD
            // Return value will be cached by the browser
            // 'formatted_date' : 'September 13, 2024'
        },

        aapl_stock_1min_value() {
            return "AAPL latest 1 minute stock price (USD): " + this.aapl_stock_1min;
            // Browser will end up refreshing/renewing this cached value every minute
            // Suppose that the frequency of viewing this computed property via front-end
            // webpage is minutely
=======
>>>>>>> 962da8cc2b61f66c48449b2d12420cc8b5ebbb02
        }
    }

});

app.mount("#root");