// Dog API
//dog facts
const facts_url = "https://dogapi.dog/api/v2/facts?limit=5";

let factsSection = document.querySelector(".dog-facts");
let factButton = document.querySelector("#factButton");

let factList = document.createElement("ul");
factsSection.append(factList);

factButton.addEventListener("click", function (event) {
  event.preventDefault();

  factList.textContent = " "; //declaring empty fact list

  fetch(facts_url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed");
      }
      return response.json(); //return json data and call it
    })
    .then((data) => {
      data.data.forEach((fact) => {
        let factPoint = document.createElement("li");
        factPoint.textContent = fact.attributes.body;
        //get fact list from API
        factList.appendChild(factPoint);
      });
    })
    .catch((error) => {
      console.error("An error occured:", error);
    });
});

// dog photos
const image_url = "https://dog.ceo/api/breeds/image/random";

let imageSection = document.querySelector(".dog-images");
let imageButton = document.querySelector("#imageButton");

imageButton.addEventListener("click", function (event) {
  event.preventDefault();

  const dogImageElement = document.getElementById("dog-image");

  fetch(image_url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed");
      }
      return response.json();
    })
    .then((data) => {
      dogImageElement.src = data.message;
    })
    .catch((error) => {
      console.log(error);
    });
});
