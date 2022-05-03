import "./FormComponent.css";
import { useState } from "react";

const FormComponent = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRePassword, setErrorRePassword] = useState("");

  const [userNameColor, setUsernameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [rePasswordColor, setRePasswordColor] = useState("");

  const validateForm = (e) => {
    e.preventDefault(); //ให้ค้างข้อมูลไว้่ไม่ reset ค่า
    if (username.length > 8) {
      setErrorUsername("");
      setUsernameColor("green");
    } else {
      setErrorUsername("กรุณาป้อนชื่อผู้ใช้มากกว่า 8 ตัวอักษร");
      setUsernameColor("red");
    }

    if (email.includes("@")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("รูปแบบอีเมลไม่ถูกต้อง");
      setEmailColor("red");
    }

    if (password.length > 8) {
      setPassword("");
      setPasswordColor("green");
    } else {
      setPassword("รหัสผ่านต้องมีจำนวน 8 ตัวอักษร");
      setPasswordColor("red");
    }

    if (repassword != "" && repassword === password) {
      setRepassword("");
      setRePasswordColor("green");
    } else {
      setRepassword("รหัสผ่านไม่ตรงกัน");
      setRePasswordColor("red");
    }
  };
  return (
    <div className="container">
      <h2>แบบฟอร์มลงทะเบียน</h2>
      <form className="form" onSubmit={validateForm}>
        <div className="form-control">
          <label>ชื่อผู้ใช้</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            style={{ borderColor: userNameColor }}
          ></input>
          <small style={{ color: userNameColor }}>{errorUsername}</small>
        </div>
        <div className="form-control">
          <label>อีเมล</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: emailColor }}
          ></input>
          <small style={{ color: emailColor }}>{errorEmail}</small>
        </div>
        <div className="form-control">
          <label>รหัสผ่าน</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderColor: passwordColor }}
          ></input>
          <small style={{ color: passwordColor }}>{errorPassword}</small>
        </div>
        <div className="form-control">
          <label>ยืนยันรหัสผ่าน</label>
          <input
            type="text"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
            style={{ borderColor: rePasswordColor }}
          ></input>
          <small style={{ color: rePasswordColor }}>{errorRePassword}</small>
        </div>
        <button type="submit">ลงทะเบียน</button>
      </form>
    </div>
  );
};

export default FormComponent;
