import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleCancel = () => {
        this.setState({ open: false });
    };

    handleSend = () => {
        console.log('Thank you');
        this.setState({ open: false });
        //need to set state open to true for the DialogBox in DialogBox.js
    };

    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    Send CV
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleSend}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Please fill up your informations</DialogTitle>
                    <DialogContent>
                    {/* <DialogContentText>
                            We may put some text here if we want
                        </DialogContentText> */}
                        <TextField
                            autoFocus
                            margin="dense"
                            id="firstName"
                            label="First name"
                            type="text"
                            fullWidth
                            required
                        />
                        <TextField
                            margin="dense"
                            id="lastName"
                            label="Last name"
                            type="text"
                            fullWidth
                            required
                        />
                        <TextField
                            margin="dense"
                            id="tel"
                            label="Phone number"
                            type="text"
                            fullWidth
                            required
                        />
                        <TextField
                            margin="dense"
                            id="mail"
                            label="Email Address"
                            type="text"
                            fullWidth
                            required
                        />
                        <TextField
                            margin="dense"
                            id="cv"
                            label="Upload CV"
                            type="file"
                            fullWidth
                            required
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCancel} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSend} color="primary">
                            Send
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}