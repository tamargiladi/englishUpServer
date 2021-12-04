import { Module } from '@nestjs/common';
import {DbProvider} from "./providers";
import {TeachersProvider} from "./providers/teachers.provider";
import {StudentsService, TeachersService} from "./services";
import {StudentsController, TeachersController} from "./controllers";
import {StudentsProvider} from "./providers/students.provider";

@Module({
  controllers:[TeachersController, StudentsController],
  providers: [TeachersService,StudentsService,
    DbProvider,
    TeachersProvider,
    StudentsProvider
    ,
  ],
})
export class AppModule {}
