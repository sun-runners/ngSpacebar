(function(angular) {
  angular.module('ngSpacebar', ['ng'])
  .directive("ngSpacebar", function ($rootScope, $timeout) {
		return {
      link: function (scope, element, attrs) {
        // Listen to keypress event
         var timeout_spacebar;
         angular.element(element).bind("keydown keypress", function(event) {
           // Set model
           var model
           if(scope.$eval(attrs.ngSpacebarModel)) model = scope.$eval(attrs.ngSpacebarModel);
           else model = scope;

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
               if(!(duration>=0)) duration = 100;
               timeout_spacebar = $timeout(function(){
                 model.$spacebar = false;
               }, duration);
             }
             event.preventDefault();
           }
         });
      },
			scope:false,
			restrict:"EA"
		};
	});
})(angular);

// (function(angular) {
//   angular.module('ngSpacebar', ['ng'])
//   .directive("ngSpacebar", function ($rootScope, $timeout) {
// 		return {
//       transclude:'element',
//       terminal: true,
//       $$tlb: true,
//       priority: 1000,
//       compile: function(tElement, tAttrs, transclude) {
//         return {
//            pre: function(scope, iElement, iAttrs, controller) {
//              // Create new scope
//              var _scope = scope.$new(false);
//
//              // Link element with new scope
//              element = transclude(_scope, angular.noop);
//
//              // Listen to keypress event
//              var timeout_spacebar;
//              angular.element(element).bind("keydown keypress", function(event) {
//                // When Spacebar key is pressed
//                if (event.which === 13) {
//                  // $spacebar 가 false 나 undefined 일때만 작동
//                  // ( 연속해서 true 로 멈춰있는 경우 방지 )
//                  if(!_scope.$spacebar){
//                    if(timeout_spacebar) $timeout.cancel(timeout_spacebar);
//                    // Set $spacebar true and execute ng-spacebar
//                    _scope.$apply(function() {
//                      _scope.$spacebar = true;
//                      _scope.$spacebared = true;
//                      _scope.$eval(iAttrs.ngSpacebar);
//                    });
//
//                    // Set $spacebar false after duration
//                    var duration = Number(iAttrs.ngSpacebarDuration);
//                    if(!(duration>=0)) duration = 100;
//                    timeout_spacebar = $timeout(function(){
//                      _scope.$spacebar = false;
//                    }, duration);
//                  }
//                  event.preventDefault();
//                }
//              });
//
//              var frag = document.createDocumentFragment();
//              frag.appendChild(element[0]);
//              iElement.after(frag);
//            }
//         }
//       },
// 			restrict:"EA"
// 		};
// 	});
// })(angular);
