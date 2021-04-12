import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from '../../user/schemas/user.schema';

export type ChatDocument = Chat & mongoose.Document;
export type MessageDocument = Message & mongoose.Document;

@Schema()
class Message {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  sender: User;

  @Prop()
  text: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);

@Schema()
export class Chat {
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  participants: User[];

  @Prop({ type: [MessageSchema] })
  messages: Message[];

  @Prop()
  title: string;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
