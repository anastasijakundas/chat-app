import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { Message, MessageSchema } from './message.schema';
import { User } from '../../user/schemas/user.schema';

export type ChatDocument = Chat & mongoose.Document;

@Schema()
export class Chat {
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  participants: User[];

  @Prop({ type: [MessageSchema] })
  messages: Message[];

  @Prop()
  title: string;

  _id: string;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
