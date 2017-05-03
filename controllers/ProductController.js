app.controller("productController", function ($scope, $http) {
    $scope.doEdit = false;
    $scope.submit = function () {
        if ($scope.form.file.$valid && $scope.file) {
            $scope.upload($scope.file);
        }
    };
    $scope.uploadFile = function (files) {
        var fd = new FormData();
        //Take the first selected file
        fd.append("file", files[0]);
        x = files[0].name;
        console.log(files[0].name);

    };
    $scope.addProduct = function () {
        //   $scope.product.image=x;
        $http({
            url: "https://showroomercore.mybluemix.net/api/product",
            data: $scope.product,
            method: "POST"
        }).success(function (data) {
            console.log(data);
            $http({
                url: "https://showroomercore.mybluemix.net/api/product/getall",
                method: "GET"
            }).then(function (response) {
                $scope.productList = response.data;
            });
            $http({
                url: "http://mylabsing.mybluemix.net/api/stats/ProductBestOffer",
                method: "GET"
            }).then(function (response) {
                $scope.productBestOfferList = response.data;
            });
            $scope.product.name = "";
            $scope.product.brand = "";
            $scope.product.category = "";
            $scope.product.quantity = "";
            $scope.product.price = "";
            $scope.product.discount = "";
            $scope.product.tva = "";
            $scope.product.description = "";
        }).error(function (err) {
            console.log("Error from controller")
        })
    };
    $http({
        url: "https://showroomercore.mybluemix.net/api/product/getall",
        method: "GET"
    }).then(function (response) {
        $scope.productList = response.data;
    });
    $http({
        url: "http://mylabsing.mybluemix.net/api/stats/ProductBestOffer",
        method: "GET"
    }).then(function (response) {
        $scope.productBestOfferList = response.data;
    });

    $scope.deleteProduct = function (input) {
        $http.delete("https://showroomercore.mybluemix.net/api/product/", {
                headers: {
                    "id": input
                }
            })
            .then(function (response) {
                $http({
                    url: "https://showroomercore.mybluemix.net/api/product/getall",
                    method: "GET"
                }).then(function (response) {
                    $scope.productList = response.data;
                });
                $http({
                    url: "http://mylabsing.mybluemix.net/api/stats/ProductBestOffer",
                    method: "GET"
                }).then(function (response) {
                    $scope.productBestOfferList = response.data;
                });

            });
    }

    $scope.editProduct = function (input) {
        $http.get("https://showroomercore.mybluemix.net/api/product/", {
            headers: {
                "id": input
            }
        }).then(function (response) {
            $scope.product = response.data;
            $scope.doEdit = true;
        })
    }
    $scope.doEditProduct = function (input) {
        $http.put("https://showroomercore.mybluemix.net/api/product/", $scope.product, {
                headers: {
                    "id": input
                }
            })
            .then(function (response) {

                $http({
                    url: "https://showroomercore.mybluemix.net/api/product/getall",
                    method: "GET"
                }).then(function (response) {
                    $scope.productList = response.data;
                });

                $scope.product = "";
            })
        $scope.doEdit=false;
    }
});
