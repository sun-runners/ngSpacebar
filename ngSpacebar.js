(function(angular) {
  angular.module('ngSpacebar', ['ng'])
  .directive("ngSpacebar", ['$rootScope', '$timeout', function ($rootScope, $timeout) {
		return {
      link: function (scope, element, attrs) {

        var getModel = function(){
          // Set model
          var model;
          if(scope.$eval(attrs.ngSpacebarModel)){
            model = scope.$eval(attrs.ngSpacebarModel);
          }
          else{
            if(attrs.ngSpacebarModel){
              scope[attrs.ngSpacebarModel] = {};
              model = scope[attrs.ngSpacebarModel];
            }
            else{
              model = scope;
            }
          }
          return model;
        };

        // Listen to keypress event
         var timeout_spacebar;
         angular.element(element).bind("keydown keypress", function(event) {
           // Set model
           var model = getModel();

           // When Spacebar key is pressed
           if (event.which === 32) {
             // $spacebar 가 false 나 undefined 일때만 작동
             // ( 연속해서 true 로 멈춰있는 경우 방지 )
             if(!model.$spacebar){
               if(timeout_spacebar) $timeout.cancel(timeout_spacebar);
               // Set $spacebar true and execute ng-spacebar
               scope.$apply(function() {
                 model.$spacebar = true;
                 model.$spacebared = true;
                 scope.$eval(attrs.ngSpacebar);
               });

               // Set $spacebar false after duration
               var duration = Number(attrs.ngSpacebarDuration);
               if(!(duration>=0)) duration = 700;
               timeout_spacebar = $timeout(function(){
                 model.$spacebar = false;
                 scope.$eval(attrs.ngSpacebarAfter);
               }, duration);
             }
             event.preventDefault();
           }
         });
      },
			scope:false,
			restrict:"EA"
		};
  }]);
})(angular);
