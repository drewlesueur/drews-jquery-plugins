(function() {
  (function($) {
    return $.fn.persistValue = function() {
      return this.each(function() {
        var id, key, value;
        id = $(this).attr("id");
        key = "persistValue" + id;
        value = localStorage[key];
        if (value) {
          $(this).val(value);
        }
        return $(this).bind("keyup", function(e) {
          return localStorage[key] = $(this).val();
        });
      });
    };
  })($);
}).call(this);
