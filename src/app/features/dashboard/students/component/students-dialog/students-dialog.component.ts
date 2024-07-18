import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  fullName?: string;
}

@Component({
  selector: 'app-students-dialog',
  templateUrl: './students-dialog.component.html',
  styleUrls: ['./students-dialog.component.scss']
})
export class StudentsDialogComponent implements OnInit {
  studentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<StudentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student
  ) {
    // Inicializa el formulario en el constructor
    this.studentForm = this.fb.group({
      firstName: [this.data?.firstName || '', [Validators.required, Validators.minLength(3)]],
      lastName: [this.data?.lastName || '', [Validators.required, Validators.minLength(3)]],
      age: [this.data?.age || '', [Validators.required, Validators.min(1), Validators.max(120)]]
    });
  }

  ngOnInit(): void {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      const updatedStudent = {
        ...this.data,
        ...this.studentForm.value,
        fullName: `${this.studentForm.value.firstName} ${this.studentForm.value.lastName}`
      };
      this.dialogRef.close(updatedStudent);
    } else {
      this.studentForm.markAllAsTouched(); 
    }
  }
}
