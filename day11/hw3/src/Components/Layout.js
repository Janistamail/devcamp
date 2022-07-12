import { Layout } from "antd";
import { Link, Outlet } from "react-router-dom";
const { Header, Footer, Content } = Layout;

const LayoutComp = () => {
  return (
    <Layout>
      <Header style={{ color: "white" }}>Header</Header>
      <Content>
        <div>
          <nav>
            <ul>
              <h4>
                <Link to="/">Home</Link>
              </h4>
              <h4>
                <Link to="/employeeList">Employee List</Link>
              </h4>
              <h4>
                <Link to="/departmentList">Department List</Link>
              </h4>
              {/* <li>
                <Link to="/nothing-here">Nothing Here</Link>
              </li> */}
            </ul>
          </nav>
          <hr />
          <Outlet />
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default LayoutComp;
