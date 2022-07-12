import "./App.css";
import "antd/dist/antd.css";
import { createContext } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutComp from "./Components/Layout";
import Home from "./Components/Home";
import EmployeeList from "./Components/EmployeeList";
import DepartmentList from "./Components/DepartmentList";
import EmployeeDetail from "./Components/EmployeeDetail";
import NoMatching from "./Components/NoMatching";
import Marketing from "./Components/Marketing";

export const ContextData = createContext();

function App() {
  const employees = [
    {
      ID: "0001",
      firstname: "Robert",
      lastname: "Kyle",
      age: "45",
      gender: "Male",
      phone: "001xxxxxxx",
      position: "Margeting Position",
      department: "Marketing",
      salary: "66000",
    },
    {
      ID: "0002",
      firstname: "Dalia",
      lastname: "Macpie",
      age: "42",
      gender: "Female",
      phone: "002xxxxxxx",
      position: "Sale Position",
      department: "Sale",
      salary: "44000",
    },
    {
      ID: "0003",
      firstname: "Jenifer",
      lastname: "Lamp",
      age: "41",
      gender: "Female",
      phone: "003xxxxxxx",
      position: "Account Position",
      department: "Account",
      salary: "71000",
    },
    {
      ID: "0004",
      firstname: "Fathom",
      lastname: "Merry",
      age: "35",
      gender: "Female",
      phone: "004xxxxxxx",
      position: "Marketing Position",
      department: "Marketing",
      salary: "43000",
    },
    {
      ID: "0005",
      firstname: "Dadaria",
      lastname: "Munchy",
      age: "38",
      gender: "Female",
      phone: "005xxxxxxx",
      position: "Sale Position",
      department: "Sale",
      salary: "64000",
    },
    {
      ID: "0006",
      firstname: "Conrand",
      lastname: "Blue",
      age: "35",
      gender: "Female",
      phone: "006xxxxxxx",
      position: "Account Position",
      department: "Account",
      salary: "38000",
    },
    {
      ID: "0007",
      firstname: "Ryla",
      lastname: "Arkham",
      age: "39",
      gender: "Female",
      phone: "007xxxxxxx",
      position: "Marketing Position",
      department: "Marketing",
      salary: "50000",
    },
  ];
  return (
    <ContextData.Provider value={employees}>
      <Routes>
        <Route path="/" element={<LayoutComp />}>
          <Route index element={<Home />} />
          <Route path="employeeList" element={<EmployeeList />} />
          <Route
            path="employeeList/employeeDetail"
            element={<EmployeeDetail />}
          />
          <Route path="departmentList" element={<DepartmentList />} />
          <Route
            path="departmentList/departmentDetail"
            element={<Marketing />}
          />

          <Route path="*" element={<NoMatching />} />
        </Route>
      </Routes>
      <hr />
    </ContextData.Provider>
  );
}

export default App;
