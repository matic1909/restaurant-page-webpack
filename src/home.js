function createHomepage() {
  const homepage = document.createElement('div');
  homepage.classList.add('homepage');

  const chefImage = document.createElement('img');
  chefImage.src = 'images/chef.jpg';
  chefImage.alt = 'Chef';

  homepage.appendChild(createParagraph('Pizza your nonna would be proud of'));
  homepage.appendChild(
    createParagraph('Authentic Italian Style Pizza since 1963')
  );
  homepage.appendChild(chefImage);
  homepage.appendChild(createParagraph('Come visit us or order online!'));

  return homepage;
}

function createParagraph(text) {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
}

function loadHomePage() {
  const main = document.querySelector('main');
  // Clear the content when switching to homepage
  main.textContent = '';
  main.appendChild(createHomepage());

  return main;
}

export default loadHomePage;
