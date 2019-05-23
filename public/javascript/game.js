winCount = 0
words = null

//jQuery wait for page load
$(document).ready(function() {

  //API call
  function getWords() {
    var options = {
      url: '/api/words'
    }
  
    function handleDone(res) {
      words = res.words;
      res.words.forEach(function(word){
        console.log(word)
      })
    }
    
    $.ajax(options).done(handleDone)
    
  }
  
  getWords()
  // $(window).on('load', getWords)
  
  const gameStart = () => {
    
    $('.start-btn').fadeOut("fast")
    $('.hint1').addClass('reveal')
    
    for(let i = 0; i < 10; i++) {

      do {

        // Change input size base on number of words
        var my_string = words[i].word;
        var spaceCount = (my_string.split(" ").length - 1);

        if (spaceCount === 2) {
          $('.input').css({height: '100px'})
        } else if (spaceCount === 3) {
          $('.input').css({height: '150px'})
        }
        
        // Indicate number of characters
        $('.num-char').text(words[i].word.length)
        $('.input').keyup(function() {
          $('.num-char').text(words[i].word.length - $('.input').val().length)
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
          if (words[i].word === $('.input').val()) {
            $('.input').css({outline: "solid green"})
            
            winCount += 1;
          }
        })

      } while(words[i].word !== $('.input').val()) {

        // Change input size base on number of words
        var my_string = words[i].word;
        var spaceCount = (my_string.split(" ").length - 1);
  
        if (spaceCount === 2) {
          $('.input').css({height: '100px'})
        } else if (spaceCount === 3) {
          $('.input').css({height: '150px'})
        }
        
        // Indicate number of characters
        $('.num-char').text(words[i].word.length)
        $('.input').keyup(function() {
          $('.num-char').text(words[i].word.length - $('.input').val().length)
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
          if (words[i].word === $('.input').val()) {
            $('.input').css({outline: "solid green"})
            
            winCount += 1;
          }
        })
      }

    }
  }

  // Game start
  $('.start-btn').on('click', gameStart)

  // Hints Events
  $('.hint2').on('click', function(e) {
    e.target.closest('.hint2').classList.add('reveal')
  })
  
  $('.hint3').on('click', function(e) {
    e.target.closest('.hint3').classList.add('reveal')
  })
  
})