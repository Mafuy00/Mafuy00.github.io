// Create a new Vue instance
const root = Vue.createApp({

    // Data Properties
    data() {
        return {

            cats: [
                'filthy',
                'smelly',
                'fatty',
                'greedy',
                'needy'
            ],

            dogs: [
                { name: 'healthy', age: 3 },
                { name: 'smiley', age: 7  },
                { name: 'happy', age: 1   },
                { name: 'sleepy', age: 12 }
            ],

            countries: {
                'North Korea': 'Pyongyang',
                'South Korea': 'Seoul',
                'Japan': 'Tokyo',
                'Indonesia': 'Jakarta',
                'Malaysia': 'Kuala Lumpur'
            }

        }
    },

    methods: {

        

    }

})
root.mount("#root")
