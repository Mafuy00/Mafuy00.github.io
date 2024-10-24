var app = Vue.createApp({
    
    // Data Properties
    data() {
        return {
            
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

            temp_images: {
                "Hot": "images/hot.jpg",   // Celsius > 25
                "Okay": "images/okay.jpg", // Celsius 5-25
                "Cold": "images/cold.jpg"  // Celsius < 5
            },

            city: "Singapore", // user input city

            appid: "43625b733378acfa6190b012b6e24465", // Your OpenWeatherMap API Key

            weather_photo_paths: [
                "images/question.jpg"
            ],

            // TEST for 2 weather case
            // weather_photo_paths: [
            //     "images/rain.jpg",
            //     "images/haze.jpg"
            // ],

            temperature_photo_path: "images/question.jpg"
        }
    },

    methods: {

        check_weather() {

            console.log("=== [START] check_weather() ===");

            let api_endpoint_url = `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.appid}&units=metric`;
            console.log(api_endpoint_url)
            
            axios.get(api_endpoint_url)
            .then(response => {
                
                // Inspect the response.data
                // console.log(response.data)
                
                
                // 1) Retrieve weather info "Rain"
                this.weather_photo_paths = [];

                let weather_info_array = response.data.weather;

                for(weather_object of weather_info_array) {

                    let weather_info = weather_object.main;
                    console.log(weather_info); // "Rain"
    
                    // let weather_photo_path_test = this.weather_type_images[weather_info];
                    // console.log(weather_photo_path_test);
                    this.weather_photo_paths.push(this.weather_type_images[weather_info]);
                }

                console.log(this.weather_photo_paths);

               

                // 2) Retrieve temperature Celsius
                let temperature_info = response.data.main.temp;
                console.log(temperature_info); // 30.xx

                let temp_label = '';

                if( temperature_info > 25 ) {
                    temp_label = "Hot";
                }
                else if (temperature_info >= 5) {
                    temp_label = "Okay";
                }
                else {
                    temp_label = "Cold";
                }

                this.temperature_photo_path = this.temp_images[temp_label];

                // Clear the input field
                this.city = '';
                
            })
            .catch(error => {
                console.log(error.message);
            })

            console.log("=== [END] check_weather() ===");
        }
    }

});

app.mount("#root");