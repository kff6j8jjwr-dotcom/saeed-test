const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#site-nav');

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? 'Close' : 'Menu';
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = 'Menu';
}));

const articlePicker = document.querySelector('.article-picker');
if (articlePicker) {
  articlePicker.addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href = document.querySelector('#article-select').value;
  });
}

const petitionPicker = document.querySelector('.petition-picker');
if (petitionPicker) {
  petitionPicker.addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href = document.querySelector('#petition-select').value;
  });
}

document.querySelector('#year').textContent = new Date().getFullYear();
