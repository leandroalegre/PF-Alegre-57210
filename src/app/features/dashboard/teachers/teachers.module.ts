import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers.component';
import { TeachersDialogComponent } from './component/teachers-dialog/teachers-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    TeachersComponent,
    TeachersDialogComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule
  ],
  exports: [
    TeachersComponent
  ]
})
export class TeachersModule { }
