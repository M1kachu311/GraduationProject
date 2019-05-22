let path = "/mainpersonnel";
let pageTitle = "mainpersonnel";
let imagePath = "/images";

fetch(`${apiURL}${imagePath}`)
  .then(data => data.json())
  .then(images => {
    fetch(`${apiURL}${path}`)
      .then(data => data.json())
      .then(categories => {
        $("#jsGrid").jsGrid({
          width: "98%",
          height: "85vh",
          align: "right",
          inserting: true,
          editing: true,
          sorting: true,
          selecting: false,
          paging: true,
          pageSize: 10,
          data: categories,
          fields: [
            {
              name: "Name",
              type: "text",
              width: 50,
              validate: "required",
              title: "שם "
            },
            {
              name: "Title",
              type: "text",
              width: 50,
              validate: "required",
              title: "תפקיד"
            },
            {
              name: "Phone",
              type: "text",
              width: 50,
              validate: "required",
              title: "טלפון"
            },
            {
              name: "Email",
              type: "text",
              width: 50,
              validate: "required",
              title: "אימייל"
            },
            {
              name: "Image",
              type: "select",
              items: images,
              valueField: "URL",
              textField: "Name",
              width: 40,
              validate: "required",
              title: "תמונה"
            },
            { type: "control", width: 20 }
          ],
          onItemUpdated: function(args) {
            let newItem = {
              key: key,
              name: args.item.Name,
              title: args.item.Title,
              phone: args.item.Phone,
              email: args.item.Email,
              image: args.item.Image,
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
          },
          onItemDeleted: function(args) {
            let data = {
              key: key,
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
          onItemInserted: function(args) {
            let newItem = {
              key: key,
              name: args.item.Name,
              title: args.item.Title,
              phone: args.item.Phone,
              image: args.item.Image,
              email: args.item.Email
            };
            console.log(newItem);
            let url = `${apiURL}${path}`;
            fetch(url, {
              method: "POST", // or 'PUT'
              body: JSON.stringify(newItem), // data can be `string` or {object}!
              headers: {
                "Content-Type": "application/json"
              }
            })
              .then(res => res.json())
              .then(response => console.log(JSON.stringify(response)))
              .catch(error => console.error(error));
            location.reload();
          }
        });
      });
  })
  .catch(err => console.log(err));
