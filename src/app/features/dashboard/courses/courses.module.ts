import { NgModule } from '@angular/core';
import { CommonModule, DatePipe} from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import {MatTableModule} from '@angular/material/table'; 
import { CoursesComponent } from './courses.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CoursesDetailsComponent } from './pages/courses-details/courses-details.component';


@NgModule({
  declarations: [CoursesComponent, CoursesDetailsComponent],
  exports:[CoursesComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,


  ],
  providers: [DatePipe],
})
export class CoursesModule { }
