import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateChatDto } from './dto/create-chat.dto';
import { Chat, ChatDocument } from './schemas/chat.schema';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel('Chat') private readonly userModel: Model<ChatDocument>
  ) {}

  async create(createChatDto: CreateChatDto) {
    const createdCat = new this.userModel(createChatDto);
    return createdCat.save();
  }
}
