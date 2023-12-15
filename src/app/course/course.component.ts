import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Course } from '../model/course';
import { Lesson } from '../model/lesson';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { catchError, finalize, merge, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit, AfterViewInit {

  course: Course | undefined;

  lessons: Lesson[] = [];

  loading = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  selection = new SelectionModel<Lesson>(true, []);

  constructor(private route: ActivatedRoute,
              private courseService: CoursesService) {}

  displayedColumns = ['select', 'seqNo', "description", "duration"];

  expandedLesson: Lesson | null = null;

  ngOnInit(): void {

    this.course = this.route.snapshot.data['course'];
    console.log('course: ', this.course);
    this.loadLessonsPage();
    console.log('lessons: ', this.lessons  );
  }

  loadLessonsPage() {
    this.loading = true;
    this.courseService.findLessons(
              this.course!.id,
              this.sort?.direction ?? 'asc',
              this.paginator?.pageIndex ?? 0,
              this.paginator?.pageSize ?? 3,
              this.sort?.active ?? 'seqNo')
              .pipe(
                tap(lessions => this.lessons = lessions),
                catchError(err => {
                  console.log('Erro loading lessons', err);
                  alert('Error loading lessons.');
                  return throwError(err);
                }),
                finalize(() => this.loading = false)
              )
              .subscribe();
  }

  onLessonToggled(lesson: Lesson) {
    this.selection.toggle(lesson);
    console.log(this.selection.selected);
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
        .pipe(
          tap(() => this.loadLessonsPage())
        )
        .subscribe();
  }

  onToggleLesson(lesson: Lesson) {
    if(lesson == this.expandedLesson) {
      this.expandedLesson = null;
    } else {
      this.expandedLesson = lesson;
    }
  }

  isAllSelected() {
    return this.selection.selected?.length === this.lessons?.length;
  }

  toggleAll() {
    if(this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.selection.select(...this.lessons);
    }
  }
}
