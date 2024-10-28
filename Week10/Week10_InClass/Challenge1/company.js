// Vue instance

const INTERNAL_API_DIR_PATH = "api/";
const INTERNAL_API_ENDPOINT_URL = "api/employees.php";


const app = Vue.createApp({
    
    // DO NOT MODIFY THIS
    data() {
        return {
            employee_list: [], // Store employee data here
            selected_employee: null // Store the selected employee details
        }
    },

    methods: {

        // DO NOT MODIFY THIS
        fetch_employees() {
            console.log("=== [START] fetch_employees() ===");

            axios.get(INTERNAL_API_ENDPOINT_URL)
            .then(response => {
                console.log(response.data);
                this.employee_list = response.data;
            })
            .catch(error => {
                console.error("Error fetching employees:", error);
            });

            console.log("=== [END] fetch_employees() ===");
        },

        // DO NOT MODIFY THIS
        select_employee(employee) {
            console.log("=== [START] select_employee() ===");

            this.selected_employee = employee; // Set the selected employee

            console.log("=== [START] select_employee() ===");
        }

    },

    // DO NOT MODIFY THIS
    created() {
        console.log("=== [START] created() ===");

        this.fetch_employees();
        
        console.log("=== [END] created() ===");
    }
    
});


// Task 1
app.component('employee-list', {

    // Complete this section
    props: [  ],

    // Complete this section
    template: `
        
    `
});

// Task 2
app.component('employee-detail', {

    // Complete this section
    props: [  ],

    // Complete this section
    template: `
        
    `
});


// DO NOT REMOVE THIS
app.mount("#app");
