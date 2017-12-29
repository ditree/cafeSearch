import { Component, OnInit } from '@angular/core';
import { ManageCafeService } from '../services/manage-cafe.service';

@Component({
  selector: 'app-manage-cafes',
  templateUrl: './manage-cafes.component.html',
  styleUrls: ['./manage-cafes.component.css']
})
export class ManageCafesComponent implements OnInit {

  constructor(public cafeService: ManageCafeService) { }

  ngOnInit() {
    this.cafeService.getCafes().subscribe();
  }

}
