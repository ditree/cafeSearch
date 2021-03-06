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
// import { resolve } from 'q';
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
        iconRegistry.addSvgIcon(
          'my_location',
          sanitizer.bypassSecurityTrustResourceUrl('assets/images/ic_my_location_black_24px.svg'));
     }

  ngOnInit() {
    let plc = '';
    if (_.isEmpty(this.searchService.cafeList)) {
      this.searchService.getCafes().subscribe();
    }
    if (this.searchService.place !== '' && this.searchService.place !== undefined) {
      plc = this.searchService.getPlace();
      this.searchControl.setValue(plc);
      this.searchService.setPlace(plc); // just to reset flag
    }
    if (this.searchService.location) {
      this.location = _.cloneDeep(this.searchService.getLocation());
      this.zoom = 15;
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
          this.zoom = 15;
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
        this.geoCoderCall().then((res) => {
          this.location.lat = position.coords.latitude;
          this.location.lng = position.coords.longitude;
          this.isDefined = true;
          this.setPlace(this.location, res.toString());
          this.zoom = 15;
        }, err => {
          this.location.lat = position.coords.latitude;
          this.location.lng = position.coords.longitude;
          this.isDefined = true;
          this.setPlace(this.location, '');
          this.zoom = 15;
        });
      });
    }
  }


  setPlace(loc: ILocation, place: string) {
    this.searchService.setLocation(loc);
    this.searchService.setPlace(place);
  }

  geoCoderCall() {
    const geocoder = new google.maps.Geocoder();
    const promise = new Promise((resolve, reject) => {
      geocoder.geocode({'location': this.location}, function(results, status){
          if (status === google.maps.GeocoderStatus.OK) {
              this.message = '';
              console.log('results[0]', results[0].formatted_address);
              resolve(results[0].formatted_address);
          } else {
              this.message = 'Not valid address';
              reject(status);
          }

      });
    });
    return promise;

}


}
