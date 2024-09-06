import express, { Request, Response } from 'express';

import Todo from '../model/todoModel';

const router = express.Router();

// Получить все задачи
router.get('/', async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Создать новую задачу
router.post('/', async (req: Request, res: Response) => {
  const { text } = req.body;
  try {
    const newTodo = new Todo({
      text
    });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(400).json({ message: 'Bad request' });
  }
});

// Обновить задачу
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { completed, text } = req.body;

  try {
    const updateFields: any = {};
    if (completed !== undefined) updateFields.completed = completed;
    if (text !== undefined) updateFields.text = text;

    const updatedTodo = await Todo.findByIdAndUpdate(id, updateFields, {
      new: true
    });

    if (updatedTodo) {
      res.json(updatedTodo);
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  } catch (error) {
    console.error('Update Error:', error);
    res.status(400).json({ message: 'Bad request' });
  }
});

// Удалить задачу
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (deletedTodo) {
      res.json({ message: 'Todo deleted' });
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Bad request' });
  }
});

export default router;
