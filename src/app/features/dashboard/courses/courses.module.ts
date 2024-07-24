import { NgModule } from '@angular/core';
import { CommonModule, DatePipe} from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CoursesDetailsComponent } from './pages/courses-details/courses-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [CoursesComponent, CoursesDetailsComponent, CourseDialogComponent],
  exports:[CoursesComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    SharedModule,

  ],
  providers: [DatePipe],
})
export class CoursesModule { }
