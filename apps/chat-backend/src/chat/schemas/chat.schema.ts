import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChatDocument = Chat & Document;

@Schema()
export class Chat {
  @Prop()
  participants: [];

  @Prop()
  messages: [{ sender: string; date: Date; text: string }];

  @Prop()
  title: string;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
