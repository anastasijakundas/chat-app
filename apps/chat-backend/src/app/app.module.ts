import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatRoomModule } from '../chat-room/chat-room.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    ChatRoomModule,
    MongooseModule.forRoot(
      'mongodb+srv://Nastassia:1998kundas@cluster0.rhegs.mongodb.net/ChatApp?retryWrites=true&w=majority'
    ),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
