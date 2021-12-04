import {ObjectId, WithId} from 'mongodb';

// plain object
export interface TeacherModel {
  id:string;
  firstName: string;
  lastName: string;
}

// CRUD object
export type UpdateTeacher = Partial<TeacherModel>;

// Mongo object
export type DbTeacher = WithId<TeacherModel>;


