import { Layout, Typography, Space, Tooltip } from 'antd';
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  LinkOutlined
} from '@ant-design/icons';

import { AppHeader, AppFooter } from '../../features';

import './AboutPage.css';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export const AboutPage = () => {
  return (
    <Layout className="layout">
      <AppHeader />
      <Layout>
        <Content className="content">
          <div className="site-layout-content">
            <Title level={1} className="about-title">
              About This Application
            </Title>
            <Paragraph className="about-description">
              This is a Todo Test application developed for Senama Soft. It
              allows users to manage their tasks. The application was built
              using a variety of technologies and tools to ensure a robust and
              scalable solution.
            </Paragraph>
            <Title level={2} className="about-subtitle">
              Technologies Used
            </Title>
            <ul className="about-tech-list">
              <li>
                <strong>Frontend:</strong> React, Ant Design, Axios
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Express, Mongoose
              </li>
              <li>
                <strong>Database:</strong> MongoDB, Atlas
              </li>
            </ul>
            <Title level={2} className="about-subtitle">
              Contact & Social Media
            </Title>
            <Space size="large" className="social-links">
              <Tooltip title="GitHub">
                <a
                  href="https://github.com/Quuuod"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubOutlined style={{ fontSize: '24px' }} />
                  <span className="social-label">GitHub</span>
                </a>
              </Tooltip>
              <Tooltip title="Telegram">
                <a
                  href="https://t.me/quuuod"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkOutlined style={{ fontSize: '24px' }} />
                  <span className="social-label">Telegram</span>
                </a>
              </Tooltip>
              <Tooltip title="LinkedIn">
                <a
                  href="https://www.linkedin.com/in/roman-markov-150a901b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinOutlined style={{ fontSize: '24px' }} />
                  <span className="social-label">LinkedIn</span>
                </a>
              </Tooltip>
              <Tooltip title="Email">
                <a
                  href="mailto:markovroman671@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MailOutlined style={{ fontSize: '24px' }} />
                  <span className="social-label">Email</span>
                </a>
              </Tooltip>
            </Space>
          </div>
        </Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
};
