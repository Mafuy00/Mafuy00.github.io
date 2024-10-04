/*
    Name:  YOUR NAME GOES HERE (KIM Pyong Yang)
    Email: YOUR SMU EMAIL ID GOES HERE (e.g. kim.pyongyang.2023)
*/

/* YOU MAY MODIFY THIS FILE */


document.getElementById('getPackageBtn').addEventListener('click', function() {

    // YOUR CODE GOES HERE
    const key = document.getElementById("packageSelect").value;

    let url = `travel_api.php?package=${key}`;

    axios.get(url)
    .then(response => {
            // process response.data object
        console.log(response.data);

        let name = response.data.name;
        let duration = response.data.duration;
        let description = response.data.description;

        const button = document.getElementById("getPackageBtn");
        let packageDetails = document.getElementById("packageDetails");
        

        if (key !== ""){
            button.disabled = false;
            packageDetails.style.display = "block";
            let packageName = document.getElementById("packageName");
            packageName.innerText = name;

            let packageDuration = document.getElementById("packageDuration");
            packageDuration.innerText = duration;

            let packageDescription = document.getElementById("packageDescription");
            packageDescription.innerText = description;
            
        }

        /*
        <div id="packageDetails" style="display: none">
        <p><strong>Package Name:</strong> <span id="packageName"></span></p>
        <p><strong>Duration:</strong> <span id="packageDuration"></span></p>
        <p><strong>Description:</strong> <span id="packageDescription"></span></p>
        </div>
        */

    })

    // axios.post(`travel_api.php?query=${categoryValue}`,{
    //     category: categoryValue
    //   })
    //   .then(function (response){
    //     var p = document.createElement("p");
    //     p.innerText = response.data;
    //     jokeText.appendChild(p);
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });



    // ADVICE
    // Do not CODE right away
    // Always think through the solution logic as a series of steps
    // Write down the steps as pseudocode as COMMENTS first



    
});


document.getElementById('packageSelect').addEventListener('change', function() {

    // YOUR CODE GOES HERE
    
    // ADVICE
    // Do not CODE right away
    // Always think through the solution logic as a series of steps
    // Write down the steps as pseudocode as COMMENTS first

    
    /*
      1. Retrieve user selection from <select id="packageSelect">
      2. Append the country, e.g Korea to api_endpoint_url
      3. Use axios to call API
    */

    const button = document.getElementById("getPackageBtn");
    const key = document.getElementById("packageSelect").value;

    let url = `travel_api.php?package=${key}`;

    axios.get(url)
    .then(response => {
            // process response.data object
        console.log(response.data);
    
        if (key == ""){
            button.disabled = true;
            return "";
        } else {
            button.disabled = false;
        }

        document.getElementById('packageDetails').style.display = 'none';


    })
    .catch(error => {
        // process error object
        console.log("Error somewhere");
    }); 

});