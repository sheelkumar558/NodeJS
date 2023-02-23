import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField } from "@material-ui/core";

export default function TaskDialog({
  open,
  handleClose,
  onChange,
  data,
  handleformSubmit,
}) {
  const { id, title, completed } = data;

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Create new Task</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              id="id"
              value={id}
              onChange={(e) => {
                onChange(e);
              }}
              placeholder="ID"
              label="ID"
              // variant="outlined"
              fullWidth
              margin="dense"
            />
            <TextField
              id="title"
              value={title}
              onChange={(e) => {
                onChange(e);
              }}
              placeholder="title"
              label="Title"
              // variant="outlined"
              fullWidth
              margin="dense"
            />
            <TextField
              id="completed"
              value={completed}
              onChange={(e) => {
                onChange(e);
              }}
              placeholder="Status"
              label="Completed"
              // variant="outlined"
              fullWidth
              margin="dense"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => handleformSubmit()}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
