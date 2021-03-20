import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  students = this.studentService.getStudents();
  constructor(private studentService: StudentService) { }
  ngOnInit(): void {
  }

  showMessage(): void {
    console.log('ABC');
    window.alert('ABC');
  }
}
