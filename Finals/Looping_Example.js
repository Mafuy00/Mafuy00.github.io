const toyCompany = {
    redTeam: {
        production: {
            'redProdManager': 'Dan',
            'redWorkerOne': 'Steve',
            'redWorkerTwo': 'Larry'

        },
        sales: {
            'redSalesManager': 'Linda',
            'redSalesOne': 'Tony',
            'redSalesTwo': 'Matt'
        }
    },
    blueTeam: {
        production: {
            'blueProdManager': 'Stacy',
            'blueworkerOne': 'Kevin',
            'blueWorkerTwo': 'Robbie'

        },
        sales: {
            'blueSalesManager': 'Todd',
            'blueSalesOne': 'Jess',
            'blueSalesTwo': 'Nick'
        }
    }
};

function findEmployee(stringName) {
    for (const team in toyCompany) {
        console.log(team);
        // log: redTeam and blueTeam
        const teamObj = toyCompany[team];
        for (const department in teamObj) {
            console.log(department);
            const jobTitleObj = teamObj[department];
            for (const jobTitle in jobTitleObj) {
                if (jobTitleObj[jobTitle] === employeeName) {
                    console.log(jobTitle);
                }
            }
        }
    }
}

findEmployee('Todd');