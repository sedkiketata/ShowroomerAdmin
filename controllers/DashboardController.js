app.controller("dashoardController", function ($scope, $http) {
    $http({
        url: "https://showroomercore.mybluemix.net/api/stats/GetCompanyRevenuePerRegion",
        method: "GET",
        headers: {
            "company": "Apple"
        }
    }).then(function (response) {
        $scope.CompanyRevenuePerRegion = response.data;
        $scope.addDonutRegion();
    });
    $scope.addMorisChart = function () {
        new Morris.Line({
            // ID of the element in which to draw the chart.
            element: 'myfirstchart',
            // Chart data records -- each entry in this array corresponds to a point on
            // the chart.
            data: [
                {
                    year: '2008',
                    value: 20
                },
                {
                    year: '2009',
                    value: 10
                },
                {
                    year: '2010',
                    value: 5
                },
                {
                    year: '2011',
                    value: 5
                },
                {
                    year: '2012',
                    value: 20
                }
          ],
            // The name of the data record attribute that contains x-values.
            xkey: 'year',
            // A list of names of data record attributes that contain y-values.
            ykeys: ['value'],
            // Labels for the ykeys -- will be displayed when you hover over the
            // chart.
            labels: ['Value']
        });
    };
    $scope.addDonutRegion = function () {
        var fullData = [];
        for (var i = 0; i < $scope.CompanyRevenuePerRegion.length; i++) {
            var newdata = {
                label: $scope.CompanyRevenuePerRegion[i].label,
                value: $scope.CompanyRevenuePerRegion[i].value
            };
            fullData.push(newdata);
        }
        var donut = Morris.Donut({
            element: 'donut-region',
            data: fullData,
            backgroundColor: '#252525',
            labelColor: '#252525',
            colors: [
                '#017500',
                '#01B500',
                '#003600'
            ]
        });
        //        donut.setData($scope.CompanyRevenuePerRegion);
    };
    $scope.addDonutCategory = function () {
        Morris.Donut({
            element: 'donut-category',
            data: [
                {
                    label: "Download Sales",
                    value: 12
                },
                {
                    label: "In-Store Sales",
                    value: 30
                },
                {
                    label: "Mail-Order Sales",
                    value: 20
                }
  ],
            backgroundColor: '#252525',
            labelColor: '#252525',
            colors: [
                '#FFBE00',
                '#FFD10F',
                '#FFDE20'
            ]

        });
    };
    $scope.addDonutProduct = function () {
        Morris.Donut({
            element: 'donut-product',
            data: [
                {
                    label: "Download Sales",
                    value: 12
                },
                {
                    label: "In-Store Sales",
                    value: 30
                },
                {
                    label: "Mail-Order Sales",
                    value: 20
                }
  ],
            backgroundColor: '#252525',
            labelColor: '#252525',
            colors: [
                '#017575',
                '#00B3B0',
                '#91F9FA'
            ]
        });
    };

    $scope.addMorisChart();
    $scope.addDonutCategory();
    $scope.addDonutProduct();
});
