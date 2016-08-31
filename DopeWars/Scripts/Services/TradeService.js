app.service("TradeService", function () {
    var buyDialogs = [];
    var sellDialogs = [];
    var buyers = [];
    var sellers = [];
    return {
        subscribeBuy: function (callback) {
            buyers.push(callback);
        },
        buy: function (dope) {
            angular.forEach(buyers, function (value, key) {
                value(dope);
            });
        },
        subscribeBuyDialogs: function (callback) {
            buyDialogs.push(callback);
        },
        openBuy: function (dope) {
            angular.forEach(buyDialogs, function (value, key) {
                value(dope);
            });
        },
        subscribeSell: function (callback) {
            sellers.push(callback);
        },
        sell: function (dope, quantity) {
            angular.forEach(sellers, function (value, key) {
                value(dope, quantity);
            });
        },
        subscribeSellDialogs: function (callback) {
            sellDialogs.push(callback);
        },
        openSell: function (dope) {
            angular.forEach(sellDialogs, function (value, key) {
                value(dope);
            });
        },

    };
});