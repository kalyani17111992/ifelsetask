// add-dialog.component.ts

import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogClose, MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-dialog',
  standalone:true,
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss'],
  imports: [
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    

    
  ]})
export class AddDialogComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      licence: new FormControl('', Validators.required),
      teams: new FormControl('', Validators.required),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    const raw = this.form.value;
  
    const newEntry = {
      name: {
        first_name: raw.name.split(' ')[0] || '',
        last_name: raw.name.split(' ')[1] || '',
      },
      status: raw.status,
      licence: raw.licence,
      teams: [
        {
          value: raw.teams,
         },
      ],
      role: raw.role || 'User',
      license_used: Math.floor(Math.random() * 100), // just for fun
    };
  
    this.dialogRef.close(newEntry);
  }
  
}