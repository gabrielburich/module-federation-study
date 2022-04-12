import React from "react";
import "./App.css";
import { Layout, Menu } from 'antd';
import AppRoutes from "./routes/AppRoutes";
import {Link} from "react-router-dom";

const { Header, Content, Footer, Sider  } = Layout;


function App() {
  return (
          <Layout style={{height: '100vh'}}>
              <Sider breakpoint="lg" collapsedWidth="0">
                  <div className="logo" />
                  <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                      <Menu.Item key="1">
                          <Link to="/">Home</Link>
                      </Menu.Item>
                      <Menu.Item key="2">
                          <Link to="/core-feature">Core Feature</Link>
                      </Menu.Item>
                      <Menu.Item key="3">
                          <Link to="/some-feature">Some Feature (External)</Link>
                      </Menu.Item>
                  </Menu>
              </Sider>
              <Layout>
                  <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                  <Content style={{ margin: '24px 16px 0' }}>
                      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                          <AppRoutes />
                      </div>
                  </Content>
                  <Footer style={{ textAlign: 'center' }}>Gabriel Burich</Footer>
              </Layout>
          </Layout>
  );
}

export default App;
