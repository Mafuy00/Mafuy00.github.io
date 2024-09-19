// OpenWeatherMaps API key - Key in your own below
// NEVER SAVE API keys this way - you must save them securely (e.g. environment variable)
const weather_api_key = 'b6766efbc2d213d37e286c647fcebdd2';

function get_temperature() {

    console.log("[START] get_temperature()");

    // Retrieve the user-supplied city from HTML

    let city = document.getElementById("city").value; // Replace Pyongyang with it
    let units = 'metric';
    console.log(city);

    let api_endpoint_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_api_key}&units=${units}`;

    axios.get(api_endpoint_url)
    .then(response => {
        console.log(response.data);
        console.log(response.data.main);

        // Retrieve Temperature (Celsius) and display in the HTML page
        let temp = document.getElementById("info");
        let p = document.createElement("p");
        let p_text = document.createTextNode("The temperature is: " + response.data.main.temp);
        p.appendChild(p_text);
        let br = document.createElement("br");
        p.appendChild(br);
        temp.appendChild(p);

        // Retrieve Humidity (%) and display in the HTML page
        let humidity_text = document.createTextNode(`The humidity is: ${response.data.main.humidity}%`);
        p.appendChild(humidity_text);
        temp.appendChild(p);

        // Javascript DOM
        document.getElementById("info")

    })

    console.log("[END] get_temperature()");
}
