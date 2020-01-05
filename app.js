(function(){
  'use strict';
  angular.module('httpPostDemoApp',[])
  .controller('registerFormController',registerFormController);

  registerFormController.$inject=['$http'];
  function registerFormController($http){
    var $ctrl=this;
    $ctrl.registerForm=function(user){
      console.log(user);
      $http.post('userInfo.json',JSON.stringify({data:user})).then(function(response){
        console.log('Successfully written to file.',response);
      }).catch(function(error){
        console.log('Failed writting to file',JSON.stringify({data:user}));
        console.log('Failed writting to file',error);
      });
    };
  }

})();
