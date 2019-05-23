winCount = 0
words = null

//jQuery wait for page load
$(document).ready(function() {

  //API call
  function getWords() {
    console.log("sdaff")
    var options = {
      url: '/api/words'
    }
  
    function handleDone(res) {
      words = res.words;
    }
    
    $.ajax(options).done(handleDone)
    
  }
  
  getWords()
  // $(window).on('load', getWords)
  
  const gameStart = () => {
    
    $(this).fadeOut("fast")
    
    for(let i = 0; i < 10; i++) {
      
      // Change input size base on number of words
      if (words[i].includes(" ")) {
        $('.input').css({height: '100px'})
      }
      
      // Indicate number of characters
      $('.num-char').text(words[i].length)
      $('.input').keyup(function() {
        $('.num-char').text(words[i].length - $('.input').val().length)
      })

      //Hints
      $('.hint1').children('.hint-inner').children
      ('.hint-back').text(words[i].hint1)
      $('.hint2').children('.hint-inner').children('.hint-back').text(words[i].hint2)
      $('.hint3').children('.hint-inner').children('.hint-back').text(words[i].hint3)
      $('.hint1').on('click', function(e) {
        e.target.closest('.hint1').classList.add('reveal')
      })
      
      //Correct Answer
      $('.input').keyup(function() {
        if (words[i] === $('.input').val()) {
          $('.input').css({outline: "solid green"})
          
          winCount += 1;
          
        }
      })
      
      // Hints Events
      $('.hint1').on('click', function(e) {
        e.target.closest('.hint1').classList.add('reveal')
      })
      
      $('.hint2').on('click', function(e) {
        e.target.closest('.hint2').classList.add('reveal')
      })
      
      $('.hint3').on('click', function(e) {
        e.target.closest('.hint3').classList.add('reveal')
      })
    }
  }
  
  // Game start
  $('.start-btn').on('click', gameStart)

})
