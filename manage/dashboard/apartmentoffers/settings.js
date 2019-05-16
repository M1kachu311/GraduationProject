let path = "/apartmentoffers";
let pageTitle = "apartmentoffers";

fetch(`${apiURL}${path}`)
  .then(data => data.json())
  .then(apartmentoffers => {
    $("#jsGrid").jsGrid({
      width: "98%",
      height: "85vh",
      align: "right",
      editing: true,
      sorting: true,
      selecting: false,
      paging: true,
      pageSize: 10,
      data: apartmentoffers,
      fields: [
        {
          name: "Name",
          width: 35,
          type: "text",
          validate: "required",
          title: "שם"
        },
        {
          name: "Phone",
          width: 40,
          type: "text",
          validate: "required",
          title: "טלפון "
        },
        {
          name: "Offer",
          type: "text",
          width: 25,
          validate: "required",
          title: "מכירה/ השכרה"
        },
        {
          name: "Type",
          type: "text",
          width: 30,
          validate: "required",
          title: "סוג הנכס"
        },
        {
          name: "Rooms",
          type: "text",
          width: 5,
          validate: "required",
          title: "מס` חדרים"
        },
        {
          name: "Floor",
          type: "text",
          width: 15,
          validate: "required",
          title: "קומה"
        },
        {
          name: "Dir",
          type: "text",
          width: 70,
          validate: "required",
          title: "כתובת"
        },
        {
          name: "Price",
          type: "text",
          width: 25,
          validate: "required",
          title: "מחיר"
        },
        {
          name: "Description",
          type: "textarea",
          readOnly: false,
          width: 150,
          validate: "required",
          title: "תיאור"
        },
        { name: "Approved", type: "checkbox", width: 5, title: "מאושר" },
        { type: "control", width: 20 }
      ],
      onItemUpdated: function(args) {
        let newItem = {
          key: key,
          name: args.item.Name,
          phone: args.item.Phone,
          offer: args.item.Offer,
          type: args.item.Type,
          rooms: args.item.Rooms,
          floor: args.item.Floor,
          dir: args.item.Dir,
          price: args.item.Price,
          description: args.item.Description,
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
          phone: args.item.Phone,
          offer: args.item.Offer,
          type: args.item.Type,
          rooms: args.item.Rooms,
          floor: args.item.Floor,
          dir: args.item.Dir,
          price: args.item.Price,
          description: args.item.Description,
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
