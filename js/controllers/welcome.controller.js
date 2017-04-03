module.exports = {
    name: 'WelcomeController',
    func: function ($scope, EnterService) {
        $scope.ent = () => {
            EnterService.enter();
        }
    },
}