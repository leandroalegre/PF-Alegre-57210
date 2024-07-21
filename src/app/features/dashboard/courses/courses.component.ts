import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Course } from '../../../models/index';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  displayedColumns: string[] = ['id', 'name', 'FechaInicio', 'FechaFin'];
  
  dataSource:Course[] = [
    {
      id: 1,
      name: "Introducción a la Programación",
      startDate: new Date("2024-07-15"),
      endDate: new Date("2024-09-15")
    },
    {
      id: 2,
      name: "Desarrollo Web con Angular",
      startDate: new Date("2024-08-01"),
      endDate: new Date("2024-10-01")
    },
    {
      id: 3,
      name: "Bases de Datos SQL",
      startDate: new Date("2024-09-10"),
      endDate: new Date("2024-11-20")
    },
    {
      id: 4,
      name: "Machine Learning y AI",
      startDate: new Date("2024-10-01"),
      endDate: new Date("2024-12-05")
    },
    {
      id: 5,
      name: "Desarrollo de Aplicaciones Móviles",
      startDate: new Date("2024-11-01"),
      endDate: new Date("2025-01-10")
    }
  ];

  // ngOnInit(): void {}
  
  // newStudent(): void {
  //   const dialogRef = this.matDialog.open(StudentsDialogComponent);
    
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.students.push(result);
  //       this.dataSource.data = this.students;
  //     }
  //   });
  // }
  
}