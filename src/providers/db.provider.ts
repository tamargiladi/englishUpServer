import { Provider } from '@nestjs/common';
import { Db, MongoClient } from 'mongodb';

export const DbProvider: Provider = {
  provide: Db,
  useFactory: async (): Promise<Db> => {
    const client = new MongoClient('mongodb://localhost:27017');
    await client.connect();
    return client.db('englishUp');
  },
};
