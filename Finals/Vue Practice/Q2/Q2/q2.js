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
            let count = 0;
            for (let student of this.students){
                if (student.status === "Present"){
                    count++;
                }
            }

            return count;

        },
        
        // COMPLETE THIS
        totalAbsent() {
            
            // YOUR CODE GOES HERE
            let count = 0;
            for (let student of this.students){
                if (student.status === "Absent"){
                    count++;
                }
            }
            return count;

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
    props: ["students"],

    // COMPLETE THIS
    emits: ["update-attendance"],

    // COMPLETE THIS
    template: `
        <div>
        
            YOUR CODE GOES HERE
            <div v-for="student in students" :key="student.name">
                <ul>
                    <li>{{student.name}}</li>
                    <li>{{student.status}}</li>
                </ul>
            <button @click="$emit('update-attendance', student,'Present')">Mark Present</button>
            <button @click="$emit('update-attendance', student,'Absent')">Mark Absent</button>
            </div>
            

        </div>
    `
});

app.mount("#app");
