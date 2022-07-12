import React from "react";
import "antd/dist/antd.css";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const LoginComp = () => {
  let navigate = useNavigate();
  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      const result = await axios.post("/api/auth", {
        username: values.username,
        password: values.password,
      });
      console.log(result);
      localStorage.setItem("token", result.data.token);
      navigate("/profile", { state: values.username });
    } catch (e) {
      console.log(e);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
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
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginComp;
