/*
    Name  : Jin Yun Lin
    Email : yunlin.jin.2022
*/

const root = Vue.createApp({

    // DO NOT MODIFY THESE DATA PROPERTIES
    data() {
        return {
            destinations: [],
            selectedDestination: null,
            bookings: [],
            packagesData: {} // Stores original data for destinations and packages
        };
    },

    // DO NOT MODIFY THIS SECTION
    created() {
        // Fetch data from JSON file using Axios
        var self = this;
        axios.get('q4_data.json')
            .then(function (response) {
                self.destinations = Object.keys(response.data.destinations);
                self.packagesData = response.data.destinations;
            })
            .catch(function (error) {
                console.error("Error fetching data:", error);
            });
    },

    computed: {

        // Part A (2 marks)
        // Compute the visible packages based on selectedDestination and bookings
        packages() {
            
            // YOUR CODE GOES HERE
            for (country in this.packagesData){
                countryObj = this.packagesData[country];
                console.log(countryObj);
                for (package in countryObj){
                    packageObj = countryObj[package];
                    console.log(packageObj);
                    return packageObj;
                }
            }
            // console.log(this.packagesData);
        },
        
        // Part D (1 mark)
        // Compute the total cost of all bookings
        totalCost() {
            
            // YOUR CODE GOES HERE
            let total = 0;

            for (country in this.packagesData){
                countryObj = this.packagesData[country];
                console.log(countryObj);
                for (package in countryObj){
                    packageObj = countryObj[package];
                    console.log(packageObj);
                    total += Number(packageObj.price);
                }
            }

            return total;

        }

    },

    methods: {

        // Part A (2 marks)
        selectDestination(destination) {
            
            // YOUR CODE GOES HERE
            this.selectedDestination = destination;
            
            return destination;
        },

        
        // Part B (1 mark)
        bookPackage(selectedPackage) {
            
            // YOUR CODE GOES HERE
            
        },


        // Part C (1 mark)
        cancelBooking(booking) {

            // YOUR CODE GOES HERE

        }

    }

});


// DestinationList Component
// DO NOT MODIFY THIS CODE
root.component('destination-list', {
    props: ['destinations', 'sdestination'],
    emits: ['destination-selected'],
    template: `
        <div>
            <h3>Destinations</h3>
            <button 
                v-for="destination in destinations" 
                :key="destination" 
                @click="$emit('destination-selected', destination)"
                :class="{ 'selected': destination === sdestination }">
                {{ destination }}
            </button>
        </div>
    `
});

// PackageList Component
// DO NOT MODIFY THIS CODE
root.component('package-list', {
    props: ['packages'],
    emits: ['package-booked'],
    template: `
        <div class="package-list">
            <h3>Travel Packages</h3>
            <ul>
                <li v-for="pkg in packages" :key="pkg.package">
                    {{ pkg.package }} - {{ pkg.price }}
                    <button @click="$emit('package-booked', pkg)">Book Now</button>
                </li>
            </ul>
        </div>
    `
});

// Mount the Vue app
root.mount("#app");
