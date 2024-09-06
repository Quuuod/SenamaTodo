import { Schema, model, Document } from 'mongoose';

interface ITodo extends Document {
  text: string;
  completed: boolean;
}

const TodoSchema = new Schema<ITodo>({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

const Todo = model<ITodo>('Todo', TodoSchema);

export default Todo;
