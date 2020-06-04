import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';


import Typography from '@material-ui/core/Typography';


class DialogExample extends Component {
    constructor(){
        super();
        this.state = {
            open : false

        }
    }

    handleClose = () => {
        this.props.openFlag = false;
    };

    render() {
        return (
            <div>
           
                <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.props.openFlag}>
                    <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                        Modal title
                    </DialogTitle>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        </Typography>
                        <Typography gutterBottom>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                        lacus vel augue laoreet rutrum faucibus dolor auctor.
                        </Typography>
                        <Typography gutterBottom>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                        auctor fringilla.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                            <Button autoFocus onClick={this.handleClose} color="primary">
                        Save changes
                        </Button>
                    </DialogActions>
                </Dialog>
          </div>
        );
    }
}

DialogExample.defaultProps = {  
    name: "Props"  
 } 

export default DialogExample;