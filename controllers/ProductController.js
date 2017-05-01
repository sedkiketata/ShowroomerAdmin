app.controller("productController",function ($scope,$http){
    $scope.addProduct=function(){
        $http({
            url:"https://showroomercore.mybluemix.net/api/product",
            data: $scope.product,
            method: "POST"
        }).success(function(data){
            console.log(data);
            $http({
                url:"https://showroomercore.mybluemix.net/api/product/getall",
                method:"GET"
            }).then(function(response){
               $scope.productList = response.data; 
            });
            $http({
                url:"http://mylabsing.mybluemix.net/api/stats/ProductBestOffer",
                method:"GET"
            }).then(function(response){
                $scope.productBestOfferList = response.data;
            });
            $scope.product.name="";
            $scope.product.brand="";
            $scope.product.category="";
            $scope.product.quantity="";
            $scope.product.price="";
            $scope.product.discount="";
            $scope.product.tva="";
            $scope.product.description="";
        }).error(function(err){
            console.log("Error from controller")
        })
    };
    $http({
        url:"https://showroomercore.mybluemix.net/api/product/getall",
        method:"GET"
    }).then(function(response){
       $scope.productList = response.data; 
    });
    $http({
        url:"http://mylabsing.mybluemix.net/api/stats/ProductBestOffer",
        method:"GET"
    }).then(function(response){
        $scope.productBestOfferList = response.data;
    });
});
