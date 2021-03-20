import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface Student{
  name: string;
  age: number;
}

interface IStudent {
  addStudent(student: Student): void;
  getListStudents(): Student[];
}

@Injectable({
  providedIn: 'root'
})

export class StudentService implements IStudent{
  students: Student[];

  constructor(private http: HttpClient) { }

  addStudent(student: Student): void {
    window.alert('hello');
    this.students.push(student);
  }

  getListStudents(): Student[] {
    return this.students;
  }
  // tslint:disable-next-line:typedef
  getStudents() {
    return this.http.get('/assets/student.json');
  }
}
