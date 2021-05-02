import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Logger,
} from '@nestjs/common';

import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';


@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  private readonly logger = new Logger(ChatController.name);

  @Post('/create')
  createChat(@Body() createChatDto: CreateChatDto) {
    try {
      return this.chatService.create(createChatDto);
    } catch (err) {
      this.logger.error('Something went wrong with chat creation');
    }
  }

  @Get('/userChats/:userId')
  getChats(@Param('userId') userId: string) {
    try {
      return this.chatService.getChats(userId);
    } catch (err) {
      this.logger.error('Something went wrong with getting chats');
    }
  }

  @Get('/:chatId')
  getChatById(@Param('chatId') chatId: string) {
    try {
      return this.chatService.getChat(chatId);
    } catch (err) {
      this.logger.error('Something went wrong with getting chat info');
    }
  }
}
