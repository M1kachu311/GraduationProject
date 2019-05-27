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
      //   name: 'dfsdgf',
      //   description: 'dkjfhaslkdjvasdklfjhalksdjfa skjaaskdlj kajakljvb',
      //   type: 'dfsdf',
      //   location: 'sdfcsf'
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
