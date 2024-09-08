'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.TodoItem = void 0;
const jsx_runtime_1 = require('react/jsx-runtime');
const react_1 = require('react');
const antd_1 = require('antd');
const icons_1 = require('@ant-design/icons');
require('./TodoItem.css');
const TodoItem = ({ id, text, completed, onToggle, onDelete, onUpdate }) => {
  const [isModalVisible, setIsModalVisible] = (0, react_1.useState)(false);
  const [newText, setNewText] = (0, react_1.useState)(text);
  const handleSave = () => {
    onUpdate(id, newText);
    setIsModalVisible(false);
  };
  const handleCardClick = () => {
    setIsModalVisible(true);
  };
  return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
    children: [
      (0, jsx_runtime_1.jsx)(antd_1.Card, {
        className: 'todo-card',
        bordered: false,
        onClick: handleCardClick,
        actions: [
          (0, jsx_runtime_1.jsx)(
            antd_1.Button,
            {
              type: 'primary',
              icon: completed
                ? (0, jsx_runtime_1.jsx)(icons_1.UndoOutlined, {})
                : (0, jsx_runtime_1.jsx)(icons_1.CheckOutlined, {}),
              onClick: (e) => {
                e.stopPropagation();
                onToggle(id);
              },
              children: completed ? 'Undo' : 'Complete'
            },
            'toggle'
          ),
          (0, jsx_runtime_1.jsx)(
            antd_1.Button,
            {
              danger: true,
              icon: (0, jsx_runtime_1.jsx)(icons_1.DeleteOutlined, {}),
              onClick: (e) => {
                e.stopPropagation();
                onDelete(id);
              },
              children: 'Delete'
            },
            'delete'
          )
        ],
        style: {
          backgroundColor: completed ? '#f5f5f5' : '#e3f2fd'
        },
        children: (0, jsx_runtime_1.jsx)('span', {
          style: { textDecoration: completed ? 'line-through' : 'none' },
          children: text
        })
      }),
      (0, jsx_runtime_1.jsx)(antd_1.Modal, {
        title: 'Edit Todo',
        open: isModalVisible,
        onOk: handleSave,
        onCancel: () => setIsModalVisible(false),
        okText: 'Save',
        cancelText: 'Cancel',
        children: (0, jsx_runtime_1.jsx)(antd_1.Input, {
          value: newText,
          onChange: (e) => setNewText(e.target.value),
          autoFocus: true
        })
      })
    ]
  });
};
exports.TodoItem = TodoItem;
