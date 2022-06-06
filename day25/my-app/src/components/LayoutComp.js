import { Link, Outlet } from "react-router-dom";
import "../index";
import profileSlice from "../profileSlice";
import { useSelector } from "react-redux";

const LayoutComp = () => {
  const state = useSelector((state) => state.profile);
  console.log("test", state);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link className="active" to="/">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/productList">Product List</Link>
          </li>
          <li className="user">{state.firstname}</li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default LayoutComp;
