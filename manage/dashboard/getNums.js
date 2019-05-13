fetch(`${apiURL}/joboffers/count`)
  .then(data => data.json())
  .then(data => {
    $(".item1").append(
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
    $(".item2").append(
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
    $(".item4").append(
      `
          <h3 class="text-center">קטגוריות משנה בלייב: ${
            data[0]["COUNT (*)"]
          }</h3>
          `
    );
  })
  .catch(err => console.log(err));

fetch(`${apiURL}/bigcategories/live/count`)
  .then(data => data.json())
  .then(data => {
    $(".item3").append(
      `
          <h3 class="text-center">מספר קטגוריות ראשיות: ${
            data[0]["COUNT (*)"]
          }</h3>
          `
    );
  })
  .catch(err => console.log(err));

fetch(`${apiURL}/posts/live/count`)
  .then(data => data.json())
  .then(data => {
    $(".item5").append(
      `
          <h3 class="text-center">פוסטים בלייב: ${data[0]["COUNT (*)"]}</h3>
          `
    );
  })
  .catch(err => console.log(err));
