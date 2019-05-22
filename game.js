guessWord = "javascript"

if (guessWord.includes(" ")) {
  $('.input').css({height: '100px'})
}

description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ducimus odit nulla itaque odio ipsa perspiciatis!"

hint1Text = "This is your first hint"
hint2Text = "This is your second hint"
hint3Text = "This is your third hint"

$(document).ready(function() {

  // Indicate numer of characters
  $('.num-char').text(guessWord.length)
  $('.input').keyup(function() {
    $('.num-char').text(guessWord.length - $('.input').val().length)
  })

  // Green for Correct Answer & Description
  $('.input').keyup(function() {
    if (guessWord === $('.input').val()) {
      $('.input').css({outline: "solid green"})
      $('.description').text(description)
    }
  })

  
  
})