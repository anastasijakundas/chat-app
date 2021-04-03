import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatRoomModule } from '../chat-room/chat-room.module';

@Module({
  imports: [ChatRoomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
