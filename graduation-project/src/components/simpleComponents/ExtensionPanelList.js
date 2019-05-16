import React, { Component } from "react";
import ExtensionPanel from "../simpleComponents/ExtensionPanel";

export class ExtensionPanelList extends Component {
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
    data: []
  };

  render() {
    return this.state.data.map(job => {
      return (
        <ExtensionPanel
          key={job.ID}
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

export default ExtensionPanelList;
