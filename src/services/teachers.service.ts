import {Injectable} from '@nestjs/common';
import {Collection} from "mongodb";
import {TeacherModel} from "../models";

@Injectable()
export class TeachersService {

    constructor(public readonly col:Collection<TeacherModel>) {
    }

    getAllTeachers(){
        console.log("GET/TEACHERS:");
       return this.col.find().toArray();
    }


}
