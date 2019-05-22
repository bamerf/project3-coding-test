// get DOM elements
const sidebarLetters = document.querySelectorAll('.glossary-sidebar li');
const definitionList = document.querySelector('.definition-list');
const definitionItem = document.querySelectorAll('.definition-list li');
const definitionDetails = document.querySelectorAll('.detail')



// functions
const collapsibleDetail = event => {
  event.target.classList.toggle('active');
  const detail = event.target.parentNode.querySelector('.detail')
  if (detail.style.maxHeight) {
    detail.style.maxHeight = null;
  } else {
    detail.style.maxHeight = detail.scrollHeight + 'px';
  }
}






// event listeners
definitionItem.forEach(definition => {
  definition.addEventListener('click', collapsibleDetail)
})
