import React, { useState } from 'react';
import { Card, Input, Button, Modal } from 'antd';
import { DeleteOutlined, CheckOutlined, UndoOutlined } from '@ant-design/icons';

import './TodoItem.css';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, newText: string) => void;
}

export const TodoItem = ({
  id,
  text,
  completed,
  onToggle,
  onDelete,
  onUpdate
}: TodoItemProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleSave = () => {
    onUpdate(id, newText);
    setIsModalVisible(false);
  };

  const handleCardClick = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <Card
        className="todo-card"
        bordered={false}
        onClick={handleCardClick}
        actions={[
          <Button
            key="toggle"
            type="primary"
            icon={
              completed ? (
                <UndoOutlined style={{ fontSize: '16px' }} />
              ) : (
                <CheckOutlined style={{ fontSize: '16px' }} />
              )
            }
            onClick={(e) => {
              e.stopPropagation();
              onToggle(id);
            }}
          >
            {completed ? 'Undo' : 'Complete'}
          </Button>,
          <Button
            key="delete"
            danger
            icon={<DeleteOutlined style={{ fontSize: '16px' }} />}
            onClick={(e) => {
              e.stopPropagation();
              onDelete(id);
            }}
          >
            Delete
          </Button>
        ]}
        style={{
          backgroundColor: completed ? '#f5f5f5' : '#e3f2fd'
        }}
      >
        <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
          {text}
        </span>
      </Card>

      <Modal
        title="Edit Todo"
        open={isModalVisible}
        onOk={handleSave}
        onCancel={() => setIsModalVisible(false)}
        okText="Save"
        cancelText="Cancel"
      >
        <Input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          autoFocus
          required={true}
        />
      </Modal>
    </>
  );
};
