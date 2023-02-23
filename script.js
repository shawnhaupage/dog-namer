const createDogButton = document.getElementById('create-dog');
const dogImage = document.getElementById('dog-image');
const dogName = document.getElementById('dog-name');
const genderSelect = document.getElementById('gender-select');

// Define arrays of pre-selected dog names
const maleDogNames = ['Buddy', 'Max', 'Charlie', 'Rocky', 'Cooper'];
const femaleDogNames = ['Daisy', 'Luna', 'Sadie', 'Bella', 'Molly'];

// Get a random name from an array of dog names
function getRandomName(gender) {
  const names = gender === 'male' ? maleDogNames : femaleDogNames;
  return names[Math.floor(Math.random() * names.length)];
}

// Update the dog name on the page
function updateDogName(gender) {
  const name = getRandomName(gender);
  dogName.textContent = name;
}

createDogButton.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      dogImage.src = data.message;
      dogImage.alt = 'Random Dog Image';
      updateDogName(genderSelect.value); // Update the dog name when a new dog image is created
    })
    .catch(error => console.error(error));
});

genderSelect.addEventListener('change', () => {
  updateDogName(genderSelect.value); // Update the dog name when the gender is changed
});

updateDogName(genderSelect.value); // Update the dog name when the page is loaded
