import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

import { ChatService } from './chat.service';
import { SendMessageDto } from '../chat-room/dto/send-message.dto';
import { CHAT_SOCKETS } from '@chat-application/constants';

@WebSocketGateway()
export class ChatGateway {
  constructor(private readonly chatService: ChatService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage(CHAT_SOCKETS.sendMessage)
  async handleMessage(@MessageBody() payload: SendMessageDto): Promise<void> {
    const receivedMessage = await this.chatService.pushMessage(payload);

    this.server.emit(CHAT_SOCKETS.receiveMessage, receivedMessage);
  }
}
