const app = Vue.createApp({
    data() {
        return {
            tasks: {}, // Grouped by priority
            completedTasks: [],
            newTaskName: "",
            newTaskPriority: "Medium"
        };
    },

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
        // Add a new task to the selected priority group
        addTask() {
            if (this.newTaskName.trim() === "") {
                alert("Task name cannot be empty.");
                return;
            }

            if (!this.tasks[this.newTaskPriority]) {
                this.tasks[this.newTaskPriority] = [];
            }

            this.tasks[this.newTaskPriority].push({
                name: this.newTaskName,
                priority: this.newTaskPriority // Store priority in the task object
            });

            this.newTaskName = "";
            this.newTaskPriority = "Medium";
        },

        // Mark a task as completed and remove it from the priority group
        markTaskAsCompleted(task, priority) {
            // Add the task to the completedTasks array, including its priority
            this.completedTasks.push({ ...task, priority });

            const priorityTasks = this.tasks[priority];
            const taskIndex = priorityTasks.findIndex(t => t.name === task.name);
            if (taskIndex !== -1) {
                priorityTasks.splice(taskIndex, 1);
            }

            if (this.tasks[priority].length === 0) {
                delete this.tasks[priority];
            }
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

app.component("completed-tasks", {
    props: ["tasks"],
    template: `
        <div>
            <h3>Completed Tasks</h3>
            <ul>
                <li v-for="task in tasks" :key="task.name">
                    {{ task.name }} ({{ task.priority }} Priority)
                </li>
            </ul>
        </div>
    `
});

app.mount("#app");
