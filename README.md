# OX Employee Management System

This project is a web-based Employee Management System designed to manage and track employee statuses. It features a responsive UI for listing, searching, filtering, and managing employee statuses, with functionality to add new employees.

## Project Structure

The project is organized into separate components to keep the code modular and manageable:

- **App**: The main entry point that renders the `Employees` component.
- **Employees**: Handles the primary logic for fetching, filtering, and displaying employees, as well as managing search and status filters.
- **EmployeeCard**: Displays individual employee details with image, name, and status dropdown.
- **ActionPanel**: Provides controls for search and filtering, and includes a button to open a modal for creating new employees.
- **CreateUserModal**: A modal form that allows users to add a new employee, with validation for specific input requirements.
- **Header**: Contains the page title and a logout button.

## Key Features

- **Fetch and Display Employees**: Fetches employee data from a backend service and displays it in individual cards.
- **Search and Filter**: Provides search functionality and the ability to filter employees by status.
- **Status Update**: Allows the modification of each employee’s status with predefined options.

## Requirements

- **Node.js** (version 14 or higher)
- **npm** or **yarn** package manager

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/orabitbol/OX.git
   cd OX
   ```

2. **Install Dependencies Backend**:

   ```cd server
   npm install ->  npm start
   ```

   
3. **Install and Start the Application**:

   ```cd client
   npm install -> npm run dev
   ```

4. **Open the Application**:
   Navigate to `http://localhost:5173/` in your browser.
