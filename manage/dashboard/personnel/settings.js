let path = "/personnel";
let pageTitle = "personnel";
let secondatyPath = "/categories";

fetch(`${apiURL}${secondatyPath}`)
  .then(data => data.json())
  .then(data => {
    const categories = [];
    data.forEach(category => {
      categories.push({ name: category.Name, CategoryID: category.ID });
    });
    fetch(`${apiURL}${path}`)
      .then(data => data.json())
      .then(personnel => {
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
          data: personnel,
          fields: [
            {
              name: "Name",
              type: "text",
              width: 50,
              validate: "required",
              title: "שם בעל תפקיד"
            },
            {
              name: "Description",
              type: "textarea",
              readOnly: false,
              width: 150,
              validate: "required",
              title: "תיאור בעל תפקיד "
            },
            {
              name: "Image",
              type: "text",
              width: 30,
              title: "קישור לתמונה"
            },
            {
              name: "CategoryID",
              type: "select",
              items: categories,
              valueField: "CategoryID",
              textField: "name",
              width: 40,
              validate: "required",
              title: "קטגוריה"
            },

            { type: "control", width: 20 }
          ],
          onItemUpdated: function(args) {
            let newItem = {
              key: key,
              name: args.item.Name,
              description: args.item.Description,
              image: args.item.Image,
              categoryId: args.item.CategoryID,
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
              description: args.item.Description,
              image: args.item.Image,
              categoryId: args.item.CategoryID
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
