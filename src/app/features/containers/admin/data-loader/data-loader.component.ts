import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-loader',
  templateUrl: './data-loader.component.html',
  styleUrls: ['./data-loader.component.css']
})
export class DataLoaderComponent implements OnInit {
  @Input() loading: boolean;
  constructor() {
    this.loading = false;
   }

  ngOnInit() {
  }

}
