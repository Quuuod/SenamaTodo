'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.App = void 0;
const jsx_runtime_1 = require('react/jsx-runtime');
// eslint-disable-next-line import/no-extraneous-dependencies
const classnames_1 = __importDefault(require('classnames'));
const RouterComponent_1 = require('../pages/RouterComponent');
const App = () => {
  return (0, jsx_runtime_1.jsx)('div', {
    className: (0, classnames_1.default)('app-wrapper'),
    children: (0, jsx_runtime_1.jsx)(RouterComponent_1.RouterComponent, {})
  });
};
exports.App = App;
