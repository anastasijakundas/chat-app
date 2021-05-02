import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { User } from '../../user/schemas/user.schema';

export type MessageDocument = Message & mongoose.Document;

@Schema()
export class Message {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  sender: User;

  @Prop()
  text: string;

  _id: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
