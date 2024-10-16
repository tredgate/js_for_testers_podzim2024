//import { faker } from "@faker-js/faker"; // obecný (anglický) faker
import { fakerCS_CZ as faker } from "@faker-js/faker"; // český faker

const firstName = faker.person.firstName("female");
const lastName = faker.person.lastName("female");
const username = faker.internet.userName({
  firstName: firstName,
  lastName: lastName,
});
const email = faker.internet.email({
  firstName: firstName,
  lastName: lastName,
  provider: "seznam.cz",
});
const cow = faker.animal.cow();

console.log(firstName);
console.log(lastName);
console.log(username);
console.log(email);
console.log(cow);
