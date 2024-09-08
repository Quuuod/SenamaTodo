import { Layout, Menu } from 'antd';
import { UserOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const { Header } = Layout;

export const AppHeader = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getSelectedKeys = () => {
    switch (currentPath) {
      case '/about':
        return ['2'];
      case '/':
      default:
        return ['1'];
    }
  };

  return (
    <Header className="header">
      <div className="logo">
        <Link to="/">Todo App</Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={getSelectedKeys()}
        className="menu"
        overflowedIndicator={<span>...</span>}
      >
        <Menu.Item key="1" icon={<AppstoreOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
