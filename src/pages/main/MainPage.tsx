import { Layout, Menu } from 'antd';
import { UserOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import './MainPage.css';
import { TodoList } from '../../features';

const { Header, Content, Footer } = Layout;

export const MainPage = () => {
  return (
    <Layout className="layout">
      <Header className="header">
        <div className="logo">Todo App</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          className="menu"
        >
          <Menu.Item key="1" icon={<AppstoreOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/about">About</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Content className="content">
          <div className="site-layout-content">
            <TodoList />
          </div>
        </Content>
        <Footer className="footer">Created by Markov Roman</Footer>
      </Layout>
    </Layout>
  );
};
