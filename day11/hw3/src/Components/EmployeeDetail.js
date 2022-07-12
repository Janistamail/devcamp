import { useLocation } from "react-router-dom";

const EmployeeDetail = () => {
  const location = useLocation().state;
  console.log(location);
  return (
    <ul style={{ color: "black" }}>
      <li>ID : {location.ID}</li>
      <li>Age : {location.age}</li>
      <li>Department : {location.department}</li>
      <li>Firstname : {location.firstname}</li>
      <li>Gender : {location.gender}</li>
      <li>Lastname : {location.lastname}</li>
      <li>Phone : {location.phone}</li>
      <li>Position : {location.position}</li>
      <li>Salary : {location.salary}</li>
    </ul>
  );
};

export default EmployeeDetail;
