import { Table, Space, Button } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextData } from "../App";

function DepartmentList() {
  const data = useContext(ContextData);
  let navigate = useNavigate();
  let data2 = [];

  data.forEach((element) => {
    let ans = data2.findIndex((x) => x.department === element.department);
    if (ans === -1) {
      data2.push({
        department: element.department,
        employeeName: [element.firstname],
      });
    } else {
      data2[ans].employeeName.push(element.firstname);
    }
  });
  const departmentDetail = (e, record) => {
    e.preventDefault();
    console.log(record);
    navigate("/departmentList/departmentDetail", { state: record });
  };
  const columns = [
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
      render: (text) => <p>{text}</p>,
    },

    {
      title: "Detail",
      key: "employeeName",
      render: (text, record) => (
        <Space size="middle">
          <Button
            onClick={(e) => {
              departmentDetail(e, record);
            }}
          >
            Detail
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <h3>Department List</h3>
      <Table columns={columns} dataSource={data2} />
    </>
  );
}

export default DepartmentList;
