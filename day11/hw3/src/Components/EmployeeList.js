import { useContext } from "react";
import { ContextData } from "../App";
import { Table, Space, Button } from "antd";
import { useNavigate } from "react-router-dom";

const { Column } = Table;

function EmployeeList() {
  let navigate = useNavigate();
  const employeeData = (e, record) => {
    e.preventDefault();
    // console.log(record);
    navigate("/employeeList/employeeDetail", { state: record });
  };
  let data = useContext(ContextData);
  console.log(data);
  return (
    <div>
      <h3>EmployeeList</h3>

      <Table dataSource={data}>
        <Column title="First Name" dataIndex="firstname" key="firstname" />
        <Column title="Last Name" dataIndex="lastname" key="lastname" />
        <Column title="Position" dataIndex="position" key="position" />
        <Column title="Department" dataIndex="department" key="department" />
        <Column
          title="Detail"
          key="detail"
          render={(text, record) => (
            <Space size="middle">
              <Button onClick={(e) => employeeData(e, record)}>Detail </Button>
            </Space>
          )}
        />
      </Table>
    </div>
  );
}

export default EmployeeList;
