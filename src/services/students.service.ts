import { Injectable } from '@nestjs/common';
import {Collection} from "mongodb";
import {StudentModel} from "../models";

@Injectable()
export class StudentsService {

    constructor(public readonly col:Collection<StudentModel[]>) {
    }
}
