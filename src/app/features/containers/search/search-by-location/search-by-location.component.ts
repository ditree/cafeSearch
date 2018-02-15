import { Component, OnInit, ElementRef, NgZone } from '@angular/core';
import { ViewChild, ViewChildren, QueryList } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { SearchService } from '../services/search.service';
import { ILocation } from '../services/search.service';
import { ICafe, Cafe } from '../../../data-models/cafes';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import {  } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import * as _ from 'lodash';
import { LatLngBounds, LatLng } from '@agm/core/services/google-maps-types';
import { AgmSnazzyInfoWindow } from '@agm/snazzy-info-window';
@Component({
  selector: 'app-search-by-location',
  templateUrl: './search-by-location.component.html',
  styleUrls: ['./search-by-location.component.css']
})
export class SearchByLocationComponent implements OnInit {
  searchControl: FormControl = new FormControl();

  public zoom = 11;
  public message = '';
  public location: ILocation = {
    lat: 53.90,
    lng: 27.55
  };
  public place: string;
  public isDefined = false;
  public pathToIcon = 'assets/images/blue-marker.png';
  @ViewChild('search')
  public searchElementRef: ElementRef;
 /* @ViewChildren(AgmSnazzyInfoWindow) snazzyWindowChildren: QueryList<AgmSnazzyInfoWindow>
  selectFacility(marker_index) {
      const livewindow = this.snazzyWindowChildren.find(
        (window, i) => {
          return i === marker_index;
        });
      livewindow._openInfoWindow();
  };*/
  constructor(public searchService: SearchService,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
  private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
        iconRegistry.addSvgIcon(
        'search',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/ic_search_black_24px.svg'));
     }

  ngOnInit() {
    if (_.isEmpty(this.searchService.cafeList)) {
      this.searchService.getCafes().subscribe();
    }
    if (this.searchService.place !== '' && this.searchService.place !== undefined) {
      this.searchControl.setValue(this.searchService.getPlace());
    }
    if (this.searchService.location) {
      this.location = _.cloneDeep(this.searchService.getLocation());
      this.zoom = 13;
      this.isDefined = true;
    }
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        // types: ['address']
        componentRestrictions: {country: 'by'}
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            this.message = 'Not valid address';
            return;
          }
          this.message = '';
          this.location = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
          };
          this.isDefined = true;
          this.place = place.formatted_address;
          this.setPlace(this.location, this.place);
          this.zoom = 13;
        });
      });
    });

  }

  setBounds(bounds: LatLngBounds) {
    setTimeout(() => {
      this.searchService.search(bounds, this.isDefined);
    }, 100);
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.location.lat = position.coords.latitude;
        this.location.lng = position.coords.longitude;
        this.zoom = 13;
      });
    }
  }


  setPlace(loc: ILocation, place: string) {
    this.searchService.setLocation(loc);
    this.searchService.setPlace(place);
  }

}
