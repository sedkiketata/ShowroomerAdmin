app.controller("voucherController", function ($scope, $http) {
    $scope.addVoucher = function () {
        $scope.voucher.userId = $scope.selectedShowroomer.userId;
        $http({
            url: "https://showroomercore.mybluemix.net/api/voucher",
            data: $scope.voucher,
            method: "POST"
        }).success(function (data) {
            console.log(data);
            $http({
                url: "https://showroomercore.mybluemix.net/api/voucher/getall",
                method: "GET"
            }).then(function (response) {
                $scope.voucherList = response.data;
            });

            $scope.voucher.reference = "";
            $scope.voucher.name = "";
            $scope.voucher.description = "";
            $scope.voucher.amount = "";
            $scope.voucher.userId = "";
            $scope.voucher.user = "";
        }).error(function (err) {
            console.log("Error from controller")
        });
    };
    $http({
        url: "https://showroomercore.mybluemix.net/api/voucher/getall",
        method: "GET"
    }).then(function (response) {
        $scope.voucherList = response.data;
    });
    
    $http({
        url: "https://showroomercore.mybluemix.net/api/showroomer/getall",
        method: "GET"
    }).then(function (response) {
        console.log(response.data);
        $scope.showroomerList = response.data;
    });
    $scope.deleteVoucher = function (input) {
        $http.delete("https://showroomercore.mybluemix.net/api/voucher/", {
                headers: {
                    "id": input
                }
            })
            .then(function (response) {
             
            $http({
                url: "https://showroomercore.mybluemix.net/api/voucher/getall",
                method: "GET"
            }).then(function (response) {
                $scope.voucherList = response.data;
            });

      
            })
    }
    
     /*$scope.editVoucher = function (input) {
        $http.put("https://showroomercore.mybluemix.net/api/voucher/", {
                headers: {
                    "id": input
                }
            })
            .then(function (response) {
             
            $http({
                url: "https://showroomercore.mybluemix.net/api/voucher/getall",
                method: "GET"
            }).then(function (response) {
                $scope.voucherList = response.data;
            });

            $scope.voucher.reference = "";
            $scope.voucher.name = "";
            $scope.voucher.description = "";
            $scope.voucher.amount = "";
            $scope.voucher.userId = "";
            $scope.voucher.user = "";
            })
    }*/
});
