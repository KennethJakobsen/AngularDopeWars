app.controller("LocationController", ["$scope", "TravelService", "Configuration",
    function ($scope, travelService, config) {
    $scope.locations = config.locations;
   $scope.travel = function () {
        travelService.travel();
    };
    

}]);