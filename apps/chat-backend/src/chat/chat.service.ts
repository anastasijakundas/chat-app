import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

import { Chat } from './interfaces/chat.interface';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';

@Injectable()
export class ChatService {
  constructor(
    @Inject('CHAT_MODEL')
    private catModel: Model<Chat>,
  ) {}

  async create(createChatDto: CreateChatDto) {
    return 'This action adds a new chat';
  }
}
