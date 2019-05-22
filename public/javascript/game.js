
winCount = 0

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


  //Correct Answer
  $('.input').keyup(function() {
    if (guessWord === $('.input').val()) {
      $('.input').css({outline: "solid green"})

      $('.description').text(description)

      winCount += 1;

    }
  })

  //Hints
  $('.hint1-card-back').text(hint1Text)
  $('.hint2-card-back').text(hint2Text)
  $('.hint3-card-back').text(hint3Text)

  $('.hint1').on('click', function(e) {
    e.target.closest('.hint1').classList.add('reveal')
  })
=======
  // Green for Correct Answer & Description
  $('.input').keyup(function() {
    if (guessWord === $('.input').val()) {
      $('.input').css({outline: "solid green"})
      $('.description').text(description)
    }
  })
})