import { Form, Input, Button, Checkbox } from "antd";
import { useState } from "react";
import InputNum from "./InputNumber";
import RadioComp from "./RadioComp";
import SelectComp from "./Selectcomp";
import DateComp from "./DateComp";
import CheckBoxComp from "./CheckBoxComp";
import MentionComp from "./MentionComp";
import RateComp from "./RateComp";
import SlideComp from "./SlideComp";
import SwitchComp from "./SwitchComp";

const FormComp = () => {
  const onFinish = (values) => {
    // console.log("Success:", values);
    setData(values);
    console.log(data);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [data, setData] = useState("");
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
        label="Firstname"
        name="firstname"
        rules={[
          {
            required: true,
            message: "Please input your username!",

            max: 5,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <InputNum />
      <RadioComp />
      <SelectComp />
      <DateComp />
      <CheckBoxComp />
      <MentionComp />
      <RateComp />
      <SlideComp />
      <SwitchComp />

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
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
