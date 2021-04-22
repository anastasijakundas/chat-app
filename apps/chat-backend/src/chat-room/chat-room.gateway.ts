import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  WebSocketServer,
  OnGatewayConnection,
  WsResponse,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

import { ChatRoomService } from './chat-room.service';
import { CreateChatRoomDto } from './dto/create-chat-room.dto';
import { UpdateChatRoomDto } from './dto/update-chat-room.dto';
import { SendMessageDto } from './dto/send-message.dto';



@WebSocketGateway()
export class ChatRoomGateway {
  constructor(private readonly chatRoomService: ChatRoomService) {}
  @WebSocketServer()
  private server: Server;

  private users = {};

  handleConnection(client: Socket, ...args: any[]) {
    // client.disconnect(true)
    // const {name} = client.handshake.query;
    // this.users[client.id] = {name};
    console.log('Connected client: ', client.id);
  }

  @SubscribeMessage('join')
  joinRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() body: { name: string; room_id: string }
  ): WsResponse<string> {
    const { name, room_id } = body;
    this.users[client.id] = { name, room_id };
    client.join(room_id);

    console.log('join', client.id, body);
    return { event: 'join', data: 'Hello dear' };
  }

  @SubscribeMessage('msgToServer')
  sendMessage(
    @MessageBody() payload: SendMessageDto,
    @ConnectedSocket() client: Socket
  ): void {
    const receivedMessage = this.chatRoomService.sendMessage(payload);
    console.log(receivedMessage);
    this.server.emit('msgToClient', receivedMessage);
    // return { event: 'send', data: 'Hello dear' };
  }
}
