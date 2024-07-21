import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers.component';
import { TeachersDialogComponent } from './component/teachers-dialog/teachers-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    TeachersComponent,
    TeachersDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ],
  exports: [
    TeachersComponent
  ]
})
export class TeachersModule { }
