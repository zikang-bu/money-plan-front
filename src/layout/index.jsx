import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import { navi, componentsRoutes } from "../router/routes";
import renderRoutes from "../router/renderRoutes";

const { Header, Sider, Content } = Layout;
const MenuItem = Menu.Item;

class MyLayout extends Component {
  renderMenu = () => {
    return navi.map((item) => {
      return (
        <MenuItem key={item.key}>
          <NavLink to={item.path}>{item.title}</NavLink>
        </MenuItem>
      );
    });
  };

  render() {
    return (
      <Layout>
        <Header>
          <div className="admin-title">金钱计划</div>
          <Menu theme="dark" mode="horizontal">
            {this.renderMenu()}
          </Menu>
        </Header>
        <Content className="main_content">
          {renderRoutes(componentsRoutes)}
        </Content>
      </Layout>
    );
  }
}

export default MyLayout;
