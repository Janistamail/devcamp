import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import "antd/dist/antd.css";
import "./index.css";

export default function App() {
  const columns = [
    {
      title: "Course",
      dataIndex: "course",
      key: "course",
    },
    {
      title: "Instructor",
      dataIndex: "teacher",
      key: "teacher",
    },
    // {
    //   title: "Avatar",
    //   dataIndex: "avatar",
    //   //  key: 'avatar',
    //   render: (t, r) => <img src={"/" + r.avatar} />,
    // },
  ];
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("/users");
      console.log(data);

      const json = data.data.users;
      //console.log(json);
      setData(json);
    };
    fetchData();
    // console.log("fetch data", fetchData());
  }, []);

  // const fetchData = (callback) => {
  //   const data = axios.get("/users");
  //   console.log(data);

  //   const json = data.data.users;
  //   //console.log(json);
  //   callback(json);
  // };

  // fetchData(setData);

  return (
    <div>
      <Table dataSource={data} columns={columns} pagination={false} />
    </div>
  );
}
