// get DOM elements
const sidebarLetters = document.querySelectorAll('.glossary-sidebar li');
const definitionList = document.querySelector('.definition-list');
const definitionItem = document.querySelectorAll('.definition-list li');
const definitionDetails = document.querySelectorAll('.detail')
const definitionTitles = document.querySelectorAll('.definition-title')



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

const giveEachNewLetterID = () => {
  console.log('adding id to first letter');
  console.log(definitionTitles[0].textContent[0]);

  definitionTitles.forEach( title => {
    let currentLetter = title.textContent[0]
  });
  
}

giveEachNewLetterID()


// event listeners
definitionItem.forEach(definition => {
  definition.addEventListener('click', collapsibleDetail)
})
