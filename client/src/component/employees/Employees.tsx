import React, { useEffect, useMemo, useState } from "react";
import Header from "../header/Header";
import { IEmployee } from "../../model/global";
import { fetchEmployees, updateEmployeeStatus } from "../../service/api";
import EmployeeCard from "../employeeCard/EmployeeCard";
import ActionPanel from "../actionPanel/ActionPanel";
import "./employees.scss";

const DEFAULT_STATUS_OPTIONS: string[] = [
  "Working",
  "On Vacation",
  "Business Trip",
  "LunchTime",
];

const Employees: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const [statusOptions, setStatusOptions] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const data = await fetchEmployees();
      setEmployees(data);
      setStatusOptions(DEFAULT_STATUS_OPTIONS);
      setErrorMessage(null); 
    } catch (error) {
      console.error("Failed to fetch employees:", error);
      setErrorMessage("The server is down.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleStatusChange = async (id: number, newStatus: string) => {
    try {
      const response = await updateEmployeeStatus(id, newStatus);
      setEmployees(response);
    } catch (error) {
      console.error("Failed to update status:", error);
      setErrorMessage("Failed to update status.");
    }
  };

  const filteredEmployees = useMemo(() => {
    return employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedStatus ? employee.status === selectedStatus : true)
    );
  }, [employees, searchQuery, selectedStatus]);

  return (
    <>
      <Header />
      <div className="employee-container">
        <div className="wrapper-action-panel">
          <ActionPanel
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
            statusOptions={statusOptions}
          />
        </div>
        {errorMessage ? (
          <div className="error-message">{errorMessage}</div>
        ) : (
          <div className="wrapper-employee-card">
            {filteredEmployees.map((employee) => (
              <EmployeeCard
                key={employee.id}
                employee={employee}
                onStatusChange={handleStatusChange}
                statusOptions={statusOptions}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Employees;
