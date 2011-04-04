(function() {
  (function($) {
    return $.fn.dragsimple = function(options) {
      var el;
      el = this;
      $(el).bind("mousedown", function(e) {
        var mousemove, mouseup, obj, parent_offset_left, parent_offset_top, start_offset_left, start_offset_top;
        obj = this;
        e.preventDefault();
        parent_offset_left = $(obj).parent().offset().left;
        parent_offset_top = $(obj).parent().offset().top;
        start_offset_left = e.pageX - $(obj).offset().left;
        start_offset_top = e.pageY - $(obj).offset().top;
        $(obj).trigger("start.dragsimple");
        mousemove = function(e) {
          var new_left, new_top;
          new_left = e.pageX - parent_offset_left - start_offset_left;
          new_top = e.pageY - parent_offset_top - start_offset_top;
          if (_.isFunction(options.xFilter)) {
            new_left = options.xFilter(x, obj);
          }
          if (_.isFunction(options.yFilter)) {
            new_top = options.yFilter(obj);
          }
          $(obj).css("left", new_left + "px");
          $(obj).css("top", new_top + "px");
          return $(obj).trigger("drag.dragsimple");
        };
        mouseup = function(e) {
          $(document.body).unbind("mousemove", mousemove);
          return $(obj).trigger("stop.dragsimple");
        };
        $(document.body).bind("mousemove", mousemove);
        return $(document.body).bind("mouseup", mouseup);
      });
      return el;
    };
  })($);
}).call(this);
