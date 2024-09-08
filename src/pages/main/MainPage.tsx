import { Layout } from 'antd';

import { TodoList, AppHeader, AppFooter } from '../../features';

import './MainPage.css';

const { Content } = Layout;

export const MainPage = () => {
  return (
    <Layout className="layout">
      <AppHeader />
      <Layout>
        <Content className="content">
          <div className="site-layout-content">
            <TodoList />
          </div>
        </Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
};
