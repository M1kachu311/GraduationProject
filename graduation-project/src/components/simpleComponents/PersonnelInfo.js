import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'

import AvatarComp from './AvatarComp'

const titlesStyle = {
    display: 'flex',
    flexDirection: 'column'
}

const paperStyle = {
    display: 'flex'
}

const titles = {
    name: 'שם: ',
    title: 'תפקיד: ',
    phone: 'טלפון: ',
    email: 'דוא״ל: '
}

export class PersonnelInfo extends Component {

    state = {data: [
        {
            Name: "Micael Jorge",
            Title: "Web master",
            Description: "Web master",
            Image: "https://avatars0.githubusercontent.com/u/17184992?s=460&v=4",
            Email: "micael@mail.com",
            Phone: "0403254873",
            ID: 1 
        }
    ]}

    render() {

        return (
            this.state.data.map((person) => {
                return (
                    <div key={person.ID}>
                        <Paper elevation={1} style={paperStyle}>
                        <AvatarComp img={person.Image}/>
                        <div style={titlesStyle}>
                            <p>{titles.name}{person.Name}</p>
                            <p>{titles.title}{person.Title}</p>
                        </div>
                        <div style={titlesStyle}>
                            <p>{titles.phone}{person.Phone}</p>
                            <p>{titles.email}{person.Email}</p>
                        </div>
                        </Paper>
                    </div>
                )
            })
        )
    }
}

PersonnelInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (PersonnelInfo);
