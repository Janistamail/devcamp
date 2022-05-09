import { Form, Radio } from "antd";
import React from "react";

const RadioComp = () => {
  const [value, setValue] = React.useState("male");

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const customValidation = (rule, value) => {
    return value ? Promise.resolve() : Promise.reject(new Error("Error"));
  };

  return (
    <Form.Item
      label="Gender"
      name="gender"
      rules={[
        {
          required: true,
          message: "Please input your Gender!",
          validator: customValidation,
        },
      ]}
    >
      <Radio.Group onChange={onChange} value={value}>
        <Radio value="male">MALE</Radio>
        <Radio value="female">FEMALE</Radio>
      </Radio.Group>
    </Form.Item>
  );
};

export default RadioComp;
