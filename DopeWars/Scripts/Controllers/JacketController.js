app.controller("JacketController", ["$scope", "TradeService", "JacketService", "Configuration", function ($scope, tradeService, jacketService, config) {
    $scope.money = config.money;
    $scope.dope = [];
    $scope.quantity = 0;
    $scope.sell = function (dope) {
        tradeService.openSell(dope);
    };
    jacketService.subscribeMoney(function (money) {
        $scope.money = money;
    });
    jacketService.subscribeDope(function (dope) {
        $scope.dope = dope;
    });
}]);