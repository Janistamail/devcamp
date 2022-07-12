import React from "react";

import { Form, Mentions } from "antd";

const MentionComp = () => {
  const { Option } = Mentions;

  const customValidation = (rule, value) => {
    console.log(value);
    return value ? Promise.resolve() : Promise.reject(new Error("Error"));
  };

  function onChange(value) {
    console.log("Change:", value);
  }

  function onSelect(option) {
    console.log("select", option);
  }

  return (
    <Form.Item
      name="Mention"
      label="mention"
      rules={[
        {
          required: true,

          validator: customValidation,
        },
      ]}
    >
      <Mentions
        style={{ width: "100%" }}
        onChange={onChange}
        onSelect={onSelect}
        defaultValue="aaa"
      >
        <Option value="aaa">aaa</Option>
        <Option value="bbb">bbb</Option>
        <Option value="ccc">ccc</Option>
      </Mentions>
    </Form.Item>
  );
};

export default MentionComp;
