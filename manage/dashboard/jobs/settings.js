let apiURL = "http://127.0.0.1:3000";
let path = "/jobs";

fetch(`${apiURL}${path}`)
  .then(data => data.json())
  .then(jobs => {
    $("#jsGrid").jsGrid({
      width: "100%",
      height: "90vh",

      inserting: true,
      editing: true,
      sorting: true,
      paging: true,
      pageSize: 10,
      data: jobs,
      fields: [
        { name: "Name", type: "text", width: 50, validate: "required" },
        {
          name: "Description",
          type: "textarea",
          readOnly: false,
          width: 150,
          validate: "required"
        },
        { name: "Type", type: "text", width: 30, validate: "required" },
        { name: "Location", type: "text", width: 30, validate: "required" },
        { type: "control" }
      ],
      onItemUpdated: function(args) {
        let newItem = {
          name: args.item.Name,
          description: args.item.Description,
          location: args.item.Location,
          type: args.item.Type,
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
          name: args.item.Name,
          description: args.item.Description,
          location: args.item.Location,
          type: args.item.Type,
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
  })
  .catch(err => console.log(err));
