import {Controller, Get} from '@nestjs/common';
import {StudentsService} from "../services";

@Controller('students')
export class StudentsController {

    constructor(public readonly studentsService:StudentsService) {
    }

    @Get()
    getAllStudents(){
        return this.studentsService.col.find().toArray();
    }
}
