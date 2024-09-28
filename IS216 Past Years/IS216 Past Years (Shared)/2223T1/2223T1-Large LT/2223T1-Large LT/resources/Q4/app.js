/*
    
Name:   
Email:  

*/
const app = Vue.createApp({  

    //     DO NOT EDIT -- START 
    data() {
        return {
            /* data that represents the quarterly sales of two sales team - Blue and Red
                for years 2020, 2021, 2022, respectively 

                Note: In our test sales data, years may change, e.g. it may be { 2018, 2019 }, 
                quartarly sales values may change
            
            */
          
            sales: {
                team1: {
                    2020: { Q1: 400, Q2: 200, Q3: 300, Q4: 300  },
                    2021: { Q1: 200, Q2: 700, Q3: 400, Q4: 500  },
                    2022: { Q1: 100, Q2: 200, Q3: 300, Q4: 800  },
                 },

                team2: { 
                    2020: { Q1: 200, Q2: 300, Q3: 400, Q4: 200  },
                    2021: { Q1: 400, Q2: 600, Q3: 800, Q4: 800  },
                    2022: { Q1: 100, Q2: 100, Q3: 400, Q4: 800  },
                }
            }
        }
    },
    //     DO NOT EDIT -- END

    computed: {
        // Part 4A: 2 marks 
        totalSales() {
            let total = 0

            // Add Code Here
           

            return total

        },
       
        // Part 4B: 3 marks
        yearlyTeamSales() {
            let yearlyTeamSales = { }

            // Add Code Here
         

            /*
                if you are unable to compute the yearly team sales correctly, 
                return this pre-defined data so that you can proceed to the next part

                yearlyTeamSales = { "2020": { "team1": 1200, "team2": 1100 }, "2021": { "team1": 1800, "team2": 2600 }, "2022": { "team1": 1400, "team2": 1400 } }
            */

            return yearlyTeamSales

        }
    }

})


// Part 4C: 5 marks
//  DO NOT EDIT -- START 
app.component('sales-comp', {  
   
    props: ['year', 'team_sales'], 
//  DO NOT EDIT -- END

     // Add Code Here 

   
})

app.mount('#app')