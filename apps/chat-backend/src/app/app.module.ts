import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ChatRoomModule } from '../chat-room/chat-room.module';
import { UserModule } from '../user/user.module';
import { ChatModule } from '../chat/chat.module';

@Module({
  imports: [
    ChatRoomModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
    UserModule,
    ChatModule,
  ],
})

export class AppModule {}
