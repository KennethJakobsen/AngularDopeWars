app.service("TimeService",["Configuration", function (conf) {
    var self = this;
    self.timeMax = conf.days;
    self.timeNow = 1;
    self.moveForward = function() {
        self.timeNow += 1;
    }
    self.getStep = function() {
        return Math.ceil((100 / self.timeMax) * self.timeNow);
    }
}]);