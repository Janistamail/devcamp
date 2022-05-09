import React from "react";

import { Form, Checkbox } from "antd";

const CheckBoxComp = () => {
  const customValidation = (rule, value) => {
    console.log(value);
    return value ? Promise.resolve() : Promise.reject(new Error("Error"));
  };

  function onChange(e) {
    // console.log(e.target.checked);
    // console.log(`checked = ${e.target.checked}`);
  }
  return (
    <Form.Item
      name="Accept"
      label="accept"
      valuePropName="checked"
      rules={[
        {
          validator: customValidation,
        },
      ]}
    >
      <Checkbox>Accept</Checkbox>
    </Form.Item>
  );
};

export default CheckBoxComp;
