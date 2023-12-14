import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  beginnerCourses$: Observable<Course[]> | undefined;
  advancedCourses$: Observable<Course[]> | undefined;

  constructor(private courseService: CoursesService) {}

  ngOnInit(): void {
    const courses$ = this.courseService.findAllCourses();

    this.beginnerCourses$ = courses$.pipe(
      map(courses => courses.filter(course => course.category === 'BEGINNER'))
    );

    this.advancedCourses$ = courses$.pipe(
      map(courses => courses.filter(course => course.category === 'ADVANCED'))
    );
  }
}
