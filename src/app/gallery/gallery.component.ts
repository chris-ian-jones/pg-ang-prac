import { Component, OnInit } from '@angular/core';

import { CourseService } from './../course-service.service'
import { Course } from './../models/Course'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  courses:Course[]

  constructor(private courseService:CourseService) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses
    })
  }

}
