import { Injectable } from '@nestjs/common';
import { CreateChatRoomDto } from './dto/create-chat-room.dto';
import { UpdateChatRoomDto } from './dto/update-chat-room.dto';

@Injectable()
export class ChatRoomService {
  create(createChatRoomDto: CreateChatRoomDto) {
    return 'This action adds a new chatRoom';
  }
}
