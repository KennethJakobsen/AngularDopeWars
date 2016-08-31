app.controller("DopeController", ["$scope", "TradeService", "DopeService",
    function ($scope, tradeService, dopeService) {
    $scope.dope = [];
    $scope.buy = function (dope) {
        tradeService.openBuy(dope);
    };
    $scope.load = function () {
        $scope.dope = dopeService.reloadDope();
        $scope.dopeEvent = dopeService.getEvent();
    };
    $scope.reload = function () {
        dopeService.reloadDope();

    };
    dopeService.subscribeToEvents(function (event) {
        $scope.dopeEvent = event;
        $("#dopealert").modal("show");
    });
    
}]);