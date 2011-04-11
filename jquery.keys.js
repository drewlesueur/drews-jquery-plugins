(function() {
  var keyMap;
  keyMap = {
    f5: 116
  };
  (function($) {
    return $.fn.keys = function(key, handler) {
      return this.each(function() {
        return $(this).keydown(function(e) {
          if (e.keyCode === keyMap[key]) {
            e.preventDefault();
            return handler();
          }
        });
      });
    };
  })($);
}).call(this);
