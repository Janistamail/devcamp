import { Form, InputNumber } from "antd";

const InputNum = () => {
  const customValidation = (rule, value) => {
    return value ? Promise.resolve() : Promise.reject(new Error("Error"));
  };

  return (
    <Form.Item
      name="age"
      label="Age"
      rules={[
        {
          type: "number",

          validator: customValidation,
        },
      ]}
    >
      <InputNumber min={1} max={99} defaultValue={3} />
    </Form.Item>
  );
};

export default InputNum;
