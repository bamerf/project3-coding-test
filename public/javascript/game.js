winCount = 0
words = null
wordindex = 0;

// jQuery wait for page load
$(document).ready(function() {
  // Get all the words from the DB
  getWords()
  disableInput()
  $('.start-btn').on('click', startGame)
  $('.next-btn').click(nextWord)
})

const startGame = () => {
  startGameCSS()
  startGameTimer()
  $('.hint2').on('click', showHint2)
  $('.hint3').on('click', showHint3)
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
  hideHints()
  loadHints()
  checkGuessChars()
}

function checkUserGuess(){
  let guess = ($('.input').val()).toLowerCase()
  if(guess == words[wordindex].word.toLowerCase()){
    wordCorrect()
  }
  checkGuessChars()
}

function wordCorrect(){
  disableInput()
  showNextBtn()
  correctGuessCSS()
}

function nextWord(){
  wordindex += 1;
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

function resetInputField() {
  $('.input').prop('disabled', false);
  $('.input').css({outline: "none"})
  $('.input').attr('maxlength',words[wordindex].word.length);
}

function hideNextBtn() {
  $('.next-btn').css({visibility: "hidden"})
}

function showNextBtn() {
  $('.next-btn').css({visibility: "visible"})
}

function startGameTimer() {
  setTimeout(endOfGame,60000)
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
    $('.hint1').children('.hint-inner').children('.hint-back').text(`${words[wordindex].hint1} (${'x'} characters and ${'x'} words)`)
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
  showNextBtn()
}

function checkGuessChars(){
  let inputChars = $('.input').val().length
  let wordChars = words[wordindex].word.length;
  console.log(`input is ${inputChars} and word is ${wordChars}`)
  $('.num-char').text(`${Number(wordChars - inputChars)} characters left`);
}
