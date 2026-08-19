const body = document.body;
const footer = document.createElement("footer");
body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");
copyright.innerHTML = `\u00A9 Apeh Clary ${thisYear}`;
footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];
const skillsSection = document.querySelector("#Skills");
const skillsList = skillsSection.querySelector("ul");

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
