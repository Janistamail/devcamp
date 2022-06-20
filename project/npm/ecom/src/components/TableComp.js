import "antd/dist/antd.css";
import "../App.css";
import { Table, Tag, Space } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { create, edit, del } from "../slice/productSlice";

const TableComp = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const state = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const columns = [
    {
      title: "Photo",
      dataIndex: "photo",
      key: "photo",
      align: "center",
      render: (photo) => {
        // console.log(photo);
        return (
          <img src={`http://localhost:3000/static/upload-files/${photo}`}></img>
        );
      },
    },
    {
      title: "Product_Name",
      //   dataIndex: "product_name",
      key: "product_name",
      align: "center",
      render: (x) => <p>{x.product_name}</p>,
    },
    {
      title: "Stock_Left",
      dataIndex: "stock_left",
      align: "center",
      key: "Stock_Left",
    },
    {
      title: "Category",
      //   dataIndex: "category",
      align: "center",
      key: "category",
      render: (record) => (
        //  console.log(record),
        // console.log(_);

        <Space size="middle">
          <p>{record.category}</p>
        </Space>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          {/* <a>Invite {record.name}</a> */}
          <button
            onClick={() =>
              navigate(`/update/${record.id}`, { data: record.id })
            }
          >
            edit
          </button>
          <button onClick={() => dispatch(del(record))}>Delete</button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    // console.log(state);
  }, []);

  //   console.log(state.product[0]);
  return (
    <>
      <Table align="center" columns={columns} dataSource={state.product} />
      <div className="centerButton">
        <button
          onClick={() => {
            navigate("/create");
          }}
        >
          Create
        </button>
      </div>
    </>
  );
};
export default TableComp;
