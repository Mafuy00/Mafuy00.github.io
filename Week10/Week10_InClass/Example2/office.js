// Vue instance

const INTERNAL_API_DIR_PATH = "api/";
const INTERNAL_API_ENDPOINT_URL = "api/office.php";


const main = Vue.createApp({

    // Data Properties
    data() {
        return {
            greeting: "Office People Everywhere",

            people: []
        }
    },

    // This will run when the page loads for the first time
    created() {
        console.log("=== [START] created() ===");

        axios.get(INTERNAL_API_ENDPOINT_URL)
        .then(response => {

            // YOUR CODE GOES HERE
            console.log(response.data.records); // Object
            // key: person's name (e.g Michael Scott)
            // value: Object (work Object, personal Object)

            this.people = response.data.records;
            // this.img = response.data.records.

        })
        .catch(error => {
            console.log(error.message);
        })
        
        console.log("=== [END] created() ===");
    },

    methods: {
        upper_first_letter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },

        get_photo_url(photo_url) {
            return INTERNAL_API_DIR_PATH + photo_url;
        }
    }
    
});

// Task 1
// Create a new child component 'work-component'
main.component('work-component',{
    props: ['person_name', 'details'],

    template:
    `
    <div>
    <h2> Work details of {{person_name}}</h2>
    <ul>
        <li v-for="(value, key) in details">
            {{upper_first_letter(key)}} : {{value}}
        </li>
    </ul>
    </div>
    `,
    methods: {
        upper_first_letter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },

        get_photo_url(photo_url) {
            return INTERNAL_API_DIR_PATH + photo_url;
        }
    }
})


// Task 2
// Create a new child component 'personal-component'
main.component('personal-component',{
    props: ['person_name', 'details'],

    template:
    `
    <div>
        <h2> Personal details of {{person_name}}</h2>
            <table border="1">
                <tbody>
                    <tr>
                        <td rowspan="2">
                            <img v-bind:src="get_photo_url(details.photo)">
                        </td>
                        <td>
                            Relationship: {{details.relationship}}
                        </td>
                    </tr>

                    <tr>
                        <!-- <td>
                        3 goes here
                        </td> -->
                        <td>
                            Age: {{details.age}}
                        </td>
                    </tr>

                </tbody>
            </table>
    </div>
    `,

    methods: {
        upper_first_letter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },

        get_photo_url(photo_url) {
            return INTERNAL_API_DIR_PATH + photo_url;
        }
    }
})


// DO NOT REMOVE THIS
// Link this Vue instance with <div id="main">
main.mount("#main")
