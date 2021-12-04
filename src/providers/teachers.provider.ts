import { Provider } from '@nestjs/common';
import { Db } from 'mongodb';
import {TeacherModel} from "../models";
import {TeachersService} from "../services";

export const TeachersProvider: Provider = {
    provide: TeachersService,
    inject: [Db],
    useFactory: async (db: Db): Promise<TeachersService> => {
        // fetch the collection from the database
        const col = db.collection<TeacherModel>('teachers');
        // make sure we have indexes on this collection
        await col.createIndex({ firstName: 1 }, { unique: true });
        // create the service
        return new TeachersService(col);
    },
};
