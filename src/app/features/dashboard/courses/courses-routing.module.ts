import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  // { path: 'add', component: CourseAddComponent },
  // { path: ':id', component: CourseDetailComponent },
  // { path: ':id/edit', component: CourseEditComponent },
  // { path: ':id/delete', component: CourseDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
