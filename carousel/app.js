var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  
  $scope.data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];
  $scope.currentItem = 0;
  
  $scope.goto = function(index) {
    $scope.currentItem = index;
  }
});

app.filter('justone', [function() {
  return function(collection, index) {
    return [collection[index]];
  }
}]);
