"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoModel_1 = __importDefault(require("../model/todoModel"));
const router = express_1.default.Router();
// Получить все задачи
router.get('/', async (req, res) => {
    try {
        const todos = await todoModel_1.default.find();
        res.json(todos);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
// Создать новую задачу
router.post('/', async (req, res) => {
    const { text } = req.body;
    try {
        const newTodo = new todoModel_1.default({
            text
        });
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    }
    catch (error) {
        res.status(400).json({ message: 'Bad request' });
    }
});
// Обновить задачу
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { completed, text } = req.body;
    try {
        const updateFields = {};
        if (completed !== undefined)
            updateFields.completed = completed;
        if (text !== undefined)
            updateFields.text = text;
        const updatedTodo = await todoModel_1.default.findByIdAndUpdate(id, updateFields, {
            new: true
        });
        if (updatedTodo) {
            res.json(updatedTodo);
        }
        else {
            res.status(404).json({ message: 'Todo not found' });
        }
    }
    catch (error) {
        console.error('Update Error:', error);
        res.status(400).json({ message: 'Bad request' });
    }
});
// Удалить задачу
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTodo = await todoModel_1.default.findByIdAndDelete(id);
        if (deletedTodo) {
            res.json({ message: 'Todo deleted' });
        }
        else {
            res.status(404).json({ message: 'Todo not found' });
        }
    }
    catch (error) {
        res.status(400).json({ message: 'Bad request' });
    }
});
exports.default = router;
