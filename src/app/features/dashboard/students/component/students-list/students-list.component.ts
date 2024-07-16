import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fullName', 'startDate', 'endDate'];
  students: Student[] = [];

  ngOnInit(): void {
    this.students = this.generateStudents();
  }

  generateStudents(): Student[] {
    return [
      { id: 1, firstName: 'Juan', lastName: 'Pérez', startDate: new Date('2024-01-01'), endDate: new Date('2024-06-30') },
      { id: 2, firstName: 'Ana', lastName: 'García', startDate: new Date('2024-02-01'), endDate: new Date('2024-07-30') },
      { id: 3, firstName: 'Luis', lastName: 'Rodríguez', startDate: new Date('2024-03-01'), endDate: new Date('2024-08-30') },
      { id: 4, firstName: 'Marta', lastName: 'Fernández', startDate: new Date('2024-04-01'), endDate: new Date('2024-09-30') },
      { id: 5, firstName: 'Carlos', lastName: 'López', startDate: new Date('2024-05-01'), endDate: new Date('2024-10-30') },
      { id: 6, firstName: 'Lucía', lastName: 'Martínez', startDate: new Date('2024-06-01'), endDate: new Date('2024-11-30') },
      { id: 7, firstName: 'Pedro', lastName: 'Gómez', startDate: new Date('2024-07-01'), endDate: new Date('2024-12-30') },
      { id: 8, firstName: 'Laura', lastName: 'Díaz', startDate: new Date('2024-08-01'), endDate: new Date('2025-01-30') },
      { id: 9, firstName: 'Miguel', lastName: 'Sánchez', startDate: new Date('2024-09-01'), endDate: new Date('2025-02-28') },
      { id: 10, firstName: 'Elena', lastName: 'Ramírez', startDate: new Date('2024-10-01'), endDate: new Date('2025-03-30') }
    ];
  }

  getFullName(student: Student): string {
    return `${student.firstName} ${student.lastName}`;
  }
}