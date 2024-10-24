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

            // Imagine that we do some more computationally complex
            // logic processing inbetween here...

            // Eventually return some output (String)

            return `${this.first_name} ${this.last_name}`;
        }
    },

    // (3) Browser will ask its cache "Do you have a guy called 'fullname'?"
    // Cache replies "Yes have"
    // Cache will give browser "Justin Bieber" (saved String value)
    // No need to run the computed property implementation code again
    computed: {

        // Computed property
        fullname() {

            console.log('=== Computed fullname is called ===');
            // Imagine that we do some more computationally complex
            // logic processing inbetween here...


            // Browser will save this return value in its cache
            // 'fullname': Justin Bieber
            return `${this.first_name} ${this.last_name}`;
        }
    }

});

app.mount("#root");