import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from '../../user/schemas/user.schema';
import { Message } from '../../chat/schemas/chat.schema';

export type ChatRoomDocument = ChatRoom & mongoose.Document;

@Schema()
export class ChatRoom {
  @Prop([Message])
  messages: Message[];

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  creator: User;
}

export const ChatRoomSchema = SchemaFactory.createForClass(ChatRoom);