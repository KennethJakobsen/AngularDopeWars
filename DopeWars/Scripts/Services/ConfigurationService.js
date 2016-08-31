app.factory("Configuration", function () {
    return {

        pockets: 50,
        days: 31,
        money: 5000,
        locations: [
            "Brooklyn",
            "Jersey",
            "Bronx",
            "Central Park",
            "Coney Island",
            "Manhattan",
        ],
        dope: [
            {
                name: "Weed",
                minPrice: 400,
                maxPrice: 800,
                events:
                    [
                        {
                            title: "Cheap Weed",
                            description: "Columbian freighter dusted the coastguard, Weed prices has bottomed out!",
                            minFactor: .1,
                            maxFactor: .5
                        },
                        {
                            title: "Weed",
                            description: "Weed prices are extraordinary",
                            minFactor: 2,
                            maxFactor: 4
                        },
                    ]
            },
            {
                name: "Hasish",
                minPrice: 500,
                maxPrice: 1200,
                events:
                    [
                        {
                            title: "Hashish",
                            description: "The Marrakech expreess has arrived!",
                            minFactor: .2,
                            maxFactor: .6
                        },
                        {
                            title: "Hashish",
                            description: "FBI made a cartel bust! Prices are at a all time high!",
                            minFactor: 3,
                            maxFactor: 6
                        },
                    ]
            },
            {
                name: "Acid",
                minPrice: 1500,
                maxPrice: 4000,
                events:
                    [
                        {
                            title: "Acid",
                            description: "The stamp deliveryman has just gotten you a great deal",
                            minFactor: .3,
                            maxFactor: .7
                        },
                        {
                            title: "Acid",
                            description: "Stamps has been all licked up! Prices are very high",
                            minFactor: 1.5,
                            maxFactor: 8
                        },
                    ]
            },
            {
                name: "Opium",
                minPrice: 600,
                maxPrice: 2000,
                events:
                    [
                        {
                            title: "Opium",
                            description: "The poppy farmers has had a great year, so have you!",
                            minFactor: .3,
                            maxFactor: .4
                        },
                        {
                            title: "Opium",
                            description: "The local opium den has been busted, demand is up and supply is down!",
                            minFactor: 2,
                            maxFactor: 5
                        },
                    ]
            },
            {
                name: "Speed",
                minPrice: 150,
                maxPrice: 800,
                events:
                    [
                        {
                            title: "Speed",
                            description: "The little cooks have are making massiv amounts of speed, prices are down",
                            minFactor: .2,
                            maxFactor: .3
                        },
                        {
                            title: "Speed",
                            description: "Speed prices are extraordinary right now!",
                            minFactor: 1.5,
                            maxFactor: 2
                        },
                    ]
            },
            {
                name: "Ecstasy",
                minPrice: 30,
                maxPrice: 200,
                events:
                    [
                        {
                            title: "Ecstasy",
                            description: "The 'Little Pharmacist' is selling cheap Ecstasy",
                            minFactor: .2,
                            maxFactor: .5
                        },
                        {
                            title: "Ecstasy",
                            description: "The 'Little Pharmacist' has been busted",
                            minFactor: 3,
                            maxFactor: 7
                        },
                    ]
            },
            {
                name: "Heroin",
                minPrice: 5000,
                maxPrice: 10000,
                events:
                    [
                        {
                            title: "Heroin",
                            description: "Cheap Heroin, get your cheap Heroin here!",
                            minFactor: .4,
                            maxFactor: .5
                        },
                        {
                            title: "Heroin",
                            description: "Addicts are buying Heroin at outrageous prices.",
                            minFactor: 5,
                            maxFactor: 10
                        },
                    ]
            },
            {
                name: "Cocaine",
                minPrice: 15000,
                maxPrice: 30000,
                events:
                    [
                        {
                            title: "Cocaine",
                            description: "Cheap Cocaine, get your cheap cocaine here!",
                            minFactor: .5,
                            maxFactor: .6
                        },
                        {
                            title: "Cocaine",
                            description: "Cops made a big cocaine bust, prices are outrageous!",
                            minFactor: 3,
                            maxFactor: 5
                        },
                    ]
            },
            {
                name: "Shrooms",
                minPrice: 800,
                maxPrice: 1400,
                events:
                    [
                        {
                            title: "Shrooms",
                            description: "Cheap",
                            minFactor: .5,
                            maxFactor: .5
                        },
                        {
                            title: "Shrooms",
                            description: "",
                            minFactor: 2,
                            maxFactor: 2
                        },
                    ]
            },
            {
                name: "Peyote",
                minPrice: 250,
                maxPrice: 600,
                events:
                    [
                        {
                            title: "Peyote",
                            description: "Cheap",
                            minFactor: .8,
                            maxFactor: .8
                        },
                        {
                            title: "Peyote",
                            description: "Expensive",
                            minFactor: 2,
                            maxFactor: 3
                        },
                    ]
            },
            {
                name: "Ludes",
                minPrice: 30,
                maxPrice: 60,
                events:
                    [
                        {
                            title: "Ludes",
                            description: "Cheap",
                            minFactor: .2,
                            maxFactor: .3
                        },
                        {
                            title: "Ludes",
                            description: "Expensive",
                            minFactor: 1.5,
                            maxFactor: 2
                        },
                    ]
            },
        ]
    }
});