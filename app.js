var app = angular.module('angularjs-starter', []);

app.controller('MainCtrl', function($scope) {
  $scope.newThing = 'something new';
  $scope.name = 'food';
  $scope.there = 'refridgerator';
  //$scope.things = {length:1, "apple":{name:"apple", count: 1}};
  $scope.things = [{name:'orange', count: 1}];
  
  $scope.add = function(){
    added = false;
    //if new thing already exists in things, increment
    for(i=0; i<$scope.things.length; i++){
      thing = $scope.things[i];
      if(thing.name==$scope.newThing){
        thing.count = thing.count + 1;
        added = true;
      }
    }
    //new thing does not alreay exist, add to things
    if(!added){
      $scope.things.push({name:$scope.newThing,count:1});
    }
  };
  
  $scope.total = function(){
    sum = 0;
    for(i=0; i<$scope.things.length; i++){
      sum = sum + $scope.things[i].count;
    }
    return sum;
  };

});

