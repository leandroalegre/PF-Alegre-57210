import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';

const routes: Routes = [
  { path: '', component: StudentsComponent },
  // { path: 'add', component: AddStudentComponent },
  // { path: 'edit/:id', component: EditStudentComponent },
  // { path: 'delete/:id', component: DeleteStudentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
