#jQuery plugin for moving to the extremities of an element
do (jQuery) ->
  $ = jQuery
  $.fn.mouseextremes = (percent=10) ->

    el = $ this
    el.mousemove (e) ->
      x = e.pageX - el.offset().left
      y = e.pageY - el.offset().top

      width = el.width()
      height = el.height()

      fromRight = (width - x) / width * 100
      fromLeft = x / width * 100

      fromTop = y / height * 100
      fromBottom = (height - y) / height * 100 # or 100 - fromTop
       
      false and console.log "
      top #{fromTop}
      bottom #{fromBottom}
      left #{fromLeft}
      right #{fromRight}
      "
      if fromTop <= percent
        el.trigger "mouseextremetop"
      else
        el.trigger "mousenotextremetop"

      if fromBottom <= percent
        el.trigger "mouseextremebottom"
      else
        el.trigger "mousenotextremebottom"

      if fromLeft <= percent
        el.trigger "mouseextremeleft"
      else
        el.trigger "mousenotextremeleft"

      if fromRight <= percent
        el.trigger "mouseexremeright"
      else
        el.trigger "mousenotextremeright"

      el.mouseleave ->
        el.trigger "mousenotextremetop"
        el.trigger "mousenotextremebottom"
        el.trigger "mousenotextremeleft"
        el.trigger "mousenotextremeright"
