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

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        //this.submitHandler = this.submitHandler.bind(this);
        this.state = {
          inputField: ''
        };
    }

    handleChange(event) {
        this.setState({
            inputField: event.target.value
        }, ()=>{this.props.handlerFromParant(this.state.inputField)});
        console.log("handleChange child == " + event.target.value);
        //this.props.handlerFromParant(this.state.inputField);
    }

    // handleChange(event) {
    //     this.setState((prevState,props)=>{
    //         return ({inputField : event.target.value});
    //     }, ()=>{this.props.handlerFromParant(this.state.inputField)});
    //     console.log("handleChange child == " + event.target.value);
    // }

   
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <Dialog onClose={this.props.handleClose} aria-labelledby="customized-dialog-title" open={this.props.open}>
                        <DialogTitle id="customized-dialog-title" onClose={this.props.handleClose}>
                            Modal title
                        </DialogTitle>
                        <DialogContent dividers>
                            <input type="text" value={this.state.inputField}     onChange={this.handleChange} />
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
                            <Button autoFocus onClick={this.props.handleClose} color="primary">
                                Save changes
                            </Button>
                        </DialogActions>
                    </Dialog>
                </form>
          </div>
        );
    }
}

DialogExample.defaultProps = {  
    name: "props"  
 } 

export default DialogExample;