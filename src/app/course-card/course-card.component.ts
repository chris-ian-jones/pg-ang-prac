import { Component, OnInit, Input } from '@angular/core';
import { Course } from './../models/Course'

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input() course: Course

  constructor() { }

  ngOnInit() {
  }

}
