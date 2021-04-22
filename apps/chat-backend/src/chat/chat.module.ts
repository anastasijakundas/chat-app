import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { ChatService } from './chat.service';
import { ChatGateway } from './chat.gateway';
import { ChatController } from './chat.controller';
import { ChatSchema, MessageSchema } from './schemas/chat.schema';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Chat', schema: ChatSchema },
      { name: 'Message', schema: MessageSchema },
    ]),
    UserModule,
  ],
  providers: [ChatGateway, ChatService],
  controllers: [ChatController],
  exports: [
    MongooseModule.forFeature([{ name: 'Message', schema: MessageSchema }]),
  ],
})
export class ChatModule {}
