import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { SearchService } from '../services/search.service';
import { ICafe, Cafe } from '../../../data-models/cafes';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import * as _ from 'lodash';
@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})
export class SearchByNameComponent implements OnInit {

  searchControl: FormControl = new FormControl();
  constructor(public searchService: SearchService,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
      iconRegistry.addSvgIcon(
        'search',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/ic_search_black_24px.svg'));
    }

  ngOnInit() {
    if (_.isEmpty(this.searchService.cafeList)) {
      this.searchService.getCafes().subscribe();
    }
    if (this.searchService.searchValue !== '') {
      this.searchControl.setValue(this.searchService.searchValue);
    }
    this.searchControl.valueChanges
    .subscribe((val) => {
      this.searchService.filter(val);
    });

  }


}
