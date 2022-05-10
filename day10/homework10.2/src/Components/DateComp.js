import moment from "moment";
import React from "react";

import { Form, DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

const DateComp = () => {
  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().subtract("1", "day");
  }

  const customValidation = (rule, value) => {
    return value ? Promise.resolve() : Promise.reject(new Error("Error"));
  };

  function onChange(date, dateString) {
    // Form.set;
    console.log(dateString);
  }
  return (
    <Form.Item
      label="Date"
      name="date"
      rules={[
        {
          required: true,
          message: "Please select the date!",
          validator: customValidation,
        },
      ]}
    >
      <RangePicker
        onChange={onChange}
        disabledDate={disabledDate}
        showTime={{
          hideDisabledOptions: true,
        }}
        format="YYYY-MM-DD"
      />
    </Form.Item>
  );
};

export default DateComp;
