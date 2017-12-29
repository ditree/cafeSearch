import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-edit-cafe',
  templateUrl: './edit-cafe.component.html',
  styleUrls: ['./edit-cafe.component.css']
})
export class EditCafeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditCafeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }

}
