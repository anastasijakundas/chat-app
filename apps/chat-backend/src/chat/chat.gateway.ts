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
import { Observable } from 'rxjs';

@WebSocketGateway()
export class ChatGateway {
  constructor(
    private readonly chatService: ChatService,
    @InjectModel('Chat') private readonly chatModel: Model<ChatDocument>,
    @InjectModel('Message')
    private readonly messageModel: Model<MessageDocument>
  ) {}

  // @WebSocketServer()
  // server: Server;

  // private logger: Logger = new Logger('AppGateway');

  // @SubscribeMessage('sendMessage')
  // handleMessage(
  //   client: Socket,
  //   payload: string
  // ): Observable<WsResponse<any>> | any {
  //   this.server.emit('send-message', payload);
  //   return payload;
  // }

  // handleDisconnect(client: Socket) {
  //   this.logger.log(`Client disconnected: ${client.id}`);
  // }

  // handleConnection(client: Socket, ...args: any[]) {
  //   this.logger.log(`Client connected: ${client.id}`);
  // }
}
