import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { CoursesComponent } from './features/dashboard/courses/courses.component';
import { StudentsComponent } from './features/dashboard/students/students.component';
import { TeachersComponent } from './features/dashboard/teachers/teachers.component';
import { CoursesDetailsComponent } from './features/dashboard/courses/pages/courses-details/courses-details.component';
import { HomeComponent } from './features/dashboard/home/home.component';
import { authGuard } from './core/guards/auth.guard';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then(
        (referenciaAlArchivo) => referenciaAlArchivo.AuthModule
      ),
    //component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'students',
        component: StudentsComponent,
      },
      {
        path: 'courses',
        component: CoursesComponent,
      },
      // {
      //   path: 'courses/:id',
      //   component: CourseDetailComponent,
      // },
      {
        path: 'teachers',
        component: TeachersComponent,
      },
      {
        path: '**',
        redirectTo: '/dashboard/home',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
