let skills = [];
let summaries = [];
let education = [];
let achievements = [];
let languages = [];
let hobbies = [];

function addSkill() {
  const skillInput = document.getElementById("skill");
  const skill = skillInput.value.trim();
  if (skill !== "") {
    skills.push(skill);
    skillInput.value = "";
    displaySkills();
  }
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validateURL(url) {
  const regex = /^(ftp|http|https):\/\/[^ "]+$/;
  return regex.test(url);
}

function validateMobileNumber(number) {
  const regex = /^[6-9]\d{9}$/;
  return regex.test(number);
}

function displaySkills() {
  const skillList = document.getElementById("skillList");
  skillList.innerHTML = "";
  skills.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillList.appendChild(li);
  });
}

function addSummary() {
  const headerInput = document.getElementById("summaryHeader");
  const descriptionInput = document.getElementById("summaryDescription");
  const header = headerInput.value.trim();
  const description = descriptionInput.value.trim();
  if (header !== "" && description !== "") {
    const summary = { header, description };
    summaries.push(summary);
    headerInput.value = "";
    descriptionInput.value = "";
    displaySummaries();
  }
}

function displaySummaries() {
  const summaryList = document.getElementById("summaryList");
  summaryList.innerHTML = "";
  summaries.forEach((summary) => {
    const li = document.createElement("li");
    li.textContent = `${summary.header}: ${summary.description}`;
    summaryList.appendChild(li);
  });
}
function formatDate(inputDate) {
  // Get the complete date from the input field
  const date = new Date(inputDate);
  
  // Create an array of month abbreviations
  const monthAbbreviations = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Extract the month and year
  const monthAbbrev = monthAbbreviations[date.getMonth()]; // Get the abbreviation from the array
  const year = date.getFullYear();
  
  // Format the month and year
  const formattedDate = monthAbbrev + '-' + year.toString();
  
  return formattedDate;
}
function addEducation() {
  const institutionInput = document.getElementById("institution");
  const courseInput = document.getElementById("course");
  const percentageInput = document.getElementById("percentage");
  const institution = institutionInput.value.trim();
  const course = courseInput.value.trim();
  const percentage = percentageInput.value.trim();
  const per = document.getElementById("per");

  const startdatee = document.getElementById("startdate").value;
  const startdate=formatDate(startdatee);
  const enddatee = document.getElementById("enddate").value;
  const enddate=formatDate(enddatee);
  const start = startdate;
  const end = enddate;
  per.innerHTML = "";
  if (
    institution !== "" &&
    course !== "" &&
    percentage !== "" &&
    percentage > 0 &&
    percentage < 100
  ) {
    const edu = { institution, course, percentage, start, end };
    education.push(edu);
    institutionInput.value = "";
    courseInput.value = "";
    percentageInput.value = "";
    startdate.value = "";
    enddate.value = "";

    displayEducation();
  } else {
    per.innerHTML = `<p>Input Valid Percentage</p>`;
  }
}

function displayEducation() {
  const educationList = document.getElementById("educationList");
  educationList.innerHTML = "";
  education.forEach((edu) => {
    const li = document.createElement("li");
    li.textContent = `${edu.institution} - ${edu.course} (${edu.percentage}%)    From ${edu.start}  To ${edu.end}`;
    educationList.appendChild(li);
  });
}



function addAchievement() {
  const achievementInput = document.getElementById("achievement");
  const achievement = achievementInput.value.trim();
  if (achievement !== "") {
    achievements.push(achievement);
    achievementInput.value = "";
    displayAchievements();
  }
}

function displayAchievements() {
  const achievementList = document.getElementById("achievementList");
  achievementList.innerHTML = "";
  achievements.forEach((achievement) => {
    const li = document.createElement("li");
    li.textContent = achievement;
    achievementList.appendChild(li);
  });
}

function addLanguage() {
  const languageInput = document.getElementById("language");
  const language = languageInput.value.trim();
  if (language !== "") {
    languages.push(language);
    languageInput.value = "";
    displayLanguages();
  }
}

function displayLanguages() {
  const languageList = document.getElementById("languageList");
  languageList.innerHTML = "";
  languages.forEach((language) => {
    const li = document.createElement("li");
    li.textContent = language;
    languageList.appendChild(li);
  });
}

function addHobby() {
  const hobbyInput = document.getElementById("hobby");
  const hobby = hobbyInput.value.trim();
  if (hobby !== "") {
    hobbies.push(hobby);
    hobbyInput.value = "";
    displayHobbies();
  }
}
// document.getElementById("photo").addEventListener("change", function (event) {
//   const file = event.target.files[0];
//   const reader = new FileReader();
//   reader.onload = function (e) {
//     document.getElementById("photoPreview").src = e.target.result;
//     document.getElementById("photoPreview").style.display = "block";
//   };
//   reader.readAsDataURL(file);
// });

function saveImage() {
  const fileInput = document.getElementById("imageInput");
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      localStorage.setItem("imageData", event.target.result);
    };
    reader.readAsDataURL(file);
  }
}

function displayHobbies() {
  const hobbyList = document.getElementById("hobbyList");
  hobbyList.innerHTML = "";
  hobbies.forEach((hobby) => {
    const li = document.createElement("li");
    li.textContent = hobby;
    hobbyList.appendChild(li);
  });
}

document
  .getElementById("resumeForm")
  .addEventListener("submit", function (event) {
    saveImage();
    event.preventDefault();
    const formData = {
      name: document.getElementById("name").value,
      mobile: document.getElementById("mobile").value,
      email: document.getElementById("email").value,
      github: document.getElementById("github").value,
      linkedin: document.getElementById("linkedin").value,
      location: document.getElementById("location").value,
      careerObjective: document.getElementById("careerObjective").value,
      skills: skills,
      summaries: summaries,
      education: education,
      achievements: achievements,
      languages: languages,
      hobbies: hobbies,
      // photo: document.getElementById("photoPreview").src,
    };
    localStorage.setItem("formData", JSON.stringify(formData));
    window.location.href = "resume.html";

  });
