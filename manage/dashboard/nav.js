const siteUrl = "http://127.0.0.1:3001/dashboard";
const navApiUrl = "http://127.0.0.1:3000";
fetch(`${navApiUrl}/nav`)
  .then(data => data.json())
  .then(data => {
    data.forEach(navitem => {
      $(".navbar-nav").append(
        `<li class="nav-item active">
        <a class="nav-link" href="${siteUrl}${navitem.Link}">${
          navitem.Name
        } <span class="sr-only"></span></a>
    </li>`
      );
    });
  })
  .catch(err => console.log(err));
