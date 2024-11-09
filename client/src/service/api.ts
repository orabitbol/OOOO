const API_BASE_URL = "http://localhost:3001";

export const fetchEmployees = async () => {
  const response = await fetch(`${API_BASE_URL}/users`);
  if (!response.ok) {
    throw new Error(`Error fetching employees: ${response.statusText}`);
  }
  return await response.json();
};

export const updateEmployeeStatus = async (userId: number, status: string) => {
  const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });
  if (!response.ok) {
    throw new Error(`Error updating employee status: ${response.statusText}`);
  }
  return await response.json();
};
