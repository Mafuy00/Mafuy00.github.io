const app = Vue.createApp({  

    //     DO NOT EDIT -- START 
    data() {
        return {
            /* data that represents the quarterly sales of two sales team - Blue and Red
                for years 2020, 2021, 2022, respectively 

                Note: In our test sales data, years may change, e.g. it may be { 2018, 2019 }, 
                quartarly sales values may change
            
            */
          
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
            // },
            // please test with this sales data when grading
            sales: {
                X: {
                    2010: { Q1: 100, Q2: 200, Q3: 300, Q4: 400  },
                    2011: { Q1: 100, Q2: 300, Q3: 200, Q4: 500  },
                    2012: { Q1: 600, Q2: 500, Q3: 700, Q4: 800  },
                    2013: { Q1: 700, Q2: 700, Q3: 600, Q4: 600  }
                 },

                Y: { 
                    2010: { Q1: 100, Q2: 400, Q3: 600, Q4: 1000  },
                    2011: { Q1: 400, Q2: 500, Q3: 900, Q4: 900  },
                    2012: { Q1: 200, Q2: 300, Q3: 1200, Q4: 500  },
                    2013: { Q1: 400, Q2: 300, Q3: 300, Q4: 700  }
                },

                Z: {
                    2010: { Q1: 100, Q2: 400, Q3: 600, Q4: 1000  },
                    2011: { Q1: 300, Q2: 200, Q3: 650, Q4: 800  },
                    2012: { Q1: 800, Q2: 450, Q3: 250, Q4: 700  },
                    2013: { Q1: 900, Q2: 650, Q3: 300, Q4: 750  }
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
            for (let team in this.sales) { 
                let teamSales = this.sales[team] // 0.5pt for extracting sales of each team
                
                for (let year in teamSales) {  
                    let yearSales = teamSales[year] 
                    for (let quarter in yearSales) { 
                        let quarterSales = yearSales[quarter] // 1.25pt for extracting sale of each quarter
                        total += quarterSales  // 0.25pt for adding to total
                    }
                }
            }

            return total

        },
       
        /* Part 4B: 3 marks
            1pt: Correct extraction of sale years into a proper variable
            0.5pt: Correct extraction of quarter sales and adding to a total variable (done the same thing above)
            1.5pt: Correct creation of final output variable and assigning data correctly
        */
        yearlyTeamSales() {
            let yearlyTeamSales = { }
            // Add Code Here
            // 1pt for extracting sale Years
            let saleYears = []
            for (let team in this.sales) {
                let teamSales = this.sales[team]
                for (let year in teamSales) {
                    saleYears.push(year)
                    yearlyTeamSales[year] = { }
                }
                break
            } 
            //console.log(saleYears)
           
            for (let team in this.sales) {
                let teamSales = this.sales[team]
             
                for (let year in teamSales) {
                    let yearSales = teamSales[year]
                    let total = 0
                    for (let quarter in yearSales) {
                        let quarterSales = yearSales[quarter]
                        total += quarterSales  // 0.5pt for extracting quarter sale and add to total
                    }  
                    yearlyTeamSales[year][team] = total   // 1.5pt for creating this complex data structure  and assigning data correctly.
                }
            }
            //console.log(yearlyTeamSales)

            /*
                if you are unable to compute the yearly team sales correctly, 
                return this pre-defined data so that you can proceed to the next part

                yearlyTeamSales = { "2020": { "team1": 1200, "team2": 1100 }, "2021": { "team1": 1800, "team2": 2600 }, "2022": { "team1": 1400, "team2": 1400 } }
            */

            return yearlyTeamSales

        }
    }

})

/* 5 marks
    Correct table: 2 mark
    Compute Max: 1 mark
    Correct Background color: 2 mark
*/
// Part 4C: 5 marks
//  DO NOT EDIT -- START 
app.component('sales-comp', {  
   
    props: ['year', 'team_sales'], 
//  DO NOT EDIT -- END

     // Add Code Here 

    computed: {
        max() {
            let max = 0
            for (let team in this.team_sales) {
                let sale = this.team_sales[team]
                if (sale > max) {
                    max = sale
                }
            }
            return max
        }
    },
    
    template: `
        <div>
            <h2>Sales in Year {{ year }}</h2>
            <table> 
                <tr>
                    <th v-for="(sale,team) in team_sales">{{ team }} </th>
                </tr>
                <tr>
                    <template v-for="sale in team_sales">
                        <td v-if="sale==max" style='background-color:blue;'> {{ sale }} </td>
                        <td v-else> {{ sale }} </td>
                    </template>
                   
                </tr>
            </table>  
        </div>  
 
    `
})

app.mount('#app')

