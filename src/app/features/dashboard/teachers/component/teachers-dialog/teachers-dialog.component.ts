import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Teacher } from 'src/app/models/teacher.model'; // Importa el modelo desde la nueva ubicación

@Component({
  selector: 'app-teachers-dialog',
  templateUrl: './teachers-dialog.component.html',
  styleUrls: ['./teachers-dialog.component.scss']
})
export class TeachersDialogComponent implements OnInit {
  teacherForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TeachersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Teacher
  ) {
    this.teacherForm = this.fb.group({
      firstName: [data?.firstName || '', Validators.required],
      lastName: [data?.lastName || '', Validators.required],
      age: [data?.age || '', [Validators.required, Validators.min(18)]],
      email: [data?.email || '', [Validators.required, Validators.email]],
      phone: [data?.phone || '', Validators.required]
    });
  }

  ngOnInit(): void {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.teacherForm.valid) {
      const updatedTeacher: Teacher = {
        ...this.data,
        ...this.teacherForm.value,
        fullName: `${this.teacherForm.value.firstName} ${this.teacherForm.value.lastName}`
      };
      this.dialogRef.close(updatedTeacher);
    }
  }
}
