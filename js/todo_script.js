'use strict' // detected unstandard code
$(document).ready(function(){  // check ready status for this file
  console.log($(window))

  var $input = $('.todo-input')
  var $content = $('.content')
  var btn = ".btn-add" // var
  var $btnadd = $(btn)// jquery var
  var $delete = $('.delete')
  var $btnarc = $('.btn-arc')


  $btnadd.click(function(){
    console.log('add')
    var temp = '<ul>' + '<input type="checkbox" class="check"/>'+'<span class="task">'+ $input.val()+'</span>'+'<span class="delete">[x]</span>' +'</ul>'
    $content.append(temp)
    //console.log($content,temp)
  })

  $delete.click (function() {
    //console.log('delete');
    console.log($(this),$(this).parent())
    //var x = document.getElementsByClassName('delete')
    $(this).closest('ul').remove()
  })

  $btnarc.click(function(){
    console.log('archieve')

    var boxes = document.getElementsByClassName('check')
    var texts = document.getElementsByClassName('task')
    console.log(boxes.length)
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
