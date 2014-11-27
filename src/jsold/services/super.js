'use strict';

app.factory('superConstructor', function() {
  return function(Parent, constructor) {
    var Tmp = function(){};
    Tmp.prototype = Parent.prototype;
    var Child = constructor;
    Child.prototype = new Tmp();
    Child.prototype.constructor = Child;
    return Child;
  };
});
