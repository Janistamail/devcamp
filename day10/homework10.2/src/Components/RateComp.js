import React from "react";
import { Form, Rate } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";

const RateComp = () => {
  const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };

  const customValidation = (rule, value) => {
    return value ? Promise.resolve() : Promise.reject(new Error("Error"));
  };

  return (
    <Form.Item
      name="Rate"
      label="rate"
      rules={[
        {
          required: true,
          validator: customValidation,
        },
      ]}
      initialValue={2}
    >
      <Rate
        // defaultValue={3}
        character={({ index }) => customIcons[index + 1]}
      />
    </Form.Item>
  );
};

export default RateComp;
