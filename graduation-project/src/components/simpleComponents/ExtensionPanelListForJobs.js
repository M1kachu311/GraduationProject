import React, { Component } from "react";
import ExtensionPanelForJobs from "./ExtensionPanelForJobs";

export class ExtensionPanelListForJobs extends Component {
  componentDidMount() {
    fetch("http://127.0.0.1:3002/jobs")
      .then(function(response) {
        return response.json();
      })
      .then(myJson => {
        this.setState({ data: myJson });
      });
  }
  state = {
    data: [
      // {
      //   ID: 1,
      //   Date: '01/01/2019',
      //   Name: 'Developer',
      //   Description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
      //   Type: 'Full time',
      //   Location: 'Yeruham'
      // }
    ]
  };

  render() {
    return this.state.data.map(job => {
      return (
        <ExtensionPanelForJobs
          key={job.ID}
          id={job.ID}
          date={job.Date.substring(0, 10)}
          name={job.Name}
          description={job.Description}
          type={job.Type}
          location={job.Location}
        />
      );
    });
  }
}

export default ExtensionPanelListForJobs;
