do ($) ->
  $.fn.dragsimple = (options) ->
    el = this 
    $(el).bind "mousedown", (e) ->
      obj = this
      e.preventDefault()
      parent_offset_left = $(obj).parent().offset().left
      parent_offset_top = $(obj).parent().offset().top
      start_offset_left = e.pageX - $(obj).offset().left
      start_offset_top = e.pageY - $(obj).offset().top 
      $(obj).trigger "start.dragsimple"

      mousemove = (e) ->
        new_left = e.pageX - parent_offset_left - start_offset_left
        new_top = e.pageY - parent_offset_top - start_offset_top
        if _.isFunction options.xFilter
          new_left = options.xFilter x, obj
        if _.isFunction options.yFilter
          new_top = options.yFilter obj
        $(obj).css("left", (new_left) + "px")
        $(obj).css("top", (new_top) + "px")
        $(obj).trigger "drag.dragsimple"

      mouseup = (e) ->
        $(document.body).unbind "mousemove", mousemove
        $(obj).trigger "stop.dragsimple"
      
      $(document.body).bind "mousemove", mousemove
      $(document.body).bind "mouseup", mouseup
    return el
