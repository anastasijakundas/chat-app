import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION', // TODO move to const
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://Nastassia:1998Kundas@cluster0.rhegs.mongodb.net/ChatApp?retryWrites=true&w=majority'),
  },
];