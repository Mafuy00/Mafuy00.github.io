/*
    NAME:
    EMAIL: 
*/
var url1 = "sales1.json"
var url2 = "sales2.json"


function mergeSales(elem, title, url1, url2) {
    var data = []
    // ADD CODE HERE
    let url1Data = {}
    let url2Data = {}
    let combinedData = {}

    axios.get(url1)
    .then(response => {
        let arr1 = response.data;
        let authorSales = {} 
        for(let item of arr1.books) {  
            if(item.author in  authorSales) {
                url1Data[item.author] += item.sales 
 
                // authorSales[item.author] += item.sales 
            } else {
                url1Data[item.author] = item.sales
            }
        }
    })

    axios.get(url2)
    .then(response => {
        let arr2 = response.data;
        let authorSales = {} 
        for(let item of arr2.books) {  
            if(item.author in  authorSales) { 
                url2Data[item.author] += item.sales 
            } else {
                url2Data[item.author] = item.sales
            }
        }
    })



    // Loop through the keys of the first dictionary
    // for (const key in url1Data) {
    //     // If the key exists in the second dictionary, add the values
    //     if (url2Data.hasOwnProperty(key)) {
    //         combinedData[key] = url1Data[key] + url2Data[key];
    //     } else {
    //         // Otherwise, just take the value from the first dictionary
    //         combinedData[key] = url1Data[key];
    //     }
        

    // }

    // for (const key in url2Data) {
    //     // If the key is not already in the result, add it
    //     if (!combinedData.hasOwnProperty(key)) {
    //         combinedData[key] = url2Data[key];
    //     }
    // }

    for(let author in url1Data) {
        let x = { "author": author, "sales": url1Data[author] }
        data.push(x)
    }


    console.log(combinedData);
    console.log(url1Data);
    console.log(url2Data);

    display(elem, data, title)
     
}

// correct answer by chatgpt
// function mergeSales(elem, title, url1, url2) {
//     let url1Data = {};
//     let url2Data = {};
//     let combinedData = {};

//     // Fetch both URLs concurrently
//     Promise.all([
//         axios.get(url1).then(response => {
//             let arr1 = response.data;
//             for (let item of arr1.books) {
//                 if (item.author in url1Data) {
//                     url1Data[item.author] += item.sales;
//                 } else {
//                     url1Data[item.author] = item.sales;
//                 }
//             }
//         }),
//         axios.get(url2).then(response => {
//             let arr2 = response.data;
//             for (let item of arr2.books) {
//                 if (item.author in url2Data) {
//                     url2Data[item.author] += item.sales;
//                 } else {
//                     url2Data[item.author] = item.sales;
//                 }
//             }
//         })
//     ])
//     .then(() => {
//         // Merge the two data sets
//         for (const key in url1Data) {
//             // If the key exists in the second dictionary, add the values
//             if (url2Data.hasOwnProperty(key)) {
//                 combinedData[key] = url1Data[key] + url2Data[key];
//             } else {
//                 // Otherwise, just take the value from the first dictionary
//                 combinedData[key] = url1Data[key];
//             }
//         }

//         // Add any additional keys from url2Data
//         for (const key in url2Data) {
//             if (!combinedData.hasOwnProperty(key)) {
//                 combinedData[key] = url2Data[key];
//             }
//         }

//         // Log the combined data
//         console.log(combinedData);
//         console.log(url1Data);
//         console.log(url2Data);

//         // Call the display function
//         display(elem, combinedData, title);
//     })
//     .catch(error => {
//         console.error("Error fetching data:", error);
//     });
// }


function sortSales(elem, title, url1, url2) {
    var data = []
    // ADD CODE HERE
    
    display(elem, data, title)
     
}