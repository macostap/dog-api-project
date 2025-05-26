console.log("Connected to Dog API");

const dogInfoDiv = document.getElementById("dog-info");
const btnBreeds = document.getElementById("show-breeds");
const btnTemps = document.getElementById("show-temperaments");


function showBreeds() {
  dogInfoDiv.innerHTML = "Loading breeds...";

  fetch("https://api.thedogapi.com/v1/breeds")
    .then(response => response.json())
    .then(data => {
      dogInfoDiv.innerHTML = "";

      data.forEach(breed => {
        const breedElement = document.createElement("div");
        breedElement.className = "breed-card";

        const name = document.createElement("p");
        name.textContent = breed.name;

        breedElement.appendChild(name);
        dogInfoDiv.appendChild(breedElement);
      });
    })
    .catch(error => {
      dogInfoDiv.textContent = "Error loading breeds.";
      console.error("Error Dog API Data:", error);
    });
}


function showTemperaments() {
  dogInfoDiv.innerHTML = "Loading temperaments...";

  fetch("https://api.thedogapi.com/v1/breeds")
    .then(response => response.json())
    .then(data => {
      dogInfoDiv.innerHTML = "";

      data.forEach(breed => {
        const breedElement = document.createElement("div");
        breedElement.className = "breed-card";

        const name = document.createElement("p");
        name.textContent = breed.name;

        const temperament = document.createElement("p");
        temperament.textContent = breed.temperament || "No temperament info";

        breedElement.appendChild(name);
        breedElement.appendChild(temperament);
        dogInfoDiv.appendChild(breedElement);
      });
    })
    .catch(error => {
      dogInfoDiv.textContent = "Error loading temperaments.";
      console.error("Error Dog API Data:", error);
    });
}


btnBreeds.addEventListener("click", showBreeds);
btnTemps.addEventListener("click", showTemperaments);


showBreeds();
