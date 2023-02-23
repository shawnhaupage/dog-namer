// Define arrays of pre-selected dog names
const maleDogNames = ['Max','Charlie','Cooper','Milo','Buddy','Rocky','Bear','Teddy','Duke','Leo','Beau','Tucker','Oliver','Jack','Bentley','Ollie','Winston','Zeus','Toby','Loki','Jax','Finn','Blu','Bruno','Murphy','Louie','Moose','Gus','Koda','Hank','Apollo','Ace','Archie','Henry','Dexter','Maverick','Thor','Scout','Kobe'];
const femaleDogNames = ['Luna','Bella','Daisy','Lucy','Lily','Zoe','Lola','Sadie','Bailey','Stella','Coco','Molly','Maggie','Penny','Nala','Rosie','Roxy','Ruby','Chloe','Sophie','Ellie','Willow','Piper','Millie','Gracie','Mia','Pepper','Nova','Callie','Winnie','Lulu','Hazel','Harley','Ginger','Olive','Abby','Charlie','Honey','Lexi','Athena','Riley','Izzy','Remi','Maya','Layla','Lady','Kona','Sasha','Poppy'];

const dog = {
  name: "",
  image: "",
};

const createDogBtn = document.getElementById("create-dog");
const saveDogBtn = document.getElementById("save-dog");
const maleBtn = document.getElementById("male-btn");
const femaleBtn = document.getElementById("female-btn");

let gender = "male";

// Set dog name and image based on selected gender
function setDog() {
  if (gender === "male") {
    dog.name = maleNames[Math.floor(Math.random() * maleNames.length)];
  } else {
    dog.name = femaleNames[Math.floor(Math.random() * femaleNames.length)];
  }
  dog.image = "";
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
      dog.image = data.message;
      dogImage.src = dog.image;
      document.getElementById("dog-name").textContent = dog.name;
    })
    .catch(error => console.log(error));
}

// Update dog name and image on page load
setDog();

// Update dog name and image on "Create Dog" button click
createDogBtn.addEventListener("click", () => {
  setDog();
});

// Save dog image on "Save Dog" button click
saveDogBtn.addEventListener("click", () => {
  if (dog.image) {
    const link = document.createElement("a");
    link.href = dog.image;
    link.download = dog.name + ".jpg";
    link.click();
    saveDogBtn.classList.remove("btn-transparent");
    saveDogBtn.classList.add("btn-success");
    setTimeout(() => {
      saveDogBtn.classList.remove("btn-success");
      saveDogBtn.classList.add("btn-transparent");
    }, 1000);
  }
});

// Update dog name and gender on gender select button click
maleBtn.addEventListener("click", () => {
  gender = "male";
  setDog();
  maleBtn.classList.add("active");
  femaleBtn.classList.remove("active");
});

femaleBtn.addEventListener("click", () => {
  gender = "female";
  setDog();
  femaleBtn.classList.add("active");
  maleBtn.classList.remove("active");
});
