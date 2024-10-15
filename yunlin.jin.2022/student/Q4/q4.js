/*
  NAME: Jin Yun Lin
  EMAIL: yunlin.jin.2022
*/
const API_URL = 'api.php';

//Part A: Define getStations function which uses Axios GET request for 
//retrieving all bike stations and availability information. The getStations function
//should also call displayStations and populateStationDropdowns functions. (1 m)
function getStations(){

    axios.get(API_URL)
    .then(response => {
            // process response.data object
        console.log(response.data);
        // for (i=0;i<response.data.length;i++){
            displayStations(response.data);
            populateStationDropdowns(response.data)
        // }
        // for (i=0;i<response.data.length;i++){
            
            // console.log();
            // console.log(response.data[i].available_bikes);
            // console.log(response.data[i].available_docks);

            // var div = document.createElement("div");
            // var h3 = document.createElement("h3");
            // var bikes = document.createElement("p");
            // var docks = document.createElement("p");

            // div.className = 'station-item';

            // h3.innerText += response.data[i].name;
            // bikes.innerText += `Available bikes: ${response.data[i].available_bikes}`;
            // docks.innerText += `Available docks: ${response.data[i].available_docks}`;

            // div.appendChild(h3);
            // div.appendChild(bikes);
            // div.appendChild(docks);

            // const stationList = document.getElementById('station-list');
            // stationList.appendChild(div);


        // }

    })
}
    

function displayStations(stations) {
    const stationList = document.getElementById('station-list');
    stationList.textContent = '';
    //Part A: Display the list of bike stations and the availability of bicycles and docks in each (1 m)
 
    for (i=0;i<stations.length;i++){
        console.log(stations[i].name);
        console.log(stations[i].available_bikes);
        console.log(stations[i].available_docks);

        var div = document.createElement("div");
        var h3 = document.createElement("h3");
        var bikes = document.createElement("p");
        var docks = document.createElement("p");

        div.className = 'station-item';

        h3.innerText += stations[i].name;
        bikes.innerText += `Available bikes: ${stations[i].available_bikes}`;
        docks.innerText += `Available docks: ${stations[i].available_docks}`;

        div.appendChild(h3);
        div.appendChild(bikes);
        div.appendChild(docks);

        const stationList = document.getElementById('station-list');
        stationList.appendChild(div);


    }
    // axios.get(API_URL)
    // .then(response => {
    //     console.log(response.data);
    //     for (i=0;i<response.data.length;i++){
    //         console.log(response.data[i].name);
    //         console.log(response.data[i].available_bikes);
    //         console.log(response.data[i].available_docks);

    //         var div = document.createElement("div");
    //         var h3 = document.createElement("h3");
    //         var bikes = document.createElement("p");
    //         var docks = document.createElement("p");

    //         div.className = 'station-item';

    //         h3.innerText += response.data[i].name;
    //         bikes.innerText += `Available bikes: ${response.data[i].available_bikes}`;
    //         docks.innerText += `Available docks: ${response.data[i].available_docks}`;

    //         div.appendChild(h3);
    //         div.appendChild(bikes);
    //         div.appendChild(docks);

    //         const stationList = document.getElementById('station-list');
    //         stationList.appendChild(div);


    //     }

    // })
    
    console.log(stationList);
}

function populateStationDropdowns(stations) {
    const stationSelect = document.getElementById('station-select');
    const returnStationSelect = document.getElementById('return-station-select');
    //Part B: Populate list of bike stations in drop down list (1 m)
    for (i=0;i<stations.length;i++){
        console.log(stations[i].name);
        console.log(stations[i].available_bikes);
        console.log(stations[i].available_docks);

        var option = document.createElement("option");
        var option2 = document.createElement("option");

        // var h3 = document.createElement("h3");
        // var bikes = document.createElement("p");
        // var docks = document.createElement("p");

        option.innerText += stations[i].name;
        option2.innerText += stations[i].name;

        stationSelect.appendChild(option);
        returnStationSelect.appendChild(option2);


    }
}

async function postAction(action, stationId) {
    //Part C: Use Axios POST request for bike rental or return at selected bike station (1.5 m)
    const stationSelect = document.getElementById('station-select').value;
    const returnStationSelect = document.getElementById('return-station-select').value;
    axios.post(`${API_URL}?query=${stationSelect}`,{
        stationSelected: stationSelect
      })
      .then(function (response){
        alert("Bike rented successfully");
      })
      .catch(function (error) {
        console.log(error);
      });
    //Part D: Handle erroneous cases for bike rental or return (0.5 m)

}

async function rentBike() {
    const stationId = document.getElementById('station-select').value;
    if (!stationId) {
        alert('Please select a station');
        return;
    }
    
    await postAction('rent', stationId);
    getStations();
    
}

async function returnBike() {
    const stationId = document.getElementById('return-station-select').value;
    if (!stationId) {
        alert('Please select a station');
        return;
    }
    
    await postAction('return', stationId);
    getStations();
    
}

// Add event listeners
document.getElementById('rent-btn').addEventListener('click', rentBike);
document.getElementById('return-btn').addEventListener('click', returnBike);

// Initial load of stations
getStations();