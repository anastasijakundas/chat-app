import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { ChatRoomService } from './chat-room.service';
import { CreateChatRoomDto } from './dto/create-chat-room.dto';
import { UpdateChatRoomDto } from './dto/update-chat-room.dto';

@WebSocketGateway()
export class ChatRoomGateway {
  constructor(private readonly chatRoomService: ChatRoomService) {}

  @SubscribeMessage('createChatRoom')
  create(@MessageBody() createChatRoomDto: CreateChatRoomDto) {
    return this.chatRoomService.create(createChatRoomDto);
  }
}
