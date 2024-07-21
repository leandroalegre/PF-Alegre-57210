import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { TeachersDialogComponent } from './component/teachers-dialog/teachers-dialog.component';
import { Teacher } from '../../../models/teacher.model';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  displayedColumns: string[] = ['fullName', 'age', 'actions'];
  dataSource: MatTableDataSource<Teacher>;

  teachers: Teacher[] = [
    { 
      id: 1, 
      firstName: 'Laura', 
      lastName: 'Martinez', 
      age: 45, 
      email: 'laura.martinez@example.com', 
      phone: '555-1234',
      fullName: 'Laura Martinez' 
    },
    { 
      id: 2, 
      firstName: 'Pedro', 
      lastName: 'Gonzalez', 
      age: 50, 
      email: 'pedro.gonzalez@example.com', 
      phone: '555-5678',
      fullName: 'Pedro Gonzalez' 
    },
    { 
      id: 3, 
      firstName: 'Ana', 
      lastName: 'Lopez', 
      age: 39, 
      email: 'ana.lopez@example.com', 
      phone: '555-8765',
      fullName: 'Ana Lopez' 
    },
    { 
      id: 4, 
      firstName: 'Juan', 
      lastName: 'Fernandez', 
      age: 42, 
      email: 'juan.fernandez@example.com', 
      phone: '555-2345',
      fullName: 'Juan Fernandez' 
    },
    { 
      id: 5, 
      firstName: 'Maria', 
      lastName: 'Gomez', 
      age: 37, 
      email: 'maria.gomez@example.com', 
      phone: '555-3456',
      fullName: 'Maria Gomez' 
    },
    { 
      id: 6, 
      firstName: 'Carlos', 
      lastName: 'Diaz', 
      age: 48, 
      email: 'carlos.diaz@example.com', 
      phone: '555-4567',
      fullName: 'Carlos Diaz' 
    },
    { 
      id: 7, 
      firstName: 'Lucia', 
      lastName: 'Sanchez', 
      age: 43, 
      email: 'lucia.sanchez@example.com', 
      phone: '555-5679',
      fullName: 'Lucia Sanchez' 
    },
    { 
      id: 8, 
      firstName: 'Miguel', 
      lastName: 'Torres', 
      age: 41, 
      email: 'miguel.torres@example.com', 
      phone: '555-6789',
      fullName: 'Miguel Torres' 
    },
    { 
      id: 9, 
      firstName: 'Elena', 
      lastName: 'Ruiz', 
      age: 46, 
      email: 'elena.ruiz@example.com', 
      phone: '555-7890',
      fullName: 'Elena Ruiz' 
    },
    { 
      id: 10, 
      firstName: 'Jose', 
      lastName: 'Hernandez', 
      age: 44, 
      email: 'jose.hernandez@example.com', 
      phone: '555-8901',
      fullName: 'Jose Hernandez' 
    }
  ];
  

  constructor(private matDialog: MatDialog) {
    this.teachers.forEach(teacher => {
      teacher.fullName = `${teacher.firstName} ${teacher.lastName}`;
    });
    this.dataSource = new MatTableDataSource(this.teachers);
  }

  ngOnInit(): void {}

  newTeacher(): void {
    const dialogRef = this.matDialog.open(TeachersDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.teachers.push(result);
        this.dataSource.data = this.teachers;
      }
    });
  }

  editTeacher(teacher: Teacher): void {
    const dialogRef = this.matDialog.open(TeachersDialogComponent, {
      data: teacher
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.teachers.findIndex(t => t.id === result.id);
        if (index !== -1) {
          this.teachers[index] = result;
          this.dataSource.data = this.teachers;
        }
      }
    });
  }

  deleteTeacher(teacher: Teacher): void {
    this.teachers = this.teachers.filter(t => t.id !== teacher.id);
    this.dataSource.data = this.teachers;
  }
}
