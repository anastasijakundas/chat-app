import * as mongoose from 'mongoose';

export const ChatSchema = new mongoose.Schema({
  participants: [],
  messages: [{ sender: String, date: Date, text: String }],
  title: String,
});