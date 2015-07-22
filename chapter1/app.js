function MyController($scope){
    
    $scope.clock = new Date();
    
    var updateClock = function(){
        
        $scope.clock.now = new Date();
        
    };
    setInterval(function(){   
        $scope.$apply(updateClock);
    },1000);
    
    updateClock();
    
};


var app = angular.module("myApp",[]);

app.controller("AdditionController",function($scope){
    
    $scope.counter=0;
    $scope.add = function(amount){
        $scope.counter = $scope.counter+amount;
    };
    
    $scope.subtract = function(amount){
        $scope.counter = $scope.counter-amount;
    };    
    
});