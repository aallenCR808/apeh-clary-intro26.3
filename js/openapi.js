// dog facts

//fetch(https://api.thedogapi.com/v1)

// using async and await
// async function fetchDogFacts() {
//   try {
//     const response = await fetch("https://dogapi.dog/api/v2/facts?limit=5");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }
// fetchDogFacts(); // call it

//simplify

// Dog API
const api_url = "https://dogapi.dog/api/v2/facts?limit=5";

let rightSection = document.querySelector(".hero-right");
let factButton = document.querySelector("#factButton");

let factList = document.createElement("ul");
rightSection.append(factList);

factButton.addEventListener("click", function (event) {
  event.preventDefault();

  //when I push a button, opens to get facts page

  factList.textContent = " ";

  fetch("https://dogapi.dog/api/v2/facts?limit=5")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed");
      }
      return response.json(); //return json data and call it
    })
    .then((data) => {
      // console.log(data); //do something with the data

      data.data.forEach((fact) => {
        let factPoint = document.createElement("li");
        factPoint.textContent = fact.attributes.body;
        factList.appendChild(factPoint);
      });
    })
    .catch((error) => {
      console.error("An error occured:", error);
    });
  // need to get data
  // const data = fetchDogFacts(api_url);
  // console.log(data);
});

// get breed!!!

const api_breed = "https://dogapi.dog/api/v2/breeds?page[number]=2";

let leftSection = document.querySelector(".hero-left");
let breedButton = document.querySelector("#breedButton");

let breedList = document.createElement("ul");
leftSection.append(breedList);

breedButton.addEventListener("click", function (event) {
  event.preventDefault();

  //when I push a button, opens to get facts page

  breedList.textContent = " ";

  fetch("https://dogapi.dog/api/v2/breeds?page[number]=1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed");
      }
      return response.json(); //return json data and call it
    })
    .then((data) => {
      console.log(data); //do something with the data

      data.data.forEach((breed) => {
        let breedPoint = document.createElement("li");
        breedPoint.textContent = breed.attributes.name;
        breedList.appendChild(breedPoint);
      });
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
      // console.error("An error occured:", error);
    });
  // need to get data
  // const data = fetchDogFacts(api_url);
  // console.log(data);
});

//how to randomize the data and limit to 5 breeds at a time

async function getRandomBreed() {}
