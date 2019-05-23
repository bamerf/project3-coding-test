winCount = 0
words = null
wordindex = 0;

// jQuery wait for page load
$(document).ready(function() {
  // Get all the words from the DB
  getWords()
  disableInput();
  $('.start-btn').on('click', playGame)
  $('.next-btn').click(nextWord)
  $('.hint2').on('click', function(e) {
    e.target.closest('.hint2').classList.add('reveal')
  })
  $('.hint3').on('click', function(e) {
    e.target.closest('.hint3').classList.add('reveal')
  })
})

const playGame = () => {
  startGameCSS()
  $('.input').keyup(function(e){
    if($('.input').val() == words[wordindex].word){
      wordCorrect()
    }
  })
}

//API call
function getWords() {
  var options = {
    url: '/api/words'
  }
  function handleDone(res) {
    words = res
  }
  $.ajax(options).done(handleDone)
}

// return the number of words in a phrase
function getWordCount(phrase){
  return (phrase.split(" ").length);
}

function setInputHeight(wordCount){
  var height = `${Number(wordCount * 50)}`;
  $('.input').css({height: height+"px"})
}

function startGameCSS(){
  $('.start-btn').fadeOut("fast")
  $('.hint1').addClass('reveal')
  setInputHeight(getWordCount(words[wordindex].word))
  enableInput()
  hideNextBtn()
}

function wordCorrect(){
  disableInput()
  showNextBtn()
}

function nextWord(){
  console.log(`current wordindex: ${wordindex}`)
  wordindex += 1;
  console.log(`new wordindex: ${wordindex}`)
  enableInput()
  clearInput()
  startGameCSS()
}

function clearInput(){
  $('.input').val("")
}

function disableInput(){
  $('.input').prop('disabled', true);
}

function enableInput(){
  $('.input').prop('disabled', false);
}

function hideNextBtn(){
  $('.next-btn').fadeOut("fast")  
}

function showNextBtn(){
  $('.next-btn').fadeIn("fast")
}






  // Loop through the words
  // for(let i = 0; i < words.length;) {

    // Change input size base on number of words
    // var spaceCount = getWordCount(words[i].word);
    // // Set the input element height
    // setInputHeight(spaceCount)

    // console.log(words[i])

    // if($('.input').val() == words[i].word){
    //   $('.input').css({outline: "solid green"})
    //   // winCount += 1;
    //   i++;
    //   console.log("you guessed right!")
    // }

    
    // // Indicate number of characters
    // $('.num-char').text(words[i].length)
    // $('.input').keyup(function() {
    //   $('.num-char').text(words[i].length - $('.input').val().length)
    // })

    // //Hints
    // $('.hint1').children('.hint-inner').children
    // ('.hint-back').text(words[i].hint1)
    // $('.hint2').children('.hint-inner').children('.hint-back').text(words[i].hint2)
    // $('.hint3').children('.hint-inner').children('.hint-back').text(words[i].hint3)
    // $('.hint1').on('click', function(e) {
    //   e.target.closest('.hint1').classList.add('reveal')
    // })

    // do {
      //Correct Answer

      // if($('.input').val() == words[i].word){
      //   $('.input').css({outline: "solid green"})
      //     // winCount += 1;
      //     console.log("you guessed right!")
      // }

      // $('.input').keyup(function() {
      //   if (words[i] === $('.input').val()) {
      //     $('.input').css({outline: "solid green"})
          
      //     winCount += 1;
      //   }
      // })
    // } while(words[i] !== $('.input').val())

  // }