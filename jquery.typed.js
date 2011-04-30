(function() {
  var __slice = Array.prototype.slice;
  (function($) {
    return $.fn.typed = function() {
      var args, config;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      config = {
        callback: function() {},
        wait: 750
      };
      if (args.length === 1) {
        config.callback = args[0];
      }
      if (args.length === 2) {
        config.wait = args[0];
        config.callback = args[1];
      }
      this.each(function() {
        var save, t, that;
        $(this).attr('old-val', $(this).val());
        that = this;
        save = function() {
          var old_val, val;
          val = $(that).val();
          old_val = $(that).attr("old-val");
          if (val !== old_val) {
            config.callback.call(that);
            return $(that).attr("old-val", val);
          }
        };
        t = "";
        $(this).keydown(function() {
          return clearTimeout(t);
        });
        $(this).keyup(function() {
          return t = setTimeout(save, config.wait);
        });
        return $(this).blur(function() {
          clearTimeout(t);
          return save();
        });
      });
      return this;
    };
  })($);
}).call(this);
