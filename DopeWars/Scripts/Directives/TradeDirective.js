app.directive('tradeBuy', function () {

    return {
        templateUrl: 'Scripts/Directives/HTML/buy.html',
        controller: "TradeController"
    };
});
app.directive('tradeSell', function () {

    return {
        templateUrl: 'Scripts/Directives/HTML/sell.html',
        controller: "TradeController"
    };
});