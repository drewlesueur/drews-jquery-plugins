do ($) ->
  $.fn.typed = (args...) ->
    config = 
      callback: () ->
      wait: 750
    if args.length is 1 then config.callback = args[0]
    if args.length is 2
      config.wait = args[0]
      config.callback = args[1]
    this.each () ->
      $(this).attr 'old-val', $(this).val()
      that = this
      save = () ->
        val = $(that).val()
        old_val = $(that).attr "old-val"
        if val isnt old_val
          config.callback.call that
          $(that).attr "old-val", val
      t = ""
      $(this).keydown () ->
        clearTimeout t
      $(this).keyup () ->
        t = setTimeout save, config.wait
      $(this).blur () ->
        clearTimeout t
        save()
    return this
