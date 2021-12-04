import { WithId } from 'mongodb';

// plain object
export interface StudentModel {
  firstName: string;
  lastName: string;
}

// CRUD object
export type UpdateStudent = Partial<StudentModel>;

// Mongo object
export type DbStudent = WithId<StudentModel>;


