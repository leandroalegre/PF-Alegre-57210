import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,

  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    BrowserModule,
    MatTableModule,
    ReactiveFormsModule,
    MatDialogModule,
  ]
})
export class SharedModule { }
