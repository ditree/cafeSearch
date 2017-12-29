import { Component, OnInit } from '@angular/core';
import { ManageCafeService } from '../services/manage-cafe.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EditCafeComponent } from '../edit-cafe/edit-cafe.component';
import { ICafe } from '../../../data-models/cafes';
@Component({
  selector: 'app-manage-cafes',
  templateUrl: './manage-cafes.component.html',
  styleUrls: ['./manage-cafes.component.css']
})
export class ManageCafesComponent implements OnInit {

  constructor(public cafeService: ManageCafeService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.cafeService.getCafes().subscribe();
  }

  edit(id) {
    const cafeData = this.cafeService.findCafe(id);
    console.log('edit called ', id);
    const dialogRef = this.dialog.open(EditCafeComponent, {
      width: '650px',
      data: { cafe: cafeData }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.cafeService.editCafe(result).subscribe();
    });
  }
  delete(id) {
    console.log('delete called ', id);
    this.cafeService.deleteCafe(id).subscribe();
  }
}
