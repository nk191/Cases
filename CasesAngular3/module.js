/// <reference path="node_modules/angular/angular.js" />
/// <reference path="node_modules/adal-angular/dist/adal-angular.min.js" />
/// <reference path="node_modules/adal-angular/dist/adal.min.js" />


var crudModule = angular.module('crudModule', ['ngRoute', 'AdalAngular']);

crudModule.config(['$routeProvider', '$httpProvider',  'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalAuthenticationServiceProvider) {

    console.log("check route");
    $routeProvider
    .when("/", {
        controller:'myController',
        templateUrl: 'index.html',
        requireADLogin: true,
        redirectTo: "/Cases"
    })
    .when("/Cases", {
        controller:'myController',
        templateUrl: 'index1.html',
        //requireADLogin: true
    })
    .otherwise({ redirectTo: "/" });
    //$locationProvider.html5Mode(true);
    
    var endpoint = {
        "http://localhost:1743": "70be88f1-49bc-4394-b967-a9880385d6da",
    };

    adalAuthenticationServiceProvider.init(
      {
          instance: "https://login.microsoftonline.com/",
          //tenant: 'a14b0395-8447-4971-9269-d1469e847259',
          tenant: 'psengg2.onmicrosoft.com',
          clientId: 'b42ab069-b5d9-4456-b90b-83cf7cef8b9a',
          extraQueryParameter: 'nux=1',
          endpoints: endpoint,
          cacheLocation: 'localStorage'
      }, $httpProvider);

}]);



/*var serviceBase = 'http://localhost:1743/';
crudModule.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase
});*/