import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TeachersModule } from './teachers/teachers.module';

const routes: Routes = [
      {
        path: 'home',
        //component: HomeComponent,
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'students',
        //component: StudentsComponent,
        loadChildren: () => import('./students/students.module').then(m => m.StudentsModule),

      },
      {
        path: 'courses',
        //component: CoursesComponent,
        loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule),
      },
      // {
      //   path: 'courses/:id',
      //   component: CourseDetailComponent,
      // },
      {
        path: 'teachers',
        // component: TeachersComponent,
        loadChildren:() => import('./teachers/teachers.module').then(m => m.TeachersModule),
      },
  {
    path: '**',
    redirectTo: '/dashboard/home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
