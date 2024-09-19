function get_all() {
    // Step 1
    console.log("[START] get_all()");

    // YOUR CODE GOES HERE
    let api_endpoint_url = "http://krazywoman.com/krazystars/api/star/read.php";

    // Step 2
    // Axios calling API endpoint asynchronously
    axios.get(api_endpoint_url)
    .then(response => {
        // Inspect the response in JS Console
        // console.log(response.data.records); // Array of (star) Objects

        // console.log(response.data.records[0]); // First (star) Object

        // console.log(response.data.records[0].fullname)

        // console.log(response.data.records[0].gender)


        let array_stars = response.data.records; // Array of (star) Objects

        // create and insert an un-ordered list of star fullnames
        var starId = document.getElementById("stars");

        starId.innerHTML = "<ul>";

        for (let i = 0; i < array_stars.length; i++) {
            starId.innerHTML+="<li>"+ array_stars[i].fullname + "</li>";
            console.log(array_stars[i].fullname);
            // response.data.records[i].fullname;
          }

        starId += "</ul>";

        /*
        let ul = document.createElement('ul');

        for (star of array_stars){
            console.log(star.fullname)
            let li = document.createElement('li');
            let li_text = document.createTextNode(star.fullname);
            li.appendChild(li_text);
            ul.appendChild(li);
        }

        // DOM
        document.getElementById('stars').appendChild(ul);
        
        */

    })
    .catch((error) => {
        console.log(error.message);
    })

    // Step 3
    // I will have moved on to this already after Axios went off to do his own thing
    console.log("[END] get_all()");
}

function get_all_template(){
    // Step 1
    console.log("[START] get_all()");

    // YOUR CODE GOES HERE
    let api_endpoint_url = "http://krazywoman.com/krazystars/api/star/read.php";

    // Step 2
    // Axios calling API endpoint asynchronously
    axios.get(api_endpoint_url)
    .then(response => {

        let array_stars = response.data.records; // Array of (star) Objects
        // Template Literals (back tick, `, next to key 1)

        let result_str = `
            <ul>
        `;

        for(star of array_stars) {
            console.log(star);
            result_str += '<li> ${star.fullname}</li>';
        }

        result_str += `
            <ul>
        `;

        document.getElementById('stars').innerHTML = result_str;

    })
    .catch((error) => {
        console.log(error.message);
    })

    // Step 3
    // I will have moved on to this already after Axios went off to do his own thing
    console.log("[END] get_all()");
}

