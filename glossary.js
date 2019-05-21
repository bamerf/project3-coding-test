// DOM elements
const sidebarLetters = document.querySelectorAll('.glossary-sidebar li');
const definitions = document.querySelectorAll('.definition-list li');



// functions
const toggleDetail = event => {
  console.log('clicked');
  // collapse all details
  
  // make target title black
  event.target.style.color = "black";
  
  // expand details of target
  const detail = event.target.parentNode.querySelector('article')
  detail.classList.toggle('hidden')
}




// event listeners
definitions.forEach(definition => {
  definition.addEventListener('click', toggleDetail)
})