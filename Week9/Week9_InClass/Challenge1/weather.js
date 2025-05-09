var app = Vue.createApp({
<<<<<<< HEAD
    
    // Data Properties
    data() {
        return {
            
=======
    // Data Properties
    data() {
        return {
>>>>>>> 962da8cc2b61f66c48449b2d12420cc8b5ebbb02
            // DO NOT MODIFY THIS DATA PROPERTY
            weather_types: [
                "Clear",
                "Clouds",
                "Haze",
                "Mist",
                "Rain",
                "Smoke",
                "Snow",
                "Thunderstorm"
            ],

            // DO NOT MODIFY THIS DATA PROPERTY
            weather_type_images: {
                "Clear": "images/clear.jpg",
                "Clouds": "images/clouds.jpg",
                "Haze": "images/haze.jpg",
                "Mist": "images/mist.jpg",
                "Rain": "images/rain.jpg",
                "Smoke": "images/smoke.jpg",
                "Snow": "images/snow.jpg",
                "Thunderstorm": "images/thunderstorm.jpg"
            },

            // DO NOT MODIFY THIS DATA PROPERTY
            temp_images: {
                "Hot": "images/hot.jpg",   // Celsius > 25
                "Okay": "images/okay.jpg", // Celsius 5-25
                "Cold": "images/cold.jpg"  // Celsius < 5
            },

            city: "Singapore", // user input city

            // YOUR OpenWeatherMap API Key
            // Initialize it to your own key
            appid: "b6766efbc2d213d37e286c647fcebdd2",

            weather_photo_paths: [
                "images/question.jpg"
            ],

            temperature_photo_path: "images/question.jpg"

            // ADD MORE DATA PROPERTIES
            // BELOW
            // AS NEEDED
        }
    },

    methods: {
<<<<<<< HEAD

        check_weather() {

=======
        check_weather() {
>>>>>>> 962da8cc2b61f66c48449b2d12420cc8b5ebbb02
            console.log("=== [START] check_weather() ===");

            let api_endpoint_url = `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.appid}&units=metric`;
            console.log(api_endpoint_url)
<<<<<<< HEAD
            
            axios.get(api_endpoint_url)
            .then(response => {
                
                // Inspect the response.data
                console.log(response.data)
                
                
                // 1) Retrieve weather info such as "Rain"
                //    from response.data
                // YOUR CODE GOES HERE

               

                // 2) Retrieve temperature Celsius such as 30.5
                //    from response.data
                // YOUR CODE GOES HERE


                // Clear the input field
                this.city = '';
                
=======

            axios.get(api_endpoint_url)
            .then(response => {
                // Inspect the response.data
                console.log(response.data)

                // 1) Retrieve weather info such as "Rain"
                //    from response.data
                let weather = response.data.weather[0].main;
                let weatherImgPath = this.weather_type_images[weather];
                this.weather_photo_paths = [weatherImgPath];

                // 2) Retrieve temperature Celsius such as 30.5
                //    from response.data
                let temp = response.data.main.temp;
                let tempImgPath;
                if (temp > 25) {
                    tempImgPath = this.temp_images["Hot"];
                } else if (temp < 5) {
                    tempImgPath = this.temp_images["Cold"];
                } else {
                    tempImgPath = this.temp_images["Okay"];
                }
                this.temperature_photo_path = tempImgPath;

                // Clear the input field
                this.city = '';
>>>>>>> 962da8cc2b61f66c48449b2d12420cc8b5ebbb02
            })
            .catch(error => {
                console.log(error.message);
            })

            console.log("=== [END] check_weather() ===");
        }
    }
<<<<<<< HEAD

});


// Is the Vue app mounted to the "root" element in weather.html?
// YOUR CODE GOES HERE
=======
});

// Mount the Vue app to the "root" element in weather.html
app.mount('#root');
>>>>>>> 962da8cc2b61f66c48449b2d12420cc8b5ebbb02
