import {Provider} from '@nestjs/common';
import {Db} from 'mongodb';
import {StudentModel} from "../models";
import {StudentsService} from "../services";

export const StudentsProvider: Provider = {
    provide: StudentsService,
    inject: [Db],
    useFactory: async (db: Db): Promise<StudentsService> => {
        // fetch the collection from the database
        const col = db.collection<StudentModel>('students');
        // make sure we have indexes on this collection
        await col.createIndex({ firstName: 1 }, { unique: true });
        // create the service
        return new StudentsService(col);
    },
};
