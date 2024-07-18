import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { StudentsDialogComponent } from './component/students-dialog/students-dialog.component';

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  fullName?: string;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  displayedColumns: string[] = ['fullName', 'age', 'actions'];
  dataSource: MatTableDataSource<Student>;

  students: Student[] = [
    { id: 1, firstName: 'Juan', lastName: 'Perez', age: 20 },
    { id: 2, firstName: 'Ana', lastName: 'Garcia', age: 22 },
    { id: 3, firstName: 'Carlos', lastName: 'Lopez', age: 21 },
    { id: 4, firstName: 'Maria', lastName: 'Martinez', age: 19 },
    { id: 5, firstName: 'Luis', lastName: 'Gonzalez', age: 23 },
    { id: 6, firstName: 'Laura', lastName: 'Rodriguez', age: 20 },
    { id: 7, firstName: 'Pedro', lastName: 'Fernandez', age: 22 },
    { id: 8, firstName: 'Sara', lastName: 'Sanchez', age: 21 },
    { id: 9, firstName: 'Jorge', lastName: 'Ramirez', age: 19 },
    { id: 10, firstName: 'Sofia', lastName: 'Torres', age: 23 }
  ];

  constructor(private matDialog: MatDialog) {
    this.students.forEach(student => {
      student.fullName = `${student.firstName} ${student.lastName}`;
    });
    this.dataSource = new MatTableDataSource(this.students);
  }

  ngOnInit(): void {}

  newStudent(): void {
    const dialogRef = this.matDialog.open(StudentsDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.students.push(result);
        this.dataSource.data = this.students;
      }
    });
  }

  editStudent(student: Student): void {
    const dialogRef = this.matDialog.open(StudentsDialogComponent, {
      data: student
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.students.findIndex(s => s.id === result.id);
        if (index !== -1) {
          this.students[index] = result;
          this.dataSource.data = this.students;
        }
      }
    });
  }

  deleteStudent(student: Student): void {
    this.students = this.students.filter(s => s.id !== student.id);
    this.dataSource.data = this.students;
  }
}
