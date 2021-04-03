import { Connection } from 'mongoose';
import { ChatSchema } from './schemas/chat.schema';

export const chatProviders = [
  {
    provide: 'CHAT_MODEL',
    useFactory: (connection: Connection) => connection.model('Chat', ChatSchema),
    inject: ['DATABASE_CONNECTION'], // TODO move to const
  },
];