guessWordNumOfWords = 1
guessWord = "functional programing"

if (guessWord.includes(" ")) {
  guessWordNumOfWords = 2
}

description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ducimus odit nulla itaque odio ipsa perspiciatis quo totam iure beatae delectus quaerat laborum ipsam soluta natus quidem porro, hic debitis!"

hint1Text = "This is your first hint"
hint2Text = "This is your second hint"
hint3Text = "This is your third hint"

$(document).ready(function() {

  
  $('.num-char').text(guessWord.length)
  $('.input').keyup(function() {
    $('.num-char').text(guessWord.length - $('.input').val().length)
  })
  
})