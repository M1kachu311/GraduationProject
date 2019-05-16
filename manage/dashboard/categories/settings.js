let path = "/categories";
let pageTitle = "categories";
let secondatyPath = "/bigcategories";

fetch(`${apiURL}${secondatyPath}`)
  .then(data => data.json())
  .then(data => {
    const bigcategories = [];
    data.forEach(bigcategory => {
      bigcategories.push({
        name: bigcategory.Name,
        bigCategory: bigcategory.ID
      });
    });
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
              title: "שם קטגוריה"
            },
            {
              name: "Description",
              type: "textarea",
              readOnly: false,
              width: 150,
              validate: "required",
              title: "תיאור"
            },
            {
              name: "bigCategory",
              type: "select",
              items: bigcategories,
              valueField: "bigCategory",
              textField: "name",
              width: 40,
              validate: "required",
              title: " קטגוריה ראשית"
            },
            {
              name: "isLive",
              type: "checkbox",
              width: 30,
              validate: "required",
              title: "להציג באתר?"
            },
            { type: "control", width: 20 }
          ],
          onItemUpdated: function(args) {
            let newItem = {
              key: key,
              name: args.item.Name,
              bigCategory: args.item.bigCategory,
              description: args.item.Description,
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
              isLive: args.item.isLive,
              bigCategory: args.item.bigCategory,
              description: args.item.Description
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
