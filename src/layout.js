import loadHomePage from './home';

function createHeader() {
  const header = document.createElement('header');

  const restaurantName = document.createElement('h1');
  restaurantName.textContent = 'Vaffanculo';

  header.appendChild(restaurantName);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement('nav');

  const homeButton = document.createElement('button');
  homeButton.textContent = 'Home';
  homeButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    changeActiveButton(homeButton);
  });

  const menuButton = document.createElement('button');
  menuButton.textContent = 'Menu';
  menuButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    changeActiveButton(menuButton);
  });

  const contactButton = document.createElement('button');
  contactButton.textContent = 'Contact';
  contactButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    changeActiveButton(contactButton);
  });

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

function changeActiveButton(button) {
  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
    button.classList.remove('active');
  });

  button.classList.add('active');
}

function createMain() {
  const main = document.createElement('main');
  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  const footerText = document.createElement('p');
  footerText.textContent = 'Copyright © 2022 matic1909';
  footer.appendChild(footerText);

  return footer;
}

function initializeWebsite() {
  const content = document.querySelector('.content');

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  loadHomePage();
}

export default initializeWebsite;
