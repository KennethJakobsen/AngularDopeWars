app.controller("TradeController", ["$scope", "Configuration", "TradeService", "JacketService", "DopeService",
    function ($scope, configuration, tradeService, jacketService, dopeService) {
    $scope.selectedDope = {};
    $scope.quantity = 0;
    $scope.money = 0;
    $scope.maxQuantity = 0;
    $scope.buy = function () {
        $scope.selectedDope.quantity = $scope.quantity;
        if ($scope.maxQuantity < $scope.quantity || $scope.quantity <= 0)
            return;
        tradeService.buy($scope.selectedDope);
    };
    $scope.sell = function () {
        if ($scope.maxQuantity < $scope.quantity || $scope.quantity < 1)
            return;
        tradeService.sell($scope.selectedDope, $scope.quantity);
    };
    tradeService.subscribeBuyDialogs(function (dope) {
        $scope.selectedDope = angular.copy(dope);
        $scope.money = jacketService.getMoney();
        $scope.maxQuantity = Math.floor($scope.money / $scope.selectedDope.price);
        $scope.quantity = $scope.maxQuantity;
        $("#buydialog").modal("show");
    });

    tradeService.subscribeSellDialogs(function (dope) {
        $scope.selectedDope = angular.copy(dope);
        $scope.selectedDope.price = dopeService.getPrice(dope.name);
        $scope.money = jacketService.getMoney();
        $scope.maxQuantity = Math.floor($scope.selectedDope.quantity);
        $scope.quantity = $scope.maxQuantity;
        $("#selldialog").modal("show");
    });
    
}]);