app.service("DopeService", ["Configuration", function (config) {
    self = this;
    self.func;
    self.dope = [];
    self.eventListeners = [];

    self.subscribeDope = function (callback) {
        self.func = callback;
    };
    self.getPrice = function (name) {
        var price = 0;
        angular.forEach(self.dope, function (value, key) {
            if (value.name == name)
                price = value.price;
        });
        return price;
    };
    self.getRandom = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    self.hasEvent = function () {
        return (self.getRandom(0, 100) % 10) == 0;
    };
    self.getEvent = function () {
        return self.dopeEvent;
    };
    self.subscribeToEvents = function (callback) {
        self.eventListeners.push(callback);
    };
    self.publishEvent = function (dopeEvent) {
        angular.forEach(self.eventListeners, function (value, key) {
            value(dopeEvent);
        });
    };
    self.reloadDope = function () {
        self.dope.length = 0;

        var evnt = self.hasEvent();
        var idx = -1;
        if (evnt)
            idx = self.getRandom(0, config.dope.length);
        angular.forEach(config.dope, function (value, key) {
            self.dope.push(self.generateDope(value, key == idx));
        });
        return self.dope;
    };
    self.generateDope = function (dopeBase, evnt) {
        var price = self.getRandom(dopeBase.minPrice, dopeBase.maxPrice);
        if (evnt) {
            var eventIdx = self.getRandom(1, 2) - 1;
            var max = dopeBase.events[eventIdx].maxFactor * 100;
            var min = dopeBase.events[eventIdx].minFactor * 100;
            self.publishEvent(dopeBase.events[eventIdx]);
            price = Math.floor(price * self.getRandom(min, max) / 100);
        }
        return {
            name: dopeBase.name,
            price: price
        };
    };
}]);