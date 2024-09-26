// Create a new Vue instance
const root = Vue.createApp({

    // Data Properties
    data() {
        return {

            message: "Hello World",
            
            name: "<h2 style='color: red'>Red Bull</h2>",

            fullname: "Brad Pitt",

            is_handsome: true
            
        }
    },

    created() {
        console.log("created...")

        console.log("I run first when this webpage loads..")

        console.log("If you need to make API calls to populate this page")

        console.log("put code here...")
    },

    methods: {

        say_hello() {
            console.log("say_hello()")

            return "Hello World!!! from say_hello()"
        }

    }

})
root.mount("#root")







// // Create another new Vue instance
// const nobody = Vue.createApp({

// // Data Properties
// data() {
//     return {

//         message: "Bye Bye World"

//     }
// }

// })
// nobody.mount("#nobody")