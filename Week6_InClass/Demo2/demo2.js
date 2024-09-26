// Create a new Vue instance
const root = Vue.createApp({
    
    // Data Properties
    data() {
        return {

            sentence: "",

            sentence2: "",

            disabled_on: true,

            url: "https://www.channelnewsasia.com/",

            box_bg_color: 'aqua',

            box_font_size: '30px',

            name: "Krazy Woman",

            counter: 0
        }
    },

    methods: {

        hahaha() {
            console.log("hahahahahah")

            this.name = "Justin's Wife"
        }

    }

})
root.mount("#root")
