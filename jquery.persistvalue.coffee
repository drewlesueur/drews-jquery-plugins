# for persisting the value of 
# a text field (input or textarea)
# Simply uses local storage
do ($) ->
  $.fn.persistValue = () ->
    this.each () ->
      id = $(this).attr "id"
      key = "persistValue#{id}"
      value = localStorage[key]
      if value then $(this).val value
      $(this).bind "keyup", (e) ->
        localStorage[key] = $(this).val()



