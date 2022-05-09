import { Form, Select } from "antd";
import React from "react";

const SelectComp = () => {
  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const customValidation = (rule, value) => {
    return value ? Promise.resolve() : Promise.reject(new Error("Error"));
  };
  return (
    <Form.Item
      label="Province"
      name="province"
      initialValue="Bangkok"
      rules={[
        {
          required: true,
          message: "Please input your Province!",
          validator: customValidation,
        },
      ]}
    >
      <Select
        // defaultValue="Bangkok"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="Bangkok">Bangkok</Option>
        <Option value="Samutprakarn">Samutprakarn</Option>
        <Option value="Ranong">Ranong</Option>
        <Option value="Rayong">Rayong</Option>
        <Option value="Nonthaburi">Nonthaburi</Option>
        {/* <Option value="disabled" disabled> */}
        Disabled
      </Select>
    </Form.Item>
  );
};

export default SelectComp;
