'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.deleteTodo =
  exports.updateTodo =
  exports.createTodo =
  exports.fetchTodos =
    void 0;
const axios_1 = __importDefault(require('axios'));
const environments_1 = require('../../../environments');
const api = axios_1.default.create({
  baseURL: environments_1.environment.baseApiUrl
});
const fetchTodos = async () => {
  const response = await api.get('/todos');
  return response.data;
};
exports.fetchTodos = fetchTodos;
const createTodo = async (todo) => {
  const response = await api.post('/todos', todo);
  return response.data;
};
exports.createTodo = createTodo;
const updateTodo = async (id, updates) => {
  const response = await api.put(`/todos/${id}`, updates);
  return response.data;
};
exports.updateTodo = updateTodo;
const deleteTodo = async (id) => {
  await api.delete(`/todos/${id}`);
};
exports.deleteTodo = deleteTodo;
