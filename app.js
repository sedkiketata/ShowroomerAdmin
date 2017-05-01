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
    });
    .when("/thisproduct",{
        templateUrl : "views/myproduct.html"
    })
}]);
app.controller("activeTabCtrl",function($scope){
  $scope.dashboard="active";
  $scope.product;
  $scope.setActivePage=function(page){
    if (page=="dashboard"){
      $scope.dashboard="active";
      $scope.product="";
    }else if (page=="") {
      $scope.dashboard="";
      $scope.product="active";
    }
  };
});
/*app.filter('productFilterByName',function(){
    return function(oneProduct){
        if (searchByName != ""){
            if (oneProduct.name == searchByName){
                return oneProduct;
            }
            else{
                return null;
            }   
        }else{
            return oneProduct;
        }
    }
});*/
