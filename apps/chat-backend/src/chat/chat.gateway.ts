import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WsResponse,
} from '@nestjs/websockets';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

import { ChatService } from './chat.service';
import { ChatDocument, MessageDocument } from './schemas/chat.schema';
import { from, Observable } from 'rxjs';
import { SendMessageDto } from '../chat-room/dto/send-message.dto';

@WebSocketGateway()
export class ChatGateway {
  constructor(
    private readonly chatService: ChatService,
    @InjectModel('Chat') private readonly chatModel: Model<ChatDocument>,
    @InjectModel('Message')
    private readonly messageModel: Model<MessageDocument>
  ) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('sendChatMessage')
  handleMessage(
    @MessageBody() payload: SendMessageDto,
    @ConnectedSocket() client: Socket
  ): void {
    const receivedMessage = this.chatService.pushMessage(payload);

    this.server.emit('receiveChatMessage', receivedMessage);
  }
}
