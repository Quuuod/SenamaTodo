'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const cors_1 = __importDefault(require('cors'));
const db_1 = __importDefault(require('./config/db'));
const todoModel_1 = __importDefault(
  require('./features/todos/model/todoModel')
);
const app = (0, express_1.default)();
app.use(
  (0, cors_1.default)({
    origin: ['http://localhost:3000', 'https://quuuod.github.io'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
  })
);
app.use(express_1.default.json());
(0, db_1.default)();
app.get('/api/todos', async (req, res) => {
  try {
    const todos = await todoModel_1.default.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching todos' });
  }
});
app.post('/api/todos', async (req, res) => {
  const { text, completed } = req.body;
  try {
    const newTodo = new todoModel_1.default({
      text,
      completed
    });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: 'Error creating todo' });
  }
});
app.put('/api/todos/:id', async (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;
  try {
    const updatedTodo = await todoModel_1.default.findByIdAndUpdate(
      id,
      { text, completed },
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: 'Error updating todo' });
  }
});
app.delete('/api/todos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTodo = await todoModel_1.default.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json({ message: 'Todo deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting todo' });
  }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
