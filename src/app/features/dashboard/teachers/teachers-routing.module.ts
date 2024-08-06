import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersComponent } from './teachers.component';
const routes: Routes = [
  {
    path: '',
    component: TeachersComponent,
    children: [
      // { path: 'dashboard', component: TeacherDashboardComponent },
      // { path: 'courses', component: TeacherCoursesComponent },
      // { path: 'assignments', component: TeacherAssignmentsComponent },
      // { path: 'attendance', component: TeacherAttendanceComponent },
      // { path: 'grades', component: TeacherGradesComponent },
      { path: '**', redirectTo: 'dashboard' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
