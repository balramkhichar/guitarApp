guitarApp.controller('HomeCtrl', ["$scope","$http","ngAudio","GuitarRes", function ($scope,$http,ngAudio,GuitarRes) {

  $scope.nodeClr = { "a": "nodea", "b": "nodeb", "c": "nodec", "d": "noded", "e": "nodee", "f": "nodef"}

  $scope.guitars = [];
  $scope.selectedGuitar = '';
  $scope.selectedGuitarId = '';
  $scope.selectedNode = "2";
  $scope.options = {from: 1, to: 6, step: 1};

  ///fetching all guitars
  GuitarRes.query().$promise.then(function(item){
    angular.forEach(item, function(i){
      $scope.guitars.push(i);
    })
  });

  //creating new guitar
  $scope.createGuitar = function(text){
    var temp = {};
    temp.name = text;
    temp.s1 = "a";
    temp.s2 = "b";
    temp.s3 = "c";
    temp.s4 = "d";
    temp.s5 = "e";
    temp.s6 = "f";
    GuitarRes.save(temp,function(data){
      $scope.guitars.push(data.guitar);
    })
    $scope.newGuitar = "";  
  }

  //deleting guitar
  $scope.removeGuitar = function(guitar, idx){
    $scope.guitars.splice(idx, 1);
    GuitarRes.delete({id: guitar.id});
  }

  //selecting guitar
  $scope.selectGuitar = function(name,id){
    $scope.selectedGuitar = name;
    $scope.selectedGuitarId = id;
  }

  //playing sound
  $scope.makeSound = function(note){
    var audio = ngAudio.load("/sounds/"+note+".mp3");
    audio.play();
  }

  //updating guitar
  $scope.changeGuitar = function(val){
    GuitarRes.update({ id:$scope.selectedGuitarId }, {node: 's'+$scope.selectedNode, value: val});
    angular.forEach($scope.guitars,function(item){
      if(item.id==$scope.selectedGuitarId){
        item['s'+$scope.selectedNode] = val;
      }
    });
  }

}]);