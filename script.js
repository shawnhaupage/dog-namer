const createDogButton = document.getElementById('create-dog');
const dogImage = document.getElementById('dog-image');
const dogName = document.getElementById('dog-name');

// Define an array of pre-selected dog names
const dogNames = ['Buddy', 'Max', 'Charlie', 'Rocky', 'Cooper', 'Daisy', 'Luna', 'Sadie', 'Bella', 'Molly'];

// Get a random name from the array of dog names
function getRandomName() {
  return dogNames[Math.floor(Math.random() * dogNames.length)];
}

// Update the dog name on the page
function updateDogName() {
  const name = getRandomName();
  dogName.textContent = name;
}

createDogButton.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      dogImage.src = data.message;
      dogImage.alt = 'Random Dog Image';
      updateDogName(); // Update the dog name when a new dog image is created
    })
    .catch(error => console.error(error));
});

updateDogName(); // Update the dog name when the page is loaded
