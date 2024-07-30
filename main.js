"use strict";
// Create an array of objects representing people
const people = [
    {
        name: "Dottie Inworth",
        dateOfBirth: "9/16/1988",
        children: 4,
        country: "China",
        knowsProgramming: false,
    },
    {
        name: "Pepe Maus",
        dateOfBirth: "8/22/1993",
        children: 0,
        country: "South Africa",
        knowsProgramming: true,
    },
    {
        name: "Karia Krolik",
        dateOfBirth: "6/14/1976",
        children: 0,
        country: "Costa Rica",
        knowsProgramming: true,
    },
    {
        name: "Kassey Arrington",
        dateOfBirth: "12/11/1973",
        children: 4,
        country: "China",
        knowsProgramming: false,
    },
    {
        name: "Joceline Saich",
        dateOfBirth: "9/6/1981",
        children: 4,
        country: "Portugal",
        knowsProgramming: true,
    }
];
// comparing age
const firstPersonDateOfBirth = new Date(people[0].dateOfBirth); // getting the age of the first person      
const lastPersonDateOfBirth = new Date(people[people.length - 1].dateOfBirth); // getting the age of the last person
const currentDate = new Date(); // getting the current date
const firstPersonAge = currentDate.getFullYear() - firstPersonDateOfBirth.getFullYear(); //new variable the gets the full year and minuses the first person date of birth to get the age
const lastPersonAge = currentDate.getFullYear() - lastPersonDateOfBirth.getFullYear(); //new variable the gets the full year and minuses the second person date of birth to get the age
// If the firstPersonAge is older then the lastPersonAge
if (firstPersonAge > lastPersonAge) {
    console.log("First person is older than the last person"); // This is what will come in the console if the conditions are met
}
else if (firstPersonAge < lastPersonAge) {
    console.log("last person is older then the first person"); //this will come in the console if the conditions are met
}
else {
    console.log("both the first and the last person have the same age"); // else if neither of the conditions are met then this will come in the console
}
// comparing kids
const secondPersonKids = people[1].children; // Here i am creating a variable that is a number and it goes to the "people" array and gets the children number for the second person
const thirdPersonKids = people[2].children; // Here i am creating a variable that is a number and it goes to the "people" array and gets the children number for the third person
if (secondPersonKids > thirdPersonKids) {
    console.log("second person has more kids then the third person"); // This string will come in the console if the conditions are met
}
else if (secondPersonKids < thirdPersonKids) {
    console.log("third person has more kids then the second person"); // This string will come in the console if the conditions are met
}
else {
    console.log("second person and the third person have the same amount of kids"); // This string will come in the console if neither of the conditions are met
}
const firstPersonCoding = people[0].knowsProgramming;
const fourthPersonCoding = people[3].knowsProgramming;
if (!firstPersonCoding && !fourthPersonCoding) {
    console.log("LMGTFY");
}
else if (firstPersonCoding && fourthPersonCoding) {
    console.log("yay!");
}
else {
    console.log("one is true and one is false");
}
const secondPersonCountry = people[1].country;
let greeting = "hello";
switch (secondPersonCountry) {
    case "iceland":
        greeting = "hæ";
        break;
    case "spain":
        greeting = "hola";
        break;
    case "korea":
        greeting = "여보세요";
        break;
}
console.log(greeting);
const secondPersonName = people[1].name;
const isNameLongerThenFiveCharacters = secondPersonName.length > 5;
const result = isNameLongerThenFiveCharacters ? "name is longer then five characters" : "name is not longer then five characters";
console.log(result);
//if (people[0].dateOfBirth)
