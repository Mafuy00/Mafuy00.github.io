const app = Vue.createApp({

    data() {
        return {
            // DO NOT MODIFY THE NAME OF THIS DATA PROPERTY
            // DO NOT MODIFY THE DATA TYPE OF THIS DATA PROPERTY
            tasks: {}, // Grouped by priority

            // DO NOT MODIFY THE NAME OF THIS DATA PROPERTY
            // DO NOT MODIFY THE DATA TYPE OF THIS DATA PROPERTY
            completedTasks: [],

            // DO NOT MODIFY THE NAME OF THIS DATA PROPERTY
            // DO NOT MODIFY THE DATA TYPE OF THIS DATA PROPERTY
            newTaskName: "",

            // DO NOT MODIFY THE NAME OF THIS DATA PROPERTY
            // DO NOT MODIFY THE DATA TYPE OF THIS DATA PROPERTY
            newTaskPriority: "Medium"
        };
    },

    // DO NOT MODIFY THIS
    created() {
        axios.get("tasks_data.json")
        .then((response) => {
            this.tasks = response.data;
        })
        .catch((error) => {
            console.error("Error fetching tasks:", error);
        });
    },

    methods: {

        // COMPLETE THIS
        addTask() {
            
            // YOUR CODE GOES HERE

        },

        // COMPLETE THIS
        markTaskAsCompleted(task, priority) {
            
            // YOUR CODE GOES HERE
            
        }

    }
});

app.component("task-list", {

    props: ["tasks"],

    emits: ["mark-completed"],

    template: `
        <div>
            <div v-for="(tasks, priority) in tasks" :key="priority">

                <h3>{{ priority }} Priority</h3>

                <ul>
                    <li v-for="task in tasks" :key="task.name">
                        {{ task.name }}
                        <button @click="$emit('mark-completed', task, priority)">
                            Mark Completed
                        </button>
                    </li>
                </ul>
                
            </div>
        </div>
    `
});

app.mount("#app");
