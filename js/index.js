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

// Alternate way that AirHub didn't like:
// for (let skillName of skills) {
//   const skill = document.createElement("li");
//   skill.innerText = skillName;
//   skillsList.appendChild(skill);
// }

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

  // add new message in messages section
  messageList.appendChild(newMessage);

  console.log(name, email, message);

  messageForm.reset();

  // create remove button, add 'remove' button to have remove message option
  let removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", function () {
    let entry = removeButton.parentNode;
    entry.remove();

    if (document.querySelector("#messages>ul").children.length > 0)
      document.querySelector("#messages").style.display;
    else document.querySelector("#messages").style.display = "none";
  });

  newMessage.appendChild(removeButton);

  if (document.querySelector("#messages>ul").children.length > 0)
    document.querySelector("#messages").style.display = "block";
  else document.querySelector("#messages").style.display = "none";

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
