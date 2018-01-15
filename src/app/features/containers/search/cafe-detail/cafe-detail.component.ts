import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-cafe-detail',
  templateUrl: './cafe-detail.component.html',
  styleUrls: ['./cafe-detail.component.css']
})
export class CafeDetailComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
