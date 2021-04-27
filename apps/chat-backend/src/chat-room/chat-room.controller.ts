import {
  Controller,
  Get,
  Post,
  Body,
  Param,
} from '@nestjs/common';
import { ChatRoomService } from './chat-room.service';
import { CreateChatRoomDto } from './dto/create-chat-room.dto';
// import { ChatRoom } from '@chat-application/types';

@Controller('chatRoom')
export class ChatRoomController {
  constructor(private readonly chatRoomService: ChatRoomService) {}

  @Post('/create')
  createChatRoom(@Body() createChatRoomDto: CreateChatRoomDto) {
    try {
      return this.chatRoomService.createChatRoom(createChatRoomDto);
    } catch (err) {
      console.log(err);
    }
  }

  @Get('/all')
  getChatsRooms() {
    try {
      return this.chatRoomService.getChatRooms();
    } catch (err) {
      console.log(err);
    }
  }

  @Get('/:chatRoomId')
  async getChatRoomById(@Param('chatRoomId') chatRoomId: string) {
    try {
      const chatRoom = await this.chatRoomService.getChatRoom(chatRoomId);

      return chatRoom;
    } catch (err) {
      console.log(err);
    }
  }
}
