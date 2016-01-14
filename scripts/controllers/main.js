'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, messageService ) {

    
    messageService.getMessages().then(function ( response ) {
      console.log(response);
      $scope.messages = response.data;
    });


    $scope.addMessage = function ( message ) {
      if (message) {
        messageService.addMessage(message).then(function ( response ) {
          console.log(response);
          messageService.getMessages().then(function ( response ) {
      console.log(response);
      $scope.messages = response.data;
    });
        });
      }
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
