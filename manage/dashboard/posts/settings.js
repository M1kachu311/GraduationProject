let path = "/posts";
let pageTitle = "posts";
let secondatyPath = "/categories";
let imagePath = "/images";

fetch(`${apiURL}${imagePath}`)
  .then(data => data.json())
  .then(images => {
    fetch(`${apiURL}${secondatyPath}`)
      .then(data => data.json())
      .then(data => {
        const categories = [];
        data.forEach(category => {
          categories.push({ name: category.Name, CategoryID: category.ID });
        });
        fetch(`${apiURL}${path}`)
          .then(data => data.json())
          .then(posts => {
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
              data: posts,
              fields: [
                {
                  name: "Name",
                  type: "text",
                  width: 50,
                  validate: "required",
                  title: "כותרת פוסט"
                },
                {
                  name: "Description",
                  type: "textarea",
                  readOnly: false,
                  width: 150,
                  validate: "required",
                  title: "תוכן פוסט"
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

                { name: "isLive", type: "checkbox", width: 5, title: "באוויר" },

                { type: "control", width: 20 }
              ],
              onItemUpdated: function(args) {
                let newItem = {
                  key: key,
                  name: args.item.Name,
                  description: args.item.Description,
                  image: args.item.Image,
                  categoryId: args.item.CategoryID,
                  isLive: args.item.isLive,
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
                  categoryId: args.item.CategoryID,
                  isLive: args.item.isLive,
                  date: new Date()
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
      });
  })
  .catch(err => console.log(err));
