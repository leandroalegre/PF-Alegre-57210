import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentsComponent } from './students.component';
import { StudentsDialogComponent } from './component/students-dialog/students-dialog.component';
import { FullNamePipe } from './pipes/full-name.pipe';
import { TitleSizeDirective } from './directives/title-size.directive';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentsDialogComponent,
    FullNamePipe,
    TitleSizeDirective
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule
  ],
  exports: [
    StudentsComponent
  ]
})
export class StudentsModule { }
