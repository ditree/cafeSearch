import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Rx';
import { HttpServerService } from '../../../../core/http-server/http-server.service';
import { ICafe, Cafe } from '../../../data-models/cafes';
import * as _ from 'lodash';
import { LatLngBounds, LatLng } from '@agm/core/services/google-maps-types';

export interface ILocation {
  lat: number;
  lng: number;
}
/*export class LatLngImpl implements LatLng {
  private _lat: number;
  private _lng: number;
  'constructor'(lat: number, lng: number) {
    this._lat = lat;
    this._lng = lng;
  }
  lat() { return this._lat; }
  lng() { return this._lng; }
}*/

@Injectable()
export class SearchService {
  cafePromise: any = {};
  cafeList: ICafe[] = [];
  filteredList: ICafe[] = [];
  markersList: any[] = [];
  listLoading = false;
  searchValue = '';
  // searchLocation = '';
  location: ILocation;
  place = '';
  expandedBounds: any = null;
  isAddressUpdated = false;
  // coordinates: LatLng;
  constructor(private httpServer: HttpServerService) { }

  getCafes(): Observable<ICafe[]> {
    this.listLoading = true;
     this.cafePromise = this.httpServer.getHttp('/cafes').map((response: Response) => {
       return (<any>response).map(item => {
         return new Cafe({
             id: item._id,
             title: item.title,
             address: {
               unit: item.address.unit,
               house: item.address.house,
               street: item.address.street,
               city: item.address.city,
               country: item.address.country,
               postal: item.address.postal
             },
             position: {
                 lat: item.position.lat,
                 lng: item.position.lng
             },
             phone: item.phone,
             email: item.email,
             website: item.website,
             photo: item.photo,
             rating: item.rating,
             schedule: {
                 mn: item.schedule.mn,
                 tu: item.schedule.tu,
                 we: item.schedule.we,
                 th: item.schedule.th,
                 fr: item.schedule.fr,
                 sa: item.schedule.sa,
                 su: item.schedule.su
             }
         });
       });
     })
     .flatMap(result => {
       this.cafeList = <ICafe[]>result;
       console.log('cafe list', this.cafeList);
       this.listLoading = false;
       return Observable.of(this.cafeList);
     })
     .catch(reason => {
       console.log('Loading of cafes was failed', reason);
       this.listLoading = false;
       throw Observable.throw(reason);
     });
     return this.cafePromise;
   }

   filter(value: string) {
     console.log(this.cafeList);
     console.log(value);
      if (value === '' || value === null || value === undefined || _.isEmpty(this.cafeList)) {
        this.filteredList = [];
      } else {
        this.filteredList = _.filter(this.cafeList, (item) => {
          const title = _.lowerCase(item.title);
          const search = _.lowerCase(value);
          return title.indexOf(search) !== -1;
        });
        this.searchValue = value;
      }
      console.log('filtered list', this.filteredList);
   }

   getLocation() {
     return this.location;
   }
   setLocation(val: ILocation) {
    // const temp = new LatLngImpl();
    // temp.constructor(val.lat, val.lng);
    // this.coordinates = <LatLng>temp;
    this.location = _.cloneDeep(val);
   }
   getPlace() {
     return  this.place;
   }
   setPlace(val: string) {
     this.place = val;
     this.isAddressUpdated = true;
   }

   search(bounds: LatLngBounds, isInit: boolean) {
      if (isInit) {
        this.markersList.length = 0;
        this.markersList = this.filterMarkers(bounds);
      }
    }

  filterMarkers(bounds: LatLngBounds) {
    const sortedList: any[] = this.sortMarkers();
    const containList: any[] = this.isContain(sortedList, bounds);

    if (containList.length === 0 && this.isAddressUpdated) {
        bounds.extend(<LatLng>sortedList[0].position); // get the first closest
        this.expandedBounds = bounds;
        this.isAddressUpdated = false;
        // vm.map.fitBounds(bounds);
        // vm.map.setCenter(bounds.getCenter());
        // containList = this.isContain(sortedList, bounds);
        // console.log('updated list', containList);
    }
    return containList;
  }

 sortMarkers() {
    const currentPosition = new google.maps.LatLng(this.location.lat, this.location.lng);
    let sortedList: any[] = [];
    // const temp = new LatLngImpl();
    // let locObj: LatLng;
    let distance: any;
    _.forEach(this.cafeList, function(value, key){
        // temp.constructor(value.position.lat, value.position.lng);
        // locObj = <LatLng>temp;
        distance = new google.maps.LatLng(value.position.lat, value.position.lng);
        sortedList.push(value);
        sortedList[key].distance = _.round(google.maps.geometry.spherical.computeDistanceBetween(distance, currentPosition) / 1000, 1);
        // sortedList[key].LatLng = locObj;
    });

    sortedList = _(sortedList)
        .orderBy('distance', 'asc')
        .value();


    return sortedList;
}

  isContain(sortedList: any[], bounds: LatLngBounds): any[] {
      const containList: any[] = [];

      _.forEach(sortedList, function(value, key){
          if (bounds.contains(<LatLng>sortedList[key].position)) {
              containList.push(sortedList[key]);
          }
      });

      return containList;
  }

}

