import { Document } from 'mongoose';

export interface Chat extends Document {
  readonly participants: [];
  readonly amessages: [{ sender: String, date: Date, text: String }];
  readonly title: string;
}