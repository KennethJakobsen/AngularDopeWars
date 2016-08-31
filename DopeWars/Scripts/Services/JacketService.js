app.service("JacketService",["Configuration", "TradeService", function (conf, tradeService) {
    var self = this;
    self.dope = [];
    self.money = conf.money;
    tradeService.subscribeBuy(function (dope) {
        self.money -= dope.quantity * dope.price;
        var shouldAdd = true;
        angular.forEach(self.dope, function (value, key) {
            if (value.name == dope.name) {
                value.price = Math.ceil(((value.price * value.quantity) + (dope.price * dope.quantity)) / (value.quantity + dope.quantity));
                value.quantity += dope.quantity;
                shouldAdd = false;
            }
        });
        if(shouldAdd)
            self.dope.push(dope);
        self.moneyCallback(self.money);
        self.dopeCallback(self.dope);
    });
    tradeService.subscribeSell(function (dope, quantity) {
        self.money += quantity * dope.price;
        self.dope = self.dope.filter(function (el) {
            if (el.name != dope.name)
                return true;
            if (el.quantity != quantity) {
                el.quantity -= quantity;
                return true;
            }
            return false;
        });
        self.moneyCallback(self.money);
        self.dopeCallback(self.dope);
    });
    self.subscribeMoney =  function (callback) {
        self.moneyCallback = callback;
    }
    self.subscribeDope = function (callback) {
        self.dopeCallback = callback;
    }
    self.getMoney= function () {
        return self.money;
    }
    


}]);