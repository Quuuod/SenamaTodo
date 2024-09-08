'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.MainPage = void 0;
const jsx_runtime_1 = require('react/jsx-runtime');
const antd_1 = require('antd');
const icons_1 = require('@ant-design/icons');
const react_router_dom_1 = require('react-router-dom');
require('./MainPage.css');
const features_1 = require('../../features');
const { Header, Content, Footer } = antd_1.Layout;
const MainPage = () => {
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
            defaultSelectedKeys: ['1'],
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
            children: (0, jsx_runtime_1.jsx)('div', {
              className: 'site-layout-content',
              children: (0, jsx_runtime_1.jsx)(features_1.TodoList, {})
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
exports.MainPage = MainPage;
