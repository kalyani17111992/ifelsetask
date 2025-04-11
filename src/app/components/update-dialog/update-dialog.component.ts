import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-update-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './update-dialog.component.html',
  styleUrl: './update-dialog.component.scss'
})
export class UpdateDialogComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormGroup({
        first_name: new FormControl(this.data.name?.first_name || '', Validators.required),
        last_name: new FormControl(this.data.name?.last_name || '', Validators.required)
      }),
      status: new FormControl(this.data.status, Validators.required),
      licence: new FormControl(this.data.licence, Validators.required),
      teams: new FormControl(this.data.teams?.map((t: any) => t.value).join(', ') || '', Validators.required)
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    const formValue = this.form.value;

    const updatedData = {
      ...this.data,
      name: {
        first_name: formValue.name.first_name,
        last_name: formValue.name.last_name,
      },
      status: formValue.status,
      licence: formValue.licence,
      teams: formValue.teams.split(',').map((val: string) => ({
        value: val.trim(),
        background_color: '#ccc',
        text_color: '#000'
      }))
    };

    this.dialogRef.close(updatedData);
  }
}
