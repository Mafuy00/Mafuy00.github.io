/*
    NAME:
    EMAIL: 
*/
var url1 = "sales1.json"
var url2 = "sales2.json"


function mergeSales(elem, title, url1, url2) {
    var data = []
    // ADD CODE HERE
    let mergedSales = {};

    // need to call both url1 and url2 at the same time
    Promise.all([axios.get(url1), axios.get(url2)])
    .then((res) => {
        const [url1Res, url2Res] = res;
        const url1Data = url1Res.data.books;
        const url2Data = url2Res.data.books;
        // combining the 2 dictionaries
        const combinedArr = url1Data.concat(url2Data);
        // if the author of combined is in mergedSales, add the values together, 
        // else insert the item as per normal 
        for (let item of combinedArr) {
            if (item.author in mergedSales) {
                mergedSales[item.author] += item.sales;
            } else {
                mergedSales[item.author] = item.sales;
            }
        }
        console.log("mergedSales",mergedSales)

        for(let author in mergedSales) {
            let x = { "author": author, "sales": mergedSales[author] }
            data.push(x)
        }
        display(elem, data, title);
    })

    console.log(mergedSales);

}


function sortSales(elem, title, url1, url2) {
    var data = []
    // ADD CODE HERE
    let mergedSales = {};

    Promise.all([axios.get(url1), axios.get(url2)])
    .then((res) => {
        const [url1Res, url2Res] = res;
        const url1Data = url1Res.data.books;
        const url2Data = url2Res.data.books;
        const combinedArr = url1Data.concat(url2Data);
        console.log(combinedArr);
        for (let item of combinedArr) {
            if (item.author in mergedSales) {
                mergedSales[item.author] += item.sales;
            } else {
                mergedSales[item.author] = item.sales;
            }
        }
        console.log("mergedSales",mergedSales)

        for(let author in mergedSales) {
            let x = { "author": author, "sales": mergedSales[author] }
            data.push(x)
        }

        data = data
            .filter((author) => author.sales >= 5)
            .sort((author1, author2) => {
                return author2.sales - author1.sales;
        });

        display(elem, data, title)
    })

  
     
}