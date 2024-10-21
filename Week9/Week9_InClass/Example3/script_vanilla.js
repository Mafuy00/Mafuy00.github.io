function get_all() {

    console.log("[START] get_all()");


    let api_endpoint_url = 'http://krazywoman.com/krazystars/api/star/read.php';

    axios.get(api_endpoint_url).
    then(response => {
        
        // Asynchronous API call
        console.log("I'm here because Axios went off to call API and got response with no error");

        // 1) Inspect response.data
        // console.log(response);
        // console.log(response.data);
        console.log(response.data.records);

        let div_stars = document.getElementById('stars');

        // let result_str = `
        //     <ul>
        //         <li> Star names goes here </li>
        //         <li> Star names goes here </li>
        //         <li> Star names goes here </li>
        //     </ul>
        // `;

        // Create an unordered list element
        let ul = document.createElement('ul');

        let stars_array = response.data.records; // Array of Objects

        for(star_obj of stars_array) {
            let li = document.createElement('li');
            let li_text = document.createTextNode(star_obj.fullname);
            li.appendChild(li_text);
            ul.appendChild(li);
        }
        
        // Append the unordered list to the body (or another element in the DOM)
        document.getElementById('stars').appendChild(ul);
    })


    console.log("[END] get_all()");
}

/* Display stars' information in an HTML (Bootstrap) table
   - fullname
   - photo_profile_url
   - quote
*/
function get_all_table() {

    console.log("[START] get_all_table()");


    let api_endpoint_url = 'http://krazywoman.com/krazystars/api/star/read.php';

    axios.get(api_endpoint_url).
    then(response => {
        
        // Asynchronous API call
        console.log("I'm here because Axios went off to call API and got response with no error");

        console.log(response.data.records);

        let div_stars = document.getElementById('stars');


        // Create an unordered list element
        let table = document.createElement('table');
        table.setAttribute('class', 'table table-striped');
        let thead = document.createElement('thead');

        let tr = document.createElement('tr');

        let th1 = document.createElement('th');
        let th1_text = document.createTextNode('Fullname');
        th1.appendChild(th1_text);
        th1.setAttribute('scope', 'col');

        let th2 = document.createElement('th');
        let th2_text = document.createTextNode('Photo');
        th2.appendChild(th2_text);
        th2.setAttribute('scope', 'col');

        let th3 = document.createElement('th');
        let th3_text = document.createTextNode('Quote');
        th3.appendChild(th3_text);
        th3.setAttribute('scope', 'col');

        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);

        thead.appendChild(tr);

        table.appendChild(thead);

        let tbody = document.createElement('tbody');


        let stars_array = response.data.records; // Array of Objects

        for(star_obj of stars_array) {
            let li = document.createElement('li');
            let li_text = document.createTextNode(star_obj.fullname);
            li.appendChild(li_text);
            ul.appendChild(li);
        }
        

        for(star_obj of stars_array) {
            // console.log(star_obj.fullname);
            // console.log(star_obj.photo_profile_url);
            // console.log(star_obj.quote);

            let tr = document.createElement('tr');

            let td1 = document.createElement('td');
            let td1_text = document.createTextNode(star_obj.fullname);
            td1.appendChild(td1_text);

            let td2 = document.createElement('td');
            let img = document.createElement('img');
            img.setAttribute('src', star_obj.photo_profile_url);
            td2.appendChild(img);

            let td3 = document.createElement('td');
            let td3_text = document.createTextNode(star_obj.quote);
            td3.appendChild(td3_text);
            
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);

            tbody.append(tr);
        }
        
        table.appendChild(tbody);
    })


    console.log("[END] get_all_table()");
}