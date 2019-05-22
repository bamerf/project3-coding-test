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

const makeNewListItem = () => {

}


const getDatabaseItems = () => {

}



// event listeners
definitionItem.forEach(definition => {
  definition.addEventListener('click', collapsibleDetail)
})






/*
            <li>
              <a href="#" class="definition-title">CRUD</a>
              <article class="definition-details hidden">
                  <p>In computer programming, create, read, update, and delete (CRUD) are the four basic functions of persistent storage. Alternate words are sometimes used when defining the four basic functions of CRUD, such as retrieve instead of read, modify instead of update, or destroy instead of delete. CRUD is also sometimes used to describe user interface conventions that facilitate viewing, searching, and changing information; often using computer-based forms and reports.</p>
                  <footer>
                    <a href="#"><i class="fas fa-tag tag-icon"></i>html</a>
                    <a href="#"><i class="fas fa-tag tag-icon"></i>javascript</a>
                  </footer>
                </article>
            </li>
*/