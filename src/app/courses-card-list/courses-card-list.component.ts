import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { MatDialog } from '@angular/material/dialog';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { openEditCourseDialog } from '../course-dialog/course-dialog.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.css']
})
export class CoursesCardListComponent implements OnInit {

  @Input() courses: Course[] | null = null;

  cols = 1;

  rowHeight = '500px';

  handsetPortrait = false;

  constructor(private dialog: MatDialog,
              private responsive: BreakpointObserver) {
  }

  ngOnInit(): void {

  }

  editCourse(course: Course) {
    openEditCourseDialog(this.dialog, course)
        .pipe(
            filter(val => !!val)
        ).subscribe(
             val => console.log('new course value: ', val)
        );
  }
}
