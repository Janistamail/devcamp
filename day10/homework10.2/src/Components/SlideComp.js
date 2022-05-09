import React from "react";
import { Form, Slider } from "antd";

const SlideComp = () => {
  const marks = {
    0: "0°C",
    26: "26°C",
    37: "37°C",
    100: {
      style: {
        color: "#f50",
      },
      label: <strong>100°C</strong>,
    },
  };
  const customValidation = (rule, value) => {
    console.log(value);
    return value ? Promise.resolve() : Promise.reject(new Error("Error"));
  };

  return (
    <Form.Item
      name="Degree"
      label="degree"
      rules={[
        {
          required: true,

          validator: customValidation,
        },
      ]}
    >
      <Slider marks={marks} step={10} defaultValue={37} />
    </Form.Item>
  );
};

export default SlideComp;
