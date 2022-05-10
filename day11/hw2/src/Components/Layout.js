import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shopStock">ShopStock</Link>
          </li>
          <li>
            <Link to="/wareHouseLocation">WareHouseLocation</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <hr />
        <Outlet />
      </div>
    </nav>
  );
};

export default Layout;
