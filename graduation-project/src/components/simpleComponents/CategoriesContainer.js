import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'

const buttonActionTitle = 'קישור ללוח '

const mainStyle = {
    display: 'flex',
    width: "90%",
    margin: "20px auto",
    borderRadius: "5px",
    boxShadow:
      "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"
}

const contentStyle = {
    display: 'flex'
}

const imgStyle = {
    width: '100px',
    height: '100px',
    margin: '10px'
}

const detailsStyle = {
    display: 'flex',
    flexDirection: 'column',
}

const titleStyle = {
    width: '200px',
    textAlign: 'center'
}

const titleDisplay = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#CADB30',
    width: '30%'
}

const textStyle = {
    padding: '10px'
}

const JHDetailsStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}

const innerJHDetailsStyle = {
    display: 'flex',
    justifyContent: 'flex-start'
}

const bold = {
    color: "#0D84A3"
}

const sendButtonStyle = {
    background: '#0D84A3',
    color: '#fff',
    border: 'none',
    height: '35px',
    cursor: 'pointer',
    margin: '40px'
}

export class CategoriesContainer extends Component {

    componentDidMount() {
        console.log(this.props)
    }
    render() {
    return (
        <div style={mainStyle}>
            <div style={titleDisplay}>
                <Typography style={titleStyle} variant="h5" component="h3">
                    {this.props.title}
                </Typography>
            </div>
            <div style={contentStyle}>
                <div style={detailsStyle}>
                    <Typography style={textStyle} component="p">
                        {this.props.content}
                    </Typography>
                    <Divider variant="middle" />
                    <div style={JHDetailsStyle}>
                        <div style={innerJHDetailsStyle}> 
                        <img style={imgStyle} src={this.props.JHImage}/>
                            <div>
                                <Typography style={textStyle} component="p">
                                   <b style={bold}>שם:</b> {this.props.JHName}
                                </Typography>
                                <Typography style={textStyle} component="p">
                                    <b style={bold}>תפקיד:</b> {this.props.JHTitle}
                                </Typography>
                            </div>
                            <div>
                                <Typography style={textStyle} component="p">
                                    <b style={bold}>מס׳ טלפון:</b> {this.props.JHPhone}
                                </Typography>
                                <Typography style={textStyle} component="p">
                                    <b style={bold}>מייל:</b> {this.props.JHEmail}
                                </Typography>
                            </div>
                        </div>
                        <Button 
                            onClick={this.handleClose} 
                            style={sendButtonStyle}
                        >
                        {`${buttonActionTitle} ${this.props.title}`}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default CategoriesContainer
