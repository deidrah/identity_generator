const fs = require("fs");

const genders = ["m", "f"];

const maleNames = ["Józef", "Darek", "Czarek", "Lucjan", "Sebastian", "Brajan", "Alan"];

const femaleNames = ["Karina", "Jessica", "Anna", "Marta", "Patrycja", "Magda", "Łucja"];

const lastNames = ["Nowak", "Papier", "Kredka", "Serduszko", "Fotelik", "Bigos", "Kot"];

const randChoice = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const people = [];

for (let i = 1; i < 20; i++) {
  let person = {};

  person.gender = randChoice(genders);

  if (person.gender === "m") {
    person.name = randChoice(maleNames);
  } else {
    person.name = randChoice(femaleNames);
  }

  person.lastName = randChoice(lastNames);

  person.age = Math.floor(Math.random() * 60 + 18);

  person.email = person.name + "." + person.lastName + "@gmail.com";

  people.push(person);
}

const data = JSON.stringify(people);

fs.writeFile("people.json", data, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});