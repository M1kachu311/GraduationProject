import React, { Component } from 'react'
import ExtensionPanel from '../simpleComponents/ExtensionPanel'

export class ExtensionPanelList extends Component {

    state = { data: [{name:'One', id:'one'}, {name:'Two', id:'rwo'}, {name:'Three', id:'three'}] };  

    render() {
    return this.state.data.map(extensionPanel => {
        return (
            <div key={extensionPanel.id}>
                <ExtensionPanel />
                <p>{extensionPanel.name}</p>
            </div>
        )
    })
    }
}

export default ExtensionPanelList
