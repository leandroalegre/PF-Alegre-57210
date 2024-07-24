import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss']
})
export class CourseDialogComponent implements OnInit {
  courseForm!: FormGroup;
  today: Date = new Date();

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { course: Course }
  ) {}

  ngOnInit(): void {
    this.courseForm = this.fb.group({
      id: [this.data.course?.id || ''],
      name: [this.data.course?.name || '', Validators.required],
      startDate: [this.data.course?.startDate || '', Validators.required],
      endDate: [this.data.course?.endDate || '', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.courseForm.valid) {
      this.dialogRef.close(this.courseForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
