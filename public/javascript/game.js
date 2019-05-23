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
  $('.hint2').on('click', showHint2)
  $('.hint3').on('click', showHint3)
})

const playGame = () => {
  startGameCSS()
  startGameTimer()
  $('.input').keyup(checkUserGuess)
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
  let height = `${Number(wordCount * 50)}`;
  $('.input').css({height: height+"px"})
}

function startGameCSS(){
  $('.start-btn').fadeOut("fast")
  $('.hint1').addClass('reveal')
  setInputHeight(getWordCount(words[wordindex].word))
  resetInputField()
  hideNextBtn()
  hideHints();
  loadHints()
}

function checkUserGuess(){
  let guess = ($('.input').val()).toLowerCase()
  if(guess == words[wordindex].word.toLowerCase()){
    wordCorrect()
  }
}

function wordCorrect(){
  disableInput()
  showNextBtn()
  correctGuessCSS()
}

function nextWord(){
  console.log(`current wordindex: ${wordindex}`)
  wordindex += 1;
  console.log(`new wordindex: ${wordindex}`)
  resetInputField()
  clearInput()
  startGameCSS()
}

function clearInput(){
  $('.input').val("")
}

function disableInput(){
  $('.input').prop('disabled', true);
}

function enableInput() {
  $('.input').prop('disabled', false);
  $('.input').css({outline: "none"})
}

function hideNextBtn() {
  $('.next-btn').fadeOut("fast")  
}

function showNextBtn() {
  $('.next-btn').fadeIn("fast")
}

function startGameTimer() {
  setTimeout(endOfGame,2000)
}

function endOfGame() {
  console.log('game has ended!')
  disableInput()
  hideNextBtn()
  showEndGameOverlay()
}

function showEndGameOverlay() {
  $('.overlay').css({visibility: 'visible'})
}

function showHint1(){
    $('.hint1').children('.hint-inner').children
    ('.hint-back').text(words[i].hint1)  
}

function loadHints(){
    $('.hint1').children('.hint-inner').children
    ('.hint-back').text(words[wordindex].hint1)
    $('.hint2').children('.hint-inner').children('.hint-back').text(words[wordindex].hint2)
    $('.hint3').children('.hint-inner').children('.hint-back').text(words[wordindex].hint3)
}

function hideHints(){
  $('.hint2').removeClass('reveal')
  $('.hint3').removeClass('reveal')
}

function showHint2(){
  $('.hint2').addClass('reveal')
}

function showHint3(){
  $('.hint3').addClass('reveal')
}

function correctGuessCSS(){
  $('.input').css({outline: "solid green"})
}



  // Loop through the words
  // for(let i = 0; i < words.length;) {

    // if($('.input').val() == words[i].word) {
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

<<<<<<< HEAD
=======
    // do {
      //Correct Answer

      // if($('.input').val() == words[i].word) {
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

>>>>>>> game post route made
  // }