import axios from 'axios';

import { environment } from '../../../environments';

const api = axios.create({
  baseURL: environment.baseApiUrl
});

export const fetchTodos = async () => {
  const response = await api.get('/todos');
  return response.data;
};

export const createTodo = async (todo: { text: string }) => {
  const response = await api.post('/todos', todo);
  return response.data;
};

export const updateTodo = async (
  id: string,
  updates: { completed?: boolean; text?: string }
) => {
  const response = await api.put(`/todos/${id}`, updates);
  return response.data;
};

export const deleteTodo = async (id: string) => {
  await api.delete(`/todos/${id}`);
};
