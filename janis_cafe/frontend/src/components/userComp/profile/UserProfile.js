import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const inf = useSelector((state) => state.authen);
  console.log(inf);
  return (
    <div className="box">
      <div id="cards">
        <img
          src={`${inf.data.line_pic}`}
          style={{ width: 300, height: 300, borderRadius: 400 / 2 }}
        />
        <br />
        <div className="BoxA">
          <h1>USERNAME : {inf.data.line_name} </h1>
          <h1>ROLE : {inf.role}</h1>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
