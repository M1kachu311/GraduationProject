let apiURL = "http://127.0.0.1:3000";
let path = "/joboffers";
const key = `zCtvYaTNPP;p9b_.Uw''wmS,kkED(_zyvpZq@M3?yo58X>%ICJxLju=RYj{"2M`;

fetch(`${apiURL}${path}`)
  .then(data => data.json())
  .then(joboffers => {
    $("#jsGrid").jsGrid({
      width: "98%",
      height: "85vh",
      align: "right",
      editing: true,
      sorting: true,
      paging: true,
      pageSize: 10,
      data: joboffers,
      fields: [
        { name: "Name", type: "text", width: 30, validate: "required" },
        {
          name: "Description",
          type: "textarea",
          readOnly: false,
          width: 150,
          validate: "required"
        },
        { name: "Type", type: "text", width: 30, validate: "required" },
        { name: "Location", type: "text", width: 30, validate: "required" },
        { name: "SenderName", width: 30 },
        { name: "SenderPhone", width: 30 },
        { name: "SenderMail", width: 65 },
        { name: "Approved", type: "checkbox", width: 5 },
        { type: "control", width: 10 }
      ],
      onItemUpdated: function(args) {
        let newItem = {
          key: key,
          name: args.item.Name,
          description: args.item.Description,
          location: args.item.Location,
          type: args.item.Type,
          approved: args.item.Approved,
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
          name: args.item.Name,
          description: args.item.Description,
          location: args.item.Location,
          type: args.item.Type,
          approved: args.item.Approved,
          date: new Date(),
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
      }
    });
  })
  .catch(err => console.log(err));
