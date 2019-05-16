let path = "/joboffers";
let pageTitle = "joboffers";

fetch(`${apiURL}${path}`)
  .then(data => data.json())
  .then(joboffers => {
    $("#jsGrid").jsGrid({
      width: "98%",
      height: "85vh",
      align: "right",
      editing: true,
      sorting: true,
      selecting: false,
      paging: true,
      pageSize: 10,
      data: joboffers,
      fields: [
        {
          name: "SenderName",
          width: 30,
          title: "שם מעסיק",
          type: "text",
          validate: "required"
        },
        {
          name: "SenderPhone",
          width: 30,
          title: "טלפון מעסיק",
          type: "text",
          validate: "required"
        },
        {
          name: "SenderMail",
          width: 65,
          title: "מייל מעסיק",
          type: "text",
          validate: "required"
        },
        {
          name: "Name",
          type: "text",
          width: 30,
          validate: "required",
          title: "שם משרה"
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
          name: "Type",
          type: "text",
          width: 30,
          validate: "required",
          title: "סוג משרה"
        },
        {
          name: "Location",
          type: "text",
          width: 30,
          validate: "required",
          title: "מיקום"
        },

        { name: "Approved", type: "checkbox", width: 5, title: "מאושר" },
        { type: "control", width: 20 }
      ],
      onItemUpdated: function(args) {
        let newItem = {
          key: key,
          name: args.item.Name,
          description: args.item.Description,
          location: args.item.Location,
          type: args.item.Type,
          sname: args.item.SenderName,
          sphone: args.item.SenderPhone,
          smail: args.item.SenderMail,
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
