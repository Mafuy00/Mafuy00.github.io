var app = Vue.createApp({
    
    // Data Properties
    data() {
        return {
            
            first_name: 'Justin',
            last_name: 'Bieber'
        }
    },

    methods: {

        // Method
        get_fullname() {

            console.log('=== Method get_fullname is called ===');

            return `${this.first_name} ${this.last_name}`;
        }
    },

    computed: {

        // Computed property
        fullname() {

            console.log('=== Computed fullname is called ===');

            return `${this.first_name} ${this.last_name}`;
        }
    }

});

app.mount("#root");