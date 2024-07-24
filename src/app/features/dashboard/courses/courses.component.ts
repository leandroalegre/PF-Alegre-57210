import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { Course } from './models/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'startDate', 'endDate', 'actions'];
  dataSource: MatTableDataSource<Course>;

  courses: Course[] = [
    { id: 1, name: "Introducción a la Programación", startDate: new Date("2024-07-15"), endDate: new Date("2024-09-15") },
    { id: 2, name: "Desarrollo Web con Angular", startDate: new Date("2024-08-01"), endDate: new Date("2024-10-01") },
    { id: 3, name: "Bases de Datos SQL", startDate: new Date("2024-09-10"), endDate: new Date("2024-11-20") },
    { id: 4, name: "Machine Learning y AI", startDate: new Date("2024-10-01"), endDate: new Date("2024-12-05") },
    { id: 5, name: "Desarrollo de Aplicaciones Móviles", startDate: new Date("2024-11-01"), endDate: new Date("2025-01-10") }
  ];

  constructor(private matDialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.courses);
  }

  ngOnInit(): void {}

  newCourse(): void {
    const dialogRef = this.matDialog.open(CourseDialogComponent, {
      width: '600px',
      data: { course: {} as Course }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.courses.push(result);
        this.dataSource.data = this.courses;
      }
    });
  }

  editCourse(course: Course): void {
    const dialogRef = this.matDialog.open(CourseDialogComponent, {
      width: '600px',
      data: { course }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.courses.findIndex(c => c.id === result.id);
        if (index !== -1) {
          this.courses[index] = result;
          this.dataSource.data = this.courses;
        }
      }
    });
  }

  deleteCourse(course: Course): void {
    this.courses = this.courses.filter(c => c.id !== course.id);
    this.dataSource.data = this.courses;
  }
}
