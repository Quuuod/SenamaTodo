'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.RouterComponent = void 0;
const jsx_runtime_1 = require('react/jsx-runtime');
const react_router_dom_1 = require('react-router-dom');
const not_found_1 = require('./not-found');
const main_1 = require('./main');
const about_1 = require('./about');
const RouterComponent = () =>
  (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, {
    children: [
      (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, {
        path: '*',
        element: (0, jsx_runtime_1.jsx)(not_found_1.NotFoundPage, {})
      }),
      (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, {
        path: '/',
        element: (0, jsx_runtime_1.jsx)(main_1.MainPage, {})
      }),
      (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, {
        path: '/about',
        element: (0, jsx_runtime_1.jsx)(about_1.AboutPage, {})
      })
    ]
  });
exports.RouterComponent = RouterComponent;
