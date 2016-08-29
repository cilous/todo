'use strict' // detected unstandard code
$(document).ready(function(){  // check ready status for this file
  //console.log($(window))

  var $input = $('.todo-input')
  var $content = $('.content')
  var btn = ".btn-add" // var
  var $btnadd = $(btn)// jquery var
  var $btnarc = $('.btn-arc')

  $input.keypress(function (e) {
    if (e.which == 13)
    {
      $btnadd.click()
    }
  })

  $btnadd.click(function(){
    //console.log('add')
    var temp = '<li><input type="checkbox" class="check"/>'+'<span class="task">'+ $input.val()+'</span>'+'<button type="button" class="close" aria-label="Close">&times</button>' +'</li>'
    $content.append(temp)
    $input.val("")
    //console.log(temp)
  })

  $content.on('click','.close',function() {
    //console.log("del");
    $(this).parent().remove()
  })

  $btnarc.click(function(){
    //console.log('archieve')
    var boxes = document.getElementsByClassName('check')
    var texts = document.getElementsByClassName('task')
    //console.log(boxes.length)
      for(var i = 0; i<boxes.length; i++){
          var box = boxes[i]
          var txt = texts[i]
          if(box.checked) {
              box.parentNode.remove(box)
              txt.parentNode.remove(txt)
              i--
          }
      }
    })


/*
  $input.change(function(){
    console.log($(this).val())
  })
  $input.keyup(function(){
    console.log('up',$(this).val())
  })
  $input.keydown(function(){
    console.log('down',$(this).val())
  })
*/
})
