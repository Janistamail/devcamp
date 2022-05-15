import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { useContext } from "react";
import { ContextData } from "../App";

const Marketing = () => {
  let location = useLocation();
  //   console.log(location);
  let data = useContext(ContextData);
  let navigate = useNavigate();

  const onClickFunc = (e, x) => {
    e.preventDefault();
    let position = data.findIndex((y) => y.firstname === x);
    let inf = data[position];

    navigate("/employeeList/employeeDetail", { state: inf });
  };

  return (
    <ul>
      {location.state.employeeName.map((x) => {
        return (
          <li>
            {x} : {location.state.department}{" "}
            <Button onClick={(e) => onClickFunc(e, x)}>Detail</Button>
          </li>
        );
      })}
    </ul>
  );
};
export default Marketing;
