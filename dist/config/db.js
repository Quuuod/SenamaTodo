"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    try {
        await mongoose_1.default.connect('mongodb+srv://Roman:NBOUaCak34DXItU6@todoappcluster.0v1d7.mongodb.net/?retryWrites=true&w=majority&appName=TodoAppCluster');
        console.log('MongoDB connected successfully');
    }
    catch (err) {
        if (err instanceof Error) {
            console.error('MongoDB connection error:', err.message);
        }
        else {
            console.error('An unknown error occurred during MongoDB connection');
        }
        process.exit(1);
    }
};
exports.default = connectDB;
