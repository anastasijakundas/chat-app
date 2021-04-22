import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ChatRoomService } from './chat-room.service';
import { ChatRoomGateway } from './chat-room.gateway';
import { ChatRoomSchema } from './schemas/chat-room.schema';
import { UserModule } from '../user/user.module';
import { ChatRoomController } from './chat-room.controller';
import { MessageSchema } from '../chat/schemas/chat.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'ChatRoom', schema: ChatRoomSchema }, { name: 'Message', schema: MessageSchema }]),
    UserModule,
  ],
  providers: [ChatRoomGateway, ChatRoomService],
  controllers: [ChatRoomController],
})
export class ChatRoomModule {}
