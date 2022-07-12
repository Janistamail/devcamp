import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import profileSlice, {
  changeAge,
  changeFirstname,
  changeLastname,
} from "../profileSlice";

const ProfileComp = () => {
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const ageRef = useRef();

  const dispatch = useDispatch();
  const state = useSelector((state) => state.profile);

  const onFinish = (values) => {
    // console.log(firstnameRef.current.input.value);
    dispatch(changeFirstname(firstnameRef.current.input.value));
    dispatch(changeLastname(lastnameRef.current.input.value));
    dispatch(changeAge(ageRef.current.input.value));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <p>firstname : {state.firstname}</p>
      <p>lastname : {state.lastname}</p>
      <p>age : {state.age}</p>

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="Firstname" name="firstname">
          <Input ref={firstnameRef} />
        </Form.Item>

        <Form.Item label="Lastname" name="lastname">
          <Input ref={lastnameRef} />
        </Form.Item>

        <Form.Item label="Age" name="age">
          <Input ref={ageRef} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProfileComp;
