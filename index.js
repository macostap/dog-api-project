console.log("Connected to Dog API");

fetch("https://api.thedogapi.com/v1/breeds")
  .then(response => response.json())
  .then(data => {
    console.log(data); 
  })
  .catch(error => {
    console.error("Error Dog API Data:", error);
  });
