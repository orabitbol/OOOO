import React, { useState } from "react";
import { IActionPanel } from "../../model/global";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CreateUserModal from "../createUserModal/CreateUserModal";
import "./actionPanel.scss";

const ActionPanel: React.FC<IActionPanel> = ({
  searchQuery,
  setSearchQuery,
  selectedStatus,
  setSelectedStatus,
  statusOptions,
}) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const openCreateModal = () => setIsCreateModalOpen(true);
  const closeCreateModal = () => setIsCreateModalOpen(false);

  return (
    <div className="action-panel-component">
      <div className="container">
        <Button
          variant="contained"
          color="primary"
          onClick={openCreateModal}
          className="create-button"
        >
          Create
          <span className="icon-plus">+</span>
        </Button>

        <div className="search-filter-group">
          <TextField
            variant="outlined"
            placeholder="Type to search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
            className="search"
          />
          <span className="divider"></span>
          <FormControl variant="outlined" className="select-status">
            <Select
              displayEmpty
              value={selectedStatus || ""}
              onChange={(e) => setSelectedStatus(e.target.value as string)}
              className="status-select"
              inputProps={{ "aria-label": "Filter by status" }}
              renderValue={(selected) =>
                selected ? (
                  selected
                ) : (
                  <span className="label-status">Filter by status</span>
                )
              }
            >
              {selectedStatus && (
                <MenuItem value="">
                  <span>Clear</span>
                </MenuItem>
              )}
              {statusOptions.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

      {isCreateModalOpen && (
        <CreateUserModal
          statusOptions={statusOptions}
          closeModal={closeCreateModal}
        />
      )}
    </div>
  );
};

export default ActionPanel;
