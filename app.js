var app = angular.module("myAdmin", ["ngRoute"]);
app.config(["$routeProvider",function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html",
    })
    .when("/blank", {
        templateUrl : "views/blank.html",
    })
    .when("/home",{
        templateUrl : "views/dashboard.html"
    })
    .when("/product",{
        templateUrl : "views/product.html"
    })
    .when("/voucher",{
        templateUrl : "views/voucher.html"
    })
    .when("/thisproduct",{
        templateUrl : "views/myproduct.html"
    });

}]);
