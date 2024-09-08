'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.TodoList = void 0;
const jsx_runtime_1 = require('react/jsx-runtime');
const react_1 = require('react');
const antd_1 = require('antd');
const TodoItem_1 = require('../TodoItem');
const todosApi_1 = require('../../api/todosApi');
require('./TodoList.css');
const TodoList = () => {
  const [todos, setTodos] = (0, react_1.useState)([]);
  const [newTodo, setNewTodo] = (0, react_1.useState)('');
  (0, react_1.useEffect)(() => {
    const loadTodos = async () => {
      try {
        const fetchedTodos = await (0, todosApi_1.fetchTodos)();
        setTodos(fetchedTodos.reverse());
      } catch (error) {
        console.error('Failed to fetch todos', error);
      }
    };
    loadTodos();
  }, []);
  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      try {
        const addedTodo = await (0, todosApi_1.createTodo)({ text: newTodo });
        setTodos([addedTodo, ...todos]);
        setNewTodo('');
      } catch (error) {
        console.error('Failed to add todo', error);
      }
    }
  };
  const handleToggleTodo = async (id) => {
    const todo = todos.find((todo) => todo._id === id);
    if (todo) {
      try {
        const updatedTodo = await (0, todosApi_1.updateTodo)(id, {
          completed: !todo.completed
        });
        setTodos((prevTodos) =>
          prevTodos.map((t) =>
            t._id === id ? { ...t, completed: updatedTodo.completed } : t
          )
        );
      } catch (error) {
        console.error('Failed to update todo', error);
      }
    }
  };
  const handleDeleteTodo = async (id) => {
    try {
      await (0, todosApi_1.deleteTodo)(id);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error('Failed to delete todo', error);
    }
  };
  const handleUpdateTodo = async (id, newText) => {
    if (newText.trim()) {
      try {
        const updatedTodo = await (0, todosApi_1.updateTodo)(id, {
          text: newText
        });
        setTodos((prevTodos) => {
          return prevTodos.map((t) =>
            t._id === id ? { ...t, text: updatedTodo.text } : t
          );
        });
      } catch (error) {
        console.error('Failed to update todo', error);
      }
    }
  };
  return (0, jsx_runtime_1.jsxs)('div', {
    className: 'todo-list',
    children: [
      (0, jsx_runtime_1.jsxs)('div', {
        className: 'todo-add-container',
        children: [
          (0, jsx_runtime_1.jsx)(antd_1.Input, {
            value: newTodo,
            onChange: (e) => setNewTodo(e.target.value),
            placeholder: 'Add a new todo',
            className: 'todo-input'
          }),
          (0, jsx_runtime_1.jsx)(antd_1.Button, {
            className: 'add-todo-btn',
            type: 'primary',
            onClick: handleAddTodo,
            children: 'Add Todo'
          })
        ]
      }),
      (0, jsx_runtime_1.jsx)(antd_1.List, {
        dataSource: todos,
        renderItem: (item) =>
          (0, jsx_runtime_1.jsx)(
            TodoItem_1.TodoItem,
            {
              id: item._id,
              text: item.text,
              completed: item.completed,
              onToggle: handleToggleTodo,
              onDelete: handleDeleteTodo,
              onUpdate: handleUpdateTodo
            },
            item._id
          )
      })
    ]
  });
};
exports.TodoList = TodoList;
