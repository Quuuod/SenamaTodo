'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.NotFoundPage = void 0;
const jsx_runtime_1 = require('react/jsx-runtime');
const antd_1 = require('antd');
const react_router_dom_1 = require('react-router-dom');
const NotFoundPage = () => {
  const navigate = (0, react_router_dom_1.useNavigate)();
  const handleClick = () => {
    navigate('/');
  };
  return (0, jsx_runtime_1.jsx)(antd_1.Result, {
    status: '404',
    title: '404',
    subTitle: 'Page Not Found',
    extra: (0, jsx_runtime_1.jsx)(antd_1.Button, {
      type: 'primary',
      onClick: handleClick,
      children: 'Back Home'
    })
  });
};
exports.NotFoundPage = NotFoundPage;
