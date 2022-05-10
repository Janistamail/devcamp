import { Form, Input, Button, Checkbox, Modal } from "antd";
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
import Optional from "./Optional";

const FormComp = () => {
  const [data, setData] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("v", values);
    showModal();
    setData(values);
  };

  const onFinishFailed = (errorInfo) => {
    // console.log(errorInfo.values);
    console.log(data);
    // setData(errorInfo.values);
    // showModal();
  };
  const customValidation = (rule, value) => {
    console.log(value);
    return value ? Promise.resolve() : Promise.reject(new Error("Error"));
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
      <Optional />

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
        rules={[
          {
            validator: customValidation,
          },
        ]}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
        rules={[
          {
            required: true,
            // validator: customValidation,
          },
        ]}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>

        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {/* <p>{JSON.stringify(data)}</p> */}
          <p>Firstname : {data.firstname}</p>
          <p>Age : {data.age}</p>
          <p>Gender : {data.gender}</p>
          <p>
            Date : {String(data.date && data.date[0]._d)} -{" "}
            {String(data.date && data.date[1]._d)}
          </p>
          <p>Accept : {String(data.Accept)}</p>
          <p>Mention : {data.Mention}</p>
          <p>Rate : {data.Rate}</p>
          <p>Degree : {data.Degree}</p>
          <p>Switch : {data.Switch}</p>
          <p>Province : {data.province}</p>
        </Modal>
      </Form.Item>
    </Form>
  );
};

export default FormComp;
