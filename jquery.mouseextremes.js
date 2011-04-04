(function() {
  (function(jQuery) {
    var $;
    $ = jQuery;
    return $.fn.mouseextremes = function(percent) {
      var el;
      if (percent == null) {
        percent = 10;
      }
      el = $(this);
      return el.mousemove(function(e) {
        var fromBottom, fromLeft, fromRight, fromTop, height, width, x, y;
        x = e.pageX - el.offset().left;
        y = e.pageY - el.offset().top;
        width = el.width();
        height = el.height();
        fromRight = (width - x) / width * 100;
        fromLeft = x / width * 100;
        fromTop = y / height * 100;
        fromBottom = (height - y) / height * 100;
        false && console.log("      top " + fromTop + "      bottom " + fromBottom + "      left " + fromLeft + "      right " + fromRight + "      ");
        if (fromTop <= percent) {
          el.trigger("mouseextremetop");
        } else {
          el.trigger("mousenotextremetop");
        }
        if (fromBottom <= percent) {
          el.trigger("mouseextremebottom");
        } else {
          el.trigger("mousenotextremebottom");
        }
        if (fromLeft <= percent) {
          el.trigger("mouseextremeleft");
        } else {
          el.trigger("mousenotextremeleft");
        }
        if (fromRight <= percent) {
          el.trigger("mouseexremeright");
        } else {
          el.trigger("mousenotextremeright");
        }
        return el.mouseleave(function() {
          el.trigger("mousenotextremetop");
          el.trigger("mousenotextremebottom");
          el.trigger("mousenotextremeleft");
          return el.trigger("mousenotextremeright");
        });
      });
    };
  })(jQuery);
}).call(this);
