import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCourseStep2Component } from './create-course-step-2.component';

describe('CreateCourseStep2Component', () => {
  let component: CreateCourseStep2Component;
  let fixture: ComponentFixture<CreateCourseStep2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCourseStep2Component]
    });
    fixture = TestBed.createComponent(CreateCourseStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
