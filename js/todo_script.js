'use strict' // detected unstandard code
$(document).ready(function(){  // check ready status for this file
  console.log($(window))

  var $input = $('.todo-input')
  var $content = $('.content')
  var btn = ".btn-add" // var
  var $btnadd = $(btn)// jquery var
  var $delete = $('.delete')

  $btnadd.click(function(){
    var temp = '<li>' + '<input type="checkbox" class="check">'+ $input.val()+'<span class="delete">[x]</span>' +'</li>'
    $content.append(temp)
    console.log($content,temp);
  })

  $delete.click (function() {
    //console.log($(this),$(this).parent())
    $(this).parent().remove()
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
