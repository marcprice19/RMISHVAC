angular.module('rmishvac')
  .directive('manuButton', function(){
    return {
      restrict: "E",
      templateUrl: "/templates/directives/manuButton.html",
      link: function(scope, element){
        element.on("click", function() {
          $('.row-offcanvas').toggleClass('active');
        });
      }
    }
  });