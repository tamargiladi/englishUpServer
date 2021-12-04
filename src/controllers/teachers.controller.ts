import {Body, Controller, Get, Post} from '@nestjs/common';
import {TeachersService} from "../services";
import {TeacherModel} from "../models";

@Controller('teachers')
export class TeachersController {

    constructor(public readonly teachersService:TeachersService) {
    }

    @Get()
    getTeachers(){
    //     console.log(this.teachersService.getAllTeachers());
    return this.teachersService.getAllTeachers();
        // return this.teachersService.col.find().toArray();
;    }

    @Post()
    addTeacher(@Body() teacher:TeacherModel){
        console.log("POST/TEACHER ", teacher);
        // const teacherObj = {firstName:teacher.firstName,lastName:teacher.lastName};
        return this.teachersService.col.insertOne(teacher);
    }
}
