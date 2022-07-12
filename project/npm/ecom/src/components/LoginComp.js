import "antd/dist/antd.css";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { trueLogin, falseLogin } from "../slice/isLoginSlice";
import UserContext from "../UserContext";

const LoginComp = () => {
  let navigate = useNavigate();
  const { token, setToken } = useContext(UserContext);
  const dispatch = useDispatch();
  let isLoginState = useSelector((state) => state.login);
  const liff = window.liff;

  const [state, setState] = useState({});
  const onFinish = async (values) => {
    console.log("Success:", values);
    let result = await axios.post("/login", values);
    console.log(result);
    if (result.status === 200) {
      setToken(result.data.token);
      console.log("--", token);
      dispatch(trueLogin());
      localStorage.setItem("token", result.data.token);
      // window.location.href = "/table";
      navigate("table");
    }
    // else {

    // }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const loginFunc = async (e) => {
    e.preventDefault();
    await liff.init({ liffId: `1657206848-l1oMZAPx` }).catch((err) => {
      throw err;
    });
    if (liff.isLoggedIn()) {
      let getProfile = await liff.getProfile();
      setState({
        name: getProfile.displayName,
        userLineID: getProfile.userId,
        pictureUrl: getProfile.pictureUrl,
      });
      navigate("table");
    } else {
      liff.login();
    }
  };
  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>LOGIN</h1>
      <div>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 8,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Button type="primary" onClick={(e) => loginFunc(e)}>
        Login With LINE
      </Button>
    </div>
  );
};

export default LoginComp;
