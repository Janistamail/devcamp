import { Form, InputNumber } from "antd";

const InputNum = () => {
  const customValidation = (rule, value) => {
    if (value < 18) return Promise.reject(new Error("อายุน้อยเกินไป"));
    else if (value > 60) return Promise.reject(new Error("อายุมากเกินไป"));
    else {
      return Promise.resolve();
    }
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
