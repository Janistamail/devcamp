import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfileComp = () => {
  let navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      axios
        .get("/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`, // JWT in Authorization header
          },
        })
        .then((res) => {
          setCart(res.data); //
        })
        .catch((err) => {
          if (err.response.status === 401) {
            axios
              .get("/api/profile", {
                headers: {
                  Authorization: `Bearer ${token}`, // JWT in Authorization header
                },
              })
              .then((res) => {
                console.log(res);
              });
            // token expired - remove and redirect to login
            localStorage.removeItem("token");
            // navigate("/");
          }
        });
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <h2>My profile page</h2>
      <h3>My shopping cart items</h3>
      <ul>{cart && cart.map((c) => <li>{c.item}</li>)}</ul>
    </>
  );
};

export default ProfileComp;
