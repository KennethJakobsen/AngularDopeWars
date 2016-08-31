app.directive('dope', function () {

    return {
        templateUrl: 'Scripts/Directives/HTML/Dope.html',
        link: function (scope, elm, attrs, ctrl) {
            scope.load();
        }
    };
});