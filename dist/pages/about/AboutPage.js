'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.AboutPage = void 0;
const jsx_runtime_1 = require('react/jsx-runtime');
const antd_1 = require('antd');
const icons_1 = require('@ant-design/icons');
const react_router_dom_1 = require('react-router-dom');
require('./AboutPage.css');
const { Header, Content, Footer } = antd_1.Layout;
const { Title, Paragraph } = antd_1.Typography;
const AboutPage = () => {
  return (0, jsx_runtime_1.jsxs)(antd_1.Layout, {
    className: 'layout',
    children: [
      (0, jsx_runtime_1.jsxs)(Header, {
        className: 'header',
        children: [
          (0, jsx_runtime_1.jsx)('div', {
            className: 'logo',
            children: 'Todo App'
          }),
          (0, jsx_runtime_1.jsxs)(antd_1.Menu, {
            theme: 'dark',
            mode: 'horizontal',
            defaultSelectedKeys: ['2'],
            className: 'menu',
            children: [
              (0, jsx_runtime_1.jsx)(
                antd_1.Menu.Item,
                {
                  icon: (0, jsx_runtime_1.jsx)(icons_1.AppstoreOutlined, {}),
                  children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, {
                    to: '/',
                    children: 'Home'
                  })
                },
                '1'
              ),
              (0, jsx_runtime_1.jsx)(
                antd_1.Menu.Item,
                {
                  icon: (0, jsx_runtime_1.jsx)(icons_1.UserOutlined, {}),
                  children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, {
                    to: '/about',
                    children: 'About'
                  })
                },
                '2'
              )
            ]
          })
        ]
      }),
      (0, jsx_runtime_1.jsxs)(antd_1.Layout, {
        children: [
          (0, jsx_runtime_1.jsx)(Content, {
            className: 'content',
            children: (0, jsx_runtime_1.jsxs)('div', {
              className: 'site-layout-content',
              children: [
                (0, jsx_runtime_1.jsx)(Title, {
                  level: 1,
                  className: 'about-title',
                  children: 'About This Application'
                }),
                (0, jsx_runtime_1.jsx)(Paragraph, {
                  className: 'about-description',
                  children:
                    'This is a Todo Test application developed for Senama Soft. It allows users to manage their tasks. The application was built using a variety of technologies and tools to ensure a robust and scalable solution.'
                }),
                (0, jsx_runtime_1.jsx)(Title, {
                  level: 2,
                  className: 'about-subtitle',
                  children: 'Technologies Used'
                }),
                (0, jsx_runtime_1.jsxs)('ul', {
                  className: 'about-tech-list',
                  children: [
                    (0, jsx_runtime_1.jsxs)('li', {
                      children: [
                        (0, jsx_runtime_1.jsx)('strong', {
                          children: 'Frontend:'
                        }),
                        ' React, Ant Design, Axios'
                      ]
                    }),
                    (0, jsx_runtime_1.jsxs)('li', {
                      children: [
                        (0, jsx_runtime_1.jsx)('strong', {
                          children: 'Backend:'
                        }),
                        ' Node.js, Express, Mongoose'
                      ]
                    }),
                    (0, jsx_runtime_1.jsxs)('li', {
                      children: [
                        (0, jsx_runtime_1.jsx)('strong', {
                          children: 'Database:'
                        }),
                        ' MongoDB, Atlas'
                      ]
                    })
                  ]
                }),
                (0, jsx_runtime_1.jsx)(Title, {
                  level: 2,
                  className: 'about-subtitle',
                  children: 'Contact & Social Media'
                }),
                (0, jsx_runtime_1.jsxs)(antd_1.Space, {
                  size: 'large',
                  className: 'social-links',
                  children: [
                    (0, jsx_runtime_1.jsx)(antd_1.Tooltip, {
                      title: 'GitHub',
                      children: (0, jsx_runtime_1.jsxs)('a', {
                        href: 'https://github.com/Quuuod',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        children: [
                          (0, jsx_runtime_1.jsx)(icons_1.GithubOutlined, {
                            style: { fontSize: '24px' }
                          }),
                          (0, jsx_runtime_1.jsx)('span', {
                            className: 'social-label',
                            children: 'GitHub'
                          })
                        ]
                      })
                    }),
                    (0, jsx_runtime_1.jsx)(antd_1.Tooltip, {
                      title: 'Telegram',
                      children: (0, jsx_runtime_1.jsxs)('a', {
                        href: 'https://t.me/quuuod',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        children: [
                          (0, jsx_runtime_1.jsx)(icons_1.LinkOutlined, {
                            style: { fontSize: '24px' }
                          }),
                          (0, jsx_runtime_1.jsx)('span', {
                            className: 'social-label',
                            children: 'Telegram'
                          })
                        ]
                      })
                    }),
                    (0, jsx_runtime_1.jsx)(antd_1.Tooltip, {
                      title: 'LinkedIn',
                      children: (0, jsx_runtime_1.jsxs)('a', {
                        href: 'https://www.linkedin.com/in/roman-markov-150a901b8/',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        children: [
                          (0, jsx_runtime_1.jsx)(icons_1.LinkedinOutlined, {
                            style: { fontSize: '24px' }
                          }),
                          (0, jsx_runtime_1.jsx)('span', {
                            className: 'social-label',
                            children: 'LinkedIn'
                          })
                        ]
                      })
                    }),
                    (0, jsx_runtime_1.jsx)(antd_1.Tooltip, {
                      title: 'Email',
                      children: (0, jsx_runtime_1.jsxs)('a', {
                        href: 'mailto:markovroman671@gmail.com',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        children: [
                          (0, jsx_runtime_1.jsx)(icons_1.MailOutlined, {
                            style: { fontSize: '24px' }
                          }),
                          (0, jsx_runtime_1.jsx)('span', {
                            className: 'social-label',
                            children: 'Email'
                          })
                        ]
                      })
                    })
                  ]
                })
              ]
            })
          }),
          (0, jsx_runtime_1.jsx)(Footer, {
            className: 'footer',
            children: 'Created by Markov Roman'
          })
        ]
      })
    ]
  });
};
exports.AboutPage = AboutPage;
exports.default = exports.AboutPage;
