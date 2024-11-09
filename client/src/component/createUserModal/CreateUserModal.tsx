import React, { useState } from "react";
import { ICreateUserModal } from "../../model/global";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import "./createUserModal.scss";

const CreateUserModal: React.FC<ICreateUserModal> = ({
  closeModal,
  statusOptions,
}) => {
  const [userName, setUserName] = useState("");
  const [status, setStatus] = useState("Working");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[A-Za-z\s]*$/.test(value)) {
      setUserName(value);
      setErrorMessage(""); 
    } else {
      setErrorMessage("Only English alphabetical characters are allowed.");
    }
  };

  return (
    <Dialog
      open={true}
      onClose={closeModal}
      fullWidth
      maxWidth="sm"
      className="create-user-modal-component"
    >
      <DialogTitle className="title">Create New User</DialogTitle>
      <Divider />
      <DialogContent>
        <FormControl fullWidth margin="normal" variant="standard">
          <TextField
            label="User name:"
            value={userName}
            onChange={handleUserNameChange}
            placeholder="Enter user name"
            fullWidth
            variant="standard"
            className="input-name"
            error={!!errorMessage} 
            helperText={errorMessage} 
          />
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="status-select-label">Status</InputLabel>
          <Select
            fullWidth
            value={status}
            onChange={(e) => setStatus(e.target.value as string)}
            label="Status"
          >
            {statusOptions.map((status) => (
              <MenuItem key={status} value={status}>
                <span>{status}</span>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <DialogActions className="position-button">
          <Button
            onClick={closeModal}
            variant="contained"
            color="primary"
            className="create-button"
            disabled={!!errorMessage || !userName.trim()} 
          >
            Create
          </Button>
          <Button
            className="cancel-button"
            onClick={closeModal}
            variant="outlined"
            color="primary"
          >
            Cancel
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default CreateUserModal;
