import {Component, Input, OnInit} from '@angular/core';
import {Course, CourseService} from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  isHidden = false;
  private courses: Course[];

  constructor(private cs: CourseService) { }

  ngOnInit() {
    this.cs.getMyCourses().subscribe(
      resut => this.courses = resut
    );
  }

}
