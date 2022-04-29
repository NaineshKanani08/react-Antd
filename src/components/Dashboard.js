import React from "react";
import { Layout, Typography, Avatar, Menu, Breadcrumb, Dropdown } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Location1 from "../pages/Location1";
import Location2 from "../pages/Location2";
import Main from "../pages/Main";
import Crud from "../pages/Crud";
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;
const DashboardComp = () => {
  const [selectedMenuItem, setSelectedMenuItem] = React.useState("dashboard");
  const getPath = useLocation();
  const history = useNavigate();
  const userName = localStorage.getItem("user");
  const height = window.innerHeight - 190;
  const componentsSwtich = (key) => {
    switch (key) {
      case "dashboard":
        return <Main />;
      case "location1":
        return <Location1 />;
      case "location2":
        return <Location2 />;
      case "crud":
        return <Crud />;
      default:
        break;
    }
  };
  return (
    <Layout>
      <Header style={{ padding: 10 }}>
        <Title style={{ color: "white" }} level={3}>
          {userName}
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item
                  key="logout"
                  onClick={() => {
                    localStorage.clear();
                    history("/");
                  }}
                >
                  LogOut
                </Menu.Item>
              </Menu>
            }
          >
            <Avatar style={{ float: "right" }}>
              {userName.length <= 2 ? userName : userName[0]}
            </Avatar>
          </Dropdown>
        </Title>
      </Header>
      <Layout>
        <Sider>
          <Menu
            selectedKeys={selectedMenuItem}
            mode="inline"
            onClick={(e) => setSelectedMenuItem(e.key)}
          >
            <Menu.Item key="dashboard">
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="users">
              <Link to="/users">Users</Link>
            </Menu.Item>
            <Menu.Item key="form">
              <Link to="/form">Form</Link>
            </Menu.Item>
            <Menu.Item key="crud">Crud Table</Menu.Item>
            <SubMenu key="aboutUs" title={<span>AboutUs</span>}>
              <Menu.ItemGroup key="country1" title="Country1">
                <Menu.Item key="location1">
                  <Link to="/dashboard/location1">Location 1</Link>
                </Menu.Item>
                <Menu.Item key="location2">
                  <Link to="/dashboard/location2">Location 2</Link>
                </Menu.Item>
                {/* <Menu.Item key="crud">
                  <Link to="/dashboard/crud">crud</Link>
                </Menu.Item> */}
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Breadcrumb style={{ margin: "12px 5px" }}>
            <Breadcrumb.Item>{getPath.pathname.slice(1)}</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: "0 50px",
              margin: "0 30px",
              minHeight: `${height}px`,
              background: "white",
            }}
          >
            {componentsSwtich(selectedMenuItem)}
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design Demo Created by ©{userName}
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DashboardComp;
