const app = angular.module('businessApp', []);
app.controller('indexController', ["$scope", '$http', '$timeout', ($scope, $http, $timeout) => {
    $scope.description = "In 1989, Saul is hit by a car on the Abbey Rd crossing. He is fine; he gets up and goes to seehis girlfriend, Jennifer.They have sex and then break up.He leaves for the GDR, where he willhave more sex(with several members of the same family), harvest mushrooms in the rain, bury hisdead father in a matchbox and get on the wrong side of the Stasi.In 2016, Saul is hit by a car on the Abbey Rd crossing.He is not fine at all; he is rushed to hospital and spends the following days in and out of consciousness, in and out of history.Jennifer is sitting by his bedside.His very - much - not - dead father is sitting by his bedside.Someone important is missing.Deborah Levy presents an ambitious, playful and totally electrifying novel about what we see and what we fail to see, about carelessness and the harm we do to others, about the weight of history and our ruinous attempts to shrug it off.";
    $scope.price = 500;
    $scope.genre = "Drama";
    $scope.author = "Deborah Levy";
    $scope.bookName = "The man Who Saw Everything";
    $scope.buyBook = () => {
        const body = {
            'price': $scope.price,
            'description': $scope.description,
            'bookName': $scope.bookName,
            'qty': 1,
            'currency': 'INR'
        };
        $http.post(baseurl + 'paywithpaypal', body).then((res) => {
            $scope.data = res.data;
        }).catch((err) => {
            console.log(err);
        });
    };
}]);