import "antd/dist/antd.css";
import { Form, Input, Button, Upload } from "antd";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { edit } from "../productSlice";
import ImgCrop from "antd-img-crop";
import { useState } from "react";

const EditComp = () => {
  let navigate = useNavigate();
  let params = useParams();
  let location = useLocation();
  let dispatch = useDispatch();
  let state = useSelector((state) => state.productSlice);

  // const [fileList, setFileList] = useState([
  //   {
  //     uid: "-1",
  //     name: "image.png",
  //     status: "done",
  //     url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  //   },
  // ]);

  // const myOnChange = ({ fileList: newFileList }) => {
  //   setFileList(newFileList);
  // };

  // const onPreview = async (file) => {
  //   let src = file.url;

  //   if (!src) {
  //     src = await new Promise((resolve) => {
  //       const reader = new FileReader();
  //       reader.readAsDataURL(file.originFileObj);

  //       reader.onload = () => resolve(reader.result);
  //     });
  //   }

  //   const image = new Image();
  //   image.src = src;
  //   const imgWindow = window.open(src);
  //   imgWindow?.document.write(image.outerHTML);
  // };

  const onFinish = (values) => {
    console.log("Success:", values);
    console.log("iddd", params.id);
    // console.log("checksend", location);
    dispatch(
      edit({
        key: params.id,
        product_name: values.product_name,
        stock_left: values.stock_left,
        category: values.category,
      })
    );

    navigate("/");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Product Name"
          name="product_name"
          rules={[
            {
              required: true,
              message: "Please input your product name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Stock Left"
          name="stock_left"
          rules={[
            {
              required: true,
              message: "Please input your stock left!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Category" name="category">
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
      {/* <ImgCrop rotate>
        <Upload
          action="http://localhost:3000/users/upload"
          listType="picture-card"
          fileList={fileList}
          onChange={myOnChange}
          onPreview={onPreview}
        >
          {fileList.length < 5 && "+ Upload"}
        </Upload>
      </ImgCrop> */}
    </>
  );
};

export default EditComp;
