fetch(`${apiURL}/joboffers/count`)
  .then(data => data.json())
  .then(data => {
    $("#showData").append(
      `
          <h3 class="text-center">הצעות משרות לטיפול: ${
            data[0]["COUNT (*)"]
          }</h3>
          `
    );
  })
  .catch(err => console.log(err));

fetch(`${apiURL}/apartmentoffers/count`)
  .then(data => data.json())
  .then(data => {
    $("#showData").append(
      `
          <h3 class="text-center">הצעות דיור לטיפול: ${
            data[0]["COUNT (*)"]
          }</h3>
          `
    );
  })
  .catch(err => console.log(err));

fetch(`${apiURL}/categories/live/count`)
  .then(data => data.json())
  .then(data => {
    $("#showData").append(
      `
          <h3 class="text-center">קטגוריות בלייב: ${data[0]["COUNT (*)"]}</h3>
          `
    );
  })
  .catch(err => console.log(err));

fetch(`${apiURL}/posts/live/count`)
  .then(data => data.json())
  .then(data => {
    $("#showData").append(
      `
          <h3 class="text-center">פוסטים בלייב: ${data[0]["COUNT (*)"]}</h3>
          `
    );
  })
  .catch(err => console.log(err));
