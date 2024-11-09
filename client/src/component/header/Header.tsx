import { Button } from "@mui/material";
import "./header.scss";

const Header: React.FC = () => {
  return (
    <div className="header-component">
      <span className="title">Employees</span>
      <Button variant="outlined" color="primary" className="logout-button">
        Log Out
      </Button>
    </div>
  );
};

export default Header;
