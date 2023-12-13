import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { RouterModule, Routes }   from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { WebDevelopmentCardComponent } from './web-development-card/web-development-card.component';
import { GridExampleCardComponent } from './grid-example-card/grid-example-card.component';
import { MatListModule }  from '@angular/material/list';
import { ListExampleCardComponent } from './list-example-card/list-example-card.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { AboutComponent } from './about/about.component';
import { CreateCourseStep1Component } from './create-course/create-course-step-1/create-course-step-1.component';
import { CreateCourseStep2Component } from './create-course/create-course-step-2/create-course-step-2.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { TreeDemoComponent } from './tree-demo/tree-demo.component';
import { VirtualScrollingComponent } from './virtual-scrolling/virtual-scrolling.component';

@NgModule({
    declarations: [
        AppComponent,
        WebDevelopmentCardComponent,
        GridExampleCardComponent,
        ListExampleCardComponent,
        HomeComponent,
        CourseComponent,
        CreateCourseComponent,
        AboutComponent,
        CreateCourseStep1Component,
        CreateCourseStep2Component,
        DragDropComponent,
        CoursesCardListComponent,
        CourseDialogComponent,
        TreeDemoComponent,
        VirtualScrollingComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        MatCardModule,
        RouterModule,
        MatGridListModule,
        MatListModule


    ]
})
export class AppModule { }
