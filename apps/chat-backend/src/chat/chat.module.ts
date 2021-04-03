import { Module } from '@nestjs/common';

import { ChatService } from './chat.service';
import { ChatGateway } from './chat.gateway';
import { DatabaseModule } from '../database/database.module';
import { chatProviders } from './chat.providers';

@Module({
  imports: [DatabaseModule],
  providers: [ChatGateway, ChatService, ...chatProviders]
})
export class ChatModule {}
