const url = "http://localhost:3000";
console.log("hi");

const form1 = document.getElementById("form1");
const form2 = document.querySelector("#form2");
const ul = document.querySelector("ul");
const div3 = document.querySelector("#div3");
const fname = document.querySelector("#fname");
const dob = document.querySelector("#dob");
const photo = document.querySelector("#photo");
const birthplace = document.querySelector("#birthplace");
const career = document.querySelector("#career");
const nom = document.querySelector("#nom");
const score = document.querySelector("#score");
const fifties = document.querySelector("#fifties");
const centuries = document.querySelector("#centuries");
const wickets = document.querySelector("#wickets");
const avg = document.querySelector("#avg");

form1.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();

    const playerInfo = {
      fname: fname.value.toLowerCase(),
      dob: dob.value,
      photo: photo.value,
      birthplace: birthplace.value,
      career: career.value,
      nom: nom.value,
      score: score.value,
      fifties: fifties.value,
      centuries: centuries.value,
      wickets: wickets.value,
      avg: avg.value,
    };
    const data = await axios.post(`${url}/saveData`, playerInfo);
    console.log(data);

    fname.value = "";
    dob.value = "";
    photo.value = "";
    birthplace.value = "";
    career.value = "";
    nom.value = "";
    score.value = "";
    fifties.value = "";
    centuries.value = "";
    wickets.value = "";
    avg.value = "";
  } catch (err) {
    console.log(err);
  }
});
const edit = document.createElement("button");
edit.id = "edit-button";
edit.textContent = "EDIT";

form2.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();

    const ul = document.querySelector("ul");
    const div3 = document.querySelector("#div3");
    div3.innerHTML = "";
    ul.innerHTML = "";
    const fname = document.querySelector("#fname2");
    console.log(fname.value);
    const playerInfo = await axios.get(
      `${url}/getData/${fname.value.toLowerCase()}`
    );
    const data = playerInfo.data;

    if (data.flag == 0) {
      ul.textContent = "No such player...";
    } else {
      const data = playerInfo.data.content;
      const lb3 = document.createElement("li");
      const imgElement = document.createElement("img");

      // Set the src attribute to the image link
      imgElement.src = `${data.photo}`;

      // Optionally, you can set other attributes like alt, width, height, etc.
      imgElement.alt = "Example Image";
      imgElement.width = 300;
      imgElement.height = 200;
      lb3.appendChild(imgElement);

      ul.appendChild(lb3);
      lb3.dataset.value = data.photo;
      ul.appendChild(lb3);

      const lb1 = document.createElement("li");
      lb1.textContent = `Name : ${data.fname}`;
      lb1.dataset.value = data.fname;
      ul.appendChild(lb1);

      const lb2 = document.createElement("li");
      const today = new Date();
      const todayDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      );

      // Get a particular date (e.g., June 15, 2023)
      const particularDate = new Date(Date.parse(data.dob));

      // Calculate the difference in days
      const age = Math.floor(
        (todayDate - particularDate) / (1000 * 60 * 60 * 24 * 365)
      );

      lb2.textContent = `Age : ${age}`;
      console.log(todayDate, particularDate);
      lb2.dataset.value = data.dob;
      ul.appendChild(lb2);

      const lb10 = document.createElement("li");
      lb10.textContent = `Birth place : ${data.birthplace}`;
      lb10.dataset.value = data.birthplace;
      ul.appendChild(lb10);

      const lb4 = document.createElement("li");
      lb4.textContent = `Number of Matches : ${data.nom}`;
      lb4.dataset.value = data.nom;
      ul.appendChild(lb4);

      const lb5 = document.createElement("li");
      lb5.textContent = `Score : ${data.score}`;
      lb5.dataset.value = data.score;
      ul.appendChild(lb5);

      const lb6 = document.createElement("li");
      lb6.textContent = `Fifties : ${data.fifties}`;
      lb6.dataset.value = data.fifties;
      ul.appendChild(lb6);

      const lb7 = document.createElement("li");
      lb7.textContent = `Centuries : ${data.centuries}`;
      lb7.dataset.value = data.centuries;
      ul.appendChild(lb7);

      const lb8 = document.createElement("li");
      lb8.textContent = `Wickets : ${data.wickets}`;
      lb8.dataset.value = data.wickets;
      ul.appendChild(lb8);

      const lb9 = document.createElement("li");
      lb9.textContent = `Avg : ${data.avg}`;
      lb9.dataset.value = data.avg;
      ul.appendChild(lb9);

      const div3 = document.querySelector("#div3");

      const lb11 = document.createElement("label");
      lb11.id = "career-id";

      lb11.textContent = `Career : ${data.career}`;
      lb11.dataset.value = data.career;
      div3.appendChild(lb11);

      div3.appendChild(edit);
    }
  } catch (err) {
    console.log(err);
  }
});
edit.addEventListener("click", async (event) => {
  try {
    event.preventDefault();

    const car = document.querySelector("#career-id");
    const list = document.querySelectorAll("li");
    console.log(list);
    photo.value = list[0].dataset.value;
    fname.value = list[1].dataset.value;
    dob.value = list[2].dataset.value;
    birthplace.value = list[3].dataset.value;
    nom.value = list[4].dataset.value;
    score.value = list[5].dataset.value;
    fifties.value = list[6].dataset.value;
    centuries.value = list[7].dataset.value;
    wickets.value = list[8].dataset.value;
    avg.value = list[9].dataset.value;
    career.value = car.dataset.value;
    ul.innerHTML = "";
    div3.innerHTML = "";

    const deletedItem = await axios.delete(
      `${url}/delete/${fname.value.toLowerCase()}`
    );
    console.log(deletedItem.data);
  } catch (err) {
    console.log("error", err);
  }
});
