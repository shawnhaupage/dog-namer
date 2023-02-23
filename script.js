const createDogButton = document.getElementById('create-dog');
const dogImage = document.getElementById('dog-image');

createDogButton.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      dogImage.src = data.message;
      dogImage.alt = 'Random Dog Image';
    })
    .catch(error => console.error(error));
});
