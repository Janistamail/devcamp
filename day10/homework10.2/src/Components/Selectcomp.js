import { Form, Select, Input } from "antd";
import React, { useState } from "react";

const SelectComp = () => {
  const { Option } = Select;

  // function handleChange(value) {
  //   console.log(`selected ${value}`);
  // }

  const customValidation = (rule, value) => {
    return value ? Promise.resolve() : Promise.reject(new Error("Error"));
  };

  const onChangeFunc = (e) => {
    if (e === "Abroad") {
      setToAbroad(true);
    } else {
      setToAbroad(false);
    }
    console.log(e);
  };
  const [toAbroad, setToAbroad] = useState(false);

  return (
    <>
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
          onChange={onChangeFunc}
          // defaultValue="Bangkok"
          style={{ width: 120 }}
          // onChange={handleChange}
        >
          <Option value="Bangkok">Bangkok</Option>
          <Option value="Samutprakarn">Samutprakarn</Option>
          <Option value="Ranong">Ranong</Option>
          <Option value="Rayong">Rayong</Option>
          <Option value="Nonthaburi">Nonthaburi</Option>
          <Option value="Abroad">Abroad</Option>
          {/* <Option value="disabled" disabled> */}
          Disabled
        </Select>
      </Form.Item>
      <Form.Item
        name="Others"
        label="others"
        rules={[
          {
            // validator: customValidation,
          },
        ]}

        // initialValue={37}
      >
        <Input disabled={!toAbroad} />
      </Form.Item>
    </>
  );
};

export default SelectComp;
