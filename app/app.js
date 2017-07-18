var app = angular.module("testTask", ['duScroll']);

app.controller('productsCtrl', ['$scope', function ($scope) {

    $scope.data = {
        "items": [
        {
            "type" : "Child",
            "img" : "item1",
            "price" : "3.20",
            "name" : "T-SHIRT",
            "options": ["Size", "S", "M", "L", "XL"]
        }
        ,{
            "type" : "Child",
            "img" : "item2",
            "price" : "13.30",
            "name" : "Pants FORCLAZ",
            "options": ["Size", "M", "XL"]
        }
        ,{
            "type" : "Men",
            "img" : "item1",
            "price" : "5.00",
            "name" : "T-SHIRT",
            "options": ["Size", "XL"]
        }
        ,{
            "type" : "Women",
            "img" : "item2",
            "price" : "3.21",
            "name" : "T-SHIRT",
            "options":  ["Size", "S", "M", "L", "XL"]
        }
        ,{
            "type" : "Women",
            "img" : "item3",
            "price" : "31",
            "name" : "backpack",
            "options": ["color", "red", "blue", "black"]
        }
        , {
            "type" : "Other",
            "img" : "item3",
            "price" : "0",
            "name" : "car",
            "options": ["color", "red", "blue", "black"]
        }
    ]
    };

    $scope.showCategory = {
            "men" : true,
            "women" : true,
            "child": false
    };

    $scope.changeFilter  = function (obj) {
        return !$scope.showCategory[obj];
    }

    $scope.reset = function() {
        for (category in $scope.showCategory) {
            $scope.showCategory[category] = true;
        }
    }

    $scope.categoryFlter = function(item) {
        for (key in $scope.showCategory) {
            if (item.type.toLowerCase() === key && $scope.showCategory[key]) { return true; }
        }
        return false;
    }

    $scope.checkActive = function() {
        return $scope.data.items.find( function(item) { return item.active });
    }

}]);


app.controller('menuCtrl', ['$scope', function ($scope) {

    $scope.data = {
        "footerMenu" : [
            {
                "name": "Credits",
                "link": "https://softswiss.com/",
                "title": "credits"
            },
            {
                "name": "Privacy",
                "link": "https://softswiss.com/",
                "title": "privacy"
            },
            {
                "name": "About",
                "link": "https://www.softswiss.com/about-us/",
                "title": "about us"
            },
            {
                "name": "Contact",
                "link": "https://www.softswiss.com/contact-us/",
                "title": "contact us"
            }
        ]};

}]);