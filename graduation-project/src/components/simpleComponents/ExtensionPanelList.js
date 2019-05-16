import React, { Component } from 'react'
import ExtensionPanel from '../simpleComponents/ExtensionPanel'

export class ExtensionPanelList extends Component {

    state = { 
        data: [
            {
                Date:'01/02/1994', 
                ID:1, Name:'Developper', 
                Description:'Lorem ipsum', 
                Type:'full time job', 
                Location:'Yeruham'
            }
        ] 
    };  

    render() {
    return this.state.data.map(job => {
        return (
                <ExtensionPanel 
                    key={job.ID} 
                    date={job.Date} 
                    name={job.Name} 
                    description={job.Description}
                    type={job.Type}
                    location={job.Location}
                />
        )
    })
    }
}

export default ExtensionPanelList
