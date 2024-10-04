/* YOU MAY MODIFY THIS FILE */

document.getElementById('getPackageBtn').addEventListener('click', function() {

    const selectedPackage = document.getElementById('packageSelect').value;

    if(selectedPackage !== '') {

        // Axios GET request to fetch package data from the local PHP API
        const api_endpoint_url = `travel_api.php?package=${selectedPackage}`;

        axios.get(api_endpoint_url)
        .then(function (response) {
            // Update the travel package details on the page with the fetched data
            document.getElementById('packageName').innerText = response.data.name;
            document.getElementById('packageDuration').innerText = response.data.duration;
            document.getElementById('packageDescription').innerText = response.data.description;

            // Make <div id='packageDetails'> visible
            document.getElementById('packageDetails').style.display = 'block';
        })
        .catch(function (error) {
            console.error('Error fetching travel package data:', error);
        });


        // Alternatively, you can supply the 'package' parameter and value as follows:
        //
        // axios.get('travel_api.php', {
        //     params: {
        //         package: selectedPackage
        //     }
        // })
        // .then(function (response) {
        //     // Update the travel package details on the page with the fetched data
        //     document.getElementById('packageName').innerText = response.data.name;
        //     document.getElementById('packageDuration').innerText = response.data.duration;
        //     document.getElementById('packageDescription').innerText = response.data.description;

        //     // Make <div id='packageDetails'> visible
        //     document.getElementById('packageDetails').style.display = 'block';
        // })
        // .catch(function (error) {
        //     console.error('Error fetching travel package data:', error);
        // });
    }
});


document.getElementById('packageSelect').addEventListener('change', function() {
    const selectedPackage = document.getElementById('packageSelect').value;

    if(selectedPackage === '') {
        document.getElementById('getPackageBtn').disabled = true;
        
    }
    else {
        document.getElementById('getPackageBtn').disabled = false;
    }

    document.getElementById('packageDetails').style.display = 'none';
});