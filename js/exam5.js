let app5 = angular.module('app5',[]);

app5.controller('gListCtrl', function($scope){
  $scope.groceries=[
    {item:'Tomatoes',purchased:false},
    {item:'Potatoes',purchased:false},
    {item:'Bread',purchased:false},
    {item:'Hums',purchased:false}
  ];

  $scope.addItem = function(newItem){
    if(!(newItem===undefined || newItem === "")){
      $scope.groceries.push({
        item: newItem , purchased: false


      });

      $scope.missingNewItemError = "";
    }else{
      $scope.missingNewItemError = "Please enter something";
    }

  };

});
