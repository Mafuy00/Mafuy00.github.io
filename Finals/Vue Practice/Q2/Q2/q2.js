const app = Vue.createApp({

    data() {
        return {

            // DO NOT MODIFY THIS DATA PROPERTY
            students: [
                { name: "Alice", status: "Absent" },
                { name: "Bob", status: "Absent" },
                { name: "Charlie", status: "Absent" },
                { name: "Diana", status: "Absent" },
            ]

            // YOU DO NOT NEED TO ADD MORE DATA PROPERTIES
        };
    },
    
    computed: {

        // COMPLETE THIS
        totalPresent() {
            
            // YOUR CODE GOES HERE

        },
        
        // COMPLETE THIS
        totalAbsent() {
            
            // YOUR CODE GOES HERE

        }
    },

    methods: {
        // student  :  Object
        // status   :  String ('Present' or 'Absent')
        // Change a given student object's 'status' value
        // DO NOT MODIFY THIS
        updateAttendance(student, status) {
            student.status = status;
        }
    }
});

// MODIFY AND COMPLETE THIS
app.component("student-list", {

    // COMPLETE THIS
    props: [ ],

    // COMPLETE THIS
    emits: [ ],

    // COMPLETE THIS
    template: `
        <div>
        
            YOUR CODE GOES HERE

        </div>
    `
});

app.mount("#app");
