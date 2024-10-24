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

<<<<<<< HEAD
            // Imagine that we do some more computationally complex
            // logic processing inbetween here...

            // Eventually return some output (String)

=======
>>>>>>> 962da8cc2b61f66c48449b2d12420cc8b5ebbb02
            return `${this.first_name} ${this.last_name}`;
        }
    },

<<<<<<< HEAD
    // (3) Browser will ask its cache "Do you have a guy called 'fullname'?"
    // Cache replies "Yes have"
    // Cache will give browser "Justin Bieber" (saved String value)
    // No need to run the computed property implementation code again
=======
>>>>>>> 962da8cc2b61f66c48449b2d12420cc8b5ebbb02
    computed: {

        // Computed property
        fullname() {

            console.log('=== Computed fullname is called ===');
<<<<<<< HEAD
            // Imagine that we do some more computationally complex
            // logic processing inbetween here...


            // Browser will save this return value in its cache
            // 'fullname': Justin Bieber
=======

>>>>>>> 962da8cc2b61f66c48449b2d12420cc8b5ebbb02
            return `${this.first_name} ${this.last_name}`;
        }
    }

});

app.mount("#root");