import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { CoursesComponent } from './features/dashboard/courses/courses.component';
import { StudentsComponent } from './features/dashboard/students/students.component';
import { TeachersComponent } from './features/dashboard/teachers/teachers.component';
import { CoursesDetailsComponent } from './features/dashboard/courses/pages/courses-details/courses-details.component';


const routes: Routes = [
{
  path: 'auth',
      component:  LoginComponent
},    
{
  path: 'inicio',
      component: CoursesComponent

},
{
  path: 'dashboard',
  component:  DashboardComponent,
    children:[
      {
        path: 'courses',
        component: CoursesComponent
  
      },

    {
      path: 'courses:id',
      component: CoursesDetailsComponent

    },
    {
      path: 'students',
      component: StudentsComponent

    },
    {
      path: 'teachers',
      component: TeachersComponent

    },
    // {
    //   path: '**',
    //   redirectTo: '/auth'

    // },
    
      // {
    //   path: 'administrations',
    //   component: AdminstrationsComponent

    // }    

    // {
    //   path: '**',
    //   redirectTo: '/auth'

    // },

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
