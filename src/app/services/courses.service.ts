import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Course } from '../model/course';
import { Lesson } from '../model/lesson';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  port = 3000;
  baseUrl = `http://localhost:${this.port}`;

  constructor(private http: HttpClient) { }

  findCourseById(courseId: number) : Observable<Course> {
    return this,this.http.get<Course>(`${this.baseUrl}/courses/${courseId}`);
  }

  findAllCourses() : Observable<Course[]> {
    return this.http.get(`${this.baseUrl}/courses`)
          .pipe(
            map(res => (res as any).payload)
          );
  }

  findAllCourseLessons(courseId: number) : Observable<Lesson[]> {
    return this.http.get(`${this.baseUrl}/lessons`, {
      params: new HttpParams()
          .set('courseId', courseId.toString())
          .set('pageNumber', "0")
          .set('pageSize', "1000")
    }).pipe(
      map(res => (res as any).payload)
    );
  }

  findLessons(
    courseId: number, sortOrder = 'asc',
    pageNumber = 0, pageSize = 3, sortColumn = 'seqNo') : Observable<Lesson[]> {
      return this.http.get(`${this.baseUrl}/lessons`, {
        params: new HttpParams()
            .set('courseId', courseId.toString())
            .set('sortOrder', sortOrder)
            .set('pageNumber', pageNumber)
            .set('pageSize', pageSize)
            .set('sortColumn', sortColumn)
    }).pipe(
      map(res => (res as any).payload)
    );
  }
}
