import React, { useState } from "react";
import { IEmployeeCard } from "../../model/global";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import "./employeeCard.scss";

const EmployeeCard: React.FC<IEmployeeCard> = ({
  employee,
  onStatusChange,
  statusOptions,
}) => {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <Card className="employee-card">
      <CardMedia
        component="img"
        height="140"
        image={hovered ? employee.gif : employee.img}
        alt={employee.name}
        className="employee-avatar"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <CardContent className="card-content">
        <Typography className="card-name">{employee.name}</Typography>
        <FormControl variant="standard" fullWidth>
          <Select
            value={employee.status}
            onChange={(e) =>
              onStatusChange(employee.id, e.target.value as string)
            }
            label="Status"
          >
            {statusOptions.map((status) => (
              <MenuItem key={status} value={status}>
                <span className="status-dot" data-status={status}></span>
                {status}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;
