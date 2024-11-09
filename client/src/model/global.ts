export interface IEmployee {
  id: number;
  name: string;
  status: string;
  img: string;
  gif: string;
}
export interface IEmployeeCard {
  employee: IEmployee;
  onStatusChange: (id: number, newStatus: string) => void;
  statusOptions: string[];
}

export interface ICreateUserModal {
  closeModal: () => void;
  statusOptions: string[];
}

export interface IActionPanel {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
  statusOptions: string[];
}
