const weather_type_images = {
    "Clear": "images/clear.jpg",
    "Clouds": "images/clouds.jpg",
    "Haze": "images/haze.jpg",
    "Mist": "images/mist.jpg",
    "Rain": "images/rain.jpg",
    "Smoke": "images/smoke.jpg",
    "Snow": "images/snow.jpg",
    "Thunderstorm": "images/thunderstorm.jpg"
};

const temp_images = {
    "Hot": "images/hot.jpg",   // Celsius > 25
    "Okay": "images/okay.jpg", // Celsius 5-25
    "Cold": "images/cold.jpg"  // Celsius < 5
};


// DO NOT CHANGE THE FUNCTION SIGNATURE
function check_weather() {

    console.log("=== [START] check_weather() ===");

    //============================================================================
    // Task 1
    // Key in your own OpenWeatherMap.org API key (DO NOT SHARE IT WITH OTHERS)
    //============================================================================
    const weather_api_key = 'b6766efbc2d213d37e286c647fcebdd2';


    //============================================================================
    // Task 2
    // Retrieve the user input (city name) from <input>
    //============================================================================
    const city = 'Moscow'; // Default value, you need to replace this string with actual user input


    // DO NOT MODIFY THIS
    let api_endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_api_key}&units=metric`;


    axios.get(api_endpoint)
    .then(response => {
        // Inspect what's in the API response
        console.log(response.data);


        //============================================================================
        // Task 3
        // Retrieve the weather info (e.g. Rain, Clouds, etc.)
        //============================================================================
        
        // YOUR CODE GOES HERE
        // Make use of const weather_type_images (at the top)
        // console.log(response.data.weather[0].main);
        // let weather = response.data.weather[0].main;
        // console.log(weather_type_images[weather]);
        // let weatherImg = document.getElementById("weather_images");
        console.log(response.data.weather.length);
        for (let i = 0; i < response.data.weather.length; i++){
            let weather = response.data.weather[i].main;
            let weatherImg = document.getElementById("weather_images");
            weatherImg.innerHTML = 
                `
                <p><img src='${weather_type_images[weather]}'></p>
                `;
        }

        // temp
        // let tempText = ""
        let tempImg = document.getElementById('temperature_image');
        if (response.data.main.temp > 25){
            tempImg.src = temp_images["Hot"];
        } else if (response.data.main.temp < 5) {
            tempImg.src = temp_images["Cold"];
        } else{
            tempImg.src = temp_images["Okay"];
        }

        console.log(tempImg);
        // let getWeatherImg = weatherImg.getElementsByTagName("img");
        // for(img of weatherImg) {

        // }
        // weatherImg.innerHTML = 
        // `
        // <p><img src='${weather_type_images[weather]}'></p>
        // `;
        


        //======================================================================================
        // Task 4
        // Perform JavaScript DOM to reflect weather info and temperature info in the HTML page.
        //======================================================================================

        // YOUR CODE GOES HERE
        // Make use of const temp_images (at the top)
        
    })
    .catch(error => {
        console.log(error.message);
    })
    
    console.log("=== [END] check_weather() ===");
}
