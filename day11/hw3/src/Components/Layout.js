import { Layout, Menu, Breadcrumb } from "antd";
import { Link, Outlet } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;

const LayoutComp = () => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/employeeList">Employee List</Link>
              </li>
              <li>
                <Link to="/departmentList">Department List</Link>
              </li>
              <li>
                <Link to="/nothing-here">Nothing Here</Link>
              </li>
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
