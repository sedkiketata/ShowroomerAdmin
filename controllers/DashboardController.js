app.controller("dashoardController", function ($scope) {
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
        Morris.Donut({
            element: 'donut-region',
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
  ]
        });
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
  ]
        });
    };
    $scope.addMorisChart();
    $scope.addDonutRegion();
    $scope.addDonutCategory();
    $scope.addDonutProduct();
});
