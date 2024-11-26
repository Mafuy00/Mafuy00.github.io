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
           for (let team in this.sales){
            // console.log(team);
                let teamObj = this.sales[team];
                for (let year in teamObj){
                    // console.log(year);
                    let yearObj = teamObj[year];
                    for (let quarter in yearObj){
                        // console.log(yearObj[quarter]);
                        total += yearObj[quarter];
                    }
                }
           
           }

            return total

        },
       
        // Part 4B: 3 marks
        yearlyTeamSales() {
            let yearlyTeamSales = { }

            // Add Code Here
            // let subtotal = 0;

            // get the years from team1
            for (let year in this.sales.team1) {
                // create an empty object by year
                yearlyTeamSales[year] = {};
                
                for (let team in this.sales) {
                    let subtotal = 0;
                    let teamObj = this.sales[team][year];
                    // console.log(teamObj);
                    
                    for (let quarter in teamObj) {
                        subtotal += teamObj[quarter];
                    }
                    
                    // assigning the subtotal to each team
                    yearlyTeamSales[year][team] = subtotal;
                }
            }
            

            // sales: {
            //     team1: {
            //         2020: { Q1: 400, Q2: 200, Q3: 300, Q4: 300  },
            //         2021: { Q1: 200, Q2: 700, Q3: 400, Q4: 500  },
            //         2022: { Q1: 100, Q2: 200, Q3: 300, Q4: 800  },
            //      },

            //     team2: { 
            //         2020: { Q1: 200, Q2: 300, Q3: 400, Q4: 200  },
            //         2021: { Q1: 400, Q2: 600, Q3: 800, Q4: 800  },
            //         2022: { Q1: 100, Q2: 100, Q3: 400, Q4: 800  },
            //     }
            // }

            // {year: {team: total}}

            // {
            // "2020": { "team1": 1200, "team2": 1100 },
            // "2021": { "team1": 1800, "team2": 2600 },
            // "2022": { "team1": 1400, "team2": 1400 }
            // }
            //

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
    template: 
    `
    <h2>Sales in Year {{year}}</h2>
    <table border=1>
        <tr>
        <th>team 1</th>
        <th>team 2</th>
        </tr>
        <tr>
        <td :style="{backgroundColor: team_sales.team1 >= team_sales.team2 ? 'blue' : 'white'}">{{team_sales.team1}}</td>
        <td :style="{backgroundColor: team_sales.team2 >= team_sales.team1 ? 'blue' : 'white'}">{{team_sales.team2}}</td>
        </tr>
    </table>
    `
   
})

{/* <sales-comp 
            v-for="(team_sales, year, idx) in yearlyTeamSales"
                v-bind:key="idx" 
                v-bind:year="year"
                v-bind:team_sales="team_sales" 
            ></sales-comp> */}

app.mount('#app')