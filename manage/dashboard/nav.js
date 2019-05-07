const siteUrl = "http://127.0.0.1:3001/dashboard";
fetch(`${apiURL}/nav`)
  .then(data => data.json())
  .then(data => {
    data.forEach(navitem => {
      $(".navbar-nav").append(
        `<li class="nav-item active">
        <a class="nav-link navitem${navitem.ID}" href="${siteUrl}${
          navitem.Link
        }">${navitem.Name} <span class="sr-only"></span></a>
    </li>`
      );
    });

    if (typeof pageTitle == "undefined") {
      $(".navitem1").css("border-bottom", "1px solid white");
    } else {
      if (pageTitle == "jobs") {
        $(".navitem2").css("border-bottom", "1px solid white");
      }
      if (pageTitle == "joboffers") {
        $(".navitem3").css("border-bottom", "1px solid white");
      }
      if (pageTitle == "apartments") {
        $(".navitem4").css("border-bottom", "1px solid white");
      }
      if (pageTitle == "apartmentoffers") {
        $(".navitem5").css("border-bottom", "1px solid white");
      }
    }
  })
  .catch(err => console.log(err));
