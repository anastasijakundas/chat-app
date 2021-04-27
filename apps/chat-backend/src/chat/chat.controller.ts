import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('/create')
  createChat(@Body() createChatDto: CreateChatDto) {
    try {
      return this.chatService.create(createChatDto);
    } catch (err) {
      console.log(err);
    }
  }

  @Get('/userChats/:userId')
  getChats(@Param('userId') userId: string) {
    try {
      return this.chatService.getChats(userId);
    } catch (err) {
      console.log(err);
    }
  }

  @Get('/:chatId')
  getChatById(@Param('chatId') chatId: string) {
    try {
      return this.chatService.getChat(chatId);
    } catch (err) {
      console.log(err);
    }
  }
}
