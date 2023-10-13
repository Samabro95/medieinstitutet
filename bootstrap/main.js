function createAnimalCard(animal, i){
    const animalName = animal.name;
    const animalDescription = animal.shortDescription;
    const animalImage = animal.imageName;
    
    let htmlTemplate = `<div class="col">
    <div class="card" style="width: 18rem;">
        <img src="${animalImage}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${animalName}</h5>
          <p class="card-text">${animalDescription}</p>
          <a href="#" class="btn btn-primary animal-${i}" onclick="showSidebBar(event)">Go somewhere</a>
        </div>
      </div>
  </div>`

  return htmlTemplate;
}

function insertAnimalCard(htmlTemplate){
    
    const zooContainer = document.querySelector('.zoo-container')
    console.log(zooContainer)
    zooContainer.innerHTML += htmlTemplate;
}
function showSidebBar(event){
    let animalNumber = event.target.className;
    const splitClass = animalNumber.split("");

    const animalClass = splitClass[2].split("-");
    
    const animalPosition = animalClass[1];

    const asideHeadline = document.querySelector("h2");
    const asideDescription = document.querySelector("aside > p");
    const currentAnimal = zoo[animalPosition];

    asideHeadline.innerText = currentAnimal.species;
    asideDescription.innerText = currentAnimal.longDescription;

}

const monkey = {
    name: "Monkeys",
    age: 14,
    imageName: "images/img1.jpg",
    shortDescription: "Mamma, pappa, barn",
    species: "monkey",
    longDescription: "Bamse älskar bo i en bur och bli matad för då slipper han jaga sin egen mat"
}

const lurviga = {
    name: "Lurvarna",
    age: 25,
    imageName: "images/img2.jpg",
    shortDescription: "rädda små lurvar",
    species: "lurvarna",
    longDescription: "Bamse älskar bo i en bur och bli matad för då slipper han jaga sin egen mat"
}

const lion = {
    name: "Mufasa",
    age: 43,
    imageName: "images/img3.jpg",
    shortDescription: "stort lejon",
    species: "lejon",
    longDescription: "Bamse älskar bo i en bur och bli matad för då slipper han jaga sin egen mat"
}

const zoo = [];
zoo.push(monkey);
zoo.push(lurviga);
zoo.push(lion);

for(let i = 0; i < zoo.length; i++){
    const currentAnimal = zoo[i];
   
    const animalCard = createAnimalCard(currentAnimal, i);
    
    insertAnimalCard(animalCard);
}