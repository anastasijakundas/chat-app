import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Chat } from '../../chat/schemas/chat.schema';

export type UserDocument = User & mongoose.Document;

@Schema()
export class User {
  @Prop()
  email?: string;

  @Prop()
  name?: string;

  @Prop()
  googleId: string;

  @Prop({type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chat' }] })
  chats?: Chat[];
}

export const UserSchema = SchemaFactory.createForClass(User);
