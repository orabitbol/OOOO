import React from "react";

import "./app.scss";
import Employees from "./component/employees/Employees";

const App: React.FC = () => {
  return (
    <div className="app">
      <Employees />
    </div>
  );
};

export default App;
