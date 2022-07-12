import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProfileComp = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const name = location.state;

  const [cart, setCart] = useState([]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      axios
        .get("/api/profile", { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          setCart(res.data);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            localStorage.removeItem("token");
            navigate("/");
          }
        });
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <h2>My profile page</h2>
      <h3>{name && name}</h3>

      <h3>My shopping cart items</h3>
      <ul>{cart && cart.map((c) => <li>{c.item}</li>)}</ul>
      <button onClick={logout}>logout</button>
    </>
  );
};

export default ProfileComp;
