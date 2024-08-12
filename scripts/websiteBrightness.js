let brightnessToggle = document.querySelector('.toggle-button');
let body = document.body;

brightnessToggle.addEventListener('click', () => {
  if (brightnessToggle.innerHTML === 'Dark Mode') {
    brightnessToggle.innerHTML = 'Light Mode';
  } else {
    brightnessToggle.innerHTML = 'Dark Mode';
  }
  body.classList.toggle('dark-mode');
})