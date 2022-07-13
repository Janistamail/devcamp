import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "./Navbar";
import authenSlice, {
  initData,
  setIdAccount,
  setRole,
} from "../../login/authenSlice";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
const inf = useSelector((state) => state.authen.role);

const LayoutComp = () => {
  // const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const data = useSelector((state) => state.authen.data);
  const role = useSelector((state) => state.authen.role);

  // const [param] = useSearchParams(); // query string ?code=dfdsfsdf&start...
  const liff = window.liff;
  const liffid = "1657254572-91OYpANd";

  //เปิดครั้งแรก-ต่อLIFF/เก็บค่า profileใน redux(data)
  useEffect(() => {
    const initLIFF = async () => {
      let resLine = await liff.init({ liffId: `${liffid}` }).catch((err) => {
        throw err;
      });
      if (liff.isLoggedIn()) {
        let getProfile = await liff.getProfile();
        // console.log(getProfile);
        if (getProfile) {
          let result = await axios.delete("/users/startDeleteCart", {
            data: { line_id: getProfile.userId },
          });
          console.log(getProfile);
          dispatch(
            initData({
              line_name: getProfile.displayName,
              line_id: getProfile.userId,
              line_pic: getProfile.pictureUrl,
            })
          );
        } else {
          console.log("cannot get profile");
        }
      } else {
        liff.login();
      }
    };
    initLIFF();
  }, []);

  //เช็คสิิทธิใน DB
  useEffect(() => {
    const login = async () => {
      if (data) {
        let result = await axios.post("/authen/login", data);
        if (result) {
          // console.log(result.data);
          dispatch(setRole(result.data.role));
          dispatch(setIdAccount(result.data.id_account));
        }
      }
    };
    login();
  }, [data]);

  //เช็คสิทธิเสร็จ -> ไปหน้าต่างๆตามสิทธิ
  useEffect(() => {
    if (role === "user") {
      console.log("The role is USER");
      // navigate("/coffee");
    } else if (role === "admin") {
      console.log("The role is ADMIN");
      navigate("/admin");
    } else if (role === "bartender") {
      console.log("The role is bartender");
      navigate("/bartender");
    }
  }, [role]);

  return (
    <div>
      {/* {if (inf===)} */}
      <Navbar />
      {/* {location.pathname == "/" ? <img src={logo}></img> : <Outlet />} */}
      <Outlet />
    </div>
  );
};

export default LayoutComp;
