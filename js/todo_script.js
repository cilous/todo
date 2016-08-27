'use strict' // detected unstandard code
$(document).ready(function(){  // check ready status for this file
  //console.log($(window))

  var $input = $('.todo-input')
  var $content = $('.content')
  var btn = ".btn-add" // var
  var $btnadd = $(btn)// jquery var
  var $btnarc = $('.btn-arc')

  $btnadd.click(function(){
    //console.log('add')
    var temp = '<li>' + '<input type="checkbox" class="check"/>'+'<span class="task">'+ $input.val()+'</span>'+'<span class="delete">[x]</span>' +'</li>'
    $content.append(temp)
    //console.log($content,temp)
  })

  $('.content').on('click','.delete',function() {
    //console.log("del");
    $(this).parentNode().remove();
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
