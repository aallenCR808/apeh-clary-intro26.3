// skills list
const skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];
const skillsSection = document.querySelector("#Skills");
const skillsList = skillsSection.querySelector("ul");

// for loop of skills to add each skill to the list
for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.textContent = skills[i];
  skillsList.appendChild(skill);
}

// message form
let messageForm = document.forms["leave_message"];

messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = event.target.usersName.value;
  let email = event.target.usersEmail.value;
  let message = event.target.usersMessage.value;

  let messageSection = document.querySelector("#messages");
  let messageList = messageSection.querySelector("ul");

  // create message section list on website
  let newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:${email}">${name}</a>
  <span>${message}</span>`;

  // create remove button, add 'remove' button to have remove message option
  let removeButton = document.createElement("button");
  removeButton.textContent = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", function () {
    let entry = removeButton.parentNode;
    entry.remove();

    if (document.querySelector("#messages>ul").children.length > 0)
      document.querySelector("#messages").style.display = "block";
    else document.querySelector("#messages").style.display = "none";
  });

  newMessage.appendChild(removeButton);
  // add new message in messages section
  messageList.appendChild(newMessage);
  messageForm.reset();
});

// footer: copyright, name and current date
const body = document.body;
const footer = document.createElement("footer");
body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");
copyright.innerHTML = `\u00A9 Apeh Clary ${thisYear}`;
footer.appendChild(copyright);

// console.log(fetch("https://api.github.com/users/aallenCR808/repos"));

let main = document.querySelector("main");
let repositories = [];

fetch("https://api.github.com/users/aallenCR808/repos")
  .then((response) => {
    //chain a then method to fetch

    if (!response.ok) {
      throw new Error("Request failed");
    }
    return response.json(); //parse the response as JSON, call and pass it a function that returns the response JSON data
  })

  .then((data) => {
    repositories = data; //do something with the data
    console.log(repositories);

    //assign data to webpage
    const projectSection = document.querySelector("#Projects");
    const projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repositories.length; i++) {
      let project = document.createElement("li");
      project.innerText = repositories[i]["name"];
      projectList.appendChild(project);
    }
  })

  .catch((error) => {
    console.error("An error occurred:", error);
  });

// async function getCharacters() {
// try {
//   const response = await fetch('characters.json')

// if(!response.ok) {
//   throw new Error('Request failed')
// }

// const data = await response.json()

// console.log(data)
// console.log(data.party)

// } catch (error) {
// console.error('Error!', error)
// }
// }
// getCharacters();
