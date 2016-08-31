app.service("TravelService",["DopeService", "TimeService", function (dopeSvc, timeSvc) {
    
    return {
        travel: function() {
            dopeSvc.reloadDope();
            timeSvc.moveForward();
        }
    };
}]);