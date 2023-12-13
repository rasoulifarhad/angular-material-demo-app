import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { Inject } from '@angular/core';
import { CoursesService } from './courses.service';

export const courseResolver: ResolveFn<Course> = (route, state)  =>  {

  const courseService =  Inject(CoursesService);

  return courseService.findCourseById(route.params['id']);
};
