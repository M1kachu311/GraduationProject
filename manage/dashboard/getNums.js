const apiURL = "http://127.0.0.1:3000";

fetch(`${apiURL}/joboffers/count`)
  .then(data => data.json())
  .then(data => {
    $("#showData").append(
      `
          <h3 class="text-center">הצעות משרות לטיפולך: ${
            data[0]["COUNT (*)"]
          }</h3>
          `
    );
  })
  .catch(err => console.log(err));
