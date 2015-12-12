angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
    
        $scope.getAdventure = function () {
            $(function(){
                var adventureCard = $('#advCard');
                
                //get adventures json
                $.getJSON("js/adventures.json", function(adventures) {
                    //get random adventure item
                    var item = adventures[Math.floor(Math.random()*adventures.length)];
                    
                    $('#advButton').addClass('hide');
                    adventureCard.find('p').text(item.description)
                    adventureCard.removeClass('hide');
                });
                

            });
        };
    
})

.controller('CompletedCtrl', function($scope, Completed) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.completed = Completed.all();
  $scope.remove = function(item) {
    Completed.remove(item);
  };
})

.controller('CompletedDetailCtrl', function($scope, $stateParams, Completed) {
  $scope.Completed = completed.get($stateParams.CompletedId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
