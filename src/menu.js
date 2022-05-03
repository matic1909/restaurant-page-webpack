function createMenuPage() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const p = document.createElement('p');
  p.textContent = 'MENU';

  menu.appendChild(p);

  return menu;
}

function loadMenu() {
  const main = document.querySelector('main');
  main.textContent = '';
  main.appendChild(createMenuPage());
}

export default loadMenu;
