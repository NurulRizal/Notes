// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('belajar-todo', ['ionic', 'LocalStorageModule'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
  .setPrefix('belajar-todo');
})

.controller('main', function ($scope, $ionicModal, localStorageService) {
//initialize task scope with empty array
  $scope.tasks = [];
//with empty object
  $scope.task = {};
  //config modal sebelum dipakai
 $ionicModal.fromTemplateUrl('new-task-modal.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  $scope.getTasks = function(){
    //fetch task from local storage
    if(localStorageService.get(taskData)){
      $scope.tasks = localStorageService.get(taskData);
    } else {
      $scope.tasks[];
    }
  }
  $scope.createTask = function(){
    $scope.tasks.push($scope.task);
    localStorageService.set(taskData, $scope.tasks);
    $scope.task = {};
    $scope.newTaskModal.hide();
  }
  $scope.removeTask = function (index){
    $scope.tasks.splice(index, 1);
    localStorageService.set(taskData, $scope.tasks);
  }
  $scope.completeTask = function (index){
    if(index !== -1){
      $scope.tasks[index].completed = true;
    }
    localStorageService.set(taskData, $scope.tasks);
  }
})