import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
    state = {
        open: this.props.open,
    };

    handleClose = () => {
        this.props.handleClose();
    };

    render() {

        return (
            <div>
                <Dialog
                    fullScreen
                    open={this.props.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title">

                    <DialogTitle id="form-dialog-title"> {this.props.dialogTitle} </DialogTitle>

                    <DialogContent> {this.props.dialogContent} </DialogContent>

                    <DialogActions> {this.props.dialogActions} </DialogActions>

                </Dialog>
            </div>
        );
    }
}