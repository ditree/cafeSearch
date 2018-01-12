import { Component, OnInit } from '@angular/core';
import { ManageCafeService } from '../services/manage-cafe.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EditCafeComponent } from '../edit-cafe/edit-cafe.component';
import { ICafe, Cafe } from '../../../data-models/cafes';
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

  add() {
    const dialogRef = this.dialog.open(EditCafeComponent, {
      width: '650px',
      data: { cafe: {
        title: '',
        address: {
            unit: '',
            house: '',
            street: '',
            city: '',
            country: '',
            postal: ''
        },
        position: {
            lat: 53.6325784,
            lng: 23.479206
        },
        phone: '',
        email: '',
        website: '',
        photo: '',
        rating: '',
        schedule: {
            mn: '',
            tu: '',
            we: '',
            th: '',
            fr: '',
            sa: '',
            su: ''
        }
      }, action: 'Add' }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        console.log('add', result);
        this.cafeService.addCafe(result).subscribe(() => {
          this.cafeService.getCafes().subscribe();
        });
      }
    });
  }

  edit(id) {
    const cafeData = this.cafeService.findCafe(id);
    console.log('edit called ', id);
    const dialogRef = this.dialog.open(EditCafeComponent, {
      width: '650px',
      data: { cafe: cafeData, action: 'Edit' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        this.cafeService.editCafe(result).subscribe(() => {
          this.cafeService.getCafes().subscribe();
        });
      }
    });
  }
  delete(id) {
    console.log('delete called ', id);
    this.cafeService.deleteCafe(id).subscribe(() => {
      this.cafeService.getCafes().subscribe();
    });
  }
}
