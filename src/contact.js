function createContactPage() {
  const menu = document.createElement('div');
  menu.classList.add('contact');

  const p = document.createElement('p');
  p.textContent = 'CONTACT';

  menu.appendChild(p);

  return menu;
}

function loadContact() {
  const main = document.querySelector('main');
  main.textContent = '';
  main.appendChild(createContactPage());
}

export default loadContact;
