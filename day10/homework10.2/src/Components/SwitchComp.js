import React from "react";
import { Form, Switch } from "antd";

const SwitchComp = () => {
  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  const customValidation = (rule, value) => {
    console.log(value);
    return value ? Promise.resolve() : Promise.reject(new Error("Error"));
  };

  return (
    <Form.Item
      name="Switch"
      label="switch"
      rules={[
        {
          required: true,

          validator: customValidation,
        },
      ]}
    >
      <Switch defaultChecked onChange={onChange} />
    </Form.Item>
  );
};

export default SwitchComp;
