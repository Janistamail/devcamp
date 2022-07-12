import React from "react";
import logo1 from "../../image/logop2.gif";
import logo2 from "../../image/eazycafe.gif";
import icon_home from "../../image/icon_home.png";
import icon_cart from "../../image/icon_cart.png";
import icon_profile from "../../image/icon_profile.png";
import icon_notify from "../../image/icon_notify.png";
import { Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import Context from "../../../AuthenContext";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { initAllCategory, setCurrentCategory } from "../categorySlice";
import axios from "axios";

const Navbar = () => {
  let dispatch = useDispatch();
  let state = useSelector((state) => state.category);

  useEffect(() => {
    const fetchAllCategory = async () => {
      let result = await axios.get("users/allCategory");
      // console.log(result);
      if (result.status === 200) {
        dispatch(initAllCategory(result.data));
      }
    };
    fetchAllCategory();
  }, []);

  let navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "0px",
          left: "0px",
          zIndex: 100,
          margin: "0% auto",
          width: "100%",
          opacity: 1,
        }}
      >
        <div className="flex-container-1">
          <li type="none" style={{ textAlign: "center", paddingTop: "0px" }}>
            <div
              style={{
                backgroundColor: "#252525",
                width: "100px",
                height: "100px",
              }}
            >
              <Link to={"/"}>
                <img src={logo1} width="80px" />
              </Link>
            </div>
          </li>

          <li type="none" style={{ textAlign: "left", paddingTop: "0px" }}>
            <div
              style={{
                backgroundColor: "#252525",
                width: "328px",
                height: "70px",
              }}
            >
              <img src={logo2} width="250px" />
            </div>
          </li>
        </div>

        <div
          className="navbarhead"
          // style={{ backgroundImage: "linear-gradient(#393939, #252525)" }}
        >
          {state.categoryAll &&
            state.categoryAll.map((x) => (
              <button
                className="button-30"
                role="button"
                onClick={() => {
                  dispatch(setCurrentCategory(x.category_name));
                  navigate(`/${x.category_name}`, { state: x.category_name });
                }}
              >
                {x.category_name}
              </button>
            ))}
        </div>
      </div>

      {/* ------------------------------------Footer Menu------------------------------------ */}

      <div
        style={{
          position: "fixed",
          bottom: "-10px",
          zIndex: 100,
          margin: "0% auto",
          width: "100%",
          opacity: 1,
          textAlign: "center",
        }}
      >
        <div className="flex-container-2">
          <div className="navbarfooter">
            <tr textAlign={"center"}>
              <td className="menufooter">
                <Link to={"/coffee"}>
                  <img src={icon_home} width="80px" />
                </Link>
              </td>

              <td className="menufooter">
                <Link to={"/userProfile"}>
                  <img src={icon_profile} width="80px" />
                </Link>
              </td>

              <td className="menufooter">
                <Link to={"/cart"}>
                  <img src={icon_cart} width="80px" />
                </Link>
              </td>
              <td className="menufooter">
                <img src={icon_notify} width="80px" />
              </td>
            </tr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
