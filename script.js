const createDogButton = document.getElementById('create-dog');
const dogImage = document.getElementById('dog-image');
const dogName = document.getElementById('dog-name');
const genderButtons = document.querySelectorAll('.gender-btn');

// Define arrays of pre-selected dog names
const maleDogNames = ['Max','Charlie','Cooper','Milo','Buddy','Rocky','Bear','Teddy','Duke','Leo','Beau','Tucker','Oliver','Jack','Bentley','Ollie','Winston','Zeus','Toby','Loki','Jax','Finn','Blu','Bruno','Murphy'];
const femaleDogNames = ['Luna','Bella','Daisy','Lucy','Lily','Zoe','Lola','Sadie','Bailey','Stella','Coco','Molly','Maggie','Penny','Nala','Rosie','Roxy','Ruby','Chloe','Sophie','Ellie','Willow','Piper','Millie','Gracie','Mia','Pepper','Nova','Callie','Winnie','Lulu','Hazel','Harley','Ginger','Olive','Abby','Charlie','Honey','Lexi','Athena','Riley','Izzy','Remi','Maya','Layla','Lady','Kona','Sasha','Poppy'];

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
      const gender = document.querySelector('.gender-btn.active').value; // Get the value of the active gender button
      updateDogName(gender); // Update the dog name when a new dog image is created
    })
    .catch(error => console.error(error));
});

genderButtons.forEach(button => {
  button.addEventListener('click', () => {
    genderButtons.forEach(btn => btn.classList.remove('active')); // Remove the active class from all gender buttons
    button.classList
    .add('active'); // Add the active class to the clicked gender button
    const gender = button.value;
    updateDogName(gender); // Update the dog name when the gender is changed
  });
});

updateDogName(document.querySelector('.gender-btn.active').value); // Update the dog name when the page is loaded
