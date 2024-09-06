import React, { useEffect, useState } from 'react';
import { Button, List, Input } from 'antd';

import { TodoItem } from '../TodoItem';
import {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo
} from '../../api/todosApi';
import './TodoList.css';

interface Todo {
  _id: string;
  text: string;
  completed: boolean;
}

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const fetchedTodos = await fetchTodos();
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
        const addedTodo = await createTodo({ text: newTodo });
        setTodos([addedTodo as Todo, ...todos]);
        setNewTodo('');
      } catch (error) {
        console.error('Failed to add todo', error);
      }
    }
  };

  const handleToggleTodo = async (id: string) => {
    const todo = todos.find((todo) => todo._id === id);
    if (todo) {
      try {
        const updatedTodo = await updateTodo(id, {
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

  const handleDeleteTodo = async (id: string) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error('Failed to delete todo', error);
    }
  };

  const handleUpdateTodo = async (id: string, newText: string) => {
    if (newText.trim()) {
      try {
        const updatedTodo = await updateTodo(id, { text: newText });
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

  return (
    <div className="todo-list">
      <div className="todo-add-container">
        <Input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="todo-input"
        />
        <Button className="add-todo-btn" type="primary" onClick={handleAddTodo}>
          Add Todo
        </Button>
      </div>
      <List
        dataSource={todos}
        renderItem={(item) => (
          <TodoItem
            key={item._id}
            id={item._id}
            text={item.text}
            completed={item.completed}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
            onUpdate={handleUpdateTodo}
          />
        )}
      />
    </div>
  );
};
