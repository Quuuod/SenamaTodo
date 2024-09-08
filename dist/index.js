"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const client_1 = __importDefault(require("react-dom/client"));
require("./styles/global.css");
const react_router_dom_1 = require("react-router-dom");
const react_query_1 = require("react-query");
const devtools_1 = require("react-query/devtools");
const App_1 = require("./app/App");
const queryClient = new react_query_1.QueryClient();
const root = client_1.default.createRoot(document.getElementById('root'));
root.render((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { basename: "/TodoTestApp", children: (0, jsx_runtime_1.jsxs)(react_query_1.QueryClientProvider, { client: queryClient, children: [(0, jsx_runtime_1.jsx)(App_1.App, {}), (0, jsx_runtime_1.jsx)(devtools_1.ReactQueryDevtools, {})] }) }));
