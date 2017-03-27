const app = angular.module('labyrinth', [
    'ui.router',
]);

const components = [
    require('./components/welcome.component'),
];

for (let i = 0; i < components.length; i++) {
    app.component(components[i].name, components[i].object);
};

app.config(function ($stateProvider){
    $stateProvider.state({
        name: 'welcome',
        url: '/',
    });
});