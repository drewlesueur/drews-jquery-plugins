# for simply handling keys

keyMap = 
  f5: 116
  
do ($) ->
  $.fn.keys = (key, handler) ->
    this.each () ->
      $(this).keydown (e) ->
        if e.keyCode is keyMap[key]
          e.preventDefault()
          handler()



