let path = "/images";
let pageTitle = "images";

var myWidget = cloudinary.createUploadWidget(
  {
    cloudName: "duth3rmbz",
    uploadPreset: "tzviupload"
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log(result.info);
      let url = `${apiURL}${path}`;
      let newImg = {
        url: result.info.url,
        turl: result.info.thumbnail_url,
        surl: result.info.secure_url,
        name: result.info.original_filename,
        key: key
      };
      console.log(newImg);
      fetch(url, {
        method: "POST",
        body: JSON.stringify(newImg), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(response => {
          console.log(JSON.stringify(response));
        })
        .catch(error => console.error(error));
    }
    if (result.event === "close") {
      location.reload();
    }
  }
);

document.getElementById("upload_widget").addEventListener(
  "click",
  function() {
    myWidget.open();
  },
  false
);

fetch(`${apiURL}${path}`)
  .then(data => data.json())
  .then(images => {
    $("#jsGrid").jsGrid({
      autoload: true,
      width: "98%",
      height: "85vh",
      align: "right",
      editing: true,
      sorting: true,
      inserting: false,
      selecting: false,
      paging: true,
      pageSize: 10,
      data: images,
      fields: [
        {
          name: "Img",
          title: "תצוגה",
          sorting: false,
          itemTemplate: function(val, item) {
            return $("<img>").attr("src", item.TURL);
          },
          align: "center",
          width: 120
        },
        { type: "text", name: "Name", title: "שם התמונה" },
        { type: "control", editButton: true }
      ],
      onItemDeleted: function(args) {
        let data = {
          key: key,
          name: args.item.Name,
          id: args.item.ID
        };
        console.log(args.item);
        let url = `${apiURL}${path}`;
        fetch(url, {
          method: "DELETE", // or 'PUT'
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(res => res.json())
          .then(response => console.log(JSON.stringify(response)))
          .catch(error => console.error(error));
      },
      onItemUpdated: function(args) {
        let newItem = {
          key: key,
          name: args.item.Name,
          id: args.item.ID
        };
        console.log(newItem);
        let url = `${apiURL}${path}`;
        fetch(url, {
          method: "PUT", // or 'PUT'
          body: JSON.stringify(newItem), // data can be `string` or {object}!
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(res => res.json())
          .then(response => console.log(JSON.stringify(response)))
          .catch(error => console.error(error));
      }
    });
  })
  .catch(err => console.log(err));
