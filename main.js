// import { Student } from './student.js';
//Arrow Functions và Template Literals
const getUserInfo = (name, age, city) => {
  return `Xin chào, tôi là ${name}, ${age} tuổi, sống tại ${city}.`;
};

const userInformation = getUserInfo("Tu", 22, "Da Nang");
console.log(userInformation);

//Destructuring Assignments
const user = {
  name: "Tu",
  age: 22,
  address: {
    city: "Da Nang",
    country: "Viet Nam"
  }
};

const { name, age, address: { city, country } } = user;
console.log(`${name} (${age} tuổi) sống tại ${city}, ${country}.`);

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Dữ liệu từ server";  
      resolve(data);
    }, 2000);
  });
}
async function fetchDataAsync() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

fetchDataAsync();
// //Classes và Modules
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("tieng dong vat");
  }
}

// Tạo một đối tượng từ lớp Animal
const myAnimal = new Animal("Terosu");
myAnimal.makeSound();

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  makeSound() {
    console.log("gau gau");
  }
}

// Tạo một đối tượng từ lớp con Dog
const myDog = new Dog("Terosu", "Labrador");
myDog.makeSound();

import { add, subtract } from './myModule.js';

const resultAdd = add(5, 3);
const resultSubtract = subtract(10, 4);

console.log(`Addition result: ${resultAdd}`);
console.log(`Subtraction result: ${resultSubtract}`);