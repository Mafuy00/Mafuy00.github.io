/*

 Name: 
 Email: 

*/

let main = Vue.createApp({

    data() {
        return {

            // DO NOT MODIFY/EDIT THIS DATA PROPERTY
            available_celebs: {
                "G-Dragon": "bb_gd.jpg",
                "Taeyang": "bb_taeyang.jpg",
                "TOP": "bb_top.jpg"
            },

            // DO NOT MODIFY/EDIT THIS DATA PROPERTY
            available_activities: [
                {
                    "name": "Chat",
                    "price": "10.50"
                },
                {
                    "name": "Hug",
                    "price": "30.25"
                },
                {
                    "name": "Kiss",
                    "price": "60.99"
                }
            ],

            // DO NOT MODIFY THIS MANUALLY IN THIS FILE
            selected_celeb: null,

            // DO NOT MODIFY THIS MANUALLY IN THIS FILE
            selected_activities: []

        }
    },

    computed: {

        total_bill() {

            let str = ``

            return null
            
        }

    }

})

main.mount("#main")