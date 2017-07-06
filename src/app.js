const angular = require('angular');

//create our application
angular.module('darcaster-client', []); //setter syntax

angular.module('darcaster-client') //getter syntax ()
       .controller('MainController', MainController);

MainController.$inject = [];

function MainController(){
  this.message = 'hello from angular';
}
