import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Form, Input, Button } from "antd";

const axios = require("axios");

const FormComp = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
    const myFunc = async () => {
      await axios.post("http://localhost:3000/users/add", {
        id_card: values.id_card,
        firstname: values.firstname,
        lastname: values.lastname,
        phone: values.phone,
        email: values.email,
        address: values.address,
        tumbol: values.tumbol,
        ampher: values.ampher,
        province: values.province,
        postal_number: values.postal_number,
      });

      await axios.post("http://localhost:3000/profile/add", {
        id_card: values.id_card,
        company_name: values.company_name,
        company_address: values.company_address,
        duration: values.duration,
        position: values.position,
      });
      document.getElementById("resetForm").reset();
    };
    myFunc();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      id="resetForm"
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
        label="id_card"
        name="id_card"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Firstname"
        name="firstname"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Lastname"
        name="lastname"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Address"
        name="address"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Tumbol"
        name="tumbol"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Ampher"
        name="ampher"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Province"
        name="province"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="postal_number"
        name="postal_number"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="company_name"
        name="company_name"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="company_address"
        name="company_address"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Duration"
        name="duration"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Position"
        name="position"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input />
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

export default FormComp;
