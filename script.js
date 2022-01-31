var app = angular.module("app", [])

app.controller("mainController", function ($scope) {
    $scope.heroes = [
        { picture: "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png", name: "Hero one", description: "Strong" },
        { picture: "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png", name: "Hero two", description: "Cool" },
        { picture: "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png", name: "Hero three", description: "Patient" },
        { picture: "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png", name: "Hero four", description: "Brave" },
        { picture: "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png", name: "Hero five", description: "Smart" },
        { picture: "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png", name: "Hero six", description: "Stubborn" }
    ]

    $scope.deleteHero = function (lik) {
        var index = $scope.heroes.indexOf(lik);
        $scope.heroes.splice(index, 1);
    }

    $scope.ShowHide = function (lik) {
        $scope.IsVisible = true;
        $scope.pressedLik = lik
    }

    $scope.addLik = function () {
        $scope.heroes.push({
            picture: $scope.newLik.picture,
            name: $scope.newLik.name,
            description: $scope.newLik.description
        })
        $scope.newLik.name = ""
        $scope.newLik.description = ""
        $scope.newLik.picture = ""
    }
})