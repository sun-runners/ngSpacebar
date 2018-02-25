ngSpacebar
=======

ngSpacebar is an angularjs library that triggers an expression when the spacebar key is pressed.

<br/>

DEMO
-------
https://kimsunwook.github.io/ngSpacebar

<br/>

INSTALL
-------

```
bower install ng-spacebar --save
```

<br/>

Quick start
-------
Copy-paste the ```<script>``` into your ```<body>```.

### ngSpacebar.js

```
<script src=".bower_components/ng-spacebar/ngSpacebar.js"></script>
```
or
```
<script src="https://cdn.rawgit.com/KimSunWook/ngSpacebar/v1.1.3/ngSpacebar.js"></script>
```

<br/>

USAGE
-----

Make sure you include the module 'ngSpacebar' in your application config

```
angular.module('myApp', [
  'ngSpacebar',
  ...
]);
```

```
<input
  <!-- Invoked when you press the SPACEBAR key -->
  ng-spacebar="message = 'SPACEBAR is pressed.'"

  <!-- Called after duration (ms) after pressing the SPACEBAR key. -->
  ng-spacebar-after="message = 'SPACEBAR was pressed 1 second ago.'"

  <!-- If you do not put object, $spacebar and $spacebared values ​​are stored in scope. -->
  ng-spacebar-model="model"

  <!-- The value of $spacebar lasts true and the default value is 700 (ms). -->
  ng-spacebar-duration="1000"

  ng-class="[

    <!-- The value of $spacebar becomes true on click and turns false after duration (ms). -->
    {'spacebar_classes':model.$spacebar},

    <!-- The value of $spacebared is true when clicked and does not change. -->
    {'spacebared_classes':model.$spacebared}

  ]">
```

Once spacebar is pressed

```
$scope.message === 'spacebar pressed' // true
$scope.model.$spacebar === true // true
$scope.model.$spacebared === true // true
```

<br/>

Easy!
